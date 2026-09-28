global.mage_effects = [
    'blood',
    'ender',
    'fire',
    'ice',
    'lightning',
    'nature',
    'holy',
    'evocation',
    'aqua',
    'geo',
]
StartupEvents.registry('mob_effect', event => {
    event.create('glacial_grasp') // 25% chance to freeze attackers when they hit you. Attacking frozen enemies has a 25% chance to give you a stacking regeneration effect
        .color(0xADD8E6) // Sets the color of the Effect's Particles.
        .beneficial() // Categorizes the Effect as Beneficial.
        .displayName('Glacial Grasp') // Sets the Display Name of the Effect.
        
    event.create('arcane_luck') // Improves the chances of getting a favorable outcome when rolling many chance based events. These events include: Loot boxes, Orb rolls, Orb drops, Boss Variant drops, and more.
        .color(0xADD8E6)
        .beneficial()
        .displayName('Arcane Luck')
        .formattedDisplayName('Arcane Luck')

    event.create('marked_for_death')  // Helper & amplifier for Bloodripper skills
        .color(0xADD8E6)
        .beneficial()
        .displayName('Marked for Death')
        .formattedDisplayName('Marked for Death')

    event.create('hexed') //10% more damage taken from spells per level
        .color(0xADD8E6)
        .harmful()
        .displayName('Hexed')
        .formattedDisplayName('Hexed')
        .modifyAttribute(
        'irons_spellbooks:spell_resist',
        '8b516dfc-85bc-4hhh-9d5f-1b94ab2a2e9e',
        -0.10,
        'multiply_base'
    )

    event.create('specter') // Specter summon helpers
        .color(0xADD8E6)
        .beneficial()
        .displayName('Summon Type: Specter')
        .formattedDisplayName('Summon Type: Specter')

    event.create('beast') // Beast summon helpers
        .color(0xADD8E6)
        .beneficial()
        .displayName('Summon Type: Beast')
        .formattedDisplayName('Summon Type: Beast')

    event.create('permafrost_charge') // Must have Permafrost skill. Arrows fired while you have Permafrost Charge will consume charges to apply Freeze and Rend to enemies hit. Values scale with Permafrost level
        .color(0xADD8E6)
        .beneficial()
        .displayName('Permafrost Charge')
        .formattedDisplayName('Permafrost Charge')
    
    event.create('wind_charge')
        .color(0xADD8E6)
        .beneficial()
        .displayName('Wind Charge')
        .formattedDisplayName('Wind Charge')
        
    event.create('venom_charge') // Helper for Kensei skills, mostly Ouroboros
        .color(0xADD8E6)
        .beneficial()
        .displayName('Venom Charge')
        .formattedDisplayName('Venom Charge')

    event.create('runic_charge') // Must have Tyrfing skill. Runic charges create sunbeams when you hit an enemy with a thrown weapon. Also acts as an amplifier for other berserker skills.
        .color(0xADD8E6)
        .beneficial()
        .displayName('Runic Charge')
        .formattedDisplayName('Runic Charge')

    event.create('shock_charge') // Must have Fenrir or Mjolnir skill. Shock charges give you lightning resistance and create lightning bolts when you hit an enemy with a thrown weapon.
        .color(0xADD8E6)
        .beneficial()
        .displayName('Shock Charge')
        .formattedDisplayName('Shock Charge')
        
    event.create('rage_charge') // Not implemented yet
        .color(0xADD8E6)
        .beneficial()
        .displayName('Rage Charge')
        .formattedDisplayName('Rage Charge')

    event.create('dread_charge')// Not implemented yet
        .color(0xADD8E6)
        .harmful()
        .displayName('Dread Charge')
        .formattedDisplayName('Dread Charge')

    event.create('mark_of_yggdrasil') //Amplifies many Berserker skills
        .color(0xADD8E6)
        .beneficial()
        .displayName('Mark of Yggdrasil')
        .formattedDisplayName('Mark of Yggdrasil')

    event.create('demon_charge') //Not implemented yet
        .color(0xADD8E6)
        .harmful()
        .displayName('Demon Charge')
        .formattedDisplayName('Demon Charge')

    event.create('arcane_charge') //Spellblade spender
        .color(0xADD8E6)
        .beneficial()
        .displayName('Arcane Charge')
        .formattedDisplayName('Arcane Charge')

    event.create('mark_of_the_beast')// Must have Mark of the Beast skill. Hitting an enemy that has the Mark of the Beast ignites all other marked enemies for 2 seconds and refreshes the effect timer to 10s. Values scale with Mark of the Beast level
        .color(0xADD8E6)
        .beneficial()
        .displayName('Mark of the Beast')
        .formattedDisplayName('Mark of the Beast')

    event.create('insanity') // Insane state helper
        .color(0xADD8E6)
        .harmful()
        .displayName('Insanity')
        .formattedDisplayName('Insanity')

    event.create('mark_of_the_void') // Must have Voidblast skill: Killing an enemy with a projectile while they have the Mark of the Void will cause you to rapidly teleport to enemies within 10 blocks and cast shockwave. Values scale with Voidblast level
        .color(0xADD8E6)
        .beneficial()
        .displayName('Mark of the Void')
        .formattedDisplayName('Mark of the Void')

    event.create('temporal_disruption') //Severed Continuum skill helper
        .color(0xADD8E6)
        .beneficial()
        .displayName('Temporal Disruption')
        .formattedDisplayName('Temporal Disruption')

    event.create('temporal_charge') // Another Severed Continuum skill helper
        .color(0xADD8E6)
        .beneficial()
        .displayName('Temporal Charge')
        .formattedDisplayName('Temporal Charge')

    event.create('plague_charge') //Must have the Necrotic Bloom skill. Right clicking on an enemy will consume a Plague Charge and give enemies within a 3 block radius a 5 second Plague effect. Values scale with Necrotic Bloom level
        .color(0xADD8E6)
        .beneficial()
        .displayName('Plague Charge')
        .formattedDisplayName('Plague Charge')

    event.create('smoldering') // Applies burning
        .color(0xADD8E6)
        .harmful()
        .displayName('Smoldering')
        .formattedDisplayName('Smoldering')

    event.create('dashing') // Dash helper
        .color(0xADD8E6)
        .beneficial()
        .displayName('Dashing')
        .formattedDisplayName('Dashing')

    event.create('rolling') // Combat Roll helper
        .color(0xADD8E6)
        .beneficial()
        .displayName('Rolling')
        .formattedDisplayName('Rolling')
	        
    event.create('blood_charge') // Must have the Blood Fever skill. Critical kills have a chance to give you a Blood Charge. Hitting a monster with a thrown projectile while you have a §4Blood Charge§7 will consume it and trigger the §6Blood Harvest§7 skill. Values scale with Blood Fever level
        .color(0xADD8E6)
        .beneficial()
        .displayName('Blood Charge')
        .formattedDisplayName('Blood Charge')

    event.create('plunder')
        .color(0xADD8E6)
        .beneficial()
        .displayName('Plunder')
        .formattedDisplayName('Plunder')
    
    event.create('rapid_shot')
        .color(0xADD8E6)
        .beneficial()
        .displayName('Rapid Shot')
        .formattedDisplayName('Rapid Shot')
        .modifyAttribute(
        'attributeslib:draw_speed',
        '8b516dfc-85bc-4f8d-9f5f-6b75bb5z3e9e',
        0.10,
        'multiply_base'
    )

    event.create('lesser_speed') // +5% movement speed per level
    .color(0x00FFAA)
    .beneficial()
    .displayName('Lesser Speed')
    .formattedDisplayName('Lesser Speed')
    .modifyAttribute(
        'minecraft:generic.movement_speed',
        '8b516dfc-85bc-4f8d-9f5f-6b05aa1a2e9e',
        0.05,
        'multiply_base'
    )
    event.create('lesser_haste') // +5% attack speed per level
    .color(0x00FFAA)
    .beneficial()
    .displayName('Lesser Haste')
    .formattedDisplayName('Lesser Haste')
    .modifyAttribute(
        'minecraft:generic.attack_speed',
        '8b516dfc-85bc-4h8d-9d5f-6b05ab2a2e9e',
        0.05,
        'multiply_base'
    )
    event.create('lesser_slowness') // -3% movement speed per level
    .color(0x00FFAA)
    .harmful()
    .displayName('Lesser Slowness')
    .formattedDisplayName('Lesser Slowness')
    .modifyAttribute(
        'minecraft:generic.movement_speed',
        '8v116dfc-85bc-4f8d-9f5f-6b05aa1a2e9e',
        -0.03,
        'multiply_base'
    )
    event.create('blood_loss') // stacking effect that applies bleeding to nearby enemies
    .color(0xADD8E6)
    .harmful()
    .displayName('Blood Loss')
    .formattedDisplayName('Blood Loss')
    .modifyAttribute(
        'irons_spellbooks:blood_magic_resist',
        '2z516dfc-85bc-4f8d-9f5f-6g07dc1a2e9e',
        -0.03,
        'multiply_base'
    )

    event.create('radiance_charge') // stacking effect that applies bleeding to nearby enemies
    .color(0xADD8E6)
    .harmful()
    .displayName('Radiance Charge')
    .formattedDisplayName('Radiance Charge')
    .modifyAttribute(
        'irons_spellbooks:holy_spell_power',
        '2z516dfc-85dc-4f8d-9f5f-6g07dc1a1e6z',
        0.03,
        'multiply_base'
    )

    event.create('flaming_shadows')
        .color(0xADD8E6)
        .beneficial()
        .displayName('Flaming Shadows')
        .formattedDisplayName('Flaming Shadows')
        .modifyAttribute(
            'irons_spellbooks:fire_spell_power',
            '7b6a4zfc-85bc-4f8d-9f5f-6b05aa1b2e9e',
            0.03,
            'multiply_base'
        )

    event.create('zen') // stacking effect that applies bleeding to nearby enemies
    .color(0xADD8E6)
    .harmful()
    .displayName('Zen')
    .formattedDisplayName('Zen')
    .modifyAttribute(
        'irons_spellbooks:holy_spell_power',
        '2z516dfd-86bc-4f8d-9f5f-6g08dc1b3e9e',
        0.03,
        'multiply_base'
    )

    event.create('rite_of_the_red_court') // Ability Helper
        .color(0xADD8E6)
        .beneficial()
        .displayName('Rite of the Red Court')
        .formattedDisplayName('Rite of the Red Court')

    event.create('diversion') // 5% chance to dodge attacks per level
    .color(0x00FFAA)
    .beneficial()
    .displayName('Diversion')
    .formattedDisplayName('Diversion')
    .modifyAttribute(
        'attributeslib:dodge_chance',
        '8b516dfc-85bc-4f8d-9f5f-6g07dc1a2e9e',
        0.05,
        'multiply_base'
    )
    event.create('commander_effect') // Commander skill helper
        .color(0xADD8E6)
        .beneficial()
        .displayName('Commander')
        .formattedDisplayName('Commander')


    event.create('steel_feet') // immune to fall damage
        .color(0xADD8E6)
        .beneficial()
        .displayName('Steel Feet')
        .formattedDisplayName('Steel Feet')


    event.create('blood_affinity')
        .color(0xADD8E6)
        .beneficial()
        .displayName('Blood Affinity')
        .formattedDisplayName('Blood Affinity')
        .modifyAttribute(
            'irons_spellbooks:blood_spell_power',
            '8b616dfc-85bc-4f8d-9f5f-6b05aa1b2e9e',
            0.10,
            'multiply_base'
        )

    event.create('ender_affinity')
        .color(0xADD8E6)
        .beneficial()
        .displayName('Ender Affinity')
        .formattedDisplayName('Ender Affinity')
        .modifyAttribute(
            'irons_spellbooks:ender_spell_power',
            '8b617dfd-85zz-4f8d-9f5f-6b05aa1b2e9e',
            0.10,
            'multiply_base'
        )



    event.create('fire_affinity')
        .color(0xADD8E6)
        .beneficial()
        .displayName('Fire Affinity')
        .formattedDisplayName('Fire Affinity')
        .modifyAttribute(
            'irons_spellbooks:fire_spell_power',
            '8b616dfv-85bc-4f8d-9f5f-6b05aa1b2e9e',
            0.10,
            'multiply_base'
        )
    event.create('ice_affinity')
        .color(0xADD8E6)
        .beneficial()
        .displayName('Ice Affinity')
        .formattedDisplayName('Ice Affinity')
        .modifyAttribute(
            'irons_spellbooks:ice_spell_power',
            '8b627dfc-86bc-4f8d-9f5f-6b05aa1b2e9e',
            0.10,
            'multiply_base'
        )
    event.create('lightning_affinity')
        .color(0xADD8E6)
        .beneficial()
        .displayName('Lightning Affinity')
        .formattedDisplayName('Lightning Affinity')
        .modifyAttribute(
            'irons_spellbooks:lightning_spell_power',
            '8b636dfc-85bc-4g8d-9f5f-6b05aa1b2z9y',
            0.10,
            'multiply_base'
        )
    event.create('nature_affinity')
        .color(0xADD8E6)
        .beneficial()
        .displayName('Nature Affinity')
        .formattedDisplayName('Nature Affinity')
        .modifyAttribute(
            'irons_spellbooks:nature_spell_power',
            '8b646dfc-85bc-4f8d-9f5f-6b05db1b2e6e',
            0.10,
            'multiply_base'
        )
    event.create('holy_affinity')
        .color(0xADD8E6)
        .beneficial()
        .displayName('Holy Affinity')
        .formattedDisplayName('Holy Affinity')
        .modifyAttribute(
            'irons_spellbooks:holy_spell_power',
            '8b656dfc-86cd-4f8d-9f5f-6b05aa1b2e9e',
            0.10,
            'multiply_base'
        )
    event.create('evocation_affinity')
        .color(0xADD8E6)
        .beneficial()
        .displayName('Evocation Affinity')
        .formattedDisplayName('Evocation Affinity')
        .modifyAttribute(
            'irons_spellbooks:evocation_spell_power',
            '8b666dfc-85bc-4h9e-9f5f-6b05aa1b2e9e',
            0.10,
            'multiply_base'
        )
    event.create('aqua_affinity')
        .color(0xADD8E6)
        .beneficial()
        .displayName('Aqua Affinity')
        .formattedDisplayName('Aqua Affinity')
        .modifyAttribute(
            'traveloptics:aqua_spell_power',
            '8b676dfc-85bc-4f8d-9g6g-6b05aa1b2e9e',
            0.10,
            'multiply_base'
        )
    event.create('geo_affinity')
        .color(0xADD8E6)
        .beneficial()
        .displayName('Geo Affinity')
        .formattedDisplayName('Geo Affinity')
        .modifyAttribute(
            'gtbcs_geomancy_plus:geo_spell_power',
            '8b686dfc-85bc-4f8d-9f5f-7c16aa1b2e9e',
            0.10,
            'multiply_base'
        )



    
    // Allows mobs to cast spells. 
    global.mage_effects.forEach((effect) => {
        let effect_capitalized = effect.charAt(0).toUpperCase() + effect.slice(1)
        event.create(`${effect}_mage`)
        .beneficial()
        .displayName(`${effect_capitalized} Mage`)
        .color(0xADD8E6)

        event.create(`superior_${effect}_mage`)
        .beneficial()
        .displayName(`Superior ${effect_capitalized} Mage`)
        .color(0xADD8E6)

        event.create(`exalted_${effect}_mage`)
        .beneficial()
        .displayName(`Exalted ${effect_capitalized} Mage`)
        .color(0xADD8E6)
    })
})


