let ores = [
  //'iceandfire:sapphire_ore',
  //'iceandfire:deepslate_sapphire_ore',
  'galosphere:silver_ore',
  'galosphere:deepslate_silver_ore',
  //'call_of_yucutan:jade_ore',
  //'call_of_yucutan:deepslate_jade_ore',
  //'call_of_yucutan:jade',
  'scguns:anthralite_ore',
  'scguns:deepslate_anthralite_ore',
  'scguns:sulfur_ore',
  'scguns:deepslate_sulfur_ore',
  'scguns:nether_sulfur_ore',
  'scguns:vehement_coal_ore',
  'samurai_dynasty:ruby_ore',
  'samurai_dynasty:deepslate_ruby_ore',
  'samurai_dynasty:jade_ore',
  'samurai_dynasty:deepslate_jade_ore',
  'samurai_dynasty:aquamarine_ore',
  'samurai_dynasty:deepslate_aquamarine_ore',
  'hazennstuff:zenalite_ore',
  'hazennstuff:deepslate_zenalite_ore',
  'soulsweapons:verglas_ore',
  'soulsweapons:verglas_ore_deepslate',
  'soulsweapons:moonstone_ore',
  'soulsweapons:moonstone_ore_deepslate',
  'clanginghowl:extraterrestrial_steel_ore',
  'mythicupgrades:topaz_ore', 'mythicupgrades:deepslate_topaz_ore', 'mythicupgrades:peridot_ore', 'mythicupgrades:deepslate_peridot_ore', 'mythicupgrades:jade_ore', 'mythicupgrades:aquamarine_ore', 'mythicupgrades:deepslate_aquamarine_ore', 'mythicupgrades:sapphire_ore', 'mythicupgrades:ametrine_ore', 'mythicupgrades:necoium_ore',
]


WorldgenEvents.remove(event => {
    event.removeOres(props => {
      props.blocks = ores
    })
  })

