const ores_master = {
    // Tier 1: copper base
    'minecraft:copper_ingot': {
        hardness: 4,
        density: 2,
        flexibility: 2,
        durability: 250,
        mining_level: 1,
        mining_speed: 4,
        properties: {}
    },
    //___________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
    'create:brass_ingot': {
        hardness: 5,
        density: 3,
        flexibility: 2,
        durability: 250,
        mining_level: 1,
        mining_speed: 4,
        properties: {}
    },

    'create:zinc_ingot': {
        hardness: 4,
        density: 3,
        flexibility: 2,
        durability: 250,
        mining_level: 1,
        mining_speed: 4,
        properties: {}
    },

    'create:rose_quartz': {
        hardness: 5,
        density: 3,
        flexibility: 2,
        durability: 250,
        mining_level: 1,
        mining_speed: 4,
        properties: {
            handheld: {
                on_hit_spellcast: [
                    {
                        spell: 'irons_spellbooks:counterspell',
                        chance: 5,
                        level: 1,
                        free: true
                    }
                ],	
            }
        }
    },
    //___________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

    'vintage:vanadium_ingot': {
        hardness: 6,
        density: 3,
        flexibility: 2,
        durability: 250,
        mining_level: 1,
        mining_speed: 3,
        properties: {}
    },

    'create:polished_rose_quartz': {
        hardness: 6,
        density: 3,
        flexibility: 2,
        durability: 250,
        mining_level: 1,
        mining_speed: 3,
        properties: {
            handheld: {
                on_hit_spellcast: [
                    {
                        spell: 'irons_spellbooks:counterspell',
                        chance: 10,
                        level: 1,
                        free: true
                    }
                ],	
            }
        }
    },
//___________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
    'fromtheshadows:diabolium_ingot': {
        hardness: 7,
        density: 2.7,
        flexibility: 1,
        durability: 250,
        mining_level: 1,
        mining_speed: 3,
        properties: {
            handheld: {
                on_hit_spellcast: [
                    {
                        spell: 'irons_spellbooks:devour',
                        chance: 10,
                        level: 2,
                        free: true
                    }
                ],	
            }
        }
        
    },


    
    // Tier 2: Iron base ___________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
    'minecraft:iron_ingot': {
        hardness: 5.5,
        density: 3.5,
        flexibility: 2,
        durability: 250,
        mining_level: 2,
        mining_speed: 6,
    },
	//___________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
    'hazennstuff:steel_ingot': {
        hardness: 6,
        density: 4,
        flexibility: 2.5,
        durability: 350,
        mining_level: 2,
        mining_speed: 6.5,
		groups: ['metal'],
		properties: {
			handheld: {
				on_hurt_spellcast: [
					{
						spell: 'irons_spellbooks:fortify',
						chance: 5,
						level: 1,
						free: true
					}
				],	
			}
		}
    },
	'graveyard:dark_iron_ingot': {
		hardness: 6.5,
        density: 4.5,
        flexibility: 2.5,
        durability: 375,
        mining_level: 2,
        mining_speed: 6.5,
		groups: ['metal'],
		properties: {}
    },


//___________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
    'eeeabsmobs:immortal_ingot': {
        hardness: 6.5,
        density: 4.5,
        flexibility: 3.5,
        durability: 500,
        mining_level: 3,
        mining_speed: 7,
		groups: ['metal'],
		properties: {
		    armor: {
				on_hurt_spellcast: [
					{
						spell: 'irons_spellbooks:oakskin',
						chance: 5,
						level: 2,
						free: true
					}
				],	
			}
		}
    },

	'block_factorys_bosses:ancient_iron_ingot': {
		hardness: 7.5,
        density: 5,
        flexibility: 3.5,
        durability: 500,
        mining_level: 3,
        mining_speed: 7,
		groups: ['metal'],
		properties: {}
	},



//___________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
    'cataclysm:black_steel_ingot': {
        hardness: 7,
        density: 5,
        flexibility: 4,
        durability: 600,
        mining_level: 3, 
        mining_speed: 7,
		groups: ['metal'],
		properties: {
			handheld: {
				on_hit_spellcast: [
					{
						spell: 'traveloptics:cursed_revenants',
						chance: 5,
						level: 2,
						free: true
					}
				],	
			}
		}
    },
	'born_in_chaos_v1:dark_metal_ingot': {
		hardness: 8.5,
        density: 5.5,
        flexibility: 4.5,
        durability: 700,
        mining_level: 3, 
        mining_speed: 7,
		groups: ['metal'],
		properties: {}
	},

    // Tier 3: Silver base ___________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
    'iceandfire:silver_ingot': {
        hardness: 7,
        density: 3,
        flexibility: 3,
        durability: 300,
        mining_level: 2,
        mining_speed: 7,
		groups: ['metal'],
    },
	//____
    'soulsweapons:moonstone': {
        hardness: 7.5,
        density: 3,
        flexibility: 3,
        durability: 350,
        mining_level: 2,
        mining_speed: 7,
		groups: ['metal', 'crystal'],
		properties: {
			handheld: {
				on_attack_potion: [
					{
						potion: 'fromtheshadows:heal_block',
						amplifier: 0,
						duration: 40,
						target_self: false
					}
				],	
			}
		}
    },
	'createaddition:electrum_ingot': {
		hardness: 8,
        density: 3,
        flexibility: 3,
        durability: 350,
        mining_level: 2,
        mining_speed: 7,
		groups: ['metal'],
		properties: {
            handheld: {
                on_hit_spellcast: [
                    {
                        spell: 'irons_spellbooks:chain_lightning',
                        chance: '4 + [material.flexibility]*2',
                        level: '1 + floor([material.mining_level]/2)',
                        free: true,
                        equipment_slot: 'hand'
                    }
                ],	
            },
        }
	},


//___________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
    'irons_spellbooks:arcane_ingot': {
        hardness: 8,
        density: 4,
        flexibility: 5,
        durability: 400,
        mining_level: 3,
        mining_speed: 7,
		groups: ['metal'],
		properties: {
			handheld: {
				on_attack_potion: [
					{
						potion: 'kubejs:hexed',
						amplifier: 0,
						duration: 40,
						target_self: false
					}
				],	
			}
		}
    },
	'clanginghowl:extraterrestrial_steel_ingot': {
		hardness: 9,
        density: 5,
        flexibility: 5,
        durability: 400,
        mining_level: 3,
        mining_speed: 7,
		groups: ['metal'],
        properties: {
            handheld: {
                on_hurt_potion: [
                    {
                        potion: 'clanginghowl:neurotoxin',
                        amplifier: 0,
                        duration: 60,
                        target_self: false
                    }
                ],	
            }
        }
	},

//___________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
    'soulsweapons:verglas': {
        hardness: 8.5,
        density: 4.5,
        flexibility: 5,
        durability: 500,
        mining_level: 3, 
        mining_speed: 8,
		groups: ['metal', 'crystal'],
		properties: {
			handheld: {
				on_attack_potion: [
					{
						potion: 'kubejs:hexed',
						amplifier: 1,
						duration: 60,
						target_self: false
					}
				],	
			}
		}
    },
	'soulsweapons:crimson_ingot': {
		hardness: 10,
        density: 4.5,
        flexibility: 5,
        durability: 500,
        mining_level: 3, 
        mining_speed: 8,
		groups: ['metal'],
		properties: {
			handheld: {
				on_attack_potion: [
					{
						potion: 'kubejs:smoldering',
						amplifier: 0,
						duration: 40,
						target_self: false
					}
				],	
			}
		}
	},
//___________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
    'hazennstuff:zenalite_ingot': {
        hardness: 9,
        density: 5,
        flexibility: 5,
        durability: 500,
        mining_level: 3,
        mining_speed: 8,
		groups: ['metal', 'crystal'],
		properties: {
            handheld: {
                on_hit_spellcast: [
                    {
                        spell: 'irons_spellbooks:charge',
                        chance: 15,
                        level: 2,
                        free: true
                    }
                ]
            },
        }
    },
    // Tier 4: Diamond base ___________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

	'minecraft:diamond': {
		hardness: 8.5,
		density: 3.0,
		flexibility: 0,
		durability: 1560,
		mining_level: 3,
		mining_speed: 8,
		groups: ['metal'],
		properties: {},
	},

	'quark:diamond_heart': {
		hardness: 9,
		density: 4,
		flexibility: 3,
		durability: 1700,
		mining_level: 3,
		mining_speed: 9,
		groups: ['metal', 'crystal'],
		properties: {}
	},
	'bonfires:estus_shard': {
		hardness: 9.5,
		density: 4,
		flexibility: 3,
		durability: 1700,
		mining_level: 3,
		mining_speed: 9,
		groups: ['metal', 'crystal'],
		properties: {}
	},

	'soulsweapons:soul_ingot': {
		hardness: 9.5,
		density: 4,
		flexibility: 3,
		durability: 1700,
		mining_level: 3,
		mining_speed: 9,
		groups: ['metal'],
		properties: {
			handheld: {
				on_hit_spellcast: [
					{
						spell: 'traveloptics:despair',
						chance: 15,
						level: 2,
						free: true
					}
				],	
			}
		}
	},

	'iceandfire:ghost_ingot': {
		hardness: 10,
		density: 4.5,
		flexibility: 3,
		durability: 1800,
		mining_level: 3,
		mining_speed: 9,
		groups: ['metal'],
		properties: {
			handheld: {
				on_hit_spellcast: [
					{
						spell: 'irons_spellbooks:raise_dead',
						chance: 5,
						level: 2,
						free: true
					}
				],	
			}
		}
	},
	'clanginghowl:blaze_fuel': {
		hardness: 10.5,
		density: 6,
		flexibility: 3,
		durability: 1800,
		mining_level: 3,
		mining_speed: 9,
		groups: ['metal'],
        properties: {
            handheld: {
                on_attack_potion: [
                    {
                        potion: 'clanginghowl:deep_burn',
                        amplifier: 1,
                        duration: 40,
                        target_self: false
                    }
                ],	
            },
        }
    },

	'eeeabsmobs:ghost_steel_ingot': {
		hardness: 10.5,
		density: 5,
		flexibility: 8,
		durability: 2000,
		mining_level: 3,
		mining_speed: 9,
		groups: ['metal'],
		properties: {
			handheld: {
				on_hit_spellcast: [
					{
						spell: 'traveloptics:despair',
						chance: 25,
						level: 3,
						free: true
					}
				],	
			}
		}
	},
	'alexscaves:pearl': {
		hardness: 7,
		density: 7,
		flexibility: 7,
		durability: 2000,
		mining_level: 4,
		mining_speed: 10,
		groups: ['metal', 'crystal'],
		properties: {
			armor: {
				on_hurt_potion: [
					{
						potion: 'alexsmobs:fleet_footed',
						amplifier: 1,
						duration: 40,
						target_self: true
					}
				],	
			}
		}
	},

	// Tier 5: Netherite base ___________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
	'minecraft:netherite_ingot': {
		hardness: 10,
		density: 4,
		flexibility: 4,
		durability: 2050,
		mining_level: 4,
		mining_speed: 11,
		groups: ['metal', 'crystal', 'netherite', 'smithing'],
		properties: {
			default: {
				fireProof: true
			}
		},
		ignore: true
	},
//___________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
	'rats:oratchalcum_ingot': {
		hardness: 11,
		density: 5,
		flexibility: 5,
		durability: 2250,
		mining_level: 4,
		mining_speed: 11,
		groups: ['metal'],
		properties: {
			armor: {
				on_hurt_potion: [
					{
						potion: 'alexsmobsinteraction:gusting',
						amplifier: 1,
						duration: 40,
						target_self: true
					}
				],
			}
		}
	},
	'iceandfire:sapphire_gem': {
		hardness: 10.5,
		density: 4,
		flexibility: 4,
		durability: 2150,
		mining_level: 4,
		mining_speed: 11,
		groups: ['metal'],
		properties: {
			handheld: {
				on_hit_spellcast: [
					{
						spell: 'traveloptics:flood_slash',
						chance: 40,
						level: 4,
						free: true
					}
				],
			}
		}
	},


	//___________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
	'cataclysm:ancient_metal_ingot': {
		hardness: 12,
		density: 5,
		flexibility: 5,
		durability: 2300,
		mining_level: 4,
		mining_speed: 12,
		groups: ['metal'],
		properties: {
			armor: {
				on_hurt_spellcast: [
					{
						spell: 'traveloptics:summon_desert_dwellers',
						chance: 10,
						level: 4,
						free: true
					}
				],
			}
		}
	},

	'call_of_yucutan:jade': {
		hardness: 11,
		density: 5,
		flexibility: 5,
		durability: 2300,
		mining_level: 4,
		mining_speed: 12,
		groups: ['metal', 'crystal'],
		properties: {
			handheld: {
				on_attack_potion: [
					{
						potion: 'kubejs:pillar_of_the_resounding_earth',
						amplifier: 1,
						duration: 10,
						target_self: true
					}
				],	
			},
		}
	},

	'traveloptics:verdant_spellweave_ingot': {
		hardness: 11.5,
		density: 9,
		flexibility: 9,
		durability: 2300,
		mining_level: 4,
		mining_speed: 12,
		groups: ['metal', 'crystal'],
		properties: {
			handheld: {
				on_hit_spellcast: [
					{
						spell: 'gtbcs_geomancy_plus:chunker',
						chance: 15,
						level: 2,
						free: true
					}
				],	
			},
			armor: {
				on_hurt_potion: [
					{
						potion: 'kubejs:nature_affinity',
						amplifier: 1,
						duration: 60,
						target_self: true
					}
				],	
			}
		}
	},


    'irons_spellbooks:mithril_ingot': {
		hardness: 12,
		density: 9,
		flexibility: 9,
		durability: 2300,
		mining_level: 4,
		mining_speed: 12,
		groups: ['metal', 'crystal'],
		properties: {
			handheld: {
				on_attack_potion: [
					{
						potion: 'irons_spellbooks:charged',
						amplifier: 1,
						duration: 40,
						target_self: true
					}
				],	
			},
		}
	},

    'traveloptics:tectonic_ingot': {
		hardness: 12.5,
		density: 9,
		flexibility: 9,
		durability: 2300,
		mining_level: 4,
		mining_speed: 12,
		groups: ['metal', 'crystal'],
		properties: {
			handheld: {
				on_attack_potion: [
					{
						potion: 'clanginghowl:deep_burn',
						amplifier: 1,
						duration: 40,
						target_self: false
					}
				],	
			},
            armor: {
                on_hurt_spellcast: [
                	{
						spell: 'irons_spellbooks:heat_surge',
						chance: '22 + [material.flexibility]*2',
						level: '1 + floor([material.hardness]/10)',
						free: true,
						equipment_slot: 'armor'
					}
                ]
            }
		}
	},

	//___________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

	'gobber2:gobber2_ingot': {
		hardness: 13.5,
		density: 10,
		flexibility: 10,
		durability: 2500,
		mining_level: 4,
		mining_speed: 13,
		groups: ['metal'],
		properties: {
			handheld: {
				on_attack_potion: [
					{
						potion: 'kubejs:pillar_of_the_resounding_earth',
						amplifier: 2,
						duration: 15,
						target_self: true
					}
				],	
			},
			armor: {
				on_hurt_spellcast: [
					{
						spell: 'gtbcs_geomancy_plus:geo_conductor',
						chance: 15,
						level: 4,
						free: true
					}
				],
			}
		}
	},
	'enigmaticlegacy:etherium_ingot': {
		hardness: 14.5,
		density: 11,
		flexibility: 11,
		durability: 2750,
		mining_level: 4,
		mining_speed: 13,
		groups: ['metal'],
		properties: {
			handheld: {
				on_hit_spellcast: [
					{
						spell: 'traveloptics:tsunami',
						chance: 10,
						level: 2,
						free: true
					}
				],	
			},
			armor: {
				on_hurt_spellcast: [
					{
						spell: 'traveloptics:serpentide',
						chance: 15,
						level: 4,
						free: true
					}
				],	
			}
		}
	},
	'gobber2:gobber2_ingot_nether': {
		hardness: 16,
		density: 12,
		flexibility: 12,
		durability: 3000,
		mining_level: 4,
		mining_speed: 13,
		groups: ['metal'],
		properties: {
			handheld: {
				on_hit_spellcast: [
					{
						spell: 'irons_spellbooks:scorch',
						chance: 10,
						level: 2,
						free: true
					}
				],	
			},
			armor: {
				on_hurt_potion: [
					{
						potion: 'kubejs:burning_judgment',
						amplifier: 3,
						duration: 15,
						target_self: true
					}
				],	
			}
		}
	},
	'gobber2:gobber2_ingot_end': {
		hardness: 18,
		density: 13,
		flexibility: 13,
		durability: 3250,
		mining_level: 4,
		mining_speed: 13,
		groups: ['metal'],
		properties: {
			handheld: {
				on_hit_spellcast: [
					{
						spell: 'traveloptics:despair',
						chance: 20,
						level: 4,
						free: true
					}
				],	
			},
			armor: {
				on_hurt_potion: [
					{
						potion: 'traveloptics:conjure_void_tomes',
						amplifier: 4,
						duration: 15,
						target_self: true
					}
				],	
			}
		}
	},
	//___________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
	'iceandfire:dragonsteel_ice_ingot': {
		hardness: 20,
		density: 15,
		flexibility: 15,
		durability: 3500,
		mining_level: 5,
		mining_speed: 15,
		groups: ['metal', 'crystal'],
		properties: {
			handheld: {
				on_hit_spellcast: [
					{
						spell: 'irons_spellbooks:ray_of_frost',
						chance: 20,
						level: 5,
						free: true
					}
				],	
			},
			armor: {
				on_hurt_spellcast: [
					{
						spell: 'irons_spellbooks:frostwave',
						chance: 25,
						level: 4,
						free: true
					}
				],	
			}
		}
	},
	'iceandfire:dragonsteel_fire_ingot': {
		hardness: 20,
		density: 15,
		flexibility: 15,
		durability: 3500,
		mining_level: 5,
		mining_speed: 15,
		groups: ['metal', 'crystal'],
		properties: {
			handheld: {
				on_hit_spellcast: [
					{
						spell: 'irons_spellbooks:flaming_strike',
						chance: 20,
						level: 5,
						free: true
					}
				],	
			},
			armor: {
				on_hurt_spellcast: [
					{
						spell: 'irons_spellbooks:heat_surge',
						chance: 15,
						level: 4,
						free: true
					}
				],	
			}
		}
	},
	'iceandfire:dragonsteel_lightning_ingot': {
		hardness: 20,
		density: 15,
		flexibility: 15,
		durability: 3500,
		mining_level: 5,
		mining_speed: 15,
		groups: ['metal', 'crystal'],
		properties: {
			handheld: {
				on_hit_spellcast: [
					{
						spell: 'irons_spellbooks:chain_lightning',
						chance: 20,
						level: 5,
						free: true
					}
				],	
			},
			armor: {
				on_hurt_spellcast: [
					{
						spell: 'traveloptics:vortex_of_the_deep',
						chance: 15,
						level: 4,
						free: true
					}
				],	
			}
		}
	},
    //_______ Other Materials ___________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
    'aquamirae:abyssal_amethyst': {
        hardness: 7,
        density: 3,
        flexibility: 2,
        durability: 1250,
        mining_level: 3,
        mining_speed: 8,
        groups: [
            'metal'
        ],
        properties: {
            handheld: {
                on_attack_potion: [
                    {
                        potion: 'traveloptics:abyssal_strike',
                        amplifier: 0,
                        duration: 40,
                        target_self: true
                    }
                ]
            }
        }
    },
    'create:andesite_alloy': {
        hardness: 5,
        density: 3.61,
        flexibility: 3.36,
        durability: 160,
        mining_level: 3,
        mining_speed: 5,
        groups: [
            'metal'
        ],
        properties: {}
    },
    'apotheosis:epic_material': {
        hardness: 8.5,
        density: 2,
        flexibility: 5,
        durability: 1027,
        mining_level: 4,
        mining_speed: 7,
        groups: [
            'metal',
            'crystal'
        ],
        properties: {
            armor: {
                on_hurt_spellcast: [
                    {
                        spell: 'irons_spellbooks:fortify',
                        chance: 10,
                        level: 3,
                        free: true
                    }
                ]
            }
        }
    },
    'apotheosis:mythic_material': {
        hardness: 10,
        density: 3,
        flexibility: 5,
        durability: 2048,
        mining_level: 5,
        mining_speed: 12,
        groups: [
            'metal',
            'crystal'
        ],
        properties: {
            armor: {
                on_hurt_spellcast: [
                    {
                        spell: 'irons_spellbooks:fortify',
                        chance: 15,
                        level: 4,
                        free: true
                    }
                ]
            }
        }
    },
    'apotheosis:rare_material': {
        hardness: 6.5,
        density: 2,
        flexibility: 1,
        durability: 845,
        mining_level: 3,
        mining_speed: 5,
        groups: [
            'metal',
            'crystal'
        ],
        properties: {
            armor: {
                on_hurt_spellcast: [
                    {
                        spell: 'irons_spellbooks:fortify',
                        chance: 7,
                        level: 2,
                        free: true
                    }
                ]
            }
        }
    },
    'apotheosis:uncommon_material': {
        hardness: 4.5,
        density: 5,
        flexibility: 4,
        durability: 350,
        mining_level: 4,
        mining_speed: 8,
        groups: [
            'rope',
            'fabric',
            'fletching'
        ],
        properties: {
            armor: {
                on_hurt_spellcast: [
                    {
                        spell: 'irons_spellbooks:fortify',
                        chance: 5,
                        level: 1,
                        free: true
                    }
                ]
            }
        }
    },
    'alexscaves:archaic_vine': {
        hardness: 4,
        density: 6,
        flexibility: 8,
        durability: 350,
        mining_level: 2,
        mining_speed: 8,
        groups: [
            'rope',
            'fabric'
        ],
        properties: {
            armor: {
                on_hurt_spellcast: [
                    {
                        spell: 'irons_spellbooks:firefly_swarm',
                        chance: 5,
                        level: 2,
                        free: true
                    }
                ]
            },
            handheld: {
                on_hit_spellcast: [
                    {
                        spell: 'irons_spellbooks:earthquake',
                        chance: 2,
                        level: 2,
                        free: true
                    }
                ]
            }
        }
    },
    'alexscaves:azure_neodymium_ingot': {
        hardness: 6.45,
        density: 4,
        flexibility: 3,
        durability: 880,
        mining_level: 3,
        mining_speed: 5,
        groups: [
            'metal'
        ],
        properties: {}
    },
    'alexsmobs:bone_serpent_tooth': {
        hardness: 6,
        density: 7,
        flexibility: 4,
        durability: 400,
        mining_level: 3,
        mining_speed: 8,
        groups: [
            'bone'
        ],
        properties: {
            handheld: {
                on_hit_spellcast: [
                    {
                        spell: 'irons_spellbooks:blood_needles',
                        chance: 3,
                        level: 2,
                        free: true
                    }
                ]
            }
        }
    },
    'alexscaves:caramel': {
        hardness: 1.5,
        density: 1.5,
        flexibility: 2,
        durability: 32,
        mining_level: 0,
        mining_speed: 0,
        groups: [
            'metal'
        ],
        properties: {
            handheld: {
                on_attack_potion: [
                    {
                        potion: 'minecraft:speed',
                        amplifier: 1,
                        duration: 80,
                        target_self: true
                    },
                    {
                        potion: 'minecraft:slowness',
                        amplifier: 2,
                        duration: 60,
                        target_self: false
                    }
                ]
            }
        }
    },
    'alexscaves:corrodent_teeth': {
        hardness: 3,
        density: 9,
        flexibility: 2,
        durability: 350,
        mining_level: 3,
        mining_speed: 8,
        groups: [
            'bone',
            'metal'
        ],
        properties: {
            armor: {
                on_hurt_spellcast: [
                    {
                        spell: 'traveloptics:nullflare',
                        chance: 5,
                        level: 2,
                        free: true
                    }
                ]
            }
        }
    },
    'quark:crab_shell': {
        hardness: 4,
        density: 5,
        flexibility: 3,
        durability: 800,
        mining_level: 6,
        mining_speed: 3,
        groups: [
            'metal',
            'bone'
        ],
        properties: {}
    },
    'irons_spellbooks:dragonskin': {
        hardness: 9,
        density: 9,
        flexibility: 9,
        durability: 3000,
        mining_level: 4,
        mining_speed: 11,
        groups: [
            'fabric',
            'fletching'
        ],
        properties: {}
    },
    'aquamirae:esca': {
        hardness: 2,
        density: 4,
        flexibility: 6,
        durability: 240,
        mining_level: 1,
        mining_speed: 6,
        groups: [
            'fabric',
            'fletching',
            'rope'
        ],
        properties: {
            armor: {
                on_hurt_spellcast: [
                    {
                        spell: 'traveloptics:flood_slash',
                        chance: 2,
                        level: 2,
                        free: true
                    }
                ]
            }
        }
    },
    'farmersdelight:canvas': {
        hardness: 3,
        density: 6,
        flexibility: 6,
        durability: 225,
        mining_level: 2,
        mining_speed: 5,
        groups: [
            'fabric',
            'rope',
            'fletching'
        ],
        properties: {}
    },
    'farmersdelight:rope': {
        hardness: 4,
        density: 5,
        flexibility: 8,
        durability: 250,
        mining_level: 2,
        mining_speed: 6,
        groups: [
            'rope'
        ],
        properties: {}
    },
    'farmersdelight:straw': {
        hardness: 2,
        density: 4,
        flexibility: 4,
        durability: 150,
        mining_level: 1,
        mining_speed: 6,
        groups: [
            'rope',
            'fletching'
        ],
        properties: {}
    },
    'alexscaves:ferrouslime_ball': {
        hardness: 6,
        density: 6,
        flexibility: 6,
        durability: 150,
        mining_level: 2,
        mining_speed: 14,
        groups: [
            'metal'
        ],
        properties: {
            handheld: {
                on_hit_spellcast: [
                    {
                        spell: 'irons_spellbooks:chain_lightning',
                        chance: 5,
                        level: 2,
                        free: true
                    }
                ]
            }
        }
    },
    'irons_spellbooks:frosted_helve': {
        hardness: 6,
        density: 5,
        flexibility: 6,
        durability: 300,
        mining_level: 3,
        mining_speed: 8,
        groups: [
            'metal',
            'rod'
        ],
        properties: {
            armor: {
                on_hurt_spellcast: [
                    {
                        spell: 'traveloptics:cursed_revenants',
                        chance: 5,
                        level: 2,
                        free: true
                    }
                ]
            }
        }
    },
    'irons_spellbooks:frozen_bone': {
        hardness: 5.5,
        density: 3,
        flexibility: 3,
        durability: 175,
        mining_level: 2,
        mining_speed: 8,
        groups: [
            'bone'
        ],
        properties: {
            armor: {
                on_hurt_spellcast: [
                    {
                        spell: 'irons_spellbooks:frostwave',
                        chance: 5,
                        level: 2,
                        free: true
                    }
                ]
            }
        }
    },
    'irons_spellbooks:hogskin': {
        hardness: 2,
        density: 2,
        flexibility: 6,
        durability: 380,
        mining_level: 3,
        mining_speed: 6,
        groups: [
            'fabric',
            'fletching'
        ],
        properties: {}
    },
    'iceandfire:dragonscales_amythest': {
        hardness: 6,
        density: 3,
        flexibility: 2,
        durability: 500,
        mining_level: 3,
        mining_speed: 6,
        groups: [
            'bone'
        ],
        properties: {
            handheld: {
                on_hit_spellcast: [
                    {
                        spell: 'irons_spellbooks:echoing_strikes',
                        chance: 5,
                        level: 1,
                        free: true
                    }
                ]
            },
            armor: {
                on_hurt_spellcast: [
                    {
                        spell: 'traveloptics:conjure_void_tomes',
                        chance: 3,
                        level: 1,
                        free: true
                    }
                ]
            }
        }
    },
    'iceandfire:amphithere_feather': {
        hardness: 1,
        density: 1,
        flexibility: 10,
        durability: 50,
        mining_level: 1,
        mining_speed: 2,
        groups: [
            'fletching'
        ],
        properties: {
            handheld: {
                on_hit_spellcast: [
                    {
                        spell: 'irons_spellbooks:slow',
                        chance: 5,
                        level: 2,
                        free: true
                    }
                ]
            }
        }
    },
    'iceandfire:dragonscales_black': {
        hardness: 6,
        density: 3,
        flexibility: 2,
        durability: 500,
        mining_level: 3,
        mining_speed: 6,
        groups: [
            'bone'
        ],
        properties: {
            armor: {
                on_hurt_potion: [
                    {
                        potion: 'minecraft:resistance',
                        amplifier: 1,
                        duration: 40,
                        target_self: true
                    },
                    {
                        potion: 'minecraft:blindness',
                        amplifier: 0,
                        duration: 40,
                        target_self: true
                    }
                ]
            },
            handheld: {
                on_attack_potion: [
                    {
                        potion: 'minecraft:darkness',
                        amplifier: 0,
                        duration: 40,
                        target_self: false
                    },
                    {
                        potion: 'minecraft:slowness',
                        amplifier: 0,
                        duration: 40,
                        target_self: false
                    }
                ]
            }
        }
    },
    'iceandfire:dragonscales_blue': {
        hardness: 6,
        density: 3,
        flexibility: 2,
        durability: 500,
        mining_level: 3,
        mining_speed: 6,
        groups: [
            'bone'
        ],
        properties: {
            armor: {
                on_hurt_potion: [
                    {
                        potion: 'minecraft:water_breathing',
                        amplifier: 0,
                        duration: 100,
                        target_self: true
                    }
                ]
            },
            handheld: {
                on_attack_potion: [
                    {
                        potion: 'cofh_core:chilled',
                        amplifier: 1,
                        duration: 40,
                        target_self: false
                    }
                ]
            }
        }
    },
    'iceandfire:sea_serpent_scales_blue': {
        hardness: 4,
        density: 1,
        flexibility: 2,
        durability: 450,
        mining_level: 2,
        mining_speed: 6,
        groups: [
            'bone'
        ],
        properties: {
            armor: {
                on_hurt_potion: [
                    {
                        potion: 'minecraft:water_breathing',
                        amplifier: 0,
                        duration: 80,
                        target_self: true
                    }
                ]
            },
            handheld: {
                on_attack_potion: [
                    {
                        potion: 'cofh_core:chilled',
                        amplifier: 0,
                        duration: 40,
                        target_self: false
                    }
                ]
            }
        }
    },
    'iceandfire:dragonscales_bronze': {
        hardness: 6,
        density: 3,
        flexibility: 2,
        durability: 500,
        mining_level: 3,
        mining_speed: 6,
        groups: [
            'bone'
        ],
        properties: {
            armor: {
                on_hurt_potion: [
                    {
                        potion: 'minecraft:fire_resistance',
                        amplifier: 0,
                        duration: 60,
                        target_self: true
                    }
                ]
            },
            handheld: {
                on_attack_potion: [
                    {
                        potion: 'irons_spellbooks:rend',
                        amplifier: 0,
                        duration: 30,
                        target_self: false
                    }
                ]
            }
        }
    },
    'iceandfire:sea_serpent_scales_bronze': {
        hardness: 4,
        density: 1,
        flexibility: 2,
        durability: 450,
        mining_level: 2,
        mining_speed: 6,
        groups: [
            'bone'
        ],
        properties: {
            handheld: {
                on_attack_potion: [
                    {
                        potion: 'irons_spellbooks:rend',
                        amplifier: 0,
                        duration: 30,
                        target_self: false
                    }
                ]
            }
        }
    },
    'iceandfire:cockatrice_eye': {
        hardness: 5,
        density: 9,
        flexibility: 9,
        durability: 150,
        mining_level: 2,
        mining_speed: 7,
        groups: [
            'fabric',
            'fletching'
        ],
        properties: {
            armor: {
                on_hurt_potion: [
                    {
                        potion: 'minecraft:wither',
                        amplifier: 3,
                        duration: 80,
                        target_self: false
                    }
                ]
            },
            handheld: {
                on_hit_spellcast: [
                    {
                        spell: 'irons_spellbooks:wither_skull',
                        chance: 5,
                        level: 2,
                        free: true
                    }
                ]
            }
        }
    },
    'iceandfire:dragonscales_copper': {
        hardness: 6,
        density: 3,
        flexibility: 2,
        durability: 500,
        mining_level: 3,
        mining_speed: 6,
        groups: [
            'bone'
        ],
        properties: {
            armor: {
                on_hurt_potion: [
                    {
                        potion: 'minecraft:saturation',
                        amplifier: 0,
                        duration: 60,
                        target_self: true
                    }
                ]
            }
        }
    },
    'iceandfire:sea_serpent_scales_deepblue': {
        hardness: 4,
        density: 1,
        flexibility: 2,
        durability: 450,
        mining_level: 2,
        mining_speed: 6,
        groups: [
            'bone'
        ],
        properties: {
            armor: {
                on_hurt_potion: [
                    {
                        potion: 'minecraft:speed',
                        amplifier: 0,
                        duration: 40,
                        target_self: true
                    },
                    {
                        potion: 'minecraft:jump_boost',
                        amplifier: 0,
                        duration: 40,
                        target_self: true
                    }
                ]
            },
            handheld: {
                on_attack_potion: [
                    {
                        potion: 'minecraft:mining_fatigue',
                        amplifier: 0,
                        duration: 25,
                        target_self: false
                    }
                ]
            }
        }
    },
    'iceandfire:myrmex_desert_chitin': {
        hardness: 7,
        density: 10,
        flexibility: 2,
        durability: 250,
        mining_level: 3,
        mining_speed: 5,
        groups: [
            'bone'
        ],
        properties: {
            handheld: {
                on_attack_potion: [
                    {
                        potion: 'runiclib:lesser_strength',
                        amplifier: 0,
                        duration: 40,
                        target_self: true
                    }
                ]
            }
        }
    },
    'iceandfire:dread_shard': {
        hardness: 5,
        density: 5,
        flexibility: 4,
        durability: 400,
        mining_level: 4,
        mining_speed: 7,
        groups: [
            'crystal'
        ],
        properties: {
            handheld: {
                on_attack_potion: [
                    {
                        potion: 'minecraft:hunger',
                        amplifier: 1,
                        duration: 60,
                        target_self: true
                    },
                    {
                        potion: 'minecraft:weakness',
                        amplifier: 2,
                        duration: 100,
                        target_self: false
                    }
                ]
            }
        }
    },
    'iceandfire:dragonscales_electric': {
        hardness: 6,
        density: 3,
        flexibility: 2,
        durability: 500,
        mining_level: 3,
        mining_speed: 6,
        groups: [
            'bone'
        ],
        properties: {
            armor: {
                on_hurt_potion: [
                    {
                        potion: 'cofh_core:lightning_resistance',
                        amplifier: 0,
                        duration: 60,
                        target_self: true
                    }
                ]
            },
            handheld: {
                on_attack_potion: [
                    {
                        potion: 'minecraft:mining_fatigue',
                        amplifier: 0,
                        duration: 40,
                        target_self: false
                    }
                ]
            }
        }
    },
    'iceandfire:dragonscales_gray': {
        hardness: 6,
        density: 3,
        flexibility: 2,
        durability: 500,
        mining_level: 3,
        mining_speed: 6,
        groups: [
            'bone'
        ],
        properties: {
            armor: {
                on_hurt_spellcast: [
                    {
                        spell: 'irons_spellbooks:charge',
                        chance: 2,
                        level: 1,
                        free: true
                    }
                ]
            },
            handheld: {
                on_attack_potion: [
                    {
                        potion: 'minecraft:slowness',
                        amplifier: 0,
                        duration: 15,
                        target_self: false
                    }
                ]
            }
        }
    },
    'iceandfire:dragonscales_green': {
        hardness: 6,
        density: 3,
        flexibility: 2,
        durability: 500,
        mining_level: 3,
        mining_speed: 6,
        groups: [
            'bone'
        ],
        properties: {
            armor: {
                on_hurt_spellcast: [
                    {
                        spell: 'irons_spellbooks:acid_orb',
                        chance: 5,
                        level: 1,
                        free: true
                    }
                ]
            },
            handheld: {
                on_attack_potion: [
                    {
                        potion: 'runiclib:venom',
                        amplifier: 0,
                        duration: 40,
                        target_self: false
                    }
                ]
            }
        }
    },
    'iceandfire:sea_serpent_scales_green': {
        hardness: 4,
        density: 1,
        flexibility: 2,
        durability: 450,
        mining_level: 2,
        mining_speed: 6,
        groups: [
            'bone'
        ],
        properties: {
            armor: {
                on_hurt_spellcast: [
                    {
                        spell: 'irons_spellbooks:acid_orb',
                        chance: 3,
                        level: 1,
                        free: true
                    }
                ]
            },
            handheld: {
                on_attack_potion: [
                    {
                        potion: 'runiclib:venom',
                        amplifier: 0,
                        duration: 30,
                        target_self: false
                    }
                ]
            }
        }
    },
    'iceandfire:hippogryph_talon': {
        hardness: 5,
        density: 5,
        flexibility: 2,
        durability: 600,
        mining_level: 3,
        mining_speed: 5,
        groups: [
            'bone'
        ],
        properties: {
            armor: {
                on_hurt_spellcast: [
                    {
                        spell: 'irons_spellbooks:gust',
                        chance: 5,
                        level: 2,
                        free: true
                    }
                ]
            }
        }
    },
    'iceandfire:myrmex_jungle_chitin': {
        hardness: 7,
        density: 10,
        flexibility: 2,
        durability: 250,
        mining_level: 3,
        mining_speed: 5,
        groups: [
            'bone'
        ],
        properties: {
            handheld: {
                on_attack_potion: [
                    {
                        potion: 'runiclib:lesser_strength',
                        amplifier: 0,
                        duration: 40,
                        target_self: true
                    }
                ]
            }
        }
    },
    'iceandfire:sea_serpent_scales_purple': {
        hardness: 4,
        density: 1,
        flexibility: 2,
        durability: 450,
        mining_level: 2,
        mining_speed: 6,
        groups: [
            'bone'
        ],
        properties: {
            armor: {
                on_hurt_potion: [
                    {
                        potion: 'minecraft:regeneration',
                        amplifier: 0,
                        duration: 20,
                        target_self: true
                    },
                    {
                        potion: 'minecraft:night_vision',
                        amplifier: 0,
                        duration: 40,
                        target_self: true
                    }
                ]
            },
            handheld: {
                on_attack_potion: [
                    {
                        potion: 'minecraft:glowing',
                        amplifier: 0,
                        duration: 30,
                        target_self: false
                    },
                    {
                        potion: 'minecraft:hunger',
                        amplifier: 0,
                        duration: 10,
                        target_self: false
                    }
                ]
            }
        }
    },
    'iceandfire:deathworm_chitin_red': {
        hardness: 6,
        density: 8,
        flexibility: 1,
        durability: 200,
        mining_level: 2,
        mining_speed: 4,
        groups: [
            'bone'
        ],
        properties: {}
    },
    'iceandfire:dragonscales_red': {
        hardness: 6,
        density: 3,
        flexibility: 2,
        durability: 500,
        mining_level: 3,
        mining_speed: 6,
        groups: [
            'bone'
        ],
        properties: {
            armor: {
                on_hurt_spellcast: [
                    {
                        spell: 'irons_spellbooks:heat_surge',
                        chance: 5,
                        level: 2,
                        free: true
                    }
                ]
            },
            handheld: {
                on_attack_potion: [
                    {
                        potion: 'kubejs:smoldering',
                        amplifier: 0,
                        duration: 30,
                        target_self: false
                    }
                ]
            }
        }
    },
    'iceandfire:sea_serpent_scales_red': {
        hardness: 4,
        density: 1,
        flexibility: 2,
        durability: 450,
        mining_level: 2,
        mining_speed: 6,
        groups: [
            'bone'
        ],
        properties: {
            armor: {
                on_hurt_potion: [
                    {
                        potion: 'runiclib:burning_thorns',
                        amplifier: 0,
                        duration: 30,
                        target_self: true
                    }
                ]
            }
        }
    },
    'iceandfire:dragonscales_sapphire': {
        hardness: 6,
        density: 3,
        flexibility: 2,
        durability: 500,
        mining_level: 3,
        mining_speed: 6,
        groups: [
            'bone'
        ],
        properties: {
            armor: {
                on_hurt_spellcast: [
                    {
                        spell: 'traveloptics:hydroshot',
                        chance: 8,
                        level: 1,
                        free: true
                    }
                ]
            }
        }
    },
    'iceandfire:sapphire_gem': {
        hardness: 9.5,
        density: 4,
        flexibility: 4,
        durability: 2150,
        mining_level: 4,
        mining_speed: 11,
        groups: [
            'metal'
        ],
        properties: {
            handheld: {
                on_hit_spellcast: [
                    {
                        spell: 'traveloptics:flood_slash',
                        chance: 40,
                        level: 4,
                        free: true
                    }
                ]
            }
        }
    },
    'iceandfire:sea_serpent_fang': {
        hardness: 5,
        density: 3,
        flexibility: 3,
        durability: 300,
        mining_level: 3,
        mining_speed: 6,
        groups: [
            'bone'
        ],
        properties: {
            handheld: {
                on_attack_potion: [
                    {
                        potion: 'runiclib:venom',
                        amplifier: 1,
                        duration: 60,
                        target_self: false
                    }
                ]
            }
        }
    },
    'iceandfire:dragonscales_silver': {
        hardness: 6,
        density: 3,
        flexibility: 2,
        durability: 500,
        mining_level: 3,
        mining_speed: 6,
        groups: [
            'bone'
        ],
        properties: {
            armor: {
                on_hurt_spellcast: [
                    {
                        spell: 'irons_spellbooks:fang_ward',
                        chance: 5,
                        level: 1,
                        free: true
                    }
                ]
            },
            handheld: {
                on_attack_potion: [
                    {
                        potion: 'minecraft:weakness',
                        amplifier: 0,
                        duration: 40,
                        target_self: false
                    }
                ]
            }
        }
    },
    'iceandfire:stymphalian_bird_feather': {
        hardness: 4,
        density: 4,
        flexibility: 4,
        durability: 100,
        mining_level: 2,
        mining_speed: 6,
        groups: [
            'fletching'
        ],
        properties: {
            handheld: {
                on_attack_potion: [
                    {
                        potion: 'attributeslib:bleeding',
                        amplifier: 2,
                        duration: 80,
                        target_self: false
                    }
                ]
            }
        }
    },
    'iceandfire:sea_serpent_scales_teal': {
        hardness: 4,
        density: 1,
        flexibility: 2,
        durability: 450,
        mining_level: 2,
        mining_speed: 6,
        groups: [
            'bone'
        ],
        properties: {
            armor: {
                on_hurt_potion: [
                    {
                        potion: 'minecraft:dolphins_grace',
                        amplifier: 0,
                        duration: 50,
                        target_self: true
                    }
                ]
            }
        }
    },
    'iceandfire:deathworm_chitin_white': {
        hardness: 6,
        density: 8,
        flexibility: 1,
        durability: 200,
        mining_level: 2,
        mining_speed: 4,
        groups: [
            'bone'
        ],
        properties: {}
    },
    'iceandfire:dragonscales_white': {
        hardness: 6,
        density: 3,
        flexibility: 2,
        durability: 500,
        mining_level: 3,
        mining_speed: 6,
        groups: [
            'bone'
        ],
        properties: {
            armor: {
                on_hurt_potion: [
                    {
                        potion: 'minecraft:slow_falling',
                        amplifier: 0,
                        duration: 30,
                        target_self: true
                    },
                    {
                        potion: 'minecraft:speed',
                        amplifier: 0,
                        duration: 40,
                        target_self: true
                    }
                ]
            }
        }
    },
    'iceandfire:deathworm_chitin_yellow': {
        hardness: 6,
        density: 8,
        flexibility: 1,
        durability: 200,
        mining_level: 2,
        mining_speed: 4,
        groups: [
            'bone'
        ],
        properties: {}
    },
    'eeeabsmobs:immortal_ingot': {
        hardness: 6.5,
        density: 4.5,
        flexibility: 3.5,
        durability: 500,
        mining_level: 3,
        mining_speed: 7,
        groups: [
            'metal'
        ],
        properties: {
            armor: {
                on_hurt_spellcast: [
                    {
                        spell: 'irons_spellbooks:oakskin',
                        chance: 5,
                        level: 2,
                        free: true
                    }
                ]
            }
        }
    },
    'call_of_yucutan:mystic_vine': {
        hardness: 4,
        density: 6,
        flexibility: 8,
        durability: 360,
        mining_level: 2,
        mining_speed: 3,
        groups: [
            'rope',
            'fabric'
        ],
        properties: {
            armor: {
                on_hurt_spellcast: [
                    {
                        spell: 'irons_spellbooks:oakskin',
                        chance: 2,
                        level: 1,
                        free: true
                    }
                ]
            },
            handheld: {
                on_hurt_spellcast: [
                    {
                        spell: 'irons_spellbooks:poison_arrow',
                        chance: 3,
                        level: 2,
                        free: true
                    }
                ]
            }
        }
    },
    'minecraft:quartz': {
        hardness: 5.0,
        density: 1.5,
        flexibility: 0,
        durability: 1,
        mining_level: 0,
        mining_speed: 5,
        groups: [
            'crystal'
        ],
        properties: {
            handheld: {
                durability: {
                    operation: '**',
                    value: '0.6'
                },
                fracturing: '5'
            }
        }
    },
    'alexscaves:ominous_catalyst': {
        hardness: 12,
        density: 3,
        flexibility: 3,
        durability: 1850,
        mining_level: 4,
        mining_speed: 9,
        groups: [
            'metal'
        ],
        properties: {}
    },
    'alexscaves:polymer_plate': {
        hardness: 5,
        density: 8,
        flexibility: 8,
        durability: 300,
        mining_level: 2,
        mining_speed: 5,
        groups: [
            'metal',
            'fabric'
        ],
        properties: {}
    },
    'alexscaves:pure_darkness': {
        hardness: 9,
        density: 11,
        flexibility: 10,
        durability: 1000,
        mining_level: 3,
        mining_speed: 12,
        groups: [
            'metal',
            'fabric'
        ],
        properties: {}
    },
    'quark:rope': {
        hardness: 4,
        density: 5,
        flexibility: 8,
        durability: 250,
        mining_level: 2,
        mining_speed: 6,
        groups: [
            'rope'
        ],
        properties: {}
    },
    'alexscaves:scarlet_neodymium_ingot': {
        hardness: 6,
        density: 4,
        flexibility: 3,
        durability: 880,
        mining_level: 3,
        mining_speed: 5,
        groups: [
            'metal'
        ],
        properties: {}
    },
    'alexscaves:shadow_silk': {
        hardness: 2,
        density: 8,
        flexibility: 15,
        durability: 1000,
        mining_level: 3,
        mining_speed: 10,
        groups: [
            'fabric',
            'rope'
        ],
        properties: {
            armor: {
                on_hurt_potion: [
                    {
                        potion: 'irons_spellbooks:evasion',
                        amplifier: 0,
                        duration: 40,
                        target_self: true
                    }
                ]
            }
        }
    },
    'alexsmobs:shark_tooth': {
        hardness: 5,
        density: 9,
        flexibility: 5,
        durability: 100,
        mining_level: 3,
        mining_speed: 7,
        groups: [
            'bone'
        ],
        properties: {
            handheld: {
                on_attack_potion: [
                    {
                        potion: 'attributeslib:bleeding',
                        amplifier: 1,
                        duration: 80,
                        target_self: false
                    }
                ]
            }
        }
    },
    'iceandfire:shiny_scales': {
        hardness: 6.5,
        density: 5,
        flexibility: 3,
        durability: 600,
        mining_level: 2,
        mining_speed: 8,
        groups: [
            'metal'
        ],
        properties: {
            armor: {
                on_hurt_potion: [
                    {
                        potion: 'alexscaves:deepsight',
                        amplifier: 2,
                        duration: 200,
                        target_self: true
                    }
                ]
            }
        }
    },
    'aquamirae:ship_graveyard_echo': {
        hardness: 7,
        density: 6,
        flexibility: 3,
        durability: 999,
        mining_level: 4,
        mining_speed: 10,
        groups: [
            'metal'
        ],
        properties: {
            armor: {
                on_hurt_potion: [
                    {
                        potion: 'soulsweapons:disable_heal',
                        amplifier: 0,
                        duration: 80,
                        target_self: false
                    }
                ]
            }
        }
    },
    'iceandfire:summoning_crystal_fire': {
        hardness: 6.5,
        density: 6,
        flexibility: 4,
        durability: 750,
        mining_level: 3,
        mining_speed: 7,
        groups: [
            'crystal'
        ],
        properties: {
            armor: {
                on_hurt_spellcast: [
                    {
                        spell: 'irons_spellbooks:fireball',
                        chance: 2,
                        level: 2,
                        free: true
                    }
                ]
            },
            handheld: {
                on_hit_spellcast: [
                    {
                        spell: 'irons_spellbooks:scorch',
                        chance: 2,
                        level: 2,
                        free: true
                    }
                ]
            }
        }
    },
    'iceandfire:summoning_crystal_ice': {
        hardness: 6.5,
        density: 6,
        flexibility: 4,
        durability: 750,
        mining_level: 3,
        mining_speed: 7,
        groups: [
            'crystal'
        ],
        properties: {
            armor: {
                on_hurt_spellcast: [
                    {
                        spell: 'irons_spellbooks:ice_block',
                        chance: 2,
                        level: 2,
                        free: true
                    }
                ]
            },
            handheld: {
                on_hit_spellcast: [
                    {
                        spell: 'irons_spellbooks:ray_of_frost',
                        chance: 3,
                        level: 2,
                        free: true
                    }
                ]
            }
        }
    },
    'iceandfire:summoning_crystal_lightning': {
        hardness: 6.5,
        density: 6,
        flexibility: 4,
        durability: 750,
        mining_level: 3,
        mining_speed: 7,
        groups: [
            'crystal'
        ],
        properties: {
            armor: {
                on_hurt_spellcast: [
                    {
                        spell: 'irons_spellbooks:thunderstorm',
                        chance: 2,
                        level: 2,
                        free: true
                    }
                ]
            },
            handheld: {
                on_hit_spellcast: [
                    {
                        spell: 'irons_spellbooks:lightning_lance',
                        chance: 2,
                        level: 2,
                        free: true
                    }
                ]
            }
        }
    },
    'supplementaries:flax': {
        hardness: 2,
        density: 1,
        flexibility: 10,
        durability: 100,
        mining_level: 1,
        mining_speed: 5,
        groups: [
            'fiber',
            'rope'
        ],
        properties: {}
    },
    'alexscaves:sweet_tooth': {
        hardness: 10,
        density: 8,
        flexibility: 5,
        durability: 750,
        mining_level: 4,
        mining_speed: 13,
        groups: [
            'bone'
        ],
        properties: {}
    },
    'minecraft:twisting_vines': {
        hardness: 1,
        density: 0.5,
        flexibility: 7.5,
        durability: 50,
        mining_level: 0,
        mining_speed: 0,
        groups: [
            'rope',
            'fabric'
        ],
        properties: {
            handheld: {
                on_hurt_spellcast: [
                    {
                        spell: 'irons_spellbooks:root',
                        chance: 5,
                        level: 2,
                        free: true
                    }
                ]
            },
            armor: {
                on_hurt_spellcast: [
                    {
                        spell: 'irons_spellbooks:root',
                        chance: 5,
                        level: 2,
                        free: true
                    }
                ]
            }
        }
    },
    'alexscaves:uranium': {
        hardness: 1.5,
        density: 1.5,
        flexibility: 3,
        durability: 4500,
        mining_level: 4,
        mining_speed: 7,
        groups: [
            'metal'
        ],
        properties: {}
    },
    'alexscaves:uranium_rod': {
        hardness: 5.45,
        density: 18,
        flexibility: 5,
        durability: 890,
        mining_level: 4,
        mining_speed: 6,
        groups: [
            'rod',
            'metal'
        ],
        properties: {}
    },
    'alexsmobs:void_worm_mandible': {
        hardness: 10.5,
        density: 3.2,
        flexibility: 3.04,
        durability: 1800,
        mining_level: 4,
        mining_speed: 10,
        groups: [
            'metal'
        ],
        properties: {}
    },
    'minecraft:weeping_vines': {
        hardness: 1,
        density: 0.5,
        flexibility: 8,
        durability: 50,
        mining_level: 0,
        mining_speed: 0,
        groups: [
            'rope',
            'fabric'
        ],
        properties: {
            handheld: {
                on_hurt_spellcast: [
                    {
                        spell: 'irons_spellbooks:stomp',
                        chance: 5,
                        level: 2,
                        free: true
                    }
                ]
            },
            armor: {
                on_hurt_spellcast: [
                    {
                        spell: 'irons_spellbooks:stomp',
                        chance: 5,
                        level: 2,
                        free: true
                    }
                ]
            }
        }
    },
    'iceandfire:witherbone': {
        hardness: 6,
        density: 3,
        flexibility: 4,
        durability: 700,
        mining_level: 4,
        mining_speed: 8,
        groups: [
            'bone'
        ],
        properties: {
            handheld: {
                on_attack_potion: [
                    {
                        potion: 'minecraft:wither',
                        amplifier: 3,
                        duration: 60,
                        target_self: false
                    },
                    {
                        potion: 'minecraft:wither',
                        amplifier: 0,
                        duration: 60,
                        target_self: true
                    }
                ]
            }
        }
    },
    'twilightforest:fiery_ingot': {
        hardness: 6,
        density: 3.5,
        flexibility: 1,
        durability: 250,
        mining_level: 2,
        mining_speed: 6,
        groups: [
            'metal'
        ],
        properties: {
			handheld: {
				on_attack_potion: [
					{
						potion: 'kubejs:smoldering',
						amplifier: 0,
						duration: 40,
						target_self: false
					}
				],	
			}
		}
    },
    'minecraft:bone': {
        hardness: 5,
        density: 2,
        flexibility: 1,
        durability: 150,
        mining_level: 1,
        mining_speed: 4,
        groups: [
            'bone'
        ],
    },
    'call_of_yucutan:elder_bone': {
        hardness: 5,
        density: 3,
        flexibility: 2,
        durability: 200,
        mining_level: 1,
        mining_speed: 2,
        groups: [
            'bone'
        ],
    },
    'alexscaves:heavy_bone': {
        hardness: 6,
        density: 6,
        flexibility: 0,
        durability: 600,
        mining_level: 5,
        mining_speed: 2,
        groups: [
            'bone'
        ],
    },
    'eeeabsmobs:immortal_bone': {
        hardness: 1,
        density: 1,
        flexibility: 1,
        durability: 1000,
        mining_level: 1,
        mining_speed: 1,
        groups: [
            'bone'
        ],
    },
    'block_factorys_bosses:dragon_bone': {
        hardness: 3,
        density: 3,
        flexibility: 4,
        durability: 600,
        mining_level: 5,
        mining_speed: 2,
        groups: [
            'bone'
        ],
        properties: {
            handheld: {
                on_hit_spellcast: [
                    {
                        spell: 'traveloptics:blood_howl',
                        chance: 10,
                        level: 2,
                        free: true
                    }
                ]
            }
        }
    },
    'born_in_chaos_v1:bone_handle': {
        hardness: 5,
        density: 2,
        flexibility: 1,
        durability: 150,
        mining_level: 1,
        mining_speed: 4,
        groups: [
            'bone'
        ],
        properties: {
            handheld: {
                on_attack_potion: [
                    {
                        potion: 'minecraft:blindness',
                        amplifier: 0,
                        duration: 40,
                        target_self: false
                    }
                ]
            }
        },
    },
    'born_in_chaos_v1:lifestealer_bone': {
        hardness: 4,
        density: 4,
        flexibility: 4,
        durability: 300,
        mining_level: 1,
        mining_speed: 4,
        groups: [
            'bone'
        ],
        properties: {
            handheld: {
                on_attack_potion: [
                    {
                        potion: 'minecraft:blindness',
                        amplifier: 0,
                        duration: 20,
                        target_self: false
                    }
                ]
            }
        },
    },
    'cataclysm:koboleton_bone': {
        hardness: 1,
        density: 1,
        flexibility: 1,
        durability: 200,
        mining_level: 1,
        mining_speed: 1,
        groups: [
            'bone'
        ],
        properties: {
            handheld: {
                on_attack_potion: [
                    {
                        potion: 'kubejs:plunder',
                        amplifier: 0,
                        duration: 40,
                        target_self: true
                    }
                ]
            }
        },
    },

    'irons_spellbooks:magic_cloth': {
        hardness: 2,
        density: 2,
        flexibility: 7,
        durability: 500,
        mining_level: 1,
        mining_speed: 1,
        groups: [
            'fabric',
            'fletching'
        ],
        properties: {
            handheld: {
                on_attack_potion: [
                    {
                        potion: 'irons_spellbooks:instant_mana',
                        amplifier: 0,
                        duration: 2,
                        target_self: true
                    }
                ]
            }
        }
    },
    'traveloptics:darkness_cloth': {
        hardness: 2,
        density: 2,
        flexibility: 10,
        durability: 1000,
        mining_level: 1,
        mining_speed: 1,
        groups: [
            'fabric',
            'fletching'
        ],
        properties: {
            armor: {
                on_attack_potion: [
                    {
                        potion: 'irons_spellbooks:planar_sight',
                        amplifier: 0,
                        duration: 60,
                        target_self: true
                    }
                ]
            }
        }
    },
    'fromtheshadows:suspicious_cloth': {
        hardness: 1,
        density: 1,
        flexibility: 8,
        durability: 400,
        mining_level: 1,
        mining_speed: 1,
        groups: [
            'fabric',
            'fletching'
        ],
        properties: {
            handheld: {
                on_attack_potion: [
                    {
                        potion: 'fromtheshadows:plague',
                        amplifier: 1,
                        duration: 60,
                        target_self: false
                    }
                ]
            }
        }
    },
    'irons_spellbooks:divine_pearl': {
        hardness: 2,
        density: 8,
        flexibility: 1,
        durability: 200,
        mining_level: 1,
        mining_speed: 1,
        groups: ['metal', 'crystal'],
        properties: {
            handheld: {
                on_attack_potion: [
                    {
                        potion: 'irons_spellbooks:instant_mana',
                        amplifier: 0,
                        duration: 1,
                        target_self: true
                    }
                ]
            }
        }
    },
    'irons_spellbooks:energized_core': {
        hardness: 1,
        density: 8,
        flexibility: 1,
        durability: 500,
        mining_level: 1,
        mining_speed: 1,
        groups: ['metal', 'crystal'],
		properties: {
            handheld: {
                on_hit_spellcast: [
                    {
                        spell: 'irons_spellbooks:charge',
                        chance: 15,
                        level: 1,
                        free: true
                    }
                ]
            },
        }
    },
    'traveloptics:resonant_scrap': {
        hardness: 1,
        density: 8,
        flexibility: 1,
        durability: 1000,
        mining_level: 2,
        mining_speed: 11,
        groups: ['metal', 'crystal'],
        properties: {}
    },
    'traveloptics:hullbreaker_scales': {
        hardness: 3,
        density: 6,
        flexibility: 3,
        durability: 400,
        mining_level: 2,
        mining_speed: 6,
        groups: ['metal', 'crystal', 'bone'],
        properties: {
            handheld: {
                on_attack_potion: [
                    {
                        potion: 'kubejs:aqua_affinity',
                        amplifier: 0,
                        duration: 60,
                        target_self: true
                    }
                ]
            }
        }
    },

    'galosphere:glinted_allurite_cluster': {
        hardness: 4,
        density: 4,
        flexibility: 5,
        durability: 450,
        mining_level: 2,
        mining_speed: 7,
        groups: [
            'metal', 'crystal'
        ],
        properties: {
            handheld: {
                on_attack_potion: [
                    {
                        potion: 'kubejs:evocation_affinity',
                        amplifier: 1,
                        duration: 60,
                        target_self: true
                    }
                ]
            }
        }
    },
    'galosphere:allurite_cluster': {
        hardness: 3,
        density: 3,
        flexibility: 5,
        durability: 400,
        mining_level: 2,
        mining_speed: 6,
        groups: ['metal', 'crystal'],
        properties: {
            handheld: {
                on_attack_potion: [
                    {
                        potion: 'kubejs:evocation_affinity',
                        amplifier: 0,
                        duration: 60,
                        target_self: true
                    }
                ]
            }
        }
    },
    'galosphere:allurite_shard': {        
        hardness: 2.5,
        density: 2.5,
        flexibility: 4,
        durability: 350,
        mining_level: 2,
        mining_speed: 5,
        groups: ['metal', 'crystal'],
        properties: {
            handheld: {
                on_attack_potion: [
                    {
                        potion: 'kubejs:evocation_affinity',
                        amplifier: 0,
                        duration: 40,
                        target_self: true
                    }
                ]
            }
        }
    },
    'galosphere:lumiere_shard': {
        hardness: 2.5,
        density: 2.5,
        flexibility: 4,
        durability: 350,
        mining_level: 2,
        mining_speed: 5,
        groups: ['metal', 'crystal'],
        properties: {
            handheld: {
                on_attack_potion: [
                    {
                        potion: 'kubejs:ice_affinity',
                        amplifier: 0,
                        duration: 40,
                        target_self: true
                    }
                ]
            }
        }
    },
    'galosphere:lumiere_cluster': {
        hardness: 3,
        density: 3,
        flexibility: 5,
        durability: 400,
        mining_level: 2,
        mining_speed: 6,
        groups: ['metal', 'crystal'],
        properties: {
            handheld: {
                on_attack_potion: [
                    {
                        potion: 'kubejs:ice_affinity',
                        amplifier: 0,
                        duration: 60,
                        target_self: true
                    }
                ]
            }
        }
    },
    'galosphere:glinted_lumiere_cluster': {
        hardness: 4,
        density: 4,
        flexibility: 5,
        durability: 450,
        mining_level: 2,
        mining_speed: 7,
        groups: ['metal', 'crystal'],
        properties: {
            handheld: {
                on_attack_potion: [
                    {
                        potion: 'kubejs:ice_affinity',
                        amplifier: 1,
                        duration: 60,
                        target_self: true
                    }
                ]
            }
        }
    },
    'galosphere:pink_salt_shard': {
        hardness: 4,
        density: 4,
        flexibility: 5,
        durability: 450,
        mining_level: 2,
        mining_speed: 7,
        groups: ['metal', 'crystal'],
        properties: {
            handheld: {
                on_attack_potion: [
                    {
                        potion: 'kubejs:blood_affinity',
                        amplifier: 0,
                        duration: 60,
                        target_self: true
                    }
                ]
            }
        }
    },

    'cataclysm:lacrima': {
        hardness: 4,
        density: 9,
        flexibility: 4,
        durability: 750,
        mining_level: 2,
        mining_speed: 7,
        groups: ['metal'],
        properties: {
            handheld: {
                on_attack_potion: [
                    {
                        potion: 'kubejs:aqua_affinity',
                        amplifier: 0,
                        duration: 60,
                        target_self: true
                    }
                ]
            }
        }
    },
    'cataclysm:lava_power_cell': {
        hardness: 4,
        density: 9,
        flexibility: 4,
        durability: 500,
        mining_level: 2,
        mining_speed: 7,
        groups: ['metal'],
        properties: {
            handheld: {
                on_attack_potion: [
                    {
                        potion: 'kubejs:fire_affinity',
                        amplifier: 0,
                        duration: 40,
                        target_self: true
                    }
                ]
            }
        }
    },

    'traveloptics:hullbreaker_steel': {
        hardness: 4,
        density: 7,
        flexibility: 4,
        durability: 750,
        mining_level: 2,
        mining_speed: 7,
        groups: ['metal'],
        properties: {
            handheld: {
                on_attack_potion: [
                    {
                        potion: 'kubejs:aqua_affinity',
                        amplifier: 1,
                        duration: 60,
                        target_self: true
                    }
                ]
            }
        }
    },

    'traveloptics:void_spellweave_ingot': {
        hardness: 8,
        density: 8,
        flexibility: 8,
        durability: 1000,
        mining_level: 2,
        mining_speed: 9,
        groups: ['metal'],
        properties: {
            handheld: {
                on_attack_potion: [
                    {
                        potion: 'kubejs:ender_affinity',
                        amplifier: 0,
                        duration: 60,
                        target_self: true
                    }
                ]
            }
        }
    },
    'traveloptics:abyssal_spellweave_ingot': {
        hardness: 9,
        density: 9,
        flexibility: 9,
        durability: 1000,
        mining_level: 2,
        mining_speed: 9,
        groups: ['metal'],
        properties: {
            handheld: {
                on_attack_potion: [
                    {
                        potion: 'kubejs:ender_affinity',
                        amplifier: 1,
                        duration: 60,
                        target_self: true
                    }
                ]
            }
        }
    },
    'alexscaves:tectonic_shard': {
        hardness: 7,
        density: 7,
        flexibility: 5,
        durability: 700,
        mining_level: 2,
        mining_speed: 6,
        groups: [
            'metal'
        ],
        properties: {
            handheld: {
                on_attack_potion: [
                    {
                        potion: 'kubejs:geo_affinity',
                        amplifier: 0,
                        duration: 60,
                        target_self: true
                    }
                ]
            }
        }
    },
    'irons_spellbooks:pyrium_ingot': {
        hardness: 9,
        density: 9,
        flexibility: 9,
        durability: 1000,
        mining_level: 2,
        mining_speed: 9,
        groups: ['metal'],
        properties: {
            handheld: {
                on_attack_potion: [
                    {
                        potion: 'kubejs:geo_affinity',
                        amplifier: 1,
                        duration: 60,
                        target_self: true
                    }
                ]
            }
        }
    },
    'traveloptics:pyro_spellweave_ingot': {
        hardness: 9,
        density: 9,
        flexibility: 9,
        durability: 1000,
        mining_level: 2,
        mining_speed: 9,
        groups: ['metal'],
        properties: {
            handheld: {
                on_attack_potion: [
                    {
                        potion: 'kubejs:fire_affinity',
                        amplifier: 0,
                        duration: 60,
                        target_self: true
                    }
                ]
            }
        }
    },
    'traveloptics:kyrexi_claws': {
        hardness: 6,
        density: 6,
        flexibility: 4,
        durability: 500,
        mining_level: 2,
        mining_speed: 6,
        groups: [
            'metal'
        ],
        properties: {
            handheld: {
                on_attack_potion: [
                    {
                        potion: 'kubejs:geo_affinity',
                        amplifier: 0,
                        duration: 40,
                        target_self: true
                    }
                ]
            }
        }
    },
    'traveloptics:excrucis': {
        hardness: 10,
        density: 10,
        flexibility: 10,
        durability: 1250,
        mining_level: 2,
        mining_speed: 10,
        groups: ['metal'],
        properties: {
            handheld: {
                on_attack_potion: [
                    {
                        potion: 'kubejs:ender_affinity',
                        amplifier: 2,
                        duration: 100,
                        target_self: true
                    }
                ]
            }
        }
    },
    'cataclysm:essence_of_the_storm': {
        hardness: 10,
        density: 10,
        flexibility: 10,
        durability: 1250,
        mining_level: 2,
        mining_speed: 10,
        groups: ['metal'],
        properties: {
            handheld: {
                on_attack_potion: [
                    {
                        potion: 'kubejs:aqua_affinity',
                        amplifier: 2,
                        duration: 100,
                        target_self: true
                    }
                ]
            }
        }
    },
    'cataclysm:witherite_ingot': {
        hardness: 10,
        density: 10,
        flexibility: 10,
        durability: 1250,
        mining_level: 2,
        mining_speed: 10,
        groups: [
            'metal'
        ],
        properties: {
            handheld: {
                on_attack_potion: [
                    {
                        potion: 'kubejs:blood_affinity',
                        amplifier: 2,
                        duration: 100,
                        target_self: true
                    }
                ]
            }
        }
    },
    'alexsmobs:serrated_shark_tooth': {
        hardness: 8,
        density: 8,
        flexibility: 8,
        durability: 750,
        mining_level: 3,
        mining_speed: 9,
        groups: [
            'bone'
        ],
        properties: {
            handheld: {
                on_attack_potion: [
                    {
                        potion: 'kubejs:blood_affinity',
                        amplifier: 1,
                        duration: 60,
                        target_self: true
                    }
                ]
            }
        }
    },
    'cataclysm:cursium_ingot': {
        hardness: 10,
        density: 10,
        flexibility: 10,
        durability: 1250,
        mining_level: 2,
        mining_speed: 10,
        groups: [
            'metal'
        ],
        properties: {
            handheld: {
                on_attack_potion: [
                    {
                        potion: 'kubejs:ice_affinity',
                        amplifier: 2,
                        duration: 100,
                        target_self: true
                    }
                ]
            }
        }
    },
    'cataclysm:ignitium_ingot': {
        hardness: 10,
        density: 10,
        flexibility: 10,
        durability: 1250,
        mining_level: 2,
        mining_speed: 10,
        groups: [
            'metal'
        ],
        properties: {
            handheld: {
                on_attack_potion: [
                    {
                        potion: 'kubejs:fire_affinity',
                        amplifier: 1,
                        duration: 60,
                        target_self: true
                    }
                ]
            }
        }
    },
    'irons_spellbooks:lightning_bottle': {
        hardness: 3,
        density: 3,
        flexibility: 3,
        durability: 300,
        mining_level: 1,
        mining_speed: 5,
        groups: [
            'crystal'
        ],
        properties: {
            handheld: {
                on_attack_potion: [
                    {
                        potion: 'kubejs:lightning_affinity',
                        amplifier: 0,
                        duration: 40,
                        target_self: true
                    }
                ]
            }
        }
    },
    'fdbosses:lightning_core': {
        hardness: 9,
        density: 9,
        flexibility: 9,
        durability: 1250,
        mining_level: 2,
        mining_speed: 10,
        groups: [
            'metal', 'crystal'
        ],
        properties: {
            handheld: {
                on_attack_potion: [
                    {
                        potion: 'kubejs:lightning_affinity',
                        amplifier: 1,
                        duration: 60,
                        target_self: true
                    }
                ]
            }
        }
    },
    'cataclysm:amethyst_crab_shell': {
        hardness: 8,
        density: 4,
        flexibility: 3,
        durability: 350,
        mining_level: 3,
        mining_speed: 9,
        groups: [
            'bone',
            'metal'
        ],
        properties: {
            handheld: {
                on_attack_potion: [
                    {
                        potion: 'kubejs:nature_affinity',
                        amplifier: 1,
                        duration: 60,
                        target_self: true
                    }
                ]
            }
        }
    },
    'minecraft:obsidian': {
        hardness: 2,
        density: 7,
        flexibility: 0,
        durability: 1000,
        mining_level: 3,
        mining_speed: 1,
        groups: [
            'stone'
        ],
    },
    'minecraft:crying_obsidian': {
        hardness: 2,
        density: 7,
        flexibility: 0,
        durability: 1250,
        mining_level: 3,
        mining_speed: 2,
        groups: [
            'stone'
        ],
    },

    'irons_spellbooks:holy_rune': {
        hardness: 4,
        density: 4,
        flexibility: 4,
        durability: 400,
        mining_level: 2,
        mining_speed: 5,
        groups: [
            'metal'
        ],
        properties: {
            handheld: {
                on_attack_potion: [
                    {
                        potion: 'kubejs:holy_affinity',
                        amplifier: 0,
                        duration: 40,
                        target_self: true
                    }
                ]
            }
        }
    },
    'irons_spellbooks:holy_upgrade_orb': {
        hardness: 7.5,
        density: 7.5,
        flexibility: 7.5,
        durability: 600,
        mining_level: 2,
        mining_speed: 5,
        groups: [
            'metal'
        ],
        properties: {
            handheld: {
                on_attack_potion: [
                    {
                        potion: 'kubejs:holy_affinity',
                        amplifier: 1,
                        duration: 40,
                        target_self: true
                    }
                ]
            }
        }
    },
    'irons_spellbooks:blood_rune': {
        hardness: 4,
        density: 4,
        flexibility: 4,
        durability: 400,
        mining_level: 2,
        mining_speed: 5,
        groups: [
            'metal'
        ],
        properties: {
            handheld: {
                on_attack_potion: [
                    {
                        potion: 'kubejs:blood_affinity',
                        amplifier: 0,
                        duration: 40,
                        target_self: true
                    }
                ]
            }
        }
    },
    'irons_spellbooks:blood_upgrade_orb': {
        hardness: 7.5,
        density: 7.5,
        flexibility: 7.5,
        durability: 600,
        mining_level: 2,
        mining_speed: 5,
        groups: [
            'metal'
        ],
        properties: {
            handheld: {
                on_attack_potion: [
                    {
                        potion: 'kubejs:blood_affinity',
                        amplifier: 1,
                        duration: 40,
                        target_self: true
                    }
                ]
            }
        }
    },
    'irons_spellbooks:ender_rune': {
        hardness: 4,
        density: 4,
        flexibility: 4,
        durability: 400,
        mining_level: 2,
        mining_speed: 5,
        groups: [
            'metal'
        ],
        properties: {
            handheld: {
                on_attack_potion: [
                    {
                        potion: 'kubejs:ender_affinity',
                        amplifier: 0,
                        duration: 40,
                        target_self: true
                    }
                ]
            }
        }
    },
    'irons_spellbooks:ender_upgrade_orb': {
        hardness: 7.5,
        density: 7.5,
        flexibility: 7.5,
        durability: 600,
        mining_level: 2,
        mining_speed: 5,
        groups: [
            'metal'
        ],
        properties: {
            handheld: {
                on_attack_potion: [
                    {
                        potion: 'kubejs:ender_affinity',
                        amplifier: 1,
                        duration: 40,
                        target_self: true
                    }
                ]
            }
        }
    },
    'irons_spellbooks:fire_rune': {
        hardness: 4,
        density: 4,
        flexibility: 4,
        durability: 400,
        mining_level: 2,
        mining_speed: 5,
        groups: [
            'metal'
        ],
        properties: {
            handheld: {
                on_attack_potion: [
                    {
                        potion: 'kubejs:fire_affinity',
                        amplifier: 0,
                        duration: 40,
                        target_self: true
                    }
                ]
            }
        }
    },
    'irons_spellbooks:fire_upgrade_orb': {
        hardness: 7.5,
        density: 7.5,
        flexibility: 7.5,
        durability: 600,
        mining_level: 2,
        mining_speed: 5,
        groups: [
            'metal'
        ],
        properties: {
            handheld: {
                on_attack_potion: [
                    {
                        potion: 'kubejs:fire_affinity',
                        amplifier: 1,
                        duration: 40,
                        target_self: true
                    }
                ]
            }
        }
    },
    'irons_spellbooks:ice_rune': {
        hardness: 4,
        density: 4,
        flexibility: 4,
        durability: 400,
        mining_level: 2,
        mining_speed: 5,
        groups: [
            'metal'
        ],
        properties: {
            handheld: {
                on_attack_potion: [
                    {
                        potion: 'kubejs:ice_affinity',
                        amplifier: 0,
                        duration: 40,
                        target_self: true
                    }
                ]
            }
        }
    },
    'irons_spellbooks:ice_upgrade_orb': {
        hardness: 7.5,
        density: 7.5,
        flexibility: 7.5,
        durability: 600,
        mining_level: 2,
        mining_speed: 5,
        groups: [
            'metal'
        ],
        properties: {
            handheld: {
                on_attack_potion: [
                    {
                        potion: 'kubejs:ice_affinity',
                        amplifier: 1,
                        duration: 40,
                        target_self: true
                    }
                ]
            }
        }
    },
    'irons_spellbooks:lightning_rune': {
        hardness: 4,
        density: 4,
        flexibility: 4,
        durability: 400,
        mining_level: 2,
        mining_speed: 5,
        groups: [
            'metal'
        ],
        properties: {
            handheld: {
                on_attack_potion: [
                    {
                        potion: 'kubejs:lightning_affinity',
                        amplifier: 0,
                        duration: 40,
                        target_self: true
                    }
                ]
            }
        }
    },
    'irons_spellbooks:lightning_upgrade_orb': {
        hardness: 7.5,
        density: 7.5,
        flexibility: 7.5,
        durability: 600,
        mining_level: 2,
        mining_speed: 5,
        groups: [
            'metal'
        ],
        properties: {
            handheld: {
                on_attack_potion: [
                    {
                        potion: 'kubejs:lightning_affinity',
                        amplifier: 1,
                        duration: 40,
                        target_self: true
                    }
                ]
            }
        }
    },
    'irons_spellbooks:nature_rune': {
        hardness: 4,
        density: 4,
        flexibility: 4,
        durability: 400,
        mining_level: 2,
        mining_speed: 5,
        groups: [
            'metal'
        ],
        properties: {
            handheld: {
                on_attack_potion: [
                    {
                        potion: 'kubejs:nature_affinity',
                        amplifier: 0,
                        duration: 40,
                        target_self: true
                    }
                ]
            }
        }
    },
    'irons_spellbooks:nature_upgrade_orb': {
        hardness: 7.5,
        density: 7.5,
        flexibility: 7.5,
        durability: 600,
        mining_level: 2,
        mining_speed: 5,
        groups: [
            'metal'
        ],
        properties: {
            handheld: {
                on_attack_potion: [
                    {
                        potion: 'kubejs:nature_affinity',
                        amplifier: 1,
                        duration: 40,
                        target_self: true
                    }
                ]
            }
        }
    },
    'irons_spellbooks:evocation_rune': {
        hardness: 4,
        density: 4,
        flexibility: 4,
        durability: 400,
        mining_level: 2,
        mining_speed: 5,
        groups: [
            'metal'
        ],
        properties: {
            handheld: {
                on_attack_potion: [
                    {
                        potion: 'kubejs:evocation_affinity',
                        amplifier: 0,
                        duration: 40,
                        target_self: true
                    }
                ]
            }
        }
    },
    'irons_spellbooks:evocation_upgrade_orb': {
        hardness: 7.5,
        density: 7.5,
        flexibility: 7.5,
        durability: 600,
        mining_level: 2,
        mining_speed: 5,
        groups: [
            'metal'
        ],
        properties: {
            handheld: {
                on_attack_potion: [
                    {
                        potion: 'kubejs:evocation_affinity',
                        amplifier: 1,
                        duration: 40,
                        target_self: true
                    }
                ]
            }
        }
    },
    'traveloptics:aqua_rune': {
        hardness: 4,
        density: 4,
        flexibility: 4,
        durability: 400,
        mining_level: 2,
        mining_speed: 5,
        groups: [
            'metal'
        ],
        properties: {
            handheld: {
                on_attack_potion: [
                    {
                        potion: 'kubejs:aqua_affinity',
                        amplifier: 0,
                        duration: 40,
                        target_self: true
                    }
                ]
            }
        }
    },
    'traveloptics:aqua_upgrade_orb': {
        hardness: 7.5,
        density: 7.5,
        flexibility: 7.5,
        durability: 600,
        mining_level: 2,
        mining_speed: 5,
        groups: [
            'metal'
        ],
        properties: {
            handheld: {
                on_attack_potion: [
                    {
                        potion: 'kubejs:aqua_affinity',
                        amplifier: 1,
                        duration: 40,
                        target_self: true
                    }
                ]
            }
        }
    },



    'irons_spellbooks:mithril_weave': {
        hardness: 11,
        density: 11,
        flexibility: 11,
        durability: 50,
        mining_level: 1,
        mining_speed: 1,
        groups: [
            'rope',
            'fabric',
            'fletching'
        ],
        properties: {
            handheld: {
                on_hurt_potion: [
                    {
                        potion: 'irons_spellbooks:true_invisibility',
                        amplifier: 0,
                        duration: 40,
                        target_self: true
                    }
                ]
            }
        }
    },
    'irons_spellbooks:bloody_vellum': {
        hardness: 4,
        density: 4,
        flexibility: 4,
        durability: 250,
        mining_level: 1,
        mining_speed: 1,
        groups: [
            'rope',
            'fabric',
            'fletching'
        ],
        properties: {
            handheld: {
                on_attack_potion: [
                    {
                        potion: 'kubejs:blood_affinity',
                        amplifier: 2,
                        duration: 40,
                        target_self: true
                    }
                ]
            }
        }
    },

    'irons_spellbooks:mithril_scrap': {
        hardness: 2,
        density: 1,
        flexibility: 1,
        durability: 125,
        mining_level: 1,
        mining_speed: 1,
        groups: [
            'metal'
        ],
        properties: {
            handheld: {
                on_attack_potion: [
                    {
                        potion: 'irons_spellbooks:instant_mana',
                        amplifier: 1,
                        duration: 1,
                        target_self: true
                    }
                ]
            }
        }
    },
    'irons_spellbooks:raw_mithril': {
        hardness: 1,
        density: 1,
        flexibility: 1,
        durability: 50,
        mining_level: 1,
        mining_speed: 1,
        groups: [
            'metal'
        ],
        properties: {
            handheld: {
                on_attack_potion: [
                    {
                        potion: 'irons_spellbooks:instant_mana',
                        amplifier: 0,
                        duration: 1,
                        target_self: true
                    }
                ]
            }
        }
    },
    'irons_spellbooks:divine_soulshard': {
        hardness: 6,
        density: 6,
        flexibility: 6,
        durability: 50,
        mining_level: 1,
        mining_speed: 1,
        groups: [
            'metal'
        ],
        properties: {
            handheld: {
                on_attack_potion: [
                    {
                        potion: 'alexsmobs:soulsteal',
                        amplifier: 1,
                        duration: 40,
                        target_self: true
                    }
                ]
            }
        } 
    },
    'irons_spellbooks:icy_fang': {
        hardness: 5,
        density: 5,
        flexibility: 5,
        durability: 50,
        mining_level: 1,
        mining_speed: 1,
        groups: [
            'metal',
            'rod'
        ],
        properties: {
            handheld: {
                on_attack_potion: [
                    {
                        potion: 'cofh_core:chilled',
                        amplifier: 1,
                        duration: 60,
                        target_self: false
                    }
                ]
            }
        }
    },
};
