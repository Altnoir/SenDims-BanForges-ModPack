let bannedTag = $TagKey.create($Registries.ENTITY_TYPE, new ResourceLocation('enderio:soul_vial_blacklist'));

BlockEvents.rightClicked("minecraft:spawner", event => {
    let item = event.item;
    if (item.item instanceof $SpawnEggItem) {
        let egg = $SpawnEggItem(item.item);
        let entityType = egg.getDefaultType();

        console.log(entityType.is(bannedTag))
        if (entityType && entityType.is(bannedTag)) {
            event.player.tell("你不能将这种生物放入刷怪笼！");
            event.player.cooldowns.addCooldown(event.item, 40);
            event.cancel();
        }

    }

});