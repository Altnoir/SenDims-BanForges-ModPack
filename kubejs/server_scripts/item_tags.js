ServerEvents.tags("item", event => {
    // event.removeAll('twilightforest:portal/activator')

    // event.add('twilightforest:portal/activator',
    //     'minecraft:nether_star'
    // )

    event.add('forge:gems/ruby',
        'thermal_shock:ruby'
    )

    event.add('quark:stone_tool_materials',
        'thermal_shock:cobbled_shale'
    )

    event.add('minecraft:logs', [
        'thermal_shock:ochre_log',
        'thermal_shock:ochre_wood',
        'thermal_shock:stripped_ochre_log',
        'thermal_shock:stripped_ochre_wood',
        'thermal_shock:vermilli_log',
        'thermal_shock:vermilli_wood',
        'thermal_shock:stripped_vermilli_log',
        'thermal_shock:stripped_vermilli_wood',
        'thermal_shock:shiver_log',
        'thermal_shock:shiverglitter_wood',
        'thermal_shock:stripped_shiverglitter_log',
        'thermal_shock:stripped_shiverglitter_wood',
        'thermal_shock:kyaneos_log',
        'thermal_shock:kyaneos_wood',
        'thermal_shock:stripped_kyaneos_log',
        'thermal_shock:stripped_kyaneos_wood'
    ])

    // TODO 证章强化材料

    event.add("slashblade_sendims:drc_health_material_0", [
        '#forge:ingots/iron',
        'thermal_shock:ferrum_ingot'

    ])

    event.add("slashblade_sendims:drc_damage_material_0", [
        '#forge:ingots/gold',
        'thermal:ruby'

    ])

    event.add('slashblade_sendims:drc_rank_material_1',
        'minecraft:diamond_block'

    )

    event.add("slashblade_sendims:drc_health_material_1", [
        'twilightforest:steeleaf_ingot',
        'deep_aether:skyjade',
        'kubejs:bedrock_breaker',
        'apotheosis:rare_material',

    ])

    event.add("slashblade_sendims:drc_damage_material_1", [
        'thermal_shock:phobotite',
        'minecraft:diamond',
        'aether_redux:gravitite_ingot',
        'ad_astra:desh_sliding_door',

    ])

    event.add('slashblade_sendims:drc_rank_material_2',
        'deep_aether:stratus_ingot',
        'minecraft:nether_star',

    )


    event.add("slashblade_sendims:drc_health_material_2", [
        // 'quark:blaze_lantern',
        // 'apotheosis:epic_material'
        "minecraft:bedrock"

    ])

    event.add("slashblade_sendims:drc_damage_material_2", [
        'minecraft:netherite_ingot'

    ])

})
