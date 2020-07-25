import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Enchantable, EnchantableType, Enchant, EnchantType } from 'src/app/models/enchanted.book';
import { APPLICABLE_ENCHANT, ENCHANT_LIST, CONFLICT_ENCHANT } from 'src/app/db/enchants';
import { FormControl, Validators } from '@angular/forms';
import { findCost } from 'src/app/utils/costUtils';

@Component({
  selector: 'app-enchanted-book',
  templateUrl: './enchanted-book.component.html',
  styleUrls: ['./enchanted-book.component.scss']
})
export class EnchantedBookComponent implements OnInit, OnChanges {

  @Input() enchant: Enchantable = {
    enchants: [],
    isEnchanted: true,
    penalty: 0,
    type: EnchantableType.Book
  }
  @Input() conflictEnchantTypes: EnchantType[] = []

  @Output() addEnchant = new EventEmitter<EnchantType>();
  @Output() removeEnchant = new EventEmitter<EnchantType>();

  level = new FormControl(1, [Validators.min(1),Validators.max(1)]);

  currentSelected: Enchant = {
    max: 1, // ha recalcular
    mulBook: 1, // ha recalcular 
    mulItem: 1, // ha recalcular
    type: null,
    level: 1,
  };
  availableEnchantList = ENCHANT_LIST;
  enchantList = ENCHANT_LIST;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.deleteConflicts();
  }

  ngOnInit(): void {
    this.deleteConflicts();
  }

  enchantTypeChange() {
    if (!!this.currentSelected && this.currentSelected.type != null) {
      console.log(this.availableEnchantList);
      const found = this.availableEnchantList.find(el => el.type == this.currentSelected.type);
      console.log(found);
      this.currentSelected.max = found.max;
      this.currentSelected.mulBook = found.mulBook;
      this.currentSelected.mulItem = found.mulItem;
      this.currentSelected.level = this.currentSelected.max;
    }
    this.deleteConflicts();
  }

  addEnchantButton(): void {
    if (this.currentSelected.type != null) {
      if (this.isCompatible(this.enchant.enchants, this.currentSelected.type)) {
        this.enchant.enchants = this.enchant.enchants.filter(el => el.type !== this.currentSelected.type);
        this.enchant.enchants.push({...this.currentSelected})
        this.addEnchant.emit(this.currentSelected.type);
        return;
      } else {
        console.log('Conflict adding: ' + this.currentSelected.type);
      }
    }
    this.deleteConflicts();
  } 

  isCompatible(enchants: Enchant[], type: EnchantType): boolean {
    let foundConflict = false;
    CONFLICT_ENCHANT.map(el => !!el.find(el2 => el2 === type) ? foundConflict = foundConflict || this.anyInCommon(el, enchants) : null);
    this.conflictEnchantTypes.map(el => el == type ? foundConflict = true : null);
    return !foundConflict;
  }

  isCompatibleType(enchants: EnchantType[], type: EnchantType): boolean {
    let foundConflict = false;
    CONFLICT_ENCHANT.map(el => !!el.find(el2 => el2 === type) ? foundConflict = foundConflict || this.anyInCommonType(el, enchants) : null);
    this.conflictEnchantTypes.map(el => el == type ? foundConflict = true : null);
    return !foundConflict;
  }

  anyInCommon(typeList: EnchantType[], enchants: Enchant[]): boolean {
    let found = false;
    typeList.map(enchantType => (found = found || !!enchants.find(el2 => el2.type === enchantType)));
    return found;
  }

  anyInCommonType(typeList: EnchantType[], enchants: EnchantType[]): boolean {
    let found = false;
    typeList.map(enchantType => (found = found || !!enchants.find(el2 => el2 === enchantType)));
    return found;
  }

  removeEnchantButton(enchant: Enchant): void {
    this.enchant.enchants = this.enchant.enchants.filter(el => el.type != enchant.type);
    this.deleteConflicts();
    this.removeEnchant.emit(enchant.type);
  }

  deleteConflicts() {
    this.enchant.enchants = this.enchant.enchants.filter(el => !!this.conflictEnchantTypes.find(el2 => el.type == el2));
    this.availableEnchantList = ENCHANT_LIST.filter(el => !!APPLICABLE_ENCHANT.get(this.enchant.type).find(el2 => el.type == el2));
    this.availableEnchantList = this.availableEnchantList.filter(el => !this.conflictEnchantTypes.find(el2 => el.type == el2));
    this.availableEnchantList = this.availableEnchantList.filter(el => !!this.isCompatibleType(this.conflictEnchantTypes, el.type));
    // console.log(this.conflictEnchantTypes);
    // console.log(this.availableEnchantList);
    this.enchantList = this.enchantList.filter(el => !this.conflictEnchantTypes.find(el2 => el.type == el2));
    this.enchantList = this.enchantList.filter(el => !!this.isCompatibleType(this.conflictEnchantTypes, el.type));
  }

}
