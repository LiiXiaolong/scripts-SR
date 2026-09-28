// Superior Shop category definitions.
ServerEvents.superiorShopCategories(event => {
  event.category('tutorial', cat => {
    cat.title('Tutorial')
    cat.icon('patchouli:guide_book')
    cat.order(0)
    cat.hidden(false)
  })

  event.category('death_items', cat => {
    cat.title('Death Items')
    cat.icon('kubejs:effigy_of_the_undying')
    cat.parent('specialty_items')
    cat.order(0)
    cat.hidden(false)
  })

  event.category('gameplay_modifiers', cat => {
    cat.title('Gameplay Modifiers')
    cat.icon('kubejs:beastriders')
    cat.order(2)
    cat.hidden(false)
  })

  event.category('food', cat => {
    cat.title('Food')
    cat.icon('minecraft:golden_apple')
    cat.order(3)
    cat.hidden(false)
  })

  event.category('specialty_items', cat => {
    cat.title('Specialty Items')
    cat.icon('kubejs:tome_of_death')
    cat.order(4)
    cat.hidden(false)
  })

  event.category('boss_items', cat => {
    cat.title('Boss Drops')
    cat.icon('twilightforest:lich_trophy')
    cat.order(5)
    cat.hidden(false)
  })

  event.category('inventory_expansion', cat => {
    cat.title('Inventory Expansion')
    cat.icon('kubejs:inventory_upgrade')
    cat.parent('specialty_items')
    cat.order(1)
    cat.hidden(false)
  })

  event.category('create', cat => {
    cat.title('CREATE')
    cat.icon('create:large_cogwheel')
    cat.order(6)
    cat.hidden(false)
  })

  event.category('create_gears', cat => {
    cat.title('Gears')
    cat.icon('create:cogwheel')
    cat.parent('create')
    cat.order(0)
    cat.hidden(false)
  })

  event.category('create_switches', cat => {
    cat.title('Switches & Controls')
    cat.icon('create:redstone_link')
    cat.parent('create')
    cat.order(1)
    cat.hidden(false)
  })

  event.category('create_machines', cat => {
    cat.title('Machines')
    cat.icon('create:mechanical_press')
    cat.parent('create')
    cat.order(2)
    cat.hidden(false)
  })

  event.category('create_parts', cat => {
    cat.title('Parts & Motion')
    cat.icon('create:super_glue')
    cat.parent('create')
    cat.order(3)
    cat.hidden(false)
  })

  event.category('affinity_gems', cat => {
    cat.title('Affinity Gems')
    cat.icon('kubejs:exalted_aqua_affinity_gem')
    cat.parent('magic_alchemy')
    cat.order(3)
    cat.hidden(false)
  })

  event.category('alternative_transportation', cat => {
    cat.title('Alternative Transportation')
    cat.icon('grapplemod:grapplinghook')
    cat.order(8)
    cat.hidden(false)
  })

  event.category('storage_and_furnaces', cat => {
    cat.title('Storage & Furnaces')
    cat.icon('toms_storage:ts.inventory_connector')
    cat.order(9)
    cat.hidden(false)
  })

  event.category('storage_networks', cat => {
    cat.title('Storage Network')
    cat.icon('toms_storage:ts.storage_terminal')
    cat.parent('storage_and_furnaces')
    cat.order(0)
    cat.hidden(false)
  })

  event.category('storage_containers', cat => {
    cat.title('Storage Containers')
    cat.icon('sophisticatedstorage:gold_chest')
    cat.parent('storage_and_furnaces')
    cat.order(1)
    cat.hidden(false)
  })

  event.category('storage_furnaces', cat => {
    cat.title('Furnaces')
    cat.icon('ironfurnaces:gold_furnace')
    cat.parent('storage_and_furnaces')
    cat.order(2)
    cat.hidden(false)
  })

  event.category('skill_tokens', cat => {
    cat.title('Skill Tokens')
    cat.icon('kubejs:horizontal_wallrun')
    cat.parent('specialty_items')
    cat.order(2)
    cat.hidden(false)
  })

  event.category('tables_on_a_stick', cat => {
    cat.title('Tables on a Stick')
    cat.icon('crafting_on_a_stick:crafting_table')
    cat.parent('specialty_items')
    cat.order(3)
    cat.hidden(false)
  })

  event.category('backpacks', cat => {
    cat.title('Backpacks')
    cat.icon('sophisticatedbackpacks:backpack')
    cat.order(12)
    cat.hidden(false)
  })

  event.category('curios_slots', cat => {
    cat.title('Curios Slots')
    cat.icon('kubejs:necklace_slot_expansion')
    cat.parent('specialty_items')
    cat.order(4)
    cat.hidden(false)
  })

  event.category('elixirs', cat => {
    cat.title('Elixirs')
    cat.icon('kubejs:exalted_mana_elixir')
    cat.parent('specialty_items')
    cat.order(5)
    cat.hidden(false)
  })

  event.category('greater_potions', cat => {
    cat.title('Greater')
    cat.icon('kubejs:greater_health_elixir')
    cat.parent('elixirs')
    cat.order(0)
    cat.hidden(false)
  })

  event.category('exalted_potions', cat => {
    cat.title('Exalted')
    cat.icon('kubejs:exalted_health_elixir')
    cat.parent('elixirs')
    cat.order(1)
    cat.hidden(false)
  })

  event.category('resources', cat => {
    cat.title('Resources')
    cat.icon('minecraft:iron_ingot')
    cat.order(15)
    cat.hidden(false)
  })

  event.category('sell_resources', cat => {
    cat.title('Sell')
    cat.icon('minecraft:diamond')
    cat.parent('resources')
    cat.order(0)
    cat.hidden(false)
  })

  event.category('buy_resources', cat => {
    cat.title('Buy')
    cat.icon('minecraft:diamond_ore')
    cat.parent('resources')
    cat.order(1)
    cat.hidden(false)
  })

  event.category('material_crafting', cat => {
    cat.title('Materials')
    cat.icon('miapi:modular_work_bench')
    cat.parent('resources')
    cat.order(2)
    cat.hidden(false)
  })

  event.category('alexs_caves', cat => {
    cat.title('Alexs Caves')
    cat.icon('alexscaves:cave_codex')
    cat.order(18)
    cat.hidden(false)
  })

  event.category('equipment', cat => {
    cat.title('Equipment')
    cat.icon('minecraft:crossbow')
    cat.order(19)
    cat.hidden(false)
  })

  event.category('mining', cat => {
    cat.title('Mining')
    cat.icon('justhammers:iron_hammer')
    cat.parent('equipment')
    cat.order(0)
    cat.hidden(false)
  })

  event.category('light_sources', cat => {
    cat.title('Light Sources')
    cat.icon('minecraft:soul_lantern')
    cat.parent('equipment')
    cat.order(2)
    cat.hidden(false)
  })

  event.category('arrows', cat => {
    cat.title('Arrows')
    cat.icon('xtraarrows:flint_lightning_arrow')
    cat.parent('equipment')
    cat.order(1)
    cat.hidden(false)
  })

  event.category('magic_alchemy', cat => {
    cat.title('Magic & Alchemy')
    cat.icon('irons_spellbooks:holy_upgrade_orb')
    cat.order(22)
    cat.hidden(false)
  })

  event.category('magic_scrolls', cat => {
    cat.title('Spell Scrolls')
    cat.icon('irons_spellbooks:scroll')
    cat.parent('magic_alchemy')
    cat.order(0)
    cat.hidden(false)
  })

  event.category('magic_runes', cat => {
    cat.title('Runes')
    cat.icon('irons_spellbooks:arcane_rune')
    cat.parent('magic_alchemy')
    cat.order(1)
    cat.hidden(false)
  })

  event.category('magic_materials', cat => {
    cat.title('Materials')
    cat.icon('irons_spellbooks:common_ink')
    cat.parent('magic_alchemy')
    cat.order(2)
    cat.hidden(false)
  })

  event.category('logs', cat => {
    cat.title('Logs')
    cat.icon('minecraft:oak_log')
    cat.parent('building_materials')
    cat.order(0)
    cat.hidden(false)
  })

  event.category('glass', cat => {
    cat.title('Glass')
    cat.icon('minecraft:glass')
    cat.parent('building_materials')
    cat.order(1)
    cat.hidden(false)
  })

  event.category('building_materials', cat => {
    cat.title('Building Materials')
    cat.icon('minecraft:oak_log')
    cat.order(23)
    cat.hidden(false)
  })

  event.category('home_decor', cat => {
    cat.title('Home & Decor')
    cat.icon('minecraft:red_bed')
    cat.order(25)
    cat.hidden(false)
  })

  event.category('beds', cat => {
    cat.title('Beds')
    cat.icon('minecraft:red_bed')
    cat.parent('home_decor')
    cat.order(0)
    cat.hidden(false)
  })

  event.category('fishing', cat => {
    cat.title('Fishing')
    cat.icon('tide:lavaproof_fishing_hook')
    cat.order(26)
    cat.hidden(false)
  })

  event.category('potion_creation', cat => {
    cat.title('Potion Creation')
    cat.icon('minecraft:brewing_stand')
    cat.parent('magic_alchemy')
    cat.order(4)
    cat.hidden(false)
  })

  event.category('arcane_ciphers', cat => {
    cat.title('Arcane Ciphers')
    cat.icon('kubejs:sunstrike')
    cat.parent('magic_alchemy')
    cat.order(5)
    cat.hidden(false)
  })

  event.category('creature_eggs', cat => {
    cat.title('Creature Eggs')
    cat.icon('minecraft:spawner')
    cat.order(29)
    cat.hidden(false)
  })

  event.category('dragon_eggs', cat => {
    cat.title('Dragon Eggs')
    cat.icon('iceandfire:dragon_horn')
    cat.parent('creature_eggs')
    cat.order(0)
    cat.hidden(false)
  })

  event.category('spawn_eggs', cat => {
    cat.title('Spawn Eggs')
    cat.icon('minecraft:spawner')
    cat.parent('creature_eggs')
    cat.order(1)
    cat.hidden(false)
  })

  event.category('collection_sea_creatures', cat => {
    cat.title('Fish Collection')
    cat.icon('tide:volcano_tuna')
    cat.parent('fishing')
    cat.order(31)
    cat.hidden(false)
  })

  event.category('collection_sea_creatures_common', cat => {
    cat.title('Common')
    cat.icon('minecraft:cod')
    cat.parent('collection_sea_creatures')
    cat.order(0)
    cat.hidden(false)
  })

  event.category('collection_sea_creatures_uncommon', cat => {
    cat.title('Uncommon')
    cat.icon('tide:volcano_tuna')
    cat.parent('collection_sea_creatures')
    cat.order(1)
    cat.hidden(false)
  })

  event.category('collection_sea_creatures_rare', cat => {
    cat.title('Rare')
    cat.icon('tide:swordfish')
    cat.parent('collection_sea_creatures')
    cat.order(2)
    cat.hidden(false)
  })

  event.category('collection_sea_creatures_epic', cat => {
    cat.title('Epic')
    cat.icon('tide:great_white_shark')
    cat.parent('collection_sea_creatures')
    cat.order(3)
    cat.hidden(false)
  })

  event.category('collection_sea_creatures_legendary', cat => {
    cat.title('Legendary')
    cat.icon('tide:dragon_fish')
    cat.parent('collection_sea_creatures')
    cat.order(4)
    cat.hidden(false)
  })

  event.category('collection_seeds', cat => {
    cat.title('[COLLECTION] - Seeds')
    cat.icon('minecraft:wheat_seeds')
    cat.order(32)
    cat.hidden(false)
  })

  event.category('loot_boxes', cat => {
    cat.title('Loot Boxes')
    cat.icon('blue_skies:loot_bag_alchemist')
    cat.order(33)
    cat.hidden(false)
  })

  event.category('loot_boxes_armor', cat => {
    cat.title('Armor')
    cat.icon('fantasy_armor:chess_board_knight_chestplate')
    cat.parent('loot_boxes')
    cat.order(0)
    cat.hidden(false)
  })

  event.category('loot_boxes_create', cat => {
    cat.title('Create')
    cat.icon('create:mechanical_arm')
    cat.parent('loot_boxes')
    cat.order(1)
    cat.hidden(false)
  })

  event.category('loot_boxes_gems', cat => {
    cat.title('Gems')
    cat.icon('kubejs:rare_gem_loot_box')
    cat.parent('loot_boxes')
    cat.order(2)
    cat.hidden(false)
  })

  event.category('misc_lootboxes', cat => {
    cat.title('Misc')
    cat.icon('blue_skies:loot_bag_alchemist')
    cat.parent('loot_boxes')
    cat.order(3)
    cat.hidden(false)
  })

  event.category('prefab_blueprints', cat => {
    cat.title('Prefab Blueprints')
    cat.icon('prefab:item_house')
    cat.parent('home_decor')
    cat.order(2)
    cat.hidden(false)
  })

})
