import { Injectable } from '@angular/core';
import {
  APPLICABLE_ENCHANT,
  CONFLICT_ENCHANT,
  ENCHANT_LIST
} from '../db/enchants';
import { Enchant } from '../models/Enchant';
import { EnchantableType } from '../models/EnchantableType';
import { EnchantType } from '../models/EnchantType';

@Injectable({
  providedIn: 'root'
})
export class EnchantService {
  enchants: Enchant[] = [];

  getEnchants(): Enchant[] {
    return this.enchants;
  }

  restart(): void {
    this.enchants = [];
  }

  getAvailableEnchants(type?: EnchantableType): Enchant[] {
    if (!type) {
      return ENCHANT_LIST.map((el) => el);
    } else {
      const encl = APPLICABLE_ENCHANT.get(type);
      if (encl) {
        const result: Enchant[] = [];
        encl.map((el) => {
          const found = ENCHANT_LIST.find((el2) => el2.type == el);
          if (!!found) {
            result.push(found);
          }
        });
        return result;
      }
      return [];
    }
  }

  getAvailableEnchantTypes(type?: EnchantableType): EnchantType[] {
    if (!type) {
      return ENCHANT_LIST.map((el) => el.type);
    } else {
      const encl = APPLICABLE_ENCHANT.get(type);
      if (encl) return encl.map((el) => el);
      return [];
    }
  }

  addEnchant(param: Enchant): boolean {
    const found = this.enchants.find((el) => el.type == param.type);
    if (!!found || this.hasConflictWith(param.type)) {
      return false;
    }
    this.enchants.push(param);
    return true;
  }

  addRawEnchant(enchantType: EnchantType): Enchant | null {
    const found = this.enchants.find((el) => el.type == enchantType);
    if (!!found || this.hasConflictWith(enchantType)) {
      return null;
    }
    const foundRaw = ENCHANT_LIST.find((el) => el.type == enchantType);
    let enchant = null;
    if (foundRaw) {
      enchant = {
        max: foundRaw.max,
        mulBook: foundRaw.mulBook,
        mulItem: foundRaw.mulItem,
        type: enchantType,
        level: foundRaw.max
      };
      this.enchants.push(enchant);
    } else throw 'Tipo de encantamiento no encontrado: ' + enchantType;
    return enchant;
  }

  getNewEnchant(type?: EnchantableType): Enchant | null {
    const availableEnchantTypes = this.getAvailableEnchantTypes(type);
    if (availableEnchantTypes.length > 0) {
      const foundRaw = ENCHANT_LIST.find(
        (el) => el.type == availableEnchantTypes[0]
      );
      let enchant = null;
      if (foundRaw) {
        enchant = {
          max: foundRaw.max,
          mulBook: foundRaw.mulBook,
          mulItem: foundRaw.mulItem,
          type: availableEnchantTypes[0],
          level: foundRaw.max
        };
        return enchant;
      } else
        throw (
          'Tipo de encantamiento no encontrado en ENCHANT_LIST: ' +
          availableEnchantTypes[0]
        );
    }
    return null;
  }

  removeEnchant(param: Enchant): boolean {
    const found = this.enchants.find((el) => el.type == param.type);
    this.enchants = this.enchants.filter((el) => el.type != param.type);
    return !!found;
  }

  removeRawEnchant(param: EnchantType): boolean {
    const found = this.enchants.find((el) => el.type == param);
    this.enchants = this.enchants.filter((el) => el.type != param);
    return !!found;
  }

  hasConflictWith(enchantType: EnchantType): boolean {
    let conflictWithList: EnchantType[] = [];
    CONFLICT_ENCHANT.map((conflictList) => {
      if (conflictList.includes(enchantType)) {
        conflictWithList = conflictList.filter((el) => el != enchantType);
      }
    });
    let foundConflict = false;
    this.enchants.map((el) => {
      if (conflictWithList.includes(el.type)) {
        foundConflict = true;
      }
    });
    return foundConflict;
  }
}
