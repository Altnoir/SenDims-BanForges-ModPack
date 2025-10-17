ServerEvents.tags("block", event => {
    event.removeAll('aether:aether_portal_blocks')

    event.add('aether:aether_portal_blocks',
        'aether:ambrosium_block'
    )

    event.remove('minecraft:needs_stone_tool', 
        'aether:carved_stone'
    )
    event.add("kubejs:mining_tier_5", 
        'aether:carved_stone'
    )

})