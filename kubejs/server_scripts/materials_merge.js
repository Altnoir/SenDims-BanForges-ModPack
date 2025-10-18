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

global.materialReplaceRules.set('minecraft:iron_ingot', [
    'aether:iron_ring',
    'aether:ice_ring',
    'aether:skyroot_poison_bucket',

    'ad_astra:space_helmet',
    'ad_astra:space_suit',
    'ad_astra:space_pants',
    'ad_astra:space_boots'
]);

global.materialReplaceRules.set('minecraft:gold_ingot', [
    'aether:golden_ring'
]);

global.materialReplaceRules.set('aether:zanite_gemstone', [
    'aether:zanite_ring'
]);

global.materialReplaceRules.set('deep_aether:skyjade', [
    'deep_aether:skyjade_ring'
]);

global.materialReplaceRules.set('aether_redux:gravitite_ingot', [
    'deep_aether:gravitite_ring'
]);

global.materialReplaceRules.set('deep_aether:stratus_ingot', [
    'deep_aether:stratus_ring'
]);

global.materialReplaceRules.set('aether:ambrosium_shard', [
    'aether_redux:enchanted_ring'
]);

// global.materialRemoveRule = ItemFilter.or(
//     ItemFilter.TOOL, ItemFilter.or(
//         ItemFilter.ARMOR, ItemFilter.or(
//             ItemFilter.WEAPON, 'minecraft:shield'
//         )));

global.materialRemoveRule = ItemFilter.and(ItemFilter.DAMAGEABLE, ItemFilter.not("slashblade:slashblade"));


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

    entityModifier.removeLoot(global.materialRemoveRule);
    blockModifier.removeLoot(global.materialRemoveRule);
    fishingModifier.removeLoot(global.materialRemoveRule);
    chestModifier.removeLoot(global.materialRemoveRule);

});

ServerEvents.tags("item", event => {
    global.materialReplaceRules.forEach((value, key) => {
        const id = "kubejs:" + key.split(":")[1] + "_unified";
        event.add(id, value);
        // console.log(id);
    })


})