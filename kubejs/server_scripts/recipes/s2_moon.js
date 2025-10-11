ServerEvents.recipes(event => {
    event.shaped($StructureQuill.forStructure("ad_astra:moon_dungeon"), [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'ad_astra:moon_stone',
        B: 'minecraft:map'
    }).id('sdbf:sq_moon_dungeon_s2')

})