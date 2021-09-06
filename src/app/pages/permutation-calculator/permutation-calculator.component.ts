import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EnchantService } from 'src/app/services/enchant.service';
import { APPLICABLE_ENCHANT, ENCHANT_TYPES } from '../../db/enchants';
import { Enchantable } from '../../models/Enchantable';
import { EnchantableType } from '../../models/EnchantableType';
import { EnchantType } from '../../models/EnchantType';
import {
  findBestCombination as findBesty,
  findBestCombinationEnchant,
  logText
} from '../../utils/Cost.utils';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';
import { Enchant } from 'src/app/models/Enchant';
import { EnchantableWithCost } from 'src/app/models/EnchantableWithCost';

@Component({
  selector: 'app-permutation-calculator',
  templateUrl: './permutation-calculator.component.html',
  styleUrls: ['./permutation-calculator.component.scss']
})
export class PermutationCalculatorComponent implements OnInit {
  // Para la selección inicial de arma, armadura o herrmaienta
  public enchantTypes: EnchantableType[] = ENCHANT_TYPES.filter(
    (el) => el != EnchantableType.Book
  );

  // Tool, armor or weapon donde se aplica
  public currentSelectedType = EnchantableType.Sword;

  // Cada uno de los encantables: Chestplate, book, book,...
  public enchantElements: Enchantable[] = [];
  public availableEnchantList: Enchant[] = [];
  public enchantList: Enchant[] = [];
  public solution: Enchant[][] = [];

  item: { name: EnchantableType; src: string } = {
    name: EnchantableType.Book,
    src: 'assets/Book_JE2_BE2.png'
  };
  totalCost = 0;
  logText = '';
  selectedTarget = 'Book';
  selectedSacrifice = 'Book';
  addBookLiteral = 'Add Book';
  removeBookLiteral = 'Remove Book';

  constructor(
    public enchantService: EnchantService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.addBookLiteral = 'Add Tool/Armor/Weapon';
    this.removeBookLiteral = '';
    this.enchantService.restart();
    this.availableEnchantList = this.enchantService
      .getAvailableEnchants(this.route.snapshot.params['id'])
      .map((el) => ({ ...el, level: el.max, disabled: false }));
    APPLICABLE_ENCHANT.forEach((value, key) => {
      if (key == this.route.snapshot.params['id']) {
        this.item = { name: key, src: this.getSrc(key) };
      }
    });
  }

  drop(event: CdkDragDrop<Enchant[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      this.enchantService.removeRawEnchant(
        event.container.data[event.currentIndex].type
      );
      this.availableEnchantList = this.availableEnchantList.map((el) => ({
        ...el,
        disabled: this.enchantService.hasConflictWith(el.type)
      }));
    }
  }

  dropGood(event: CdkDragDrop<Enchant[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      this.enchantService.addRawEnchant(
        event.container.data[event.currentIndex].type
      );
      this.availableEnchantList = this.availableEnchantList.map((el) => ({
        ...el,
        disabled: this.enchantService.hasConflictWith(el.type)
      }));
    }
  }

  removeElement(): void {
    this.enchantElements.pop();
    if (this.enchantElements == null || !this.enchantElements.length) {
      this.addBookLiteral = 'Add Tool/Armor/Weapon';
      this.removeBookLiteral = '';
    }
    if (this.enchantElements.length == 1) {
      this.removeBookLiteral = 'Remove Tool/Armor/Weapon';
    }
  }

  addElement(): void {
    if (this.enchantElements == null || !this.enchantElements.length) {
      this.enchantElements = [];
      this.enchantElements.push({
        enchants: [],
        isEnchanted: false,
        penalty: 0,
        type: this.currentSelectedType
      });
      /* 
      this.availableEnchantList = this.enchantService.getAvailableEnchants(
        this.currentSelectedType
      );
      */
      this.addBookLiteral = 'Add Book';
      this.removeBookLiteral = 'Remove Tool/Armor/Weapon';
    } else {
      if (this.enchantElements.length > 0) {
        this.removeBookLiteral = 'Remove Book';
      }
      this.enchantElements.push({
        enchants: [],
        isEnchanted: false,
        penalty: 0,
        type: EnchantableType.Book
      });
    }
  }

  findBestCombination(): void {
    findBesty(this.enchantElements);
  }

  findBestCombinationNew(): void {
    findBestCombinationEnchant(this.item.name, this.enchantList);
    this.logText = logText;
  }

  addEnchantButton(i: number): void {
    const enchant = this.enchantService.getNewEnchant();
    if (!!enchant) {
      this.enchantElements[i].enchants.push(null);
    }
    this.enchantElements[i] = { ...this.enchantElements[i] };
    /*
    this.availableEnchantList = this.enchantService.getAvailableEnchants(
      this.currentSelectedType
    );
    */
  }

  enchantTypeChange(
    i: number,
    event: { index: number; type: EnchantType }
  ): void {
    console.log(this.enchantElements[i]);
    const enc = this.enchantElements[i].enchants[event.index];
    console.log(enc);
    if (enc) {
      this.enchantService.removeRawEnchant(enc.type);
    }
    const ench2 = this.enchantService.addRawEnchant(event.type);
    if (ench2) {
      this.enchantElements = this.enchantElements.map((el, ind) =>
        ind == i
          ? {
              ...el,
              enchants: el.enchants.map((el2, inde) =>
                event.index == inde ? { ...el2, type: event.type } : el2
              )
            }
          : el
      ) as Enchantable[];
    }
    /*
    this.availableEnchantList = this.enchantService.getAvailableEnchants(
      this.currentSelectedType
    );
    */
    console.log(this.availableEnchantList);
  }

  enchantLevelChange(i: number, event: { index: number; level: number }): void {
    const enc = this.enchantElements[i].enchants[event.index];
    if (enc) {
      enc.level = event.level;
    }
  }

  removeEnchant(index: number, enchantType: EnchantType): void {
    if (this.enchantService.removeRawEnchant(enchantType)) {
      this.enchantElements[index].enchants = this.enchantElements[
        index
      ].enchants.filter((el) => el && el.type == enchantType);
    }
    /*
    this.availableEnchantList = this.enchantService.getAvailableEnchants(
      this.currentSelectedType
    );
    */
  }

  toRoman(num?: number, max?: number): string {
    switch (num) {
      case 2:
        return 'II';
      case 3:
        return 'III';
      case 4:
        return 'IV';
      case 5:
        return 'V';
      default:
        return max == 1 ? '' : 'I';
    }
  }

  getSrc(key: EnchantableType): string {
    switch (key) {
      case EnchantableType.Book:
        return 'assets/EnchantedBookNew.gif';
      case EnchantableType.Pickaxe:
        return 'assets/Enchanted_Netherite_Pickaxe.gif';
      case EnchantableType.Axe:
        return 'assets/Netherite_Axe_JE2.png';
      case EnchantableType.Crossbow:
        return 'assets/EnchantedCrossbow.gif';
      case EnchantableType.Sword:
        return 'assets/Netherite_sword-enchanted.gif';
      case EnchantableType.Boots:
        return 'assets/Enchanted_Netherite_Boots.gif';
      case EnchantableType.Bow:
        return 'assets/EnchantedBow.gif';
      case EnchantableType.Carrot_on_a_Stick:
        return 'assets/Enchanted_Carrot_on_a_Stick.gif';
      case EnchantableType.Chestplate:
        return 'assets/Enchanted_Netherite_Chestplate.gif';
      case EnchantableType.Elytra:
        return 'assets/Enchanted_Elytra_item.gif';
      case EnchantableType.Fishing_Rod:
        return 'assets/Enchanted_Fishing_Rod.gif';
      case EnchantableType.Flint_and_Steel:
        return 'assets/Flint_and_Steel_JE4_BE2.png';
      case EnchantableType.Helmet:
        return 'assets/Enchanted_Netherite_Helmet.gif';
      case EnchantableType.Hoe:
        return 'assets/Enchanted_Netherite_Hoe.gif';
      case EnchantableType.Leggings:
        return 'assets/Enchanted_Netherite_Leggings.gif';
      case EnchantableType.Shears:
        return 'assets/Enchanted_Shears.gif';
      case EnchantableType.Shield:
        return 'assets/Enchanted_Shield_item.gif';
      case EnchantableType.Shovel:
        return 'assets/Enchanted_Netherite_Shovel.gif';
      case EnchantableType.Trident:
        return 'assets/Enchanted_Trident_item.gif';
      case EnchantableType.Turtle_Shell:
        return 'assets/Enchanted_Turtle_Shell.gif';
      case EnchantableType.Warped_Fungus_on_a_Stick:
        return 'assets/Warped_Fungus_on_a_Stick_JE1_BE1.png';
      default:
        return 'assets/EnchantmentTable.gif';
    }
  }
}
