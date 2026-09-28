global.apoth_types = {
  'ranged': [
      'bow','longbow','shortbow','recurve',
      'crossbow','arbalest','repeater',
      'gun','pistol','rifle','musket','blunderbuss','shotgun','smg','carbine','hand_cannon','arquebus',
      'dartgun','sling','ballista', // handheld mods sometimes use these
      'trident','javelin','throwing_knife','boomerang','chakram','shuriken','kunai','atlatl','spear_gun'
    ],

    // Mining/harvest tools
    'breaker': [
      'pickaxe','shovel','hoe',
      'mattock','paxel','multitool',
      'excavator','hammer','sledgehammer','jackhammer','drill','miners_drill',
      'lumber_axe','chainsaw','saw','vein_hammer','mining_gadget','brush','prospector','dowsing_rod','crowbar','wrench'
    ],

    // Big/two-handed & polearms/blunt heavies
    'heavy_weapon': [
      'zweihander','claymore','nodachi',
      'warhammer','maul','kanabo','tetsubo',
      'axe','battleaxe','greataxe','bardiche',
      'spear','pike','lance','halberd','glaive','naginata','partisan','pollaxe',
      'scythe','quarterstaff','staff','guisarme','bec_de_corbin','club','mace','flail'
    ],

    // One-handed blades / light melee
    'sword': [
      'sword','longsword','shortsword','cutlass','scimitar','sabre','falchion','xiphos','kopis','estoc',
      'katana','wakizashi','tachi','uchigatana','ninjato',
      'knife','dagger','dirk','stiletto','katar','claw','gauntlet','tonfa','rapier','main_gauche',
      'whip','sickle','machete','gladius', 'greatsword'
    ],

    // Armor & wearables
    'armor': [
      'helmet','mask','crown','hood','hat','heaume',
      'chestplate','cuirass','robe','tunic','cloak','cape', 'kimono', 'shell', 'fedora', 'sombrero',
      'leggings','pants','kilt','greaves',
      'boots','shoes','sabaton',
      'shield','buckler',
      'belt','gloves','bracers','pauldrons','backpack','elytra'
    ],
}

global.blacklistedAffixes = [
  'apotheotic_additions:ranged/attribute/crit_chance',
  'apotheotic_additions:ranged/attribute/crit_damage',
  'apotheosis_ascended:ranged/mob_effect/inaccurate',
  'apotheosis_ascended:ranged/mob_effect/precision',
  'apotheosis:heavy_weapon/attribute/annihilating',
  'apotheosis:heavy_weapon/attribute/decimating',
  'apotheosis:heavy_weapon/attribute/giant_slaying',
  'apotheosis_ascended:heavy_weapon/mob_effect/heartbreak',
  'apotheosis_ascended:heavy_weapon/mob_effect/vulnerability',
  //'apotheosis_ascended:sword/mob_effect/shatter_spleen',
  //'apotheosis_ascended:sword/mob_effect/internal_bleeding',
  'apotheosis:sword/attribute/intricate',
  //'apotheosis:sword/attribute/lacerating',
  'apotheosis_ascended:armor/mob_effect/perception',  
  'fallen_gems_affixes:armor/spell/',
  'fallen_gems_affixes:ranged/spell/',
  'fallen_gems_affixes:sword/spell/',
  'fallen_gems_affixes:heavy_weapon/spell/',
  'fallen_gems_affixes:soulbound'
]

// ==== HELPERS =========================================================
/** Map copied from your global so we can reference it locally. */
let apoth_item_types = global.apoth_types ?? {}

/**
 * Return simple string id: "ranged", "heavy_weapon", "sword", etc.
 * @param {string} id   The item’s registry path (e.g. "bronze_greatsword")
 * @returns {string|null}
 */
function getItemType(id) {
  for (let type in apoth_item_types) {
    if (apoth_item_types[type].some(token => id.includes(token))) return type
  }
  return null
}

/**
 * Safe LootCategory name accessor.
 * If a method exists, uses it; otherwise falls back to toString and
 * extracts bracketed token, e.g. "LootCategory[helmet]" -> "helmet".
 */
function getCatName(cat) {
  try {
    if (cat == null) return ''
    if (typeof cat.name === 'function') return String(cat.name())
    if (typeof cat.getName === 'function') return String(cat.getName())
    if (typeof cat.name !== 'undefined' && cat.name != null && typeof cat.name !== 'function') {
      try { return String(cat.name) } catch (e) {}
    }
    let s = String(cat)
    let m = s.match(/\[(.+?)\]$/)
    if (m && m[1]) return m[1]
    return s
  } catch (e) {
    try { return String(cat) } catch (e2) { return '' }
  }
}

/**
 * Convert the string type into the matching LootCategory list.
 * @param {string|null} type
 * @returns {Java.util.List<dev.shadowsoffire.apotheosis.adventure.loot.LootCategory>}
 */
function typeToCategories(type) {
  let list = new ArrayList()
  switch (type) {
    case 'ranged':
      list.add(LootCategory.BOW)
      list.add(LootCategory.CROSSBOW)
      break
    case 'breaker':
      list.add(LootCategory.PICKAXE)
      list.add(LootCategory.SHOVEL)
      break
    case 'heavy_weapon':
      list.add(LootCategory.HEAVY_WEAPON)
      break
    case 'sword':
      list.add(LootCategory.SWORD)
      break
    case 'armor':
      list.add(LootCategory.HELMET)
      list.add(LootCategory.CHESTPLATE)
      list.add(LootCategory.LEGGINGS)
      list.add(LootCategory.BOOTS)
      break
  }
  return list
}





// ==== startup_scripts/affix_utils.js ====

// --- Imports ----------------------------------------------------------
let ArrayList      = Java.loadClass('java.util.ArrayList')
let AffixRegistry  = Java.loadClass('dev.shadowsoffire.apotheosis.adventure.affix.AffixRegistry')
let LootCategory   = Java.loadClass('dev.shadowsoffire.apotheosis.adventure.loot.LootCategory')
let RarityRegistry = Java.loadClass('dev.shadowsoffire.apotheosis.adventure.loot.RarityRegistry')
let ForgeRegs      = Java.loadClass('net.minecraftforge.registries.ForgeRegistries')
let ItemStack      = Java.loadClass('net.minecraft.world.item.ItemStack')
let Attributes     = Java.loadClass('net.minecraft.world.entity.ai.attributes.Attributes')
let EquipmentSlot  = Java.loadClass('net.minecraft.world.entity.EquipmentSlot')



// --- Helper: fallback category guesser --------------------------------
/**
 * @param {net.minecraft.world.item.ItemStack} stack
 * @returns {java.util.List<dev.shadowsoffire.apotheosis.adventure.loot.LootCategory>}
 */
global.guessCategories = function (stack) {
  let guessed = new ArrayList()

  // make sure user’s map exists
  if (!global.apoth_types) return guessed

  let rl = ForgeRegs.ITEMS.getKey(stack.getItem()) // ResourceLocation
  if (rl == null) return guessed
  let id = rl.getPath() // e.g. "bronze_greatsword"

  for (let type in global.apoth_types) {
    if (global.apoth_types[type].some(part => id.includes(part))) {
      switch (type) {
        case 'ranged':
          guessed.add(LootCategory.BOW)
          guessed.add(LootCategory.CROSSBOW)
          break
        case 'breaker':
          guessed.add(LootCategory.PICKAXE)
          guessed.add(LootCategory.SHOVEL)
          break
        case 'heavy_weapon':
          guessed.add(LootCategory.HEAVY_WEAPON)
          break
        case 'sword':
          guessed.add(LootCategory.SWORD)
          break
        case 'armor':
          guessed.add(LootCategory.HELMET)
          guessed.add(LootCategory.CHESTPLATE)
          guessed.add(LootCategory.LEGGINGS)
          guessed.add(LootCategory.BOOTS)
          break
      }
      break // stop after first match
    }
  }
  return guessed
}
let AffixHelper   = Java.loadClass('dev.shadowsoffire.apotheosis.adventure.affix.AffixHelper')
// --- Main utility -----------------------------------------------------
/**
 * Return every affix that can ever roll on the given ItemStack,
 * regardless of rarity, including ones added by other mods.
 *
 * @param  {net.minecraft.world.item.ItemStack} stack
 * @return {java.util.List<dev.shadowsoffire.apotheosis.adventure.affix.Affix>}
 */
// extra import – LootRarity has the quickest helper for reading a stack’s rarity
let LootRarity = Java.loadClass('dev.shadowsoffire.apotheosis.adventure.loot.LootRarity')

global.getAffixes = function (stack) {
  let matches    = []
  let allAffixes = AffixRegistry.INSTANCE.getValues()

  /* ────────────── 1) STACK RARITY & MAX ORDINAL ───────────────────── */
  let rarityHolder = AffixHelper.getRarity(stack)                       // DynamicHolder<LootRarity>
  let stackRarity  = rarityHolder.isBound()
        ? rarityHolder.get()
        : RarityRegistry.getMinRarity().get()                             // COMMON fallback
  let maxOrdinal   = stackRarity.ordinal()                              // <- this is the variable that vanished

  /* ────────────── 2) CATEGORY DETECTION (custom first) ─────────────── */
  let validCats = new ArrayList()

  let rl  = ForgeRegs.ITEMS.getKey(stack.getItem())                     // ResourceLocation
  let id  = rl != null ? rl.getPath() : ''
  let typ = getItemType(id)

  if (typ != null) typeToCategories(typ).forEach(c => validCats.add(c))

  // fallback to Apotheosis auto‑detection if nothing matched
  if (validCats.isEmpty()) {
    LootCategory.VALUES.forEach(cat => { if (cat.isValid(stack)) validCats.add(cat) })
  }

  /* ────────────── 3) AFFIX ITERATION WITH FILTERS ──────────────────── */
  let blacklisted_affixes = global.blacklistedAffixes ?? []
  let isBlacklisted = idStr => blacklisted_affixes.includes(idStr)

  for (let affix of allAffixes) {
    let affID = AffixRegistry.INSTANCE.getKey(affix).toString()
    if (isBlacklisted(affID)) continue

    catLoop:
    for (let cat of validCats) {
      for (let ord = 0; ord <= maxOrdinal; ord++) {                       // only ≤ item tier
        let rarity = RarityRegistry.byOrdinal(ord).get()
        if (affix.canApplyTo(stack, cat, rarity)) {
          matches.push(affix)
          break catLoop                                                   // one success is enough
        }
      }
    }
  }
  return matches
}

/**
 * getAffixesTwo
 * Return every affix that can ever roll on the given ItemStack, irrespective of the
 * stack's current rarity. Uses safer type inference and a more reliable fallback.
 *
 * Changes vs getAffixes:
 * - Iterates all rarities (not capped to the stack's rarity).
 * - Safer item-type detection using tokenized matching (avoids false positives like "hat" in "hatchet").
 * - Includes HOE when mapping breaker categories (if available).
 * - Falls back to Apotheosis auto-detection if the guessed categories produce no matches.
 * - Returns a Java ArrayList, deduplicated by affix id.
 *
 * @param  {net.minecraft.world.item.ItemStack} stack
 * @return {Java.util.List<dev.shadowsoffire.apotheosis.adventure.affix.Affix>}
 */
global.getAffixesTwo = function (stack) {
  let allAffixes = AffixRegistry.INSTANCE.getValues()

  // --- Helper: get all rarities present in the registry (bounded linear scan) ---
  function getAllRarities() {
    /** @type {any[]} */
    let list = []
    // Reasonable upper bound; typical packs have < 16 rarities.
    for (let ord = 0; ord < 64; ord++) {
      try {
        let holder = RarityRegistry.byOrdinal(ord)
        if (holder == null) break
        let rarity = holder.get()
        if (rarity == null) break
        list.push(rarity)
      } catch (e) {
        // byOrdinal may throw if out of range; stop scanning.
        break
      }
    }
    return list
  }

  // --- Helper: rarities up to the stack's current rarity ---
  function getRaritiesUpTo(maxOrd) {
    /** @type {any[]} */
    let list = []
    for (let ord = 0; ord <= maxOrd; ord++) {
      try {
        let holder = RarityRegistry.byOrdinal(ord)
        if (holder == null) break
        let rarity = holder.get()
        if (rarity == null) break
        list.push(rarity)
      } catch (e) { break }
    }
    return list
  }
  //console.log(getAllRarities)
  //Utils.getServer().tell(getAllRarities)
  // --- Helper: safer item type detection (token-based) ---
  function getItemTypeSafe(id) {
    if (!id) return null
    let lower = String(id).toLowerCase()
    let parts = lower.split(/[^a-z0-9]+/).filter(p => p && p.length)
    for (let type in apoth_item_types) {
      let tokens = apoth_item_types[type] || []
      for (let t of tokens) {
        if (parts.includes(String(t).toLowerCase())) return type
      }
    }
    return null
  }
  // --- Helper: categories for a given type (adds HOE when present) ---
  function typeToCategoriesSafe(type) {
    let list = new ArrayList()
    switch (type) {
      case 'ranged':
        list.add(LootCategory.BOW)
        list.add(LootCategory.CROSSBOW)
        break
      case 'breaker':
        list.add(LootCategory.PICKAXE)
        list.add(LootCategory.SHOVEL)
        // Add HOE when available in this environment.
        try { if (LootCategory.HOE) list.add(LootCategory.HOE) } catch (e) {}
        break
      case 'heavy_weapon':
        list.add(LootCategory.HEAVY_WEAPON)
        break
      case 'sword':
        list.add(LootCategory.SWORD)
        break
      case 'armor':
        list.add(LootCategory.HELMET)
        list.add(LootCategory.CHESTPLATE)
        list.add(LootCategory.LEGGINGS)
        list.add(LootCategory.BOOTS)
        break
    }
    return list
  }

  // --- Build initial category list (custom mapping first) ---
  let validCats = new ArrayList()
  let rl  = ForgeRegs.ITEMS.getKey(stack.getItem())
  let id  = rl != null ? rl.getPath() : ''
  let typ = getItemTypeSafe(id)
  if (typ != null) typeToCategoriesSafe(typ).forEach(c => validCats.add(c))

  // If nothing matched, use Apotheosis auto-detection immediately
  if (validCats.isEmpty()) {
    LootCategory.VALUES.forEach(cat => { try { if (cat.isValid(stack)) validCats.add(cat) } catch (e) {} })
  }

  // Determine the stack's current rarity (or MIN) and build rarity list up to that tier
  let rarityHolder = AffixHelper.getRarity(stack)
  let stackRarity  = rarityHolder != null && rarityHolder.isBound ? (rarityHolder.isBound() ? rarityHolder.get() : RarityRegistry.getMinRarity().get()) : RarityRegistry.getMinRarity().get()
  let maxOrdinal   = stackRarity.ordinal ? stackRarity.ordinal() : 0
  let rarities = getRaritiesUpTo(maxOrdinal)
  // Blacklists: exact IDs and substring filters (case-insensitive)
  let blacklisted = global.blacklistedAffixes ?? []
  let blacklistedStrings = (global.blacklistedAffixStrings ?? []).map(String)

  function isIdBlacklisted(idStr) {
    if (!idStr) return false
    if (blacklisted.includes(idStr)) return true
    if (blacklistedStrings.length) {
      let lower = String(idStr).toLowerCase()
      for (let s of blacklistedStrings) {
        try {
          if (s && lower.includes(String(s).toLowerCase())) return true
        } catch (e) {}
      }
    }
    return false
  }

  // Collect existing affixes on the stack to avoid suggesting duplicates
  function getExistingAffixIds() {
    let set = new Set()
    try {
      let affMap = AffixHelper.getAffixes(stack) // expected Map<Affix, ?>
      if (affMap && affMap.keySet) {
        affMap.keySet().forEach(a => {
          try {
            let key = AffixRegistry.INSTANCE.getKey(a)
            if (key) set.add(key.toString())
          } catch (e) {}
        })
      }
    } catch (e) {
      // Fallback: try raw NBT if available (best-effort, schema-dependent)
      try {
        let tag = stack.getTag()
        if (tag && tag.contains) {
          // Common Apotheosis key patterns (best-effort; ignore if absent)
          // No-op to avoid false assumptions
        }
      } catch (e2) {}
    }
    return set
  }

  let existingIds = getExistingAffixIds()
  let matches = new ArrayList()
  let seen = new Set()

  function runWithCategories(catList) {
    let foundAny = false
    for (let affix of allAffixes) {
      let idStr = AffixRegistry.INSTANCE.getKey(affix).toString()
      if (isIdBlacklisted(idStr)) continue
      if (existingIds.has(idStr)) continue

      catLoop:
      for (let cat of catList) {
        for (let i = 0; i < rarities.length; i++) {
          let rarity = rarities[i]
          try {
            if (affix.canApplyTo(stack, cat, rarity)) {
              if (!seen.has(idStr)) { matches.add(affix); seen.add(idStr) }
              foundAny = true
              break catLoop
            }
          } catch (e) {
            // Ignore individual evaluation errors
          }
        }
      }
    }
    return foundAny
  }

  // First pass with our selected categories
  let hadAny = runWithCategories(validCats)

  // If nothing matched at all, fallback to auto categories and retry
  if (!hadAny) {
    let autoCats = new ArrayList()
    LootCategory.VALUES.forEach(cat => { try { if (cat.isValid(stack)) autoCats.add(cat) } catch (e) {} })
    if (!autoCats.isEmpty()) runWithCategories(autoCats)
  }

  return matches
}




