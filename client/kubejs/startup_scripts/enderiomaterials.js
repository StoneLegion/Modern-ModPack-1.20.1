// Listen to item registry event
StartupEvents.registry('item', e => {
  // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
  // If you want a custom item model, you can create one in Blockbench and put it in kubejs/assets/kubejs/models/item/test_item.json
  e.create('energetic_alloy_dust')
  e.create('energetic_alloy_ingot')
  e.create('energetic_alloy_hot')

  e.create('vibrant_alloy_dust')
  e.create('vibrant_alloy_ingot')
  e.create('vibrant_alloy_hot')

  e.create('conductive_alloy_dust')
  e.create('conductive_alloy_ingot')
  e.create('conductive_alloy_hot')

  e.create('pulsating_alloy_dust')
  e.create('pulsating_alloy_ingot')
  e.create('pulsating_alloy_hot')

  e.create('dark_steel_dust')
  e.create('dark_steel_ingot')
  e.create('dark_steel_hot')

  e.create('soularium_dust')
  e.create('soularium_ingot')
  e.create('soularium_hot')

  e.create('end_steel_dust')
  e.create('end_steel_ingot')
  e.create('end_steel_hot')
})