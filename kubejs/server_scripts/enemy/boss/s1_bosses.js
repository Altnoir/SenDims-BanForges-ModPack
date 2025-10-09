// priority: 100
ServerEvents.highPriorityData(event => {
    const loqendiaBoss = (id) => {
        let boss = bossMaterialBuilder(event, id, "loqendia")
            .setWeight(75).setQuality(2).setSize(1, 1)
            .addValidGearSet("#none").addDimension("thermal_shock:loqendia")
            .setMinRarity("uncommon").setMaxRarity("rare");
        boss.forRarity("uncommon")
            .setEnchantChance(0.25)
            .setEnchantmentLevels([2, 0, 0, 2])
            .addEffect("minecraft:fire_resistance", 1.0)
            .addAttributeRange("minecraft:generic.max_health", "MULTIPLY_TOTAL", 0.1,
                10, 0.05)
            .addAttributeRange("minecraft:generic.attack_damage", "ADDITION", 1,
                10, 0.1)
            .addAttributeRange("minecraft:generic.movement_speed", "MULTIPLY_TOTAL", 0.1,
                10, 0.01)
            .addAttribute("minecraft:generic.knockback_resistance", "ADDITION", 0.7);
        boss.forRarity("rare")
            .setEnchantChance(0.35)
            .setEnchantmentLevels([4, 2, 2, 4])
            .addEffect("minecraft:fire_resistance", 1.0)
            .addAttributeRange("minecraft:generic.max_health", "MULTIPLY_TOTAL", 0.2,
                10, 0.05)
            .addAttributeRange("minecraft:generic.attack_damage", "ADDITION", 2,
                10, 0.15)
            .addAttributeRange("minecraft:generic.movement_speed", "MULTIPLY_TOTAL", 0.15,
                10, 0.015)
            .addAttribute("minecraft:generic.knockback_resistance", "ADDITION", 0.8);
        boss.build();
    };

    loqendiaBoss("thermal_shock:willograde");
    loqendiaBoss("thermal_shock:trilobite");
    loqendiaBoss("thermal_shock:graver");
    loqendiaBoss("thermal_shock:skullscor");
    loqendiaBoss("thermal_shock:errant");
    loqendiaBoss("thermal_shock:gore_flayer");
    loqendiaBoss("thermal_shock:magnetite");
    loqendiaBoss("thermal_shock:bonerahna");
    loqendiaBoss("thermal_shock:frostilyte");
    loqendiaBoss("thermal_shock:frostilyte_soldier");
    loqendiaBoss("thermal_shock:icidrone");
    loqendiaBoss("thermal_shock:icidrogrunt");
    loqendiaBoss("thermal_shock:icidrozerk");
    loqendiaBoss("thermal_shock:galvanite");
    loqendiaBoss("thermal_shock:infestophage_seed");
    loqendiaBoss("thermal_shock:dormant_monolith");

})