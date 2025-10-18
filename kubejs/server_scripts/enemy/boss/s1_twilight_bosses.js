// priority: 100
ServerEvents.highPriorityData(event => {
    const twilightBoss = (id, gearSet) => {
        let boss = bossMaterialBuilder(event, id, "twilight")
            .setWeight(75).setQuality(2).setSize(1, 1)
            .addValidGearSet(gearSet).addDimension("twilightforest:twilight_forest")
            .setMinRarity("uncommon").setMaxRarity("epic");
        boss.forRarity("uncommon")
            .setEnchantChance(0.35)
            .setEnchantmentLevels([4, 2, 2, 4])
            .addEffect("minecraft:fire_resistance", 1.0)
            .addAttributeRange("minecraft:generic.max_health", "MULTIPLY_TOTAL", 0.1,
                10, 0.05)
            .addAttributeRange("minecraft:generic.attack_damage", "ADDITION", 1,
                10, 0.1)
            .addAttributeRange("minecraft:generic.movement_speed", "MULTIPLY_TOTAL", 0.1,
                10, 0.01)
            .addAttribute("minecraft:generic.knockback_resistance", "ADDITION", 0.7);
        boss.forRarity("rare")
            .setEnchantChance(0.45)
            .setEnchantmentLevels([8, 4, 4, 8])
            .addEffect("minecraft:fire_resistance", 1.0)
            .addAttributeRange("minecraft:generic.max_health", "MULTIPLY_TOTAL", 0.2,
                10, 0.05)
            .addAttributeRange("minecraft:generic.attack_damage", "ADDITION", 2,
                10, 0.1)
            .addAttributeRange("minecraft:generic.movement_speed", "MULTIPLY_TOTAL", 0.15,
                10, 0.01)
            .addAttribute("minecraft:generic.knockback_resistance", "ADDITION", 0.8);
        boss.forRarity("epic")
            .setEnchantChance(0.65)
            .setEnchantmentLevels([12, 6, 6, 12])
            .addEffect("minecraft:fire_resistance", 1.0)
            .addAttributeRange("minecraft:generic.max_health", "MULTIPLY_TOTAL", 0.3,
                10, 0.1)
            .addAttributeRange("minecraft:generic.attack_damage", "ADDITION", 3,
                10, 0.15)
            .addAttributeRange("minecraft:generic.movement_speed", "MULTIPLY_TOTAL", 0.2,
                10, 0.015)
            .addAttribute("minecraft:generic.knockback_resistance", "ADDITION", 0.85);
        boss.build();
    };

    twilightBoss("twilightforest:death_tome", "#twilight");
    twilightBoss("minecraft:zombie", "#twilight");
    twilightBoss("twilightforest:minotaur", "#twilight");
    twilightBoss("twilightforest:yeti", "#twilight");
    twilightBoss("twilightforest:ice_crystal", "#twilight_2");
    twilightBoss("twilightforest:snow_guardian", "#twilight_2");
    twilightBoss("twilightforest:stable_ice_core", "#twilight_2_bow");
    twilightBoss("twilightforest:unstable_ice_core", "#twilight_2_bow");

})