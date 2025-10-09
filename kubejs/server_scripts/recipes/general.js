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

})


