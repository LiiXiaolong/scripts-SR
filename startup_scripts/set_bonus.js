let quality_tiers = {
    recastingStack: {
        color: 0x7a7b78,
        properties:[100, 5, 5],
        recastingStack: "minecraft:iron_ingot"
    },
    uncommon: {
        color: 0x00FF00,
        properties:[100, 5, 5],
        recastingStack: "minecraft:gold_ingot"
    },
    rare: {
        color: 0x87CEEB,
        properties:[100, 5, 5],
        recastingStack: "minecraft:diamond"
    },
    epic: {
        color: 0xFFFFC5,
        properties:[100, 5, 5],
        recastingStack: "minecraft:emerald"
    },
    legendary: {
        color: 0xDAB1DA,
        properties:[100, 5, 5],
        recastingStack: "minecraft:netherite_ingot"
    }

}

/**
 * 
 * StartupEvents.registry("",event => { 
    Object.entries(quality_tiers).forEach(([key, value]) => {
        event.create(key)
        .isViable(stack => {
            let $armorItem = Java.loadClass("net.minecraft.world.item.ArmorItem");
            return stack.getItem() instanceof $armorItem
        })
        .properties(value.properties[0], value.properties[1], value.properties[2])
        .recastingStack(Ingredient.of(value.recastingStack))
        .color(value.color)
    })
})
 */
