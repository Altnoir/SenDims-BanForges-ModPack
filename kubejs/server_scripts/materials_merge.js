global.materialReplaceRules = new Map();

// 箭矢 
global.materialReplaceRules.set('minecraft:arrow', [
    'minecraft:spectral_arrow',
    'minecraft:tipped_arrow',
    'aether:golden_dart',
    'aether:poison_dart',
    'aether:enchanted_dart'
]);

global.materialReplaceRules.set('minecraft:book', [
    'minecraft:enchanted_book'
]);

global.materialReplaceRules.set('umapyoi:speed_low_item', [
    'umapyoi:stamina_low_item',
    'umapyoi:strength_low_item',
    'umapyoi:mentality_low_item',
    'umapyoi:wisdom_low_item'
]);

global.materialReplaceRules.set('umapyoi:speed_mid_item', [
    'umapyoi:stamina_mid_item',
    'umapyoi:strength_mid_item',
    'umapyoi:mentality_mid_item',
    'umapyoi:wisdom_mid_item',
    'umapyoi:skill_book'
]);

global.materialReplaceRules.set('umapyoi:speed_high_item', [
    'umapyoi:stamina_high_item',
    'umapyoi:strength_high_item',
    'umapyoi:mentality_high_item',
    'umapyoi:wisdom_high_item'
]);

global.materialReplaceRules.set('minecraft:potato', [
    '#c:crops'
]);

global.materialReplaceRules.set('blue_skies:azulfo_horn', [
    'minecraft:goat_horn'
]);

global.materialRemoveRule = [
    ItemFilter.TOOL,
    ItemFilter.ARMOR,
    ItemFilter.WEAPON
]

LootJS.modifiers((event) => {
    const entityModifier = event.addLootTypeModifier(LootType.ENTITY);
    const blockModifier = event.addLootTypeModifier(LootType.BLOCK);
    const fishingModifier = event.addLootTypeModifier(LootType.FISHING);
    const chestModifier = event.addLootTypeModifier(LootType.CHEST);

    for (const to of global.materialReplaceRules.keys()) {
        global.materialReplaceRules.get(to).forEach(from => {
            entityModifier.replaceLoot(from, to, true);
            blockModifier.replaceLoot(from, to, true);
            fishingModifier.replaceLoot(from, to, true);
            chestModifier.replaceLoot(from, to, true);

        });
    }

    global.materialRemoveRule.forEach(rule => {
        entityModifier.removeLoot(rule);
        blockModifier.removeLoot(rule);
        fishingModifier.removeLoot(rule);
        chestModifier.removeLoot(rule);
    })


});

ServerEvents.tags("item", event => {
    global.materialReplaceRules.forEach((value, key) => {
        const id = "kubejs:" + key.split(":")[1] + "_unified";
        event.add(id, value);
        console.log(id);
    })
    

})