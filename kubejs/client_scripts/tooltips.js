
ItemEvents.tooltip(event => {

    event.add('minecraft:arrow', Text.translatable('info.kubejs.material.arrow.1').color(Color.LIME_DYE))
    event.add('minecraft:book', Text.translatable('info.kubejs.material.book.1').color(Color.LIME_DYE))
    event.add('umapyoi:speed_low_item', Text.translatable('info.kubejs.material.lowbook').color(Color.LIME_DYE))
    event.add('umapyoi:speed_mid_item', Text.translatable('info.kubejs.material.midbook').color(Color.LIME_DYE))
    event.add('umapyoi:speed_high_item', Text.translatable('info.kubejs.material.highbook').color(Color.LIME_DYE))


    event.addAdvanced(Ingredient.all, (item, advanced, text) => {
        if (event.alt && item.nbt) {
            text.add(Text.of('NBT: ').append(Text.prettyPrintNbt(item.nbt)))
        }
    })

})