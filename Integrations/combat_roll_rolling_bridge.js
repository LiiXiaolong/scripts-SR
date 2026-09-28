// Priority: 900

const CR_CombatRoll = Java.loadClass('net.combatroll.CombatRoll')
const CR_ServerSideRollEvents = Java.loadClass('net.combatroll.api.event.ServerSideRollEvents')
const CR_PlayerStartRolling = Java.loadClass('net.combatroll.api.event.ServerSideRollEvents$PlayerStartRolling')
const CR_MobEffectInstance = Java.loadClass('net.minecraft.world.effect.MobEffectInstance')
const CR_ForgeRegistries = Java.loadClass('net.minecraftforge.registries.ForgeRegistries')
const CR_ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation')
const CR_ROLLING_EFFECT_ID = new CR_ResourceLocation('kubejs:rolling')
const CR_DEFAULT_ROLL_TICKS = 12

function crRollingDurationTicks() {
  let duration = CR_DEFAULT_ROLL_TICKS
  try {
    duration = Number(CR_CombatRoll.config.roll_duration) || duration
  } catch (err) {}

  return Math.max(1, Math.floor(duration) + 2)
}

function crEntityUuid(entity) {
  try {
    if (entity.uuid) return String(entity.uuid)
  } catch (err) {}

  try {
    return String(entity.getUUID())
  } catch (err) {}

  return ''
}

function crEntityLevel(entity) {
  try {
    if (entity.level) return entity.level
  } catch (err) {}

  try {
    return entity.level()
  } catch (err) {}

  return null
}

function crEntityCoord(entity, prop, getter) {
  try {
    let value = Number(entity[prop])
    if (Number.isFinite(value)) return value
  } catch (err) {}

  try {
    let value = Number(entity[getter]())
    if (Number.isFinite(value)) return value
  } catch (err) {}

  return 0
}

function crApplyRollingEffect(player) {
  let duration = crRollingDurationTicks()

  try {
    let effect = CR_ForgeRegistries.MOB_EFFECTS.getValue(CR_ROLLING_EFFECT_ID)
    if (effect) {
      player.addEffect(new CR_MobEffectInstance(effect, duration, 0, false, false, true))
      return duration
    }
  } catch (err) {}

  try {
    if (player.potionEffects) {
      player.potionEffects.add('kubejs:rolling', duration, 0, false, true)
      return duration
    }
  } catch (err) {}

  try {
    let uuid = crEntityUuid(player)
    if (uuid) Utils.server.runCommandSilent(`/effect give ${uuid} kubejs:rolling 1 0 true`)
  } catch (err) {}

  return duration
}

function crIsRollCollisionTarget(player, entity) {
  if (!entity || entity === player) return false

  try {
    if (entity.persistentData && entity.persistentData.getBoolean('combat_roll_shattering_hit')) return false
  } catch (err) {}

  try {
    if (entity.tags && entity.tags.contains('boss')) return false
  } catch (err) {}

  try {
    if (typeof isAlly === 'function' && isAlly(player, entity, true)) return false
  } catch (err) {}

  try {
    if (typeof entity.isAlive === 'function' && !entity.isAlive()) return false
  } catch (err) {}

  try {
    if (typeof entity.isDeadOrDying === 'function' && entity.isDeadOrDying()) return false
  } catch (err) {}

  try {
    if (typeof entity.isMonster === 'function') return !!entity.isMonster()
  } catch (err) {}

  try {
    return !!entity.isMonster
  } catch (err) {}

  return false
}

function crApplyShatteringBlow(player, target, level) {
  try {
    target.persistentData.putBoolean('combat_roll_shattering_hit', true)
  } catch (err) {}

  try {
    applyEffect(target, 'minecells:stunned', 60 * level, 0, 'shattering_blow:combat_roll', player)
  } catch (err) {
    try {
      target.potionEffects.add('minecells:stunned', 60 * level, 0, true, true)
    } catch (ignored) {}
  }

  Utils.server.scheduleInTicks(25, () => {
    try {
      if (target && target.persistentData) target.persistentData.putBoolean('combat_roll_shattering_hit', false)
    } catch (err) {}
  })
}

function crProbeShatteringBlow(player, level) {
  let levelObj = crEntityLevel(player)
  if (!levelObj) return

  let x = crEntityCoord(player, 'x', 'getX')
  let y = crEntityCoord(player, 'y', 'getY')
  let z = crEntityCoord(player, 'z', 'getZ')
  let radius = 1.5
  let box = AABB.of(x - radius, y - 1, z - radius, x + radius, y + 1, z + radius)

  let targets = []
  try {
    targets = levelObj.getEntitiesWithin(box).filter(entity => crIsRollCollisionTarget(player, entity))
  } catch (err) {
    return
  }

  if (targets.length <= 0) return
  crApplyShatteringBlow(player, targets[0], level)
}

function crScheduleShatteringBlowProbe(player, duration) {
  let level = 0
  try {
    if (typeof skillTotemCheck === 'function') level = Number(skillTotemCheck(player, 'shattering_blow') || 0)
  } catch (err) {}

  if (level <= 0) return

  for (let tick = 0; tick < duration; tick++) {
    Utils.server.scheduleInTicks(tick, () => crProbeShatteringBlow(player, level))
  }
}

if (!global.__combatRollRollingBridgeRegistered) {
  global.__combatRollRollingBridgeRegistered = true
  global.__combatRollRollingBridgeHandler = JavaAdapter(CR_PlayerStartRolling, {
    onPlayerStartedRolling(player, velocity) {
      let duration = crApplyRollingEffect(player)
      crScheduleShatteringBlowProbe(player, duration)
    }
  })

  CR_ServerSideRollEvents.PLAYER_START_ROLLING.register(global.__combatRollRollingBridgeHandler)
}
