ServerEvents.recipes(event => {

    event.custom({
        "type": "slashblade:slashblade_smithing",
        "addition": {
            "item": 'twilightforest:steeleaf_ingot'
        },
        "base": {
            "type": "slashblade:blade",
            "item": "slashblade:slashblade",
            "request": {
                "enchantments": [
                    {
                        "id": "minecraft:smite"
                    }
                ],
                "name": "last_smith:nagasada"
            }
        },
        "blade": "last_smith:exorcism_sakura",
        "template": {
            "item": "last_smith:scroll_named"
        }
    }).id("sdbf:exorcism_sakura_s2")

})