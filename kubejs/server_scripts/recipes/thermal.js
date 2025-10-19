ServerEvents.recipes(event => {
    
    event.shaped('#forge:gears/copper', [
        ' A ',
        'ABA',
        ' A '
    ], {
        A: '#forge:ingots/copper',
        B: '#forge:storage_blocks/copper'
    }).id('sdbf:copper_gear')

    event.shaped('#forge:gears/constantan', [
        ' A ',
        'ABA',
        ' A '
    ], {
        A: '#forge:ingots/constantan',
        B: '#forge:storage_blocks/constantan'
    }).id('sdbf:copper_constantan')

    event.shaped('#forge:gears/invar', [
        ' A ',
        'ABA',
        ' A '
    ], {
        A: '#forge:ingots/invar',
        B: '#forge:storage_blocks/invar'
    }).id('sdbf:copper_invar')

    event.shaped('#forge:gears/diamond', [
        ' A ',
        'ABA',
        ' A '
    ], {
        A: '#forge:gems/diamond',
        B: '#forge:storage_blocks/diamond'
    }).id('sdbf:copper_diamond')

})