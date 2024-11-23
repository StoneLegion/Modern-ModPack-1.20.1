// Listen to item registry event
StartupEvents.registry('item', e => {
  // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
  // If you want a custom item model, you can create one in Blockbench and put it in kubejs/assets/kubejs/models/item/test_item.json
  e.create('rocket_nose_cone_t2')
  e.create('rocket_nose_cone_t3')
  e.create('rocket_nose_cone_t4')
})