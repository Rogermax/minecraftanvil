import { EnchantType } from './EnchantType';

export interface Enchant {
    type: EnchantType
    level?: number;
    max: number;
    mulItem: number;
    mulBook: number;
}