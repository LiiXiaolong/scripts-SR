//priority: 900
Platform.mods.kubejs.name = 'Superior'
let subclass_runes = {
    'guardian': 'guardian_rune',//
    'battlemage': 'battlemage_rune',//
    'conjurer': 'conjurer_rune',
    // __ 
    'disciple': 'disciple_rune',//
    'kensei': 'kensei_rune',//
    'berserker': 'berserker_rune',
    ///
    'dragonlord': 'dragonlord_rune',//
    'plague_doctor': 'plague_doctor_rune',//
    'mercenary': 'mercenary_rune',//
    ////
    'mystic':'dreamweaver_rune',//
    'frostpiercer': 'frostpiercer_rune',
    'nomad': 'nomad_rune',
    ///
    'bloodripper': 'bloodripper_rune',
    'soulbinder': 'soulbinder_rune',//
    'shinobi': 'shinobi_rune',//

    'juggernaut': 'juggernaut_rune',

    'vampire': 'vampire_rune',
    'trickster': 'trickster_rune',
    'monk': 'monk_rune',
    'spellblade': 'spellblade_rune',

    //'geomancer': 'geomancer_rune',
};




global.skill_gems = [
    'ice_beam', // Enemies hit by Ray of Frost are marked. Marked enemies freeze when hit with a projectile
    'frost_repulse', // 5% chance to freeze enemies around you when you are hit
    'aegis', // Block and look at the ground while falling to negate fall damage
    'bulwark', // Blocked physical projectiles will be reflected back at the enemy
    //'lava_dancer', // Gain a permanent lava walker effect
    'speed_runner', // Gives you a speed boost after performing a ParCool move
    'blacksmith', // Crafted gear has a chance to have apotheosis affixes
    'merchant', // Items sell for 50% more
    'bounty_hunter', // Money earned from monster kills is doubled
    'woods_walker', // Quantity of item drops from animals is doubled
    'tunnel_vision', // Marks a random nearby enemy upon each kill. Killing a marked enemy gives stacking speed and haste. Resets the stacks after 5 seconds of not killing a marked enemy
    'head_hunter', // Enemies under 10% health have a 50% chance to be Culled. Player gains 5% of their max health as healing.
    'momentum', // Gain a haste and strength effect after dodge rolling. 
    'shattering_blow', //combat rolling into an enemy will stun them for 3 seconds

    'cloaked_blade', // Hitting a mob while you are invisible has a 10% chance to a venom effect to them
    'hexblood', // Killing a mob with a spell while they have Venom will apply a hex effect to the next 5 enemies you hit
    'witchglass', // Killing a mob with a spell while they have hex will apply venom to a random nearby enemy
    'poisonous_rot', // Killing a mob that has Venom has a 15% chance per level of venom to give each Monster within 15 blocks Venom and Plague for 5 seconds per level of venom consumed from the killed enemy. Chance is rolled per enemy
    'bloodshroud', // Gain invisibility and speed when you have a bleeding effect. Hitting a mob will consume the bleeding and remove invisibility and speed.


    'plague_of_rust', // Hitting a mob while they have plague has a 50% chance to apply Rend (reduced armor) to them
    //'nocturne',
    'final_gasp', // Killing a mob has a 25% chance to give YOU one of the following negative effects: Venom, Bleeding, Chilled, or Slowness. Duration is 15 seconds
    

    'sacrifice', // Killing a mob while you have the charged effect has a 50% chance to apply hexed to enemies within 20 blocks. Chance is rolled per enemy
    'esoteric_poison', // Killing a mob while you have the charged effect has a 25% chance to apply plague to enemies within 20 blocks. Chance is rolled per enemy

    'frost_wraith', // Hitting a mob while you are invisible has a 15% chance to apply a chilled effect to them
    'shattered', // Killing a mob while they are frozen has a 20% chance per level of Frozen to apply a bleeding effect to enemies within 10 blocks. Chance is rolled per enemy
    'dreadmark', // Permafrost charges work with any projectile
    'death_grip', // Hitting an enemy with a projectile costs 10 mana and adds 1 level of chilled to the enemy. Each level adds a 5% chance to consume the chilled effect and freeze the enemy. 
    'frost_surge', // Killing a mob with the chilled effect has a 50% chance to give you speed

    'lucky_hex', // Hitting a mob while you have luck has a 10% chance to give them Hexed
    
    'sanguine', // Hitting a mob while they are bleeding has a 25% chance to apply a marked for death
    'bloodhunt', // Killing a mob while they have slowness will apply a bleeding effect to the next 5 hits
    'grim_reaper', // Hitting a Hexed mob has a chance to consume Hexed and apply a marked for death effect to all mobs within 10 blocks. Chance is 10% per level of hex consumed. Duration is 4 seconds per level of hex consumed
    'blood_splatter', // Using Blood Harvest on an enemy has a chance to apply a bleeding effect to enemies within 15 blocks. Chance is 10% and is rolled per enemy


    'synapse', // Killing a stunned mob with a ranged attack will apply stunned to a random nearby monster
    'aftershock', //Killing a mob with a melee attack while they are stunned will apply a Rend (reduced armor) effect to a random nearby mob
    'temporal_chains', // Killing a mob with a spell while they are stunned has a 25% chance to apply a 10 seconds of slowness to mobs within 15 blocks. Chance is rolled per enemy


    'ghost_draw', // Lethal Shadows ability will now work with a charged bow instead of only a crossbow
    'stoneform', // Blocking an attack has a 25% chance to give you +5 seconds of resistance 
    'coward', // 100% chance to gain a speed and weakness effect when you block an attack.

    'spectral_splinter', // 25% chance to spawn 2 spectral arrows that fly towards 2 other enemies when you hit an enemy with an arrow
    'slipstream', // Gain a brief stacking speed effect when you hit enemies with projectiles. Getting hit removes the effect.
    'phantom_step', // Temporary invisibility and speed boost after dodging,
    
    //'mirage', // Upon reaching low health, spawn copies of yourself that distract enemies.
    
    'dripping_maw', // killing a Hexed mob has a 25% chance to make other nearby mobs cast fire breath at each other. Level of Hexed on the killed mob determines the amount of mobs affected and the level of the spell.

    'ancestral_strength', // Melee killing a mob has a 25% chance to give you a 3 second strength effect. If you already have a strength effect, it will increase the duration by 3 seconds
    'giants_blood', // Melee killing a mob while you have slowness adds a stacking strength amplifier to you.



    'mana_veil', // Upon taking fatal damage, consume all mana and regain 1% of your health for every 40 mana consumed. You must have at least 200 mana to use this. 1 minute cooldown
    'wounding_strike', // Hitting a mob that has rend has a 25% chance to apply a bleeding to them
    'gravemark', // Killing a slowed enemy with a projectile has a 25% chance to give you a projectile damage buff
    'shock_transfer', // Killing a mob with a spell while you have the charged effect has a 25% chance to consume your Charged effect and make mobs cast ball lightning at each other. 
    'siphoning_steel', // 25% chance to gain mana equal to 1% of attack damage.

    'arcane_bargain', // Killing a Hexed mob recharges 5% of your health and 5% of your mana per level of Hexed consumed. However, each level of hexed consumes adds a 10% chance to apply a negative effect to you. 
    
    'arcane_dash', // Gain a short but stackable speed boost after casting a spell. 
    'sprint_shot', // Hitting a mob with a projectile while sprinting has a 50% chance to apply a stacking speed effect to you.
    'scouring_winds', // Using a dodge roll near a hexed mob consumes hexed and applies a 5 second speed effect with an amplifier equal to the level of hex consumed.
    'dead_rush', // Killing an enemy that has Hexed, Chilled, Bleeding, or Plague will transfer the effect to you but apply a speed boost for 5 seconds
    'second_wind', // Upon taking damage below 20% health, gain a Speed 3 effect for 5 seconds. 30 second cooldown
    'last_stand', // Upon taking damage below 10% health, gain a Strength 4 effect for 10 seconds. 1 minute cooldown
]
let questline_init = [
    'dust_of_fallen_kingdoms',
    'eel_excrement',
    'ender_golem_dust',
    'gorgon_dust',
    'living_stone',
    'parasitic_slime',
    'maw_sludge',
    'blightpowder',
    'obsidilith_dust',
    'ur_ghast_dust',
    'weak_summoning_dust',
    'withered_dust',
    'corrupted_dust',
    'lost_stone',
    'wroughtnaut_dust',
    'prowler_dust',
    'watcher_dust',
    'doomsday_dust',
    'coral_ingot',
    'dust_of_deepsea_warlocks',
    'shade_effigy',
    'crystallized_chaos',
    'ritual_dagger',    
]



let pet_stones = [
    'gorilla',
    'grizzly_bear',
    'crow',
    'crocodile',
    'capuchin_monkey',
    'elephant',
    'komodo_dragon',
    'tarantula_hawk',
    'kangaroo',
    'bald_eagle',
    'mammoth',
    'hippogryph',
    'stymphalian_bird',
    'cockatrice',
]

global.affix_orbs = [
    'socketing',
    'exaltation',
    'imbuement',
    'ascension',
    'sorcery',
    'infusion',
    'reforging',
    'dissonance',
    'binding',
    'severing'
]





let legendary_items = [
    'celestial_glass',// Effect: Done
    'dragons_wisdom', // Effect: Done
    'effigy_of_the_undying', //Effect: Done
    'heart_of_darkness', // Effect: Not Done
    'specters_boon', // Effect: Done

    // Moonstone Upgrades

    'pearls_of_the_moon', // Effect: Done

    'twilight_codex', // Effect: Done
    'widows_blood', // Effect: Done
    'whispers_of_the_elderwood',// Effect: Done
    'windwalkers_talisman', // Effect: Done
    'twisted_rot', // Effect: Half-finished

    // Inferno Upgrades
    'imprisoned_embers', // Effect: Not Done
    'bloody_inferno', // Effect: Done
    'electric_inferno', // Effect: Done
    'eldritch_inferno', // Effect: Done

    'nebulous_flux',// Effect: Done
    'frozen_memory', // Effect: Get hit by an enemy and they get the mowzies freezing effect. Has 5 uses and then has a cooldown
    'tears_of_the_aether',// Effect: Get hit by an enemy and they get the time slow effect. Has 10 uses and then has a cooldown. Can hit the enemy like with aethereal gemstone to launch
    'phantoms_twilight', // 

    'silent_armageddon' // Effect: Done

] 

let myth_parts = [ // Not all of them need to have a use
    'corrupted_shard', // Enemies hit while inside of this are slowed and weakened
    'corrupted_gemstone', // none
    'tears_of_creation',
    'earth_talisman_gem',
    'earth_talisman_wand',
    'echoing_void',
    'eternal_flame', // Enemies that hit you are set on fire

    // Wayfinders
    'primordial_wayfinder',
    'abyssal_wayfinder',
    'magnetic_wayfinder',
    'toxic_wayfinder',
    'forlorn_wayfinder',

    
    'specters_tablet',

    // Bloodstone Artifacts
    'bloodstone_artifact',
    'bloody_dust',
    'haunted_dust',

    // Moonstone
    'rough_moonstone',
    'pristine_moonstone',

    'cursed_necklace',
    'banished_immortal',
    'pure_corruption',
    'vial_of_evil', //kills you instantly. Have a secret effect. Basically an easter egg
    'purification_totem', // Can clear the cooldown of 1 effect
    'aethereal_gemstone',
    
    // Elderwood
    'remains_of_the_elderwood',
    'elderwood_heart',

    'enslavement_elixir',// Replaces an enemy permanently with a friendly mob. It is random 
    'phalanx_ring',// Stuns enemies that hit you
    
     // Lets you shoot tnt from potato cannon
    'sufficiently_advanced_technology', // Spawns glass case around an enemy with tnt spawns

    'burning_souls', // Effect: None
    'mutant_enderman_heart', // Effect: None
    'imprisoned_star', // Effect: None

    'heart_of_the_guardian', // Effect: None

    'withered_crystal', // Effect: None

    'withered_wand', // Effect: Shoots Howitzers
    
    'pulsating_artifact', // Effect: None

    'blaze_core', // Effect: rapid fire fireballs for for no mana if you are hitting enemies
    'contained_void', // Effect: rapid fire magic missiles for no mana if you are hitting enemies

    'charged_crystal', // Effect: None

    'murky_potion',

    'demonic_runestone', // Effect: None

    'empyrean_scarab', // Effect: None

    

    'mysterious_gauntlet', // Effect: None




]
    




let lootboxes = [
    'common_bounty_reward',
    'uncommon_bounty_reward',
    'rare_bounty_reward',

    'common_mercenary_reward',
    'uncommon_mercenary_reward',
    'rare_mercenary_reward',

    'common_pet_lootbox',
    'uncommon_pet_lootbox',
    'rare_pet_lootbox',
    'class_lootbox',
    'food_crate',
    'arcana_lootbox',
]

let main_class_init = [
    'warlock',//
    //'blacksmith',
    'vanguard',//
    'ranger',
    'shaman',
    'beastmaster'
]

let essence_init = {
    
    'frost': 'frost', // Ranger: Effect Finished
    'cinders': 'cinders', // mercenary: Effect Finished
    'darkness': 'darkness', // Mystic: Effect Finished
    'light': 'light', // Guardian: Effect Finished
    'aether': 'aether', // Mystic: Effect Finished
    'whispers': 'whispers', // Shaman: Effect Finished
    'storms': 'storms', // Warlock: Effect Finished
    'earth': 'earth', // Vanguard: Effect Finished
    'life': 'life', // Mystic (Guardian?): Effect Finished
    'sorrow': 'sorrow', // Beastmaster: Effect NOT FINISHED ********
    'giants': 'giants', // Mystic: Effect NOT FINISHED ********
    'the_void': 'void', // Mystic Effect finished
    'eternity': 'eternity', // Effect Finished (Give to disciple)
}


let elixirs = [
    'firewyrm_flask',//
    'molten_sands',
    'raging_tempest',
    'dark_winds',//
    'frostfire_dew',//
    'serpents_tears',//
    'stormheart_lullaby',//
    'moonlit_mist',//
    'captains_elixir',//
    'elderwood_sap',
    'valkyries_blood',//
    'forgotten_divinity',//
    'psionic_volley',
]


let lootcrates = [
    
    /**
     * 'iron',//
    'gold',//
    'diamond',//
    'netherite',//

    'wandering_magician',//
    'pyromancer',//
    'scarecrow',//
    'electromancer',//
    'archevoker',//
    'cultist',//
    'cryomancer',//
    'shadowwalker',//
    'priest',//

    'dragonslayer',//
    'eclipse_soldier',
    'hero',
    'golden_horns',
    'thief',
    'wandering_wizard',
    'chessboard_knight',
    'dark_lord',
    'sunset_wings',

    'iron_dragon_armor',
    'silver_dragon_armor',
    'diamond_dragon_armor',
     * 
     */
    

    'create_machines',
    'create_parts',
    'create_gears',
    'create_switches',

    'arcana',
    'artifacts',
    'bookshelf',
    'ammo',
    'food',
]

let new_lootcrates = [
    'common_helmet',
    'common_chestplate',
    'common_leggings',
    'common_boots',

    'rare_helmet',
    'rare_chestplate',
    'rare_leggings',
    'rare_boots',

    'mythical_helmet',
    'mythical_chestplate',
    'mythical_leggings',
    'mythical_boots',
]

let gem_lootcrates = {
    common: { texture: 'common', rarity: 'common', displayName: 'Common Gem Loot Box' },
    uncommon: { texture: 'rare', rarity: 'uncommon', displayName: 'Uncommon Gem Loot Box' },
    rare: { texture: 'rare', rarity: 'rare', displayName: 'Rare Gem Loot Box' },
    epic: { texture: 'mythical', rarity: 'epic', displayName: 'Epic Gem Loot Box' },
    legendary: { texture: 'mythical', rarity: 'epic', displayName: 'Legendary Gem Loot Box' },
}


let boss_mods = {
    'armored1': 'Boss Grimoire: Armored I',// Armor
    'armored2': 'Boss Grimoire: Armored II',//

    'demonic1': 'Boss Grimoire: Demonic I',// Crit Chance
    'demonic2': 'Boss Grimoire: Demonic II',//

    'blessed1': 'Boss Grimoire: Blessed I',// Dodge chance
    'blessed2': 'Boss Grimoire: Blessed II',//

    'focused1': 'Boss Grimoire: Focused I',// Crit Damage
    'focused2': 'Boss Grimoire: Focused II',//

    'gifted1': 'Boss Grimoire: Gifted I',// Spell Power
    'gifted2': 'Boss Grimoire: Gifted II',//

    'swift1': 'Boss Grimoire: Swift I',// Movement Speed
    'swift2': 'Boss Grimoire: Swift II',//

    'sunstrike': 'Arcane Cipher: Sunstrike',//
    'echoing_strike': 'Arcane Cipher: Echoing Strike',//
    'berserk': 'Arcane Cipher: Berserk',//
    'blazing': 'Arcane Cipher: Blazing',//
    'thorns': 'Arcane Cipher: Thorns',//
    'adrenaline': 'Arcane Cipher: Adrenaline',//
    'glacial_grasp': 'Arcane Cipher: Glacial Grasp',//
    'gusting': 'Arcane Cipher: Gusting',//
    'soulsteal': 'Arcane Cipher: Soulsteal',//
    'thunderstorm': 'Arcane Cipher: Thunderstorm',//
    'strength': 'Arcane Cipher: Strength',//
    'resistance': 'Arcane Cipher: Resistance',//
    'charged': 'Arcane Cipher: Charged',//
}
    
let metallurgy = {
    'ruby': 0xFF1100,
    'topaz': 0xFFA500,
    'peridot': 0xBAFF66,
    'jade': 0x00A86B,
    'necoium': 0xeb14a9,
    'ametrine': 0x941e70,
    'sapphire': 0x0816e8,
    'aquamarine': 0x0883e8,
    'gobber': 0x008080,
    
}


let orders = [
    'beastmaster',
    'marksman',
    'vanguard',
    'warlock',

]

let gameplay_modifiers = global.getAllGameplayModifierIds()


let starlit_orbs = [
    'crescentia',
    'breezebreaker',
    'poltergeist',
    'aquaflora',
    'rainfall_serenity',
    'frostbound',
    'keres',
]

let apoth_items = [
    'socketing_chip',
    'sentient_stone'
]

    StartupEvents.registry('item', event => {


        orders.forEach(order => {event.create(`${order}`, 'basic').texture(`kubejs:item/order/${order}`).rarity('rare').unstackable()})


       // main_class_init.forEach((main_class) => {
           // event.create(`${main_class}`, 'basic').texture(`kubejs:item/order/${main_class}`).displayName(`Order of the ${main_class.charAt(0).toUpperCase() + main_class.slice(1)}s`).rarity('rare').unstackable()
            // Tutorial Classes:
           // event.create(`${main_class}_tutorial`, 'basic').texture(`kubejs:item/tutorial_items/${main_class}`).displayName(`Order of the ${main_class.charAt(0).toUpperCase() + main_class.slice(1)}s`).rarity('common').unstackable()
        //})
        Object.entries(subclass_runes).forEach(([name, texture]) => {
            event.create(`rune_of_the_${name}`).texture(`kubejs:item/class_runes/${name}`).rarity('rare').unstackable()
            //event.create(`purified_rune_of_the_${name}`).texture(`kubejs:item/tutorial_items/${texture}`).rarity('epic').unstackable()
            // Tutorial Classes:
            //event.create(`rune_of_the_${name}_tutorial`).texture(`kubejs:item/tutorial_items/${texture}`).rarity('common').displayName(`Rune of the ${name.charAt(0).toUpperCase() + name.slice(1)}`).unstackable()
        })

        //pet_stones.forEach(pet_stones => {
           // event.create(pet_stones+`_summoning_stone`, 'basic').texture(`kubejs:item/summoning_stones/${pet_stones}`).unstackable().displayName(`${pet_stones.charAt(0).toUpperCase() + pet_stones.slice(1)} Summoning Stone`)
       // })

        elixirs.forEach(elixirs => {event.create(elixirs, 'basic').texture(`kubejs:item/pet_elixirs/${elixirs}`).rarity('rare').unstackable()})


        apoth_items.forEach(apoth_items => {
            event.create(apoth_items, 'basic').texture(`kubejs:item/apotheosis_items/${apoth_items}`).rarity('uncommon')
            event.create(`common_${apoth_items}`, 'basic').texture(`kubejs:item/apotheosis_items/${apoth_items}`).rarity('common')
            event.create(`uncommon_${apoth_items}`, 'basic').texture(`kubejs:item/apotheosis_items/${apoth_items}`).rarity('uncommon')
            event.create(`rare_${apoth_items}`, 'basic').texture(`kubejs:item/apotheosis_items/${apoth_items}`).rarity('rare')
        })



        global.skill_gems.forEach(skill_gem => {event.create(skill_gem, 'basic').texture(`kubejs:item/skill_gems/${skill_gem}`).rarity('rare').unstackable().displayName(`Skill Gem: ${skill_gem.charAt(0).toUpperCase() + skill_gem.slice(1).replace(/_/g, ' ')}`)})
        legendary_items.forEach(legendary_items => {event.create(legendary_items, 'basic').texture(`kubejs:item/legendary_items/${legendary_items}`).rarity('epic').unstackable()})
        //event.create('elderwood_wand', 'irons_spells_js:magic_sword').tier('netherite').attackDamageBaseline(5).texture('kubejs:item/legendary_items/elderwood_wand').rarity('uncommon').displayName('Elderwood Wand').unstackable()
        //event.create('corrupted_elderwood_wand', 'irons_spells_js:magic_sword').tier('netherite').attackDamageBaseline(10).texture('kubejs:item/legendary_items/corrupted_elderwood_wand').rarity('rare').displayName('Corrupted Elderwood Wand').unstackable()
        //event.create('archangel_wand', 'irons_spells_js:magic_sword').tier('netherite').attackDamageBaseline(15).texture('kubejs:item/legendary_items/archangel').rarity('epic').displayName('Archangel').unstackable()
        event.create('enslaved_celestial_hammer', 'axe').tier('netherite').attackDamageBaseline(30).speed(1.6).texture('kubejs:item/legendary_items/enslaved_celestial').rarity('epic').displayName('Enslaved Celestial').unstackable()
        event.create('cultists_gauntlet', 'sword').tier('netherite').attackDamageBaseline(5).texture('kubejs:item/boss_items/cultists_gauntlet').unstackable()
        event.create('indistinguishable_magic', 'basic').texture('kubejs:item/boss_items/indistinguishable_magic').rarity('rare').displayName('M.A.G.I.C').unstackable()

        myth_parts.forEach(myth_parts => {event.create(myth_parts, 'basic').texture(`kubejs:item/boss_items/${myth_parts}`).rarity('rare').unstackable()})

        Object.entries(essence_init).forEach(([name, texture]) => {
            event.create(`essence_of_${name}`, 'basic').texture(`kubejs:item/new_essence/${texture}`).rarity('rare').unstackable()
        })

        questline_init.forEach(questline_init => {event.create(questline_init, 'basic').texture(`kubejs:item/summoning/${questline_init}`).rarity('uncommon')})
        event.create('tremorsaurus_dust', 'basic').texture('kubejs:item/summoning/tremorsaurus_dust').rarity('uncommon').displayName('Tremorsaurus "Dust"')


        Object.entries(boss_mods).forEach(([name, display_name]) => {
            event.create(name, 'basic').texture(`kubejs:item/boss_mods/${name}`).rarity('rare').unstackable().displayName(display_name)
        })
        event.create('wildweave_tonic', 'basic').texture('kubejs:item/wildweave_tonic').rarity('rare').unstackable().displayName('Wildweave Tonic')
        lootcrates.forEach(lootcrates => {event.create(`${lootcrates}_loot_box`, 'basic').texture(`kubejs:item/boxes/${lootcrates}`).rarity('uncommon')})
        event.create('starter_artifacts_loot_box', 'basic').texture('kubejs:item/boxes/artifacts').rarity('uncommon').displayName('Starter Artifacts Loot Box')
        new_lootcrates.forEach(new_lootcrates => {
            // get the rarity of the lootcrate
            let rarity = new_lootcrates.split('_')[0]
            let tooltip_rarity = ''
            if (rarity === 'common') {tooltip_rarity = 'common'}
            if (rarity === 'rare') {tooltip_rarity = 'uncommon'}
            if (rarity === 'mythical') {tooltip_rarity = 'rare'}
            event.create(`${new_lootcrates}_loot_box`, 'basic').texture(`kubejs:item/boxes/${rarity}`).rarity(tooltip_rarity)
        })

        Object.entries(gem_lootcrates).forEach(([tier, data]) => {
            event.create(`${tier}_gem_loot_box`, 'basic')
                .texture(`kubejs:item/boxes/${data.texture}`)
                .rarity(data.rarity)
                .displayName(data.displayName)
        })

        event.create('reset_skills', 'basic').texture('kubejs:item/tutorial_items/subclass_elixir').rarity('rare').unstackable()

        // Loop through the pet_stones array and create an item for each pet stone. the texture is ${entity}_totem so remove the _summoning_stone part of the name


        gameplay_modifiers.forEach(gameplay_modifiers => {event.create(gameplay_modifiers, 'basic').texture('kubejs:item/parties/create_party').rarity('rare').unstackable()})

        event.create('class_loot_box', 'basic').texture('kubejs:item/boxes/class_loot_box').rarity('uncommon').unstackable().displayName('Class Loot Box')
        event.create('admin_sword', 'sword').tier('netherite').attackDamageBaseline(1000.0).tooltip('A weapon')
      //  event.create('torn_page', 'basic').maxStackSize(10).texture('kubejs:item/torn_page')
        //event.create('subclass_skill_point', 'basic').texture('kubejs:item/subclass_point')

        event.create('bloodlust', 'basic').displayName('Forgotten Tablet: Bloodlust').texture('kubejs:icons/forgotten_tablet')
        event.create('frozen_prison', 'basic').displayName('Forgotten Tablet: Frozen Prison').texture('kubejs:icons/forgotten_tablet')
        event.create('reaper', 'basic').displayName('Forgotten Tablet: Reaper').texture('kubejs:icons/forgotten_tablet')
        event.create('lich', 'basic').displayName('Forgotten Tablet: Lich').texture('kubejs:icons/forgotten_tablet')
        event.create('skybound', 'basic').displayName('Forgotten Tablet: Skybound').texture('kubejs:icons/forgotten_tablet')
        event.create('zephyr', 'basic').displayName('Forgotten Tablet: Zephyr').texture('kubejs:icons/forgotten_tablet')

        event.create('tome_of_death', 'basic').displayName('Tome of Death').texture('kubejs:item/tome_of_death').rarity('uncommon').unstackable()

        event.create('soulbinders_gate', 'basic').texture('kubejs:item/totem').rarity('rats_ratlantis_special').unstackable()

        event.create('beastmaster_totem', 'basic').texture('kubejs:item/rare_beastmaster_totem').rarity('rare').unstackable()
        event.create('trial_blood_oath', 'basic').displayName('Forgotten Tablet: Blood Oath').texture('kubejs:icons/forgotten_tablet')
       // event.create('blood_oath', 'basic').texture('kubejs:icons/blood_oath')
        event.create('epic_druid_totem', 'basic').texture('kubejs:item/totem').rarity('rats_ratlantis_special').unstackable()
        event.create('common_druid_totem', 'basic').texture('kubejs:item/common_beastmaster_totem').rarity('common').unstackable()
        event.create('uncommon_druid_totem', 'basic').texture('kubejs:item/uncommon_beastmaster_totem').rarity('uncommon').unstackable()
        event.create('rare_druid_totem', 'basic').texture('kubejs:item/rare_beastmaster_totem').rarity('epic').unstackable()
        event.create('time_turner', 'basic').texture('kubejs:item/time_turner').rarity('uncommon').unstackable()
        event.create('breakfall', "basic").texture('kubejs:item/parcool/breakfall').rarity('common').displayName('Skill Token: Breakfall') /// Skills always enabled: Pole Climbing, fast run, safety tap
        event.create('catleap', "basic").texture('kubejs:item/parcool/catleap').rarity('common').displayName('Skill Token: Cat Leap')
        event.create('vertical_wallrun', "basic").texture('kubejs:item/parcool/vwallrun').rarity('common').displayName('Skill Token: Vertical Wallrun')
        event.create('horizontal_wallrun', "basic").texture('kubejs:item/parcool/hwallrun').rarity('common').displayName('Skill Token: Horizontal Wallrun')
        event.create('crawl', "basic").texture('kubejs:item/parcool/crawl').rarity('common').displayName('Skill Token: Crawl') //include crawl and slide
        event.create('ledgegrab', "basic").texture('kubejs:item/parcool/ledgegrab').rarity('common').displayName('Skill Token: Ledge Grab') /// include climb up, cling to cliff, and wall slide, wall jump
        event.create('slide', "basic").texture('kubejs:item/parcool/slide').rarity('common').displayName('Skill Token: Slide') //include crawl and slide
        event.create('wall_jump', "basic").texture('kubejs:item/parcool/walljump').rarity('common').displayName('Skill Token: Wall Jump') //include wall jump, wall slide, and wall cling
        event.create('hunters_bounty_token', 'basic').texture('kubejs:item/skill_tree_tokens/hunters_bounty_token').rarity('uncommon').displayName('Unlock Skill Node: Hunters Bounty') //Unlocks the hunters bounty skill node
        event.create('valkyrie_token', 'basic').texture('kubejs:item/skill_tree_tokens/valkyrie_token').rarity('uncommon').displayName('Unlock Skill Node: Valkyries Wings') //Unlocks the valkyrie skill node
        event.create('combat_roll_token', 'basic').texture('kubejs:item/skill_tree_tokens/combat_roll_token').rarity('uncommon').displayName('Unlock Skill Node: Combat Roll +1') //Unlocks the combat roll node
        event.create('stone_of_the_flayed_gods', 'basic').texture('kubejs:item/stone_of_the_flayed_gods').rarity('rare').displayName('Stone of the Flayed Gods')
        event.create('fix_tooltips', 'basic').texture('kubejs:item/fix_tooltips').rarity('rare').displayName('Fix Tooltips')
        event.create('cleansing_serum', "basic").texture('kubejs:item/cleansing_serum').rarity('rare')
        event.create('testing', "basic").texture('kubejs:item/testing').rarity('common')
        //event.create('common_bounty', 'basic').texture('kubejs:item/bounty').rarity('common')
        //event.create('rare_bounty', 'basic').texture('kubejs:item/bounty').rarity('uncommon')
        //event.create('epic_bounty', 'basic').texture('kubejs:item/bounty').rarity('rare')
        //event.create('legendary_bounty', 'basic').texture('kubejs:item/bounty').rarity('epic')
       // event.create('potion_of_cowardice', 'basic').texture('kubejs:item/potion_of_cowardice').rarity('common')
        event.create('max_hammer', 'basic').texture('kubejs:item/max_hammer').rarity('common')

        event.create('throwing_knife', 'sword').texture('kubejs:item/throwing_knife').rarity('common')

        //event.create('create_party', 'basic').texture('kubejs:item/parties/create_party').rarity('common')
        //event.create('party_invite', 'basic').texture('kubejs:item/parties/party_invite').rarity('common')
        //event.create('join_party', 'basic').texture('kubejs:item/parties/join_party').rarity('common')
        event.create('duel_request', 'basic').texture('kubejs:item/parties/duel_request').rarity('common')

        event.create('subclass_special').texture('kubejs:item/crate').rarity('rare').displayName('Subclass Special Items')
        event.create('subclass_armor').texture('kubejs:item/crate').rarity('rare').displayName('Subclass Armor')
        event.create('shinobi_dagger', 'sword').tier('stone').attackDamageBaseline(0.1).texture('kubejs:item/bloodletter').rarity('uncommon').displayName('Bloodletter')
        event.create('return_home', 'basic').texture('kubejs:item/return_home').rarity('common')
        //event.create('lesser_skill_potion', 'basic').texture('kubejs:item/lesser_skill_potion').rarity('common')
        //event.create('greater_skill_potion', 'basic').texture('kubejs:item/greater_skill_potion').rarity('uncommon')
        //event.create('master_skill_potion', 'basic').texture('kubejs:item/master_skill_potion').rarity('rare')
        //event.create('exalted_skill_potion', 'basic').texture('kubejs:item/exalted_skill_potion').rarity('epic')
        //event.create('lesser_loot_booster', 'basic').texture('kubejs:item/lesser_loot_booster').rarity('common')
        //event.create('greater_loot_booster', 'basic').texture('kubejs:item/greater_loot_booster').rarity('uncommon')
        //event.create('master_loot_booster', 'basic').texture('kubejs:item/master_loot_booster').rarity('rare')

        // Chunky Cheese token
        event.create('chunky_cheese_token_tl', 'basic').texture('kubejs:item/boss_items/cheese_shards/chunky_cheese_token_tl').rarity('rare').displayName('Cheese Token Shard')
        event.create('chunky_cheese_token_tr', 'basic').texture('kubejs:item/boss_items/cheese_shards/chunky_cheese_token_tr').rarity('rare').displayName('Cheese Token Shard')
        event.create('chunky_cheese_token_bl', 'basic').texture('kubejs:item/boss_items/cheese_shards/chunky_cheese_token_bl').rarity('rare').displayName('Cheese Token Shard')
        event.create('chunky_cheese_token_br', 'basic').texture('kubejs:item/boss_items/cheese_shards/chunky_cheese_token_br').rarity('rare').displayName('Cheese Token Shard')
        event.create('inventory_upgrade', 'basic').texture('kubejs:item/inventory_upgrade').rarity('rare')
        event.create('flickering_wand', 'sword').texture('kubejs:item/flickering_wand').rarity('common')
        event.create('unstable_summoning_stone', 'basic').texture('kubejs:item/unstable_summoning_stone').rarity('common')
        event.create('dragon_caller', 'basic').texture('kubejs:item/tutorial_items/dragon_caller').rarity('uncommon')
        event.create('subclass_elixir', 'basic').texture('kubejs:item/tutorial_items/subclass_elixir').rarity('rare')

        event.create('common_gun_crate', 'basic').texture('kubejs:item/bronze_crate').rarity('common')
        event.create('rare_gun_crate', 'basic').texture('kubejs:item/silver_crate').rarity('uncommon')
        event.create('legendary_gun_crate', 'basic').texture('kubejs:item/gold_crate').rarity('rare')
        event.create('common_ammo_crate', 'basic').texture('kubejs:item/bronze_crate').rarity('common')
        event.create('rare_ammo_crate', 'basic').texture('kubejs:item/silver_crate').rarity('uncommon')
        event.create('legendary_ammo_crate', 'basic').texture('kubejs:item/gold_crate').rarity('rare')

        event.create('crate_chest', 'basic').texture('kubejs:item/gold_crate').rarity('rare')

        event.create('earth_talisman', 'basic').texture('kubejs:item/earth_talisman').rarity('rare')

        // divine blueprints
        event.create('divine_blueprint', 'basic').texture('kubejs:item/divine_blueprint').rarity('rare')
        event.create('starlit_orb', 'basic').texture('kubejs:item/starlit_orb').rarity('rare')

        global.affix_orbs.forEach(orb => {
            event.create(`orb_of_${orb}`, 'basic').texture(`kubejs:item/anomaly/${orb}`).rarity('rare').displayName(`Orb of ${orb.charAt(0).toUpperCase() + orb.slice(1)}`) // Used to apply affixes to items, can be used in nightmare mode or repentance mode //
        })
        
        event.create('orb_of_divinity', 'basic').texture('kubejs:item/anomaly/divinity').rarity('rare').displayName('Orb of Divinity') // Raises 1-3 Curios Skills by 1-2 levels //
        event.create('orb_of_fate', 'basic').texture('kubejs:item/anomaly/fate').rarity('rare').displayName('Orb of Fate') // Locks a Curios Skill //
        event.create('orb_of_rebirth', 'basic').texture('kubejs:item/anomaly/fracturing').rarity('rare').displayName('Orb of Rebirth') // Removes all affixes from an item //
        event.create('progression_sync', 'basic').texture('kubejs:item/progression_sync').rarity('rare').displayName('Sync Progression') // Removes a random skill from the totem//        
        
        event.create('orb_of_renewal', 'basic').texture('kubejs:item/anomaly/renewal').rarity('rare').displayName('Orb of Renewal') // Fixes a damaged item
        event.create('orb_of_knowledge', 'basic').texture('kubejs:item/anomaly/knowledge').rarity('rare').displayName('Orb of Knowledge').unstackable() // Transfers Lukas Weapon Leveling progress
        event.create('orb_of_reflection', 'basic').texture('kubejs:item/anomaly/rebirth').rarity('epic').displayName('Orb of Reflection').unstackable() // Copies one item and replaces the orb
        
        event.create('mike_vick', 'basic').texture('kubejs:item/pet_fight').rarity('common').displayName('Pet Fight')
        event.create('mike_vick_wager', 'basic').texture('kubejs:item/pet_fight_wager').rarity('common').displayName('Pet Fight with Wager')

        event.create('coin_pouch_10', 'basic').texture('kubejs:item/coin_pouches/common').rarity('common').displayName('Coin Pouch: 10')
        event.create('coin_pouch_25', 'basic').texture('kubejs:item/coin_pouches/common').rarity('common').displayName('Coin Pouch: 25')
        event.create('coin_pouch_50', 'basic').texture('kubejs:item/coin_pouches/common').rarity('common').displayName('Coin Pouch: 50')
        event.create('coin_pouch_75', 'basic').texture('kubejs:item/coin_pouches/common').rarity('common').displayName('Coin Pouch: 75')
        event.create('coin_pouch_100', 'basic').texture('kubejs:item/coin_pouches/uncommon').rarity('uncommon').displayName('Coin Pouch: 100')
        event.create('coin_pouch_250', 'basic').texture('kubejs:item/coin_pouches/uncommon').rarity('uncommon').displayName('Coin Pouch: 250')
        event.create('coin_pouch_500', 'basic').texture('kubejs:item/coin_pouches/uncommon').rarity('uncommon').displayName('Coin Pouch: 500')
        event.create('coin_pouch_750', 'basic').texture('kubejs:item/coin_pouches/uncommon').rarity('uncommon').displayName('Coin Pouch: 750')
        event.create('coin_pouch_1000', 'basic').texture('kubejs:item/coin_pouches/rare').rarity('rare').displayName('Coin Pouch: 1,000')
        event.create('coin_pouch_2500', 'basic').texture('kubejs:item/coin_pouches/rare').rarity('rare').displayName('Coin Pouch: 2,500')
        event.create('coin_pouch_5000', 'basic').texture('kubejs:item/coin_pouches/rare').rarity('rare').displayName('Coin Pouch: 5,000')
        event.create('coin_pouch_7500', 'basic').texture('kubejs:item/coin_pouches/rare').rarity('rare').displayName('Coin Pouch: 7,500')
        event.create('coin_pouch_10000', 'basic').texture('kubejs:item/coin_pouches/epic').rarity('epic').displayName('Coin Pouch: 10,000')

        event.create('nightmare_orb', 'basic').texture('kubejs:item/nightmare_orb').rarity('rare')

        event.create('devils_deal', 'basic').texture('kubejs:item/devils_deal').rarity('rare').displayName('Devil\'s Deal')
        event.create('boss_effigy', 'basic').texture(`kubejs:item/bone_effigy`).rarity('rare')
        event.create('effigy_dust', 'basic').texture(`kubejs:item/effigy_dust`).rarity('rare')
        
        event.create('diamond_cube', 'basic').texture(`kubejs:item/dusts/diamond_cube`).rarity('rare')
        event.create('diamond_dust', 'basic').texture(`kubejs:item/dusts/diamond_dust`).rarity('uncommon')
        //create dusts for each metallurgy metal
        Object.entries(metallurgy).forEach(([name, color]) => {
            event.create(`${name}_dust`, 'basic').texture(`kubejs:item/dusts/${name}_dust`).rarity('uncommon')
        })

       // event.create('soulbinders_crow', 'basic').texture('kubejs:item/soulbinders_crow').rarity('rare')
        //event.create('soulbinders_bald_eagle', 'basic').texture('kubejs:item/soulbinders_bald_eagle').rarity('rare')
        //event.create('soulbinders_capuchin_monkey', 'basic').texture('kubejs:item/soulbinders_capuchin_monkey').rarity('rare')
        //event.create('soulbinders_tarantula_hawk', 'basic').texture('kubejs:item/soulbinders_tarantula_hawk').rarity('rare')
        //event.create('soulbinders_elephant', 'basic').texture('kubejs:item/soulbinders_elephant').rarity('rare')
        //event.create('soulbinders_komodo_dragon', 'basic').texture('kubejs:item/soulbinders_komodo_dragon').rarity('rare')
        //event.create('soulbinders_kangaroo', 'basic').texture('kubejs:item/soulbinders_kangaroo').rarity('rare')
        //event.create('soulbinders_gorilla', 'basic').texture('kubejs:item/soulbinders_gorilla').rarity('rare')
        //event.create('soulbinders_crocodile', 'basic').texture('kubejs:item/soulbinders_crocodile').rarity('rare')
        //event.create('soulbinders_grizzly_bear', 'basic').texture('kubejs:item/soulbinders_grizzly_bear').rarity('rare')
        //event.create('soulbinders_caiman', 'basic').texture('kubejs:item/soulbinders_caiman').rarity('rare')
        //event.create('soulbinders_hippogryph', 'basic').texture('kubejs:item/soulbinders_hippogryph').rarity('rare')
        //event.create('soulbinders_cockatrice', 'basic').texture('kubejs:item/soulbinders_cockatrice').rarity('rare')
        //event.create('soulbinders_subterranodon', 'basic').texture('kubejs:item/soulbinders_subterranodon').rarity('rare')
        //event.create('soulbinders_vallumraptor', 'basic').texture('kubejs:item/soulbinders_vallumraptor').rarity('rare')
        //event.create('soulbinders_tremorsaurus', 'basic').texture('kubejs:item/soulbinders_tremorsaurus').rarity('rare')
        //event.create('soulbinders_soul_vulture', 'basic').texture('kubejs:item/soulbinders_soul_vulture').rarity('rare')
        //event.create('soulbinders_anaconda', 'basic').texture('kubejs:item/soulbinders_anaconda').rarity('rare')
        //event.create('soulbinders_moose', 'basic').texture('kubejs:item/soulbinders_moose').rarity('rare')
        //event.create('soulbinders_rattlesnake', 'basic').texture('kubejs:item/soulbinders_rattlesnake').rarity('rare')
        //event.create('soulbinders_rhinoceros', 'basic').texture('kubejs:item/soulbinders_rhinoceros').rarity('rare')
        //event.create('soulbinders_tiger', 'basic').texture('kubejs:item/soulbinders_tiger').rarity('rare')
        //event.create('soulbinders_tusklin', 'basic').texture('kubejs:item/soulbinders_tusklin').rarity('rare')
        //event.create('soulbinders_snow_leopard', 'basic').texture('kubejs:item/soulbinders_snow_leopard').rarity('rare')
        //event.create('soulbinders_teletor', 'basic').texture('kubejs:item/soulbinders_teletor').rarity('rare')
        //event.create('soulbinders_bone_serpent', 'basic').texture('kubejs:item/soulbinders_bone_serpent').rarity('rare')
        //event.create('soulbinders_enderiophage', 'basic').texture('kubejs:item/soulbinders_enderiophage').rarity('rare')
        //event.create('soulbinders_emu', 'basic').texture('kubejs:item/soulbinders_emu').rarity('rare')
        //event.create('soulbinders_dread_scuttler', 'basic').texture('kubejs:item/soulbinders_dread_scuttler').rarity('rare')

     

        event.create('feel_horn', 'basic').texture('kubejs:item/feel_horn').rarity('rare')
        event.create('sing_horn', 'basic').texture('kubejs:item/sing_horn').rarity('rare')
        event.create('admire_horn', 'basic').texture('kubejs:item/admire_horn').rarity('rare')
        event.create('ponder_horn', 'basic').texture('kubejs:item/ponder_horn').rarity('rare')
        event.create('yearn_horn', 'basic').texture('kubejs:item/yearn_horn').rarity('rare')
        event.create('seek_horn', 'basic').texture('kubejs:item/seek_horn').rarity('rare')
        event.create('dream_horn', 'basic').texture('kubejs:item/dream_horn').rarity('rare')

        event.create('combatroll_recharge_ability', 'basic').texture('kubejs:icons/skill_tree/combatroll_count/combatroll_count').rarity('rare')
        event.create('combatroll_count_ability', 'basic').texture('kubejs:icons/skill_tree/combatroll_recharge/combatroll_recharge').rarity('rare')


        event.create('lesser_health_elixir', 'basic').texture('kubejs:item/potions/skill_potions/lesser_health_elixir').rarity('common')
        event.create('greater_health_elixir', 'basic').texture('kubejs:item/potions/skill_potions/greater_health_elixir').rarity('uncommon')
        event.create('exalted_health_elixir', 'basic').texture('kubejs:item/potions/skill_potions/exalted_health_elixir').rarity('rare')

        event.create('lesser_mana_elixir', 'basic').texture('kubejs:item/potions/skill_potions/lesser_mana_elixir').rarity('common')
        event.create('greater_mana_elixir', 'basic').texture('kubejs:item/potions/skill_potions/greater_mana_elixir').rarity('uncommon')
        event.create('exalted_mana_elixir', 'basic').texture('kubejs:item/potions/skill_potions/exalted_mana_elixir').rarity('rare')

        event.create('home_waystone', 'basic').texture('kubejs:item/waystones/home_waystone').rarity('uncommon').displayName('Teleportation Chip: Home')
        event.create('journey_waystone', 'basic').texture('kubejs:item/waystones/journey_waystone').rarity('uncommon').displayName('Teleportation Chip: Return')
        event.create('player_waystone', 'basic').texture('kubejs:item/waystones/player_waystone').rarity('uncommon').displayName('Teleportation Chip: Other Player')

        event.create('insanity_orb', 'basic').texture('kubejs:item/insanity_orb').rarity('rare')



        event.create('ring_slot_expansion', 'basic').texture('kubejs:item/slot_expansions/ring').rarity('rare')
        event.create('necklace_slot_expansion', 'basic').texture('kubejs:item/slot_expansions/necklace').rarity('rare')
        event.create('belt_slot_expansion', 'basic').texture('kubejs:item/slot_expansions/belt').rarity('rare')
        event.create('charm_slot_expansion', 'basic').texture('kubejs:item/slot_expansions/charm').rarity('rare')
        event.create('talent_slot_expansion', 'basic').texture('kubejs:item/slot_expansions/talent').rarity('rare')
        event.create('augment_slot_expansion', 'basic').texture('kubejs:item/slot_expansions/augment').rarity('rare')
        //event.create('accessory_slot_expansion', 'basic').texture('kubejs:item/slot_expansions/accessory').rarity('rare')
        event.create('scroll_slot_expansion', 'basic').texture('kubejs:item/slot_expansions/scroll').rarity('rare')
        event.create('hands_slot_expansion', 'basic').texture('kubejs:item/slot_expansions/hands').rarity('rare')
        event.create('head_slot_expansion', 'basic').texture('kubejs:item/slot_expansions/head').rarity('rare')
        event.create('feet_slot_expansion', 'basic').texture('kubejs:item/slot_expansions/feet').rarity('rare')

        event.create('vanguard_gemstone', 'basic').texture('kubejs:item/gemstones/vanguard_gemstone').rarity('rare')
        event.create('marksman_gemstone', 'basic').texture('kubejs:item/gemstones/marksman_gemstone').rarity('rare')
        event.create('warlock_gemstone', 'basic').texture('kubejs:item/gemstones/warlock_gemstone').rarity('rare')


        event.create('pet_killer', 'basic').texture('kubejs:item/pet_killer/pet_killer').rarity('rare').displayName('Pet Eternal and Total Annihilator (P.E.T.A.)')

        event.create('blood_affinity_gem', 'basic').texture('kubejs:item/affinity_gems/blood_affinity_gem').rarity('uncommon').unstackable()
        event.create('superior_blood_affinity_gem', 'basic').texture('kubejs:item/affinity_gems/superior_blood_affinity_gem').rarity('rare').unstackable()
        event.create('exalted_blood_affinity_gem', 'basic').texture('kubejs:item/affinity_gems/exalted_blood_affinity_gem').rarity('epic').unstackable()


        event.create('ender_affinity_gem', 'basic').texture('kubejs:item/affinity_gems/ender_affinity_gem').rarity('uncommon').unstackable()
        event.create('superior_ender_affinity_gem', 'basic').texture('kubejs:item/affinity_gems/superior_ender_affinity_gem').rarity('rare').unstackable()
        event.create('exalted_ender_affinity_gem', 'basic').texture('kubejs:item/affinity_gems/exalted_ender_affinity_gem').rarity('epic').unstackable()

        event.create('fire_affinity_gem', 'basic').texture('kubejs:item/affinity_gems/fire_affinity_gem').rarity('uncommon').unstackable()
        event.create('superior_fire_affinity_gem', 'basic').texture('kubejs:item/affinity_gems/superior_fire_affinity_gem').rarity('rare').unstackable()
        event.create('exalted_fire_affinity_gem', 'basic').texture('kubejs:item/affinity_gems/exalted_fire_affinity_gem').rarity('epic').unstackable()

        event.create('ice_affinity_gem', 'basic').texture('kubejs:item/affinity_gems/ice_affinity_gem').rarity('uncommon').unstackable()
        event.create('superior_ice_affinity_gem', 'basic').texture('kubejs:item/affinity_gems/superior_ice_affinity_gem').rarity('rare').unstackable()
        event.create('exalted_ice_affinity_gem', 'basic').texture('kubejs:item/affinity_gems/exalted_ice_affinity_gem').rarity('epic').unstackable()

        event.create('lightning_affinity_gem', 'basic').texture('kubejs:item/affinity_gems/lightning_affinity_gem').rarity('uncommon').unstackable()
        event.create('superior_lightning_affinity_gem', 'basic').texture('kubejs:item/affinity_gems/superior_lightning_affinity_gem').rarity('rare').unstackable()
        event.create('exalted_lightning_affinity_gem', 'basic').texture('kubejs:item/affinity_gems/exalted_lightning_affinity_gem').rarity('epic').unstackable()

        event.create('nature_affinity_gem', 'basic').texture('kubejs:item/affinity_gems/nature_affinity_gem').rarity('uncommon').unstackable()
        event.create('superior_nature_affinity_gem', 'basic').texture('kubejs:item/affinity_gems/superior_nature_affinity_gem').rarity('rare').unstackable()
        event.create('exalted_nature_affinity_gem', 'basic').texture('kubejs:item/affinity_gems/exalted_nature_affinity_gem').rarity('epic').unstackable()

        event.create('holy_affinity_gem', 'basic').texture('kubejs:item/affinity_gems/holy_affinity_gem').rarity('uncommon').unstackable()
        event.create('superior_holy_affinity_gem', 'basic').texture('kubejs:item/affinity_gems/superior_holy_affinity_gem').rarity('rare').unstackable()
        event.create('exalted_holy_affinity_gem', 'basic').texture('kubejs:item/affinity_gems/exalted_holy_affinity_gem').rarity('epic').unstackable()

        event.create('evocation_affinity_gem', 'basic').texture('kubejs:item/affinity_gems/evocation_affinity_gem').rarity('uncommon').unstackable()
        event.create('superior_evocation_affinity_gem', 'basic').texture('kubejs:item/affinity_gems/superior_evocation_affinity_gem').rarity('rare').unstackable()
        event.create('exalted_evocation_affinity_gem', 'basic').texture('kubejs:item/affinity_gems/exalted_evocation_affinity_gem').rarity('epic').unstackable()

        event.create('aqua_affinity_gem', 'basic').texture('kubejs:item/affinity_gems/aqua_affinity_gem').rarity('uncommon').unstackable()
        event.create('superior_aqua_affinity_gem', 'basic').texture('kubejs:item/affinity_gems/superior_aqua_affinity_gem').rarity('rare').unstackable()
        event.create('exalted_aqua_affinity_gem', 'basic').texture('kubejs:item/affinity_gems/exalted_aqua_affinity_gem').rarity('epic').unstackable()

        event.create('geo_affinity_gem', 'basic').texture('kubejs:item/affinity_gems/geo_affinity_gem').rarity('uncommon').unstackable()
        event.create('superior_geo_affinity_gem', 'basic').texture('kubejs:item/affinity_gems/superior_geo_affinity_gem').rarity('rare').unstackable()
        event.create('exalted_geo_affinity_gem', 'basic').texture('kubejs:item/affinity_gems/exalted_geo_affinity_gem').rarity('epic').unstackable()

        event.create('respec_skills', 'basic').texture('kubejs:item/parties/join_party').rarity('uncommon')
        event.create('respec_exalted_skills', 'basic').texture('kubejs:item/parties/create_party').rarity('rare')

        event.create('skill_point', 'basic').texture('kubejs:item/skill_point').rarity('common').displayName('Skill Point')


        event.create('modification_gadget', 'basic').texture('kubejs:item/modification_gadget').rarity('rare').unstackable().displayName('Modification Gadget')
    
    
        event.create('fire_infusion', 'basic').texture('kubejs:item/elemental_pickups/transparent').rarity('common').displayName('Fire Infusion')
        event.create('water_infusion', 'basic').texture('kubejs:item/elemental_pickups/transparent').rarity('common').displayName('Water Infusion')
        event.create('earth_infusion', 'basic').texture('kubejs:item/elemental_pickups/transparent').rarity('common').displayName('Earth Infusion')
        event.create('ice_infusion', 'basic').texture('kubejs:item/elemental_pickups/transparent').rarity('common').displayName('Ice Infusion')
        event.create('lightning_infusion', 'basic').texture('kubejs:item/elemental_pickups/transparent').rarity('common').displayName('Lightning Infusion')
    });

    StartupEvents.registry('block', event => {
        event.create('hardened_void', 'basic').textureAll('kubejs:block/hardened_void')
        event.create('trapped_souls', 'basic').unbreakable().textureAll('kubejs:block/trapped_souls')
        event.create('bloody_anvil', 'basic').unbreakable().model('kubejs:block/bloody_anvil')

    })



    StartupEvents.registry('fluid', event => {
        // Basic "thick" (looks like lava) fluid with red tint
        event.create('void')
          .thickTexture(0x2D006D)
          .bucketColor(0x2D006D)
          .displayName('Void Essence')

          event.create('ender_blood')
          .thickTexture(0x080845)
          .bucketColor(0x080845)
          .displayName('Ender Blood')


          event.create('darkness')
            .thickTexture(0x000000)
            .bucketColor(0x000000)
            .displayName('Darkness')

          event.create('liquid_diamond')
            .thickTexture(0xADD8E6)
            .bucketColor(0xADD8E6)
            .displayName('Liquid Diamond')

        event.create('liquified_ratlantean_spirit')
            .thickTexture(0xCDED00)
            .bucketColor(0xCDED00)
            .displayName('Liquified Ratlantean Spirit')

        Object.entries(metallurgy).forEach(([name, fluid]) => {
            event.create(`acidic_${name}`)
              .thickTexture(fluid)
              .bucketColor(fluid)
          })
    })


    StartupEvents.registry('entity_type', event => {

        event.create('entity.celestial_glass', 'entityjs:arrow')
        .setBaseDamage(0) // Set base damage to 8
        .clientTrackingRange(8) // Set client tracking range to 8
        .isAttackable(true) // Make the arrow attackable
        .sized(1, 1) // Set size of arrow entity to 1x1
        .updateInterval(3) // Set update interval to 3 ticks
        //Setting .noItem() here will result in the builder skipping the item build altogether
        //Since the builder registers the item automatically this is the only way to prevent an item from being created here.
        //.noItem()
        .defaultHitGroundSoundEvent("minecraft:block.amethyst_cluster.place") // Set default hit ground sound event
        .setWaterInertia(1) // Set water inertia to 1
        .mobCategory('misc') // Set mob category to 'misc'
        .item(item => {
            item.maxStackSize(64); // Set maximum stack size of arrow item to 64
        })
        .tick(entity => {
            // Custom tick logic, for example, checking if the arrow is in lava and setting it on fire
            Utils.server.runCommandSilent(`/execute in ${event.level.dimension} run particle alexscaves:blue_hazmat_breathe ${entity.x} ${entity.y} ${entity.z} 1 1 1 2 1 force @a`)
        })
        .textureLocation(entity => {
            //Change texture resource location depending on certain information about the arrow entity.
            //Accepts both a new ResourceLocation or a String representation.
            //new ResourceLocation("kubejs:textures/entity/projectiles/arrow.png")
            return "kubejs:textures/entity/projectiles/celestial_glass.png"
        })


        event.create('entity.corrupted_shard', 'entityjs:arrow')
        .setBaseDamage(0) // Set base damage to 8
        .clientTrackingRange(8) // Set client tracking range to 8
        .isAttackable(true) // Make the arrow attackable
        .sized(1, 1) // Set size of arrow entity to 1x1
        .updateInterval(3) // Set update interval to 3 ticks
        //Setting .noItem() here will result in the builder skipping the item build altogether
        //Since the builder registers the item automatically this is the only way to prevent an item from being created here.
        //.noItem()
        .defaultHitGroundSoundEvent("minecraft:ambient.soul_sand_valley.additions") // Set default hit ground sound event
        .setWaterInertia(1) // Set water inertia to 1
        .mobCategory('misc') // Set mob category to 'misc'
        .item(item => {
            item.maxStackSize(1); // Set maximum stack size of arrow item to 64
        })
        .textureLocation(entity => {
            //Change texture resource location depending on certain information about the arrow entity.
            //Accepts both a new ResourceLocation or a String representation.
            //new ResourceLocation("kubejs:textures/entity/projectiles/arrow.png")
            return "kubejs:textures/entity/projectiles/corrupted_shard.png"
        })


        event.create('entity.corrupted_gemstone', 'entityjs:arrow')
        .setBaseDamage(0) // Set base damage to 8
        .clientTrackingRange(8) // Set client tracking range to 8
        .isAttackable(true) // Make the arrow attackable
        .sized(1, 1) // Set size of arrow entity to 1x1
        .updateInterval(3) // Set update interval to 3 ticks
        //Setting .noItem() here will result in the builder skipping the item build altogether
        //Since the builder registers the item automatically this is the only way to prevent an item from being created here.
        //.noItem()
        .defaultHitGroundSoundEvent("minecraft:ambient.soul_sand_valley.additions") // Set default hit ground sound event
        .setWaterInertia(1) // Set water inertia to 1
        .mobCategory('misc') // Set mob category to 'misc'
        .item(item => {
            item.maxStackSize(1); // Set maximum stack size of arrow item to 64
        })
        .textureLocation(entity => {
            //Change texture resource location depending on certain information about the arrow entity.
            //Accepts both a new ResourceLocation or a String representation.
            //new ResourceLocation("kubejs:textures/entity/projectiles/arrow.png")
            return "kubejs:textures/entity/projectiles/corrupted_shard.png"
        })

        event.create('entity.powering', 'entityjs:arrow')
        .setBaseDamage(0) // Set base damage to 8
        .clientTrackingRange(8) // Set client tracking range to 8
        .isAttackable(true) // Make the arrow attackable
        .sized(1, 1) // Set size of arrow entity to 1x1
        .updateInterval(3) // Set update interval to 3 ticks
        //Setting .noItem() here will result in the builder skipping the item build altogether
        //Since the builder registers the item automatically this is the only way to prevent an item from being created here.
        //.noItem()
        .defaultHitGroundSoundEvent("minecraft:ambient.soul_sand_valley.additions") // Set default hit ground sound event
        .setWaterInertia(1) // Set water inertia to 1
        .mobCategory('misc') // Set mob category to 'misc'
        .item(item => {
            item.maxStackSize(1); // Set maximum stack size of arrow item to 64
        })
        .textureLocation(entity => {
            //Change texture resource location depending on certain information about the arrow entity.
            //Accepts both a new ResourceLocation or a String representation.
            //new ResourceLocation("kubejs:textures/entity/projectiles/arrow.png")
            return "kubejs:textures/entity/projectiles/corrupted_shard.png"
        })

        event.create('entity.echoing_void', 'entityjs:arrow')
        .setBaseDamage(0) // Set base damage to 8
        .clientTrackingRange(8) // Set client tracking range to 8
        .isAttackable(true) // Make the arrow attackable
        .sized(1, 1) // Set size of arrow entity to 1x1
        .updateInterval(3) // Set update interval to 3 ticks
        //Setting .noItem() here will result in the builder skipping the item build altogether
        //Since the builder registers the item automatically this is the only way to prevent an item from being created here.
        //.noItem()
        .defaultHitGroundSoundEvent("minecraft:ambient.soul_sand_valley.additions") // Set default hit ground sound event
        .setWaterInertia(1) // Set water inertia to 1
        .mobCategory('misc') // Set mob category to 'misc'
        .item(item => {
            item.maxStackSize(1); // Set maximum stack size of arrow item to 64
        })
        .textureLocation(entity => {
            //Change texture resource location depending on certain information about the arrow entity.
            //Accepts both a new ResourceLocation or a String representation.
            //new ResourceLocation("kubejs:textures/entity/projectiles/arrow.png")
            return "kubejs:textures/entity/projectiles/echoing_void.png"
        })

        event.create('entity.withered_wand', 'entityjs:arrow')
        .setBaseDamage(0) // Set base damage to 8
        .clientTrackingRange(8) // Set client tracking range to 8
        .isAttackable(true) // Make the arrow attackable
        .sized(1, 1) // Set size of arrow entity to 1x1
        .updateInterval(3) // Set update interval to 3 ticks
        //Setting .noItem() here will result in the builder skipping the item build altogether
        //Since the builder registers the item automatically this is the only way to prevent an item from being created here.
        //.noItem()
        .defaultHitGroundSoundEvent("minecraft:ambient.soul_sand_valley.additions") // Set default hit ground sound event
        .setWaterInertia(1) // Set water inertia to 1
        .mobCategory('misc') // Set mob category to 'misc'
        .item(item => {
            item.maxStackSize(1); // Set maximum stack size of arrow item to 64
        })
        .textureLocation(entity => {
            //Change texture resource location depending on certain information about the arrow entity.
            //Accepts both a new ResourceLocation or a String representation.
            //new ResourceLocation("kubejs:textures/entity/projectiles/arrow.png")
            return "kubejs:textures/entity/projectiles/echoing_void.png"
        })


        event.create('entity.pearls_of_the_moon', 'entityjs:arrow')
        .setBaseDamage(0) // Set base damage to 8
        .clientTrackingRange(8) // Set client tracking range to 8
        .isAttackable(true) // Make the arrow attackable
        .sized(1, 1) // Set size of arrow entity to 1x1
        .updateInterval(3) // Set update interval to 3 ticks
        //Setting .noItem() here will result in the builder skipping the item build altogether
        //Since the builder registers the item automatically this is the only way to prevent an item from being created here.
        //.noItem()
        .defaultHitGroundSoundEvent("minecraft:block.amethyst_cluster.place") // Set default hit ground sound event
        .setWaterInertia(1) // Set water inertia to 1
        .mobCategory('misc') // Set mob category to 'misc'
        .item(item => {
            item.maxStackSize(64); // Set maximum stack size of arrow item to 64
        })
        .tick(entity => {
            // Custom tick logic, for example, checking if the arrow is in lava and setting it on fire
            Utils.server.runCommandSilent(`/execute in ${event.level.dimension} run particle alexscaves:blue_hazmat_breathe ${entity.x} ${entity.y} ${entity.z} 1 1 1 2 1 force @a`)
        })
        .textureLocation(entity => {
            //Change texture resource location depending on certain information about the arrow entity.
            //Accepts both a new ResourceLocation or a String representation.
            //new ResourceLocation("kubejs:textures/entity/projectiles/arrow.png")
            return "kubejs:textures/entity/projectiles/ice.png"
        })

        event.create('entity.throwing_knife_1', 'entityjs:arrow')
            .setBaseDamage(2) // Set base damage to 4
            .clientTrackingRange(8) // Set client tracking range to 8
            .isAttackable(true) // Make the arrow attackable
            .sized(1, 1) // Set size of arrow entity to 1x1
            .updateInterval(3) // Set update interval to 3 ticks
            //Setting .noItem() here will result in the builder skipping the item build altogether
            //Since the builder registers the item automatically this is the only way to prevent an item from being created here.
            //.noItem()
            .defaultHitGroundSoundEvent("alexscaves:desolate_dagger_hit") // Set default hit ground sound event
            .setWaterInertia(1) // Set water inertia to 1
            .mobCategory('misc') // Set mob category to 'misc'
            .item(item => {
                item.maxStackSize(1); // Set maximum stack size of arrow item to 64
            })
            .textureLocation(entity => {
                //Change texture resource location depending on certain information about the arrow entity.
                //Accepts both a new ResourceLocation or a String representation.
                //new ResourceLocation("kubejs:textures/entity/projectiles/arrow.png")
                return "kubejs:textures/entity/projectiles/throwing_knife.png"
        })
        event.create('entity.throwing_knife_2', 'entityjs:arrow')
            .setBaseDamage(2) // Set base damage to 4
            .clientTrackingRange(8) // Set client tracking range to 8
            .isAttackable(true) // Make the arrow attackable
            .sized(1, 1) // Set size of arrow entity to 1x1
            .updateInterval(3) // Set update interval to 3 ticks
            //Setting .noItem() here will result in the builder skipping the item build altogether
            //Since the builder registers the item automatically this is the only way to prevent an item from being created here.
            //.noItem()
            .defaultHitGroundSoundEvent("alexscaves:desolate_dagger_hit") // Set default hit ground sound event
            .setWaterInertia(1) // Set water inertia to 1
            .mobCategory('misc') // Set mob category to 'misc'
            .item(item => {
                item.maxStackSize(1); // Set maximum stack size of arrow item to 64
            })
            .textureLocation(entity => {
                //Change texture resource location depending on certain information about the arrow entity.
                //Accepts both a new ResourceLocation or a String representation.
                //new ResourceLocation("kubejs:textures/entity/projectiles/arrow.png")
                return "kubejs:textures/entity/projectiles/throwing_knife.png"
    })



        event.create('projectile', 'entityjs:projectile')
        .clientTrackingRange(8)
        .isAttackable(true)
        .mobCategory('misc')
        .item(item => {
            item.canThrow(true)
        })
        .sized(1, 1)
        .renderOffset(0, 0, 0)
        .renderScale(1, 1, 1)
        .updateInterval(3)
        .move(context => {
            let { entity, moverType, position } = context;
            // Custom movement logic, for example, applying velocity to the arrow
            entity.setDeltaMovement(0, 0.1, 0);
        })
    })

/**
 * @param {string} s
 * @returns {string}
 */
let stripModPrefix = (s) => {
    return s.replace(/^#{0,1}[a-z_]+:/, '')
  }
  
  /**
   * @param {string} name
   * @returns {string}
   */
  let getDisplayName = (name) => {
    return stripModPrefix(name)
      .split('_')
      .map((c) => c[0].toUpperCase() + c.substring(1))
      .join(' ')
  }
  
  /**
   * @param {Registry.Block} e
   * @param {string} id
   * @param {string} displayName
   * @param {object} modelJson
   * @returns {Internal.BasicBlockJS$Builder}
   */
  let registerCast = (e, id, displayName, modelJson) => {
    let block = e
      .create(id)
      .displayName(displayName)
      .stoneSoundType()
      .fullBlock(false)
      .box(5, 0, 3, 11, 4, 13)
      .box(6, 3, 1, 10, 4, 15)
      .notSolid()
      .requiresTool(true)
      .tagBlock('minecraft:mineable/pickaxe')
      .tagBlock('create:wrench_pickup')
      .item((item) => {
        item.modelJson(modelJson).maxStackSize(8)
      })
    block.modelJson = modelJson
    return block
  }
  
  /**
   * @param {Registry.Block} e
   * @param {string} id
   * @param {string} baseTexture
   */
  let registerBaseIngotCast = (e, id, baseTexture) => {
    let modelJson = {
      parent: 'kubejs:block/base_ingot_cast',
      textures: {
        base: baseTexture,
      },
    }
    return registerCast(e, id, getDisplayName(id), modelJson)
  }
  
  /**
   * @param {Registry.Block} e
   * @param {string} id
   * @param {string} displayName
   * @param {string} baseTexture
   * @param {string} fluidTexture
   */
  let registerFilledIngotCast = (
    e,
    id,
    displayName,
    baseTexture,
    fluidTexture
  ) => {
    let modelJson = {
      parent: 'kubejs:block/filled_ingot_cast',
      textures: {
        base: baseTexture,
        fluid: fluidTexture,
      },
    }
    return registerCast(e, id, displayName, modelJson).lightLevel(12)
  }

  /**
   * let metallurgy_ores = [
    ['ruby', 'topaz', 'peridot', 'jade', 'necoium', 'ametrine', 'sapphire', 'aquamarine']
]




  StartupEvents.registry('block', e => {
    //registerBaseIngotCast(e, 'kubejs:ceramic_ingot_cast', 'minecraft:block/terracotta')
    Object.entries(metallurgy).forEach(([ore, fluid]) => {
            registerBaseIngotCast(e, `kubejs:${ore}_ingot_cast`, `cataclysm:block/black_steel_block`)
            registerFilledIngotCast(e, `kubejs:molten_${ore}_ingot_cast`, `Molten ${ore} Ingot Cast`, `cataclysm:block/black_steel_block`, `kubejs:fluid/molten_${ore}`)
        })
    })

    //registerFilledIngotCast(
    //e,  // block registration event
    //'kubejs:molten_steel_ceramic_ingot_cast',  // block/item id name
   // 'Ceramic Ingot Cast (Molten Steel)',  // display name
   // //'minecraft:block/terracotta', // texture to use for the cast itself
   // 'tfmg:fluid/molten_steel_still'  // texture to use for the fluid inside the cast
   // )

StartupEvents.registry('fluid', event => {
    // Basic "thick" (looks like lava) fluid with red tint
    Object.entries(metallurgy).forEach(([ore, fluid]) => {
        event.create(`molten_${ore}`, 'basic')
            .thickTexture(fluid)
            .bucketColor(fluid)
            .displayName(`Molten ${ore}`)
    })
})
   */
