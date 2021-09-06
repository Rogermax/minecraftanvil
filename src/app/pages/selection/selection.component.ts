import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APPLICABLE_ENCHANT } from 'src/app/db/enchants';
import { EnchantableType } from 'src/app/models/EnchantableType';
import { EnchantType } from 'src/app/models/EnchantType';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss']
})
export class SelectionComponent implements OnInit {
  items: { name: EnchantableType; src: string }[] = [];

  constructor(private router: Router) {
    APPLICABLE_ENCHANT.forEach((value, key) => {
      if (key != EnchantableType.Book) {
        this.items.push({ name: key, src: this.getSrc(key) });
      }
    });
  }

  ngOnInit(): void {}

  navigate(name: EnchantableType) {
    this.router.navigateByUrl('/' + name);
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
