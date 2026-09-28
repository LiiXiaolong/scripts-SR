// priority: 1

const MagicData = Java.loadClass('io.redspace.ironsspellbooks.api.magic.MagicData')
const PacketDistributor = Java.loadClass('io.redspace.ironsspellbooks.setup.PacketDistributor')
const SyncManaPacket = Java.loadClass('io.redspace.ironsspellbooks.network.SyncManaPacket')
const SpellDamageSource = Java.loadClass('io.redspace.ironsspellbooks.damage.SpellDamageSource')
const AttributeRegistry = Java.loadClass('io.redspace.ironsspellbooks.api.registry.AttributeRegistry')
const SpellPreCastEvent = Java.loadClass('io.redspace.ironsspellbooks.api.events.SpellPreCastEvent')
const SpellRegistry = Java.loadClass('io.redspace.ironsspellbooks.api.registry.SpellRegistry')
const CastSource = Java.loadClass('io.redspace.ironsspellbooks.api.spells.CastSource')
const MinecraftForge = Java.loadClass('net.minecraftforge.common.MinecraftForge')
const ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation')
const UpdateCastingStatePacket = Java.loadClass('io.redspace.ironsspellbooks.network.casting.UpdateCastingStatePacket')
const OnCastStartedPacket = Java.loadClass('io.redspace.ironsspellbooks.network.casting.OnCastStartedPacket')

function isbGetSpell(spellId) {
  let rl = ResourceLocation.parse(String(spellId))
  let reg = SpellRegistry.REGISTRY.get()
  let spell = reg.getValue(rl)
  return spell != null ? spell : SpellRegistry.none()
}

// --- Helpers ---
function isbMagicData(player) {
  // direct API; fallback to mixin method name if needed
  if (player && player["irons_spellbooks$getMagicData"]) return player["irons_spellbooks$getMagicData"]()
  return MagicData.getPlayerMagicData(player)
}



// 3) did THIS player hurt an enemy with a spell? -> returns spell id (or null)
// Use this with a Forge LivingHurtEvent damage source, OR with SpellDamageEvent.getSpellDamageSource().
global.getSpellIdIfPlayerSpellDamage = (player, damageSource) => {
  if (!player || !damageSource) return null

  // Guard: only attempt extraction for ISB SpellDamageSource. If class metadata is
  // unavailable, we still try extraction under try/catch.
  try {
    let cls = ''
    try {
      if (damageSource.getClass) cls = String(damageSource.getClass())
      else if (damageSource['class']) cls = String(damageSource['class'])
    } catch (ignored2) {}
    if (cls && cls.indexOf('SpellDamageSource') === -1) return null
  } catch (ignored) {}

  // Best-effort extraction across wrapper variants.
  try {
    if (typeof damageSource.spell === 'function') {
      let spell = damageSource.spell()
      if (spell) {
        if (typeof spell.getSpellId === 'function') return String(spell.getSpellId())
        if (spell.getSpellId != null) return String(spell.getSpellId)
      }
    }
  } catch (ignored) {}

  try {
    if (typeof damageSource.getSpellId === 'function') return String(damageSource.getSpellId())
  } catch (ignored) {}

  // Fallback: if we can't introspect the source, use the last cast spell id
  // (written by server_scripts/JSfunctions/lastSpellCast.js).
  try {
    let last = null
    if (player.persistentData && typeof player.persistentData.getString === 'function') {
      last = player.persistentData.getString('last_spell')
    } else if (player.persistentData) {
      last = player.persistentData.last_spell
    }
    if (last) return String(last)
  } catch (ignored) {}

  return null
}


// 4) is the player currently casting?
global.isPlayerCastingSpell = (player) => isbMagicData(player).isCasting()


//_______________________________________________________________________________________________________________________
// --- Event listeners ---
// 5) spellOnCast: runs when the spell actually casts (cast-time finished)
ForgeEvents.onEvent('io.redspace.ironsspellbooks.api.events.SpellOnCastEvent', (e) => {
  let player = e.getEntity()
  let spellId = e.getSpellId()
  let spellLevel = e.getSpellLevel()
  // your code here (example):
  // console.log(`[ISB] onCast ${player.getName().getString()} cast ${spellId} lvl ${spellLevel}`)
})

// 6) spellPreCast: runs right before casting starts (cancelable)
ForgeEvents.onEvent('io.redspace.ironsspellbooks.api.events.SpellPreCastEvent', (e) => {
  let player = e.getEntity()
  let spellId = e.getSpellId()
  // your code here (example):
  // if (spellId === 'irons_spellbooks:fireball') e.setCanceled(true)
})

//_______________________________________________________________________________________________________________________


// Increase spell level safely BEFORE it casts
ForgeEvents.onEvent('io.redspace.ironsspellbooks.api.events.ModifySpellLevelEvent', e => {
  let player = e.getEntity()
  if (!player || !player.isPlayer()) return

  let affinity_gems = global.handleAffinityGems(player)
  if (!affinity_gems || affinity_gems.length == 0) return

  let spellSchool = String(e.getSpell().getSchoolType().getId().getPath()) // "blood", "fire", etc

  let added = 0
  affinity_gems.forEach(gem => {
    if (gem.includes('exalted')) {
      let affinity_school = gem.split('_')[1]
      if (spellSchool == affinity_school) added += 3
    } else if (gem.includes('superior')) {
      let affinity_school = gem.split('_')[1]
      if (spellSchool == affinity_school) added += 2
    } else {
      if (spellSchool == gem) added += 1
    }
  })

  if (added <= 0) return

  // Clamp to the spell's max level so it can't crash spells that assume 1..max
  let max = e.getSpell().getMaxLevel()
  e.setLevel(Math.min(max, e.getLevel() + added))
})

// Re-emit Irons Spellbooks Forge events as easy JS callbacks.

// kubejs/server_scripts/0_isb_events.js

/**
 * @typedef {Object} ISBPreCastContext
 * @property {*} player
 * @property {string} spellId
 * @property {number} spellLevel
 * @property {*} castSource
 * @property {*} schoolType
 * @property {boolean} cancel
 * @property {(v:boolean)=>void} setCanceled
 */

/**
 * @typedef {Object} ISBOnCastContext
 * @property {*} player
 * @property {string} spellId
 * @property {number} spellLevel
 * @property {number} manaCost
 * @property {*} castSource
 * @property {*} schoolType
 * @property {(lvl:number)=>void} setSpellLevel
 * @property {(cost:number)=>void} setManaCost
 */


function toInt(v, fallback) {
  v = Number(v)
  if (isNaN(v) || !isFinite(v)) return fallback
  return Math.floor(v)
}

function clampSpellLevel(spellId, lvl) {
  try {
    const spell = SpellRegistry.REGISTRY.get().getValue(ResourceLocation.parse(String(spellId)))
    if (spell != null) {
      const max = spell.getMaxLevel()
      if (lvl > max) lvl = max
    }
  } catch (ignored) {}
  if (lvl < 1) lvl = 1
  return lvl
}

global.ISBEvents = global.ISBEvents ?? (() => {
  /** @type {Array<(ctx: ISBPreCastContext)=>void>} */
  let preCast = []
  /** @type {Array<(ctx: ISBOnCastContext)=>void>} */
  let onCast = []

  return {
    /** @param {(ctx: ISBPreCastContext)=>void} cb */
    onPreCast(cb) { preCast.push(cb) },

    /** @param {(ctx: ISBOnCastContext)=>void} cb */
    onCast(cb) { onCast.push(cb) },

    _emitPreCast(e) {
      /** @type {ISBPreCastContext} */
      let ctx = {
        player: e.getEntity(),
        spellId: String(e.getSpellId()),
        spellLevel: e.getSpellLevel(),
        castSource: e.getCastSource(),
        schoolType: e.getSchoolType(),
        cancel: false,
        setCanceled: function (v) { ctx.cancel = !!v }
      }

      for (let cb of preCast) {
        if (cb(ctx) === false) ctx.cancel = true
      }
      if (ctx.cancel) e.setCanceled(true)
    },

    _emitOnCast(e) {
      /** @type {ISBOnCastContext} */
      let ctx = {
        player: e.getEntity(),
        spellId: String(e.getSpellId()),
        spellLevel: e.getSpellLevel(),
        manaCost: e.getManaCost(),
        castSource: e.getCastSource(),
        schoolType: e.getSchoolType(),
        setSpellLevel: function (lvl) { ctx.spellLevel = toInt(lvl, ctx.spellLevel) },
        setManaCost: function (cost) { ctx.manaCost = toInt(cost, ctx.manaCost) }
      }

      for (let cb of onCast) cb(ctx)

      ctx.spellLevel = clampSpellLevel(ctx.spellId, ctx.spellLevel)
      if (ctx.manaCost < 0) ctx.manaCost = 0

      if (ctx.spellLevel !== e.getSpellLevel()) e.setSpellLevel(ctx.spellLevel)
      if (ctx.manaCost !== e.getManaCost()) e.setManaCost(ctx.manaCost)
    }
  }
})()

ForgeEvents.onEvent('io.redspace.ironsspellbooks.api.events.SpellPreCastEvent', e => global.ISBEvents._emitPreCast(e))
ForgeEvents.onEvent('io.redspace.ironsspellbooks.api.events.SpellOnCastEvent', e => global.ISBEvents._emitOnCast(e))









