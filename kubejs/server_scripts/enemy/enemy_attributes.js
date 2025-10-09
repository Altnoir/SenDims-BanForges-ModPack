const $TargetingConditions = Java.loadClass('net.minecraft.world.entity.ai.targeting.TargetingConditions')

const diffLevelPrefix = "dl_";
const health = "minecraft:generic.max_health"
const attack = "minecraft:generic.attack_damage"
const armor = "minecraft:generic.armor"

// 攻击， 生命， 护甲
/**
 * 均衡模板
 */
const typeA = {
    "0_1": [6, 20, 2],
    "1_1": [12, 55, 4]
};
/**
 * 脆皮模板
 */
const typeB = {
    "0_1": [8, 18, 0],
    "1_1": [16, 35, 2]
};
/**
 * 血牛模板
 */
const typeC = {
    "0_1": [4, 50, 1],
    "1_1": [10, 120, 3]
};
/**
 * 重甲模板
 */
const typeD = {
    "0_1": [4, 20, 3],
    "1_1": [10, 55, 7]
};
/**
 * 中立/默认模板
 */
const type0 = {
    "0_1": [4, 18, 0],
    "1_1": [10, 35, 2]
};

const hpFloat = 0.3;
const atkFloat = 0.1;
const armorFloat = 0.1;
/**
 * 维度对应的难度等级
 */
const dimensionStages = {
    "thermal_shock:loqendia": "0_1",

    "kubejs:deeprealm_1": "1_1",

    "twilightforest:twilight_forest": "1_2",
    "ad_astra:moon": "1_2",

    "minecraft:the_nether": "1_3",

    "ad_astra:mars": "1_4",

    "kubejs:deeprealm_2": "2_1",
    "ad_astra:venus": "2_1",
    "ad_astra:mercury": "2_1",

    "kubejs:deeprealm_3": "2_2",
    "undergarden:undergarden": "2_2",

    "minecraft:the_end": "2_3",

    "kubejs:asteroid_belt": "3_1",

    "kubejs:saturn": "3_2",

    "kubejs:saturn_orbit": "3_3",

    "kubejs:pluto": "4_1",
    "ad_astra:glacio": "4_1",

    "kubejs:deeprealm_4": "4_2"

};
/**
 * 生物对应的模板
 */
const mobTypes = {
    "thermal_shock:willograde": typeD,
    "thermal_shock:trilobite": typeB,
    "thermal_shock:graver": typeA,
    "thermal_shock:skullscor": typeB,
    "thermal_shock:skeletitan": typeC,
    "thermal_shock:mantletitan": typeD,
    "thermal_shock:frost_titan": typeD,
    "thermal_shock:errant": typeB,
    "thermal_shock:gore_flayer": typeB,
    "thermal_shock:magnetite": typeD,
    "thermal_shock:bonerahna": type0,
    "thermal_shock:frostilyte": typeA,
    "thermal_shock:frostilyte_soldier": typeA,
    "thermal_shock:icidrone": typeB,
    "thermal_shock:icidrogrunt": typeB,
    "thermal_shock:icidrozerk": typeC,
    "thermal_shock:galvanite": typeA,
    "thermal_shock:infestophage_seed": type0,
    "thermal_shock:dormant_monolith": typeC,

};
/**
 * 黑名单
 */
const entityBlackList = new Set();

EntityEvents.spawned(event => {
    /**
     * @type {Internal.LivingEntity}
     */
    let entity = event.entity;
    if (!entity || !entity.isLiving()) return;
    let name = String(entity.type.toString());

    if (entity.isPlayer()) return;
    if (entityBlackList.has(name)) return;
    if (!entity.forgePersistentData) return;
    if (entity.forgePersistentData.contains('dimension_difficulty')) return;

    let dim = event.level.dimension.toString();
    let dimStage = dimensionStages[dim];
    if (!dimStage) dimStage = "0_1";
    entity.forgePersistentData.putString('sbsd.diff', dimStage);
    // console.log(name)
    let mobType = mobTypes[name];
    if (!mobType) mobType = type0;
    let mobValues = mobType[dimStage];

    /**
     * @type {Internal.Player}
     */
    // let player = entity.getLevel().getNearestPlayer(entity, 240);
    // let diffNum = -1;

    // if (player) {
    //     player.stages.getAll().forEach(element => {
    //         if (element.startsWith(diffLevelPrefix)) {
    //             diffNum = Math.max(diffNum, parseInt(element.split('_')[2]));
    //         }
    //     })

    // }
    // if (diffNum == -1) diffNum = 1;

    // let playerCount = entity.getLevel().getNearbyPlayers(
    //     $TargetingConditions.DEFAULT,
    //     entity,
    //     AABB.ofSize(entity.position(), 64, 64, 64)
    // ).size() - 1;
    // if (playerCount < 0) playerCount = 0;

    if (entity.attributes.hasAttribute(attack)) {
        let val = mobValues[0];
        val *= 1 + (Math.random() * atkFloat);
        val = Math.floor(val);
        entity.setAttributeBaseValue(attack, val);
        // console.log(val);
    }

    if (entity.attributes.hasAttribute(health)) {
        let val = mobValues[1];
        val *= 1 + (Math.random() * hpFloat);
        val = Math.floor(val);
        entity.setAttributeBaseValue(health, val);
        entity.setHealth(entity.getMaxHealth());
        // console.log(val);
    }

    if (entity.attributes.hasAttribute(armor)) {
        let val = mobValues[2];
        val *= 1 + (Math.random() * armorFloat);
        val = Math.floor(val);
        entity.setAttributeBaseValue(armor, val);
        // console.log(val);
    }

})