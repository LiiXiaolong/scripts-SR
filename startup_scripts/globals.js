
global.countCurios = function (player, item) {
  let CuriosApi = Java.loadClass("top.theillusivec4.curios.api.CuriosApi");
  let optional = CuriosApi.getCuriosHelper().getEquippedCurios(player);

  if (!optional.isPresent()) return 0;

  let count = 0;
  optional.ifPresent(handler => {
    for (let i = 0; i < handler.getSlots(); i++) {
      let stack = handler.getStackInSlot(i);
      if (!stack.isEmpty() && stack.is(item)) {
        count++;
      }
    }
  });
  return count;
}


global.handleAffinityGems = function (player) {
let affinity_gems = [];
global.mage_effects.forEach(gem => {
  // Add one entry per lesser gem found
  let lesser_count = global.countCurios(player, `kubejs:${gem}_affinity_gem`);
  for (let i = 0; i < lesser_count; i++) {
    affinity_gems.push(gem);
  }

  // Add one entry per superior gem found
  let superior_count = global.countCurios(player, `kubejs:superior_${gem}_affinity_gem`);
  for (let i = 0; i < superior_count; i++) {
    affinity_gems.push(`superior_${gem}`);
  }

  // Add one entry per exalted gem found
  let exalted_count = global.countCurios(player, `kubejs:exalted_${gem}_affinity_gem`);
  for (let i = 0; i < exalted_count; i++) {
    affinity_gems.push(`exalted_${gem}`);
  }
});
return affinity_gems;
}