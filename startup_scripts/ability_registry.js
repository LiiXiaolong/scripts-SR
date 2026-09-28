// priority: 920

// Shared class/ability registry used by server commands and client EZActions menu sync.
let ABILITY_REGISTRY_VERSION = 3
let ABILITY_REGISTRY_ID = 'superior.class_abilities.v3'
let ABILITY_REGISTRY_BUILD_ID = 0

let classOrder = [
  "guardian",
  "battlemage",
  "conjurer",
  "disciple",
  "kensei",
  "berserker",
  "mercenary",
  "mystic",
  "frostpiercer",
  "nomad",
  "bloodripper",
  "dragonlord",
  "soulbinder",
  "plague_doctor",
  "juggernaut",
  "trickster",
  "monk",
  "vampire",
  "spellblade"
]
let classTitles = {
  "guardian": "Guardian",
  "battlemage": "Battlemage",
  "conjurer": "Conjurer",
  "disciple": "Disciple",
  "kensei": "Kensei",
  "berserker": "Berserker",
  "mercenary": "Mercenary",
  "mystic": "Mystic",
  "frostpiercer": "Frostpiercer",
  "nomad": "Nomad",
  "bloodripper": "Bloodripper",
  "dragonlord": "Dragonlord",
  "soulbinder": "Soulbinder",
  "plague_doctor": "Plague Doctor",
  "juggernaut": "Juggernaut",
  "trickster": "Trickster",
  "monk": "Monk",
  "vampire": "Vampire",
  "spellblade": "Spellblade"
}
let classAbilityIds = {
  "bloodripper": [
    "blood_pact",
    "blood_fever",
    "ripping_flesh",
    "spray_of_blood",
    "rip_and_tear",
    "blood_harvest",
    "blood_siphon",
    "symbiotic_ripper",
    "marked_for_death",
    "bloodslash",
    "bloodneedles",
    "cripple",
    "rage"
  ],
  "plague_doctor": [
    "symbiotic_rot",
    "necrotic_bloom",
    "contagion",
    "corrupted_savior",
    "pestilence",
    "plaguebearer",
    "steel_antidote",
    "miasma",
    "black_death",
    "verminlord",
    "epidemic"
  ],
  "conjurer": [
    "soul_siphon",
    "soul_steal",
    "ravenous_undead",
    "revenants_gift",
    "necromancer",
    "scent_of_blood",
    "empower",
    "bloodbound",
    "apex_predator",
    "winterfang",
    "wildfyre",
    "marsupial_warmachine",
  ],
  "battlemage": [
    "war_path",
    "battle_fever",
    "carnage",
    "spellbinder_siphon",
    "jupiters_gift",
    "battle_echoes",
    "arcane_synergy",
    "covenant_of_power"
  ],
  "kensei": [
    "viper",
    "python",
    "cobra",
    "mamba",
    "anaconda",
    "boa",
    "hydra",
    "ouroboros",
    "basilisk"
  ],
  "guardian": [
    "sacred_pool",
    "sanctified",
    "consecration",
    "inspire",
    "kinetic_rebuke",
    "final_judgement",
    "recursive_light",
    "burden_of_oaths",
    "last_light",
    "brotherhood"
  ],
  "disciple": [
    "scorch",
    "rite_of_cinders",
    "unholy_oath",
    "hellfire",
    "flaming_shadows",
    "legion_of_the_damned",
    "dark_servant",
    "unyielding_sin",
    "mark_of_the_beast",
    "unwilling_host"
  ],
  "frostpiercer": [
    "avalanche",
    "subzero",
    "permafrost",
    "frostbite",
    "hypothermia",
    "frozen_shackles",
    "cryomancer",
    "glacial_winds"
  ],
  "mercenary": [
    "contagious_lobotomy",
    "fasthands",
    "flickering_blade",
    "elemental_seekers",
    "claustrophobic",
    "elemental_bolt",
    "elemental_blight",
    "sentinel",
    "shattering_blow",
    "arrow_storm",
    "seraphim",
    "lethal_shadows",
    "shatterpoint"
  ],
  "mystic": [
    "cyclone",
    "aeromancer",
    "voidblast",
    "fiery_flight",
    "esoteric_echoes",
    "terror",
    "nightwalker",
    "mindshatter",
    "severed_continuum",
    "gravity_well",
    "parallax",
    "gravitic_flux"
  ],
  "nomad": [
    "zipline",
    "mining_fever",
    "avarice",
    "sacrifice",
    "emberheart",
    "ashenheart",
    "windborne",
    "parched",
    "beast_whisperer",
    "smoke_signal",
    "traveling_companions"
  ],
  "berserker": [
    "fimbulwinter",
    "fenrir",
    "yggdrasil",
    "skofnung",
    "tyrfing",
    "mjolnir",
    "gungnir",
    "gleipnir",
    "nidhogg",
    "gjallarhorn"
  ],
  "dragonlord": [
    "firebound",
    "icebound",
    "stormbound",
    "hardened_scales",
    "evolution",
    "skyborn_arcane",
    "draconic_crown",
    "draconic_amulet",
    "draconic_bulwark",
    "draconic_tailguard",
    "bound_might",
    "molten_scales",
    "dragons_favor",
    "soulfire",
    "lightning_parry",
    "frost_parry",
    "stomp_parry",
    "strength_parry",
    "speed_parry",
    "stun_parry",
    "portal_parry",
    "flaming_parry",
    "base_parry",
    "parry_mastery",
    "captains_elixir",
    "molten_sands",
    "firewyrm_flask",
    "raging_tempest",
    "dark_winds",
    "elderwood_sap",
    "frostfire_dew",
    "psionic_volley",
    "serpents_tears",
    "stormheart_lullaby",
    "moonlit_mist",
    "valkyries_blood",
    "forgotten_divinity",
    "beckoning_shadows",
    "beastly_sorcery",
    "beastly_sorcery_cooldown",
    "heavens_wrath",
    "distant_gift",
    "fist_of_kronos",
    "annihilation",
    "admire",
    "feel",
    "sing",
    "seek",
    "yearn",
    "ponder",
    "dream",
    "max_pets"
  ],
  "soulbinder": [
    "soulbinders_crow",
    "soulbinders_bald_eagle",
    "soulbinders_capuchin_monkey",
    "soulbinders_tarantula_hawk",
    "soulbinders_elephant",
    "soulbinders_komodo_dragon",
    "soulbinders_kangaroo",
    "soulbinders_gorilla",
    "soulbinders_crocodile",
    "soulbinders_grizzly_bear",
    "soulbinders_caiman",
    "soulbinders_hippogryph",
    "soulbinders_cockatrice",
    "soulbinders_subterranodon",
    "soulbinders_vallumraptor",
    "soulbinders_tremorsaurus",
    "soulbinders_soul_vulture",
    "soulbinders_anaconda",
    "soulbinders_moose",
    "soulbinders_rattlesnake",
    "soulbinders_rhinoceros",
    "soulbinders_tiger",
    "soulbinders_tusklin",
    "soulbinders_snow_leopard",
    "soulbinders_teletor",
    "soulbinders_bone_serpent",
    "soulbinders_enderiophage",
    "soulbinders_emu",
    "soulbinders_dread_scuttler",
    "essence_of_eternity",
    "essence_of_giants",
    "primal_retribution",
    "arcane_might",
    "arctic_wind",
    "deep_freeze",
    "valkyries_wings",
    "hunters_bounty",
    "unlock_crow",
    "crow_level",
    "blood_crow",
    "exalted_crow",
    "unlock_bald_eagle",
    "bald_eagle_level",
    "ice_eagle",
    "exalted_eagle",
    "apex_eagle",
    "unlock_capuchin_monkey",
    "capuchin_monkey_level",
    "ender_monkey",
    "exalted_monkey",
    "apex_monkey",
    "unlock_tarantula_hawk",
    "tarantula_hawk_level",
    "nature_hawk",
    "exalted_hawk",
    "unlock_elephant",
    "elephant_level",
    "holy_elephant",
    "exalted_elephant",
    "unlock_komodo_dragon",
    "komodo_dragon_level",
    "nature_dragon",
    "exalted_dragon",
    "apex_dragon",
    "unlock_kangaroo",
    "kangaroo_level",
    "lightning_kangaroo",
    "exalted_kangaroo",
    "unlock_gorilla",
    "gorilla_level",
    "evoker_gorilla",
    "exalted_gorilla",
    "apex_gorilla",
    "unlock_crocodile",
    "crocodile_level",
    "blood_crocodile",
    "exalted_crocodile",
    "unlock_grizzly_bear",
    "grizzly_bear_level",
    "fire_bear",
    "exalted_bear",
    "unlock_caiman",
    "caiman_level",
    "ender_caiman",
    "exalted_caiman",
    "unlock_hippogryph",
    "hippogryph_level",
    "evoker_hippogryph",
    "exalted_hippogryph",
    "apex_hippogryph",
    "unlock_cockatrice",
    "cockatrice_level",
    "ice_cockatrice",
    "exalted_cockatrice",
    "unlock_subterranodon",
    "subterranodon_level",
    "ender_subterranodon",
    "exalted_subterranodon",
    "unlock_vallumraptor",
    "vallumraptor_level",
    "fire_raptor",
    "exalted_raptor",
    "apex_raptor",
    "unlock_tremorsaurus",
    "tremorsaurus_level",
    "blood_dino",
    "exalted_dino",
    "unlock_soul_vulture",
    "soul_vulture_level",
    "unlock_anaconda",
    "anaconda_level",
    "unlock_moose",
    "moose_level",
    "unlock_rattlesnake",
    "rattlesnake_level",
    "unlock_rhinoceros",
    "rhinoceros_level",
    "unlock_tiger",
    "tiger_level",
    "unlock_tusklin",
    "tusklin_level",
    "unlock_snow_leopard",
    "snow_leopard_level",
    "unlock_teletor",
    "teletor_level",
    "unlock_bone_serpent",
    "bone_serpent_level",
    "unlock_centipede_head",
    "centipede_head_level",
    "unlock_enderiophage",
    "enderiophage_level",
    "unlock_emu",
    "emu_level",
    "unlock_citadel_keeper",
    "citadel_keeper_level",
    "unlock_dread_scuttler",
    "dread_scuttler_level",
    "exalted_soul_vulture",
    "exalted_anaconda",
    "exalted_moose",
    "exalted_rattlesnake",
    "exalted_rhinoceros",
    "exalted_tiger",
    "exalted_tusklin",
    "exalted_snow_leopard",
    "exalted_teletor",
    "exalted_bone_serpent",
    "exalted_enderiophage",
    "exalted_emu",
    "exalted_dread_scuttler"
  ],
  "juggernaut": [
    "bannerlord",
    "warlord",
    "overlord",
    "warden",
    "bulwark",
    "warbringer",
    "blitz",
    "titan",
    "colossus",
    "martyr"
  ],
  "vampire": [
    "rite_of_the_red_court",
    "cloak_of_blood",
    "last_sacrament",
    "obelisk_of_flesh",
    "christened_in_blood",
    "hemorrhage",
    "scarlet_shadow",
    "dripping_fangs",
    "dark_flight",
    "acolyte",
    "zealot",
    "ritualist",
    "apostle",
    "prophet"
  ],
  "monk": [
    "sanctity",
    "meditation",
    "zen",
    "harmony_strike",
    "radiance",
    "ascendance",
    "divinity",
    "resonance",
    "equilibrium",
    "elemental_conflux"
  ],
  "trickster": [
    "totem_of_the_apothecary",
    "hogpothecary",
    "thousand_knives",
    "dancing_daggers",
    "crystalline_illusion",
    "storm_of_blades",
    "breakneck_brew",
    "shatterflask",
    "mirage",
    "illusionist",
    "soulripper_serum",
    "corrosive_distillate"
  ],
  "spellblade": [
    "spellweaver",
    "despair",
    "aeglos",
    "ice",
    "forlorn",
    "herugrim",
    "heartsbane",
    "aranruth",
    "anguirel",
    "excalibur",
    "avalon",
    "glamdring",
    "foe_hammer",
    "widows_wail",
    "red_rain",
    "sting",
    "aerondight",
    "aard",
    "lightfall",
    "dawn",
    "dusk",
    "caliburn",
    "anduril",
    "flame_of_the_west",
    "callandor",
    "oathkeeper",
    "unknown"
  ]
}

function toTitleFromId(id) {
  let raw = String(id || '').replace(/_/g, ' ')
  return raw.replace(/\b\w/g, c => c.toUpperCase())
}

function getSkillDataAbilitySet() {
  // Startup script load order is not guaranteed; if skillData is not ready yet,
  // return null so the registry can keep all configured abilities instead of emptying.
  if (!global.skillData || !global.skillData.abilities) return null
  let out = {}
  Object.keys(global.skillData.abilities).forEach(id => {
    out[id] = true
  })
  return out
}

function getSkillDataKeyAbilitySet() {
  // Startup script load order is not guaranteed; key-slot ownership may not exist yet
  // on the first registry build and must be backfilled by a later rebuild.
  if (!global.skillData || !Array.isArray(global.skillData.paint_key_abilities)) return null
  let out = {}
  global.skillData.paint_key_abilities.forEach(id => {
    out[String(id)] = true
  })
  return out
}

function buildAbilitySpec(classId, abilityId, sort, keySlotAbilitySet) {
  let mode = 'toggle'
  let activateFn = null
  let activeKey = null

  if (classId === 'monk' && abilityId === 'elemental_conflux') {
    mode = 'activate'
    activateFn = 'elemental_conflux_ability'
    activeKey = 'elemental_conflux_active'
  }

  let spec = {
    id: abilityId,
    classId: classId,
    title: toTitleFromId(abilityId),
    icon: `kubejs:${abilityId}_ability`,
    mode: mode,
    unlockKey: `${abilityId}_unlocked`,
    levelKey: abilityId,
    enabledKey: `ability_enabled:${abilityId}`,
    menuItemId: `ab_${classId}_${abilityId}`,
    sort: sort
  }

  if (keySlotAbilitySet != null) {
    spec.keySlotOwned = keySlotAbilitySet[abilityId] === true
  }

  if (activateFn) spec.activateFn = activateFn
  if (activeKey) spec.activeKey = activeKey

  return spec
}

function buildClassConfig(classId, keySlotAbilitySet) {
  let ids = classAbilityIds[classId] || []
  let abilities = []
  ids.forEach((abilityId, index) => {
    abilities.push(buildAbilitySpec(classId, abilityId, (index + 1) * 10, keySlotAbilitySet))
  })

  return {
    id: classId,
    title: classTitles[classId] || toTitleFromId(classId),
    icon: `kubejs:rune_of_the_${classId}`,
    bundleId: `cls_${classId}`,
    unlockClassKey: `kubejs_class:${classId}`,
    abilities: abilities
  }
}

function buildRegistry() {
  let availableAbilities = getSkillDataAbilitySet()
  let keySlotAbilitySet = getSkillDataKeyAbilitySet()

  let registry = {
    version: ABILITY_REGISTRY_VERSION,
    id: ABILITY_REGISTRY_ID,
    buildId: ++ABILITY_REGISTRY_BUILD_ID,
    defaults: {
      mode: 'toggle',
      defaultEnabled: true,
      showLockedInMenu: false,
      bundleKeybindEnabled: false,
      hideFromMainRadial: false,
      commandPrefix: 'ability',
      enabledKeyPrefix: 'ability_enabled:'
    },
    classOrder: classOrder.slice(),
    classes: {},
    abilityToClass: {},
    abilityById: {}
  }

  classOrder.forEach(classId => {
    let classConfig = buildClassConfig(classId, keySlotAbilitySet)

    // Filter stale ids only when skillData is available.
    if (availableAbilities != null) {
      classConfig.abilities = classConfig.abilities.filter(spec => {
        return availableAbilities[spec.id] === true
      })
    }

    registry.classes[classId] = classConfig

    classConfig.abilities.forEach(spec => {
      if (!registry.abilityToClass[spec.id]) {
        registry.abilityToClass[spec.id] = classId
      }
      if (!registry.abilityById[spec.id]) {
        registry.abilityById[spec.id] = spec
      }
    })
  })

  return registry
}

global.rebuildClassAbilityRegistry = function () {
  global.classAbilityRegistry = buildRegistry()
  if (typeof global.dropAllAbilityStates === 'function') {
    try {
      global.dropAllAbilityStates()
    } catch (e) {}
  }
  return global.classAbilityRegistry
}

global.classAbilityRegistry = global.rebuildClassAbilityRegistry()

global.getClassAbilitySpecs = function (classId) {
  let registry = global.classAbilityRegistry
  if (!registry || !registry.classes || !registry.classes[classId]) return []
  let out = []
  registry.classes[classId].abilities.forEach(spec => {
    out.push(spec)
  })
  return out
}

global.getClassAbilitySpec = function (abilityId) {
  let registry = global.classAbilityRegistry
  if (!registry || !registry.classes) return null

  if (registry.abilityById && registry.abilityById[abilityId]) {
    return registry.abilityById[abilityId]
  }

  let classId = registry.abilityToClass ? registry.abilityToClass[abilityId] : null
  if (classId && registry.classes[classId]) {
    let found = null
    registry.classes[classId].abilities.forEach(spec => {
      if (spec.id === abilityId) {
        if (!spec.classId) spec.classId = classId
        found = spec
      }
    })
    return found
  }

  let fallback = null
  Object.entries(registry.classes).forEach(([id, classData]) => {
    if (!classData || !classData.abilities) return
    classData.abilities.forEach(spec => {
      if (spec.id !== abilityId) return
      if (fallback != null) return
      if (!spec.classId) spec.classId = id
      fallback = spec
    })
  })
  return fallback
}

global.getClassAbilityIds = function (classId) {
  let specs = global.getClassAbilitySpecs(classId)
  let out = []
  specs.forEach(spec => out.push(spec.id))
  return out
}
