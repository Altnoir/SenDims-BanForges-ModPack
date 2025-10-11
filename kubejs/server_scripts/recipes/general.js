ServerEvents.recipes(event => {
    event.shapeless('slashblade:proudsoul_tiny',
        [Item.of('slashblade_sendims:blood_jade', '{sbsd.bj.kill_count:10}')])
        .modifyResult((grid, result) => {
            let bloodJade = grid.find('slashblade_sendims:blood_jade');
            if (bloodJade && bloodJade.nbt) {
                let count = Math.floor(bloodJade.nbt.getInt('sbsd.bj.kill_count') / 10);
                count = Math.max(1, Math.min(64, count));
                return Item.of('slashblade:proudsoul_tiny', count);
            }

            return result;
        })
        .id("sdbf:jade_to_soul")

    event.smithing('slashblade:proudsoul_sphere',
        'slashblade:proudsoul_tiny',
        'slashblade:proudsoul_ingot',
        'slashblade:proudsoul_ingot'
    ).id("sdbf:proudsoul_sphere")

    event.smithing('slashblade:proudsoul_crystal',
        'slashblade:proudsoul_sphere',
        'slashblade:proudsoul_sphere',
        'slashblade:proudsoul_sphere'
    ).id("sdbf:proudsoul_crystal")

    event.smithing('slashblade:proudsoul_trapezohedron',
        'slashblade:proudsoul_crystal',
        'slashblade:proudsoul_crystal',
        'slashblade:proudsoul_crystal'
    ).id("sdbf:proudsoul_trapezohedron")

    event.recipes.thermal.smelter('slashblade:proudsoul_sphere', [
        '2x slashblade:proudsoul_ingot'
    ])
        .energy(8192)
        .id("sdbf:proudsoul_sphere_acc")

    event.recipes.thermal.smelter('2x slashblade:proudsoul_crystal', [
        '5x slashblade:proudsoul_sphere',
        'minecraft:bedrock'
    ])
        .energy(16384)
        .id("sdbf:proudsoul_crystal_acc")

    event.recipes.thermal.smelter('slashblade:proudsoul_trapezohedron', [
        '2x slashblade:proudsoul_crystal',
        'minecraft:bedrock'
    ])
        .energy(32768)
        .id("sdbf:proudsoul_trapezohedron_acc")

})


