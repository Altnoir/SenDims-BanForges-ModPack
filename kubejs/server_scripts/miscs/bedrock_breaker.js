let bbAllowDims = new Set();
bbAllowDims.add("ad_astra:moon");
bbAllowDims.add("minecraft:the_nether");

BlockEvents.rightClicked("minecraft:bedrock", event => {
    if (event.item == "kubejs:bedrock_breaker") {
        if (bbAllowDims.has(String(event.getLevel().getDimension().toString()))) {
            event.getLevel().removeBlock(event.block.getPos(), true);
            event.player.cooldowns.addCooldown(event.item, 50);
            event.player.playNotifySound("sounds:block.deepslate_iron_ore.break", event.player.soundSource, 10.0, 1.5);
            event.item.shrink(1);
        }
    }
})