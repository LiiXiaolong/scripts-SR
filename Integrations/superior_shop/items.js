// Superior Shop item definitions using a data-driven per-category map.
// Category defaults reduce repeated side/theme config, and order falls back to array index.
const ESCALATING_ORB_PRICE = {
  mode: 'multiply',
  factor: 1.15,
  round: 'ceil',
}
const ESCALATING_SKILL_PRICE = {
  mode: 'multiply',
  factor: 1.25,
  round: 'ceil',
}

const INVENTORY_EXPANSION_PRICE = {
  mode: 'multiply',
  factor: 2,
  round: 'ceil',
}

const GEM_LOOT_BOX_PRICE = {
  mode: 'multiply',
  factor: 1.15,
  round: 'ceil',
}

const TOME_OF_DEATH_PRICE = {
  delta: 10,
  max: 300,
}

const PROGRESSION_RECOVERY_ITEMS = [
  { item: 'kubejs:magnetic_wayfinder', boss: 'mutantmore:mutant_shulker', price: 250 },
  { item: 'rats:marbled_cheese_rat_head', boss: 'rats:dutchrat', price: 250 },
  { item: 'rats:gem_of_ratlantis', boss: 'rats:dutchrat', price: 250 },
  { item: 'rats:vial_of_sentience', boss: 'mebahelcreaturesdraugr:draugr_overlord', price: 300 },
  { item: 'cataclysm:necklace_of_the_desert', boss: 'rats:neo_ratlantean', price: 400 },
  { item: 'endrem:exotic_eye', boss: 'rats:neo_ratlantean', price: 750 },
  { item: 'kubejs:toxic_wayfinder', boss: 'born_in_chaos_v1:supreme_bonescaller_stage_2', price: 300 },
  { item: 'born_in_chaos_v1:orbofthe_summoner', boss: 'born_in_chaos_v1:supreme_bonescaller_stage_2', price: 350 },
  { item: 'kubejs:specters_tablet', boss: 'galosphere:berserker', price: 350 },
  { item: 'aquamirae:shell_horn', boss: 'cataclysm:amethyst_crab', price: 300 },
  { item: 'iceandfire:hydra_fang', boss: 'iceandfire:hydra', price: 300 },
  { item: 'kubejs:forlorn_wayfinder', boss: 'bosses_of_mass_destruction:lich', price: 350 },
  { item: 'graveyard:bone_dagger', boss: 'block_factorys_bosses:sandworm', price: 350 },
  { item: 'kubejs:living_stone', boss: 'block_factorys_bosses:sandworm', price: 350 },
  { item: 'graveyard:lower_bone_staff', boss: 'bosses_of_mass_destruction:void_blossom', price: 350 },
  { item: 'graveyard:upper_bone_staff', boss: 'illageandspillage:spiritcaller', price: 350 },
  { item: 'kubejs:echoing_void', boss: 'graveyard:lich', price: 500 },
  { item: 'endrem:corrupted_eye', boss: 'graveyard:lich', price: 750 },
  { item: 'kubejs:obsidilith_dust', boss: 'illageandspillage:ragno', price: 400 },
  { item: 'kubejs:abyssal_wayfinder', boss: 'mutantmore:mutant_wither_skeleton', price: 400 },
  { item: 'alexscaves:immortal_embryo', boss: 'alexscaves:hullbreaker', price: 400 },
  { item: 'kubejs:phalanx_ring', boss: 'minecells:concierge', price: 400 },
  { item: 'kubejs:eel_excrement', boss: 'aquamirae:eel', price: 300 },
  { item: 'fromtheshadows:crimson_shell', boss: 'fromtheshadows:bulldrogioth', price: 300 },
  { item: 'kubejs:chunky_cheese_token_bl', boss: 'legendary_monsters:shulker_mimic', price: 300 },
  { item: 'cataclysm:laser_gatling', boss: 'legendary_monsters:shulker_mimic', price: 700 },
  { item: 'kubejs:chunky_cheese_token_br', boss: 'iceandfire:cyclops', price: 300 },
  { item: 'iceandfire:cyclops_eye', boss: 'iceandfire:cyclops', price: 300 },
  { item: 'blue_skies:zeal_lighter', boss: 'eeeabsmobs:immortal', price: 400 },
  { item: 'kubejs:tears_of_creation', boss: 'irons_spellbooks:dead_king', price: 500 },
  { item: 'kubejs:cursed_necklace', boss: 'mowziesmobs:ferrous_wroughtnaut', price: 350 },
  { item: 'minecells:vine_rune', boss: 'mowziesmobs:ferrous_wroughtnaut', price: 300 },
  { item: 'kubejs:burning_souls', boss: 'cataclysm:ignis', price: 700 },
  { item: 'endrem:magical_eye', boss: 'cataclysm:ender_guardian', price: 900 },
  { item: 'endrem:old_eye', boss: 'cataclysm:ancient_remnant', price: 750 },
  { item: 'endrem:nether_eye', boss: 'alexscaves:tremorzilla', price: 750 },
  { item: 'endrem:lost_eye', boss: 'cataclysm:netherite_monstrosity', price: 750 },
  { item: 'fdbosses:eye_of_malkuth', boss: 'cataclysm:netherite_monstrosity', price: 800 },
  { item: 'endrem:undead_eye', boss: 'cataclysm:maledictus', price: 750 },
  { item: 'endrem:wither_eye', boss: 'cataclysm:the_harbinger', price: 750 },
  { item: 'cataclysm:mech_eye', boss: 'cataclysm:the_harbinger', price: 700 },
  { item: 'endrem:evil_eye', boss: 'cataclysm:ender_golem', price: 750 },
  { item: 'kubejs:corrupted_shard', boss: 'cataclysm:ender_golem', price: 400 },
  { item: 'endrem:black_eye', boss: 'aquamirae:captain_cornelia', price: 750 },
  { item: 'endrem:cold_eye', boss: 'mowziesmobs:frostmaw', price: 750 },
  { item: 'endrem:cryptic_eye', boss: 'roaring:roaring_knight', price: 750 },
  { item: 'cataclysm:abyssal_sacrifice', boss: 'cataclysm:coral_golem', price: 600 },
  { item: 'endrem:witch_eye', boss: 'cataclysm:the_leviathan', price: 900 },
  { item: 'blue_skies:lunar_stonebrick', boss: 'companions:sacred_pontiff', price: 200 },
  { item: 'blue_skies:turquoise_stonebrick', boss: 'eeeabsmobs:guling_sentinel_heavy', price: 200 },
  { item: 'kubejs:doomsday_dust', boss: 'cataclysm:coral_golem', price: 500 },
  { item: 'soulsweapons:essence_of_eventide', boss: 'soulsweapons:accursed_lord_boss', price: 600 },
  { item: 'soulsweapons:lost_soul', boss: 'soulsweapons:draugr_boss', price: 300 },
  { item: 'eeeabsmobs:immortal_debris', boss: 'eeeabsmobs:immortal_executioner', price: 650 },
  { item: 'kubejs:parasitic_slime', boss: 'minecraft:warden', price: 500 },
  { item: 'endrem:guardian_eye', boss: 'minecraft:elder_guardian', price: 750 },
  { item: 'kubejs:chunky_cheese_token_tl', boss: 'call_of_yucutan:ah_puch', price: 300 },
  { item: 'kubejs:chunky_cheese_token_tr', boss: 'call_of_yucutan:kukulkan', price: 300 },
  { item: 'kubejs:lost_stone', boss: 'block_factorys_bosses:yeti', price: 400 },
  { item: 'kubejs:hardened_void', boss: 'twilightforest:snow_queen', price: 500 },
  { item: 'fdbosses:eye_of_chesed', boss: 'alexscaves:luxtructosaurus', price: 800 },
  { item: 'born_in_chaos_v1:missionary_hat_helmet', boss: 'born_in_chaos_v1:missioner', price: 400 },
  { item: 'kubejs:corrupted_dust', boss: 'minecells:conjunctivius', price: 400 },
  { item: 'eeeabsmobs:immortal_bone', boss: 'eeeabsmobs:immortal_shaman', price: 400 },
  { item: 'aquamirae:dagger_of_greed', boss: 'aquamirae:maze_mother', price: 500 },
  { item: 'roaring:knife', boss: 'block_factorys_bosses:infernal_dragon', price: 600 },
  { item: 'alexscaves:galena_gauntlet', boss: 'alexscaves:magnetron', price: 600 },
  { item: 'legendary_monsters:dinosaur_bone', boss: 'legendary_monsters:skeletosaurus', price: 400 },
  { item: 'rats:plague_tome', boss: 'rats:rat_king', price: 350 },
  { item: 'rats:marbled_cheese_golem_core', boss: 'rats:ratlantean_automaton', price: 300 },
  { item: 'alexscaves:fissile_core', boss: 'alexscaves:luxtructosaurus', price: 400 },
  { item: 'kubejs:demonic_runestone', boss: 'born_in_chaos_v1:lord_the_headless', price: 500 },
  { item: 'minecraft:wither_skeleton_skull', boss: 'minecraft:wither', price: 250 },
  { item: 'minecraft:soul_sand', boss: 'minecraft:wither', price: 150 },
  { item: 'blue_skies:blinding_key', boss: 'blue_skies:starlit_crusher', price: 250 },
  { item: 'blue_skies:nature_key', boss: 'blue_skies:summoner', price: 250 },
  { item: 'irons_spellbooks:divine_soulshard', boss: 'irons_spellbooks:dead_king', price: 500 },
  { item: 'rats:rat_king_crown', boss: 'rats:rat_king', price: 350 },
  { item: 'kubejs:banished_immortal', boss: 'alexscaves:hullbreaker', price: 500 },
  { item: 'twilightforest:diamond_minotaur_axe', boss: 'twilightforest:minoshroom', price: 350 },
  { item: 'twilightforest:naga_scale', boss: 'twilightforest:naga', price: 300 },
  { item: 'bosses_of_mass_destruction:obsidian_heart', boss: 'bosses_of_mass_destruction:gauntlet', price: 400 },
  { item: 'rats:chunky_cheese_token', boss: 'legendary_monsters:shulker_mimic', price: 400 },
  { item: 'blue_skies:poison_key', boss: 'blue_skies:alchemist', price: 250 },
  { item: 'kubejs:twisted_rot', boss: 'rats:rat_king', price: 400 },
  { item: 'rats:dutchrat_wheel', boss: 'rats:dutchrat', price: 400 },
  { item: 'mowziesmobs:sol_visage', boss: 'mowziesmobs:umvuthi', price: 500 },
  { item: 'endrem:rogue_eye', boss: 'soulsweapons:night_prowler', price: 750 },
  { item: 'endrem:cursed_eye', boss: 'traveloptics:the_nightwarden', price: 750 },
  { item: 'cataclysm:abyssal_egg', boss: 'cataclysm:the_leviathan', price: 600 },
  { item: 'rats:filth', boss: 'rats:black_death', price: 250 },
  { item: 'rats:filth_corruption', boss: 'rats:black_death', price: 300 },
  { item: 'cataclysm:coral_chunk', boss: 'cataclysm:coral_golem', price: 350 },
  { item: 'cataclysm:athame', boss: 'cataclysm:coral_golem', price: 350 },
  { item: 'rats:marbled_cheese', boss: 'rats:dutchrat', price: 200 },
  { item: 'soulsweapons:shard_of_uncertainty', boss: 'soulsweapons:night_shade', price: 500 },
  { item: 'soulsweapons:moonstone', boss: 'soulsweapons:moonknight', price: 825 },
  { item: 'soulsweapons:altar_block', boss: 'soulsweapons:returning_knight', price: 300 },
  { item: 'soulsweapons:blackstone_pedestal', boss: 'soulsweapons:returning_knight', price: 300 },
  { item: 'soulsweapons:chaos_orb', boss: 'soulsweapons:chaos_monarch', price: 600 },
  { item: 'soulsweapons:essence_of_luminescence', boss: 'soulsweapons:chaos_monarch', price: 500 },
  { item: 'soulsweapons:withered_demon_heart', boss: 'soulsweapons:chaos_monarch', price: 500 },
  { item: 'soulsweapons:chaos_crown', boss: 'soulsweapons:chaos_monarch', price: 500 },
  { item: 'soulsweapons:arkenstone', boss: 'soulsweapons:chaos_monarch', price: 500 },
  { item: 'rats:ancient_sawblade', boss: 'rats:neo_ratlantean', price: 400 },
  { item: 'soulsweapons:lord_soul_day_stalker', boss: 'soulsweapons:day_stalker', price: 600 },
  { item: 'soulsweapons:lord_soul_night_prowler', boss: 'soulsweapons:night_prowler', price: 600 },
  { item: 'fromtheshadows:crystallized_blood', boss: 'fromtheshadows:bulldrogioth', price: 350 },
  { item: 'twilightforest:lich_trophy', boss: 'twilightforest:lich', price: 400 },
  { item: 'graveyard:middle_bone_staff', boss: 'mowziesmobs:sculptor', price: 350 },
  { item: 'call_of_yucutan:fist_of_doom', boss: 'call_of_yucutan:ah_puch', price: 400 },
  { item: 'call_of_yucutan:fragment_of_rebirth', boss: 'call_of_yucutan:kukulkan', price: 400 },
  { item: 'mowziesmobs:earthrend_gauntlet', boss: 'mowziesmobs:sculptor', price: 500 },
  { item: 'eeeabsmobs:guardian_core', boss: 'eeeabsmobs:nameless_guardian', price: 400 },
  { item: 'call_of_yucutan:fragment_of_death', boss: 'call_of_yucutan:ah_puch', price: 400 },
  { item: 'aquamirae:frozen_key', boss: 'aquamirae:captain_cornelia', price: 400 },
  { item: 'twilightforest:ur_ghast_trophy', boss: 'twilightforest:ur_ghast', price: 500 },
  { item: 'twilightforest:hydra_trophy', boss: 'twilightforest:hydra', price: 500 },
  { item: 'minecraft:mossy_cobblestone', boss: 'twilightforest:lich', price: 150 },
  { item: 'minecraft:iron_block', boss: 'twilightforest:lich', price: 200 },
  { item: 'minecraft:deepslate_bricks', boss: 'twilightforest:lich', price: 150 },
  { item: 'cataclysm:strange_key', boss: 'fdbosses:malkuth', price: 500 },
  { item: 'alexscaves:pure_darkness', boss: 'alexscaves:forsaken', price: 500 },
  { item: 'born_in_chaos_v1:lifestealer_bone', boss: 'born_in_chaos_v1:lifestealer_true_form', price: 500 },
  { item: 'call_of_yucutan:warrior_helmet', boss: 'call_of_yucutan:ah_puch', price: 400 },
  { item: 'call_of_yucutan:elder_bone', boss: 'call_of_yucutan:kukulkan', price: 400 },
  { item: 'kubejs:stone_of_the_flayed_gods', boss: 'call_of_yucutan:kukulkan', price: 500 },
  { item: 'graveyard:vial_of_blood', boss: 'fromtheshadows:bulldrogioth', price: 400 },
  { item: 'irons_spellbooks:icy_fang', boss: 'irons_spellbooks:ice_spider', price: 400 },
  { item: 'twilightforest:snow_queen_trophy', boss: 'twilightforest:snow_queen', price: 600 },
  { item: 'fdbosses:chesed_trophy', boss: 'fdbosses:chesed', price: 700 },
  { item: 'irons_spellbooks:cinderous_soulcaller', boss: 'bosses_of_mass_destruction:gauntlet', price: 600 },
  { item: 'mutantmore:mutant_husk_vocal_cords', boss: 'mutantmore:mutant_husk', price: 400 },
  { item: 'cataclysm:amethyst_crab_shell', boss: 'cataclysm:amethyst_crab', price: 400 },
  { item: 'mutantmore:mutant_frozen_zombie_spikes', boss: 'mutantmore:mutant_frozen_zombie', price: 400 },
  { item: 'mutantmore:mutant_blaze_core', boss: 'mutantmore:mutant_blaze', price: 400 },
  { item: 'mutantmore:mutant_hoglin_tusk', boss: 'mutantmore:mutant_hoglin', price: 400 },
  { item: 'mutantmore:mutant_jungle_zombie_vine_seed', boss: 'mutantmore:mutant_jungle_zombie', price: 400 },
  { item: 'fdbosses:eye_of_geburah', boss: 'fdbosses:geburah', price: 700 },
  { item: 'roaring:shadow_mantle_chestplate', boss: 'roaring:roaring_knight', price: 700 },
  { item: 'legendary_monsters:eye_crystal', boss: 'legendary_monsters:annihilation_pursuer', price: 700 },
  { item: 'legendary_monsters:air_rune', boss: 'legendary_monsters:cloud_golem', price: 700 },
  { item: 'legendary_monsters:anchor_handle', boss: 'legendary_monsters:ancient_guardian', price: 700 },
  { item: 'legendary_monsters:crystal_of_sandstorm', boss: 'legendary_monsters:dune_sentinel', price: 700 },
  { item: 'legendary_monsters:frozen_rune', boss: 'legendary_monsters:frostbitten_golem', price: 700 },
  { item: 'legendary_monsters:nature_crystal', boss: 'legendary_monsters:overgrown_colossus', price: 700 },
  { item: 'legendary_monsters:corrupted_soul', boss: 'legendary_monsters:posessed_paladin', price: 700 },
  { item: 'legendary_monsters:chorus_crystal', boss: 'legendary_monsters:endersent', price: 700 },
  { item: 'block_factorys_bosses:knight_sword', boss: 'block_factorys_bosses:underworld_knight', price: 800 },
  { item: 'legendary_monsters:lava_eaters_skin', boss: 'legendary_monsters:lava_eater', price: 700 },
  { item: 'legendary_monsters:withered_bone', boss: 'legendary_monsters:withered_abomination', price: 700 },
  { item: 'legendary_monsters:fiery_jaw', boss: 'legendary_monsters:lava_eater', price: 700 },
]

function killedBoss(player, bossId) {
  return player.persistentData.getBoolean(`${bossId}_dead`) === true
}

function makeProgressionRecoveryEntries() {
  return PROGRESSION_RECOVERY_ITEMS.map((entry, index) => ({
    item: entry.item,
    price: entry.price,
    order: index,
    visibleIf: player => killedBoss(player, entry.boss),
  }))
}

const MATERIAL_QUESTLINE_ITEMS = [
  { item: 'minecraft:iron_ingot', quests: ['28C536B58A0373E5'] },
  { item: 'iceandfire:silver_ingot', quests: ['53076ADA12F8D662'] },
  { item: 'minecraft:diamond', quests: ['58AB399D3623A468'] },
  { item: 'vintage:netherite_sheet', quests: ['6041AD363F277C9F'] },
  { item: 'hazennstuff:steel_ingot', quests: ['14A13FE44D2B181B'] },
  { item: 'eeeabsmobs:immortal_ingot', quests: ['0E0FAC6A5A074B58'] },
  { item: 'cataclysm:black_steel_ingot', quests: ['56A091687596730C'] },
  { item: 'soulsweapons:moonstone', quests: ['195E59C75C5BB1B7'] },
  { item: 'irons_spellbooks:arcane_ingot', quests: ['7C7E3B7084A6A39F'] },
  { item: 'apprenticecodex:spellstained_arcane_ingot', quests: ['7391293AF1AFE1B4'] },
  { item: 'hazennstuff:zenalite_ingot', quests: ['30111B39F7CFB664'] },
  { item: 'kubejs:diamond_cube', quests: ['15128E495CD35C3F'] },
  { item: 'iceandfire:ghost_ingot', quests: ['6C99C0AFB9FDBE24', '5AB8119B4CA1897C'] },
  { item: 'eeeabsmobs:ghost_steel_ingot', quests: ['347DD426B20FF805'] },
  { item: 'iceandfire:sapphire_gem', quests: ['4C03FC4060084DDB'] },
  { item: 'gobber2:gobber2_ingot', quests: ['37C0913102848D80'] },
  { item: 'enigmaticlegacy:etherium_ingot', quests: ['68414D25596C7E41'] },
  { item: 'gobber2:gobber2_ingot_nether', quests: ['3749CECD529FE280'] },
  { item: 'gobber2:gobber2_ingot_end', quests: ['4CD9EC974916939D'] },
  { item: 'iceandfire:dragonsteel_ice_ingot', quests: ['7F1BB64973E8463F'] },
  { item: 'iceandfire:dragonsteel_fire_ingot', quests: ['6BDB802FF565DC3E'] },
  { item: 'iceandfire:dragonsteel_lightning_ingot', quests: ['2479AF791AEA7B1E'] },
  { item: 'soulsweapons:soul_ingot', quests: ['1352980FEDDB5FEF'] },
  { item: 'enigmaticlegacy:etherium_ore', quests: ['72570B1D54E56AF3'] },
  { item: 'graveyard:dark_iron_ingot', quests: ['0A22CD60789BE697'] },
  { item: 'born_in_chaos_v1:dark_metal_ingot', quests: ['6D14CBC8CDD541F7'] },
  { item: 'createaddition:electrum_ingot', quests: ['6382C46BB98CE160'] },
  { item: 'soulsweapons:verglas', quests: ['4BE79404F6DE0BF8'] },
  { item: 'soulsweapons:crimson_ingot', quests: ['7AC2E976975BF34C'] },
  { item: 'rats:oratchalcum_ingot', quests: ['60E1D16A17A21363'] },
  { item: 'cataclysm:ancient_metal_ingot', quests: ['5506E02B0AE5153F'] },
  { item: 'traveloptics:verdant_spellweave_ingot', quests: ['256A2D02373E40BB'] },
  { item: 'bonfires:estus_shard', quests: ['69B746A89F1321D2'] },
  { item: 'traveloptics:tectonic_ingot', quests: ['406B5B91E75D2D6C'] },
  { item: 'mebahelcreaturesdraugr:ebony_ingot', quests: ['19501792AA45C6E1'] },
  { item: 'irons_spellbooks:pyrium_ingot', quests: ['5669F18B24EE1551'] },
  { item: 'alexscaves:radon_bottle', quests: ['236CACF48DC98C22'] },
  { item: 'alexscaves:purple_soda_bucket', quests: ['3B3D03102554EC24'] },
  { item: 'minecraft:gold_ingot', quests: ['32859E5450ADA312'] },
  { item: 'born_in_chaos_v1:phantom_powder', quests: ['555C5D9241C7722E'] },
  { item: 'soulsweapons:demon_chunk', quests: ['40FB48E95CE321C7'] },
  { item: 'born_in_chaos_v1:fire_dust', quests: ['3A795647A8F196CD'] },
  { item: 'graveyard:corruption', quests: ['1AEAB0A8F816B4DA'] },
  { item: 'born_in_chaos_v1:pileof_dark_metal', quests: ['3DFB1EFAC886F60B'] },
  { item: 'eeeabsmobs:immortal_debris', quests: ['1D9B32D1926F7D80'] },
  { item: 'cataclysm:black_steel_nugget', quests: ['75326A77E98E45B6'] },
  { item: 'irons_spellbooks:divine_pearl', quests: ['17EE1286B9F1D250'] },
  { item: 'irons_spellbooks:arcane_essence', quests: ['3EA0D2143C91A8A9'] },
  { item: 'hazennstuff:raw_zenalite', quests: ['6C0AEC42474E7AD5'] },
  { item: 'minecraft:golden_apple', quests: ['2EDAE1C33DBF5CC7'] },
  { item: 'mebahelcreaturesdraugr:ebony_scrap', quests: ['06B02C9CA64769FD'] },
  { item: 'kubejs:wildweave_tonic', quests: ['0CD7039689888552'] },
  { item: 'rats:raw_oratchalcum', quests: ['65B59236C63E75EF'] },
  { item: 'kubejs:liquified_ratlantean_spirit_bucket', quests: ['599B124EBB4DB000'] },
  { item: 'minecraft:copper_ingot', quests: ['091FCDF07A5EF5B9'] },
  { item: 'create:brass_ingot', quests: ['2C296BE549D7CF10'] },
  { item: 'vintage:vanadium_ingot', quests: ['5B18E01E33805679'] },
  { item: 'create:polished_rose_quartz', quests: ['224F3A09AC8950A6'] },
  { item: 'create:crushed_raw_copper', quests: ['200442F3E9770674'] },
  { item: 'create:zinc_ingot', quests: ['6F9803D3F04946F9'] },
  { item: 'create:rose_quartz', quests: ['195EB37A572B4BCD'] },
  { item: 'create:crushed_raw_iron', quests: ['34059107FF16A31D'] },
  { item: 'minecraft:redstone', quests: ['2C6C04DE51540B22'] },
  { item: 'minecraft:quartz', quests: ['52C4CB6F4ADEEF0A'] },
  { item: 'fromtheshadows:diabolium_ingot', quests: ['54020F88670213F0'] },
  { item: 'fromtheshadows:crystallized_blood', quests: ['13CF8D91A98053BB'] },
  { item: 'call_of_yucutan:jade', quests: ['40B3D2C62478C8C1'] },
  { item: 'kubejs:sapphire_dust', quests: ['252CA21DF6237FC8'] },
  { item: 'kubejs:jade_dust', quests: ['268AC0E1E4DB60EE'] },
  { item: 'alexscaves:pearl', quests: ['4A6381581A6B3366'] },
  { item: 'gobber2:gobber2_glob_nether', quests: ['1E36DB75DBE9AF5D'] },
  { item: 'kubejs:ender_blood_bucket', quests: ['7FE78A12CD561160'] },
  { item: 'kubejs:gobber_dust', quests: ['5D3E9CB7D849C9FF'] },
  { item: 'iceandfire:summoning_crystal_lightning', quests: ['5CBCA1AAEBEE8315'] },
  { item: 'iceandfire:dragonforge_lightning_core_disabled', quests: ['2DA90F021CE3766C'] },
  { item: 'iceandfire:summoning_crystal_fire', quests: ['3B09BD401119A68F'] },
  { item: 'iceandfire:dragonforge_fire_core_disabled', quests: ['5DFCB121F3175F76'] },
  { item: 'iceandfire:summoning_crystal_ice', quests: ['7E2F4ED1ABF2E834'] },
  { item: 'iceandfire:dragonforge_ice_core_disabled', quests: ['09F2BEA6341AE9CA'] },
  { item: 'irons_spellbooks:cinder_essence', quests: ['762F9522C346EE5F'] },
  { item: 'kubejs:void_bucket', quests: ['7C5F6D9F039972EA'] },
  { item: 'minecraft:coal', quests: ['622795A05F9C166D'] },
  { item: 'hazennstuff:crude_metal', quests: ['02AA0ECE83ED3C7C'] },
  { item: 'quark:diamond_heart', quests: ['487691582650AD64'] },
  { item: 'minecraft:ghast_tear', quests: ['022F39DA32E80320'] },
  { item: 'minecraft:fire_charge', quests: ['2F7861C323FFC2D0'] },
  { item: 'iceandfire:ectoplasm', quests: ['27C8044B5A417665'] },
  { item: 'irons_spellbooks:mithril_ingot', quests: ['0C5ACA4C1F57B958'] },
  { item: 'irons_spellbooks:mithril_scrap', quests: ['5DAA41925F315E4D'] },
  { item: 'irons_spellbooks:ice_venom_vial', quests: ['7663C6AD67E514DC'] },
  { item: 'hazennstuff:pyrium_nugget', quests: ['74F4DA0861FF54E7'] },
  { item: 'alexscaves:amber_monolith', quests: ['44434AE814A4F94D'] },
  { item: 'alexscaves:tectonic_shard', quests: ['76E9AD1ACBC62A8F'] },
]

const MATERIAL_QUESTLINE_PRICE_BY_ITEM = {
  'minecraft:iron_ingot': 450,
  'iceandfire:silver_ingot': 575,
  'minecraft:diamond': 1000,
  'vintage:netherite_sheet': 650,
  'hazennstuff:steel_ingot': 700,
  'eeeabsmobs:immortal_ingot': 1350,
  'cataclysm:black_steel_ingot': 1450,
  'soulsweapons:moonstone': 825,
  'irons_spellbooks:arcane_ingot': 1500,
  'apprenticecodex:spellstained_arcane_ingot': 1750,
  'hazennstuff:zenalite_ingot': 2200,
  'kubejs:diamond_cube': 4000,
  'iceandfire:ghost_ingot': 2500,
  'eeeabsmobs:ghost_steel_ingot': 4000,
  'iceandfire:sapphire_gem': 4300,
  'gobber2:gobber2_ingot': 8500,
  'enigmaticlegacy:etherium_ingot': 9500,
  'gobber2:gobber2_ingot_nether': 10250,
  'gobber2:gobber2_ingot_end': 12000,
  'iceandfire:dragonsteel_ice_ingot': 15000,
  'iceandfire:dragonsteel_fire_ingot': 14750,
  'iceandfire:dragonsteel_lightning_ingot': 14750,
  'soulsweapons:soul_ingot': 2700,
  'enigmaticlegacy:etherium_ore': 8000,
  'graveyard:dark_iron_ingot': 625,
  'born_in_chaos_v1:dark_metal_ingot': 1450,
  'createaddition:electrum_ingot': 1100,
  'soulsweapons:verglas': 2050,
  'soulsweapons:crimson_ingot': 2250,
  'rats:oratchalcum_ingot': 4200,
  'cataclysm:ancient_metal_ingot': 5500,
  'traveloptics:verdant_spellweave_ingot': 7250,
  'bonfires:estus_shard': 2100,
  'traveloptics:tectonic_ingot': 7600,
  'mebahelcreaturesdraugr:ebony_ingot': 3200,
  'irons_spellbooks:pyrium_ingot': 2850,
  'alexscaves:radon_bottle': 2750,
  'alexscaves:purple_soda_bucket': 1100,
  'minecraft:gold_ingot': 125,
  'born_in_chaos_v1:phantom_powder': 225,
  'soulsweapons:demon_chunk': 400,
  'born_in_chaos_v1:fire_dust': 225,
  'graveyard:corruption': 50,
  'born_in_chaos_v1:pileof_dark_metal': 275,
  'eeeabsmobs:immortal_debris': 650,
  'cataclysm:black_steel_nugget': 150,
  'irons_spellbooks:divine_pearl': 325,
  'irons_spellbooks:arcane_essence': 90,
  'hazennstuff:raw_zenalite': 800,
  'minecraft:golden_apple': 250,
  'mebahelcreaturesdraugr:ebony_scrap': 475,
  'kubejs:wildweave_tonic': 1750,
  'rats:raw_oratchalcum': 1050,
  'kubejs:liquified_ratlantean_spirit_bucket': 1750,
  'minecraft:copper_ingot': 150,
  'create:brass_ingot': 225,
  'vintage:vanadium_ingot': 250,
  'create:polished_rose_quartz': 350,
  'create:crushed_raw_copper': 100,
  'create:zinc_ingot': 175,
  'create:rose_quartz': 300,
  'create:crushed_raw_iron': 225,
  'minecraft:redstone': 60,
  'minecraft:quartz': 75,
  'fromtheshadows:diabolium_ingot': 425,
  'fromtheshadows:crystallized_blood': 350,
  'call_of_yucutan:jade': 4450,
  'kubejs:sapphire_dust': 475,
  'kubejs:jade_dust': 500,
  'alexscaves:pearl': 3650,
  'gobber2:gobber2_glob_nether': 1400,
  'kubejs:ender_blood_bucket': 2200,
  'kubejs:gobber_dust': 3000,
  'iceandfire:summoning_crystal_lightning': 2200,
  'iceandfire:dragonforge_lightning_core_disabled': 11000,
  'iceandfire:summoning_crystal_fire': 2200,
  'iceandfire:dragonforge_fire_core_disabled': 11000,
  'iceandfire:summoning_crystal_ice': 2200,
  'iceandfire:dragonforge_ice_core_disabled': 11000,
  'irons_spellbooks:cinder_essence': 150,
  'kubejs:void_bucket': 3000,
  'minecraft:coal': 25,
  'hazennstuff:crude_metal': 100,
  'quark:diamond_heart': 2200,
  'minecraft:ghast_tear': 125,
  'minecraft:fire_charge': 60,
  'iceandfire:ectoplasm': 550,
  'irons_spellbooks:mithril_ingot': 6200,
  'irons_spellbooks:mithril_scrap': 525,
  'irons_spellbooks:ice_venom_vial': 900,
  'hazennstuff:pyrium_nugget': 325,
  'alexscaves:amber_monolith': 850,
  'alexscaves:tectonic_shard': 1600,
}

const MATERIAL_QUESTLINE_EXISTING_BUY_ITEMS = new Set([
  'minecraft:coal',
  'minecraft:copper_ingot',
  'minecraft:iron_ingot',
  'create:zinc_ingot',
  'iceandfire:silver_ingot',
  'minecraft:gold_ingot',
  'minecraft:diamond',
  'graveyard:corruption',
  'irons_spellbooks:arcane_essence',
  'irons_spellbooks:cinder_essence',
])

const MATERIAL_QUESTLINE_QUESTS_BY_ITEM = {}
const MATERIAL_QUESTLINE_QUEST_IDS = new Set()
MATERIAL_QUESTLINE_ITEMS.forEach(entry => {
  const existing = MATERIAL_QUESTLINE_QUESTS_BY_ITEM[entry.item] || []
  entry.quests.forEach(questId => {
    existing.push(questId)
    MATERIAL_QUESTLINE_QUEST_IDS.add(questId)
  })
  MATERIAL_QUESTLINE_QUESTS_BY_ITEM[entry.item] = existing
})

function materialQuestlinePrice(item) {
  const price = MATERIAL_QUESTLINE_PRICE_BY_ITEM[String(item || '')]
  return price === undefined ? 1000 : price
}

function materialQuestIdsForEntry(entry) {
  if (!entry || entry.materialQuestGate === false) return []
  if (Array.isArray(entry.materialQuestIds)) return entry.materialQuestIds
  if (entry.materialQuest) return [entry.materialQuest]
  return MATERIAL_QUESTLINE_QUESTS_BY_ITEM[String(entry.item || '')] || []
}

function hasCompletedAnyMaterialQuest(player, questIds) {
  return questIds.some(questId => SuperiorShop.isQuestCompleted(player, questId))
}

function makeMaterialQuestlineEntries() {
  return MATERIAL_QUESTLINE_ITEMS
    .filter(entry => !MATERIAL_QUESTLINE_EXISTING_BUY_ITEMS.has(entry.item))
    .map((entry, index) => ({
      id: `material_crafting__${slugPart(entry.item)}`,
      item: entry.item,
      price: materialQuestlinePrice(entry.item),
      order: index,
      hoverTheme: 'yellow',
      entryTag: 'material_questline',
      materialQuestIds: entry.quests,
    }))
}

FTBQuestsEvents.completed(event => {
  if (MATERIAL_QUESTLINE_QUEST_IDS.has(String(event.id)) && event.player) {
    SuperiorShop.syncShop(event.player)
  }
})

const SHOP_ITEMS = {
  'tutorial': {
    defaults: {
      side: 'buy',
      hoverTheme: 'light_blue',
    },
    entries: [
      {
        item: 'patchouli:guide_book',
        price: 0,
        nbt: '{"patchouli:book":"patchouli:sup"}',
      },
      {
        item: 'kubejs:class_loot_box',
        price: 200,
        visibleIf: player => (player.persistentData.getBoolean('subclass_chosen')),
      },
      {
        item: 'kubejs:weak_summoning_dust',
        price: 10,
      },
      {
        item: 'kubejs:skill_point',
        price: 25,
        limit: 30,
        scalingPrice: ESCALATING_SKILL_PRICE,
      },
      {
        item: 'kubejs:orb_of_renewal',
        price: 25,
        limit: 25,
        scalingPrice: ESCALATING_ORB_PRICE,
        entryTag: 'flash_orb_meltdown',
      },
      {
        item: 'kubejs:orb_of_socketing',
        price: 25,
        limit: 3,
        scalingPrice: ESCALATING_ORB_PRICE,
        entryTag: 'flash_orb_meltdown',
      },
      {
        item: 'kubejs:orb_of_infusion',
        price: 25,
        limit: 25,
        scalingPrice: ESCALATING_ORB_PRICE,
        entryTag: 'flash_orb_meltdown',
      },
      {
        item: 'kubejs:orb_of_ascension',
        price: 25,
        limit: 25,
        scalingPrice: ESCALATING_ORB_PRICE,
        entryTag: 'flash_orb_meltdown',
      },
      {
        item: 'kubejs:orb_of_imbuement',
        price: 25,
        limit: 25,
        scalingPrice: ESCALATING_ORB_PRICE,
        entryTag: 'flash_orb_meltdown',
      },
      {
        item: 'kubejs:orb_of_reforging',
        price: 25,
        limit: 25,
        scalingPrice: ESCALATING_ORB_PRICE,
        entryTag: 'flash_orb_meltdown',
      },
      {
        item: 'kubejs:orb_of_fate',
        price: 25,
        limit: 25,
        scalingPrice: ESCALATING_ORB_PRICE,
        entryTag: 'flash_orb_meltdown',
      },
    ],
  },

  'death_items': {
    defaults: {
      side: 'buy',
      hoverTheme: 'dark_red',
    },
    entries: [
      {
        item: 'kubejs:tome_of_death',
        price: 15,
        scalingPrice: TOME_OF_DEATH_PRICE,
      },
      {
        item: 'kubejs:effigy_of_the_undying',
        price: 300,
      },
      {
        item: 'minecraft:totem_of_undying',
        price: 750,
      },
    ],
  },

  'gameplay_modifiers': {
    defaults: {
      side: 'buy',
      hoverTheme: 'purple',
      entryTag: 'flash_chaos_coupon',
    },
    entries: global.getAvailableGameplayModifierIds().map(id => ({
      item: `kubejs:${id}`,
      price: 1000,
    })),
  },

  'food': {
    defaults: {
      side: 'buy',
      hoverTheme: 'light_green',
    },
    entries: [
      {
        item: 'minecraft:potato',
        price: 1,
      },
      {
        item: 'minecraft:carrot',
        price: 3,
      },
      {
        item: 'minecraft:apple',
        price: 4,
      },
      {
        item: 'minecraft:baked_potato',
        price: 5,
      },
      {
        item: 'minecraft:bread',
        price: 5,
      },
      {
        item: 'minecraft:beef',
        price: 10,
      },
      {
        item: 'minecraft:porkchop',
        price: 10,
      },
      {
        item: 'minecraft:mutton',
        price: 10,
      },
      {
        item: 'minecraft:chicken',
        price: 10,
      },
    ],
  },

  'specialty_items': {
    defaults: {
      side: 'buy',
      hoverTheme: 'gold',
    },
    entries: [
      {
        item: 'kubejs:devils_deal',
        price: 250,
      },
      {
        item: 'kubejs:pet_killer',
        price: 0,
      },
      {
        item: 'kubejs:time_turner',
        price: 50,
      },
      {
        item: 'kubejs:reset_skills',
        price: 200,
      },
      {
        item: 'kubejs:beastmaster_totem',
        price: 50,
      },
      {
        item: 'bonfires:ash_bone_pile',
        price: 150,
      },
      {
        item: 'miapi:modular_work_bench',
        price: 50,
      },
      {
        item: 'summoningrituals:altar',
        price: 50,
      },
      {
        item: 'minecraft:enchanted_book',
        price: 2000,
        nbt: '{StoredEnchantments:[{id:"minecraft:mending",lvl:1s}]}',
      },
      {
        item: 'minecraft:enchanted_book',
        price: 1000,
        nbt: '{StoredEnchantments:[{id:"yigd:soulbound",lvl:1s}]}',
      },
      {
        item: 'minecraft:slime_ball',
        price: 10,
      },
      {
        item: 'structurecompass:structure_compass',
        price: 75,
      },
      {
        item: 'enigmaticlegacy:cursed_ring',
        price: 150,
      },
      {
        item: 'kubejs:player_waystone',
        price: 200,
      },
      {
        item: 'kubejs:progression_sync',
        price: 0,
      },
    ],
  },

  'boss_items': {
    defaults: {
      side: 'buy',
      hoverTheme: 'purple',
    },
    entries: makeProgressionRecoveryEntries(),
  },

  'inventory_expansion': {
    defaults: {
      side: 'buy',
      hoverTheme: 'orange',
      entryTag: 'flash_inventory_breach',
    },
    entries: [
      {
        item: 'kubejs:inventory_upgrade',
        price: 2500,
        id: 'inventory_upgrade_buy',
        limit: 3,
        scalingPrice: INVENTORY_EXPANSION_PRICE,
      },
    ],
  },

  'create': {
    defaults: {
      side: 'buy',
      hoverTheme: 'yellow',
      entryTag: 'flash_factory_clearance',
    },
    entries: [
      {
        item: 'create:wrench',
        price: 25,
      },
      {
        item: 'create:shaft',
        price: 10,
      },
      {
        item: 'create:belt_connector',
        price: 5,
      },
      {
        item: 'create:super_glue',
        price: 15,
        nbt: '{Damage:0}',
      },
      {
        item: 'create:cogwheel',
        price: 25,
      },
      {
        item: 'create:large_cogwheel',
        price: 30,
      },
      {
        item: 'create:gearbox',
        price: 75,
      },
      {
        item: 'create:vertical_gearbox',
        price: 100,
      },
      {
        item: 'create:clutch',
        price: 100,
      },
      {
        item: 'create:encased_chain_drive',
        price: 100,
      },
      {
        item: 'create:gearshift',
        price: 100,
      },
      {
        item: 'create:rotation_speed_controller',
        price: 150,
      },
      {
        item: 'create:mechanical_press',
        price: 100,
      },
      {
        item: 'create:millstone',
        price: 100,
      },
      {
        item: 'create:piston_extension_pole',
        price: 30,
      },
      {
        item: 'create:mechanical_piston',
        price: 75,
      },
      {
        item: 'create:sticky_mechanical_piston',
        price: 100,
      },
      {
        item: 'create:windmill_bearing',
        price: 75,
      },
      {
        item: 'create:mechanical_bearing',
        price: 75,
      },
      {
        item: 'create:clockwork_bearing',
        price: 200,
      },
      {
        item: 'create:gantry_carriage',
        price: 125,
      },
      {
        item: 'create:mechanical_mixer',
        price: 150,
      },
      {
        item: 'create:deployer',
        price: 150,
      },
      {
        item: 'create:mechanical_drill',
        price: 100,
      },
      {
        item: 'create:mechanical_harvester',
        price: 50,
      },
      {
        item: 'create:mechanical_roller',
        price: 150,
      },
      {
        item: 'create:mechanical_saw',
        price: 100,
      },
      {
        item: 'create:basin',
        price: 100,
      },
      {
        item: 'create:chute',
        price: 75,
      },
      {
        item: 'create:smart_chute',
        price: 100,
      },
      {
        item: 'create:fluid_pipe',
        price: 50,
      },
      {
        item: 'create:mechanical_pump',
        price: 75,
      },
      {
        item: 'create:fluid_tank',
        price: 150,
      },
      {
        item: 'create:hose_pulley',
        price: 150,
      },
      {
        item: 'create:item_drain',
        price: 75,
      },
      {
        item: 'create:spout',
        price: 50,
      },
      {
        item: 'create:linear_chassis',
        price: 50,
      },
      {
        item: 'create:radial_chassis',
        price: 30,
      },
      {
        item: 'create:redstone_contact',
        price: 50,
      },
      {
        item: 'create:elevator_pulley',
        price: 150,
      },
      {
        item: 'create:sequenced_gearshift',
        price: 150,
      },
      {
        item: 'create:analog_lever',
        price: 15,
      },
      {
        item: 'create:pulse_repeater',
        price: 35,
      },
      {
        item: 'create:redstone_link',
        price: 35,
      },
      {
        item: 'create:pulse_extender',
        price: 35,
      },
      {
        item: 'create:powered_latch',
        price: 35,
      },
      {
        item: 'create:powered_toggle_latch',
        price: 35,
      },
      {
        item: 'create:linked_controller',
        price: 15,
      },
      {
        item: 'create:cart_assembler',
        price: 50,
      },
      {
        item: 'create:depot',
        price: 50
      },
      {
        item: 'create:empty_blaze_burner',
        price: 150,
      },
      {
        item: 'create:encased_fan',
        price: 100,
      },
      {
        item: 'create:weighted_ejector',
        price: 75,
      },
      {
        item: 'create:portable_storage_interface',
        price: 150,
      },
      {
        item: 'create_optical:thermal_optical_source',
        price: 350,
      },
      {
        item: 'create_optical:optical_receptor',
        price: 250,
      },
      {
        item: 'create_optical:heavy_optical_receptor',
        price: 250,
      },
      {
        item: 'create_optical:encased_mirror',
        price: 150,
      },
      {
        item: 'create_optical:absorption_polarizing_filter',
        price: 150,
      },
      {
        item: 'create_optical:polarizing_beam_splitter_block',
        price: 150,
      },
      {
        item: 'create_optical:optical_sensor',
        price: 150,
      },
      {
        item: 'create_optical:beam_condenser',
        price: 300,
      },
      {
        item: 'create_optical:beam_focuser',
        price: 175,
      },
      {
        item: 'create_optical:hologram_source',
        price: 150,
      },
      {
        item: 'create_optical:optical_source',
        price: 300,
      },
      {
        item: 'vintage:belt_grinder',
        price: 100,
      },
      {
        item: 'vintage:spring_coiling_machine',
        price: 125,
      },
      {
        item: 'vintage:vacuum_chamber',
        price: 150,
      },
      {
        item: 'vintage:curving_press',
        price: 150,
      },
      {
        item: 'vintage:vibrating_table',
        price: 200,
      },
      {
        item: 'vintage:centrifuge',
        price: 200,
      },
      {
        item: 'vintage:laser',
        price: 250,
      },
      {
        item: 'vintage:helve_hammer',
        price: 250,
      },
      {
        item: 'vintage:lathe',
        price: 300,
      },
      {
        item: 'create:rope_pulley',
        price: 100,
      },
      {
        item: 'bits_n_bobs:chain_pulley',
        price: 100,
      },
      {
        item: 'bits_n_bobs:small_flanged_cogwheel',
        price: 40,
      },
      {
        item: 'bits_n_bobs:large_flanged_cogwheel',
        price: 50,
      },
      {
        item: 'create:water_wheel',
        price: 50,
      },
      {
        item: 'create:large_water_wheel',
        price: 50,
      },
      {
        item: 'create:chain_conveyor',
        price: 50,
      },
      {
        item: 'create:crushing_wheel',
        price: 200,
      },
      {
        item: 'create_new_age:advanced_energiser',
        price: 250,
      },
      {
        item: 'create_new_age:advanced_motor',
        price: 225,
      },
      {
        item: 'create_new_age:advanced_motor_extension',
        price: 650,
      },
      {
        item: 'create_new_age:advanced_solar_heating_plate',
        price: 225,
      },
      {
        item: 'create_new_age:basic_energiser',
        price: 100,
      },
      {
        item: 'create_new_age:basic_motor',
        price: 175,
      },
      {
        item: 'create_new_age:basic_motor_extension',
        price: 350,
      },
      {
        item: 'create_new_age:basic_solar_heating_plate',
        price: 150,
      },
      {
        item: 'create_new_age:carbon_brushes',
        price: 75,
      },
      {
        item: 'create_new_age:copper_wire_block',
        price: 32,
      },
      {
        item: 'create_new_age:corium',
        price: 300,
      },
      {
        item: 'create_new_age:electrical_connector',
        price: 35,
      },
      {
        item: 'create_new_age:generator_coil',
        price: 200,
      },
      {
        item: 'create_new_age:heat_pipe',
        price: 25,
      },
      {
        item: 'create_new_age:heat_pump',
        price: 75,
      },
      {
        item: 'create_new_age:heater',
        price: 225,
      },
      {
        item: 'create_new_age:lamp_post',
        price: 15,
      },
      {
        item: 'create_new_age:overcharged_diamond_wire_block',
        price: 360,
      },
      {
        item: 'create_new_age:overcharged_golden_wire_block',
        price: 120,
      },
      {
        item: 'create_new_age:overcharged_iron_wire_block',
        price: 80,
      },
      {
        item: 'create_new_age:reactor_casing',
        price: 75,
      },
      {
        item: 'create_new_age:reactor_fuel_acceptor',
        price: 400,
      },
      {
        item: 'create_new_age:reactor_glass',
        price: 325,
      },
      {
        item: 'create_new_age:reactor_heat_vent',
        price: 200,
      },
      {
        item: 'create_new_age:reactor_rod',
        price: 1250,
      },
      {
        item: 'create_new_age:reinforced_energiser',
        price: 450,
      },
      {
        item: 'create_new_age:reinforced_motor',
        price: 550,
      },
      {
        item: 'create_new_age:solid_corium',
        price: 300,
      },
      {
        item: 'create_new_age:stirling_engine',
        price: 175,
      },
      {
        item: 'create_new_age:street_light',
        price: 75,
      },
    ],
  },

  'affinity_gems': {
    defaults: {
      side: 'buy',
    },
    entries: [
      {
        item: 'kubejs:exalted_blood_affinity_gem',
        price: 5000,
        hoverTheme: 'yellow',
      },
      {
        item: 'kubejs:superior_blood_affinity_gem',
        price: 2500,
        hoverTheme: 'purple',
      },
      {
        item: 'kubejs:blood_affinity_gem',
        price: 1000,
        hoverTheme: 'blue',
      },
      {
        item: 'kubejs:exalted_holy_affinity_gem',
        price: 5000,
        hoverTheme: 'yellow',
      },
      {
        item: 'kubejs:superior_holy_affinity_gem',
        price: 2500,
        hoverTheme: 'purple',
      },
      {
        item: 'kubejs:holy_affinity_gem',
        price: 1000,
        hoverTheme: 'blue',
      },
      {
        item: 'kubejs:exalted_nature_affinity_gem',
        price: 5000,
        hoverTheme: 'yellow',
      },
      {
        item: 'kubejs:superior_nature_affinity_gem',
        price: 2500,
        hoverTheme: 'purple',
      },
      {
        item: 'kubejs:nature_affinity_gem',
        price: 1000,
        hoverTheme: 'blue',
      },
      {
        item: 'kubejs:exalted_ender_affinity_gem',
        price: 5000,
        hoverTheme: 'yellow',
      },
      {
        item: 'kubejs:superior_ender_affinity_gem',
        price: 2500,
        hoverTheme: 'purple',
      },
      {
        item: 'kubejs:ender_affinity_gem',
        price: 1000,
        hoverTheme: 'blue',
      },
      {
        item: 'kubejs:exalted_ice_affinity_gem',
        price: 5000,
        hoverTheme: 'yellow',
      },
      {
        item: 'kubejs:superior_ice_affinity_gem',
        price: 2500,
        hoverTheme: 'purple',
      },
      {
        item: 'kubejs:ice_affinity_gem',
        price: 1000,
        hoverTheme: 'blue',
      },
      {
        item: 'kubejs:exalted_evocation_affinity_gem',
        price: 5000,
        hoverTheme: 'yellow',
      },
      {
        item: 'kubejs:superior_evocation_affinity_gem',
        price: 2500,
        hoverTheme: 'purple',
      },
      {
        item: 'kubejs:evocation_affinity_gem',
        price: 1000,
        hoverTheme: 'blue',
      },
      {
        item: 'kubejs:exalted_lightning_affinity_gem',
        price: 5000,
        hoverTheme: 'yellow',
      },
      {
        item: 'kubejs:superior_lightning_affinity_gem',
        price: 2500,
        hoverTheme: 'purple',
      },
      {
        item: 'kubejs:lightning_affinity_gem',
        price: 1000,
        hoverTheme: 'blue',
      },
      {
        item: 'kubejs:exalted_aqua_affinity_gem',
        price: 5000,
        hoverTheme: 'yellow',
      },
      {
        item: 'kubejs:superior_aqua_affinity_gem',
        price: 2500,
        hoverTheme: 'purple',
      },
      {
        item: 'kubejs:aqua_affinity_gem',
        price: 1000,
        hoverTheme: 'blue',
      },
      {
        item: 'kubejs:exalted_fire_affinity_gem',
        price: 5000,
        hoverTheme: 'yellow',
      },
      {
        item: 'kubejs:superior_fire_affinity_gem',
        price: 2500,
        hoverTheme: 'purple',
      },
      {
        item: 'kubejs:fire_affinity_gem',
        price: 1000,
        hoverTheme: 'blue',
      },
      {
        item: 'kubejs:geo_affinity_gem',
        price: 1000,
        hoverTheme: 'blue',
      },
      {
        item: 'kubejs:superior_geo_affinity_gem',
        price: 2500,
        hoverTheme: 'purple',
      },
      {
        item: 'kubejs:exalted_geo_affinity_gem',
        price: 5000,
        hoverTheme: 'yellow',
      },
    ],
  },

  'alternative_transportation': {
    defaults: {
      side: 'buy',
    },
    entries: [
      {
        item: 'vc_gliders:paraglider_wood',
        price: 125,
        nbt: '{Damage:0}',
        hoverTheme: 'blue',
      },
      {
        item: 'vc_gliders:paraglider_gold',
        price: 200,
        nbt: '{Damage:0}',
        hoverTheme: 'blue',
      },
      {
        item: 'vc_gliders:paraglider_iron',
        price: 300,
        nbt: '{Damage:0}',
        hoverTheme: 'blue',
      },
      {
        item: 'vc_gliders:paraglider_diamond',
        price: 650,
        nbt: '{Damage:0}',
        hoverTheme: 'purple',
      },
      {
        item: 'grapplemod:grapplinghook',
        price: 150,
        nbt: '{Damage:0,custom:{smartmotor:0b,detachonkeyrelease:0b,rocket_force:1.0d,doublehook:0b,angle:20.0d,motorwhennotcrouching:1b,playermovementmult:1.0d,throwspeed:2.0d,motordampener:0b,rocket_vertical_angle:0.0d,sticky:0b,repelforce:1.0d,attractradius:3.0d,reelin:1b,phaserope:0b,attract:0b,motoracceleration:0.2d,verticalthrowangle:0.0d,hookgravity:1.0d,crc32:2252267022L,maxlen:30.0d,motormaxspeed:4.0d,repel:0b,sneakingangle:10.0d,motorwhencrouching:0b,pullbackwards:1b,smartdoublemotor:1b,sneakingverticalthrowangle:0.0d,rocket_refuel_ratio:15.0d,rocket_active_time:0.5d,oneropepull:0b,enderstaff:0b,motor:0b,rocket:0b}}',
        hoverTheme: 'blue',
      },
      {
        item: 'alexsmobs:straddleboard',
        price: 2500,
        nbt: '{Damage:0,Enchantments:[{id:"alexsmobs:lavawax",lvl:1s}]}',
        hoverTheme: 'yellow',
      },
      {
        item: 'create_hypertube:hypertube_entrance',
        price: 400,
        hoverTheme: 'blue',
      },
      {
        item: 'create_hypertube:hypertube',
        price: 150,
        hoverTheme: 'blue',
      },
      {
        item: 'minecraft:ender_pearl',
        price: 20,
        hoverTheme: 'gray',
      },
      {
        item: 'minecraft:elytra',
        price: 15000,
        nbt: '{Damage:0}',
        hoverTheme: 'yellow',
      },
    ],
  },

  'storage_and_furnaces': {
    defaults: {
      side: 'buy',
    },
    entries: [
      {
        item: 'toms_storage:ts.inventory_connector',
        price: 150,
        hoverTheme: 'blue',
      },
      {
        item: 'toms_storage:ts.storage_terminal',
        price: 150,
        hoverTheme: 'blue',
      },
      {
        item: 'toms_storage:ts.inventory_cable',
        price: 25,
        hoverTheme: 'gray',
      },
      {
        item: 'toms_storage:ts.inventory_cable_connector',
        price: 100,
        hoverTheme: 'blue',
      },
      {
        item: 'toms_storage:ts.crafting_terminal',
        price: 200,
        hoverTheme: 'purple',
      },
      {
        item: 'toms_storage:ts.inventory_hopper_basic',
        price: 50,
        hoverTheme: 'green',
      },
      {
        item: 'toms_storage:ts.level_emitter',
        price: 75,
        hoverTheme: 'green',
      },
      {
        item: 'sophisticatedstorage:chest',
        price: 20,
        nbt: '{woodType:"acacia"}',
        hoverTheme: 'gray',
      },
      {
        item: 'sophisticatedstorage:copper_chest',
        price: 50,
        nbt: '{woodType:"acacia"}',
        hoverTheme: 'green',
      },
      {
        item: 'sophisticatedstorage:iron_chest',
        price: 75,
        nbt: '{woodType:"acacia"}',
        hoverTheme: 'green',
      },
      {
        item: 'sophisticatedstorage:gold_chest',
        price: 100,
        nbt: '{woodType:"acacia"}',
        hoverTheme: 'blue',
      },
      {
        item: 'sophisticatedstorage:diamond_chest',
        price: 300,
        nbt: '{woodType:"acacia"}',
        hoverTheme: 'purple',
      },
      {
        item: 'ironfurnaces:copper_furnace',
        price: 100,
        hoverTheme: 'blue',
      },
      {
        item: 'ironfurnaces:iron_furnace',
        price: 125,
        hoverTheme: 'blue',
      },
      {
        item: 'ironfurnaces:silver_furnace',
        price: 150,
        hoverTheme: 'blue',
      },
      {
        item: 'ironfurnaces:gold_furnace',
        price: 175,
        hoverTheme: 'blue',
      },
      {
        item: 'ironfurnaces:diamond_furnace',
        price: 250,
        hoverTheme: 'purple',
      },
      {
        item: 'ironfurnaces:emerald_furnace',
        price: 350,
        hoverTheme: 'purple',
      },
      {
        item: 'ironfurnaces:obsidian_furnace',
        price: 500,
        hoverTheme: 'yellow',
      },
      {
        item: 'ironfurnaces:netherite_furnace',
        price: 1000,
        hoverTheme: 'yellow',
      },
    ],
  },

  'skill_tokens': {
    defaults: {
      side: 'buy',
      hoverTheme: 'blue',
    },
    entries: [
      {
        item: 'kubejs:catleap',
        price: 250,
      },
      {
        item: 'kubejs:crawl',
        price: 250,
      },
      {
        item: 'kubejs:slide',
        price: 250,
      },
      {
        item: 'kubejs:wall_jump',
        price: 250,
      },
      {
        item: 'kubejs:vertical_wallrun',
        price: 250,
      },
      {
        item: 'kubejs:horizontal_wallrun',
        price: 250,
      },
      {
        item: 'kubejs:hunters_bounty_token',
        price: 250,
      },
      {
        item: 'kubejs:valkyrie_token',
        price: 250,
      },
      {
        item: 'kubejs:combat_roll_token',
        price: 250,
      },
    ],
  },

  'tables_on_a_stick': {
    defaults: {
      side: 'buy',
      hoverTheme: 'green',
    },
    entries: [
      {
        item: 'crafting_on_a_stick:crafting_table',
        price: 50,
      },
      {
        item: 'crafting_on_a_stick:loom',
        price: 50,
      },
      {
        item: 'crafting_on_a_stick:grindstone',
        price: 50,
      },
      {
        item: 'crafting_on_a_stick:cartography_table',
        price: 50,
      },
      {
        item: 'crafting_on_a_stick:stonecutter',
        price: 50,
      },
      {
        item: 'crafting_on_a_stick:smithing_table',
        price: 50,
      },
      {
        item: 'crafting_on_a_stick:anvil',
        price: 50,
      },
    ],
  },

  'backpacks': {
    defaults: {
      side: 'buy',
    },
    entries: [
      {
        item: 'sophisticatedbackpacks:backpack',
        price: 750,
        entryTag: 'flash_pocket_storage_backpacks',
        hoverTheme: 'green',
      },
      {
        item: 'sophisticatedbackpacks:copper_backpack',
        price: 1000,
        entryTag: 'flash_pocket_storage_backpacks',
        hoverTheme: 'blue',
      },
      {
        item: 'sophisticatedbackpacks:iron_backpack',
        price: 1500,
        entryTag: 'flash_pocket_storage_backpacks',
        hoverTheme: 'blue',
      },
      {
        item: 'sophisticatedbackpacks:gold_backpack',
        price: 2000,
        entryTag: 'flash_pocket_storage_backpacks',
        hoverTheme: 'purple',
      },
      {
        item: 'sophisticatedbackpacks:diamond_backpack',
        price: 3500,
        entryTag: 'flash_pocket_storage_backpacks',
        hoverTheme: 'yellow',
      },
      {
        item: 'sophisticatedbackpacks:netherite_backpack',
        price: 5000,
        entryTag: 'flash_pocket_storage_backpacks',
        hoverTheme: 'yellow',
      },
      {
        item: 'sophisticatedbackpacks:inception_upgrade',
        price: 3000,
        entryTag: 'flash_pocket_storage_upgrades',
        hoverTheme: 'purple',
      },
      {
        item: 'sophisticatedbackpacks:feeding_upgrade',
        price: 1000,
        entryTag: 'flash_pocket_storage_upgrades',
        hoverTheme: 'blue',
      },
      {
        item: 'sophisticatedbackpacks:pickup_upgrade',
        price: 750,
        entryTag: 'flash_pocket_storage_upgrades',
        hoverTheme: 'green',
      },
      {
        item: 'sophisticatedbackpacks:filter_upgrade',
        price: 750,
        entryTag: 'flash_pocket_storage_upgrades',
        hoverTheme: 'green',
      },
      {
        item: 'sophisticatedbackpacks:magnet_upgrade',
        price: 750,
        entryTag: 'flash_pocket_storage_upgrades',
        hoverTheme: 'green',
      },
      {
        item: 'sophisticatedbackpacks:compacting_upgrade',
        price: 750,
        entryTag: 'flash_pocket_storage_upgrades',
        hoverTheme: 'green',
      },
      {
        item: 'sophisticatedbackpacks:void_upgrade',
        price: 750,
        entryTag: 'flash_pocket_storage_upgrades',
        hoverTheme: 'green',
      },
      {
        item: 'sophisticatedbackpacks:restock_upgrade',
        price: 750,
        entryTag: 'flash_pocket_storage_upgrades',
        hoverTheme: 'green',
      },
      {
        item: 'sophisticatedbackpacks:deposit_upgrade',
        price: 750,
        entryTag: 'flash_pocket_storage_upgrades',
        hoverTheme: 'green',
      },
      {
        item: 'sophisticatedbackpacks:refill_upgrade',
        price: 750,
        entryTag: 'flash_pocket_storage_upgrades',
        hoverTheme: 'green',
      },
      {
        item: 'sophisticatedbackpacks:anvil_upgrade',
        price: 750,
        entryTag: 'flash_pocket_storage_upgrades',
        hoverTheme: 'green',
      },
      {
        item: 'sophisticatedbackpacks:smelting_upgrade',
        price: 750,
        entryTag: 'flash_pocket_storage_upgrades',
        hoverTheme: 'green',
      },
      {
        item: 'sophisticatedbackpacks:smoking_upgrade',
        price: 750,
        entryTag: 'flash_pocket_storage_upgrades',
        hoverTheme: 'green',
      },
      {
        item: 'sophisticatedbackpacks:blasting_upgrade',
        price: 750,
        entryTag: 'flash_pocket_storage_upgrades',
        hoverTheme: 'green',
      },
      {
        item: 'sophisticatedbackpacks:crafting_upgrade',
        price: 750,
        entryTag: 'flash_pocket_storage_upgrades',
        hoverTheme: 'green',
      },
      {
        item: 'sophisticatedbackpacks:tool_swapper_upgrade',
        price: 750,
        entryTag: 'flash_pocket_storage_upgrades',
        hoverTheme: 'green',
      },
      {
        item: 'sophisticatedbackpacks:tank_upgrade',
        price: 750,
        entryTag: 'flash_pocket_storage_upgrades',
        hoverTheme: 'green',
      },
      {
        item: 'sophisticatedbackpacks:battery_upgrade',
        price: 750,
        entryTag: 'flash_pocket_storage_upgrades',
        hoverTheme: 'green',
      },
      {
        item: 'sophisticatedbackpacks:pump_upgrade',
        price: 750,
        entryTag: 'flash_pocket_storage_upgrades',
        hoverTheme: 'green',
      },
      {
        item: 'sophisticatedbackpacks:stack_upgrade_starter_tier',
        price: 1500,
        entryTag: 'flash_pocket_storage_upgrades',
        hoverTheme: 'blue',
      },
      {
        item: 'sophisticatedbackpacks:stack_upgrade_tier_1',
        price: 3000,
        entryTag: 'flash_pocket_storage_upgrades',
        hoverTheme: 'purple',
      },
      {
        item: 'sophisticatedbackpacks:stack_upgrade_tier_2',
        price: 5000,
        entryTag: 'flash_pocket_storage_upgrades',
        hoverTheme: 'yellow',
      },
    ],
  },

  'curios_slots': {
    defaults: {
      side: 'buy',
      hoverTheme: 'purple',
      scalingPrice: 1000,
      entryTag: 'flash_curio_overflow',
    },
    entries: [
      {
        item: 'kubejs:ring_slot_expansion',
        price: 5000,
        limit: 2,
      },
      {
        item: 'kubejs:necklace_slot_expansion',
        price: 5000,
        limit: 1,
      },
      {
        item: 'kubejs:belt_slot_expansion',
        price: 5000,
        limit: 1,
      },
      {
        item: 'kubejs:charm_slot_expansion',
        price: 5000,
        limit: 1,
      },
      {
        item: 'kubejs:talent_slot_expansion',
        price: 5000,
        limit: 1,
      },
      {
        item: 'kubejs:scroll_slot_expansion',
        price: 5000,
        limit: 1,
      },
      {
        item: 'kubejs:hands_slot_expansion',
        price: 5000,
        limit: 1,
      },
      {
        item: 'kubejs:head_slot_expansion',
        price: 5000,
        limit: 1,
      },
      {
        item: 'kubejs:feet_slot_expansion',
        price: 5000,
        limit: 1,
      },
    ],
  },

  'greater_potions': {
    defaults: {
      side: 'buy',
      hoverTheme: 'purple',
    },
    entries: [
      {
        item: 'kubejs:greater_health_elixir',
        price: 1000,
        limit: 1,
      },
      {
        item: 'kubejs:greater_mana_elixir',
        price: 1000,
        limit: 1,
      },
    ],
  },

  'exalted_potions': {
    defaults: {
      side: 'buy',
      hoverTheme: 'yellow',
    },
    entries: [
      {
        item: 'kubejs:exalted_health_elixir',
        price: 2500,
        limit: 1,
      },
      {
        item: 'kubejs:exalted_mana_elixir',
        price: 2500,
        limit: 1,
      },
    ],
  },

    'resources': {
    defaults: {
      side: 'buy',
      hoverTheme: 'gray',
    },
    entries: [
      {
        item: 'minecraft:coal',
        side: 'both',
        buyPrice: 25,
        sellPrice: 1,
      },
      {
        item: 'minecraft:copper_ingot',
        side: 'both',
        buyPrice: 150,
        sellPrice: 3,
      },
      {
        item: 'minecraft:iron_ingot',
        side: 'both',
        buyPrice: 450,
        sellPrice: 4,
      },
      {
        item: 'create:zinc_ingot',
        side: 'both',
        buyPrice: 175,
        sellPrice: 4,
      },
      {
        item: 'iceandfire:silver_ingot',
        side: 'both',
        buyPrice: 575,
        sellPrice: 5,
      },
      {
        item: 'minecraft:gold_ingot',
        side: 'both',
        buyPrice: 125,
        sellPrice: 5,
      },
      {
        item: 'minecraft:diamond',
        side: 'both',
        buyPrice: 1000,
        sellPrice: 10,
      },
      {
        item: 'graveyard:corruption',
        side: 'both',
        buyPrice: 50,
        sellPrice: 3,
      },
      {
        item: 'minecraft:leather',
        side: 'both',
        buyPrice: 3,
        sellPrice: 3,
        hoverTheme: 'gray',
      },
      {
        item: 'minecraft:andesite',
        side: 'both',
        buyPrice: 5,
        sellPrice: 1,
        hoverTheme: 'gray',
      },
      {
        item: 'minecraft:crying_obsidian',
        side: 'both',
        buyPrice: 150,
        sellPrice: 150,
        hoverTheme: 'blue',
      },
    ],
  },

  'material_crafting': {
    defaults: {
      side: 'buy',
      hoverTheme: 'yellow',
      entryTag: 'material_questline',
    },
    entries: makeMaterialQuestlineEntries(),
  },

  'alexs_caves': {
    defaults: {
      side: 'buy',
      hoverTheme: 'blue',
    },
    entries: [
      {
        item: 'alexscaves:cave_codex',
        price: 500,
        nbt: '{CaveBiome:"alexscaves:magnetic_caves"}',
      },
      {
        item: 'alexscaves:cave_codex',
        price: 500,
        nbt: '{CaveBiome:"alexscaves:primordial_caves"}',
      },
      {
        item: 'alexscaves:cave_codex',
        price: 500,
        nbt: '{CaveBiome:"alexscaves:toxic_caves"}',
      },
      {
        item: 'alexscaves:cave_codex',
        price: 500,
        nbt: '{CaveBiome:"alexscaves:abyssal_chasm"}',
      },
      {
        item: 'alexscaves:cave_codex',
        price: 500,
        nbt: '{CaveBiome:"alexscaves:forlorn_hollows"}',
      },
      {
        item: 'alexscaves:cave_codex',
        price: 500,
        nbt: '{CaveBiome:"alexscaves:candy_cavity"}',
      },
      {
        item: 'alexscaves:cave_tablet',
        price: 250,
        nbt: '{CaveBiome:"alexscaves:magnetic_caves"}',
      },
      {
        item: 'alexscaves:cave_tablet',
        price: 250,
        nbt: '{CaveBiome:"alexscaves:primordial_caves"}',
      },
      {
        item: 'alexscaves:cave_tablet',
        price: 250,
        nbt: '{CaveBiome:"alexscaves:toxic_caves"}',
      },
      {
        item: 'alexscaves:cave_tablet',
        price: 250,
        nbt: '{CaveBiome:"alexscaves:abyssal_chasm"}',
      },
      {
        item: 'alexscaves:cave_tablet',
        price: 250,
        nbt: '{CaveBiome:"alexscaves:forlorn_hollows"}',
      },
      {
        item: 'alexscaves:cave_tablet',
        price: 250,
        nbt: '{CaveBiome:"alexscaves:candy_cavity"}',
      },
    ],
  },

  'mining': {
    defaults: {
      side: 'buy',
    },
    entries: [
      {
        item: 'minecraft:stone_pickaxe',
        price: 50,
        nbt: '{Damage:0}',
        hoverTheme: 'green',
      },
      {
        item: 'minecraft:iron_pickaxe',
        price: 100,
        nbt: '{Damage:0}',
        hoverTheme: 'green',
      },
      {
        item: 'minecraft:golden_pickaxe',
        price: 150,
        nbt: '{Damage:0}',
        hoverTheme: 'blue',
      },
      {
        item: 'justhammers:stone_hammer',
        price: 125,
        nbt: '{Damage:0}',
        hoverTheme: 'blue',
      },
      {
        item: 'justhammers:iron_hammer',
        price: 250,
        nbt: '{Damage:0}',
        hoverTheme: 'blue',
      },
      {
        item: 'justhammers:gold_hammer',
        price: 300,
        nbt: '{Damage:0,reinforce_level:0,reinforce_max:10}',
        hoverTheme: 'blue',
      },
      {
        item: 'justhammers:diamond_hammer',
        price: 500,
        nbt: '{Damage:0,reinforce_level:0,reinforce_max:10}',
        hoverTheme: 'blue',
      },
    ],
  },

  'light_sources': {
    defaults: {
      side: 'buy',
      hoverTheme: 'gray',
    },
    entries: [
      {
        item: 'minecraft:torch',
        price: 3,
      },
      {
        item: 'minecraft:soul_torch',
        price: 10,
      },
      {
        item: 'minecraft:redstone_torch',
        price: 15,
      },
      {
        item: 'minecraft:lantern',
        price: 15,
      },
      {
        item: 'minecraft:soul_lantern',
        price: 20,
      },
    ],
  },

  'arrows': {
    defaults: {
      side: 'buy',
      entryTag: 'flash_hunters_window',
    },
    entries: [
      {
        item: 'minecraft:arrow',
        price: 5,
        hoverTheme: 'gray',
      },
      {
        item: 'xtraarrows:flint_atlantean_arrow',
        price: 10,
        hoverTheme: 'gray',
      },
      {
        item: 'xtraarrows:flint_torch_arrow',
        price: 10,
        hoverTheme: 'gray',
      },
      {
        item: 'xtraarrows:apple_arrow',
        price: 10,
        hoverTheme: 'gray',
      },
      {
        item: 'xtraarrows:extinguishing_arrow',
        price: 10,
        hoverTheme: 'gray',
      },
      {
        item: 'xtraarrows:leashing_arrow',
        price: 10,
        hoverTheme: 'gray',
      },
      {
        item: 'xtraarrows:flint_soul_torch_arrow',
        price: 15,
        hoverTheme: 'gray',
      },
      {
        item: 'xtraarrows:flint_slime_arrow',
        price: 15,
        hoverTheme: 'gray',
      },
      {
        item: 'xtraarrows:incendiary_arrow',
        price: 15,
        hoverTheme: 'gray',
      },
      {
        item: 'xtraarrows:flint_lantern_arrow',
        price: 15,
        hoverTheme: 'gray',
      },
      {
        item: 'xtraarrows:iron_arrow',
        price: 15,
        hoverTheme: 'gray',
      },
      {
        item: 'xtraarrows:flint_gravity_arrow',
        price: 20,
        hoverTheme: 'gray',
      },
      {
        item: 'xtraarrows:breeding_arrow',
        price: 20,
        hoverTheme: 'gray',
      },
      {
        item: 'xtraarrows:flint_explosive_arrow',
        price: 25,
        hoverTheme: 'gray',
      },
      {
        item: 'xtraarrows:flint_lightning_arrow',
        price: 25,
        hoverTheme: 'gray',
      },
      {
        item: 'xtraarrows:flint_vexing_arrow',
        price: 25,
        hoverTheme: 'gray',
      },
      {
        item: 'xtraarrows:flint_magnetic_arrow',
        price: 25,
        hoverTheme: 'gray',
      },
      {
        item: 'xtraarrows:flint_tracking_arrow',
        price: 25,
        hoverTheme: 'gray',
      },
      {
        item: 'xtraarrows:flint_freezing_arrow',
        price: 25,
        hoverTheme: 'gray',
      },
      {
        item: 'xtraarrows:flint_ender_arrow',
        price: 25,
        hoverTheme: 'gray',
      },
      {
        item: 'xtraarrows:golden_apple_arrow',
        price: 50,
        hoverTheme: 'green',
      },
    ],
  },

  'magic_items': {
    defaults: {
      side: 'buy',
      entryTag: 'flash_arcane_liquidation',
    },
    entries: [
      {
        item: 'irons_spellbooks:scroll',
        price: 300,
        nbt: '{"irons_spellbooks:spell_container":{spellWheel:0b,mustEquip:0b,maxSpells:1,data:[{locked:1b,index:0,id:"irons_spellbooks:dragon_breath",level:1}]}}',
        hoverTheme: 'blue',
      },
      {
        item: 'irons_spellbooks:scroll',
        price: 300,
        nbt: '{ISB_Spells:{spellWheel:0b,mustEquip:0b,maxSpells:1,data:[{locked:1b,id:"irons_spellbooks:magic_missile",index:0,level:1}]}}',
        hoverTheme: 'blue',
      },
      {
        item: 'irons_spellbooks:scroll',
        price: 300,
        nbt: '{ISB_Spells:{spellWheel:0b,mustEquip:0b,maxSpells:1,data:[{locked:1b,id:"irons_spellbooks:starfall",index:0,level:1}]}}',
        hoverTheme: 'blue',
      },
      {
        item: 'irons_spellbooks:scroll',
        price: 300,
        nbt: '{"irons_spellbooks:spell_container":{spellWheel:0b,mustEquip:0b,maxSpells:1,data:[{locked:1b,index:0,id:"irons_spellbooks:teleport",level:1}]}}',
        hoverTheme: 'blue',
      },
      {
        item: 'irons_spellbooks:scroll',
        price: 300,
        nbt: '{ISB_Spells:{spellWheel:0b,mustEquip:0b,maxSpells:1,data:[{locked:1b,index:0,id:"irons_spellbooks:heat_surge",level:1}]}}',
        hoverTheme: 'blue',
      },
      {
        item: 'irons_spellbooks:scroll',
        price: 300,
        nbt: '{ISB_Spells:{spellWheel:0b,mustEquip:0b,maxSpells:1,data:[{locked:1b,id:"irons_spellbooks:firebolt",index:0,level:1}]}}',
        hoverTheme: 'blue',
      },
      {
        item: 'irons_spellbooks:scroll',
        price: 300,
        nbt: '{ISB_Spells:{spellWheel:0b,mustEquip:0b,maxSpells:1,data:[{locked:1b,id:"irons_spellbooks:blaze_storm",index:0,level:1}]}}',
        hoverTheme: 'blue',
      },
      {
        item: 'irons_spellbooks:scroll',
        price: 300,
        nbt: '{ISB_Spells:{spellWheel:0b,mustEquip:0b,maxSpells:1,data:[{locked:1b,index:0,id:"irons_spellbooks:burning_dash",level:1}]}}',
        hoverTheme: 'blue',
      },
      {
        item: 'irons_spellbooks:scroll',
        price: 300,
        nbt: '{ISB_Spells:{spellWheel:0b,mustEquip:0b,maxSpells:1,data:[{locked:1b,index:0,id:"irons_spellbooks:chain_lightning",level:1}]}}',
        hoverTheme: 'blue',
      },
      {
        item: 'irons_spellbooks:scroll',
        price: 300,
        nbt: '{ISB_Spells:{spellWheel:0b,mustEquip:0b,maxSpells:1,data:[{locked:1b,id:"irons_spellbooks:electrocute",index:0,level:1}]}}',
        hoverTheme: 'blue',
      },
      {
        item: 'irons_spellbooks:scroll',
        price: 300,
        nbt: '{ISB_Spells:{spellWheel:0b,mustEquip:0b,maxSpells:1,data:[{locked:1b,id:"irons_spellbooks:lightning_lance",index:0,level:1}]}}',
        hoverTheme: 'blue',
      },
      {
        item: 'irons_spellbooks:scroll',
        price: 300,
        nbt: '{ISB_Spells:{spellWheel:0b,mustEquip:0b,maxSpells:1,data:[{locked:1b,index:0,id:"irons_spellbooks:shockwave",level:1}]}}',
        hoverTheme: 'blue',
      },
      {
        item: 'irons_spellbooks:scroll',
        price: 300,
        nbt: '{ISB_Spells:{spellWheel:0b,mustEquip:0b,maxSpells:1,data:[{locked:1b,index:0,id:"irons_spellbooks:chain_creeper",level:1}]}}',
        hoverTheme: 'blue',
      },
      {
        item: 'irons_spellbooks:scroll',
        price: 300,
        nbt: '{ISB_Spells:{spellWheel:0b,mustEquip:0b,maxSpells:1,data:[{locked:1b,id:"irons_spellbooks:fang_ward",index:0,level:1}]}}',
        hoverTheme: 'blue',
      },
      {
        item: 'irons_spellbooks:scroll',
        price: 300,
        nbt: '{ISB_Spells:{spellWheel:0b,mustEquip:0b,maxSpells:1,data:[{locked:1b,index:0,id:"irons_spellbooks:firecracker",level:1}]}}',
        hoverTheme: 'blue',
      },
      {
        item: 'irons_spellbooks:scroll',
        price: 300,
        nbt: '{ISB_Spells:{spellWheel:0b,mustEquip:0b,maxSpells:1,data:[{locked:1b,id:"irons_spellbooks:shield",index:0,level:1}]}}',
        hoverTheme: 'blue',
      },
      {
        item: 'irons_spellbooks:scroll',
        price: 300,
        nbt: '{ISB_Spells:{spellWheel:0b,mustEquip:0b,maxSpells:1,data:[{locked:1b,index:0,id:"irons_spellbooks:poison_arrow",level:1}]}}',
        hoverTheme: 'blue',
      },
      {
        item: 'irons_spellbooks:scroll',
        price: 300,
        nbt: '{ISB_Spells:{spellWheel:0b,mustEquip:0b,maxSpells:1,data:[{locked:1b,id:"irons_spellbooks:poison_breath",index:0,level:1}]}}',
        hoverTheme: 'blue',
      },
      {
        item: 'irons_spellbooks:scroll',
        price: 300,
        nbt: '{ISB_Spells:{spellWheel:0b,mustEquip:0b,maxSpells:1,data:[{locked:1b,id:"irons_spellbooks:poison_splash",index:0,level:1}]}}',
        hoverTheme: 'blue',
      },
      {
        item: 'irons_spellbooks:scroll',
        price: 300,
        nbt: '{ISB_Spells:{spellWheel:0b,mustEquip:0b,maxSpells:1,data:[{locked:1b,id:"irons_spellbooks:acid_orb",index:0,level:1}]}}',
        hoverTheme: 'blue',
      },
      {
        item: 'irons_spellbooks:scroll',
        price: 300,
        nbt: '{ISB_Spells:{spellWheel:0b,mustEquip:0b,maxSpells:1,data:[{locked:1b,index:0,id:"irons_spellbooks:blood_needles",level:1}]}}',
        hoverTheme: 'blue',
      },
      {
        item: 'irons_spellbooks:scroll',
        price: 300,
        nbt: '{ISB_Spells:{spellWheel:0b,mustEquip:0b,maxSpells:1,data:[{locked:1b,index:0,id:"irons_spellbooks:blood_step",level:1}]}}',
        hoverTheme: 'blue',
      },
      {
        item: 'irons_spellbooks:scroll',
        price: 300,
        nbt: '{ISB_Spells:{spellWheel:0b,mustEquip:0b,maxSpells:1,data:[{locked:1b,index:0,id:"irons_spellbooks:devour",level:1}]}}',
        hoverTheme: 'blue',
      },
      {
        item: 'irons_spellbooks:scroll',
        price: 300,
        nbt: '{ISB_Spells:{spellWheel:0b,mustEquip:0b,maxSpells:1,data:[{locked:1b,id:"irons_spellbooks:ray_of_siphoning",index:0,level:1}]}}',
        hoverTheme: 'blue',
      },
      {
        item: 'irons_spellbooks:scroll',
        price: 300,
        nbt: '{ISB_Spells:{spellWheel:0b,mustEquip:0b,maxSpells:1,data:[{locked:1b,id:"irons_spellbooks:cone_of_cold",index:0,level:1}]}}',
        hoverTheme: 'blue',
      },
      {
        item: 'irons_spellbooks:scroll',
        price: 300,
        nbt: '{ISB_Spells:{spellWheel:0b,mustEquip:0b,maxSpells:1,data:[{locked:1b,index:0,id:"irons_spellbooks:icicle",level:1}]}}',
        hoverTheme: 'blue',
      },
      {
        item: 'irons_spellbooks:scroll',
        price: 300,
        nbt: '{ISB_Spells:{spellWheel:0b,mustEquip:0b,maxSpells:1,data:[{locked:1b,index:0,id:"irons_spellbooks:ray_of_frost",level:1}]}}',
        hoverTheme: 'blue',
      },
      {
        item: 'irons_spellbooks:scroll',
        price: 300,
        nbt: '{ISB_Spells:{spellWheel:0b,mustEquip:0b,maxSpells:1,data:[{locked:1b,index:0,id:"irons_spellbooks:frostwave",level:1}]}}',
        hoverTheme: 'blue',
      },
      {
        item: 'irons_spellbooks:fire_rune',
        price: 250,
        hoverTheme: 'blue',
      },
      {
        item: 'irons_spellbooks:ice_rune',
        price: 250,
        hoverTheme: 'blue',
      },
      {
        item: 'irons_spellbooks:lightning_rune',
        price: 250,
        hoverTheme: 'blue',
      },
      {
        item: 'irons_spellbooks:ender_rune',
        price: 250,
        hoverTheme: 'blue',
      },
      {
        item: 'irons_spellbooks:holy_rune',
        price: 250,
        hoverTheme: 'blue',
      },
      {
        item: 'irons_spellbooks:blood_rune',
        price: 250,
        hoverTheme: 'blue',
      },
      {
        item: 'irons_spellbooks:evocation_rune',
        price: 250,
        hoverTheme: 'blue',
      },
      {
        item: 'irons_spellbooks:arcane_rune',
        price: 250,
        hoverTheme: 'blue',
      },
      {
        item: 'irons_spellbooks:cooldown_rune',
        price: 250,
        hoverTheme: 'blue',
      },
      {
        item: 'irons_spellbooks:protection_rune',
        price: 250,
        hoverTheme: 'blue',
      },
      {
        item: 'irons_spellbooks:nature_rune',
        price: 250,
        hoverTheme: 'blue',
      },
      {
        item: 'irons_spellbooks:common_ink',
        price: 150,
        hoverTheme: 'blue',
      },
      {
        item: 'irons_spellbooks:uncommon_ink',
        price: 250,
        hoverTheme: 'blue',
      },
      {
        item: 'irons_spellbooks:rare_ink',
        price: 500,
        hoverTheme: 'blue',
      },
      {
        item: 'irons_spellbooks:lesser_spell_slot_upgrade',
        price: 1250,
        hoverTheme: 'purple',
        order: 44,
        entryTag: '',
      },
      {
        item: 'irons_spellbooks:arcane_essence',
        price: 90,
        hoverTheme: 'blue',
        order: 45,
      },
      {
        item: 'irons_spellbooks:cinder_essence',
        price: 150,
        hoverTheme: 'blue',
        order: 46,
      },
    ],
  },

  'logs': {
    defaults: {
      side: 'buy',
      hoverTheme: 'gray',
    },
    entries: [
      {
        item: 'minecraft:oak_log',
        price: 3,
      },
      {
        item: 'minecraft:jungle_log',
        price: 3,
      },
      {
        item: 'minecraft:acacia_log',
        price: 3,
      },
      {
        item: 'minecraft:dark_oak_log',
        price: 3,
      },
      {
        item: 'minecraft:mangrove_log',
        price: 3,
      },
      {
        item: 'minecraft:cherry_log',
        price: 3,
      },
      {
        item: 'alexscaves:pewen_log',
        price: 3,
      },
      {
        item: 'alexscaves:thornwood_log',
        price: 3,
      },
      {
        item: 'blue_skies:bluebright_log',
        price: 3,
      },
      {
        item: 'blue_skies:starlit_log',
        price: 3,
      },
      {
        item: 'blue_skies:frostbright_log',
        price: 3,
      },
      {
        item: 'blue_skies:comet_log',
        price: 3,
      },
      {
        item: 'blue_skies:lunar_log',
        price: 3,
      },
      {
        item: 'blue_skies:dusk_log',
        price: 3,
      },
      {
        item: 'blue_skies:maple_log',
        price: 3,
      },
      {
        item: 'biomeswevegone:baobab_log',
        price: 3,
      },
      {
        item: 'biomeswevegone:blue_enchanted_log',
        price: 3,
      },
      {
        item: 'biomeswevegone:cika_log',
        price: 3,
      },
      {
        item: 'biomeswevegone:cypress_log',
        price: 3,
      },
      {
        item: 'biomeswevegone:ebony_log',
        price: 3,
      },
      {
        item: 'biomeswevegone:fir_log',
        price: 3,
      },
      {
        item: 'biomeswevegone:green_enchanted_log',
        price: 3,
      },
      {
        item: 'biomeswevegone:holly_log',
        price: 3,
      },
      {
        item: 'biomeswevegone:ironwood_log',
        price: 3,
      },
      {
        item: 'biomeswevegone:mahogany_log',
        price: 3,
      },
      {
        item: 'biomeswevegone:maple_log',
        price: 3,
      },
      {
        item: 'biomeswevegone:pine_log',
        price: 3,
      },
      {
        item: 'biomeswevegone:rainbow_eucalyptus_log',
        price: 3,
      },
      {
        item: 'biomeswevegone:redwood_log',
        price: 3,
      },
      {
        item: 'biomeswevegone:sakura_log',
        price: 3,
      },
      {
        item: 'biomeswevegone:skyris_log',
        price: 3,
      },
      {
        item: 'biomeswevegone:white_mangrove_log',
        price: 3,
      },
      {
        item: 'biomeswevegone:willow_log',
        price: 3,
      },
      {
        item: 'biomeswevegone:witch_hazel_log',
        price: 3,
      },
      {
        item: 'biomeswevegone:zelkova_log',
        price: 3,
      },
      {
        item: 'regions_unexplored:ashen_log',
        price: 3,
      },
      {
        item: 'regions_unexplored:brimwood_log',
        price: 3,
      },
      {
        item: 'regions_unexplored:blackwood_log',
        price: 3,
      },
      {
        item: 'regions_unexplored:cobalt_log',
        price: 3,
      },
      {
        item: 'regions_unexplored:cypress_log',
        price: 3,
      },
      {
        item: 'twilightforest:canopy_log',
        price: 3,
      },
      {
        item: 'twilightforest:dark_log',
        price: 3,
      },
      {
        item: 'quark:ancient_log',
        price: 3,
      },
      {
        item: 'quark:azalea_log',
        price: 3,
      },
      {
        item: 'quark:blossom_log',
        price: 3,
      },
      {
        item: 'rats:pirat_log',
        price: 3,
      },
      {
        item: 'regions_unexplored:dead_log',
        price: 3,
      },
      {
        item: 'regions_unexplored:kapok_log',
        price: 3,
      },
      {
        item: 'regions_unexplored:magnolia_log',
        price: 3,
      },
      {
        item: 'regions_unexplored:mauve_log',
        price: 3,
      },
      {
        item: 'regions_unexplored:pine_log',
        price: 3,
      },
      {
        item: 'regions_unexplored:redwood_log',
        price: 3,
      },
      {
        item: 'regions_unexplored:socotra_log',
        price: 3,
      },
      {
        item: 'regions_unexplored:willow_log',
        price: 3,
      },
      {
        item: 'minecraft:spruce_log',
        price: 3,
      },
    ],
  },

  'glass': {
    defaults: {
      side: 'buy',
      hoverTheme: 'gray',
    },
    entries: [
      {
        item: 'minecraft:glass',
        price: 5,
      },
      {
        item: 'minecraft:white_stained_glass',
        price: 10,
      },
      {
        item: 'minecraft:light_gray_stained_glass',
        price: 10,
      },
      {
        item: 'minecraft:gray_stained_glass',
        price: 10,
      },
      {
        item: 'minecraft:black_stained_glass',
        price: 10,
      },
      {
        item: 'minecraft:brown_stained_glass',
        price: 10,
      },
      {
        item: 'minecraft:red_stained_glass',
        price: 10,
      },
      {
        item: 'minecraft:orange_stained_glass',
        price: 10,
      },
      {
        item: 'minecraft:yellow_stained_glass',
        price: 10,
      },
      {
        item: 'minecraft:lime_stained_glass',
        price: 10,
      },
      {
        item: 'minecraft:green_stained_glass',
        price: 10,
      },
      {
        item: 'minecraft:cyan_stained_glass',
        price: 10,
      },
      {
        item: 'minecraft:light_blue_stained_glass',
        price: 10,
      },
      {
        item: 'minecraft:blue_stained_glass',
        price: 10,
      },
      {
        item: 'minecraft:purple_stained_glass',
        price: 10,
      },
      {
        item: 'minecraft:magenta_stained_glass',
        price: 10,
      },
      {
        item: 'minecraft:pink_stained_glass',
        price: 10,
      },
    ],
  },

  'beds': {
    defaults: {
      side: 'buy',
      hoverTheme: 'gray',
    },
    entries: [
      {
        item: 'minecraft:white_bed',
        price: 25,
      },
      {
        item: 'minecraft:light_gray_bed',
        price: 25,
      },
      {
        item: 'minecraft:gray_bed',
        price: 25,
      },
      {
        item: 'minecraft:black_bed',
        price: 25,
      },
      {
        item: 'minecraft:brown_bed',
        price: 25,
      },
      {
        item: 'minecraft:red_bed',
        price: 25,
      },
      {
        item: 'minecraft:orange_bed',
        price: 25,
      },
      {
        item: 'minecraft:yellow_bed',
        price: 25,
      },
      {
        item: 'minecraft:lime_bed',
        price: 25,
      },
      {
        item: 'minecraft:green_bed',
        price: 25,
      },
      {
        item: 'minecraft:cyan_bed',
        price: 25,
      },
      {
        item: 'minecraft:light_blue_bed',
        price: 25,
      },
      {
        item: 'minecraft:blue_bed',
        price: 25,
      },
      {
        item: 'minecraft:purple_bed',
        price: 25,
      },
      {
        item: 'minecraft:magenta_bed',
        price: 25,
      },
      {
        item: 'minecraft:pink_bed',
        price: 25,
      },
    ],
  },

  'fishing': {
    defaults: {
      side: 'buy',
      hoverTheme: 'cyan',
    },
    entries: [
      {
        item: 'tide:fishing_journal',
        price: 5,
      },
      {
        item: 'tide:stone_fishing_rod',
        price: 50,
        nbt: '{Damage:0,bait-contents:{size:0},modifier:{line:{},bobber:{},hook:{}}}',
      },
      {
        item: 'tide:iron_fishing_rod',
        price: 150,
        nbt: '{Damage:0,bait-contents:{size:0},modifier:{line:{},bobber:{},hook:{}}}',
      },
      {
        item: 'tide:golden_fishing_rod',
        price: 200,
        nbt: '{Damage:0,bait-contents:{size:0},modifier:{line:{},bobber:{},hook:{}}}',
      },
      {
        item: 'tide:crystal_fishing_rod',
        price: 200,
        nbt: '{Damage:0,bait-contents:{size:0},modifier:{line:{},bobber:{},hook:{}}}',
      },
      {
        item: 'tide:diamond_fishing_rod',
        price: 400,
        nbt: '{Damage:0,bait-contents:{size:0},modifier:{line:{},bobber:{},hook:{}}}',
      },
      {
        item: 'tide:netherite_fishing_rod',
        price: 600,
        nbt: '{Damage:0,bait-contents:{size:0},modifier:{line:{},bobber:{},hook:{}}}',
      },
      {
        item: 'tide:bait',
        price: 25,
      },
      {
        item: 'tide:lucky_bait',
        price: 75,
      },
      {
        item: 'tide:magnetic_bait',
        price: 50,
      },
      {
        item: 'tide:fishing_hook',
        price: 75,
      },
      {
        item: 'tide:iron_fishing_hook',
        price: 100,
      },
      {
        item: 'tide:lavaproof_fishing_hook',
        price: 150,
      },
      {
        item: 'tide:fishing_line',
        price: 10,
      },
      {
        item: 'tide:braided_line',
        price: 30,
      },
      {
        item: 'tide:reinforced_line',
        price: 30,
      },
    ],
  },

  'potion_creation': {
    defaults: {
      side: 'buy',
    },
    entries: [
      {
        item: 'minecraft:brewing_stand',
        price: 250,
        hoverTheme: 'blue',
      },
      {
        item: 'minecraft:glass_bottle',
        price: 10,
        hoverTheme: 'gray',
      },
      {
        item: 'minecraft:nether_wart',
        price: 25,
        hoverTheme: 'gray',
      },
      {
        item: 'minecraft:gunpowder',
        price: 35,
        hoverTheme: 'green',
      },
      {
        item: 'irons_spellbooks:alchemist_cauldron',
        price: 750,
        hoverTheme: 'purple',
      },
    ],
  },

  'arcane_ciphers': {
    defaults: {
      side: 'buy',
      hoverTheme: 'blue',
    },
    entries: [
      {
        item: 'kubejs:sunstrike',
        price: 250,
      },
      {
        item: 'kubejs:echoing_strike',
        price: 250,
      },
      {
        item: 'kubejs:berserk',
        price: 250,
      },
      {
        item: 'kubejs:blazing',
        price: 250,
      },
      {
        item: 'kubejs:adrenaline',
        price: 250,
      },
      {
        item: 'kubejs:glacial_grasp',
        price: 250,
      },
      {
        item: 'kubejs:gusting',
        price: 250,
      },
      {
        item: 'kubejs:soulsteal',
        price: 250,
      },
      {
        item: 'kubejs:thunderstorm',
        price: 250,
      },
      {
        item: 'kubejs:strength',
        price: 250,
      },
      {
        item: 'kubejs:resistance',
        price: 250,
      },
      {
        item: 'kubejs:charged',
        price: 250,
      },
      {
        item: 'kubejs:thorns',
        price: 250,
      },
    ],
  },

  'dragon_eggs': {
    defaults: {
      side: 'buy',
      hoverTheme: 'yellow',
    },
    entries: [
      {
        item: 'iceandfire:dragonegg_red',
        price: 7500,
      },
      {
        item: 'iceandfire:dragonegg_green',
        price: 7500,
      },
      {
        item: 'iceandfire:dragonegg_bronze',
        price: 7500,
      },
      {
        item: 'iceandfire:dragonegg_gray',
        price: 7500,
      },
      {
        item: 'iceandfire:dragonegg_blue',
        price: 7500,
      },
      {
        item: 'iceandfire:dragonegg_white',
        price: 7500,
      },
      {
        item: 'iceandfire:dragonegg_sapphire',
        price: 7500,
      },
      {
        item: 'iceandfire:dragonegg_silver',
        price: 7500,
      },
      {
        item: 'iceandfire:dragonegg_electric',
        price: 7500,
      },
      {
        item: 'iceandfire:dragonegg_copper',
        price: 7500,
      },
      {
        item: 'iceandfire:dragonegg_black',
        price: 7500,
      },
    ],
  },

  'spawn_eggs': {
    defaults: {
      side: 'buy',
      hoverTheme: 'red',
    },
    entries: [
      {
        item: 'minecraft:spawner',
        price: 1000,
      },
      {
        item: 'mutantmonsters:mutant_creeper_spawn_egg',
        price: 1000,
      },
      {
        item: 'mutantmonsters:mutant_enderman_spawn_egg',
        price: 1000,
      },
      {
        item: 'mutantmonsters:mutant_skeleton_spawn_egg',
        price: 1000,
      },
      {
        item: 'mutantmonsters:mutant_zombie_spawn_egg',
        price: 1000,
      },
      {
        item: 'cataclysm:wadjet_spawn_egg',
        price: 1000,
      },
      {
        item: 'cataclysm:kobolediator_spawn_egg',
        price: 1000,
      },
      {
        item: 'cataclysm:aptrgangr_spawn_egg',
        price: 1000,
      },
      {
        item: 'cataclysm:coralssus_spawn_egg',
        price: 1000,
      },
      {
        item: 'iceandfire:spawn_egg_troll',
        price: 1000,
      },
    ],
  },

  'collection_sea_creatures': {
    defaults: {
      side: 'sell',
      scalingPrice: {
        mode: 'multiply',
        factor: 0.5,
      },
      entryTag: 'flash_abyssal_buyback',
    },
    entries: [
      {
        item: 'alexscaves:lanternfish',
        price: 50,
        hoverTheme: 'gray',
      },
      {
        item: 'alexscaves:radgill',
        price: 50,
        hoverTheme: 'gray',
      },
      {
        item: 'alexscaves:tripodfish',
        price: 50,
        hoverTheme: 'gray',
      },
      {
        item: 'alexsmobs:blobfish',
        price: 50,
        hoverTheme: 'gray',
      },
      {
        item: 'alexsmobs:flying_fish',
        price: 50,
        hoverTheme: 'gray',
      },
      {
        item: 'aquamirae:spinefish',
        price: 50,
        hoverTheme: 'gray',
      },
      {
        item: 'blue_skies:charscale_moki',
        price: 50,
        hoverTheme: 'gray',
      },
      {
        item: 'blue_skies:grittle_flatfish',
        price: 50,
        hoverTheme: 'gray',
      },
      {
        item: 'blue_skies:horizofin_tunid',
        price: 50,
        hoverTheme: 'gray',
      },
      {
        item: 'blue_skies:municipal_monkfish',
        price: 50,
        hoverTheme: 'gray',
      },
      {
        item: 'cataclysm:lionfish',
        price: 50,
        hoverTheme: 'gray',
      },
      {
        item: 'minecraft:cod',
        price: 50,
        hoverTheme: 'gray',
      },
      {
        item: 'minecraft:pufferfish',
        price: 50,
        hoverTheme: 'gray',
      },
      {
        item: 'minecraft:salmon',
        price: 50,
        hoverTheme: 'gray',
      },
      {
        item: 'minecraft:tropical_fish',
        price: 50,
        hoverTheme: 'gray',
      },
      {
        item: 'rats:ratfish',
        price: 50,
        hoverTheme: 'gray',
      },
      {
        item: 'starcatcher:aquamarine_pike',
        price: 50,
        hoverTheme: 'gray',
      },
      {
        item: 'starcatcher:blossomfish',
        price: 50,
        hoverTheme: 'gray',
      },
      {
        item: 'starcatcher:bluegigi',
        price: 50,
        hoverTheme: 'gray',
      },
      {
        item: 'starcatcher:cactifish',
        price: 50,
        hoverTheme: 'gray',
      },
      {
        item: 'starcatcher:crystalback_boreal',
        price: 50,
        hoverTheme: 'gray',
      },
      {
        item: 'starcatcher:crystalback_minnow',
        price: 50,
        hoverTheme: 'gray',
      },
      {
        item: 'starcatcher:crystalback_sturgeon',
        price: 50,
        hoverTheme: 'gray',
      },
      {
        item: 'starcatcher:crystalback_trout',
        price: 50,
        hoverTheme: 'gray',
      },
      {
        item: 'starcatcher:deepjaw_herring',
        price: 50,
        hoverTheme: 'gray',
      },
      {
        item: 'starcatcher:deepslatefish',
        price: 50,
        hoverTheme: 'gray',
      },
      {
        item: 'starcatcher:downfall_bream',
        price: 50,
        hoverTheme: 'gray',
      },
      {
        item: 'starcatcher:driftfin',
        price: 50,
        hoverTheme: 'gray',
      },
      {
        item: 'starcatcher:drifting_bream',
        price: 50,
        hoverTheme: 'gray',
      },
      {
        item: 'starcatcher:dripfin',
        price: 50,
        hoverTheme: 'gray',
      },
      {
        item: 'starcatcher:dusktail_snapper',
        price: 50,
        hoverTheme: 'gray',
      },
      {
        item: 'starcatcher:embergill',
        price: 50,
        hoverTheme: 'gray',
      },
      {
        item: 'starcatcher:frostgill_chub',
        price: 50,
        hoverTheme: 'gray',
      },
      {
        item: 'starcatcher:frostjaw_trout',
        price: 50,
        hoverTheme: 'gray',
      },
      {
        item: 'starcatcher:glowstone_seeker',
        price: 50,
        hoverTheme: 'gray',
      },
      {
        item: 'starcatcher:gold_fan',
        price: 50,
        hoverTheme: 'gray',
      },
      {
        item: 'starcatcher:hollowbelly_darter',
        price: 50,
        hoverTheme: 'gray',
      },
      {
        item: 'starcatcher:icetooth_sturgeon',
        price: 50,
        hoverTheme: 'gray',
      },
      {
        item: 'starcatcher:mistback_chub',
        price: 50,
        hoverTheme: 'gray',
      },
      {
        item: 'starcatcher:obidontiee',
        price: 50,
        hoverTheme: 'gray',
      },
      {
        item: 'starcatcher:pale_carp',
        price: 50,
        hoverTheme: 'gray',
      },
      {
        item: 'starcatcher:peakdweller',
        price: 50,
        hoverTheme: 'gray',
      },
      {
        item: 'starcatcher:pink_koi',
        price: 50,
        hoverTheme: 'gray',
      },
      {
        item: 'starcatcher:rockgill',
        price: 50,
        hoverTheme: 'gray',
      },
      {
        item: 'starcatcher:sandtail',
        price: 50,
        hoverTheme: 'gray',
      },
      {
        item: 'starcatcher:scalding_pike',
        price: 50,
        hoverTheme: 'gray',
      },
      {
        item: 'starcatcher:scorchfish',
        price: 50,
        hoverTheme: 'gray',
      },
      {
        item: 'starcatcher:sea_bass',
        price: 50,
        hoverTheme: 'gray',
      },
      {
        item: 'starcatcher:stonefish',
        price: 50,
        hoverTheme: 'gray',
      },
      {
        item: 'starcatcher:whiteveil',
        price: 50,
        hoverTheme: 'gray',
      },
      {
        item: 'starcatcher:wintery_pike',
        price: 50,
        hoverTheme: 'gray',
      },
      {
        item: 'tide:amber_rockfish',
        price: 50,
        hoverTheme: 'gray',
      },
      {
        item: 'tide:anchovy',
        price: 50,
        hoverTheme: 'gray',
      },
      {
        item: 'tide:ash_perch',
        price: 50,
        hoverTheme: 'gray',
      },
      {
        item: 'tide:bedrock_bug',
        price: 50,
        hoverTheme: 'gray',
      },
      {
        item: 'tide:black_crappie',
        price: 50,
        hoverTheme: 'gray',
      },
      {
        item: 'tide:bluegill',
        price: 50,
        hoverTheme: 'gray',
      },
      {
        item: 'tide:brook_trout',
        price: 50,
        hoverTheme: 'gray',
      },
      {
        item: 'tide:carp',
        price: 50,
        hoverTheme: 'gray',
      },
      {
        item: 'tide:cave_crawler',
        price: 50,
        hoverTheme: 'gray',
      },
      {
        item: 'tide:cave_eel',
        price: 50,
        hoverTheme: 'gray',
      },
      {
        item: 'tide:deep_grouper',
        price: 50,
        hoverTheme: 'gray',
      },
      {
        item: 'tide:ember_koi',
        price: 50,
        hoverTheme: 'gray',
      },
      {
        item: 'tide:enderfin',
        price: 50,
        hoverTheme: 'gray',
      },
      {
        item: 'tide:flounder',
        price: 50,
        hoverTheme: 'gray',
      },
      {
        item: 'tide:incandescent_larva',
        price: 50,
        hoverTheme: 'gray',
      },
      {
        item: 'tide:largemouth_bass',
        price: 50,
        hoverTheme: 'gray',
      },
      {
        item: 'tide:mackerel',
        price: 50,
        hoverTheme: 'gray',
      },
      {
        item: 'tide:magma_mackerel',
        price: 50,
        hoverTheme: 'gray',
      },
      {
        item: 'tide:ocean_perch',
        price: 50,
        hoverTheme: 'gray',
      },
      {
        item: 'tide:pale_clubfish',
        price: 50,
        hoverTheme: 'gray',
      },
      {
        item: 'tide:pike',
        price: 50,
        hoverTheme: 'gray',
      },
      {
        item: 'tide:rainbow_trout',
        price: 50,
        hoverTheme: 'gray',
      },
      {
        item: 'tide:red_snapper',
        price: 50,
        hoverTheme: 'gray',
      },
      {
        item: 'tide:shadow_snapper',
        price: 50,
        hoverTheme: 'gray',
      },
      {
        item: 'tide:sleepy_carp',
        price: 50,
        hoverTheme: 'gray',
      },
      {
        item: 'tide:smallmouth_bass',
        price: 50,
        hoverTheme: 'gray',
      },
      {
        item: 'tide:snook',
        price: 50,
        hoverTheme: 'gray',
      },
      {
        item: 'tide:tuna',
        price: 50,
        hoverTheme: 'gray',
      },
      {
        item: 'tide:white_crappie',
        price: 50,
        hoverTheme: 'gray',
      },
      {
        item: 'tide:yellow_perch',
        price: 50,
        hoverTheme: 'gray',
      },
      {
        item: 'starcatcher:bigeye_tuna',
        price: 100,
        hoverTheme: 'green',
      },
      {
        item: 'starcatcher:blue_crystal_fin',
        price: 100,
        hoverTheme: 'green',
      },
      {
        item: 'starcatcher:elderscale',
        price: 100,
        hoverTheme: 'green',
      },
      {
        item: 'starcatcher:end_glow',
        price: 100,
        hoverTheme: 'green',
      },
      {
        item: 'starcatcher:garnet_mackerel',
        price: 100,
        hoverTheme: 'green',
      },
      {
        item: 'starcatcher:ghostly_pike',
        price: 100,
        hoverTheme: 'green',
      },
      {
        item: 'starcatcher:glowing_dark',
        price: 100,
        hoverTheme: 'green',
      },
      {
        item: 'starcatcher:ironjaw_herring',
        price: 100,
        hoverTheme: 'green',
      },
      {
        item: 'starcatcher:magma_fish',
        price: 100,
        hoverTheme: 'green',
      },
      {
        item: 'starcatcher:mirage_carp',
        price: 100,
        hoverTheme: 'green',
      },
      {
        item: 'starcatcher:morganite',
        price: 100,
        hoverTheme: 'green',
      },
      {
        item: 'starcatcher:petaldrift_carp',
        price: 100,
        hoverTheme: 'green',
      },
      {
        item: 'starcatcher:pinfish',
        price: 100,
        hoverTheme: 'green',
      },
      {
        item: 'starcatcher:pyrotrout',
        price: 100,
        hoverTheme: 'green',
      },
      {
        item: 'starcatcher:redscaled_tuna',
        price: 100,
        hoverTheme: 'green',
      },
      {
        item: 'starcatcher:sculkfish',
        price: 100,
        hoverTheme: 'green',
      },
      {
        item: 'starcatcher:silverfin_pike',
        price: 100,
        hoverTheme: 'green',
      },
      {
        item: 'starcatcher:silverveil_perch',
        price: 100,
        hoverTheme: 'green',
      },
      {
        item: 'starcatcher:sludge_catfish',
        price: 100,
        hoverTheme: 'green',
      },
      {
        item: 'starcatcher:vivid_moss',
        price: 100,
        hoverTheme: 'green',
      },
      {
        item: 'starcatcher:willish',
        price: 100,
        hoverTheme: 'green',
      },
      {
        item: 'starcatcher:yellowstone_fish',
        price: 100,
        hoverTheme: 'green',
      },
      {
        item: 'tide:abyss_angler',
        price: 100,
        hoverTheme: 'green',
      },
      {
        item: 'tide:angelfish',
        price: 100,
        hoverTheme: 'green',
      },
      {
        item: 'tide:anglerfish',
        price: 100,
        hoverTheme: 'green',
      },
      {
        item: 'tide:blue_neonfish',
        price: 100,
        hoverTheme: 'green',
      },
      {
        item: 'tide:catfish',
        price: 100,
        hoverTheme: 'green',
      },
      {
        item: 'tide:chorus_cod',
        price: 100,
        hoverTheme: 'green',
      },
      {
        item: 'tide:crystal_shrimp',
        price: 100,
        hoverTheme: 'green',
      },
      {
        item: 'tide:deep_blue',
        price: 100,
        hoverTheme: 'green',
      },
      {
        item: 'tide:dripstone_darter',
        price: 100,
        hoverTheme: 'green',
      },
      {
        item: 'tide:ender_glider',
        price: 100,
        hoverTheme: 'green',
      },
      {
        item: 'tide:endergazer',
        price: 100,
        hoverTheme: 'green',
      },
      {
        item: 'tide:glowfish',
        price: 100,
        hoverTheme: 'green',
      },
      {
        item: 'tide:guppy',
        price: 100,
        hoverTheme: 'green',
      },
      {
        item: 'tide:iron_tetra',
        price: 100,
        hoverTheme: 'green',
      },
      {
        item: 'tide:judgment_fish',
        price: 100,
        hoverTheme: 'green',
      },
      {
        item: 'tide:lapis_lanternfish',
        price: 100,
        hoverTheme: 'green',
      },
      {
        item: 'tide:obsidian_pike',
        price: 100,
        hoverTheme: 'green',
      },
      {
        item: 'tide:violet_carp',
        price: 100,
        hoverTheme: 'green',
      },
      {
        item: 'tide:volcano_tuna',
        price: 100,
        hoverTheme: 'green',
      },
      {
        item: 'tide:walleye',
        price: 100,
        hoverTheme: 'green',
      },
      {
        item: 'starcatcher:agave_bream',
        price: 150,
        hoverTheme: 'blue',
      },
      {
        item: 'starcatcher:blue_herring',
        price: 150,
        hoverTheme: 'blue',
      },
      {
        item: 'starcatcher:charfish',
        price: 150,
        hoverTheme: 'blue',
      },
      {
        item: 'starcatcher:cinder_squid',
        price: 150,
        hoverTheme: 'blue',
      },
      {
        item: 'starcatcher:fossilized_angelfish',
        price: 150,
        hoverTheme: 'blue',
      },
      {
        item: 'starcatcher:glowstone_pufferfish',
        price: 150,
        hoverTheme: 'blue',
      },
      {
        item: 'starcatcher:lightning_bass',
        price: 150,
        hoverTheme: 'blue',
      },
      {
        item: 'starcatcher:lily_snapper',
        price: 150,
        hoverTheme: 'blue',
      },
      {
        item: 'starcatcher:molten_shrimp',
        price: 150,
        hoverTheme: 'blue',
      },
      {
        item: 'starcatcher:pale_pinfish',
        price: 150,
        hoverTheme: 'blue',
      },
      {
        item: 'starcatcher:sporefish',
        price: 150,
        hoverTheme: 'blue',
      },
      {
        item: 'starcatcher:sun_seeking_carp',
        price: 150,
        hoverTheme: 'blue',
      },
      {
        item: 'starcatcher:suneater',
        price: 150,
        hoverTheme: 'blue',
      },
      {
        item: 'starcatcher:sunny_sturgeon',
        price: 150,
        hoverTheme: 'blue',
      },
      {
        item: 'starcatcher:thunder_bass',
        price: 150,
        hoverTheme: 'blue',
      },
      {
        item: 'tide:arapaima',
        price: 150,
        hoverTheme: 'blue',
      },
      {
        item: 'tide:bedrock_tetra',
        price: 150,
        hoverTheme: 'blue',
      },
      {
        item: 'tide:blossom_bass',
        price: 150,
        hoverTheme: 'blue',
      },
      {
        item: 'tide:crimson_fangjaw',
        price: 150,
        hoverTheme: 'blue',
      },
      {
        item: 'tide:crystalline_carp',
        price: 150,
        hoverTheme: 'blue',
      },
      {
        item: 'tide:dutchman_sock',
        price: 150,
        hoverTheme: 'blue',
      },
      {
        item: 'tide:elytrout',
        price: 150,
        hoverTheme: 'blue',
      },
      {
        item: 'tide:frostbite_flounder',
        price: 150,
        hoverTheme: 'blue',
      },
      {
        item: 'tide:gilded_minnow',
        price: 150,
        hoverTheme: 'blue',
      },
      {
        item: 'tide:inferno_guppy',
        price: 150,
        hoverTheme: 'blue',
      },
      {
        item: 'tide:luminescent_jellyfish',
        price: 150,
        hoverTheme: 'blue',
      },
      {
        item: 'tide:mahi_mahi',
        price: 150,
        hoverTheme: 'blue',
      },
      {
        item: 'tide:manta_ray',
        price: 150,
        hoverTheme: 'blue',
      },
      {
        item: 'tide:mirage_catfish',
        price: 150,
        hoverTheme: 'blue',
      },
      {
        item: 'tide:nephrosilu',
        price: 150,
        hoverTheme: 'blue',
      },
      {
        item: 'tide:pentapus',
        price: 150,
        hoverTheme: 'blue',
      },
      {
        item: 'tide:red_40',
        price: 150,
        hoverTheme: 'blue',
      },
      {
        item: 'tide:sailfish',
        price: 150,
        hoverTheme: 'blue',
      },
      {
        item: 'tide:sand_tiger_shark',
        price: 150,
        hoverTheme: 'blue',
      },
      {
        item: 'tide:slimy_salmon',
        price: 150,
        hoverTheme: 'blue',
      },
      {
        item: 'tide:soulscale',
        price: 150,
        hoverTheme: 'blue',
      },
      {
        item: 'tide:spore_stalker',
        price: 150,
        hoverTheme: 'blue',
      },
      {
        item: 'tide:sturgeon',
        price: 150,
        hoverTheme: 'blue',
      },
      {
        item: 'tide:swordfish',
        price: 150,
        hoverTheme: 'blue',
      },
      {
        item: 'tide:vengeance',
        price: 150,
        hoverTheme: 'blue',
      },
      {
        item: 'tide:warped_guppy',
        price: 150,
        hoverTheme: 'blue',
      },
      {
        item: 'tide:witherfin',
        price: 150,
        hoverTheme: 'blue',
      },
      {
        item: 'starcatcher:amethystback',
        price: 200,
        hoverTheme: 'purple',
      },
      {
        item: 'starcatcher:bright_amethyst_snapper',
        price: 200,
        hoverTheme: 'purple',
      },
      {
        item: 'starcatcher:carpenjoe',
        price: 200,
        hoverTheme: 'purple',
      },
      {
        item: 'starcatcher:dark_amethyst_snapper',
        price: 200,
        hoverTheme: 'purple',
      },
      {
        item: 'starcatcher:molten_deepslate_crab',
        price: 200,
        hoverTheme: 'purple',
      },
      {
        item: 'starcatcher:rose_siamese_fish',
        price: 200,
        hoverTheme: 'purple',
      },
      {
        item: 'starcatcher:sage_catfish',
        price: 200,
        hoverTheme: 'purple',
      },
      {
        item: 'starcatcher:scorched_bloodsucker',
        price: 200,
        hoverTheme: 'purple',
      },
      {
        item: 'starcatcher:the_quarrish',
        price: 200,
        hoverTheme: 'purple',
      },
      {
        item: 'starcatcher:twilight_koi',
        price: 200,
        hoverTheme: 'purple',
      },
      {
        item: 'starcatcher:voidbiter',
        price: 200,
        hoverTheme: 'purple',
      },
      {
        item: 'starcatcher:willow_bream',
        price: 200,
        hoverTheme: 'purple',
      },
      {
        item: 'tide:aquathorn',
        price: 200,
        hoverTheme: 'purple',
      },
      {
        item: 'tide:blazing_swordfish',
        price: 200,
        hoverTheme: 'purple',
      },
      {
        item: 'tide:bull_shark',
        price: 200,
        hoverTheme: 'purple',
      },
      {
        item: 'tide:chasm_eel',
        price: 200,
        hoverTheme: 'purple',
      },
      {
        item: 'tide:darkness_eater',
        price: 200,
        hoverTheme: 'purple',
      },
      {
        item: 'tide:echo_snapper',
        price: 200,
        hoverTheme: 'purple',
      },
      {
        item: 'tide:great_white_shark',
        price: 200,
        hoverTheme: 'purple',
      },
      {
        item: 'tide:mantyvern',
        price: 200,
        hoverTheme: 'purple',
      },
      {
        item: 'tide:marstilus',
        price: 200,
        hoverTheme: 'purple',
      },
      {
        item: 'tide:mooneye',
        price: 200,
        hoverTheme: 'purple',
      },
      {
        item: 'tide:neptune_koi',
        price: 200,
        hoverTheme: 'purple',
      },
      {
        item: 'tide:pluto_snail',
        price: 200,
        hoverTheme: 'purple',
      },
      {
        item: 'tide:saturn_cuttlefish',
        price: 200,
        hoverTheme: 'purple',
      },
      {
        item: 'tide:shadow_shark',
        price: 200,
        hoverTheme: 'purple',
      },
      {
        item: 'tide:snatcher_squid',
        price: 200,
        hoverTheme: 'purple',
      },
      {
        item: 'tide:sun_emblem',
        price: 200,
        hoverTheme: 'purple',
      },
      {
        item: 'tide:uranias_pisces',
        price: 200,
        hoverTheme: 'purple',
      },
      {
        item: 'starcatcher:aurora',
        price: 400,
        hoverTheme: 'yellow',
      },
      {
        item: 'starcatcher:azure_crystalback_minnow',
        price: 400,
        hoverTheme: 'yellow',
      },
      {
        item: 'starcatcher:boreal',
        price: 400,
        hoverTheme: 'yellow',
      },
      {
        item: 'starcatcher:cerberay',
        price: 400,
        hoverTheme: 'yellow',
      },
      {
        item: 'starcatcher:joel',
        price: 400,
        hoverTheme: 'yellow',
      },
      {
        item: 'starcatcher:lush_pike',
        price: 400,
        hoverTheme: 'yellow',
      },
      {
        item: 'starcatcher:shroomfish',
        price: 400,
        hoverTheme: 'yellow',
      },
      {
        item: 'starcatcher:vesani',
        price: 400,
        hoverTheme: 'yellow',
      },
      {
        item: 'starcatcher:ward',
        price: 400,
        hoverTheme: 'yellow',
      },
      {
        item: 'stardew_fishing:blazing_oarfish',
        price: 400,
        hoverTheme: 'yellow',
      },
      {
        item: 'stardew_fishing:chromatic_arapaima',
        price: 400,
        hoverTheme: 'yellow',
      },
      {
        item: 'stardew_fishing:crystalline_snakehead',
        price: 400,
        hoverTheme: 'yellow',
      },
      {
        item: 'stardew_fishing:cyclops_mahimahi',
        price: 400,
        hoverTheme: 'yellow',
      },
      {
        item: 'stardew_fishing:demon_gar',
        price: 400,
        hoverTheme: 'yellow',
      },
      {
        item: 'stardew_fishing:golden_snook',
        price: 400,
        hoverTheme: 'yellow',
      },
      {
        item: 'stardew_fishing:goliath_grouper',
        price: 400,
        hoverTheme: 'yellow',
      },
      {
        item: 'stardew_fishing:sabretoothed_tigerfish',
        price: 400,
        hoverTheme: 'yellow',
      },
      {
        item: 'stardew_fishing:storm_tarpon',
        price: 400,
        hoverTheme: 'yellow',
      },
      {
        item: 'stardew_fishing:vampire_payara',
        price: 400,
        hoverTheme: 'yellow',
      },
      {
        item: 'tide:alpha_fish',
        price: 400,
        hoverTheme: 'yellow',
      },
      {
        item: 'tide:coelacanth',
        price: 400,
        hoverTheme: 'yellow',
      },
      {
        item: 'tide:devils_hole_pupfish',
        price: 400,
        hoverTheme: 'yellow',
      },
      {
        item: 'tide:dragon_fish',
        price: 400,
        hoverTheme: 'yellow',
      },
      {
        item: 'tide:midas_fish',
        price: 400,
        hoverTheme: 'yellow',
      },
      {
        item: 'tide:shooting_starfish',
        price: 400,
        hoverTheme: 'yellow',
      },
      {
        item: 'tide:voidseeker',
        price: 400,
        hoverTheme: 'yellow',
      },
    ],
  },

  'collection_seeds': {
    defaults: {
      side: 'sell',
      hoverTheme: 'light_green',
      entryTag: 'flash_seed_gold_rush',
    },
    entries: [
      {
        item: 'minecraft:wheat_seeds',
        price: 200,
        limit: 1,
      },
      {
        item: 'minecraft:cocoa_beans',
        price: 200,
        limit: 1,
      },
      {
        item: 'minecraft:pumpkin_seeds',
        price: 200,
        limit: 1,
      },
      {
        item: 'minecraft:beetroot_seeds',
        price: 200,
        limit: 1,
      },
      {
        item: 'minecraft:melon_seeds',
        price: 200,
        limit: 1,
      },
      {
        item: 'minecraft:torchflower_seeds',
        price: 200,
        limit: 1,
      },
      {
        item: 'blue_skies:winter_leaf_seeds',
        price: 200,
        limit: 1,
      },
      {
        item: 'blue_skies:fiery_bean_seeds',
        price: 200,
        limit: 1,
      },
      {
        item: 'blue_skies:scalefruit_seeds',
        price: 200,
        limit: 1,
      },
      {
        item: 'blue_skies:pine_fruit_seeds',
        price: 200,
        limit: 1,
      },
      {
        item: 'farmersdelight:tomato_seeds',
        price: 200,
        limit: 1,
      },
    ],
  },

  'loot_boxes_armor': {
    defaults: {
      side: 'buy',
      entryTag: 'flash_lootbox_jackpot',
    },
    entries: [
      {
        item: 'kubejs:common_helmet_loot_box',
        price: 500,
        hoverTheme: 'blue',
      },
      {
        item: 'kubejs:common_chestplate_loot_box',
        price: 500,
        hoverTheme: 'blue',
      },
      {
        item: 'kubejs:common_leggings_loot_box',
        price: 500,
        hoverTheme: 'blue',
      },
      {
        item: 'kubejs:common_boots_loot_box',
        price: 500,
        hoverTheme: 'blue',
      },
      {
        item: 'kubejs:rare_helmet_loot_box',
        price: 1500,
        hoverTheme: 'purple',
      },
      {
        item: 'kubejs:rare_chestplate_loot_box',
        price: 1500,
        hoverTheme: 'purple',
      },
      {
        item: 'kubejs:rare_leggings_loot_box',
        price: 1500,
        hoverTheme: 'purple',
      },
      {
        item: 'kubejs:rare_boots_loot_box',
        price: 1500,
        hoverTheme: 'purple',
      },
      {
        item: 'kubejs:mythical_helmet_loot_box',
        price: 5000,
        hoverTheme: 'yellow',
      },
      {
        item: 'kubejs:mythical_chestplate_loot_box',
        price: 5000,
        hoverTheme: 'yellow',
      },
      {
        item: 'kubejs:mythical_leggings_loot_box',
        price: 5000,
        hoverTheme: 'yellow',
      },
      {
        item: 'kubejs:mythical_boots_loot_box',
        price: 5000,
        hoverTheme: 'yellow',
      },
    ],
  },

  'loot_boxes_create': {
    defaults: {
      side: 'buy',
      entryTag: 'flash_lootbox_jackpot',
    },
    entries: [
      {
        item: 'kubejs:create_gears_loot_box',
        price: 100,
        hoverTheme: 'green',
      },
      {
        item: 'kubejs:create_parts_loot_box',
        price: 200,
        hoverTheme: 'green',
      },
      {
        item: 'kubejs:create_switches_loot_box',
        price: 300,
        hoverTheme: 'blue',
      },
      {
        item: 'kubejs:create_machines_loot_box',
        price: 500,
        hoverTheme: 'blue',
      },
    ],
  },

  'loot_boxes_gems': {
    defaults: {
      side: 'buy',
      entryTag: 'flash_lootbox_jackpot',
      scalingPrice: GEM_LOOT_BOX_PRICE,
    },
    entries: [
      {
        item: 'kubejs:common_gem_loot_box',
        price: 1000,
        hoverTheme: 'gray',
      },
      {
        item: 'kubejs:uncommon_gem_loot_box',
        price: 2000,
        hoverTheme: 'green',
      },
      {
        item: 'kubejs:rare_gem_loot_box',
        price: 3000,
        hoverTheme: 'blue',
      },
      {
        item: 'kubejs:epic_gem_loot_box',
        price: 5000,
        hoverTheme: 'purple',
      },
      {
        item: 'kubejs:legendary_gem_loot_box',
        price: 10000,
        hoverTheme: 'yellow',
      },
    ],
  },

  'misc_lootboxes': {
    defaults: {
      side: 'buy',
      entryTag: 'flash_lootbox_jackpot',
    },
    entries: [
      {
        item: 'kubejs:artifacts_loot_box',
        price: 5000,
        hoverTheme: 'yellow',
      },
      {
        item: 'kubejs:bookshelf_loot_box',
        price: 2500,
        hoverTheme: 'yellow',
      },
      {
        item: 'kubejs:food_loot_box',
        price: 2000,
        hoverTheme: 'purple',
      },
    ],
  },

  'prefab_blueprints': {
    defaults: {
      side: 'buy',
    },
    entries: [
      {
        item: 'prefab:item_instant_bridge',
        price: 75,
        hoverTheme: 'green',
      },
      {
        item: 'prefab:item_grassy_plain',
        price: 125,
        hoverTheme: 'green',
      },
      {
        item: 'prefab:item_house',
        price: 350,
        hoverTheme: 'green',
      },
      {
        item: 'prefab:item_watch_tower',
        price: 350,
        hoverTheme: 'green',
      },
      {
        item: 'prefab:item_mineshaft_entrance',
        price: 400,
        hoverTheme: 'green',
      },
      {
        item: 'prefab:item_warehouse',
        price: 650,
        hoverTheme: 'blue',
      },
      {
        item: 'prefab:item_house_improved',
        price: 1000,
        hoverTheme: 'blue',
      },
      {
        item: 'prefab:item_aqua_base',
        price: 1100,
        hoverTheme: 'blue',
      },
      {
        item: 'prefab:item_villager_houses',
        price: 1350,
        hoverTheme: 'purple',
      },
      {
        item: 'prefab:item_warehouse_improved',
        price: 1450,
        hoverTheme: 'purple',
      },
      {
        item: 'prefab:item_defense_bunker',
        price: 1750,
        hoverTheme: 'purple',
      },
      {
        item: 'prefab:item_aqua_base_improved',
        price: 2150,
        hoverTheme: 'purple',
      },
      {
        item: 'prefab:item_town_hall',
        price: 2300,
        hoverTheme: 'yellow',
      },
      {
        item: 'prefab:item_nether_gate',
        price: 2500,
        hoverTheme: 'yellow',
      },
    ],
  },
}

function hashString(value) {
  const input = String(value === undefined || value === null ? '' : value)
  let hash = 2166136261
  for (let index = 0; index < input.length; index++) {
    hash ^= input.charCodeAt(index)
    hash = Math.imul(hash, 16777619)
  }
  return (hash >>> 0).toString(36)
}

function slugPart(value) {
  const safe = String(value === undefined || value === null ? '' : value).trim().toLowerCase()
  const slug = safe.replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '')
  return slug || 'entry'
}

const CREATE_GEAR_ITEMS = new Set([
  'create:shaft',
  'create:belt_connector',
  'create:cogwheel',
  'create:large_cogwheel',
  'create:gearbox',
  'create:vertical_gearbox',
  'create:encased_chain_drive',
  'bits_n_bobs:small_flanged_cogwheel',
  'bits_n_bobs:large_flanged_cogwheel',
  'create:chain_conveyor',
])

const CREATE_SWITCH_ITEMS = new Set([
  'create:redstone_contact',
  'create:sequenced_gearshift',
  'create:analog_lever',
  'create:pulse_repeater',
  'create:redstone_link',
  'create:pulse_extender',
  'create:powered_latch',
  'create:powered_toggle_latch',
  'create:linked_controller',
  'create:rotation_speed_controller',
])

const CREATE_MACHINE_ITEMS = new Set([
  'create:mechanical_press',
  'create:millstone',
  'create:mechanical_mixer',
  'create:deployer',
  'create:mechanical_drill',
  'create:mechanical_harvester',
  'create:mechanical_roller',
  'create:mechanical_saw',
  'create:encased_fan',
  'create:crushing_wheel',
  'create_new_age:advanced_energiser',
  'create_new_age:advanced_motor',
  'create_new_age:advanced_motor_extension',
  'create_new_age:advanced_solar_heating_plate',
  'create_new_age:basic_energiser',
  'create_new_age:basic_motor',
  'create_new_age:basic_motor_extension',
  'create_new_age:basic_solar_heating_plate',
  'create_new_age:corium',
  'create_new_age:generator_coil',
  'create_new_age:heat_pump',
  'create_new_age:heater',
  'create_new_age:reactor_casing',
  'create_new_age:reactor_fuel_acceptor',
  'create_new_age:reactor_glass',
  'create_new_age:reactor_heat_vent',
  'create_new_age:reactor_rod',
  'create_new_age:reinforced_energiser',
  'create_new_age:reinforced_motor',
  'create_new_age:solid_corium',
  'create_new_age:stirling_engine',
])

const CREATE_PART_ITEMS = new Set([
  'create:super_glue',
  'create:piston_extension_pole',
  'create:mechanical_piston',
  'create:sticky_mechanical_piston',
  'create:windmill_bearing',
  'create:mechanical_bearing',
  'create:clockwork_bearing',
  'create:gantry_carriage',
  'create:basin',
  'create:chute',
  'create:smart_chute',
  'create:fluid_pipe',
  'create:mechanical_pump',
  'create:fluid_tank',
  'create:hose_pulley',
  'create:item_drain',
  'create:spout',
  'create:linear_chassis',
  'create:radial_chassis',
  'create:elevator_pulley',
  'create:cart_assembler',
  'create:empty_blaze_burner',
  'create:weighted_ejector',
  'create:portable_storage_interface',
  'create:rope_pulley',
  'bits_n_bobs:chain_pulley',
  'create:water_wheel',
  'create:large_water_wheel',
  'create_new_age:carbon_brushes',
  'create_new_age:copper_wire_block',
  'create_new_age:electrical_connector',
  'create_new_age:heat_pipe',
  'create_new_age:lamp_post',
  'create_new_age:overcharged_diamond_wire_block',
  'create_new_age:overcharged_golden_wire_block',
  'create_new_age:overcharged_iron_wire_block',
  'create_new_age:street_light',
])

function routeShopCategory(categoryId, entry) {
  const item = String(entry.item || '')

  if (categoryId === 'create') {
    if (CREATE_GEAR_ITEMS.has(item)) return 'create_gears'
    if (CREATE_SWITCH_ITEMS.has(item)) return 'create_switches'
    if (CREATE_MACHINE_ITEMS.has(item) || item.startsWith('create_optical:') || item.startsWith('vintage:')) return 'create_machines'
    if (CREATE_PART_ITEMS.has(item)) return 'create_parts'
    return categoryId
  }

  if (categoryId === 'storage_and_furnaces') {
    if (item.startsWith('toms_storage:')) return 'storage_networks'
    if (item.startsWith('sophisticatedstorage:')) return 'storage_containers'
    if (item.startsWith('ironfurnaces:')) return 'storage_furnaces'
    return categoryId
  }

  if (categoryId === 'magic_items') {
    if (item === 'irons_spellbooks:scroll') return 'magic_scrolls'
    if (item.startsWith('irons_spellbooks:') && item.endsWith('_rune')) return 'magic_runes'
    return 'magic_materials'
  }

  if (categoryId === 'collection_sea_creatures') {
    const rarity = String(entry.hoverTheme || '').toLowerCase()
    if (rarity === 'green') return 'collection_sea_creatures_uncommon'
    if (rarity === 'blue') return 'collection_sea_creatures_rare'
    if (rarity === 'purple') return 'collection_sea_creatures_epic'
    if (rarity === 'yellow') return 'collection_sea_creatures_legendary'
    return 'collection_sea_creatures_common'
  }

  return categoryId
}

function defaultTradeEntryId(categoryId, entry, defaults, normalizedSide, index) {
  const quantity = entry.quantity !== undefined ? entry.quantity : 1
  const hoverTheme = entry.hoverTheme !== undefined ? entry.hoverTheme : defaults.hoverTheme
  const entryTag = entry.entryTag !== undefined ? entry.entryTag : defaults.entryTag
  const signature = JSON.stringify({
    categoryId: categoryId,
    index: index,
    item: entry.item,
    nbt: entry.nbt || '',
    quantity: quantity,
    side: normalizedSide,
    price: entry.price,
    buyPrice: entry.buyPrice,
    sellPrice: entry.sellPrice,
    hoverTheme: hoverTheme === undefined || hoverTheme === null ? '' : hoverTheme,
    entryTag: entryTag === undefined || entryTag === null ? '' : entryTag,
    limit: entry.limit === undefined || entry.limit === null ? '' : entry.limit,
    scalingPrice: entry.scalingPrice === undefined || entry.scalingPrice === null ? '' : entry.scalingPrice,
    scalingMin: entry.scalingMin === undefined || entry.scalingMin === null ? '' : entry.scalingMin,
    scalingMax: entry.scalingMax === undefined || entry.scalingMax === null ? '' : entry.scalingMax,
  })
  return `${slugPart(categoryId)}__${slugPart(entry.item)}__${index}__${hashString(signature)}`
}

function applyTradeEntry(builder, categoryId, entry, index, defaults, normalizedSide) {
  builder.id(entry.id || defaultTradeEntryId(categoryId, entry, defaults, normalizedSide, index))
  if (entry.nbt) builder.nbt(entry.nbt)

  const hoverTheme = entry.hoverTheme !== undefined ? entry.hoverTheme : defaults.hoverTheme
  const entryTag = entry.entryTag !== undefined ? entry.entryTag : defaults.entryTag
  const quantity = entry.quantity !== undefined ? entry.quantity : 1
  const materialQuestIds = materialQuestIdsForEntry(entry)

  if (hoverTheme !== undefined) builder.hoverTheme(hoverTheme)
  if (entryTag !== undefined && entryTag !== null && String(entryTag).trim() !== '') builder.entryTag(entryTag)
  if (quantity !== undefined) builder.previewCount(quantity)

  builder.order(entry.order !== undefined ? entry.order : index)

  if (entry.visibleIf || materialQuestIds.length > 0) {
    builder.visibleIf(player => {
      if (entry.visibleIf && !entry.visibleIf(player)) return false
      return materialQuestIds.length === 0 || hasCompletedAnyMaterialQuest(player, materialQuestIds)
    })
  }
}

function applyTradeAction(actionBuilder, entry, defaults) {
  const scalingPrice = entry.scalingPrice !== undefined ? entry.scalingPrice : defaults.scalingPrice
  const scalingMin = entry.scalingMin !== undefined ? entry.scalingMin : defaults.scalingMin
  const scalingMax = entry.scalingMax !== undefined ? entry.scalingMax : defaults.scalingMax

  if (entry.limit !== undefined) {
    if (Array.isArray(entry.limit)) {
      if (entry.limit.length === 3) actionBuilder.limit(entry.limit[0], entry.limit[1], entry.limit[2])
      else if (entry.limit.length === 2) actionBuilder.limit(entry.limit[0], entry.limit[1])
      else if (entry.limit.length === 1) actionBuilder.limit(entry.limit[0], 'daily')
    } else {
      actionBuilder.limit(entry.limit, 'daily')
    }
  }

  if (scalingPrice !== undefined) {
    if (typeof scalingPrice === 'number') {
      actionBuilder.scalingPrice(scalingPrice)
    } else if (Array.isArray(scalingPrice)) {
      if (scalingPrice.length >= 1) actionBuilder.scalingPrice(scalingPrice[0])
      if (scalingPrice.length >= 2 && scalingPrice[1] !== undefined && scalingPrice[1] !== null) {
        actionBuilder.scalingMin(scalingPrice[1])
      }
      if (scalingPrice.length >= 3 && scalingPrice[2] !== undefined && scalingPrice[2] !== null) {
        actionBuilder.scalingMax(scalingPrice[2])
      }
    } else if (typeof scalingPrice === 'object' && scalingPrice !== null) {
      const scaling = scalingPrice
      const mode = typeof scaling.mode === 'string' ? scaling.mode.toLowerCase() : ''

      if (mode === 'multiply' || (mode === '' && scaling.factor !== undefined)) {
        actionBuilder.scalingMultiply(scaling.factor)
      } else if (mode === 'expr' || mode === 'expression' || (mode === '' && scaling.expr !== undefined)) {
        actionBuilder.scalingExpr(scaling.expr)
      } else if (scaling.delta !== undefined) {
        actionBuilder.scalingPrice(scaling.delta)
      }

      if (scaling.round !== undefined) actionBuilder.scalingRound(scaling.round)
      if (scaling.min !== undefined) actionBuilder.scalingMin(scaling.min)
      if (scaling.max !== undefined) actionBuilder.scalingMax(scaling.max)
    }
  }

  if (scalingMin !== undefined) actionBuilder.scalingMin(scalingMin)
  if (scalingMax !== undefined) actionBuilder.scalingMax(scalingMax)
}

ServerEvents.superiorShopTrades(event => {
  Object.entries(SHOP_ITEMS).forEach(([categoryId, categoryData]) => {
    const defaults = categoryData.defaults || {}

    categoryData.entries.forEach((entry, index) => {
      const side = entry.side !== undefined ? entry.side : (defaults.side || 'buy')
      const normalizedSide = String(side).toLowerCase()
      const quantity = entry.quantity !== undefined ? entry.quantity : 1
      const sellMatch = entry.sellMatch || 'ITEM'
      const itemNbt = entry.nbt || ''
      const routedCategoryId = routeShopCategory(categoryId, entry)

      event.entry(routedCategoryId, entry.item, builder => {
        applyTradeEntry(builder, routedCategoryId, entry, index, defaults, normalizedSide)

        if (normalizedSide === 'buy' || normalizedSide === 'both') {
          builder.action(action => {
            action.id('buy')
            action.label('Buy')
            action.allowCart(true)
            applyTradeAction(action, entry, defaults)
            action.option(option => {
              option.id('default_buy')
              option.label('Default')
              option.requireCurrency('internal:coins', Math.round((entry.buyPrice !== undefined ? entry.buyPrice : entry.price) || 0))
              option.rewardItemLine(entry.item, quantity, 'EXACT_STACK', itemNbt)
            })
          })
        }

        if (normalizedSide === 'sell' || normalizedSide === 'both') {
          builder.action(action => {
            action.id('sell')
            action.label('Sell')
            action.allowCart(true)
            applyTradeAction(action, entry, defaults)
            action.option(option => {
              option.id('default_sell')
              option.label('Default')
              option.requireItemLine(entry.item, quantity, sellMatch, itemNbt)
              option.rewardCurrency('internal:coins', Math.round((entry.sellPrice !== undefined ? entry.sellPrice : entry.price) || 0))
            })
          })
        }
      })
    })
  })
})
