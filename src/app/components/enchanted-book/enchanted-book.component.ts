import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Enchantable, EnchantableType, Enchant, EnchantType } from 'src/app/models/enchanted.book';
import { APPLICABLE_ENCHANT, ENCHANT_LIST, CONFLICT_ENCHANT } from 'src/app/db/enchants';
import { FormControl, Validators } from '@angular/forms';
import { findCost } from 'src/app/utils/costUtils';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

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
  @Input() conflictEnchantTypes: EnchantType[] = [];

  @Output() addEnchant = new EventEmitter<EnchantType>();
  @Output() removeEnchant = new EventEmitter<EnchantType>();

  myControl = new FormControl();
  filteredOptions: Observable<string[]>;

  canAddAnother = true;
  availableEnchantList: Enchant[] = [].concat(ENCHANT_LIST);
  availableEnchantTypes: EnchantType[] = ENCHANT_LIST.map(el => el.type);

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.processAvailables();
    this.deleteConflicts();
    this.canAddAnother = !!this.availableEnchantList.length;
  }

  ngOnInit(): void {
    this.processAvailables();
    this.deleteConflicts();
    console.log(this.enchant, this.conflictEnchantTypes);
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.availableEnchantList.filter(option => option.type.toLowerCase().indexOf(filterValue) >= 0).map(el => el.type);
  }

  enchantTypeChange(i: number, enchant: Enchant) {
    console.log(this.availableEnchantList);
    this.deleteConflicts();
    this.processAvailables();
  }

  addEnchantButton(): void {
    if (this.isCompatible(this.enchant.enchants)) {
      this.enchant.enchants.push({...this.availableEnchantList[0], level: this.availableEnchantList[0].max});
      this.processAvailables();
      this.addEnchant.emit(this.enchant.enchants[this.enchant.enchants.length - 1].type);
    } else {
      console.log('Conflict adding: ' + this.enchant.enchants[this.enchant.enchants.length - 1].type);
    }
    this.deleteConflicts();
  } 

  isCompatible(enchantsParam: Enchant[]): boolean {
    if (enchantsParam.length < 2) return true;
    const enchants = enchantsParam.filter((el, index) => index != enchantsParam.length - 1);
    const type = enchantsParam[enchantsParam.length - 1].type;
    let foundConflict = false;
    CONFLICT_ENCHANT.map(el=> !!el.find(el2 => el2 === type) ? foundConflict = foundConflict || this.anyInCommon(el, enchants) : null);
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
    this.processAvailables();
    this.deleteConflicts();
    this.removeEnchant.emit(enchant.type);
  }

  processAvailables() {
    this.availableEnchantList = ENCHANT_LIST.filter(el => !!APPLICABLE_ENCHANT.get(this.enchant.type).find(el2 => el.type == el2));
    CONFLICT_ENCHANT.map(incompatibleList => incompatibleList.map(typeWithIncompatibilities => {
      if (!!this.enchant.enchants.find(el => el.type == typeWithIncompatibilities)) {
        console.log('Encontrada incompatibilidad: ', typeWithIncompatibilities, this.enchant.enchants);
        console.log('Lista de availables antes: ', JSON.stringify(this.availableEnchantList));
        this.availableEnchantList = this.availableEnchantList.filter(available => !incompatibleList.find(inComp => inComp == available.type) || available.type == typeWithIncompatibilities)
        console.log('Lista de availables despues: ', this.availableEnchantList);
      }
    }))
    this.availableEnchantList = this.availableEnchantList.filter(el => !this.conflictEnchantTypes.find(el2 => el.type == el2));
    this.availableEnchantList = this.availableEnchantList.filter(el => !!this.isCompatibleType(this.conflictEnchantTypes, el.type));
    this.availableEnchantList = this.availableEnchantList.filter(el => !this.enchant.enchants.find(el2 => el.type == el2.type));
    this.availableEnchantTypes = this.availableEnchantList.map(el => el.type);
    this.canAddAnother = !!this.availableEnchantList.length;
  }

  deleteConflicts() {
    console.log("before delete: ", JSON.stringify(this.enchant.enchants))
    this.enchant.enchants = this.enchant.enchants.filter(el => !this.conflictEnchantTypes.find(el2 => el.type == el2));
    console.log("after delete: ", JSON.stringify(this.enchant.enchants))
    // console.log(this.conflictEnchantTypes);
    // console.log(this.availableEnchantList);
    // this.enchantList = this.enchantList.filter(el => !this.conflictEnchantTypes.find(el2 => el.type == el2));
    // this.enchantList = this.enchantList.filter(el => !!this.isCompatibleType(this.conflictEnchantTypes, el.type));
  }

}
