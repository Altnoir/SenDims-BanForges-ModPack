// priority: 100
ServerEvents.highPriorityData(event => {
    tetraMaterialBuilder(event, "mythic_material").setCategory("gem")
        .setPrimary(6).setSecondary(2.5).setTertiary(0.5)
        .setDurability(300).setIntegrityCost(1).setIntegrityGain(2)
        .setMagicCapacity(80).setToolLevel(7).setToolEfficiency(7)
        .addAttributes("attributeslib:fire_damage", 2)
        .addAttributes("slashblade_sendims:frenzy_resistance", 0.25)
        .setTints("ef882c", "ffcb9c").addTexture("shiny").addTexture("crude")
        .addItemMaterial('apotheosis:mythic_material')
        .addImprovements("arrested", 0)
        .setRequiredTool("hammer_dig", 1)
        .build()

})
