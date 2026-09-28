global.skillData = {
    abilities: {
    'blood_pact': 5,
    'blood_fever': 5,
    'sacrifice': 5, // 5 levels. ICONS DONE
    // If you need to be revived, a random pet will be killed to revive you

    // Bloodripper 35 total levels, 8 abilities
    'ripping_flesh': 5,
    'spray_of_blood': 5,
    'rip_and_tear': 5, // 5 levels. ICONS: DONE
    /**
 * Rip and Tear: Right clicking on an enemy will Blood Harvest them under certain conditions
 * - Each level increases the max health of mobs that can be Blood Harvested. At §aLevel 4+ each level increases the range of the Blood Harvest chain
 *  1: Right click enemies with LESS than 50% health and LESS than 50 MAX HEALTH to Blood Harvest them
 *  2: Increases the max health of enemies that can be Blood Harvested
 *  3: Blood Harvest can chain to other enemies
 *  4: Increases the range of the Blood Harvest and max number of enemies that can be Blood Harvested
 *  5: Increases the range of the Blood Harvest and max number of enemies that can be Blood Harvested
 * 
 */


    'blood_harvest': 3, // 5 levels. ICONS DONE

    'blood_siphon': 3, // 5 levels. ICONS DONE

    'symbiotic_ripper': 5, // 5 levels
    /**
 * Symbiotic Ripper:
 *  - §aLevel 1: Summons a crow that follows the player around. Applies speed to the crow
 *  - §aLevel 2: Crow gets a Diversion  effect. Diversion gives the crow a chance to dodge attacks
 *  - §aLevel 3: Crow can mark enemies for death. Gives the crow a strength effect
 *  - §aLevel 4: Crow gets berserk effect. This increases the crows attack damage the lower its health is
 *  - §aLevel 5: Your Bloodripper Crow spawns with a permanent Regeneration effect
 */
    'marked_for_death': 5, // 5 levels. ICONS DONE
    /**
     *  *  2.) Marked for Death: Enemies hit by the crow are marked for death. 5 Levels:
 *  -> 1: Marked for death for 2 seconds
 *  -> 2: Marked for death for 3 seconds
 *  -> 3: Marked for death for 4 seconds
 *  -> 4: Marked for death for 5 seconds
 *  -> 5: Marked for death permanently
     * 
     */
    'bloodslash': 5, // 5 levels. ICONS DONE
    /**
 * §4Blood Slash§7: When the player hurts an enemy there is a chance for your crow to cast §4Blood Slash§7
 * - §aLevel 1: 1 §4Blood Slash§7. 5% chance
 * - §aLevel 2: 2 §4Blood Slashes§7. 10% chance
 * - §aLevel 3: 3 §4Blood Slashes§7. 15% chance
 * - §aLevel 4: 4 §4Blood Slashes§7. 20% chance
 * - §aLevel 5: 5 §4Blood Slashes§7. 25% chance
 * 
 *  */ 
    'bloodneedles': 5, // 5 levels. ICONS DONE
    /**
 * §4Blood Needles§7: When the player is hurt there is a chance for your crow to cast §4Blood Needles§7
 *  - §aLevel 1: 1 §4Blood Needle§7. 5% chance to cast
 * - §aLevel 2: 2 §4Blood Needles§7. 10% chance to cast
 * - §aLevel 3: 3 §4Blood Needles§7. 15% chance to cast
 * - §aLevel 4: 4 §4Blood Needles§7. 20% chance to cast
 * - §aLevel 5: 5 §4Blood Needles§7. 25% chance to cast
 * 
 * 
 */
    'cripple': 5, // 5 levels. ICONS DONE
    /**
 * Cripple Ability
 * - Slows the enemy when hit by the crow
 * - Leveling it up increases the amplifier and duration of the slow
 *  */ 
    'rage': 5, // 5 levels. ICONS DONE
    /**
     *  * 5.) Rage: Activate to enter an insane rage state. 5 Levels: 
 *  -> Each level:
 *  -> Increases the duration of the rage state
 *  -> Increases the amplifier of the speed and haste potion effects
 *  -> Increases range of the Blood Harvest. 
 *  -> Decreases the cooldown of the rage state by 30 seconds. This number was picked so that at §aLevel 5 the cooldown is 3 minutes.
 * 
 * */

    // Plague Doctor: 27 total levels, 6 abilities
    'symbiotic_rot': 5, // 5 levels. ICONS DONE
/**
 * Symbiotic Rot: 5 Levels
 *   If you have an active Plague Charge, Rats that you summon will have special items. 
 *   -> Consumes 1 Plague Charge per summon event, NOT per that is summoned.
 *   -> 4% chance per level to not consume a Plague Charge
 * 
 */


  'necrotic_bloom': 5, // 5 levels. ICONS DONE
  /**
   * Necrotic Bloom: 5 Levels
   * When a player melee kills a, they have a 10% chance to gain a Plague Charge.
 *  - Right Clicking an enemy will consume a Plague Charge and give enemies within a 3 block radius a 5 second Plague effect
 *  Level 1: 10% chance to gain a Plague Charge, 4 block radius, 5 second duration
 *  Level 2: 20% chance to gain a Plague Charge, 5.5 block radius, 8.75 second duration
 *  Level 3: 30% chance to gain a Plague Charge, 7 block radius, 12.5 second duration
 *  Level 4: 40% chance to gain a Plague Charge, 8.5 block radius, 16.25 second duration
 *  Level 5: 50% chance to gain a Plague Charge, 10 block radius, 20 second duration
   */


 'contagion': 5, // 5 levels. ICONS DONE
 /**
  * Contagion: 5 levels
 * If your rat kills an enemy with a Nature spell, you regain 10 mana. Mana regain is doubled if the enemy has a plague effect
 *  - Level 1: 10 mana regenerated
 *  - Level 2: 15 mana regenerated
 *  - Level 3: 20 mana regenerated
 *  - Level 4: 25 mana regenerated
 *  - Level 5: 30 mana regenerated
 */

 'corrupted_savior': 6, // 6 levels. ICONS DONE
/**
 * Corrupted Savior: 6 Levels
 *   Buffs and heals all friendly creatures when a player with an active plague effect kills a monster.
 *  - §aLevel 1: 
 *   -> 5 block radius, 3 second duration, amplification 1
 *   -> Heals tamed creatures for 5% of their max health
 *   -> Effects: Retaliation
 * 
 * - §aLevel 2:
 *  -> 10 block radius, 6 second duration, amplification 2
 *  -> Heals tamed creatures for 7% of their max health
 *  - Effects: Retaliation
 * 
 * - §aLevel 3:
 * -> 15 block radius, 9 second duration, amplification 3
 * -> Heals tamed creatures for 9% of their max health
 * * -> Effects: Retaliation, Lesser Strength
 * 
 * - §aLevel 4:
 * -> 20 block radius, 12 second duration, amplification 4
 * -> Heals tamed creatures for 11% of their max health
 * * -> Effects: Retaliation, Lesser Strength
 * 
 * - §aLevel 5:
 * -> 25 block radius, 15 second duration, amplification 5
 * -> Heals tamed creatures for 13% of their max health
 * * -> Effects: Retaliation, Lesser Strength, Diversion
 * 
 *  §aLevel 6:
 * -> 25 block radius, 15 second duration, amplification 5
 * -> Heals tamed creatures for 13% of their max health
 * * -> Effects: Retaliation, Lesser Strength, Diversion
 *   -> Has a small chance to turn nearby allies into Nature Mages. Chance is 5% and is rolled per ally
 */


    'pestilence': 6, // 5 levels. ICONS DONE
/**
 * pestilence: 6 Levels
 *  -> Activate to kill all non-boss monsters that have the Plague effect and summon a rat in their place. 20 mana cost per enemy 
 *  - Level 1: 5 block radius, 20 mana cost per enemy, 30 second cooldown
 *  - Level 2: 10 block radius, 17 mana cost per enemy, 27 second cooldown
 *  - Level 3: 15 block radius, 14 mana cost per enemy, 24 second cooldown
 *  - Level 4: 20 block radius, 11 mana cost per enemy, 21 second cooldown
 *  - Level 5: 25 block radius, 8 mana cost per enemy, 18 second cooldown
 *  - §aLevel 6: 30 block radius, 5 mana cost per enemy, 15 second cooldown
 */

    'plaguebearer': 5, // 5 levels. ICONS DONE
/**
 * Plaguebearer:  5 Levels
 *  - Level 1: Rats Spawn as Nature Mages
 *  - Level 2: Enemies hit with Nature Spells from a Rat have a chance to gain the Plague effect
 *  - Level 3: Rats Spawn as Superior Nature Mages
 *  - Level 4: Better abilities.
 *  - Level 5: Rats Spawn as Exalted Nature Mages
 */
    'steel_antidote': 6, // 6 levels. ICONS DONE
/**
 * Antidote: Buffs and heals tamed creatures when a player kills a mob. 
 *  - §aLevel 1: 
 *   -> 5 block radius, 3 second duration, amplification 1
 *   -> Heals tamed creatures for 5% of their max health
 * 
 * - §aLevel 2:
 *  -> 10 block radius, 6 second duration, amplification 2
 *  -> Heals tamed creatures for 7% of their max health
 * 
 * - §aLevel 3:
 * -> 15 block radius, 9 second duration, amplification 3
 * -> Heals tamed creatures for 9% of their max health
 * 
 * - §aLevel 4:
 * -> 20 block radius, 12 second duration, amplification 4
 * -> Heals tamed creatures for 11% of their max health
 * 
 * - §aLevel 5:
 * -> 25 block radius, 15 second duration, amplification 5
 * -> Heals tamed creatures for 13% of their max health
 * 
 * - §aLevel 6:
 * -> 30 block radius, 18 second duration, amplification 6
 * -> Heals tamed creatures for 15% of their max health
 */ 

    'miasma': 5, // 5 levels. ICONS DONE
    /**
/**
 * Miasma: Rats spawn with permanent effects. The effect is based on the player's Miasma level
 * §aLevel 1: Lesser Strength
 * §aLevel 2: Steel Feet
 * §aLevel 3: Haste
 * §aLevel 4: Burning Thorns
 * §aLevel 5: Absorption
 */

    'black_death': 5, // 5 levels. ICONS DONE
/**
 *  - §aLevel 1: 2 block radius, 5 second duration
 *  - §aLevel 2: 4 block radius, 6.25 second duration
 *  - §aLevel 3: 6 block radius, 7.5 second duration
 *  - §aLevel 4: 8 block radius, 8.75 second duration
 *  - §aLevel 5: 10 block radius, 10 second duration
 */
    'verminlord': 6, // 6 levels. ICONS DONE
/**
 * verminlord: Rats spawn with a random upgrade. The upgrade is based on the player's verminlord level
 *  -> Also has a chance to summon extra rats. 1 at level 1, 2 at level 3, and 3 at level 6
 * *  - Level 1:  Rat point value: 1  Points needed to gain effects: 15  §e[Effects]§7   • Knockback Resistance   Summoning Rats has a 5% chance to summon another Rat
 * *  - Level 2: Rat point value: 1  Points needed to gain effects: 14  §e[Effects]§7   • Knockback Resistance   §4[Summoned Rats]§7   • Additional Rats: 1  • Chance to trigger: 10%
 *    - Level 3: Rat point value: 2  Points needed to gain effects: 13  §e[Effects]§7   • Knockback Resistance, Oakskin   §4[Summoned Rats]§7   • Additional Rats: 1  • Chance to trigger: 15%
      - Level 4: Rat point value: 2  Points needed to gain effects: 12  §e[Effects]§7   • Knockback Resistance, Oakskin  §4[Summoned Rats]§7   • Additional Rats: 2  • Chance to trigger: 20%
      - Level 5: Rat point value: 2  Points needed to gain effects: 11  §e[Effects]§7   • Knockback Resistance, Oakskin,  §4[Summoned Rats]§7   • Additional Rats: 2  • Chance to trigger: 25%
 *    - Level 6: Rat point value: 3  Points needed to gain effects: 10  §e[Effects]§7   • Knockback Resistance, Oakskin, Soul Steal   §4[Summoned Rats]§7   • Additional Rats: 3  • Chance to trigger: 30%
 
 *  */ 

    'epidemic': 5, // 5 levels. ICONS DONE
/**
 * 
 */





    // Conjurer: 25 total levels, 5 abilities
    'soul_siphon': 5, // 5 levels. ICONS DONE
    /// Soul Siphon: give the player 5 mana when a Specter kills an enemy. 5 levels, 5 mana per level
// §aLevel 1: 5 mana
// §aLevel 2: 10 mana
// §aLevel 3: 15 mana
// §aLevel 4: 20 mana
// §aLevel 5: 25 mana
    'soul_steal': 5, // 5 levels. ICONS DONE
    /**
 * Soul Steal: Conjurer pets gain a level of soul steal when spawned. 5 levels, 1 level per level
 * §aLevel 1: 1 level of soul steal
 * §aLevel 2: 2 levels of soul steal
 * §aLevel 3: 3 levels of soul steal
 * §aLevel 4: 4 levels of soul steal
 * §aLevel 5: 5 levels of soul steal
 */
    'ravenous_undead': 5, // 5 levels. ICONS DONE
    // Ravenous Undead: When a summon kills an enemy, nearby allies are given Rampage. Scales with level
// §aLevel 1: 5 block radius, 1 level of speed, 3 Seconds
// §aLevel 2: 10 block radius, 2 levels of strength, 6 Seconds
// §aLevel 3: 15 block radius, 3 levels of strength, 9 Seconds
// §aLevel 4: 20 block radius, 4 levels of strength, 12 Seconds
// §aLevel 5: 25 block radius, 5 levels of strength, 15 Seconds
    'revenants_gift': 5, // 5 levels. ICONS DONE
    // Revenants Gift: When a summon kills an enemy, nearby allies are given a strength buff. Scales with level
// §aLevel 1: 5 block radius, 1 level of strength, 60 ticks
// §aLevel 2: 10 block radius, 2 levels of strength, 120 ticks
// §aLevel 3: 15 block radius, 3 levels of strength, 180 ticks
// §aLevel 4: 20 block radius, 4 levels of strength, 240 ticks
// §aLevel 5: 25 block radius, 5 levels of strength, 300 ticks
    'necromancer': 5, // 5 levels. ICONS DONE
    // Necromancer: 5 levels: 3% chance to cast raise dead for free upon killing an enemy. Chance and spell level scale with level
// §aLevel 1: 3% chance, §aLevel 1
// §aLevel 2: 6% chance, §aLevel 2
// §aLevel 3: 9% chance, §aLevel 3
// §aLevel 4: 12% chance, §aLevel 4
// §aLevel 5: 15% chance, §aLevel 5
    'scent_of_blood': 5, // 5 levels. ICONS DONE

    // Battlemage: 25 total levels, 5 abilities
    'war_path': 5, // 5 levels. ICONS DONE
    // Warpath: 4% chance to cast a spell for free. Scales up with each level
    // §aLevel 1: 4% chance
    // §aLevel 2: 8% chance
    // §aLevel 3: 12% chance
    // §aLevel 4: 16% chance
    // §aLevel 5: 20% chance
    'battle_fever': 5, // 5 levels. ICONS DONE
    // Battle Fever: Killing an enemy with a spell has a 10% chance per level to give you a stacking 3s Hastened effect.
    // §aLevel 1: 10% chance, 3s Hastened 1, 3s max duration
    // §aLevel 2: 20% chance, 3s Hastened 2, 6s max duration
    // §aLevel 3: 30% chance, 3s Hastened 3, 9s max duration
    // §aLevel 4: 40% chance, 3s Hastened 4, 12s max duration
    // §aLevel 5: 50% chance, 3s Hastened 5, 15s max duration
    'carnage': 5, // 5 levels. ICONS DONE
    // Carnage: Killing an enemy with a spell has a 10% chance per level to give you a stacking 3s Charged effect.
    // §aLevel 1: 10% chance, 3s Charged 1, 3s max duration
    // §aLevel 2: 20% chance, 3s Charged 2, 6s max duration
    // §aLevel 3: 30% chance, 3s Charged 3, 9s max duration
    // §aLevel 4: 40% chance, 3s Charged 4, 12s max duration
    // §aLevel 5: 50% chance, 3s Charged 5, 15s max duration
    'jupiters_gift': 5, // 5 levels. ICONS DONE
    /**
 * jupiters gift: 
 *  When you are below 25% health: 
 *  1.) gain a resistance effect for 10 seconds*level. When you are hit, add to a counter equal to the level. 
 *  2.) After the resistance effect ends, give thunderstorm effect for 1 seconds times the counter. Scales with level
 *  3. 3 minute cooldown. Each level reduces the cooldown by 12 seconds
 *  
 *  - §aLevel 1: 1 second of thunderstorm per hit, 3 minute cooldown
 *  - §aLevel 2: 2 seconds of thunderstorm per hit, 2 minute 48 second cooldown
 *  - §aLevel 3: 3 seconds of thunderstorm per hit, 2 minute 36 second cooldown
 *  - §aLevel 4: 4 seconds of thunderstorm per hit, 2 minute 24 second cooldown
 *  - §aLevel 5: 5 seconds of thunderstorm per hit, 2 minute 12 second cooldown
 * */ 
    'battle_echoes': 5, // 5 levels. ICONS DONE
// Battle Echoes: killing an enemy with a spell has a 5% chance per level to make your next spell projectile fire copies at nearby enemies.
// §aLevel 1: 5% chance
// §aLevel 2: 10% chance
// §aLevel 3: 15% chance
// §aLevel 4: 20% chance
// §aLevel 5: 25% chance

    'arcane_synergy': 5, // 5 levels. ICONS DONE
/**
 * Arcane Synergy: If both Battle Fever and Carnage are active, gain a 5% chance per level that spell projectiles fire extra projectiles.
 * - Level 1: 5% chance. +1 extra projectile
 * - Level 2: 10% chance. +1 extra projectile
 * - Level 3: 15% chance. +2 extra projectiles
 * - Level 4: 20% chance. +2 extra projectiles
 * - Level 5: 25% chance. +3 extra projectiles
 */


  'covenant_of_power': 5, // 5 levels. ICONS DONE
  // Covenant of Power: Persistent aura that boosts your and nearby allies’ spell power based on the school of the last spell you used to damage an enemy.


    // Kensei: 25 total levels, 5 abilities
    'viper': 5, // 5 levels. ICONS DONE
    // Viper: give enemies venom if you hit them while in the air. You must be 2 blocks above the enemy to activate this effect. 5 levels, 2 seconds of venom per level
// §aLevel 1: 2 seconds of venom
// §aLevel 2: 4 seconds of venom
// §aLevel 3: 6 seconds of venom
// §aLevel 4: 8 seconds of venom
// §aLevel 5: 10 seconds of venom
    'python': 5, // 5 levels. ICONS DONE
    // Python: Gain a strength effect after killing an enemy with an arrow. 5 levels, 1 level of strength per level, 2 seconds of strength per level
// §aLevel 1: 1 level of strength for 2 seconds
// §aLevel 2: 2 levels of strength for 4 seconds
// §aLevel 3: 3 levels of strength for 6 seconds
// §aLevel 4: 4 levels of strength for 8 seconds
// §aLevel 5: 5 levels of strength for 10 seconds
    'cobra': 5, // 5 levels. ICONS DONE
    // Cobra: Gain a haste effect after killing an enemy with a melee attack. 5 levels, 1 level of haste per level, 2 seconds of haste per level
// §aLevel 1: 1 level of haste for 2 seconds
// §aLevel 2: 2 levels of haste for 4 seconds
// §aLevel 3: 3 levels of haste for 6 seconds
// §aLevel 4: 4 levels of haste for 8 seconds
// §aLevel 5: 5 levels of haste for 10 seconds
    'mamba': 5, // 5 levels. ICONS DONE
    // Mamba: Killing an enemy with venom has a 5% chance to cause enemies within 10 blocks to get venom. 5 levels, 5% per level, increases the range by 1 block per level
// §aLevel 1: 5% chance to cause enemies within 10 blocks to get §aLevel 1 venom for 2 seconds
// §aLevel 2: 10% chance to cause enemies within 11 blocks to get §aLevel 2 venom for 4 seconds
// §aLevel 3: 15% chance to cause enemies within 12 blocks to get §aLevel 3 venom for 6 seconds
// §aLevel 4: 20% chance to cause enemies within 13 blocks to get §aLevel 4 venom for 8 seconds
// §aLevel 5: 25% chance to cause enemies within 14 blocks to get §aLevel 5 venom for 10 seconds
    'anaconda': 5, // 5 levels. ICONS DONE
    // Anaconda: Deal more damage to enemies that have the venom effect. 5 levels, 5% more damage per level
// §aLevel 1: 5% more damage
// §aLevel 2: 10% more damage
// §aLevel 3: 15% more damage
// §aLevel 4: 20% more damage
// §aLevel 5: 25% more damage


    'boa': 5, // 5 levels. ICONS DONE
    // Boa: Killing an enemy with Venom has a 5% chance to cause enemies within 10 blocks to get slowness. 5 levels, 5% chance per level. The effect can stack
// §aLevel 1: 5% chance to cause enemies within 10 blocks to get slowness for 2 seconds
// §aLevel 2: 10% chance to cause enemies within 15 blocks to get slowness for 4 seconds
// §aLevel 3: 15% chance to cause enemies within 20 blocks to get slowness for 6 seconds
// §aLevel 4: 20% chance to cause enemies within 25 blocks to get slowness for 8 seconds
// §aLevel 5: 25% chance to cause enemies within 30 blocks to get slowness for 10 seconds

    
    'hydra': 5, // 5 levels. ICONS DONE
// Hydra: Instantly cast fang ward after blocking an attack. Each enemy hit with fang ward will slow them and give you a venom charge. Cooldown is 30 seconds
// §aLevel 1: Venom Charge Duration: 2 seconds, Cooldown = 30 seconds. Slowness on enemy: 2 seconds
// §aLevel 2: Venom Charge Duration: 4 seconds, Cooldown = 25 seconds. Slowness on enemy: 4 seconds
// §aLevel 3: Venom Charge Duration: 6 seconds, Cooldown = 20 seconds. Slowness on enemy: 6 seconds
// §aLevel 4: Venom Charge Duration: 8 seconds, Cooldown = 15 seconds. Slowness on enemy: 8 seconds
// §aLevel 5: Venom Charge Duration: 10 seconds, Cooldown = 10 seconds. Slowness on enemy: 10 seconds


    'ouroboros': 3, // 3 levels. ICONS DONE
    //Upon killing a mob with Venom, 3% chance per level to apply 10s of Venom to a nearby enemy, gain +1 Venom Charge, and gain +5s of Haste. If you already have a Ven If no enemies are nearby, consume all active Venom Charges to gain 1s of Speed and 1% health per stack. Venom Charges last for 10 seconds and refresh on killing an enemy with Venom


    'basilisk': 3, // 3 levels. ICONS DONE
    // Basilisk: Enemies hit by your Combat Roll will be poisoned for 2 seconds. 5 levels, 2 seconds of venom per level. The duration is doubled if the enemy is slowed
    






    // Guardian: 46 total levels, 10 abilities
    'sacred_pool': 5, // 5 levels
    'sanctified': 5, // 5 levels
    // Sanctified: Heal self and allies for 3% of max health when killing an enemy with a spell within 15 blocks. Scales with level
// §aLevel 1: 3% of max health, 15 block radius
// §aLevel 2: 6% of max health, 14 block radius
// §aLevel 3: 9% of max health, 13 block radius
// §aLevel 4: 12% of max health, 12 block radius
// §aLevel 5: 15% of max health, 11 block radius
    'consecration': 5, // 5 levels
    /// Consecration: Give nearby allies +10 mana when you kill an enemy. Mana and range scale with level
// §aLevel 1: 10 mana, 15 block radius
// §aLevel 2: 20 mana, 20 block radius
// §aLevel 3: 30 mana, 25 block radius
// §aLevel 4: 40 mana, 30 block radius
// §aLevel 5: 50 mana, 35 block radius
    'inspire': 5, // 5 levels
    // Inspire: choose which ability you want to use. 5 levels, 1 level per ability
// §aLevel 1: Luck
// §aLevel 2: Water Walking
// §aLevel 3: Steel Feet
// §aLevel 4: Spelunker
// §aLevel 5: Lava Walking, Fire Resistance
    'kinetic_rebuke': 5, // 5 levels
// Kinetic Rebuke: Throwing an item at an enemy causes them to be blasted back. Scales with level. At §aLevel 5, levitate the enemy for 2 ticks
    'final_judgement': 5, // 5 levels
// Final Judgement: Throwing a Trident at an enemy causes them to be marked. This gives them the rend and glowing effect for 3 seconds. Stacks. Scales with level
    'recursive_light': 5, // 5 levels
    /**
 * Recursive Light: Thrown items have a 5% chance to spawn a §3Magic Arrow§7 that riccochets between enemies.
 *  - Each level increases:
 *   -> Chance by 5%
 *   -> Damage by 3
 *   -> Max ricochets by 3
 *   -> Range by 5
 *  */ 

    'burden_of_oaths': 3, // 3 levels

    'last_light': 3, // 3 levels

    'brotherhood': 5, // 5 levels


    // Disciple: 25 total levels, 5 abilities
    'scorch': 5, // 5 levels
    // Scorch: If you hold §cSHIFT§7 while in the air, you cast Burning Dash. The amount of times you can use dash is 2 per level.

    'rite_of_cinders': 5, // 5 levels
    // Rite of Cinders: drops a Fire Bomb on each enemy around you. 5 levels, 2 damage per level. Gives you the rite_of_cinders potion effect for 5 seconds per level

    'unholy_oath': 5, // 5 levels
    //Unholy Oath: 1.25x damage to enemies on fire. 5 levels, +0.25 per level

    'hellfire': 5, // 5 levels
    // // Hellfire: Killing an enemy with a fire spell has a chance to burn all enemies within 10 blocks for 3 seconds per level


/**
 * Flaming Shadows: Killing an enemy while they are on fire has a chance to:
 * - Level 1: Killing an enemy has a 5% chance to give you 3 seconds of invisibility, speed 1, and trail blazing
 * - Level 2: Chance to activate: +5%, Effects: +3 seconds
 * - Level 3: Flaming Shadows now blinds enemies within 10 blocks for 3 seconds. +5% chance to activate, +3 seconds of effects
 * - Level 4: +5% chance to activate, +3 seconds of effects, Blinding range is increased to 15 blocks
 * - Level 5: Enemies that are blinded now burn. +5% chance to activate, +3 seconds of effects
 */
    'flaming_shadows': 5, // 5 levels


/**
 * Legion of the Damned: Gain a damage bonus for each Undead Ally within 5 blocks. 5 levels, +1 damage per level.
 * 
 */
    'legion_of_the_damned': 6, // 6 levels


    /**
 * Dark Servant - Killing an enemy that has the Mark of the Beast effect has a 10% chance per level to summon a Dark Servant
 */
    'dark_servant': 5, // 5 levels

    /**
 * Unforgiven Sins: 
 * - Enemies hurt by Dark Servants have a 15% chance per level to get Mark of the Beast
 */

    'unyielding_sin': 3, // 5 levels

    /**
 * ___________________________________________________________________________________
    * Mark of the Beast
    * - Killing an enemy has a chance to give a nearby enemy the Mark of the Beast effect
    * -> Hitting an enemy that has the Mark of the Beast will burn all other nearby enemies with Mark of the Beast and reset the duration to 10 seconds
*/
    'mark_of_the_beast': 5, // 5 levels


    /**
     * Unwilling Host: - When an Dark Servant dies, it has a 20% chance per level to give Mark of the Beast to its killer
     */
    'unwilling_host': 3, // 5 levels

    // Frostpiercer: 25 total levels, 5 abilities

    
    'avalanche': 5, // 5 levels
    // avalanche: Pressing a key will spawn ice blocks above enemies around you. 

    'subzero': 5, // 5 levels
    // Subzero: Pressing a key will freeze enemies around you. 5 levels, 10 block radius per level

    'permafrost': 5, // 5 levels
    // Permafrost: Charging a bow while crouching will give you a permafrost charge. Shooting an arrow whiile you have a permafrost charge will cause the arrow to freeze an enemy

    'frostbite': 5, // 5 levels
    // Frostbite: Deal more damage to enemies that have the frozen effect. 5 levels, 5% more damage per level
// §aLevel 1: 5% more damage
// §aLevel 2: 10% more damage
// §aLevel 3: 15% more damage
// §aLevel 4: 20% more damage
// §aLevel 5: 25% more damage
    'hypothermia': 5, // 5 levels
    // Hypothermia: Killing a frozen enemy has a chance to cause enemies within 7 blocks to cast Ice Breath at another nearby monster at the nearest enemy
// §aLevel 1: 3% chance to cast Ice Breath at another nearby monster. 1.5 seconds cast time, 4 enemies max, 7 block search radius
// §aLevel 2: 6% chance to cast Ice Breath at another nearby monster. 3 seconds cast time, 8 enemies max, 9 block search radius
// §aLevel 3: 9% chance to cast Ice Breath at another nearby monster. 4.5 seconds cast time, 12 enemies max, 11 block search radius
// §aLevel 4: 12% chance to cast Ice Breath at another nearby monster. 6 seconds cast time, 16 enemies max, 13 block search radius
// §aLevel 5: 15% chance to cast Ice Breath at another nearby monster. 7.5 seconds cast time, 20 enemies max, 15 block search radius

    'frozen_shackles': 5, // 5 levels
    // Frozen Shackles: 5 levels. Freeze enemies if shooting them while airborne. 1.5 seconds of frozen per level
// §aLevel 1: 1.5 seconds of frozen
// §aLevel 2: 3 seconds of frozen
// §aLevel 3: 4.5 seconds of frozen
// §aLevel 4: 6 seconds of frozen
// §aLevel 5: 7.5 seconds of frozen
    'cryomancer': 5, // 5 levels
    // Cryomancy: Gain 20 mana * level if you kill a frozen enemy
// §aLevel 1: 20 mana
// §aLevel 2: 40 mana
// §aLevel 3: 60 mana
// §aLevel 4: 80 mana
// §aLevel 5: 100 mana
    'glacial_winds': 5, // 5 levels
    // Glacial Wind: When you hit an enemy with an arrow, its possible that it will ricochet icicles to nearby enemies. Icicles freeze enemies
// 3% chance per level
// §aLevel 1: 3% chance to activate. Icicles deal 1 damage. 7 block radius. Freezes for 1.5 seconds. 4 enemies max
// §aLevel 2: 6% chance. Icicles deal 2 damage. 9 block radius. Freezes for 3 seconds. 8 enemies max
// §aLevel 3: 9% chance. Icicles deal 3 damage. 11 block radius. Freezes for 4.5 seconds. 12 enemies max
// §aLevel 4: 12% chance Icicles deal 4 damage. 13 block radius. Freezes for 6 seconds. 16 enemies max
// §aLevel 5: 15% chance Icicles deal 5 damage. 15 block radius. Freezes for 7.5 seconds. 20 enemies max


    // Mercenary: 47 total levels, 9 abilities
    /**
 * Contagious Lobotomy: Killing a stunned enemy has a chance to apply stunned to nearby enemies
 * - §aLevel 1: 15% chance to apply stunned to nearest enemy for 2 seconds
 * - §aLevel 2: 20% chance to apply stunned to 2 nearby enemies for 4 seconds 
 * - §aLevel 3: 25% chance to apply stunned to 3 nearby enemies for 6 seconds
 * - §aLevel 4: 25% chance to apply stunned to 4 nearby enemies for 8 seconds
 * - §aLevel 5: 25% chance to apply stunned to 5 nearby enemies for 10 seconds
 *  */ 
    'contagious_lobotomy': 5, // 5 levels

    /**
 * Fasthands: 
 * - §aLevel 1: Level 1: 15% chance to remove the cooldown from your Repeater Crossbow upon shooting an enemy with an Arrow
 * - §aLevel 2: Level 2: 30% chance
 * - §aLevel 3: Level 3: 45% chance
 * - §aLevel 4: Level 4: 60% chance
 * - §aLevel 5: Level 5: 75% chance. Now works with any projectile shot from a crossbow
 * -  
 *  */ 
    'fasthands': 5, // 5 levels
    /**
     * Hitting an enemy with a projectile while you are crouching will teleport you to them and reduce their armor for 5% per level for 2 seconds per level
     * - §aLevel 1: 5% armor reduction for 2 seconds
     * - §aLevel 2: 10% armor reduction for 4 seconds
     * - §aLevel 3: 15% armor reduction for 6 seconds
     * - §aLevel 4: 20% armor reduction for 8 seconds
     * - §aLevel 5: 25% armor reduction for 10 seconds. Flickering Blade will now trigger Elemental Bolt
     */
    'flickering_blade': 5, // 5 levels

    /**
     * Elemental Seekers: Upon hitting an enemy with a projectile there is a 2.5% chance per level to summon a barrage of elemental projectiles that seek out the targeted enemy. Enemies affected by Elemental Bolt have a 2x chance to trigger Elemental Seekers
     * - §aLevel 1: 2.5% chance
     * - §aLevel 2: 5% chance
     * - §aLevel 3: 7.5% chance
     * - §aLevel 4: 10% chance
     * - §aLevel 5: 12.5% chance
     */
    'elemental_seekers': 5, // 5 levels


    /**
     * Claustrophobic: Punching an enemy with a crossbow in your hand will stun them for 1 second per level
     * - §aLevel 1: 1 second stun
     * - §aLevel 2: 2 second stun, 2 second slow effect
     * - §aLevel 3: 3 second stun, 3 second slow effect. Claustrophobic will now trigger Elemental Bolt
     */
    'claustrophobic': 3, // 3 levels


    /**
 * Elemental Bolt:
 * - §aLevel 1: Enemies hit with projectiles have a chance to gain an elemental effect.
 * - §aLevel 2: Elemental Bolt chance +5%. Elemental Bolt power increased.
 * - §aLevel 3: Elemental Bolt chance +5%. Elements: Fire, Poison
 * - §aLevel 4: Elemental Bolt chance +5%. Elemental Bolt power increased.
 * - §aLevel 5: Elemental Bolt chance +5%. Elements: Fire, Poison, Frost
 */
    'elemental_bolt': 5, // 5 levels

    /**
 * Elemental Blight: Killing an enemy with an elemental effect will apply the effect to nearby enemies. Enemies hit with an Element from Elemental Blight are NOT able to spread it further
 * - §aLevel 1: 5% chance to apply the effect to all enemies within 5 blocks. 
 * - §aLevel 2: 10% chance to apply the effect to all enemies within 10 blocks. 
 * - §aLevel 3: 15% chance to apply the effect to all enemies within 15 blocks. 
 * - §aLevel 4: 20% chance to apply the effect to all enemies within 20 blocks. 
 * - §aLevel 5: 25% chance to apply the effect to all enemies within 25 blocks. 
 * - §aLevel 6: Killing enemies affected with Elemental Blight have a chance to spread it to others. 
 */
    'elemental_blight': 6, // 6 levels

    // Sentinel: Strenth increases with level, cooldown decreases by half a second. 10 levels 
    'sentinel': 10, // 10 levels

    /**
 * Shattering Blow:
 * §aLevel 1: Hitting the enemy with the shield (no throw) will stun them for 0.5 seconds and knock them back
 * §aLevel 2: Increases Stun time by 0.5 seconds
 * §aLevel 3: Increases Stun time by 0.5 seconds
 * §aLevel 4: Increases Stun time by 0.5 seconds
 * §aLevel 5: Thrown shields also stun enemies. Increases Stun time by 0.5 seconds
 * 
 * 
 */
    'shattering_blow': 5, // 5 levels


    'spellbinder_siphon': 5, // 5 levels

    /**
 * Arrow Storm: 5 Levels
 *  - §aLevel 1: Shooting an enemy with an arrow will give you a levitation and slow falling effect.
 *  - §aLevel 2: 25% chance to reload your crossbow after shooting an enemy in the air
 *  - §aLevel 3: Stunning an enemy will Auto Reload your crossbow. Increases Stun time by 0.5 seconds
 *  - §aLevel 4: 75% chance to reload your crossbow after shooting an enemy in the air
 *  - §aLevel 5: 100% chance to reload your crossbow after shooting an enemy in the air
 */
    'arrow_storm': 5, // 5 levels

    /**
 * Seraphim: 5 Levels
 * - §aLevel 1: KILLING an enemy while airborne will give you the Angelic Flight buff for 1.5 seconds
 * - §aLevel 2: increases the duration of the Angelic Flight buff by 1.5 seconds
 * - §aLevel 3: Killing an enemy while airborne will give you the impact buff for 2 seconds
 * - §aLevel 4: increases the strength of the impact buff
 * - §aLevel 5: SHOOTING an enemy while airborne will give you the Angelic Flight buff for 10 seconds 
 * 
 */
    'seraphim': 5, // 5 levels

    /**
 * Lethal shadows:
 * - §aLevel 1: Crouching with a loaded crossbow will make you almost completely invisible
 */ 
    'lethal_shadows': 4, // 1 level

    /**
 * Shatterpoint:
 *  Level 1: Thrown daggers at enemies will stun them
 *  Level 2: Increases the stun duration
 *  Level 3: Daggers that are shot from a crossbow will also stun enemies
 */
    'shatterpoint': 3, // 3 levels

    //_______________________________________________________________________________________________________________________
    // Mystic: 25 total levels, 8 abilities
    'cyclone': 3, // 3 level
    /**
 * Cyclone: 3 Levels
 * §aLevel 1: Activate the ability to gain an aerial boost whenever you hit an enemy with a projectile while in the air.
 * §aLevel 2: You gain a stacking hastened effect for 1 second after hitting an enemy with a projectile while in the air. Now works with any non-magical projectile.
 * §aLevel 3: You gain a stacking hastened effect for 2 seconds after hitting an enemy with a projectile while in the air. Now works with any projectile.
 * 
 * Stacking buff duration is doubled if you are insane
 */
    
    'aeromancer': 1, // 1 levels
    // Air Combos

    
    'voidblast': 5, // 5 levels
    /**
     * Void Blast: 5 Levels
     * Killing an enemy with a Projectile while they have the mark of the void will cause you to rapidly teleport to enemies within range and cast shockwave. If you are insane, the shockwave level is doubled
     * 
     * Level 1 - 10 block radius, Teleportation cap: 3, Shockwave level: 1
     * Level 2 - 15 block radius, Teleportation cap: 6, Shockwave level: 2
     * Level 3 - 20 block radius, Teleportation cap: 9, Shockwave level: 3, Can now activate with any non-magical projectile
     * Level 4 - 25 block radius, Teleportation cap: 12, Shockwave level: 4
     * Level 5 - 30 block radius, Teleportation cap: 15, Shockwave level: 5, Can now activate with any projectile
     */
    
    'fiery_flight': 5, //5 levels,ccc
    // Fiery Flight: 5 Levels Killing an enemy with an arrow while you are in the air will give you a Burning Dash charge. Press SHIFT while in the air to use
    
    'esoteric_echoes': 3, // 3 levels
    // esoteric_echoes: Killing an enemy while insane you gain echoing strikes for 5 seconds * level
    // §aLevel 1: 1 level of echoing strikes for 5 seconds
    // §aLevel 2: 2 levels of echoing strikes for 10 seconds
    // §aLevel 3: 3 levels of echoing strikes for 15 seconds
    
    'terror': 5, // 5 levels
    /**
     * Terror: Hurting an enemy with a Throwable Weapon will have a chance to give you abyssal strike. Enemies hurt Abyssal Strike have a chance to gain a Mark of the Void
     * §aLevel 1: 5% chance to gain abyssal strike for 3 seconds. Enemies hurt by Abyssal Strike have a 5% chance to gain a Mark of the Void for 2 seconds
     * §aLevel 2: 10% chance to gain abyssal strike for 6 seconds. Enemies hurt by Abyssal Strike have a 10% chance to gain a Mark of the Void for 4 seconds
     * §aLevel 3: 15% chance to gain abyssal strike for 9 seconds. Enemies hurt by Abyssal Strike have a 15% chance to gain a Mark of the Void for 6 seconds
     * §aLevel 4: 20% chance to gain abyssal strike for 12 seconds. Enemies hurt by Abyssal Strike have a 20% chance to gain a Mark of the Void for 8 seconds
     * §aLevel 5: 25% chance to gain abyssal strike for 15 seconds. Enemies hurt by Abyssal Strike have a 25% chance to gain a Mark of the Void for 10 seconds
     */
    'nightwalker': 4, // 4 levels
    /**
     * Nightwalker: While insane, you gain special effects
     * 4 levels
     * §aLevel 1: Fortify
     * §aLevel 2: Precision
     * §aLevel 3: Diversion
     * §aLevel 4: Planar Sight
     */

    'mindshatter': 3, // 3 levels
    // Go insane. This strengthens all current abilities but you are hunted by dark specters

    'severed_continuum': 5, // 5 levels
    /**
     * Severed Continuum: 5 Levels - 3 minute cooldown
     * - Activate to slow time for all enemies within a 5 block radius for 5 seconds. If you are insane, the duration is doubled
     * - Killing a Time Slowed enemy will add 1 Temporal Charge. Once Severed Continuum has ended, all Temporal Charges will be consumed and apply an Abyssal Strike effect to you based on how many Temporal Charges were consumed. If you are insane, the duration is doubled
     * - Each level will add +5 to the radius of the ability and reduce the cooldown by 15 seconds
     * 
     * Level 1: 5 block radius, 3 minute cooldown
     * Level 2: 10 block radius, 2 minute 45 second cooldown
     * Level 3: 15 block radius, 2 minute 30 second cooldown
     * Level 4: 20 block radius, 2 minute 15 second cooldown
     * Level 5: 25 block radius, 2 minute cooldown
     */

    'gravity_well': 5, // 5 levels
    /**
 * Gravity Well: 5 Levels
 *  - Killing an enemy with a Projectile has a 0.5% chance to spawn a Black Hole at their location. If you are insane, the chance is doubled
 * Level 1: 0.5% chance to spawn a Black Hole
 * Level 2: 1% chance to spawn a Black Hole
 * Level 3: 1.5% chance to spawn a Black Hole
 * Level 4: 2% chance to spawn a Black Hole
 * Level 5: 2.5% chance to spawn a Black Hole
 */


    'parallax': 5, // 5 levels
    /**
     * Parallax: 5 Levels: 
     * §aLevel 1: Activate the ability to make your next projectile attack mark the enemy. You have 10 seconds to press the ability again to swap places with the enemy.
     * §aLevel 2: You gain speed for 5 seconds after swapping places with the enemy.
     * §aLevel 3: You gain speed for 10 seconds after swapping places with the enemy. Parallax will now work with any non-magical projectile.
     * §aLevel 4: You gain invisibility for 5 seconds after swapping places with the enemy.
     * §aLevel 5: Parallax will now work with any projectile. Enemies within 5 blocks of you after you swap places have a 10% chance to gain a Mark of the Void for 10 seconds. Chance is calculated per enemy and is doubled if you are insane.
     */

    'gravitic_flux': 3, // 3 levels
    /**
     * gravitic_flux: 3 Levels: Invert gravity
     * §aLevel 1: Invert your Gravity, allowing you to walk on the ceiling. Cooldown: 30 seconds
     * §aLevel 2: Cooldown reduced to 20 seconds
     * §aLevel 3: Cooldown reduced to 10 seconds and you gain Invisibility for 5 seconds upon activation
     */


// Nomad: updated kit ---------------------------------------------------------------------------------------------------------------
    'zipline': 5, // 5 levels
    'mining_fever': 5, // 5 levels
    /**
 * Mining Fever: 5 levels
 *  - Mining blocks without stopping gives you effects that let you mine faster. Increasing levels gives you better effects. Effects stack.
 * Level 1: Ancient Debris
 * Level 2: Ancient Debris, Emerald
 * Level 3: Ancient Debris, Emerald, Diamond
 * Level 4: Ancient Debris, Emerald, Diamond, Gold
 * Level 5: Ancient Debris, Emerald, Diamond, Gold, Copper
 * Level 6: Ancient Debris, Emerald, Diamond, Gold, Copper, Iron
 * Level 7: Ancient Debris, Emerald, Diamond, Gold, Copper, Iron, Lapis
 * Level 8: Ancient Debris, Emerald, Diamond, Gold, Copper, Iron, Lapis, Redstone
 * Level 9: Ancient Debris, Emerald, Diamond, Gold, Copper, Iron, Lapis, Redstone, Coal
 * Level 10: Ancient Debris, All Ores
 */
    'avarice': 10, // 5 levels
    /**
 * Avarice: 5 Levels
 *  - Mining ores will give you a very brief x ray effect
 *  - Increasing the level: Procs the ability when mining more common ores, gives higher level of the effect, increases the duration of the effect
 * §aLevel 1: Emerald
 * §aLevel 2: Emerald, Diamond
 * §aLevel 3: Emerald, Diamond, Gold
 * §aLevel 4: Emerald, Diamond, Gold, Copper
 * §aLevel 5: Emerald, Diamond, Gold, Copper, Iron
 * 
 */
    'emberheart': 5, // 5 levels
    /**
 * Emberheart: 5 Levels
 * - campfires give you effects. Regular campfire gives restorative effects, 
 * 1. Regeneration
 * 2. Bug Pheromones
 * 3. Oakskin
 * 4. Saturation
 * 5. Clarity
 */
    'ashenheart': 5, // 5 levels
    /**
 * Ashenheart: 5 levels:
 * - soul campfires give offensive effects
 * 1. Berserk
 * 2. Haste
 * 3. Impact
 * 4. Echoing Strikes
 * 5. Sun's Blessing
 */
    'windborne': 5, // 5 levels
    'beast_whisperer': 5, // 5 levels
    'smoke_signal': 5, // 5 levels
    'traveling_companions': 5, // 5 levels
    // Windborne: 5 Levels
// Gives the player an AOE angel wings effect for a short duration
// Each level increases the range of the effect and the duration of the effect
// §aLevel 1: 3 blocks, 5 seconds
// §aLevel 2: 6 blocks, 10 seconds
// §aLevel 3: 9 blocks, 15 seconds
// §aLevel 4: 12 blocks, 20 seconds
// §aLevel 5: 15 blocks, 25 seconds


    // Berserker: 35 total levels, 10 abilities
    'fimbulwinter': 5, // 5 levels
    /**
 * Fimbulwinter: Hitting an entity with a thrown item has a chance to freeze the enemy for a short duration. Killing a frozen enemy gives the player bonus effects
 *  - Leveling up: increases the chance of freezing the enemy, increases the duration of the freeze, and increases the bonus effects
 * 
 * §aLevel 1: 10% chance, speed boost
 * §aLevel 2: 15% chance, speed boost, jump boost
 * §aLevel 3: 20% chance, speed boost, jump boost, slow falling
 * §aLevel 4: 25% chance, speed boost, jump boost, slow falling, haste
 * §aLevel 5: 30% chance, speed boost, jump boost, slow falling, haste, and a chance to freeze nearby enemies
 * 
 */
    'fenrir': 3, // 3 levels
    /**
     * Fenrir:
     * - Hitting enemies gives you a stacking haste effect. Consecutive hits increase the level of the haste effect. Higher levels increase the maximum level of the haste effect
     * - If you are hit equal times as 1 + your Fenrir level you will lose the Hase effect and stacks
     * 
     * // §aLevel 1: Haste stacks up to 5 times. Lose stacks after being hit 2 times
     * // §aLevel 2: Haste stacks up to 10 times. Lose stacks after being hit 3 times
     * // §aLevel 3: Haste stacks up to 15 times. Lose stacks after being hit 4 times
     */
    'yggdrasil': 3, // 1 level
    // Unlocks the Yggdrasil combo. Step 1: Hitting an enemy twice will "Prime" them.

    'skofnung': 5, // 1 level
    // Step 2, option A: Right click while holding SHIFT to levitate the enemy. Allows you to continue the combo

    'tyrfing': 5, // 3 levels
    // Step 2, option B: Right Click while not holding SHIFT deals 2x damage. Ends the combo
    // §aLevel 1: Deals 100% more damage than a regular hit
    // §aLevel 2: Applies a slow effect
    // §aLevel 3: Stuns the enemy allowing for easier follow up hits

    'mjolnir': 5, // 6 levels
    // Step 3 option A: Throw the axe at the levitated enemy to strike them with Lightning. Higher levels summon more lightning. Ends the combo
    // §aLevel 1: Summons 1 lightning bolt
    // §aLevel 2: Summons 2 lightning bolts
    // §aLevel 3: Summons 3 lightning bolts
    // §aLevel 4: Summons 4 lightning bolts
    // §aLevel 5: Summons 5 lightning bolts
    // §aLevel 6: Summons 6 lightning bolts
    
    'gungnir': 5, // 5 levels
    // Step 3 option B: Hitting the enemy will launch the enemy back. Higher levels apply effects. Lets you continue the combo
    // §aLevel 1: Launches the enemy back
    // §aLevel 2: Gives the enemy a 3 second stun effect
    // §aLevel 3: Decreases the enemy's armor by 5% for 3.5 seconds
    // §aLevel 4: Decreases the enemy's armor by 10% for 3.5 seconds
    // §aLevel 5: Decreases the enemy's armor by 15% for 3.5 seconds

    'gleipnir': 5, // 5 levels
    // Step 4: Throw your axe at the enemy to cast Flaming Strike. Higher levels increase the level of Flaming Strike
    // §aLevel 1: Casts §aLevel 1 Flaming Strike
    // §aLevel 2: Casts §aLevel 2 Flaming Strike
    // §aLevel 3: Casts §aLevel 3 Flaming Strike
    // §aLevel 4: Casts §aLevel 4 Flaming Strike
    // §aLevel 5: Casts §aLevel 5 Flaming Strike

    'nidhogg': 5, // 3 levels
    // Teleports you to the enemy timed with the swing of the flaming strike, guaranteeing a hit.
    // §aLevel 1: Teleports you to the enemy right before the swing
    // §aLevel 2: Gives you a 3 second Strength effect
    // §aLevel 3: Automatically Primes the enemy, allowing you to start an Yggdrasil combo again

    'gjallarhorn': 3, // 3 levels
    /***
     * Gjallarhorn: Gives aoe effects to nearby allies. You can swap them by shift + H
     *  - §aLevel 1: Jump Boost, 5 block radius
     *  - §aLevel 2: Berserk, 10 block radius
     * - §aLevel 3: Adrenaline, 15 block radius
     */



    // Dragonlord: 80 total levels, 13 abilities
    'firebound': 1, // 1 level
    // Unlocks the Fire Dragon
    'icebound': 1, // 1 level
    // Unlocks the Ice Dragon
    'stormbound': 1, // 1 level
    // Unlocks the Storm Dragon
    'hardened_scales': 20, // 20 levels
    /* Hardened Scales: Increases the health of your dragon. 20 levels
    *  §aLevel 1: 15 health. Increases by 10 each level
    */
    'evolution': 20, // 20 levels
    // Increases the size of your dragon when it respawns. 20 levels, 5% size increase per level
    'skyborn_arcane': 5, // 5 levels
    /* Skyborn Arcane: Lets your dragon cast spells depending on its type. 5 levels
    * §aLevel 1: All dragons can cast stomp as a defensive spell
    * §aLevel 2: 
    *  - Ice Dragon: Ray of Frost as an offensive spell
    *  - Fire Dragon: Magma Bomb as an offensive spell
    *  - Lightning Dragon: Ball Lightning as an offensive spell
    * §aLevel 3:
    * - Ice Dragon: Ice Block as an offensive spell 
    * - Fire Dragon: Scorch as an offensive spell
    * - Lightning Dragon: Lightning Lance as an offensive spell
    * §aLevel 4:
    * - Ice Dragon: Frostwave as a defensive spell
    * - Fire Dragon: Heat Surge as a defensive spell
    * - Lightning Dragon: Shockwave as a defensive spell
    * §aLevel 5:
    * - Ice Dragon: Oakskin as a defensive spell
    * - Fire Dragon: Oakskin as a defensive spell
    * - Lightning Dragon: Oakskin as a defensive spell
    */

    'draconic_crown': 4, // 4 levels
    /**
     * - Draconic Crown: Gives your dragon Head armor. 4 levels. Higher levels give better armor
     *  - §aLevel 1: Iron
     *  - §aLevel 2: Copper
     *  - §aLevel 3: Gold
     *  - §aLevel 4: Silver
     * 
     */
    'draconic_amulet': 4, // 4 levels
        /**
     * - Draconic amulet: Gives your dragon neck armor. 4 levels . Higher levels give better armor
     *  - §aLevel 1: Iron
     *  - §aLevel 2: Copper
     *  - §aLevel 3: Gold
     *  - §aLevel 4: Silver
     * 
     */
    'draconic_bulwark': 4, // 4 levels
        /**
     * - Draconic bulwark: Gives your dragon body armor. 4 levels . Higher levels give better armor
     *  - §aLevel 1: Iron
     *  - §aLevel 2: Copper
     *  - §aLevel 3: Gold
     *  - §aLevel 4: Silver
     * 
     */
    'draconic_tailguard': 4, // 4 levels
        /**
     * - Draconic tailguard: Gives your dragon tail armor. 4 levels . Higher levels give better armor
     *  - §aLevel 1: Iron
     *  - §aLevel 2: Copper
     *  - §aLevel 3: Gold
     *  - §aLevel 4: Silver
     * 
     */
    'bound_might': 3, // 3 levels
    /**
     *  * Bound Might: Gives your dragon effects while you are riding it. 3 levels
 * §aLevel 1: Strength
 * §aLevel 2: Speed
 * §aLevel 3: Soulsteal
     * 
     */
    'molten_scales': 4, // 4 levels
    /**
     *  * Molten Scales: Gives your dragon a permanent burning thorns effect. 4 levels.
 *  - Each level increases the amplifier of the effect by 1
 * 
     * 
     */
    'dragons_favor': 5, // 5 levels
    /**
 * Dragons Favor: When your dragon kills a mob, you get an effect based on the dragon type. 5 Levels
 * - §aLevel 1: 5% chance
 * - §aLevel 2: 10% chance
 * - §aLevel 3: 15% chance
 * - §aLevel 4: 20% chance
 * - §aLevel 5: 25% chance
 * 
 */
    'soulfire': 4, // 4 levels
    /**
 * Soulfire: When you kill an enemy, your dragon gets a special effect. 4 levels. Each level gives a new effect and increases the percent chance of it activating
 * 
 * - §aLevel 1: Speed
 * - §aLevel 2: Haste
 * - §aLevel 3: Strength
 * - §aLevel 4: Regeneration
 * 
 * 
 */


    // Parrying: 37 total levels, 8 abilities
    'lightning_parry': 5, // 5 levels
    // Upon parrying, the enemy is stunned and you cast shockwave.
    // §aLevel 1: Shockwave §aLevel 1
    // §aLevel 2: Shockwave §aLevel 2
    // §aLevel 3: Shockwave §aLevel 3 and the enemy gains a rend effect
    // §aLevel 4: Shockwave §aLevel 4
    // §aLevel 5: Shockwave §aLevel 5
    'frost_parry': 5, // 5 levels
    // Upon parrying, the enemy gains 1 second of the frozen effect per level
    // §aLevel 1: 1 second of frozen
    // §aLevel 2: 2 seconds of frozen
    // §aLevel 3: 3 seconds of frozen and you gain a strength effect
    // §aLevel 4: 4 seconds of frozen
    // §aLevel 5: 5 seconds of frozen. Killing a frozen enemy has a chance to spread the effect to enemies within a 15 block radius
    'stomp_parry': 10, // 10 levels
    // Upon parrying, you cast stomp
    // §aLevel 1: You stomp
    // §aLevel 2: The enemy gets the rend effect
    // §aLevel 3: The enemy is knocked back from your stomp
    // §aLevel 4: The enemy gets a levitation effect which causes them to be launched farther
    // §aLevel 5: The enemy is struck by lightning. Each level after 5 increases the amount of lightning strikes by 2

    'strength_parry': 3, // 3 levels
    // Upon parrying, you gain a strength effect for 2 seconds
    // §aLevel 2: You gain a haste effect for 2 seconds
    // §aLevel 3: The enemy is stunned
    'speed_parry': 3, // 3 levels
    // Upon parrying a projectile, you and the attacker gain effects.
    // §aLevel 1: you gain a speed effect
    // §aLevel 2: The enemy gains a slowed effect
    // §aLevel 3: You gain invisibility for 3 seconds
    'stun_parry': 5, // 5 levels
    // Upon parrying, you stun the enemy for 3 seconds per level. At §aLevel 3 the enemy also gets the rend effect which increases the amount of damage they take
    'portal_parry': 1, // 1 level
    // After parrying you cast a portal behind the enemy and above them and cast wind gust to blow them through
    'flaming_parry': 5, // 5 levels
    // After parrying you cast flaming strike. At §aLevel 5 you unlock shadow parry
    'base_parry': 3, // 3 levels
    // Unlocks the parry ability. Parrying gives the enemy weakness and slowness for 1 second. Each level increases the window that you can parry by 1 tick and increases the duration of the weakness and slowness effect by 1 second
    'parry_mastery': 1, // 1 level
    // reduces the ability activations from parrying from 3 to 2
//_______________________________________________________________________________________________________________________________________________________________________________________
    // Pet Spell Casting: 48 total levels, 14 abilities
    'captains_elixir': 5, // 3 levels
    // Captains Elixir:
/**
 * §aLevel 1: Casts Frostwave - Frostwave power increases with Skill Level
 * §aLevel 2: Increases Frostwave Power
 * §aLevel 3: Casts Frostwave and freezes the attacker for 3 seconds. Freeze duration increases with Skill Level
 * §aLevel 4: Increases Frostwave and Freeze Power
 * §aLevel 5: Casts Frostwave, freezes the attacker, then casts Ice Block. Ice Block power increases with Skill Level
 * 
 */
    'molten_sands': 3, // 3 levels
    /**
     * Molten Sands: Casts consecutive Fireballs at the attacking entity. Fireball count and power increases with Skill Level
    * §aLevel 1: Casts one §aLevel 1 Fireball
    * §aLevel 2: Casts two §aLevel 2 Fireballs
    * §aLevel 3: Casts three §aLevel 3 Fireballs

     */

    'firewyrm_flask': 3, // 3 levels
/**
 * Firewyrm Flask
 * §aLevel 1: Cast fire breath at the attacking entity
 * §aLevel 2: Increase the power of Fire Breath
 * §aLevel 3: Cast root then fire breath at the attacking entity
 */
    'raging_tempest': 5, // 5 levels
    /**
 * Raging Tempest: 5 levels
 *  - Your Pet has a chance to Cast chain lightning the amount of times and power equal to the power level
 */
    'dark_winds': 5, // 4 levels
/**
 * Dark Winds: Casts Gust at all entities within 5 blocks of the player. Per level increases: Range, Gust power, and effect durations
 * §aLevel 1: Casts Gust at all entities within 5 blocks
 * §aLevel 2: Enemies hit with Gust get the Blindness effect
 * §aLevel 3: Enemies hit with Gust get the Wither effect
 * §aLevel 4: Enemies hit with Gust get the Enigma effect
 * §aLevel 5: Casts Cursed Minefield
 */
 
    'elderwood_sap': 5, // 5 levels
/**
 * Elderwood Sap:
 * §aLevel 1: Casts Slow at the attacking entity
 * §aLevel 2: Increases the power of slow
 * §aLevel 3: Casts Firefly Swarm at the attacking entity
 * §aLevel 4: Increases the power of Firefly Swarm
 * §aLevel 5: Casts Poison Splash at the attacking entity
 */
    'frostfire_dew': 5, // 5 levels
/**
 * Frostfire Dew:
 * §aLevel 1: Casts Scorch at the attacking entity
 * §aLevel 2: Casts 2 Frost Rays at the attacking entity
 * §aLevel 3: Casts 3 Frost Rays 
 * §aLevel 4: Casts 4 Frost Rays
 * §aLevel 5: Casts Nullflare
 */
    'psionic_volley': 3, // 3 levels
    // Psionic Volley: When the pet is attacked there is a chance that it will cast root and starfall at the attacking entity
/**
 * Psionic Volley: Casts starfall at the attacking entity. Starfall power increases with Skill Level
 * §aLevel 1: Casts Starfall at the attacking entity
 * §aLevel 2: Starfall power increases
 * §aLevel 3: Casts Slow, then Starfall at the attacking entity
 * 
 */
    'serpents_tears': 3, // 3 levels
/**
 * Serpents Tears: Casts Poison Arrow at the attacking entity.
 *  - §aLevel 1: Casts Poison Arrow at the attacking entity
 *  - §aLevel 2: Casts 2 Poison Arrows at the attacking entity and gives the attacking entity the venom effect
 *  - §aLevel 3: Casts 3 Poison Arrows. Killing venom entities will make other entities around them get the venom effect
 */
    'stormheart_lullaby': 5, // 5 levels
/**
 * Stormheart Lullaby: Casts Lightning Lance at the attacking entity. Lightning Lance power increases with Skill Level
 * §aLevel 1: Casts Lightning Lance at the attacking entity
 * §aLevel 2: Increases Lightning Lance Power
 * §aLevel 3: Casts Thunderstorm and then casts Lightning Lance at the attacking entity
 * §aLevel 4: Increases power of Thunderstorm and Lightning Lance
 * §aLevel 5: Increases power of Thunderstorm and Lightning Lance
 */
    'moonlit_mist': 5, // 5 levels
    // Moonlit Mist: Casts Firefly Swarm at the attacking entity if the player is hurt
/**
 * Moonlit mist: Casts Firefly Swarm at the attacking entity. Firefly Swarm power increases with Skill Level
 * §aLevel 1: Casts Firefly Swarm at the attacking entity
 * §aLevel 2: Increases the power of Firefly Swarm
 * §aLevel 3: Gives the attacking entity the Blindness effect
 * §aLevel 4: Increases the power of Firefly Swarm
 * §aLevel 5: Casts slow at the attacking entity
 */
    'valkyries_blood': 5, // 5 levels
/**
 * Valkyries Blood:
 * §aLevel 1: Casts Healing Circle at the player when they are below 20% health
 * §aLevel 2: Increases the power of Healing Circle
 * §aLevel 3: Increases the power of Healing Circle
 * §aLevel 4: Increases the power of Healing Circle
 * §aLevel 5: Casts Blessing of Life at the player
 */
    'forgotten_divinity': 5, // 5 levels
/**
 * Forgotten Divinity: Casts Shockwave at the attacking entity. Shockwave power increases with Skill Level
 * §aLevel 1: Casts Shockwave at the attacking entity
 * §aLevel 2: Casts Lightning at all entities within a short range of the player. Max: 10 
 * §aLevel 3: Casts Lightning at all entities within a medium range of the player. Max: 15
 * §aLevel 4: Casts Lightning at all entities within a long range of the player. Max: 20
 * §aLevel 5: Casts Lightning at all entities within an extreme range of the player. Max: 25
 */

    'beckoning_shadows': 5, // 5 levels
/**
 * Beckoning Shadows - Casts Blood Step at the attacking entity. Blood Step power increases with Skill Level
 * §aLevel 1: Casts Blood Step at the attacking entity
 * §aLevel 2: Gives the enemy the Blindness effect
 * §aLevel 3: Increases the duration of the Blindness effect
 * §aLevel 4: Gives your pet the Strength Effect
 * §aLevel 5: Your pet casts Vortex Punch at the attacking entity
 */

    'beastly_sorcery': 5, // 5 levels
    // Unlocks the Beastly Sorcery ability. Pets are now able to spellcast. The level is how many pets will cast spells at once
    
    'beastly_sorcery_cooldown': 15, // 15 levels
    // Reduces the cooldown of the beastly sorcery ability by 10 seconds per level. 3 minutes base cooldown. Max level: 30 seconds

    
/**
 * Heavens Wrath: 2.5% chance to spawn ball lightning or comets when hitting an entity with an arrow. They will home in on the target that was hit.
 * - §aLevel 1: 2.5% chance to spawn and 3 comets/ball lightning
 * - §aLevel 2: 5% chance to spawn and 6 comets/ball lightning
 * - §aLevel 3: 7.5% chance to spawn and 9 comets/ball lightning
 * - §aLevel 4: 10% chance to spawn and 12 comets/ball lightning
 * - §aLevel 5: 12.5% chance to spawn and 15 comets/ball lightning
 */
    'heavens_wrath': 3, // 3 levels

    /**
 * Distant Gift: Drops a random item when hitting an entity with a crossbow arrow. 3% chance
 * §aLevel 1: 3% chance to drop and 1 item
 * §aLevel 2: 6% chance to drop and 2 items
 * §aLevel 3: 9% chance to drop and 3 items
 * §aLevel 4: 12% chance to drop and 4 items
 * §aLevel 5: 15% chance to drop and 5 items
 */
    'distant_gift': 5, // 5 levels

/** Fist of Kronos: Shoot an enemy to spawn fireballs above the target. They wait 5 seconds before slamming down.
 * - §aLevel 1: 1% chance to spawn 1 fireball above the target. It waits 5 seconds before slamming down
 * - §aLevel 2: 2% chance to spawn 2 fireballs
 * - §aLevel 3: 3% chance to spawn 3 fireballs
 * - §aLevel 4: 4% chance to spawn 4 fireballs
 * - §aLevel 5: 5% chance to spawn 5 fireballs
 * - §aLevel 6: 5% chance to spawn 6 fireballs
 * - §aLevel 7: 5% chance to spawn 7 fireballs
 * - §aLevel 8: 5% chance to spawn 8 fireballs
 * - §aLevel 9: 5% chance to spawn 9 fireballs
 * - §aLevel 10: 5% chance to spawn 10 fireballs
 *  */

    'fist_of_kronos': 10, // 10 levels

    'annihilation': 1, // 1 level
// Upon dying your pet will cast annihilation at the attacking entity

    // Horns: 7 total levels, 7 abilities
    'admire': 1, // 1 level
    // Upon blowing the Admire Horn, give yourself the Restoration Effect
    'feel': 1, // 1 level
    // Upon blowing the Feel Horn, give yourself resistance, strength, and haste
    'sing': 1, // 1 level
    // Upon blowing the Sing Horn, give entities around you the regeneration and speed effects
    'seek': 1, // 1 level
    // Upon blowing the Seek Horn, give entities around you the glowing and slowness effects
    'yearn': 1, // 1 level
    // Upon blowing the Yearn Horn, give entities around you the absorption and night vision effects
    'ponder': 1, // 1 level
    // Upon blowing the Ponder Horn, Nearby monsters get the enigma effect which means they cannot see you. This vanishes upon attacking
    'dream': 1, // 1 level
    // Go insane upon blowing the Dream Horn

    'max_pets': 5, // 5 levels
    // Increases the number of pets you can have

    // Soulbinder: 29 total levels, 16 abilities
    'soulbinders_crow':1,
    // Unlocks the Crow for the Soulbinders Gateway
    'soulbinders_bald_eagle':1,
    // Unlocks the Bald Eagle for the Soulbinders Gateway
    'soulbinders_capuchin_monkey':1,
    // Unlocks the Capuchin Monkey for the Soulbinders Gateway
    'soulbinders_tarantula_hawk':1,
    // Unlocks the Tarantula Hawk for the Soulbinders Gateway
    'soulbinders_elephant':1,
    // Unlocks the Elephant for the Soulbinders Gateway
    'soulbinders_komodo_dragon':1,
    // Unlocks the Komodo Dragon for the Soulbinders Gateway
    'soulbinders_kangaroo':1,
    // Unlocks the Kangaroo for the Soulbinders Gateway
    'soulbinders_gorilla':1,
    // Unlocks the Gorilla for the Soulbinders Gateway
    'soulbinders_crocodile':1,
    // Unlocks the Crocodile for the Soulbinders Gateway
    'soulbinders_grizzly_bear':1,
    // Unlocks the Grizzly Bear for the Soulbinders Gateway
    'soulbinders_caiman':1,
    // Unlocks the Caiman for the Soulbinders Gateway
    'soulbinders_hippogryph':1,
    // Unlocks the Hippogryph for the Soulbinders Gateway
    'soulbinders_cockatrice':1,
    // Unlocks the Cockatrice for the Soulbinders Gateway
    'soulbinders_subterranodon':1,
    // Unlocks the Subterranodon for the Soulbinders Gateway
    'soulbinders_vallumraptor':1,
    // Unlocks the Vallumraptor for the Soulbinders Gateway
    'soulbinders_tremorsaurus':1,
    // Unlocks the Tremorsaurus for the Soulbinders Gateway
    'soulbinders_soul_vulture': 1, // 1 level
    // Unlocks the Soul Vulture for the Soulbinders Gateway
    'soulbinders_anaconda': 1, // 1 level
    // Unlocks the Anaconda for the Soulbinders Gateway
    'soulbinders_moose': 1, // 1 level
    // Unlocks the Moose for the Soulbinders Gateway
    'soulbinders_rattlesnake': 1, // 1 level
    // Unlocks the Rattlesnake for the Soulbinders Gateway
    'soulbinders_rhinoceros': 1, // 1 level
    // Unlocks the Rhinoceros for the Soulbinders Gateway
    'soulbinders_tiger': 1, // 1 level
    // Unlocks the Tiger for the Soulbinders Gateway
    'soulbinders_tusklin': 1, // 1 level
    // Unlocks the Tusklin for the Soulbinders Gateway
    'soulbinders_snow_leopard': 1, // 1 level
    // Unlocks the Snow Leopard for the Soulbinders Gateway
    'soulbinders_teletor': 1, // 1 level
    // Unlocks the Teletor for the Soulbinders Gateway
    'soulbinders_bone_serpent': 1, // 1 level
    // Unlocks the Bone Serpent for the Soulbinders Gateway
    'soulbinders_enderiophage': 1, // 1 level
    // Unlocks the Enderiophage for the Soulbinders Gateway
    'soulbinders_emu': 1, // 1 level
    // Unlocks the Emu for the Soulbinders Gateway
    'soulbinders_dread_scuttler': 1, // 1 level
    // Unlocks the Dread Scuttler for the Soulbinders Gateway
    
    
    'empower': 4, // 4 levels
    /**
     * Empower: Gives all tamed creatures an effect based on the level of Empower
     * §aLevel 1: Speed I
     * §aLevel 2: Burning Thorns I
     * §aLevel 3: Devour I
     * §aLevel 4: Resilience I
     *  */ 

    'bloodbound': 10, // 10 levels
    // Ability: Bloodbound: Tamed Creatures heal nearby soulbinders and tamed beasts when they kill a creature
    // - Heals 1% * bloodbound level (10 levels) of max health to all nearby tamed creatures and soulbinders

    'essence_of_eternity': 5, // 5 levels
    /**
     * Essence of Eternity: Stop time for enemies around you for 12 seconds per level. 5 levels. Cooldown is 3 minutes and starts after the ability is over. Each level decreases the cooldown by 15 seconds for a minimum of 2 minutes.
     * - Level 1: 12 seconds. 3 minute cooldown
     * - Level 2: 24 seconds. 2 minute 45 second cooldown
     * - Level 3: 36 seconds. 2 minute 30 second cooldown
     * - Level 4: 48 seconds. 2 minute 15 second cooldown
     * - Level 5: 60 seconds. 2 minute cooldown
 */
    'essence_of_giants': 5, // 5 levels

    'parched': 5, // 5 levels
    
    'apex_predator': 1, // 1 level
    // Apex Predator: Some certain creatures spawn as Special Variants and may have unique items.

    'winterfang': 10, // 10 levels
    /**
     * Ability: Winterfang 
     * // 1% chance per level to freeze an enemy for .5 seconds if they hurt a pet. 10 levels. Each level increases the chance by 1% and the duration by .5 seconds.
     // Does not affect bosses.
    */
    'wildfyre': 10, // 10 levels
    /**
     * Ability: Wildfyre
     * // 1% chance per level to set an enemy on fire for 1.25 seconds if they hurt a pet. 10 levels. Each level increases the chance by 1% and the duration by 1.25 seconds.
     */


     'marsupial_warmachine': 5, // 5 levels
        /**
        * Marsupial Warmachine: Summoned Kangaroos are equipped with items based on the level of Marsupial Warmachine. 5 Minute Cooldown
        * - Level 1: Wooden Saber, Golden Helmet, Leather Chestplate
        * - Level 2: Golden Saber, Steampunk Helmet, Wooden Chestplate
        * - Level 3: Iron Saber, Face Helmet, Chainmail Chestplate
        * - Level 4: Sharp Sword, Lady Maria Helmet, Iron Chestplate
        * - Level 5: Hero Claymore, Forgotten Trace Helmet, Heavy Iron Armor Chestplate
        */

        'primal_retribution': 5, // 5 levels
        /**
         * Primal Retribution: When your pet dies there is a 2.5% chance to spawn a 3 fireballs that seek out the enemy that killed it. 5 levels. Each level increases the chance by 2.5% and the number of fireballs by 3.
         * - Level 1: 2.5% chance to spawn 3 fireballs
         * - Level 2: 5% chance to spawn 6 fireballs
         * - Level 3: 7.5% chance to spawn 9 fireballs
         * - Level 4: 10% chance to spawn 12 fireballs
         * - Level 5: 12.5% chance to spawn 15 fireballs
         * 
         * 
         */


            'arcane_might': 5, // 5 levels
            // Arcane Might: Deal extra damage to enemies hit with a spell
            // §aLevel 1: 1 extra damage for 40 ticks
            // §aLevel 2: 2 extra damage for 80 ticks
            // §aLevel 3: 3 extra damage for 120 ticks
            // §aLevel 4: 4 extra damage for 160 ticks
            // §aLevel 5: 5 extra damage for 200 ticks



    'arctic_wind': 10, // 10 levels
    /**
     * Ability: Arctic Wind
     * // 1% chance per level to freeze an enemy for .25 seconds if they are hit by an arrow. 10 levels. Each level increases the chance by 1% and the duration by .5 seconds.
     */
    'deep_freeze': 10, // 10 levels
    //Replacement for Arctic Wind. 1% chance per level to freeze an enemy for .5 seconds if they are hit by an arrow. 10 levels. Each level increases the chance by 1% and the duration by .5 seconds.
    
    'valkyries_wings': 3, // 3 levels
    /**Valkyries wings
     * §aLevel 1: While airborne, Hold SHIFT + drawing a Bow, Crossbow, or Throwable weapon, will give you a huge vertical boost and a slow falling effect
     * §aLevel 2: Killing an enemy while in the air will give you an additional use
     * §aLevel 3: Gain Angel Wings for 5 seconds which allow you to glide
     * */


    'hunters_bounty': 10, // 10 levels
    /**
     * Hunters Bounty: Killing a monster with an arrow will drop Arrows. Higher levels will drop stronger arrows and a random special Arrow. 15 Second Cooldown
     * Killing a monster with an arrow will drop Arrows. Higher levels will drop stronger arrows and a random special Arrow. 15 Second Cooldown
     * Level 1: 1x Arrow
     * Level 2: 2x Arrow
     * Level 3: 1x Copper Arrow, 1x Arrow
     * Level 4: 2x Copper Arrow
     * Level 5: 2x Copper Arrow, 1x Arrow. Special Arrows: Flint Magnetic, Flint Tracking
     * Level 6: 3x Copper Arrow. Special Arrows: Flint Magnetic, Flint Tracking, Flint Freezing
     * Level 7: 3x Copper Arrow, 1x Iron Arrow. Special Arrows: Flint Magnetic, Flint Tracking, Flint Freezing, Flint Lightning
     * Level 8: 2x Copper Arrow, 2x Iron Arrow. Special Arrows: Flint Magnetic, Flint Tracking, Flint Freezing, Flint Lightning, Flint Explosive
     * Level 9: 1x Copper Arrow, 3x Iron Arrow. Special Arrows: Iron Magnetic, Iron Tracking, Iron Freezing, Iron Lightning, Iron Explosive
     * Level 10: 4x Iron Arrow. Special Arrows: 2x Iron Magnetic, 2x Iron Tracking, 2x Iron Freezing, 2x Iron Lightning, 2x Iron Explosive
     * 
     */
    'unlock_crow': 1, // 1 level
    // unlocks the crow
    'crow_level': 10, // 10 levels
    // Increases the level of the crow. Each level increases the crow's health by 5
    'blood_crow': 5, // 1 level
    // Unlocks the ability for the Crow to cast spells from School of Blood
    'exalted_crow': 1, // 1 level
    // unlocks all schools of magic for the crow

    'unlock_bald_eagle': 1, // 1 level
    // unlocks the bald eagle
    'bald_eagle_level': 10, // 10 levels
    // Increases the level of the bald eagle. Each level increases the bald eagle's health by 5
    'ice_eagle': 5, // 1 level
    // Unlocks the ability for the Bald Eagle to cast spells from School of Ice
    'exalted_eagle': 1, // 1 level
    // unlocks all schools of magic for the bald eagle
    'apex_eagle': 1, // 1 level
    // Eagles spawn with the Falconry Hood. Equip the Falconry Glove to take control of the eagle

    'unlock_capuchin_monkey': 1, // 1 level
    // unlocks the capuchin monkey
    'capuchin_monkey_level': 10, // 10 levels
    // Increases the level of the capuchin monkey. Each level increases the capuchin monkey's health by 5
    'ender_monkey': 5, // 1 level
    // Unlocks the ability for the Capuchin Monkey to cast spells from School of Ender
    'exalted_monkey': 1, // 1 level
    // unlocks all schools of magic for the capuchin monkey
    'apex_monkey': 1, // 1 level
    // Monkeys spawn with a Throwing Dart. Darts deal extra damage

    'unlock_tarantula_hawk': 1, // 1 level
    // unlocks the tarantula hawk
    'tarantula_hawk_level': 10, // 10 levels
    // Increases the level of the tarantula hawk. Each level increases the tarantula hawk's health by 5
    'nature_hawk': 5, // 1 level
    // Unlocks the ability for the Tarantula Hawk to cast spells from School of Nature
    'exalted_hawk': 1, // 1 level
    // unlocks all schools of magic for the tarantula hawk

    'unlock_elephant': 1, // 1 level
    // unlocks the elephant
    'elephant_level': 10, // 10 levels
    // Increases the level of the elephant. Each level increases the elephant's health by 5
    'holy_elephant': 5, // 1 level
    // Unlocks the ability for the Elephant to cast spells from School of Holy
    'exalted_elephant': 1, // 1 level
    // unlocks all schools of magic for the elephant

    'unlock_komodo_dragon': 1, // 1 level
    // unlocks the komodo dragon
    'komodo_dragon_level': 10, // 10 levels
    // Increases the level of the komodo dragon. Each level increases the komodo dragon's health by 5
    'nature_dragon': 5, // 1 level
    // Unlocks the ability for the Komodo Dragon to cast spells from School of Nature
    'exalted_dragon': 1, // 1 level
    // unlocks all schools of magic for the komodo dragon
    'apex_dragon': 1, // 1 level
    // Komodo Dragons spawn with a Saddle equipped.

    'unlock_kangaroo': 1, // 1 level
    // unlocks the kangaroo
    'kangaroo_level': 10, // 10 levels
    // Increases the level of the kangaroo. Each level increases the kangaroo's health by 5
    'lightning_kangaroo': 5, // 1 level
    // Unlocks the ability for the Kangaroo to cast spells from School of Lightning
    'exalted_kangaroo': 1, // 1 level
    // unlocks all schools of magic for the kangaroo


    'unlock_gorilla': 1, // 1 level
    // unlocks the gorilla
    'gorilla_level': 10, // 10 levels
    // Increases the level of the gorilla. Each level increases the gorilla's health by 5
    'evoker_gorilla': 5, // 1 level
    // Unlocks the ability for the Gorilla to cast spells from School of Evocation
    'exalted_gorilla': 1, // 1 level
    // unlocks all schools of magic for the gorilla
    'apex_gorilla': 1, // 1 level
    // Gorillas now spawn as Silverbacks which deal more damage

    'unlock_crocodile': 1, // 1 level
    // unlocks the crocodile
    'crocodile_level': 10, // 10 levels
    // Increases the level of the crocodile. Each level increases the crocodile's health by 5
    'blood_crocodile': 5, // 1 level
    // Unlocks the ability for the Crocodile to cast spells from School of Blood
    'exalted_crocodile': 1, // 1 level
    // unlocks all schools of magic for the crocodile

    'unlock_grizzly_bear': 1, // 1 level
    // unlocks the grizzly bear
    'grizzly_bear_level': 10, // 10 levels
    // Increases the level of the grizzly bear. Each level increases the grizzly bear's health by 5
    'fire_bear': 5, // 1 level
    // Unlocks the ability for the Grizzly Bear to cast spells from School of Fire
    'exalted_bear': 1, // 1 level
    // unlocks all schools of magic for the grizzly bear

    'unlock_caiman': 1, // 1 level
    // unlocks the caiman
    'caiman_level': 10, // 10 levels
    // Increases the level of the caiman. Each level increases the caiman's health by 5
    'ender_caiman': 5, // 5 levels
    // Unlocks the ability for the Caiman to cast spells from School of Ender. 2% chance to cast per level
    'exalted_caiman': 1, // 1 level
    // unlocks all schools of magic for the caiman

    'unlock_hippogryph': 1, // 1 level
    // unlocks the hippogryph
    'hippogryph_level': 10, // 10 levels
    // Increases the level of the hippogryph. Each level increases the hippogryph's health by 5
    'evoker_hippogryph': 5, // 1 level
    // Unlocks the ability for the Hippogryph to cast spells from School of Evocation
    'exalted_hippogryph': 1, // 1 level
    // unlocks all schools of magic for the hippogryph
    'apex_hippogryph': 1, // 1 level
    // Hippogryphs now spawn with a Saddle, Chest, and Iron Armor

    'unlock_cockatrice': 1, // 1 level
    // unlocks the cockatrice
    'cockatrice_level': 10, // 10 levels
    // Increases the level of the cockatrice. Each level increases the cockatrice's health by 5
    'ice_cockatrice': 5, // 1 level
    // Unlocks the ability for the Cockatrice to cast spells from School of Ice
    'exalted_cockatrice': 1, // 1 level
    // unlocks all schools of magic for the cockatrice

    'unlock_subterranodon': 1, // 1 level
    // unlocks the subterranodon
    'subterranodon_level': 10, // 10 levels
    // Increases the level of the subterranodon. Each level increases the subterranodon's health by 5
    'ender_subterranodon': 5, // 1 level
    // Unlocks the ability for the Subterranodon to cast spells from School of Ender
    'exalted_subterranodon': 1, // 1 level
    // unlocks all schools of magic for the subterranodon

    'unlock_vallumraptor': 1, // 1 level
    // unlocks the vallumraptor
    'vallumraptor_level': 10, // 10 levels
    // Increases the level of the vallumraptor. Each level increases the vallumraptor's health by 5
    'fire_raptor': 5, // 1 level
    // Unlocks the ability for the Vallumraptor to cast spells from School of Fire
    'exalted_raptor': 1, // 1 level
    // unlocks all schools of magic for the vallumraptor
    'apex_raptor': 1, // 1 level
    // Vallumraptors now spawn as Elders. Elders deal more damage

    'unlock_tremorsaurus': 1, // 1 level
    // unlocks the tremorsaurus
    'tremorsaurus_level': 10, // 10 levels
    // Increases the level of the tremorsaurus. Each level increases the tremorsaurus's health by 5
    'blood_dino': 5, // 1 level
    // Unlocks the ability for the Tremorsaurus to cast spells from School of Blood
    'exalted_dino': 1, // 1 level
    // unlocks all schools of magic for the tremorsaurus


    'unlock_soul_vulture': 1, // 1 level
    // unlocks the soul vulture
    'soul_vulture_level': 10, // 10 levels
    // Increases the level of the soul vulture. Each level increases the soul vulture

    'unlock_anaconda': 1, // 1 level
    // unlocks the anaconda
    'anaconda_level': 10, // 10 levels
    // Increases the level of the anaconda. Each level increases the anaconda's health

    'unlock_moose': 1, // 1 level
    // unlocks the moose
    'moose_level': 10, // 10 levels
    // Increases the level of the moose. Each level increases the moose's health

    'unlock_rattlesnake': 1, // 1 level
    // unlocks the rattlesnake
    'rattlesnake_level': 10, // 10 levels
    // Increases the level of the rattlesnake. Each level increases the rattlesnake's health

    'unlock_rhinoceros': 1, // 1 level
    // unlocks the rhinoceros
    'rhinoceros_level': 10, // 10 levels
    // Increases the level of the rhinoceros. Each level increases the rhinoceros's health

    'unlock_tiger': 1, // 1 level
    // unlocks the tiger
    'tiger_level': 10, // 10 levels
    // Increases the level of the tiger. Each level increases the tiger's health

    'unlock_tusklin': 1, // 1 level
    // unlocks the tusklin
    'tusklin_level': 10, // 10 levels
    // Increases the level of the tusklin. Each level increases the tusklin's health
    
    'unlock_snow_leopard': 1, // 1 level
    // unlocks the snow leopard
    'snow_leopard_level': 10, // 10 levels
    // Increases the level of the snow leopard. Each level increases the snow leopard's health
    

    'unlock_teletor': 1, // 1 level
    // unlocks the teletor
    'teletor_level': 10, // 10 levels
    // Increases the level of the teletor. Each level increases the teletor's health

    'unlock_bone_serpent': 1, // 1 level
    // unlocks the bone serpent
    'bone_serpent_level': 10, // 10 levels
    // Increases the level of the bone serpent. Each level increases the bone serpent's health

    'unlock_centipede_head': 1, // 1 level
    // unlocks the centipede head
    'centipede_head_level': 10, // 10 levels

    // Increases the level of the centipede head. Each level increases the centipede head's health
    'unlock_enderiophage': 1, // 1 level
    // unlocks the enderiophage
    'enderiophage_level': 10, // 10 levels
    // Increases the level of the enderiophage. Each level increases the enderiophage's health
    'unlock_emu': 1, // 1 level
    // unlocks the emu
    'emu_level': 10, // 10 levels
    // Increases the level of the emu. Each level increases the emu's health
    'unlock_citadel_keeper': 1, // 1 level
    // unlocks the citadel keeper
    'citadel_keeper_level': 10, // 10 levels
    // Increases the level of the citadel keeper. Each level increases the citadel keeper's health
    'unlock_dread_scuttler': 1, // 1 level
    // unlocks the dread scuttler
    'dread_scuttler_level': 10, // 10 levels
    // Increases the level of the dread scuttler. Each level increases the dread scuttler's health

    "exalted_soul_vulture": 1, // 1 level
    // unlocks all schools of magic for the soul vulture
    'exalted_anaconda': 1, // 1 level
    // unlocks all schools of magic for the anaconda
    'exalted_moose': 1, // 1 level
    // unlocks all schools of magic for the moose
    'exalted_rattlesnake': 1, // 1 level
    // unlocks all schools of magic for the rattlesnake
    'exalted_rhinoceros': 1, // 1 level
    // unlocks all schools of magic for the rhinoceros
    'exalted_tiger': 1, // 1 level
    // unlocks all schools of magic for the tiger
    'exalted_tusklin': 1, // 1 level
    // unlocks all schools of magic for the tusklin
    'exalted_snow_leopard': 1, // 1 level
    // unlocks all schools of magic for the snow leopard
    'exalted_teletor': 1, // 1 level
    // unlocks all schools of magic for the teletor
    'exalted_bone_serpent': 1, // 1 level
    // unlocks all schools of magic for the bone serpent
    'exalted_enderiophage': 1, // 1 level
    // unlocks all schools of magic for the enderiophage
    'exalted_emu': 1, // 1 level
    // unlocks all schools of magic for the emu
    'exalted_dread_scuttler': 1, // 1 level
    // unlocks all schools of magic for the dread scuttler

    // Juggernaut: 10 abilities, 5 levels each
    'bannerlord': 5,
    'warlord': 5,
    'overlord': 5,
    'warden': 5,
    'bulwark': 5,
    'warbringer': 5,
    'blitz': 5,
    'titan': 5,
    'colossus': 6,
    'martyr': 5,


    // Vampire
    'rite_of_the_red_court': 5,
    'cloak_of_blood': 5,
    'last_sacrament': 5,
    'obelisk_of_flesh': 5,
    'christened_in_blood': 5,
    'hemorrhage': 5,
    'scarlet_shadow': 5,
    'dripping_fangs': 5,
    'dark_flight': 5,
    'acolyte': 1,
    'zealot': 1,
    'ritualist': 1,
    'apostle': 1,
    'prophet': 1,

    // Monk
    'sanctity': 5,
    'meditation': 5,
    'zen': 5,
    'harmony_strike': 5,
    'radiance': 5,
    'ascendance': 5,
    'divinity': 5,
    'resonance': 5,
    'equilibrium': 5,
    'elemental_conflux': 5,


    // Trickster
    'totem_of_the_apothecary': 5,
    'hogpothecary': 5,
    'thousand_knives': 5,
    'dancing_daggers': 5,
    'crystalline_illusion': 5,
    'storm_of_blades': 5,
    'breakneck_brew': 5,
    'shatterflask': 5,
    'mirage': 5,
    'illusionist': 5,
    'soulripper_serum': 5,
    'corrosive_distillate': 5,

    // Spellblade
    'spellweaver': 5,
    'despair': 5,
    'aeglos': 5,
    'ice': 5,
    'forlorn': 5,
    'herugrim': 5,
    'heartsbane': 5,
    'aranruth': 5,
    'anguirel': 5,
    'excalibur': 5,
    'avalon': 5,
    'glamdring': 5,
    'foe_hammer': 5,
    'widows_wail': 5,
    'red_rain': 5,
    'sting': 5,
    'aerondight': 5,
    'aard': 5,
    'lightfall': 5,
    'dawn': 5,
    'dusk': 3,
    'caliburn': 5,
    'anduril': 5,
    'flame_of_the_west': 5,
    'callandor': 5,
    'oathkeeper': 5,


    'unknown': 1,

    },
    attributes: {// command runs the function
        'combatroll.count': { // 3 levels
            value: 1,
            base: 1,
            max: 4, 
        }, 
        // Increases the number of combat rolls you can do
        'combatroll.recharge': { // 3 levels
            value: 5,
            base: 20,
            max: 35
        },
    },
    commands: {

    },
    // Unlocks the combat dash ability
    paint_key_abilities : [
        'inspire',
        'aeromancer',
        'gjallarhorn',
        'rage',
        'windborne',
        'rite_of_cinders',
        'elemental_seekers',
        'scent_of_blood',
        'mjolnir',
        'gravitic_flux',
        'parallax',
        'mindshatter',
        'severed_continuum',
        
        'pestilence',
        'essence_of_giants',
        'bannerlord',
        // Monk
        'elemental_conflux',
        // Nomad
        'zipline',
        'emberheart',
        'spellbinder_siphon',
        'sentinel',
        'obelisk_of_flesh',


    ],
    paint_nonkey_ability: [
        'hunters_bounty',
        
        'yggdrasil',


        'scorch',
        
        'valkyries_wings',
        'marsupial_warmachine',
        'corrupted_savior',
        'sacrifice',
        'cyclone',
        'fiery_flight',
        'necromancer',
        'shockwave',
        'traveling_companions',
        'shatterpoint',
        'claustrophobic',
        'voidblast',
        'ravenous_undead',
        'sacred_pool',
        'sanctified',
        'consecration',
        'hydra',
        'flickering_blade',
        'lethal_shadows',
        'basilisk',
        'blood_fever',
        
        // Juggernaut non-key abilities
        'bulwark',
        'colossus',
        'warbringer',
        'blitz',
        'titan',

        //Vampire
        'last_sacrament',
        
        'cloak_of_blood',
        
        // Trickster
        'totem_of_the_apothecary',
        'hogpothecary',
        // Monk
        'ascendance',
        

        
    ]
}



StartupEvents.registry('item', event => {
    let skill_data = global.skillData;
    Object.entries(skill_data.abilities).forEach(([ability, max_level]) => {
        event.create(`${ability}_ability`).texture(`kubejs:icons/skill_tree/${ability}/${ability}`)
    })


})
