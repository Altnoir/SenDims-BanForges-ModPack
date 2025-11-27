ServerEvents.recipes(event => {
    event.smelting('#forge:gems/ruby', ['thermal_shock:rough_ruby'])
        .id("sdbf:ruby_s1");
    event.smelting('thermal_shock:bloodstone', ['thermal_shock:rough_bloodstone'])
        .id("sdbf:bloodstone_s1");

    event.smelting('slashblade_sendims:estus_flask_0', ['kubejs:garden_lighter'])
        .id("sdbf:estus_flask_0_s1");

    event.shapeless('2x thermal_shock:phobotite', [
        'thermal_shock:phobotite',
         Ingredient.of(['thermal_shock:ferrum_ingot', 'thermal_shock:corrial_ingot']),
          '2x thermal_shock:permafrost'])
        .id("sdbf:phobotite_s1")

    event.recipes.slashblade.slashblade_shaped_recipe("slashblade:slashblade", [
        "ABC",
        "DEF",
        "GHI"
    ], {
        "A": "minecraft:diamond_block",
        "B": 'thermal_shock:helion_slag',
        "C": 'thermal_shock:stratosilver',
        "D": 'thermal_shock:ferrum_ingot',
        "E": "slashblade:slashblade_wood",
        "F": "minecraft:diamond",
        "G": "minecraft:iron_ingot",
        "H": 'thermal_shock:stratus_alloy',
        "I": 'thermal_shock:corrial_ingot'
    }, "pseudoedge_break_dawn:kumasakura")
        .id("sdbf:kumasakura_s1");

})