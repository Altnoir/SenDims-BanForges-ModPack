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
    "apotheosis:uncommon": 10,
    "apotheosis:rare": 20,
    "apotheosis:epic": 50,
    "apotheosis:mythic": 50,
    "apotheosis:ancient": 100,
};

EntityEvents.drops(event => {
    if (event.entity.isPlayer()) return;
    // console.log(event.entity)
    // console.log(event.getDrops())
    let extraDrops = [];
    for (const i of event.getDrops()) {
        console.log(i)
        if (global.materialRemoveRule.test(i.getItem())) {
            // console.log(global.materialRemoveRule.test(i.getItem()))
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
        }

    }

    extraDrops.forEach(ele => {
        event.addDrop(ele);
    })

})