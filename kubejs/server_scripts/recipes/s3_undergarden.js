ServerEvents.recipes(event => {

    event.shaped('undergarden:catalyst', [
        'ACA',
        'CBC',
        'ACA'
    ], {
        A: '#forge:gems/carminite',
        B: 'twilightforest:lamp_of_cinders',
        C: '#forge:gems/diamond'
    }).keepIngredient('twilightforest:lamp_of_cinders')
        .id('sdbf:catalyst_s3')

})