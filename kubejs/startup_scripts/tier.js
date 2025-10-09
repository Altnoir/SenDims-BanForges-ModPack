const $ForgeTier = Java.loadClass("net.minecraftforge.common.ForgeTier")
const $BlockTags = Java.loadClass("net.minecraft.tags.BlockTags")
const $TierSortingRegistry = Java.loadClass("net.minecraftforge.common.TierSortingRegistry")

SBSDEvents.registerTier(event => {
    event.registerTier(5,
         "kubejs:mining_tier_5", Ingredient.of("nuclearcraft:enderium"), ["minecraft:netherite"],
          "kubejs:enderium")

    // TODO 6

    event.registerTier(7,
         "kubejs:mining_tier_7", Ingredient.of("nuclearcraft:thorium"), ["kubejs:enderium"],
          "kubejs:thorium")

    event.registerTier(8,
         "kubejs:mining_tier_8", Ingredient.of("nuclearcraft:tough_alloy"), ["kubejs:thorium"],
          "kubejs:tough")

    event.registerTier(9,
         "kubejs:mining_tier_9", Ingredient.of("nuclearcraft:qnp"), ["kubejs:tough"],
          "kubejs:qnp")

    // TODO 10

})
