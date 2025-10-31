// priority: 100
ServerEvents.highPriorityData(event => {
    // 铜材料
    tetraMaterialBuilder(event, "copper").setCategory("metal")
        .setPrimary(0.8).setSecondary(0.9).setTertiary(0.8)
        .setDurability(200).setIntegrityCost(1).setIntegrityGain(3)
        .setMagicCapacity(60).setToolLevel(2).setToolEfficiency(4)
        .addAttributes("minecraft:generic.armor", 0.25)
        .setTints("b4684d", "d0805a")
        .addTexture("metal").addTexture("default")
        .addItemMaterial('minecraft:copper_ingot')
        .setTagMaterial('forge:ingots/copper')
        .setRequiredTool("hammer_dig", 1)
        .build();

    // 锡材料
    tetraMaterialBuilder(event, "tin").setCategory("metal")
        .setPrimary(1.1).setSecondary(1.1).setTertiary(0.9)
        .setDurability(180).setIntegrityCost(1).setIntegrityGain(3)
        .setMagicCapacity(55).setToolLevel(2).setToolEfficiency(4)
        .addAttributes("minecraft:generic.armor_toughness", 0.25)
        .setTints("c0c0c0", "d8d8d8")
        .addTexture("metal").addTexture("default")
        .setTagMaterial('forge:ingots/tin')
        .setRequiredTool("hammer_dig", 1)
        .build();

    // 铁材料
    tetraMaterialBuilder(event, "iron").setCategory("metal")
        .setPrimary(1.6).setSecondary(1.4).setTertiary(1.2)
        .setDurability(250).setIntegrityCost(1).setIntegrityGain(2)
        .setMagicCapacity(70).setToolLevel(3).setToolEfficiency(6)
        .setTints("a8a8a8", "c8c8c8")
        .addTexture("metal").addTexture("default")
        .setTagMaterial('forge:ingots/iron')
        .setRequiredTool("hammer_dig", 1)
        .build();

    // 银材料
    tetraMaterialBuilder(event, "silver").setCategory("metal")
        .setPrimary(1.3).setSecondary(1.2).setTertiary(0.9)
        .setDurability(220).setIntegrityCost(1).setIntegrityGain(2)
        .setMagicCapacity(90).setToolLevel(2).setToolEfficiency(5)
        .addAttributes("attributeslib:crit_chance", 0.025)
        .setTints("d8d8d8", "f0f0f0")
        .addTexture("shiny").addTexture("metal")
        .setTagMaterial('forge:ingots/silver')
        .setRequiredTool("hammer_dig", 1)
        .build();

    // 金材料
    tetraMaterialBuilder(event, "gold").setCategory("metal")
        .setPrimary(1.2).setSecondary(1.3).setTertiary(0.8)
        .setDurability(100).setIntegrityCost(1).setIntegrityGain(2)
        .setMagicCapacity(120).setToolLevel(2).setToolEfficiency(8)
        .addAttributes("attributeslib:crit_damage", 0.025)
        .setTints("ffd700", "fff8dc")
        .addTexture("shiny").addTexture("metal")
        .setTagMaterial('forge:ingots/gold')
        .setRequiredTool("hammer_dig", 1)
        .build();

    // 铅材料
    tetraMaterialBuilder(event, "lead").setCategory("metal")
        .setPrimary(1.5).setSecondary(1.5).setTertiary(1.0)
        .setDurability(280).setIntegrityCost(0).setIntegrityGain(2)
        .setMagicCapacity(50).setToolLevel(2).setToolEfficiency(3)
        .addAttributes("minecraft:generic.attack_damage", 0.25)
        .addAttributes("**minecraft:generic.movement_speed", -0.1)
        .setTints("404040", "606060")
        .addTexture("heavy").addTexture("metal")
        .setTagMaterial('forge:ingots/lead')
        .setRequiredTool("hammer_dig", 1)
        .build();

    // 镍材料
    tetraMaterialBuilder(event, "nickel").setCategory("metal")
        .setPrimary(1.6).setSecondary(1.6).setTertiary(1.1)
        .setDurability(240).setIntegrityCost(1).setIntegrityGain(2)
        .setMagicCapacity(75).setToolLevel(3).setToolEfficiency(6)
        .addAttributes("attributeslib:mining_speed", 0.05)
        .setTints("c8b4a0", "e0ccb8")
        .addTexture("metal").addTexture("default")
        .setTagMaterial('forge:ingots/nickel')
        .setRequiredTool("hammer_dig", 1)
        .build();

    // 赛特斯石英材料
    tetraMaterialBuilder(event, "certus_quartz").setCategory("gem")
        .setPrimary(1.8).setSecondary(1.5).setTertiary(1.2)
        .setDurability(350).setIntegrityCost(1).setIntegrityGain(3)
        .setMagicCapacity(140).setToolLevel(3).setToolEfficiency(5)
        .addAttributes("minecraft:generic.max_health", 1.5)
        .setTints("e0e0e0", "f8f8f8")
        .addTexture("shiny").addTexture("crude")
        .setTagMaterial('forge:gems/certus_quartz')
        .setRequiredTool("hammer_dig", 1)
        .build();

    // 紫水晶材料
    tetraMaterialBuilder(event, "amethyst").setCategory("gem")
        .setPrimary(2.0).setSecondary(2.0).setTertiary(1.2)
        .setDurability(400).setIntegrityCost(1).setIntegrityGain(3)
        .setMagicCapacity(160).setToolLevel(3).setToolEfficiency(5)
        .addAttributes("minecraft:generic.max_health", 1.5)
        .setTints("9966cc", "c8a2c8")
        .addTexture("shiny").addTexture("crude")
        .setTagMaterial('forge:gems/amethyst')
        .setRequiredTool("hammer_dig", 1)
        .build();

    // 青铜材料
    tetraMaterialBuilder(event, "bronze").setCategory("metal")
        .setPrimary(2.1).setSecondary(2.1).setTertiary(1.3)
        .setDurability(300).setIntegrityCost(1).setIntegrityGain(4)
        .setMagicCapacity(80).setToolLevel(3).setToolEfficiency(7)
        .addAttributes("attributeslib:mining_speed", 0.05)
        .setTints("cd7f32", "b08d57")
        .addTexture("metal").addTexture("heavy")
        .setTagMaterial('forge:ingots/bronze')
        .setRequiredTool("hammer_dig", 1)
        .build();

    // 钢材料
    tetraMaterialBuilder(event, "steel").setCategory("metal")
        .setPrimary(2.3).setSecondary(2.2).setTertiary(1.4)
        .setDurability(450).setIntegrityCost(2).setIntegrityGain(4)
        .setMagicCapacity(70).setToolLevel(4).setToolEfficiency(7)
        .addAttributes("minecraft:generic.armor", 0.3)
        .setTints("808080", "a0a0a0")
        .addTexture("heavy").addTexture("metal")
        .setTagMaterial('forge:ingots/steel')
        .setRequiredTool("hammer_dig", 1)
        .build();

    // 钻石材料
    tetraMaterialBuilder(event, "diamond").setCategory("gem")
        .setPrimary(2.5).setSecondary(2.5).setTertiary(1.5)
        .setDurability(1561).setIntegrityCost(2).setIntegrityGain(4)
        .setMagicCapacity(100).setToolLevel(3).setToolEfficiency(8)
        .addAttributes("slashblade:slashblade_damage", 0.015)
        .setTints("4af2ff", "a6faff")
        .addTexture("shiny").addTexture("crude")
        .setTagMaterial('forge:gems/diamond')
        .setRequiredTool("hammer_dig", 1)
        .build();

    // 绿宝石材料
    tetraMaterialBuilder(event, "emerald").setCategory("gem")
        .setPrimary(2.6).setSecondary(2.4).setTertiary(1.6)
        .setDurability(800).setIntegrityCost(2).setIntegrityGain(4)
        .setMagicCapacity(130).setToolLevel(3).setToolEfficiency(7)
        .addAttributes("minecraft:generic.attack_damage", 0.25)
        .setTints("50c878", "90ee90")
        .addTexture("shiny").addTexture("crude")
        .setTagMaterial('forge:gems/emerald')
        .setRequiredTool("hammer_dig", 1)
        .build();

})
