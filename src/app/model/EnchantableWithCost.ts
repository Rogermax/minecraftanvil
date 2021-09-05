import { Enchantable } from './Enchantable';

export interface EnchantableWithCost {
    cost: number, 
    totalCost: number;
    maxCost: number;
    enchant: Enchantable;
    children?: [EnchantableWithCost, EnchantableWithCost]
}