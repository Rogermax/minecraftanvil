import { Enchant } from './Enchant';
import { EnchantableType } from './EnchantableType';

export interface Enchantable {
    type: EnchantableType
    penalty: number;
    isEnchanted: boolean;
    enchants: Enchant[];
}