import { EnchantType } from './EnchantType';

export interface Enchant {
  type: EnchantType;
  disabled?: boolean;
  level?: number;
  max: number;
  mulItem: number;
  mulBook: number;
}
