const $BloodJade = Java.loadClass("com.tonywww.slashblade_sendims.items.BloodJade");

const bossDropReplace = new Map();

bossDropReplace.set("apotheosis:common", '3x apotheosis:common_material');
bossDropReplace.set("apotheosis:uncommon", '3x apotheosis:uncommon_material');
bossDropReplace.set("apotheosis:rare", '2x apotheosis:rare_material');
bossDropReplace.set("apotheosis:epic", '2x apotheosis:epic_material');
bossDropReplace.set("apotheosis:mythic", 'apotheosis:mythic_material');
bossDropReplace.set("apotheosis:ancient", '2x apotheosis:mythic_material');

const jadeMap = {
    "apotheosis:common": 10,
    "apotheosis:uncommon": 20,
    "apotheosis:rare": 50,
    "apotheosis:epic": 100,
    "apotheosis:mythic": 200,
    "apotheosis:ancient": 500,
};

EntityEvents.drops(event => {
    if (event.entity.isPlayer()) return;
    let extraDrops = [];
    for (const i of event.getDrops()) {
        // console.log(i)
        // console.log(rule.test(i.getItem()))
        if (global.materialRemoveRule.test(i.getItem())) {
            let nbt = i.getItem().getNbt();
            let item = "minecraft:air";
            if (nbt && nbt.contains("affix_data")) {
                let affix = nbt.getCompound("affix_data");
                if (affix && affix.contains("rarity")) {
                    let rarity = String(affix.getString("rarity"));
                    item = bossDropReplace.get(rarity);

                    extraDrops.push($BloodJade.withKillCount(jadeMap[rarity]));

                }
            }
            i.setItem(item);
            break;
        }

    }

    extraDrops.forEach(ele => {
        event.addDrop(ele);
    })

})