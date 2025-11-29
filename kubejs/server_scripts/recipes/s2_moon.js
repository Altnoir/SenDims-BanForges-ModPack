ServerEvents.recipes(event => {

    event.smelting('ad_astra:moon_cobblestone', ['dustandash:cobblestone_with_moss'], 0, 200).id("sdbf:moon_cobblestone_s2")

    event.shapeless('slashblade_sendims:estus_flask_2', ['slashblade_sendims:estus_flask_1', "ad_astra:desh_engine"]).id('sdbf:estus_flask_2_s2')

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

    event.shaped('ad_astra:desh_engine', [
        'AEA',
        'ABA',
        ' C '
    ], {
        A: '#forge:storage_blocks/desh',
        B: 'ad_astra:steel_engine',
        C: 'ad_astra:fan',
        E: '#ad_astra:desh_plates'
    }).id('sdbf:desh_engine_1_s2')

    event.shaped('ad_astra:desh_engine', [
        'AEA',
        'ABA',
        ' C '
    ], {
        A: '#ad_astra:desh_plates',
        B: 'ad_astra:steel_engine',
        C: 'ad_astra:fan',
        E: 'thermal:enderium_gear'
    }).id('sdbf:desh_engine_2_s2')

    event.recipes.slashblade.slashblade_shaped_recipe("slashblade:slashblade", [
        "  I",
        "QI ",
        "BC "
    ], {
        "B": SlashBladeIngredient.of(
            SlashBladeRequestDefinition
                .name("slashblade:doutanuki")
                .build()
        ),
        "C": "minecraft:clock",
        "I": "slashblade:proudsoul_ingot",
        "Q": '#forge:ingots/desh'
    }, "slashblade_addon:wanderer")
        .id('sdbf:wanderer_s2')

    event.shaped($StructureQuill.forStructure("ad_astra:moon_dungeon"), [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'ad_astra:moon_stone',
        B: 'minecraft:map'
    }).id('sdbf:sq_moon_dungeon_s2')

    event.custom({
        "type": "ad_astra:compressing",
        "cookingtime": 4000,
        "energy": 100,
        "ingredient": {
            "item": 'minecraft:lava_bucket'
        },
        "result": {
            "count": 1,
            "id": 'ad_astra:oil_bucket'
        }
    }).id('sdbf:oil_bucket_s2')

})