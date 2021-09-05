import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import {
  APPLICABLE_ENCHANT,
  ENCHANT_LIST,
  CONFLICT_ENCHANT
} from 'src/app/db/enchants';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { Enchant } from 'src/app/models/Enchant';
import { Enchantable } from 'src/app/models/Enchantable';
import { EnchantableType } from 'src/app/models/EnchantableType';
import { EnchantType } from 'src/app/models/EnchantType';

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
  };
  @Input() conflictEnchantTypes: EnchantType[] = [];

  @Output() addEnchant = new EventEmitter<EnchantType>();
  @Output() removeEnchant = new EventEmitter<EnchantType>();

  myControl = new FormControl();
  filteredOptions: Observable<string[]>;

  canAddAnother = true;
  availableEnchantList: Enchant[] = ENCHANT_LIST.map((el) => ({ ...el }));
  availableEnchantTypes: EnchantType[] = ENCHANT_LIST.map((el) => el.type);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ngOnChanges(changes: SimpleChanges): void {
    this.processAvailables();
    this.deleteConflicts();
    this.canAddAnother = !!this.availableEnchantList.length;
  }

  constructor() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
  }

  ngOnInit(): void {
    this.processAvailables();
    this.deleteConflicts();
    console.log(this.enchant, this.conflictEnchantTypes);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.availableEnchantList
      .filter((option) => option.type.toLowerCase().indexOf(filterValue) >= 0)
      .map((el) => el.type);
  }

  enchantTypeChange(): void {
    console.log(this.availableEnchantList);
    this.deleteConflicts();
    this.processAvailables();
  }

  addEnchantButton(): void {
    if (this.isCompatible(this.enchant.enchants)) {
      this.enchant.enchants.push({
        ...this.availableEnchantList[0],
        level: this.availableEnchantList[0].max
      });
      this.processAvailables();
      this.addEnchant.emit(
        this.enchant.enchants[this.enchant.enchants.length - 1].type
      );
    } else {
      console.log(
        'Conflict adding: ' +
          this.enchant.enchants[this.enchant.enchants.length - 1].type
      );
    }
    this.deleteConflicts();
  }

  isCompatible(enchantsParam: Enchant[]): boolean {
    if (enchantsParam.length < 2) return true;
    const enchants = enchantsParam.filter(
      (el, index) => index != enchantsParam.length - 1
    );
    const type = enchantsParam[enchantsParam.length - 1].type;
    let foundConflict = false;
    CONFLICT_ENCHANT.map((el) =>
      !!el.find((el2) => el2 === type)
        ? (foundConflict = foundConflict || this.anyInCommon(el, enchants))
        : null
    );
    this.conflictEnchantTypes.map((el) =>
      el == type ? (foundConflict = true) : null
    );
    return !foundConflict;
  }

  isCompatibleType(enchants: EnchantType[], type: EnchantType): boolean {
    let foundConflict = false;
    CONFLICT_ENCHANT.map((el) =>
      !!el.find((el2) => el2 === type)
        ? (foundConflict = foundConflict || this.anyInCommonType(el, enchants))
        : null
    );
    this.conflictEnchantTypes.map((el) =>
      el == type ? (foundConflict = true) : null
    );
    return !foundConflict;
  }

  anyInCommon(typeList: EnchantType[], enchants: Enchant[]): boolean {
    let found = false;
    typeList.map(
      (enchantType) =>
        (found = found || !!enchants.find((el2) => el2.type === enchantType))
    );
    return found;
  }

  anyInCommonType(typeList: EnchantType[], enchants: EnchantType[]): boolean {
    let found = false;
    typeList.map(
      (enchantType) =>
        (found = found || !!enchants.find((el2) => el2 === enchantType))
    );
    return found;
  }

  removeEnchantButton(enchant: Enchant): void {
    this.enchant.enchants = this.enchant.enchants.filter(
      (el) => el.type != enchant.type
    );
    this.processAvailables();
    this.deleteConflicts();
    this.removeEnchant.emit(enchant.type);
  }

  processAvailables(): void {
    const applicableEnchant = APPLICABLE_ENCHANT.get(this.enchant.type);
    if (applicableEnchant) {
      this.availableEnchantList = ENCHANT_LIST.filter(
        (el) => !!applicableEnchant.find((el2) => el.type == el2)
      );
    }
    CONFLICT_ENCHANT.map((incompatibleList) =>
      incompatibleList.map((typeWithIncompatibilities) => {
        if (
          !!this.enchant.enchants.find(
            (el) => el.type == typeWithIncompatibilities
          )
        ) {
          console.log(
            'Encontrada incompatibilidad: ',
            typeWithIncompatibilities,
            this.enchant.enchants
          );
          console.log(
            'Lista de availables antes: ',
            JSON.stringify(this.availableEnchantList)
          );
          this.availableEnchantList = this.availableEnchantList.filter(
            (available) =>
              !incompatibleList.find((inComp) => inComp == available.type) ||
              available.type == typeWithIncompatibilities
          );
          console.log(
            'Lista de availables despues: ',
            this.availableEnchantList
          );
        }
      })
    );
    this.availableEnchantList = this.availableEnchantList.filter(
      (el) => !this.conflictEnchantTypes.find((el2) => el.type == el2)
    );
    this.availableEnchantList = this.availableEnchantList.filter(
      (el) => !!this.isCompatibleType(this.conflictEnchantTypes, el.type)
    );
    this.availableEnchantList = this.availableEnchantList.filter(
      (el) => !this.enchant.enchants.find((el2) => el.type == el2.type)
    );
    this.availableEnchantTypes = this.availableEnchantList.map((el) => el.type);
    this.canAddAnother = !!this.availableEnchantList.length;
  }

  deleteConflicts(): void {
    console.log('before delete: ', JSON.stringify(this.enchant.enchants));
    this.enchant.enchants = this.enchant.enchants.filter(
      (el) => !this.conflictEnchantTypes.find((el2) => el.type == el2)
    );
    console.log('after delete: ', JSON.stringify(this.enchant.enchants));
    // console.log(this.conflictEnchantTypes);
    // console.log(this.availableEnchantList);
    // this.enchantList = this.enchantList.filter(el => !this.conflictEnchantTypes.find(el2 => el.type == el2));
    // this.enchantList = this.enchantList.filter(el => !!this.isCompatibleType(this.conflictEnchantTypes, el.type));
  }
}
