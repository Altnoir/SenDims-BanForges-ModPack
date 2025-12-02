ServerEvents.recipes(event => {

    event.recipes.slashblade.slashblade_shaped_recipe("slashblade:slashblade", [
        "SNJ",
        "LBD",
        "JDS"
    ], {
        "B": SlashBladeIngredient.of(
            SlashBladeRequestDefinition.newInstance()
                
                .proudSoul(10000)
                .refineCount(10)
                .build()
        ),
        "D": "#forge:dyes/black",
        "J": "umapyoi:jewel",
        "L": "#forge:dyes/lime",
        "N": '#forge:ingots/netherite',
        "S": "slashblade:proudsoul_sphere"
    }, "blades_derby:uma_black")
        .id("sdbf:uma_black_s2");

    event.recipes.slashblade.slashblade_shaped_recipe("slashblade:slashblade", [
        "ADA",
        "BCB",
        "AAA"
    ], {
        "A": "minecraft:diamond_block",
        "B": "minecraft:obsidian",
        "C": SlashBladeIngredient.of(
            SlashBladeRequestDefinition.newInstance()
                
                .proudSoul(5000)
                .refineCount(10)
                .build()
        ),
        "D": '#forge:ingots/netherite'
    }, "pseudoedge_break_dawn:kingblade")
        .id("sdbf:kingblade_s2");

    event.recipes.slashblade.slashblade_shaped_recipe("slashblade:slashblade", [
        "SIS",
        "IBI",
        "SIS"
    ], {
        "B": SlashBladeIngredient.of(
            SlashBladeRequestDefinition.newInstance()
                .name("pseudoedge_break_dawn:kingblade")
                .proudSoul(5000)
                .refineCount(10)
                .build()
        ),
        "I": "slashblade:proudsoul_ingot",
        "S": "slashblade:proudsoul_sphere"
    }, "slashblade_addon:nihil")

    event.shapeless($StructureQuill.forStructure("cataclysm:soul_black_smith"), ['minecraft:map', 'cataclysm:monstrous_eye'])
        .id("sdbf:sq_soul_black_smith_s2");


})