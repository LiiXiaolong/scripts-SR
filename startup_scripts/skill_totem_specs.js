// priority: 850

global.skillTotemSpecs = {
    'ice_beam': {
        lore: 'Enemies hit by a Ray of Frost are frozen for TIME seconds. Cooldown: COOLDOWN',
        time: 3,
        cooldown: 10,
        categories: ['cold']
    },
    'frost_repulse': {
        lore: 'PERCENT chance to freeze enemies around you when you are hit',
        percent: 5,
        categories: ['cold']
    },
    'aegis': {
        lore: 'Block and look at the ground while falling to negate fall damage',
        categories: ['block']
    },
    'bulwark': {
        lore: 'Blocked physical projectiles will be reflected back at the enemy',
        categories: ['block']
    },
    'speed_runner': {
        lore: 'Gives you TIME of Speed after performing a ParCool move',
        time: 1,
        categories: ['speed']
    },
    /**
     * 'lava_dancer': {
        lore: 'Gain a permanent Lava Walker effect',
        categories: ['lava', 'utility']
    },
     * 'blacksmith': {
        lore: 'Crafted gear has a chance to gain Apotheosis affixes',
        categories: ['crafting', 'affix']
    },
     * 
     */
    
    'merchant': {
        lore: 'Items sell for PERCENT more',
        percent: 25,
        categories: ['economy']
    },
    'bounty_hunter': {
        lore: 'Monster kills give PERCENT more coins',
        percent: 20,
        categories: ['economy']
    },
    
    'woods_walker': {
        lore: 'Quantity of item drops from animals is doubled',
        categories: ['economy']
    },
    'tunnel_vision': {
        lore: 'If you have the §6Gungnir§7 skill, the max amplifier levels are doubled',
        categories: ['speed', 'haste']
    },
    'head_hunter': {
        lore: 'Enemies under 10% health have a 50% chance to be Culled. Player gains PERCENT max health as healing',
        percent: 3,
        categories: ['skill', 'regeneration']
    },
    'momentum': {
        lore: 'Gain TIME of Haste and Strength after Combat Dashing',
        time: 2,
        categories: ['haste', 'strength']
    },
    'shattering_blow': {
        lore: 'Combat dashing into an enemy will stun them for TIME',
        time: 1.5,
        categories: ['stun', 'roll']
    },
    'cloaked_blade': {
        lore: 'Hitting a mob while invisible has a PERCENT chance to apply Venom for TIME',
        percent: 15,
        time: 3,
        categories: ['venom', 'invisibility']
    },
    'hexblood': {
        lore: 'Killing a mob with a spell while they have Venom applies Hex to the next HITS',
        hits: 3,
        categories: ['hex', 'venom']
    },
    'witchglass': {
        lore: 'Killing a mob with Hex via a spell applies Venom to ENTITY_COUNT nearby enemies for TIME',
        entity_count: 1,
        time: 3,
        categories: ['hex', 'venom']
    },
    'poisonous_rot': {
        lore: 'Killing a mob with Venom has a PERCENT chance per level of Venom to give nearby enemies Venom and Plague for 5s per level',
        percent: 3,
        categories: ['venom', 'plague']
    },
    'bloodshroud': {
        lore: 'Gain Invisibility and Speed while Bleeding. Hitting a mob consumes the Bleeding, Invisibility, and Speed.',
        categories: ['bleed', 'invisibility', 'speed']
    },
    'plague_of_rust': {
        lore: 'Hitting a mob with Plague has a PERCENT chance to apply Rend for TIME',
        percent: 5,
        time: 3,
        categories: ['plague', 'rend']
    },
    'final_gasp': {
        lore: 'Killing a mob has a PERCENT chance to give YOU Venom, Bleeding, Chilled, or Slowness for 15 seconds',
        percent: 5,
        categories: ['venom', 'bleed', 'cold', 'slow']
    },
    'frost_wraith': {
        lore: 'Hitting a mob while Invisible has a PERCENT chance to apply Chilled for TIME',
        percent: 15,
        time: 3,
        categories: ['cold', 'invisibility']
    },
    'bloody_shards': {
        lore: 'Killing a Frozen mob has a PERCENT chance per level of Frozen to apply Bleeding to nearby enemies',
        percent: 3,
        categories: ['cold', 'bleed']
    },
    'dreadmark': {
        lore: 'Permafrost Charges work with any projectile',
        categories: ['skill']
    },
    'death_grip': {
        lore: 'Projectile attacks consume 10 mana to stack 1 level of Chilled on the enemy. Each stack of Chilled has a PERCENT chance to consume Chilled and Freeze the enemy for 2s per stack',
        percent: 5,
        categories: ['cold', 'mana', 'ranged']
    },
    'frost_surge': {
        lore: 'Kills on mobs with the Chilled effect have a PERCENT chance to give you Speed for TIME',
        percent: 8,
        time: 3,
        categories: ['cold', 'speed']
    },
    'lucky_hex': {
        lore: 'While you have Luck, attacks have a PERCENT chance to give the target Hexed for TIME',
        percent: 10,
        time: 3,
        categories: ['hex']
    },
    'sanguine': {
        lore: 'Hitting a bleeding mob has a PERCENT chance to apply Marked for Death for TIME',
        percent: 15,
        time: 3,
        categories: ['bleed']
    },
    'bloodhunt': {
        lore: 'Melee killing a Slowed mob applies Bleeding to your next HITS',
        hits: 3,
        categories: ['slow', 'bleed']
    },
    'grim_reaper': {
        lore: 'Hitting a Hexed mob has a PERCENT chance per level of Hex to apply Marked for Death to nearby mobs (4s per level)',
        percent: 3,
        categories: ['hex']
    },
    'blood_splatter': {
        lore: 'Using §4Blood Harvest§7 has a PERCENT chance to apply Bleeding to each enemy in a 15 block radius',
        percent: 10,
        categories: ['bleed']
    },
    'sacrifice': {
        lore: 'Killing while Charged has a PERCENT chance per enemy to apply Hexed within 20 blocks',
        percent: 5,
        categories: ['hex', 'charged']
    },
    'esoteric_poison': {
        lore: 'Killing while Charged has a PERCENT chance per enemy to apply Plague within 20 blocks',
        percent: 5,
        categories: ['hex', 'charged']
    },
    'synapse': {
        lore: 'Killing a Stunned mob with a ranged attack stuns ENTITY_COUNT nearby enemies for TIME',
        entity_count: 1,
        time: 3,
        categories: ['stun', 'ranged']
    },
    'aftershock': {
        lore: 'Killing a Stunned mob with a melee attack applies Rend to ENTITY_COUNT nearby enemies for TIME',
        entity_count: 1,
        time: 3,
        categories: ['stun', 'melee', 'rend']
    },
    'temporal_chains': {
        lore: 'Killing a Stunned mob with a spell has a PERCENT chance per enemy to apply Slowness to nearby enemies',
        percent: 3,
        categories: ['stun', 'spell', 'slow']
    },
    'ghost_draw': {
        lore: 'The §eLethal Shadows§7 skill works with bows instead of only crossbows',
        categories: ['skill']
    },
    'frost_step': {
        lore: 'Casting Frost Step has a 50% chance to immediately refund its cooldown',
        categories: ['cold', 'spell']
    },
    'stoneform': {
        lore: 'Blocking has a PERCENT chance to give 5s of Resistance',
        percent: 8,
        categories: ['block', 'resistance']
    },
    'spectral_splinter': {
        lore: 'PERCENT chance to spawn 2 spectral arrows that target nearby enemies when hitting with an arrow',
        percent: 15,
        categories: ['ranged']
    },
    'slipstream': {
        lore: 'Hitting enemies with projectiles gives a TIME stack of Speed. Getting hit removes it',
        time: 4,
        categories: ['ranged', 'speed']
    },
    'phantom_step': {
        lore: 'Gain TIME of Invisibility and Speed for TIME after using Combat Dash',
        time: 3,
        categories: ['invisibility', 'speed', 'roll']
    },
    'dripping_maw': {
        lore: 'Killing a Hexed mob has a PERCENT chance to make nearby mobs cast Fire Breath at each other, based on Hex level',
        percent: 5,
        categories: ['hex', 'spell']
    },
    'ancestral_strength': {
        lore: 'Melee kills have a PERCENT chance to stack TIME of Strength',
        percent: 5,
        time: 2,
        categories: ['melee', 'strength']
    },
    'giants_blood': {
        lore: 'Melee hit enemies to gain a stacking Lesser Strength effect that lasts TIME. Max 5 stacks',
        time: 3,
        categories: ['melee', 'strength']
    },
    'mana_veil': {
        lore: 'Upon taking fatal damage, consume all mana and regain 1% of your health for every 40 mana consumed. You must have at least 200 mana to use this',
        categories: ['mana', 'revive', 'regeneration']
    },
    'wounding_strike': {
        lore: 'Hitting a mob with the Rend effect has a PERCENT chance to give them Bleeding for TIME',
        percent: 5,
        time: 3,
        categories: ['rend', 'bleed']
    },
    'gravemark': {
        lore: 'Killing a Slowed enemy with a projectile has a PERCENT chance to give you TIME of Impact',
        percent: 8,
        time: 5,
        categories: ['slow', 'ranged']
    },
    'shock_transfer': {
        lore: 'Killing a mob with a spell while you have the Charged effect has a PERCENT chance to consume your Charged effect and make mobs cast Ball Lightning at each other',
        percent: 15,
        categories: ['charged', 'spell']
    },
    'siphoning_steel': {
        lore: 'PERCENT chance to gain mana equal to 1% of damage from Melee attacks',
        percent: 25,
        categories: ['melee', 'mana']
    },
    'arcane_bargain': {
        lore: 'Killing a Hexed mob recharges 5% of your health and 5% of your mana per level of Hexed consumed. Each level consumed adds a PERCENT chance to apply a negative effect to you',
        percent: 10,
        categories: ['hex', 'mana', 'regeneration']
    },
    'arcane_dash': {
        lore: 'Gain a TIME stack of Speed after casting a spell. Max stacks: 3',
        time: 2,
        categories: ['spell', 'speed']
    },
    'sprint_shot': {
        lore: 'Hitting a mob with a projectile while sprinting gives you a TIME stacking Speed effect',
        time: 1,
        categories: ['spell', 'speed']
    },
    'scouring_winds': {
        lore: 'Using a dodge roll near a Hexed mob consumes Hexed and applies a 5 second speed effect with an amplifier equal to the level of Hex consumed',
        categories: ['hex', 'roll', 'speed']
    },
    'dead_rush': {
        lore: 'Killing an enemy that has Hexed, Chilled, Bleeding, or Plague will give you a stacking Lesser Speed boost for TIME',
        time: 5,
        categories: ['hex', 'cold', 'bleed', 'plague', 'speed']
    },
    'second_wind': {
        lore: 'Upon taking damage below 20% health, gain a Speed AMPLIFIER effect for TIME seconds. 30 second cooldown',
        time: 4,
        amplifier: 1,
        categories: ['speed']
    },
    'last_stand': {
        lore: 'Upon taking damage below 10% health, gain a Strength IV effect for TIME. 1 minute cooldown',
        time: 5,
        categories: ['strength']
    },
    'sentry': {
        lore: 'The §eSentinel§7 skill now works with bows',
        categories: ['skill']
    },
    'stim_shot': {
        lore: 'Using any Health Elixir will give you TIME of Speed II',
        time: 5,
        categories: ['elixir', 'speed']
    },
    'unbreakable_will': {
        lore: 'Using any Mana Elixir will give you TIME of Resistance I',
        time: 5,
        categories: ['elixir', 'resistance']
    },
    'commanders_concoction': {
        lore: 'Using any Health Elixir will give you and allies within a 15 block radius TIME of Strength 2',
        time: 10,
        categories: ['elixir', 'strength', 'allies']
    },
    'volatile_mix': {
        lore: 'PERCENT chance to double the duration and amplifier of any Elixir effect you apply, or cancel it entirely',
        percent: 20,
        categories: ['elixir']
    },
    'windlash_elixir': {
        lore: 'Using any Mana Elixir vertically launches any non-boss enemy within a 5 block radius',
        categories: ['elixir']
    },
    'bottomless_quiver': {
        lore: 'Modular Arrows teleport back to you if you miss a shot',
        categories: ['skill']
    },
    'dormant_rage': {
        lore: 'Killing a mob while you are Slowed will remove the effect and give you TIME of Strength',
        time: 4,
        categories: ['strength']
    },
    'satiate': {
        lore: 'Killing a mob while you have the Hunger effect will remove the it and give you TIME of Saturation',
        time: 5,
        categories: ['saturation']
    },
    'overdrive': {
        lore: 'If you are mounted, you and the mount gain a Speed effect',
        categories: ['speed', 'mount']
    },
    'trample': {
        lore: 'Hitting a mob with a melee attack while mounted will give them TIME of Slowness',
        time: 4,
        categories: ['slow', 'mount', 'melee']
    },
    'mangudai': {
        lore: 'Hitting a mob with a projectile while mounted will give you TIME of Haste',
        time: 3,
        categories: ['haste', 'mount', 'ranged']
    },
    'immovable_object': {
        lore: 'Gain a Resistance and Slowed effect while blocking',
        categories: ['block', 'resistance', 'slow']
    },
    'open_wounds': {
        lore: 'Each nearby bleeding mob adds a stack of Lesser Strength to you, up to 5 stacks',
        categories: ['bleed', 'strength']
    },
    'inertial_reversal': {
        lore: 'Combat dashing into an enemy that has a Slowness effect will consume the effect and give you TIME of Speed II',
        time: 5,
        categories: ['slow', 'roll', 'speed']
    },
    'frost_blast': {
        lore: 'Combat dashing into an enemy that has a Chilled effect will consume the effect and give them TIME of Frozen',
        time: 5,
        categories: ['roll', 'cold']
    },
    'arrow_storm': {
        lore: 'Hitting an enemy with a physical projectile has a PERCENT chance to spawn 4 homing arrows that target that enemy',
        percent: 5,
        categories: ['ranged', 'skill']
    },
    'conductive_arcane': {
        lore: 'Hitting an enemy with a spell has a PERCENT chance to spawn 2 homing orbs that target that enemy',
        percent: 5,
        categories: ['spell', 'skill']
    },
    'pyroclasm': {
        lore: 'Blocking a melee attack has a PERCENT chance for you to rapidly cast Flaming Strike at the attacker',
        percent: 5,
        categories: ['block', 'spell']
    },
    'voltage': {
        lore: 'Blocking a ranged attack has a PERCENT chance for you to rapidly cast Lightning Bolt at the attacker',
        percent: 5,
        categories: ['block', 'spell']
    },
    'freezing_retreat': {
        lore: 'Blocking a ranged attack has a 100% chance for you to rapidly cast Frost Step',
        categories: ['block', 'spell']
    },
    'arcane_barrage': {
        lore: 'Blocking a melee attack has a PERCENT chance for you to rapidly cast 2 Magic Missles at the attacker',
        percent: 5,
        categories: ['block', 'spell']
    },
    'gravewalker': {
        lore: 'When you are revived with an Effigy of the Undying, there is a PERCENT chance to not consume it',
        percent: 20,
        categories: ['revive']
    },
    'revenant': {
        lore: 'When you are revived with an Effigy of the Undying, you gain TIME of Invisibility and Speed',
        time: 5,
        categories: ['revive']
    },
    'divinity': {
        lore: 'When you are revived with an Effigy of the Undying, you and nearby allies are fully healed',
        categories: ['revive', 'allies']
    },
    'mana_bloom': {
        lore: 'Using a spell to kill a mob that has the Hexed effect has a PERCENT chance to give you 25 mana',
        percent: 8,
        categories: ['mana', 'hex', 'spell']
    },
    'coward': {
        lore: 'When you are hit while blocking, you gain TIME of Speed and Weakness',
        time: 10,
        categories: ['block', 'speed']
    },
    'phantom_vengeance': {
        lore: 'Killing a mob while Invisible has a PERCENT chance to give them Bleeding for TIME',
        percent: 10,
        time: 3,
        categories: ['bleed', 'invisibility']
    },
    'pathogenic_hex': {
        lore: 'Attacks against a mob with Hexed have a PERCENT chance to apply Venom for TIME',
        percent: 5,
        time: 3,
        categories: ['venom', 'hex']
    },
    'biting_cold': {
        lore: 'Attacks against a mob with Chilled have a PERCENT chance to apply Slowness for TIME',
        percent: 6.5,
        time: 4,
        categories: ['cold', 'slow']
    },
    'reapers_call': {
        lore: 'Melee killing a Chilled mob applies Marked for Death to your next HITS',
        hits: 1,
        categories: ['cold', 'melee']
    },
    'spell_break': {
        lore: 'Killing a Hexed mob with a spell applies Rend to your next HITS',
        hits: 3,
        categories: ['hex', 'spell', 'rend']
    },
    'hexchain': {
        lore: 'Killing a mob with Hex via a spell applies Hexed to ENTITY_COUNT nearby enemies for TIME',
        entity_count: 2,
        time: 3,
        categories: ['hex', 'spell']
    },
    'soul_tithe': {
        lore: 'Killing a Hexed mob with a melee attack has a PERCENT chance to give you 15 mana',
        percent: 5,
        categories: ['mana', 'hex', 'melee']
    },
    'spellweaver': {
        lore: 'Casting spells grants a stacking Echoing Strikes buff that lasts TIME. Getting hit removes it. Max 3 stacks',
        time: 4,
        categories: ['spell']
    },
    'arcane_vent': {
        lore: 'Killing while Charged has a PERCENT chance per enemy to apply Slowness within 12 blocks for TIME',
        percent: 5,
        time: 5,
        categories: ['charged', 'slow']
    },
    'frost_chain': {
        lore: 'Killing a Chilled mob has a PERCENT chance to make nearby enemies cast Ray of Frost at each other',
        percent: 5,
        categories: ['cold', 'spell']
    },
    'power_vacuum': {
        lore: 'Killing a mob while you have Weakness grants stacking Strength for TIME',
        time: 4,
        categories: ['weakness', 'strength']
    },
    'runeguard': {
        lore: 'Casting a spell grants Resistance for TIME (can stack up to 2 times)',
        time: 3,
        categories: ['spell', 'resistance']
    },
    'iron_will': {
        lore: 'When below 30% health, gain Resistance for TIME (Cooldown applies)',
        time: 8,
        categories: ['resistance']
    },
    'heavy_strike': {
        lore: 'While sprinting, landing a melee attack will trigger Flaming Strike',
        categories: ['melee', 'sprint', 'spell']
    },
    'windrunner': {
        lore: 'While sprinting, melee attacks have a PERCENT chance to cast Gust',
        percent: 25,
        categories: ['melee', 'sprint', 'spell']
    },
    'spell_snipe': {
        lore: 'While sprinting, ranged attacks have a PERCENT chance to cast Magic Arrow',
        percent: 10,
        categories: ['ranged', 'sprint', 'spell']
    },
    'gaias_boon': {
        lore: 'While sprinting, melee attacks have a PERCENT chance to cast Earthquake',
        percent: 5,
        categories: ['melee', 'sprint', 'spell']
    },
    'frost_snare': {
        lore: 'While sprinting, melee attacks have a PERCENT chance to cast Frostwave',
        percent: 30,
        categories: ['melee', 'sprint', 'spell']
    },
    'arcane_rebound': {
        lore: 'Killing a Slowed or Chilled enemy grants you Intelligence for TIME',
        time: 4,
        categories: ['charged', 'cold', 'slow']
    },
    'battle_march': {
        lore: 'Using any Mana Elixir will give you and allies within a 12 block radius TIME of Speed II',
        time: 8,
        categories: ['elixir', 'speed', 'allies']
    },
    'iron_rider': {
        lore: 'While mounted, you and the mount gain TIME of Resistance',
        time: 4,
        categories: ['resistance', 'mount']
    },
    'lancer': {
        lore: 'Hitting a mob with a melee attack while mounted will give them TIME of Weakness',
        time: 4,
        categories: ['weakness', 'mount', 'melee']
    },
    'venom_whip': {
        lore: 'Combat dashing into an enemy that has Venom applies Bleeding for TIME',
        time: 4,
        categories: ['bleed', 'roll', 'venom']
    },
    'thunder_riposte': {
        lore: 'Blocking a melee attack has a PERCENT chance for you to rapidly cast Chain Lightning',
        percent: 5,
        categories: ['block', 'spell']
    },
    'searing_wound': {
        lore: 'Hitting with Flaming Strike applies Bleeding for TIME. Cooldown: COOLDOWN',
        time: 3,
        cooldown: 8,
        categories: ['bleed', 'spell']
    },
    'stormwalker': {
        lore: 'Hitting enemies with spells while you are sprinting gives you a PERCENT chance to rapidly cast Chain Lightning.',
        percent: 20,
        categories: ['sprint', 'spell']
    },
    'frostbarb': {
        lore: 'Hitting enemies with ranged attacks while crouching gives you a PERCENT chance to rapidly cast Icicle. Cooldown: COOLDOWN',
        percent: 25,
        cooldown: 5,
        categories: ['crouch', 'ranged', 'spell']
    },
    'raging_inferno': {
        lore: 'Hitting enemies with spells while you are crouching gives you a PERCENT chance to rapidly cast Scorch. Cooldown: COOLDOWN',
        percent: 30,
        cooldown: 30,
        categories: ['crouch', 'spell']
    },
    'frozen_lightning': {
        lore: 'If you have a Permafrost Charge, you also gain a Shock Charge.',
        categories: ['skill']
    },
    'frost_nova': {
        lore: 'Landing a critical hit with a melee attack has a PERCENT chance to rapidly cast Frostwave.',
        percent: 5,
        categories: ['cold', 'melee', 'spell']
    },
    'flame_burst': {
        lore: 'Landing a critical hit with a melee attack has a PERCENT chance to rapidly cast Flaming Strike.',
        percent: 5,
        categories: ['fire', 'melee', 'spell']
    }
};

const allSkillTotemElixirs = [
    'kubejs:lesser_health_elixir',
    'kubejs:greater_health_elixir',
    'kubejs:exalted_health_elixir',
    'kubejs:lesser_mana_elixir',
    'kubejs:greater_mana_elixir',
    'kubejs:exalted_mana_elixir'
]

const defaultSkillTotemElixirFx = {
    particle: {
        id: 'minecells:protector',
        offset: [0.15, 0.15, 0.15],
        speed: 0.1,
        count: 40
    },
    sound: {
        id: 'irons_spellbooks:cast.generic.holy',
        volume: 0.8,
        pitch: 1.2
    }
}

function createSkillTotemElixirTrigger(effects) {
    return {
        items: allSkillTotemElixirs.slice(),
        effects: effects.slice(),
        duration: 60,
        amplifier: 1,
        application: 'self',
        scales: true,
        scaleAmplifier: true,
        additiveDuration: true,
        particle: {
            id: defaultSkillTotemElixirFx.particle.id,
            offset: defaultSkillTotemElixirFx.particle.offset.slice(),
            speed: defaultSkillTotemElixirFx.particle.speed,
            count: defaultSkillTotemElixirFx.particle.count
        },
        sound: Object.assign({}, defaultSkillTotemElixirFx.sound)
    }
}

function createSkillTotemElixirSpec(displayName, lore, categories, effects) {
    return {
        displayName: displayName,
        lore: lore,
        time: 3,
        amplifier: 1,
        categories: ['elixir'].concat(categories),
        triggers: {
            elixir_use: createSkillTotemElixirTrigger(effects)
        }
    }
}

Object.assign(global.skillTotemSpecs, {
    'fleetfoot_formula': createSkillTotemElixirSpec('Fleetfoot Formula', 'Using any Health or Mana Elixir will give you TIME of Speed at Level AMPLIFIER.', ['speed'], ['minecraft:speed']),
    'clockvein_tonic': createSkillTotemElixirSpec('Clockvein Tonic', 'Using any Health or Mana Elixir will give you TIME of Haste at Level AMPLIFIER.', ['haste'], ['minecraft:haste']),
    'titans_measure': createSkillTotemElixirSpec("Titan's Measure", 'Using any Health or Mana Elixir will give you TIME of Strength at Level AMPLIFIER.', ['strength'], ['minecraft:strength']),
    'skylark_elixir': createSkillTotemElixirSpec('Skylark Elixir', 'Using any Health or Mana Elixir will give you TIME of Jump Boost at Level AMPLIFIER.', ['jump'], ['minecraft:jump_boost']),
    'phoenix_bloom': createSkillTotemElixirSpec('Phoenix Bloom', 'Using any Health or Mana Elixir will give you TIME of Regeneration at Level AMPLIFIER.', ['regeneration'], ['minecraft:regeneration']),
    'bastion_distillate': createSkillTotemElixirSpec('Bastion Distillate', 'Using any Health or Mana Elixir will give you TIME of Resistance at Level AMPLIFIER.', ['resistance'], ['minecraft:resistance']),
    'veilwalker_draught': createSkillTotemElixirSpec('Veilwalker Draught', 'Using any Health or Mana Elixir will give you TIME of True Invisibility at Level AMPLIFIER.', ['invisibility'], ['irons_spellbooks:true_invisibility', 'cofh_core:true_invisibility']),
    'sunshield_cordial': createSkillTotemElixirSpec('Sunshield Cordial', 'Using any Health or Mana Elixir will give you TIME of Absorption at Level AMPLIFIER.', ['absorption'], ['minecraft:absorption']),
    'stormheart_serum': createSkillTotemElixirSpec('Stormheart Serum', 'Using any Health or Mana Elixir will give you TIME of Charged at Level AMPLIFIER.', ['charged'], ['irons_spellbooks:charged']),
    'ironbark_infusion': createSkillTotemElixirSpec('Ironbark Infusion', 'Using any Health or Mana Elixir will give you TIME of Oakskin at Level AMPLIFIER.', ['oakskin'], ['irons_spellbooks:oakskin']),
    'riftseer_elixir': createSkillTotemElixirSpec('Riftseer Elixir', 'Using any Health or Mana Elixir will give you TIME of Planar Sight at Level AMPLIFIER.', ['sight'], ['irons_spellbooks:planar_sight']),
    'spellrush_philter': createSkillTotemElixirSpec('Spellrush Philter', 'Using any Health or Mana Elixir will give you TIME of Hastened at Level AMPLIFIER.', ['haste'], ['irons_spellbooks:hastened']),
    'bottlebound_tempest': createSkillTotemElixirSpec('Bottlebound Tempest', 'Using any Health or Mana Elixir will give you TIME of Thunderstorm at Level AMPLIFIER.', ['storm'], ['irons_spellbooks:thunderstorm']),
    'earthwake_tonic': createSkillTotemElixirSpec('Earthwake Tonic', 'Using any Health or Mana Elixir will give you TIME of Geomancy at Level AMPLIFIER.', ['geomancy'], ['mowziesmobs:geomancy']),
    'ghoststride_draught': createSkillTotemElixirSpec('Ghoststride Draught', 'Using any Health or Mana Elixir will give you TIME of Spectral Blink at Level AMPLIFIER.', ['blink'], ['traveloptics:spectral_blink']),
    'wyverns_lift': createSkillTotemElixirSpec("Wyvern's Lift", 'Using any Health or Mana Elixir will give you TIME of Flying at Level AMPLIFIER.', ['flying'], ['attributeslib:flying']),
    'siegebreaker_serum': createSkillTotemElixirSpec('Siegebreaker Serum', 'Using any Health or Mana Elixir will give you TIME of Impact at Level AMPLIFIER.', ['impact'], ['projectile_damage:impact']),
    'fateweavers_fortune': createSkillTotemElixirSpec("Fateweaver's Fortune", 'Using any Health or Mana Elixir will give you TIME of Arcane Luck at Level AMPLIFIER.', ['luck'], ['kubejs:arcane_luck']),
    'volleyfire_cordial': createSkillTotemElixirSpec('Volleyfire Cordial', 'Using any Health or Mana Elixir will give you TIME of Rapid Shot at Level AMPLIFIER.', ['ranged'], ['kubejs:rapid_shot']),
    'mirage_tincture': createSkillTotemElixirSpec('Mirage Tincture', 'Using any Health or Mana Elixir will give you TIME of Diversion at Level AMPLIFIER.', ['dodge'], ['kubejs:diversion']),
    'bloodfury_distillate': createSkillTotemElixirSpec('Bloodfury Distillate', 'Using any Health or Mana Elixir will give you TIME of Berserk at Level AMPLIFIER.', ['berserk'], ['runiclib:berserk']),
    'vengeguard_infusion': createSkillTotemElixirSpec('Vengeguard Infusion', 'Using any Health or Mana Elixir will give you TIME of Retaliation at Level AMPLIFIER.', ['retaliation'], ['runiclib:retaliation']),
    'cinderbriar_elixir': createSkillTotemElixirSpec('Cinderbriar Elixir', 'Using any Health or Mana Elixir will give you TIME of Burning Thorns at Level AMPLIFIER.', ['thorns'], ['runiclib:burning_thorns']),
    'heartspark_tonic': createSkillTotemElixirSpec('Heartspark Tonic', 'Using any Health or Mana Elixir will give you TIME of Adrenaline at Level AMPLIFIER.', ['adrenaline'], ['runiclib:adrenaline']),
    'stoneward_philter': createSkillTotemElixirSpec('Stoneward Philter', 'Using any Health or Mana Elixir will give you TIME of Aegis at Level AMPLIFIER.', ['aegis'], ['gtbcs_geomancy_plus:aegis'])
})

global.skillTotemElixirUseMap = {}
Object.entries(global.skillTotemSpecs).forEach(([skillId, spec]) => {
    if (!spec || !spec.triggers || !spec.triggers.elixir_use) return
    let trigger = spec.triggers.elixir_use
    global.skillTotemElixirUseMap[skillId] = {
        items: Array.isArray(trigger.items) ? trigger.items.slice() : [],
        effects: Array.isArray(trigger.effects) ? trigger.effects.slice() : [],
        duration: trigger.duration,
        amplifier: trigger.amplifier,
        application: trigger.application,
        scales: trigger.scales,
        scaleAmplifier: trigger.scaleAmplifier,
        additiveDuration: trigger.additiveDuration,
        radius: trigger.radius,
        particle: trigger.particle ? {
            id: trigger.particle.id,
            offset: Array.isArray(trigger.particle.offset) ? trigger.particle.offset.slice() : trigger.particle.offset,
            speed: trigger.particle.speed,
            count: trigger.particle.count
        } : null,
        sound: trigger.sound ? Object.assign({}, trigger.sound) : null
    }
})

global.curiosSkillDataKey = 'kubejs_curios_skill_data'
global.curiosSkillRarityOrder = [
    'apotheosis:common',
    'apotheosis:uncommon',
    'apotheosis:rare',
    'apotheosis:epic',
    'apotheosis:mythic'
]
global.curiosSkillRarityCaps = {
    'apotheosis:common': { maxSkills: 1, maxLevel: 1, maxLocks: 1 },
    'apotheosis:uncommon': { maxSkills: 2, maxLevel: 2, maxLocks: 1 },
    'apotheosis:rare': { maxSkills: 3, maxLevel: 3, maxLocks: 2 },
    'apotheosis:epic': { maxSkills: 4, maxLevel: 4, maxLocks: 2 },
    'apotheosis:mythic': { maxSkills: 5, maxLevel: 5, maxLocks: 3 }
}
global.curiosSkillScalingKeys = ['time', 'cooldown', 'percent', 'hits', 'entity_count', 'amplifier']

global.normalizeSkillTotemKey = function (skillKey) {
    let key = String(skillKey == null ? '' : skillKey)
    key = key.replace(/\\/g, '')
    key = key.replace(/^[\s\[\]"']+/, '').replace(/[\s\[\]"']+$/, '')
    if (key.includes(':')) key = key.split(':')[1]
    return key.trim()
}

global.getSkillTotemSpec = function (skillKey) {
    let key = global.normalizeSkillTotemKey(skillKey)
    if (!key) return null
    let specs = global.skillTotemSpecs || {}
    return specs[key] || null
}

global.isCuriosSkillLevelable = function (skillKey) {
    let spec = global.getSkillTotemSpec(skillKey)
    if (!spec) return false
    return global.curiosSkillScalingKeys.some(prop => Object.prototype.hasOwnProperty.call(spec, prop))
}

global.getCuriosSkillCapsForRarity = function (rarityId) {
    let rarity = String(rarityId || '')
    if (rarity === 'apotheosis:ancient') rarity = 'apotheosis:mythic'
    return (global.curiosSkillRarityCaps && global.curiosSkillRarityCaps[rarity])
        ? global.curiosSkillRarityCaps[rarity]
        : global.curiosSkillRarityCaps['apotheosis:common']
}

global.getSkillTotemDisplayName = function (skillKey) {
    let key = global.normalizeSkillTotemKey(skillKey)
    if (!key) return ''

    let spec = global.getSkillTotemSpec(key)
    if (spec && spec.displayName) return String(spec.displayName)

    return key
        .split('_')
        .map(word => {
            let s = String(word).trim()
            return s.length > 0 ? s.charAt(0).toUpperCase() + s.slice(1) : ''
        })
        .join(' ')
}

global.getSkillTotemCategories = function (skillKey) {
    let spec = global.getSkillTotemSpec(skillKey)
    let raw = spec ? spec.categories : null
    let out = []
    if (!raw) return out

    if (Array.isArray(raw)) {
        for (let i = 0; i < raw.length; i++) out.push(String(raw[i]))
        return out
    }

    try {
        if (typeof raw.length === 'number') {
            for (let i = 0; i < raw.length; i++) out.push(String(raw[i]))
            return out
        }
    } catch (e) {}

    try {
        if (typeof raw.size === 'function' && typeof raw.get === 'function') {
            for (let i = 0; i < raw.size(); i++) out.push(String(raw.get(i)))
            return out
        }
    } catch (e) {}

    try {
        if (typeof raw.forEach === 'function') {
            raw.forEach(value => out.push(String(value)))
            if (out.length > 0) return out
        }
    } catch (e) {}

    return out
}

global.getCuriosSkillIcon = function (skillKey) {
    let categories = global.getSkillTotemCategories(skillKey)
    let hasAny = function (values) {
        for (let i = 0; i < values.length; i++) {
            if (categories.indexOf(values[i]) !== -1) return true
        }
        return false
    }

    if (hasAny(['elixir'])) return '⚗'
    if (hasAny(['economy'])) return '⟐'
    if (hasAny(['ranged'])) return '➶'
    if (hasAny(['melee', 'bleed', 'rend', 'strength', 'block', 'stun', 'sprint', 'invisibility', 'revive', 'venom', 'cold', 'fire', 'plague', 'weakness'])) return '⚔'
    if (hasAny(['spell', 'mana', 'hex', 'charged'])) return '✴'
    return '⚚'
}

global.getCuriosSkillLoreReplacements = function (skillKey, level) {
    let spec = global.getSkillTotemSpec(skillKey)
    if (!spec) return {}

    let lvl = Math.max(1, Number(level) || 1)
    let values = {}
    let fmt = function (value) {
        let rounded = Math.round(Number(value) * 10) / 10
        return Math.abs(rounded - Math.round(rounded)) < 1e-9 ? String(Math.round(rounded)) : String(rounded)
    }
    let has = function (prop) {
        return Object.prototype.hasOwnProperty.call(spec, prop)
    }

    let timeVal = has('time') ? spec.time * lvl : null
    let percentVal = has('percent') ? spec.percent * lvl : null
    let hitsVal = has('hits') ? spec.hits * lvl : null
    let entityCountVal = has('entity_count') ? spec.entity_count * lvl : null
    let amplifierVal = has('amplifier') ? spec.amplifier * lvl : null
    let cooldownVal = has('cooldown') ? ((spec.cooldown * 5) - (spec.cooldown * (lvl - 1))) : null

    if (timeVal != null) values.TIME = `${fmt(timeVal)}s`
    if (percentVal != null) values.PERCENT = `${fmt(percentVal)}%`
    if (hitsVal != null) values.HITS = `${fmt(hitsVal)} hits`
    if (entityCountVal != null) values.ENTITY_COUNT = `${fmt(entityCountVal)}`
    if (amplifierVal != null) values.AMPLIFIER = `${fmt(amplifierVal)}`
    if (cooldownVal != null) values.COOLDOWN = `${fmt(cooldownVal)}s`

    return values
}

global.renderCuriosSkillLoreText = function (skillKey, level) {
    let spec = global.getSkillTotemSpec(skillKey)
    if (!spec) return ''

    let text = String(spec.lore || '')
    let values = global.getCuriosSkillLoreReplacements(skillKey, level)
    let keys = Object.keys(values)
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i]
        text = text.replace(new RegExp(key, 'g'), values[key])
    }

    return text
}
