// priority: 100
ServerEvents.highPriorityData(event => {
    // tetraMaterialBuilder(event, "mythic_material").setCategory("gem")
    //     .setPrimary(6).setSecondary(2.5).setTertiary(0.5)
    //     .setDurability(300).setIntegrityCost(1).setIntegrityGain(2)
    //     .setMagicCapacity(80).setToolLevel(7).setToolEfficiency(7)
    //     .addAttributes("attributeslib:fire_damage", 2)
    //     .addAttributes("slashblade_sendims:frenzy_resistance", 0.05)
    //     .setTints("ef882c", "ffcb9c").addTexture("shiny").addTexture("crude")
    //     .addItemMaterial('apotheosis:mythic_material')
    //     .addImprovements("arrested", 0)
    //     .setRequiredTool("hammer_dig", 1)
    //     .build();

    tetraMaterialBuilder(event, "ironwood").setCategory("metal")
        .setPrimary(2.3).setSecondary(2.2).setTertiary(1.3)
        .setDurability(250).setIntegrityCost(3).setIntegrityGain(4)
        .setMagicCapacity(80).setToolLevel(3).setToolEfficiency(4)
        .addAttributes("attributeslib:armor_pierce", 1)
        .setTints("4d4139", "7e8b72").addTexture("heavy").addTexture("metal")
        .addItemMaterial('twilightforest:ironwood_ingot')
        .addImprovements("arrested", 0)
        .setRequiredTool("hammer_dig", 1)
        .build();

    tetraMaterialBuilder(event, "ambrosium_shard").setCategory("gem")
        .setPrimary(2.2).setSecondary(2.2).setTertiary(1.9)
        .setDurability(250).setIntegrityCost(2).setIntegrityGain(4)
        .setMagicCapacity(130).setToolLevel(3).setToolEfficiency(4)
        .addAttributes("**attributeslib:armor_shred", 0.02)
        .setTints("f9f882", "d9db30").addTexture("shiny").addTexture("crude")
        .addItemMaterial('aether:ambrosium_shard')
        .addImprovements("arrested", 0)
        .setRequiredTool("hammer_dig", 1)
        .build();

    tetraMaterialBuilder(event, "bio_crystal").setCategory("gem")
        .setPrimary(2.2).setSecondary(2.3).setTertiary(1.8)
        .setDurability(250).setIntegrityCost(2).setIntegrityGain(5)
        .setMagicCapacity(140).setToolLevel(3).setToolEfficiency(4)
        .setTints("c2d1db", "9eb0bb").addTexture("shiny").addTexture("crude")
        .addItemMaterial('deep_aether:bio_crystal')
        .addImprovements("arrested", 0)
        .setRequiredTool("hammer_dig", 1)
        .build();

})
