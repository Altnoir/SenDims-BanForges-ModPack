let bbAllowDims = new Set();
bbAllowDims.add("ad_astra:moon");
bbAllowDims.add("minecraft:the_nether");

const moonToNetherKey = "sbdf.moon_to_nether";

BlockEvents.rightClicked("minecraft:bedrock", event => {
    if (event.item == "kubejs:bedrock_breaker") {
        if (bbAllowDims.has(String(event.getLevel().getDimension().toString()))) {
            // event.getLevel().removeBlock(event.block.getPos(), true);
            event.getServer().getAllLevels()
                .forEach((lev) => {
                    if (bbAllowDims.has(String(lev.getDimension().toString()))) {
                        lev.removeBlock(event.block.getPos(), true);
                        lev.removeBlock(event.block.getPos().above(191), true);
                    }

                })

            event.player.cooldowns.addCooldown(event.item, 50);
            event.player.playNotifySound("sounds:block.deepslate_iron_ore.break", event.player.soundSource, 10.0, 1.5);
            event.item.shrink(1);

            let level = event.level;
            if (!level.getData().getOrDefault(moonToNetherKey, false)) {
                level.getData().put(moonToNetherKey, true);
                level.runCommandSilent("portal global connect_floor ad_astra:moon minecraft:the_nether");
                level.runCommandSilent("portal global connect_ceil minecraft:the_nether ad_astra:moon");
            }
        }
    }
})

// const $RegistryManager = Java.loadClass('net.minecraftforge.registries.RegistryManager');
// ItemEvents.rightClicked("minecraft:diamond", event => {

//     const modid = 'slashblade';
//     const registryName = 'slash_arts';

//     const rl = new ResourceLocation(modid, registryName);
//     const registry = $RegistryManager.ACTIVE.getRegistry(rl);

//     if (registry == null) {
//         console.log('注册表未找到: ' + rl.toString());
//         return;
//     }

//     const values = registry.getValues();
//     const it = values.iterator();
//     while (it.hasNext()) {
//         let entry = it.next();
//         let id = null;
//         try {
//             id = registry.getKey(entry);
//         } catch (e) {
//             id = null;
//         }
//         console.log((id ? id.toString() : String(entry)));
//     }
// })