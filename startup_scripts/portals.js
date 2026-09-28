// priority: 0
const $CustomPortalBuilder = Java.loadClass('net.kyrptonaught.customportalapi.api.CustomPortalBuilder')
const $ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation')
const $ForgeRegistries = Java.loadClass('net.minecraftforge.registries.ForgeRegistries')
const $Items = Java.loadClass('net.minecraft.world.item.Items')
const $Item = Java.loadClass('net.minecraft.world.item.Item')
const $Block = Java.loadClass('net.minecraft.world.level.block.Block')

StartupEvents.postInit(event => {
    function customPortal(frameBlockId, lightItemId, dimDestination, dimReturn, tintColorObj) {
        
        const frameBlock = $ForgeRegistries.BLOCKS.getValue(new $ResourceLocation(frameBlockId))
        const lightItem = $ForgeRegistries.ITEMS.getValue(new $ResourceLocation(lightItemId))

        if (!frameBlock || !lightItem) {
            console.log("Frame block or light item not found!")
            return
        }

        const builder = $CustomPortalBuilder.beginPortal()

        // Force correct overloads
        builder.getClass().getMethod("frameBlock", $Block).invoke(builder, frameBlock)
        builder.getClass().getMethod("lightWithItem", $Item).invoke(builder, lightItem)
        
        const { R, G, B } = tintColorObj

        builder
            .destDimID(new $ResourceLocation(dimDestination))
            .returnDim(new $ResourceLocation(dimReturn), false)
            .tintColor(R, G, B)
            .registerPortal()

        console.log("Custom portal registered using custom item to light it.")
    }
    
    customPortal(
        "minecraft:iron_block",
        "kubejs:magnetic_wayfinder",
        "ac_dims:magnetic_caves",
        "minecraft:overworld",
        // Dark Blue RGB
        { R: 0, G: 0, B: 255 }
        //{ R: 255, G: 0, B: 0 }
    )

    customPortal(
        "minecraft:deepslate_bricks",
        "kubejs:forlorn_wayfinder",
        "ac_dims:forlorn_hollows",
        "minecraft:overworld",
        // Dark Red RGB
        { R: 255, G: 0, B: 0 }
    )

    customPortal(
        "minecraft:jungle_log",
        "kubejs:primordial_wayfinder",
        "ac_dims:primordial_caves",
        "minecraft:overworld",
        // light Green RGB
        { R: 144, G: 238, B: 144 }
    )

    customPortal(
        "minecraft:mossy_cobblestone",
        "kubejs:toxic_wayfinder",
        "ac_dims:toxic_caves",
        "minecraft:overworld",
        // Dark green RGB
        { R: 0, G: 100, B: 0 }
    )

})