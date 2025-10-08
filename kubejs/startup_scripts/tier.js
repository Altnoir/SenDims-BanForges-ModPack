const $ForgeTier = Java.loadClass("net.minecraftforge.common.ForgeTier")
const $BlockTags = Java.loadClass("net.minecraft.tags.BlockTags")
const $TierSortingRegistry = Java.loadClass("net.minecraftforge.common.TierSortingRegistry")

StartupEvents.init(event => {
    const enderium = new $ForgeTier(5,
        2000, 4, 4, 15, $BlockTags.create("kubejs:mining_tier_5"), () => Ingredient.of()
    )
    $TierSortingRegistry.registerTier(enderium, "enderium", ["minecraft:netherite"], [])

    // TODO 6

    const thorium = new $ForgeTier(7,
        3000, 6, 6, 25, $BlockTags.create("kubejs:mining_tier_7"), () => Ingredient.of()
    )
    $TierSortingRegistry.registerTier(thorium, "thorium", ["minecraft:enderium"], [])

    const tough = new $ForgeTier(8,
        3500, 7, 7, 30, $BlockTags.create("kubejs:mining_tier_8"), () => Ingredient.of()
    )
    $TierSortingRegistry.registerTier(tough, "tough", ["minecraft:thorium"], [])

    const qnp = new $ForgeTier(9,
        4000, 8, 8, 35, $BlockTags.create("kubejs:mining_tier_9"), () => Ingredient.of()
    )
    $TierSortingRegistry.registerTier(qnp, "qnp", ["minecraft:tough"], [])

    // TODO 10

})
