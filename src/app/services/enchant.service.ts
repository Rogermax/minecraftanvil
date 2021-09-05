import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnchantService {

  enchants: Enchantable[] = [];

  constructor() { }
}
