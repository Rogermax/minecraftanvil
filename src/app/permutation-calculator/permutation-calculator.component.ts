import { Component, OnInit } from '@angular/core';
import { EnchantableWithCost, EnchantableType, EnchantType, Enchantable, Enchant } from '../models/enchanted.book';
import { ENCHANT_LIST, CONFLICT_ENCHANT, APPLICABLE_ENCHANT, ENCHANT_TYPES } from '../db/enchants';
import { findCost, findBestCombination as findBesty } from '../utils/costUtils';

@Component({
  selector: 'app-permutation-calculator',
  templateUrl: './permutation-calculator.component.html',
  styleUrls: ['./permutation-calculator.component.scss']
})
export class PermutationCalculatorComponent implements OnInit {

  // Para la selección inicial de arma, armadura o herrmaienta
  public enchantTypes: EnchantableType[] = ENCHANT_TYPES.filter(el => el != EnchantableType.Book);
  // Tool, armor or weapon donde se aplica
  public currentSelectedType = EnchantableType.Sword;
  
  // Cada uno de los encantables: Chestplate, book, book,...
  public enchantElements: Enchantable[] = []


  // Para cada encantable, los que no puede mostrar.
  conflictEnchantTypes: EnchantType[][] = [];

  totalCost = 0;
  logText = "";
  selectedTarget = "Book";
  selectedSacrifice = "Book";
  addBookLiteral = "Add Book";
  removeBookLiteral = "Remove Book";

  constructor() {}

  ngOnInit(): void {
    this.addBookLiteral = "Add Tool/Armor/Weapon";
    this.removeBookLiteral = "";
  }

  removeElement() {
    this.conflictEnchantTypes.pop();
    this.enchantElements.pop();
    if (this.enchantElements == null || !this.enchantElements.length) {
      this.addBookLiteral = "Add Tool/Armor/Weapon";
      this.removeBookLiteral = "";
    }
    if (this.enchantElements.length == 1) {
      this.removeBookLiteral = "Remove Tool/Armor/Weapon";
    }
  }

  addElement() {
    if (this.enchantElements == null || !this.enchantElements.length) {
      this.enchantElements = [];
      this.conflictEnchantTypes.push([]);
      this.enchantElements.push({
        enchants: [],
        isEnchanted: false,
        penalty: 0,
        type: this.currentSelectedType
      })
      this.addBookLiteral = "Add Book";
      this.removeBookLiteral = "Remove Tool/Armor/Weapon";
    } else {
      if (this.enchantElements.length > 0) {
        this.removeBookLiteral = "Remove Book";
      }
      const newConflict: EnchantType[] = [];
      this.enchantElements.map(el => el.enchants.map(el2 => newConflict.push(el2.type)));
      ENCHANT_LIST.map(el => !APPLICABLE_ENCHANT.get(this.currentSelectedType).find(el2 => el2 == el.type) ? newConflict.push(el.type) : null);
      this.conflictEnchantTypes.push(newConflict);
      this.enchantElements.push({
        enchants: [],
        isEnchanted: false,
        penalty: 0,
        type: EnchantableType.Book
      })
    }
  }

  findBestCombination() {
    findBesty(this.enchantElements);
  }

  addEnchant(index: number, enchant: EnchantType) {
    console.log('Añaden encantamiento ' +  enchant + '[' + index  +']');
    console.log('conflicts ', JSON.stringify(this.conflictEnchantTypes));
    this.conflictEnchantTypes.map((el, i) => {
      if (i != index && !el.includes(enchant)) {
        this.conflictEnchantTypes[i].push(enchant)
        this.conflictEnchantTypes[i] = [].concat(this.conflictEnchantTypes[i]);
      }
    })
    console.log(this.conflictEnchantTypes);
  }

  removeEnchant(index: number, enchant: EnchantType) {
    console.log('quitan encantamiento ' +  enchant + '[' + index  +']');
    this.conflictEnchantTypes.map((el, i) => {
      this.conflictEnchantTypes[i] = el.filter(el => el != enchant);
    });
    console.log(this.conflictEnchantTypes);
  }


}
