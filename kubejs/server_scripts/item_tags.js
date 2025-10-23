ServerEvents.tags("item", event => {
    event.removeAll('twilightforest:portal/activator')

    event.add('twilightforest:portal/activator',
        'minecraft:nether_star'
    )

    event.add("slashblade_sendims:drc_health_material_0", [
        'twilightforest:steeleaf_ingot',
        'deep_aether:skyjade',
        'kubejs:bedrock_breaker',
        'apotheosis:uncommon_material',
        'apotheosis:rare_material',

    ])

    event.add("slashblade_sendims:drc_damage_material_0", [
        'thermal_shock:phobotite',
        'minecraft:diamond',
        'aether_redux:gravitite_ingot',
        'ad_astra:desh_sliding_door',

    ])

    event.add('slashblade_sendims:drc_rank_material_1',
        'deep_aether:stratus_ingot',
        'minecraft:nether_star',
        
    )

    event.add("slashblade_sendims:drc_health_material_1", [
        'quark:blaze_lantern',
        'apotheosis:epic_material'

    ])

    event.add("slashblade_sendims:drc_damage_material_1", [
        'minecraft:netherite_ingot',
        'ad_astra:ostrum_sliding_door',
        'thermal:enderium_gear',

    ])

})
