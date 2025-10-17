ServerEvents.recipes(event => {
    event.shaped('confluence:obsidian_rose', [
        'ADA',
        'BEB',
        ' C '
    ], {
        A: 'ad_astra:ice_shard',
        B: 'minecraft:poppy',
        C: '#forge:obsidian',
        D: 'minecraft:lava_bucket',
        E: 'ad_astra:moon_globe',
    }).keepIngredient('ad_astra:moon_globe')
        .id('sdbf:obsidian_rose_s2')

    event.shaped('2x kubejs:bedrock_breaker', [
        ' BA',
        'BCB',
        'AB '
    ], {
        A: 'tetra:metal_scrap',
        B: 'ad_astra:ice_shard',
        C: 'confluence:obsidian_rose'
    }).id('sdbf:bedrock_breaker_s2')

    event.shaped($StructureQuill.forStructure("ad_astra:moon_dungeon"), [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'ad_astra:moon_stone',
        B: 'minecraft:map'
    }).id('sdbf:sq_moon_dungeon_s2')

})