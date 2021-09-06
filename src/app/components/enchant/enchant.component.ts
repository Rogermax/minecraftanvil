import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Enchant } from 'src/app/models/Enchant';
import { EnchantType } from 'src/app/models/EnchantType';

@Component({
  selector: 'app-enchant',
  templateUrl: './enchant.component.html',
  styleUrls: ['./enchant.component.scss']
})
export class EnchantComponent {
  @Input() enchant: Enchant | null = null;
  @Input() removable = false;
  @Input() validEnchants: Enchant[] = [];

  @Output() onEnchantTypeChange: EventEmitter<EnchantType> =
    new EventEmitter<EnchantType>();
  @Output() onEnchantLevelChange: EventEmitter<number> =
    new EventEmitter<number>();
  @Output() onRemove: EventEmitter<Enchant | null> =
    new EventEmitter<Enchant | null>();

  validToEdit(): boolean {
    if (this.enchant == null || !this.enchant.level || !this.enchant.type)
      return false;
    return !!this.validEnchants.find((el) => el.type == this.enchant?.type);
  }

  delete(): void {
    this.onRemove.emit(this.enchant);
  }

  changeType(event: MatAutocompleteSelectedEvent): void {
    if (event.option) {
      console.log('this.onEnchantTypeChange.emit: ' + event.option.value);
      this.onEnchantTypeChange.emit(event.option.value as EnchantType);
    }
  }

  changeLevel(event: Event): void {
    if (event.target) {
      console.log(
        'this.onEnchantTypeChange.emit: ' +
          (<HTMLInputElement>event.target).value
      );
      this.onEnchantLevelChange.emit(
        parseInt((<HTMLInputElement>event.target).value)
      );
    }
  }
}
