import { Enchantable, Enchant, EnchantableType } from "../models/enchanted.book"

export function findCost(target: Enchantable, sacrifice: Enchantable) {
    // const result: Enchantable =  {
    //     type: target.type,
    //     enchants: target.enchants.concat(sacrifice.enchants),
    //     isEnchanted: true,
    //     penalty: Math.max(target.penalty, sacrifice.penalty) + 1
    // }
    if (sacrifice.type !== EnchantableType.Book) return 10000000;
    let target_penalty_cost = Math.pow(2, target.penalty) - 1
    let sacrifice_penalty_cost = Math.pow(2, sacrifice.penalty) - 1
    let totalLevels = target_penalty_cost + sacrifice_penalty_cost + getEnchantsCost(sacrifice);
    // console.log('cost: ' + printEnchantable(target) + ' + ' + printEnchantable(sacrifice) + ' = ' + totalLevels);
    return totalLevels;
}

function printEnchantable(enchant: Enchantable): string {
    if (!enchant) return '{undef}';
    return '[' + enchant.enchants.map(el => el.type).join(', ') + ']';
}

function getEnchantsCost(enchant: Enchantable): number {
    if (enchant == null || enchant.enchants == null) return 0;
    let total = 0;
    if (enchant.type === EnchantableType.Book) {
        enchant.enchants.map(el => total += getEnchantCostOnBook(el));
    } else {
        enchant.enchants.map(el => total += getEnchantCost(el));
    }
    return total;
}

function getEnchantCostOnBook(enchant: Enchant): number {
    return enchant.level * enchant.mulBook;
}

function getEnchantCost(enchant: Enchant): number {
    return enchant.level * enchant.mulItem;
}