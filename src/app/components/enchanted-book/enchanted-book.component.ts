import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { APPLICABLE_ENCHANT, ENCHANT_LIST } from 'src/app/db/enchants';
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
export class EnchantedBookComponent implements OnInit {
  @Input() enchantable: Enchantable = {
    enchants: [],
    isEnchanted: true,
    penalty: 0,
    type: EnchantableType.Book
  };
  @Input() availableEnchantList: Enchant[] = [];

  @Output() onEnchantTypeChange: EventEmitter<{
    index: number;
    type: EnchantType;
  }> = new EventEmitter<{ index: number; type: EnchantType }>();
  @Output() onEnchantLevelChange: EventEmitter<{
    index: number;
    level: number;
  }> = new EventEmitter<{ index: number; level: number }>();
  @Output() removeEnchant = new EventEmitter<EnchantType>();

  myControl = new FormControl();
  filteredOptions: Observable<string[]>;

  constructor() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
  }

  ngOnInit(): void {
    this.processAvailables();
  }

  removeEnchantButton(enchant: Enchant | null): void {
    if (!!enchant) {
      this.removeEnchant.emit(enchant.type);
    }
  }

  processAvailables(): void {
    const applicableEnchant = APPLICABLE_ENCHANT.get(this.enchantable.type);
    if (applicableEnchant) {
      this.availableEnchantList = ENCHANT_LIST.filter(
        (el) => !!applicableEnchant.find((el2) => el.type == el2)
      );
    }
  }

  changeType(i: number, type: EnchantType): void {
    const enchant = this.enchantable.enchants[i];
    console.log('changeType - ' + i + ' - ' + type);
    if (enchant) {
      enchant.type = type;
    }
    this.onEnchantTypeChange.emit({ index: i, type });
  }

  changeLevel(i: number, level: number): void {
    const enchant = this.enchantable.enchants[i];
    console.log('changeLevel - ' + i);
    if (enchant) {
      enchant.level = level;
    }
    this.onEnchantLevelChange.emit({ index: i, level });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.availableEnchantList
      .filter((option) => option.type.toLowerCase().indexOf(filterValue) >= 0)
      .map((el) => el.type);
  }
}
