ServerEvents.recipes(event => {
    event.recipes.slashblade.slashblade_shaped_recipe("slashblade:slashblade", [
        "ABH",
        "DEF",
        "CGK"
    ], {
        "E": SlashBladeIngredient.of(
            SlashBladeRequestDefinition
                .name("slashblade:doutanuki")
                .killCount(10)
                .refineCount(20)
                .build()
        ),
        "A": "minecraft:beetroot_soup",
        "B": ["minecraft:heart_of_the_sea", 'ad_astra:energizer'],
        "C": "minecraft:beetroot_soup",
        "D": "minecraft:rabbit_stew",
        "F": 'ad_astra:desh_tank',
        "G": '#forge:storage_blocks/ostrum',
        "H": 'ad_astra:ostrum_engine',
        "K": 'ad_astra:ostrum_tank'
    }, "cialloblade:ciallo")
        .id('sdbf:ciallo_s2')

    event.recipes.slashblade.slashblade_shaped_recipe("slashblade:slashblade", [
        "SOS",
        "OBO",
        "SOS"
    ], {
        "B": SlashBladeIngredient.of(
            SlashBladeRequestDefinition.name("slashblade:slashblade")
                .proudSoul(10000)
                .refineCount(20)
                .build()
        ),
        "S": "slashblade:proudsoul_sphere",
        "O": '#forge:ingots/ostrum'
    }, "slashblade:muramasa")
        .id('sdbf:muramasa_s2')

    event.recipes.slashblade.slashblade_shaped_recipe("slashblade:slashblade", [
        "EBE",
        "AFC",
        " D "
    ], {
        "A": SlashBladeIngredient.of(
            SlashBladeRequestDefinition
                .name("last_smith:exorcism_ginkgo")
                .proudSoul(1000)
                .killCount(100)
                .refineCount(10)
                .build()
        ),
        "B": SlashBladeIngredient.of(
            SlashBladeRequestDefinition
                .name("last_smith:exorcism_sakura")
                .proudSoul(1000)
                .killCount(100)
                .refineCount(10)
                .build()
        ),
        "C": SlashBladeIngredient.of(
            SlashBladeRequestDefinition.name("last_smith:exorcism_yuki")
                .proudSoul(1000)
                .killCount(100)
                .refineCount(10)
                .build()
        ),
        "D": "last_smith:scroll_sakura_blade",
        "E": '#forge:ingots/ostrum',
        "F": 'last_smith:sakura_full',
    }, "last_smith:evil_kataware")
        .id('sdbf:exorcism_ginkgo_s2')

    event.recipes.slashblade.slashblade_shaped_recipe("slashblade:slashblade", [
        " ID",
        "SP ",
        "BQ "
    ], {
        "B": SlashBladeIngredient.of(
            SlashBladeRequestDefinition.name("slashblade:doutanuki")
                .refineCount(10)
                .addEnchantment(SBEnchantmentDefinition.of("minecraft:fire_protection", 1))
                .build()
        ),
        "D": 'ad_astra:mars_sand',
        "I": 'ad_astra:conglomerate',
        "P": "slashblade:proudsoul_sphere",
        "Q": 'minecraft:packed_ice',
        "S": "minecraft:snow_block"
    }, "slashblade_addon:frosty_cherry")
        .id('sdbf:frosty_cherry_s2')

})