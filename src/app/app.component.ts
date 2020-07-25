import { Component, OnInit } from '@angular/core';
import { Enchantable, EnchantableType, EnchantType, EnchantableWithCost } from './models/enchanted.book';
import { ENCHANT_LIST, APPLICABLE_ENCHANT, CONFLICT_ENCHANT, ENCHANT_TYPES } from './db/enchants';
import { findCost } from './utils/costUtils'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'minecraft-anvil-echantments';

  cache: Map<string, EnchantableWithCost> = new Map<string, EnchantableWithCost>();
  enchantList = ENCHANT_LIST;
  conflictList = CONFLICT_ENCHANT;
  enchantAppliable = APPLICABLE_ENCHANT;
  enchantTypes = ENCHANT_TYPES.filter(el => el != EnchantableType.Book);
  totalForges = 0;
  totalCalculus = 0;
  foundInCache = 0;
  totalValidPermutations = 0;
  totalInvalidPermutations = 0;
  conflictEnchantTypes: EnchantType[][] = [
    [EnchantType.Protection, EnchantType.Mending, EnchantType.Unbreaking, EnchantType.Thorns],
    [EnchantType.Mending, EnchantType.Unbreaking, EnchantType.Thorns],
    [EnchantType.Protection, EnchantType.Unbreaking, EnchantType.Thorns],
    [EnchantType.Protection, EnchantType.Mending, EnchantType.Thorns],
    [EnchantType.Protection, EnchantType.Mending, EnchantType.Unbreaking]
  ];
  resultsBrief = new Map<string, number>();
  enchantsPerfectHelmetElements: Enchantable[] = [
    {
      enchants: [{
        type: EnchantType.Protection,
        level: 4,
        max: 4,
        mulBook: 1,
        mulItem: 1
      }
    ],
      isEnchanted: true,
      penalty: 0,
      type: EnchantableType.Book
    },
    
    {
      enchants: [{
        type: EnchantType.Mending,
        max: 1,
        level: 1,
        mulItem: 4,
        mulBook: 2
      }
    ],
      isEnchanted: true,
      penalty: 0,
      type: EnchantableType.Book
    },
    {
      enchants: [
        {
          type: EnchantType.Unbreaking,
          max: 3,
          level: 3,
          mulItem: 2,
          mulBook: 1
        }
    ],
      isEnchanted: true,
      penalty: 0,
      type: EnchantableType.Book
    },
    
    {
      enchants: [
        {
          type: EnchantType.Thorns,
            level: 3,
            max: 3,
            mulItem: 8,
            mulBook: 4
        },
    ],
      isEnchanted: true,
      penalty: 0,
      type: EnchantableType.Book
    },
    
    {
      enchants: [
        {
          type: EnchantType.Aqua_Affinity,
            max: 1,
            level: 1,
            mulItem: 4,
            mulBook: 2
        },
    ],
      isEnchanted: true,
      penalty: 0,
      type: EnchantableType.Book
    },
    
    {
      enchants: [
        {
          type: EnchantType.Respiration,
            max: 3,
            level: 3,
            mulItem: 4,
            mulBook: 2
        },
    ],
      isEnchanted: true,
      penalty: 0,
      type: EnchantableType.Book
    },
    
    {
      enchants: [],
      isEnchanted: true,
      penalty: 0,
      type: EnchantableType.Helmet
    },
    
  ]

  enchantsPerfectSwordElements: Enchantable[] = [
    {
      enchants: [{
        type: EnchantType.Sharpness,
          max: 5,
          level: 5,
          mulItem: 1,
          mulBook: 1
      }
    ],
      isEnchanted: true,
      penalty: 0,
      type: EnchantableType.Book
    },
    
    {
      enchants: [{
        type: EnchantType.Mending,
        max: 1,
        level: 1,
        mulItem: 4,
        mulBook: 2
      }
    ],
      isEnchanted: true,
      penalty: 0,
      type: EnchantableType.Book
    },
    {
      enchants: [
        {
          type: EnchantType.Unbreaking,
          max: 3,
          level: 3,
          mulItem: 2,
          mulBook: 1
        }
    ],
      isEnchanted: true,
      penalty: 0,
      type: EnchantableType.Book
    },
    
    {
      enchants: [
        {
          type: EnchantType.Looting,
            max: 3,
            level: 3,
            mulItem: 4,
            mulBook: 2
        },
    ],
      isEnchanted: true,
      penalty: 0,
      type: EnchantableType.Book
    },
    
    {
      enchants: [
        {
          type: EnchantType.Fire_Aspect,
            max: 2,
            level: 2,
            mulItem: 4,
            mulBook: 2
        },
    ],
      isEnchanted: true,
      penalty: 0,
      type: EnchantableType.Book
    },

    
    {
      enchants: [
        {
          type: EnchantType.Sweeping_Edge,
            max: 3,
            level: 3,
            mulItem: 4,
            mulBook: 2
        },
    ],
      isEnchanted: true,
      penalty: 0,
      type: EnchantableType.Book
    },
    
    {
      enchants: [
        {
          type: EnchantType.Knockback,
            max: 2,
            level: 2,
            mulItem: 2,
            mulBook: 1
        },
    ],
      isEnchanted: true,
      penalty: 0,
      type: EnchantableType.Book
    },

    {
      enchants: [],
      isEnchanted: true,
      penalty: 0,
      type: EnchantableType.Sword
    },
    
  ]

  enchantElements: Enchantable[] = [
    {
      enchants: [],
      isEnchanted: true,
      penalty: 0,
      type: EnchantableType.Chestplate
    },
    {
      enchants: [{
        type: EnchantType.Protection,
        level: 4,
        max: 4,
        mulBook: 1,
        mulItem: 1
      }
    ],
      isEnchanted: true,
      penalty: 0,
      type: EnchantableType.Book
    },
    
    {
      enchants: [{
        type: EnchantType.Mending,
        max: 1,
        level: 1,
        mulItem: 4,
        mulBook: 2
      }
    ],
      isEnchanted: true,
      penalty: 0,
      type: EnchantableType.Book
    },
    {
      enchants: [
        {
          type: EnchantType.Unbreaking,
          max: 3,
          level: 3,
          mulItem: 2,
          mulBook: 1
        }
    ],
      isEnchanted: true,
      penalty: 0,
      type: EnchantableType.Book
    },
    
    {
      enchants: [
        {
          type: EnchantType.Thorns,
            level: 3,
            max: 3,
            mulItem: 8,
            mulBook: 4
        },
    ],
      isEnchanted: true,
      penalty: 0,
      type: EnchantableType.Book
    },
  ]
  selectedTarget = "Book";
  selectedSacrifice = "Book";
  totalCost = 0;
  logText = '';
  addBookLiteral = "Add Book";
  removeBookLiteral = "Remove Book";
  currentSelectedType = EnchantableType.Sword;

  constructor() {}

  ngOnInit(): void {
    if (this.enchantElements == null || !this.enchantElements.length) {
      this.addBookLiteral = "Add Tool/Armor/Weapon";
      this.removeBookLiteral = "";
    } else {
      this.enchantElements.map((el, index) => el.enchants.map(el2 => this.conflictEnchantTypes[index].push(el2.type)));
    }
  }

  removeElement() {
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
      this.enchantElements.push({
        enchants: [],
        isEnchanted: false,
        penalty: 0,
        type: EnchantableType.Book
      })
    }
  }

  enchantTypeChange() {
    
  }

  addEnchant(index: number, enchant: EnchantType) {
    this.conflictEnchantTypes.map((el, i) => {
      if (i != index && !el.includes(enchant)) {
        this.conflictEnchantTypes[i].push(enchant)
        this.conflictEnchantTypes[i] = [].concat(this.conflictEnchantTypes[i]);
      }
    })
    console.log(this.conflictEnchantTypes);
  }

  removeEnchant(index: number, enchant: EnchantType) {
    this.conflictEnchantTypes.map((el, i) => {
      this.conflictEnchantTypes[i] = el.filter(el => el != enchant);
    });
    console.log(this.conflictEnchantTypes);
  }

  findBestCombination() {
    if (this.enchantElements.length > 1) {
      this.totalCost = findCost(this.enchantElements[0], this.enchantElements[1]);
      this.totalForges = 0;
      this.totalCalculus = 0;
      this.foundInCache = 0;
      this.totalValidPermutations = 0;
      this.totalInvalidPermutations = 0;
      this.resultsBrief = new Map<string, number>();
      let result: EnchantableWithCost = this.findBestCombinationRecursive(this.enchantElements.map(el => ({cost: 0, totalCost: 0, maxCost: 0, enchant: el})));
      console.log('Resumen de costes: ', this.resultsBrief);
      console.log('Nº de permutaciones validas  : ', this.totalValidPermutations);
      console.log('Nº de permutaciones invalidas: ', this.totalInvalidPermutations);
      console.log('                        total: ', this.totalInvalidPermutations + this.totalValidPermutations);
      console.log('Nº de calculos salvados por cache: ', this.foundInCache);
      console.log('Nº de combinaciones procesadas: ', this.totalCalculus);
      console.log('Nº de forjados simulados: ', this.totalForges);
      console.log('RESULTADO FINAL: ');
      this.totalCost = result.totalCost;
      this.printEnchantableWithCost(result, 0, true);
    }
  }

  findBestCombinationRecursive(enchantElementsClone: EnchantableWithCost[]): EnchantableWithCost {
    // console.log('Se llama a findBestCombinationRecursion con: ', this.printEnchantableList(enchantElementsClone.map(el => el.enchant)))
    if (!enchantElementsClone || enchantElementsClone.length === 0) return null;
    if (enchantElementsClone.length == 1) return {cost: 0, totalCost: 0, maxCost: 0, enchant: enchantElementsClone[0].enchant};
    if (enchantElementsClone.length == 2) {
      let normalOrderCost = findCost(enchantElementsClone[0].enchant, enchantElementsClone[1].enchant)
      let inverseOrderCost = findCost(enchantElementsClone[1].enchant, enchantElementsClone[0].enchant)
      return (inverseOrderCost < normalOrderCost) ? 
        {
          cost: inverseOrderCost, 
          totalCost: inverseOrderCost + enchantElementsClone[0].totalCost  + enchantElementsClone[1].totalCost, 
          maxCost: Math.max(inverseOrderCost, enchantElementsClone[0].maxCost, enchantElementsClone[1].maxCost),
          enchant: this.forge(enchantElementsClone[1].enchant, enchantElementsClone[0].enchant), 
          children: [enchantElementsClone[1], enchantElementsClone[0]]
        }
        : 
        {
          cost: normalOrderCost, 
          totalCost: normalOrderCost + enchantElementsClone[0].totalCost + enchantElementsClone[1].totalCost, 
          maxCost: Math.max(normalOrderCost, enchantElementsClone[0].maxCost, enchantElementsClone[1].maxCost),
          enchant: this.forge(enchantElementsClone[0].enchant, enchantElementsClone[1].enchant), 
          children: [enchantElementsClone[0], enchantElementsClone[1]]
        };
    }
    
    const permutations = this.getPermutations(enchantElementsClone, enchantElementsClone.length);
    // this.print3array(permutations);
    let bestWayToForge: EnchantableWithCost = {cost: 819999999998, totalCost: 88999999999988, maxCost: 65820000000, enchant: null};
    permutations.map((el, index) => {
      const bestCostSplited: EnchantableWithCost = this.findBestWayToForge(el[0]);
      if (bestCostSplited.totalCost < bestWayToForge.totalCost || bestCostSplited.totalCost == bestWayToForge.totalCost && bestCostSplited.maxCost < bestWayToForge.maxCost) {
        bestWayToForge = bestCostSplited;
      } else if (bestCostSplited.totalCost == bestWayToForge.totalCost) {
        // Descomentar para ver todas las opciones
        // this.printEnchantableWithCost(bestCostSplited, 0, true);
      }
      if (bestCostSplited.totalCost < 10000000) {
        // console.log('(' + (index + 1) + '/' + permutations.length +') best way to forge this order: ', this.printEnchantableCost(bestCostSplited));
        this.totalValidPermutations++;
        this.resultsBrief.set(bestCostSplited.totalCost+'('+bestCostSplited.maxCost+')', !this.resultsBrief.get(bestCostSplited.totalCost+'('+bestCostSplited.maxCost+')') ? 1 : this.resultsBrief.get(bestCostSplited.totalCost+'('+bestCostSplited.maxCost+')') + 1)
      } else {
        // console.error('(' + (index + 1) + '/' + permutations.length +') invalid permutation: ', this.printEnchantableCost(bestCostSplited));
        this.totalInvalidPermutations++;
      }
    })

    const costs: number[] = [];
    this.resultsBrief.forEach((el, key) => costs.push(el));
    const gcd = this.gcd(costs);
    this.resultsBrief.forEach((el, key) => this.resultsBrief.set(key, el));
    this.resultsBrief = new Map([...this.resultsBrief.entries()].sort());
    console.log('Best of all permutations: ', this.printEnchantableCost(bestWayToForge));
    return bestWayToForge;
  }

  gcd(list: number[]): number {
    if (!list || !list.length) return 1;
    list = list.map(el => Math.floor(el));
    console.log(list);
    let gcd = list[0];
    list.map(el => {
      gcd = this.gcd_two_numbers(gcd, el);
    });
    console.log(gcd);
    return gcd;
  }

  gcd_two_numbers(x: number, y: number) {
    let x2 = Math.abs(x);
    let y2 = Math.abs(y);
    while(y2) {
      let t = y2;
      y2 = x2 % y2;
      x2 = t;
    }
    // console.log('gcd de: ' + x + ' y ' + y + ' = ' + x2);
    return x2;
  }

  findBestWayToForge(list: EnchantableWithCost[]): EnchantableWithCost {
    if (!list || !list.length) return null;
    if (list.length == 1) return {...list[0]};
    this.totalCalculus++;
    if (list.length == 2) {
      const cost = findCost(list[0].enchant, list[1].enchant);
      const best: EnchantableWithCost = {
        cost: cost, 
        totalCost: cost + list[0].totalCost  + list[1].totalCost, 
        maxCost: Math.max(cost, list[0].maxCost, list[1].maxCost),
        enchant: this.forge(list[0].enchant, list[1].enchant), 
        children: [list[0], list[1]]
      }
      this.cache.set(JSON.stringify(list), best);
      return best;
    }
    if (list.length == 3) {
      const listLessOne = list.filter((el, index) => index < list.length - 1);
      const newEnchantLessOne = this.findBestWayToForge(listLessOne);
      const cost = findCost(newEnchantLessOne.enchant, list[2].enchant);
      const best: EnchantableWithCost = {
        cost: cost, 
        totalCost: cost + newEnchantLessOne.totalCost  + list[2].totalCost, 
        maxCost: Math.max(cost, newEnchantLessOne.maxCost, list[2].maxCost),
        enchant: this.forge(newEnchantLessOne.enchant, list[2].enchant), 
        children: [newEnchantLessOne, list[2]]
      }
      this.cache.set(JSON.stringify(list), best);
      return best;
    }

    const cachedInfo = this.cache.get(JSON.stringify(list));
    if (!!cachedInfo) {
      this.foundInCache++;
      return cachedInfo;
    }

    // length 3 o superior:
    const listLessOne = list.filter((el, index) => index < list.length - 1);
    const listLessTwo = list.filter((el, index) => index < list.length - 2);
    const newEnchantLessOne = this.findBestWayToForge(listLessOne);
    const costOne = findCost(newEnchantLessOne.enchant, list[list.length - 1].enchant);
    const totalCostOne = costOne + newEnchantLessOne.totalCost + list[list.length - 1].totalCost;

    const newEnchantLessTwo = this.findBestWayToForge(listLessTwo);
    const costLastPair = findCost(list[list.length - 2].enchant, list[list.length - 1].enchant);
    const newLastPairEnchant: EnchantableWithCost = {
      cost: costLastPair, 
      totalCost: costLastPair + list[list.length - 2].totalCost  + list[list.length - 1].totalCost, 
      maxCost: Math.max(costLastPair, list[list.length - 2].maxCost, list[list.length - 1].maxCost),
      enchant: this.forge(list[list.length - 2].enchant, list[list.length - 1].enchant), 
      children: [list[list.length - 2], list[list.length - 1]]
    };
    const costTwo = findCost(newEnchantLessTwo.enchant, newLastPairEnchant.enchant);
    const totalCostTwo = costTwo + newEnchantLessTwo.totalCost + newLastPairEnchant.totalCost;
    let best: EnchantableWithCost = {
      cost: costTwo, 
      totalCost: totalCostTwo, 
      maxCost: Math.max(costTwo, newEnchantLessTwo.maxCost, newLastPairEnchant.maxCost),
      enchant: this.forge(newEnchantLessTwo.enchant, newLastPairEnchant.enchant), 
      children: [newEnchantLessTwo, newLastPairEnchant]
    };
    if (totalCostOne < totalCostTwo) {
      best = {
        cost: costOne, 
        totalCost: totalCostOne, 
        maxCost: Math.max(costOne, newEnchantLessOne.maxCost, list[list.length - 1].maxCost),
        enchant: this.forge(newEnchantLessOne.enchant, list[list.length - 1].enchant), 
        children: [newEnchantLessOne, list[list.length - 1]]
      };
    }
    this.cache.set(JSON.stringify(list), best);
    return best;
  }


  findBestCostSplittingBy(initialGroupSize: number, enchants: EnchantableWithCost[]): EnchantableWithCost {
    const lists: EnchantableWithCost[][][] = this.getPermutations(enchants, initialGroupSize);
    const result: EnchantableWithCost = {cost: 9199999999, totalCost: 99999999999999, maxCost: 981822222222, enchant: null};
    lists.map(pair => {
      let enchant1 = this.findBestCombinationRecursive(pair[0]);
      let enchant2 = this.findBestCombinationRecursive(pair[1]);
      let cost = findCost(enchant1.enchant, enchant2.enchant);
      if (cost + enchant1.totalCost + enchant2.totalCost < result.totalCost) {
        result.cost = cost;
        result.totalCost = cost + enchant1.totalCost + enchant2.totalCost;
        result.enchant = this.forge(enchant1.enchant, enchant2.enchant);
        result.children = [enchant1, enchant2];
      }
    })
    return result;
  }

  getPermutations(enchants: EnchantableWithCost[], initialGroupSize: number): EnchantableWithCost[][][] {
    let result: EnchantableWithCost[][][] = [];
    if (!enchants) return [];
    if (initialGroupSize == 0) return [[enchants]];
    if (initialGroupSize == 1) {
      enchants.map((el, index) => result.push([[el] , enchants.filter((el2, index2) => index !== index2)]));
    } else {
      const lists: EnchantableWithCost[][][] = this.getPermutations(enchants, initialGroupSize - 1);
      lists.map(list => {
        let particionAFaltaDe1: EnchantableWithCost[] = list[0];
        let onePartitions: EnchantableWithCost[][][] = this.getPermutations(list[1], 1);
        onePartitions.map(el => result.push([particionAFaltaDe1.concat(el[0]), [].concat(el[1])]) );
      })
    }
    // console.log(result);
    // console.log('Partitions size('+initialGroupSize+') of ' + this.printEnchantableList(enchants.map(el => el.enchant)));
    return result;
  }

  printEnchantableWithCost(enchant: EnchantableWithCost, tabs = 0, trace = true) {
    if (!enchant || !enchant.cost) return;
    let str = "";
    for (let i = 0; i < tabs; i++) {
      str += '__'
    } 
    if (!enchant.enchant && trace) {
      this.logText += (!str ? '': '|') + str + enchant.enchant + '[totalCost:' + enchant.totalCost + '] - [maxCost:' + enchant.maxCost + '] - [cost:' + enchant.cost + '] - ' + this.printEnchantable(enchant.enchant) + '\n';
      console.log((!str ? '': '|') + str + enchant.enchant + '[totalCost:' + enchant.totalCost + '] - [maxCost:' + enchant.maxCost + '] - [cost:' + enchant.cost + '] - ' + this.printEnchantable(enchant.enchant))
    } else {
      this.logText += (!str ? '': '|') + str + enchant.enchant.type + '[totalCost:' + enchant.totalCost + '] - [maxCost:' + enchant.maxCost + '] - [cost:' + enchant.cost + '] - [penalty:' + enchant.enchant.penalty + '] - ' + this.printEnchantable(enchant.enchant) + '\n';
      console.log((!str ? '': '|') + str + enchant.enchant.type + '[totalCost:' + enchant.totalCost + '] - [maxCost:' + enchant.maxCost + '] - [cost:' + enchant.cost + '] - [penalty:' + enchant.enchant.penalty + '] - ' + this.printEnchantable(enchant.enchant))
    }
    this.printEnchantableWithCostList(enchant.children, tabs + 1, trace);
  }

  printEnchantableWithCostList(children: [EnchantableWithCost, EnchantableWithCost], tabs: number, trace = true) {
    if (!children || !trace) return;
    children.map(el => this.printEnchantableWithCost(el, tabs))
  }

  print3array(result: EnchantableWithCost[][][], trace = true): any {
    if (!trace) return;
    result.map(pair => console.log(this.printEnchantableList(pair[0].map(el => el.enchant)) + ' con ' + this.printEnchantableList(pair[1].map(el => el.enchant))));
  }
  
  printEnchantableList(enchants: Enchantable[]): string {
    return '[' + enchants.map(el => /*'{' + el.type + '}' + */this.printEnchantable(el)).join(', ') + ']';
  }

  printEnchantableCost(enchant: EnchantableWithCost): string {
    if (!enchant) return '{undef}';
    return '[' + enchant.enchant.enchants.map(el => el.type).join(', ') + ']';
  }

  printEnchantable(enchant: Enchantable): string {
    if (!enchant) return '{undef}';
    return '[' + enchant.enchants.map(el => el.type).join(', ') + ']';
  }

  forge(target: Enchantable, sacrifice: Enchantable): Enchantable {
    // console.log('Se forja ' + this.printEnchantable(target) + ' con ' + this.printEnchantable(sacrifice));
    this.totalForges++;
    return {
      enchants: target.enchants.concat(sacrifice.enchants),
      isEnchanted: true,
      penalty: Math.max(target.penalty, sacrifice.penalty) + 1,
      type: target.type 
    }
  }

  getTool(which) {
    /*tool = {
        type: $(`#${which} > .type > select`).val(),
        enchantments: {},
        prior_penalty: Number($(`#${which}_penalty`).val())
    }

    for (i = 0; i < $(`#${which} > .enchant`).children().length; i += 1) {
        let enchant_name = $(
            `#${which} > .enchant > .enchant_${i} > .enchant_name`
        ).val()
        if (Object.keys(enchant_list).includes(enchant_name)) {
            let enchant_lv = $(
                `#${which} > .enchant > .enchant_${i} > .enchant_lv`
            ).val()
            tool['enchantments'][enchant_name] = Number(enchant_lv)
        }
    }
    return tool*/
  }

  setFinalCost() {
    /*const [total_cost, result_tool] = findCost()
    // console.log(total_cost, result_tool)
    $('#total_cost').text('Cost : ' + total_cost)

    let tool_summary_text = ''
    for (enchant in result_tool.enchantments) {
        tool_summary_text +=
            enchant + ' ' + result_tool.enchantments[enchant] + '<br/>'
    }
    $('#result_tool').html(tool_summary_text)*/
  }


}
