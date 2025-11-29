ServerEvents.recipes(event => {

    event.shaped($StructureQuill.forStructure("gods_ember:ae_lab"), [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: '#forge:ingots/iron',
        B: 'minecraft:map'
    }).id('sdbf:ae_lab_s2')
    
})