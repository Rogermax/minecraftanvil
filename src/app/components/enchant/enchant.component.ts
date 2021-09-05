import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Enchant, EnchantType } from 'src/app/models/enchanted.book';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-enchant',
  templateUrl: './enchant.component.html',
  styleUrls: ['./enchant.component.scss']
})
export class EnchantComponent implements OnInit {

  @Input() enchant: Enchant = null;
  @Input() editable: boolean = true;
  @Input() deletable: boolean = false;
  @Input() validEnchants: Enchant[] = [];

  @Output() enchantChange: EventEmitter<Enchant> = new EventEmitter<Enchant>();
  @Output() onDelete: EventEmitter<Enchant> = new EventEmitter<Enchant>();

  constructor() { }

  ngOnInit(): void {}

  validToEdit(): boolean {
    if (this.enchant == null || !this.enchant.level || !this.enchant.type) return false;
    return !!this.validEnchants.find(el => el.type == this.enchant.type);
  }

  delete(): void {
    this.onDelete.emit(this.enchant);
  }

  changeType(): void {
    const found = this.validEnchants.find(el => el.type == this.enchant.type);
    if (!found) return;
    this.enchant.max = found.max;
    this.enchant.mulBook = found.mulBook;
    this.enchant.mulItem = found.mulItem;
    this.enchant.level = found.max;
    if (this.validToEdit()) {
      console.log('Cambio de enchant', this.enchant);
      this.enchantChange.emit(this.enchant);
    }
  }

  
  changeLevel(): void {
    if (this.validToEdit()) {
      console.log('Cambio de enchant', this.enchant);
      this.enchantChange.emit(this.enchant);
    }
  }

}
