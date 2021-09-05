import { Enchant } from '../models/Enchant';
import { Enchantable } from '../models/Enchantable';
import { EnchantableType } from '../models/EnchantableType';
import { EnchantableWithCost } from '../models/EnchantableWithCost';

export let totalCost = 0;
export let totalForges = 0;
export let totalCalculus = 0;
export let foundInCache = 0;
export let totalValidPermutations = 0;
export let totalInvalidPermutations = 0;
export let resultsBrief = new Map<string, number>();
export let logText = '';
export const cache: Map<string, EnchantableWithCost> = new Map<
  string,
  EnchantableWithCost
>();

export function findBestCombination(enchantElements: Enchantable[]): void {
  if (enchantElements.length > 1) {
    totalCost = findCost(enchantElements[0], enchantElements[1]);
    totalForges = 0;
    totalCalculus = 0;
    foundInCache = 0;
    totalValidPermutations = 0;
    totalInvalidPermutations = 0;
    logText = '';
    resultsBrief = new Map<string, number>();
    const result: EnchantableWithCost = findBestCombinationRecursive(
      enchantElements.map((el) => ({
        cost: 0,
        totalCost: 0,
        maxCost: 0,
        enchant: el
      }))
    );
    console.log('Resumen de costes: ', resultsBrief);
    console.log('Nº de permutaciones validas  : ', totalValidPermutations);
    console.log('Nº de permutaciones invalidas: ', totalInvalidPermutations);
    console.log(
      '                        total: ',
      totalInvalidPermutations + totalValidPermutations
    );
    console.log('Nº de calculos salvados por cache: ', foundInCache);
    console.log('Nº de combinaciones procesadas: ', totalCalculus);
    console.log('Nº de forjados simulados: ', totalForges);
    console.log('RESULTADO FINAL: ');
    totalCost = result.totalCost;
    printEnchantableWithCost(result, 0, true);
  }
}

export function findBestCombinationRecursive(
  enchantElementsClone: EnchantableWithCost[]
): EnchantableWithCost {
  // console.log('Se llama a findBestCombinationRecursion con: ', printEnchantableList(enchantElementsClone.map(el => el.enchant)))
  if (!enchantElementsClone || enchantElementsClone.length === 0)
    return {
      cost: 0,
      totalCost: 0,
      maxCost: 0,
      enchant: {
        enchants: [],
        isEnchanted: false,
        penalty: 0,
        type: EnchantableType.Sword
      }
    };
  if (enchantElementsClone.length == 1)
    return {
      cost: 0,
      totalCost: 0,
      maxCost: 0,
      enchant: enchantElementsClone[0].enchant
    };
  if (enchantElementsClone.length == 2) {
    const normalOrderCost = findCost(
      enchantElementsClone[0].enchant,
      enchantElementsClone[1].enchant
    );
    const inverseOrderCost = findCost(
      enchantElementsClone[1].enchant,
      enchantElementsClone[0].enchant
    );
    return inverseOrderCost < normalOrderCost
      ? {
          cost: inverseOrderCost,
          totalCost:
            inverseOrderCost +
            enchantElementsClone[0].totalCost +
            enchantElementsClone[1].totalCost,
          maxCost: Math.max(
            inverseOrderCost,
            enchantElementsClone[0].maxCost,
            enchantElementsClone[1].maxCost
          ),
          enchant: forge(
            enchantElementsClone[1].enchant,
            enchantElementsClone[0].enchant
          ),
          children: [enchantElementsClone[1], enchantElementsClone[0]]
        }
      : {
          cost: normalOrderCost,
          totalCost:
            normalOrderCost +
            enchantElementsClone[0].totalCost +
            enchantElementsClone[1].totalCost,
          maxCost: Math.max(
            normalOrderCost,
            enchantElementsClone[0].maxCost,
            enchantElementsClone[1].maxCost
          ),
          enchant: forge(
            enchantElementsClone[0].enchant,
            enchantElementsClone[1].enchant
          ),
          children: [enchantElementsClone[0], enchantElementsClone[1]]
        };
  }

  const permutations = getPermutations(
    enchantElementsClone,
    enchantElementsClone.length
  );
  // print3array(permutations);
  let bestWayToForge: EnchantableWithCost = {
    cost: 819999999998,
    totalCost: 88999999999988,
    maxCost: 65820000000,
    enchant: {
      enchants: [],
      isEnchanted: false,
      penalty: 0,
      type: EnchantableType.Sword
    }
  };
  permutations.map((el) => {
    const bestCostSplited: EnchantableWithCost = findBestWayToForge(el[0]);
    if (
      bestCostSplited.totalCost < bestWayToForge.totalCost ||
      (bestCostSplited.totalCost == bestWayToForge.totalCost &&
        bestCostSplited.maxCost < bestWayToForge.maxCost)
    ) {
      bestWayToForge = bestCostSplited;
    } else if (bestCostSplited.totalCost == bestWayToForge.totalCost) {
      // Descomentar para ver todas las opciones
      // printEnchantableWithCost(bestCostSplited, 0, true);
    }
    if (bestCostSplited.totalCost < 10000000) {
      // console.log('(' + (index + 1) + '/' + permutations.length +') best way to forge this order: ', printEnchantableCost(bestCostSplited));
      totalValidPermutations++;
      const totalMaxCost = resultsBrief.get(
        bestCostSplited.totalCost + '(' + bestCostSplited.maxCost + ')'
      );
      resultsBrief.set(
        bestCostSplited.totalCost + '(' + bestCostSplited.maxCost + ')',
        !totalMaxCost ? 1 : totalMaxCost + 1
      );
    } else {
      // console.error('(' + (index + 1) + '/' + permutations.length +') invalid permutation: ', printEnchantableCost(bestCostSplited));
      totalInvalidPermutations++;
    }
  });

  const costs: number[] = [];
  resultsBrief.forEach((el) => costs.push(el));
  gcd(costs);
  resultsBrief.forEach((el, key) => resultsBrief.set(key, el));
  resultsBrief = new Map([...resultsBrief.entries()].sort());
  console.log(
    'Best of all permutations: ',
    printEnchantableCost(bestWayToForge)
  );
  return bestWayToForge;
}

export function gcd(list: number[]): number {
  if (!list || !list.length) return 1;
  list = list.map((el) => Math.floor(el));
  console.log(list);
  let gcd = list[0];
  list.map((el) => {
    gcd = gcd_two_numbers(gcd, el);
  });
  console.log(gcd);
  return gcd;
}

export function gcd_two_numbers(x: number, y: number): number {
  let x2 = Math.abs(x);
  let y2 = Math.abs(y);
  while (y2) {
    const t = y2;
    y2 = x2 % y2;
    x2 = t;
  }
  // console.log('gcd de: ' + x + ' y ' + y + ' = ' + x2);
  return x2;
}

export function findBestWayToForge(
  list: EnchantableWithCost[]
): EnchantableWithCost {
  if (!list || !list.length)
    return {
      cost: 819999999998,
      totalCost: 88999999999988,
      maxCost: 65820000000,
      enchant: {
        enchants: [],
        isEnchanted: false,
        penalty: 0,
        type: EnchantableType.Sword
      }
    };
  if (list.length == 1) return { ...list[0] };
  totalCalculus++;
  if (list.length == 2) {
    const cost = findCost(list[0].enchant, list[1].enchant);
    const best: EnchantableWithCost = {
      cost: cost,
      totalCost: cost + list[0].totalCost + list[1].totalCost,
      maxCost: Math.max(cost, list[0].maxCost, list[1].maxCost),
      enchant: forge(list[0].enchant, list[1].enchant),
      children: [list[0], list[1]]
    };
    cache.set(JSON.stringify(list), best);
    return best;
  }
  if (list.length == 3) {
    const listLessOne = list.filter((el, index) => index < list.length - 1);
    const newEnchantLessOne = findBestWayToForge(listLessOne);
    const cost = findCost(newEnchantLessOne.enchant, list[2].enchant);
    const best: EnchantableWithCost = {
      cost: cost,
      totalCost: cost + newEnchantLessOne.totalCost + list[2].totalCost,
      maxCost: Math.max(cost, newEnchantLessOne.maxCost, list[2].maxCost),
      enchant: forge(newEnchantLessOne.enchant, list[2].enchant),
      children: [newEnchantLessOne, list[2]]
    };
    cache.set(JSON.stringify(list), best);
    return best;
  }

  const cachedInfo = cache.get(JSON.stringify(list));
  if (!!cachedInfo) {
    foundInCache++;
    return cachedInfo;
  }

  // length 3 o superior:
  const listLessOne = list.filter((el, index) => index < list.length - 1);
  const listLessTwo = list.filter((el, index) => index < list.length - 2);
  const newEnchantLessOne = findBestWayToForge(listLessOne);
  const costOne = findCost(
    newEnchantLessOne.enchant,
    list[list.length - 1].enchant
  );
  const totalCostOne =
    costOne + newEnchantLessOne.totalCost + list[list.length - 1].totalCost;

  const newEnchantLessTwo = findBestWayToForge(listLessTwo);
  const costLastPair = findCost(
    list[list.length - 2].enchant,
    list[list.length - 1].enchant
  );
  const newLastPairEnchant: EnchantableWithCost = {
    cost: costLastPair,
    totalCost:
      costLastPair +
      list[list.length - 2].totalCost +
      list[list.length - 1].totalCost,
    maxCost: Math.max(
      costLastPair,
      list[list.length - 2].maxCost,
      list[list.length - 1].maxCost
    ),
    enchant: forge(
      list[list.length - 2].enchant,
      list[list.length - 1].enchant
    ),
    children: [list[list.length - 2], list[list.length - 1]]
  };
  const costTwo = findCost(
    newEnchantLessTwo.enchant,
    newLastPairEnchant.enchant
  );
  const totalCostTwo =
    costTwo + newEnchantLessTwo.totalCost + newLastPairEnchant.totalCost;
  let best: EnchantableWithCost = {
    cost: costTwo,
    totalCost: totalCostTwo,
    maxCost: Math.max(
      costTwo,
      newEnchantLessTwo.maxCost,
      newLastPairEnchant.maxCost
    ),
    enchant: forge(newEnchantLessTwo.enchant, newLastPairEnchant.enchant),
    children: [newEnchantLessTwo, newLastPairEnchant]
  };
  if (totalCostOne < totalCostTwo) {
    best = {
      cost: costOne,
      totalCost: totalCostOne,
      maxCost: Math.max(
        costOne,
        newEnchantLessOne.maxCost,
        list[list.length - 1].maxCost
      ),
      enchant: forge(newEnchantLessOne.enchant, list[list.length - 1].enchant),
      children: [newEnchantLessOne, list[list.length - 1]]
    };
  }
  cache.set(JSON.stringify(list), best);
  return best;
}

export function findBestCostSplittingBy(
  initialGroupSize: number,
  enchants: EnchantableWithCost[]
): EnchantableWithCost {
  const lists: EnchantableWithCost[][][] = getPermutations(
    enchants,
    initialGroupSize
  );
  const result: EnchantableWithCost = {
    cost: 9199999999,
    totalCost: 99999999999999,
    maxCost: 981822222222,
    enchant: {
      enchants: [],
      isEnchanted: false,
      penalty: 0,
      type: EnchantableType.Sword
    }
  };
  lists.map((pair) => {
    const enchant1 = findBestCombinationRecursive(pair[0]);
    const enchant2 = findBestCombinationRecursive(pair[1]);
    const cost = findCost(enchant1.enchant, enchant2.enchant);
    if (cost + enchant1.totalCost + enchant2.totalCost < result.totalCost) {
      result.cost = cost;
      result.totalCost = cost + enchant1.totalCost + enchant2.totalCost;
      result.enchant = forge(enchant1.enchant, enchant2.enchant);
      result.children = [enchant1, enchant2];
    }
  });
  return result;
}

export function getPermutations(
  enchants: EnchantableWithCost[],
  initialGroupSize: number
): EnchantableWithCost[][][] {
  const result: EnchantableWithCost[][][] = [];
  if (!enchants) return [];
  if (initialGroupSize == 0) return [[enchants]];
  if (initialGroupSize == 1) {
    enchants.map((el, index) =>
      result.push([[el], enchants.filter((el2, index2) => index !== index2)])
    );
  } else {
    const lists: EnchantableWithCost[][][] = getPermutations(
      enchants,
      initialGroupSize - 1
    );
    lists.map((list) => {
      const particionAFaltaDe1: EnchantableWithCost[] = list[0];
      const onePartitions: EnchantableWithCost[][][] = getPermutations(
        list[1],
        1
      );
      onePartitions.map((el) =>
        result.push([
          particionAFaltaDe1.concat(el[0]),
          el[1].map((el) => ({ ...el }))
        ])
      );
    });
  }
  // console.log(result);
  // console.log('Partitions size('+initialGroupSize+') of ' + printEnchantableList(enchants.map(el => el.enchant)));
  return result;
}

export function printEnchantableWithCost(
  enchant: EnchantableWithCost,
  tabs = 0,
  trace = true
): void {
  if (!enchant || !enchant.cost) return;
  let str = '';
  for (let i = 0; i < tabs; i++) {
    str += '__';
  }
  if (!enchant.enchant && trace) {
    logText +=
      (!str ? '' : '|') +
      str +
      enchant.enchant +
      '[totalCost:' +
      enchant.totalCost +
      '] - [maxCost:' +
      enchant.maxCost +
      '] - [cost:' +
      enchant.cost +
      '] - ' +
      printEnchantable(enchant.enchant) +
      '\n';
    console.log(
      (!str ? '' : '|') +
        str +
        enchant.enchant +
        '[totalCost:' +
        enchant.totalCost +
        '] - [maxCost:' +
        enchant.maxCost +
        '] - [cost:' +
        enchant.cost +
        '] - ' +
        printEnchantable(enchant.enchant)
    );
  } else {
    logText +=
      (!str ? '' : '|') +
      str +
      enchant.enchant.type +
      '[totalCost:' +
      enchant.totalCost +
      '] - [maxCost:' +
      enchant.maxCost +
      '] - [cost:' +
      enchant.cost +
      '] - [penalty:' +
      enchant.enchant.penalty +
      '] - ' +
      printEnchantable(enchant.enchant) +
      '\n';
    console.log(
      (!str ? '' : '|') +
        str +
        enchant.enchant.type +
        '[totalCost:' +
        enchant.totalCost +
        '] - [maxCost:' +
        enchant.maxCost +
        '] - [cost:' +
        enchant.cost +
        '] - [penalty:' +
        enchant.enchant.penalty +
        '] - ' +
        printEnchantable(enchant.enchant)
    );
  }
  printEnchantableWithCostList(enchant.children, tabs + 1, trace);
}

export function printEnchantableWithCostList(
  children: [EnchantableWithCost, EnchantableWithCost] | undefined,
  tabs: number,
  trace = true
): void {
  if (!children || !trace) return;
  children.map((el) => printEnchantableWithCost(el, tabs));
}

export function print3array(
  result: EnchantableWithCost[][][],
  trace = true
): void {
  if (!trace) return;
  result.map((pair) =>
    console.log(
      printEnchantableList(pair[0].map((el) => el.enchant)) +
        ' con ' +
        printEnchantableList(pair[1].map((el) => el.enchant))
    )
  );
}

export function printEnchantableList(enchants: Enchantable[]): string {
  return (
    '[' +
    enchants
      .map((el) => /*'{' + el.type + '}' + */ printEnchantable(el))
      .join(', ') +
    ']'
  );
}

export function printEnchantableCost(enchant: EnchantableWithCost): string {
  if (!enchant) return '{undef}';
  return '[' + enchant.enchant.enchants.map((el) => el.type).join(', ') + ']';
}

export function forge(
  target: Enchantable,
  sacrifice: Enchantable
): Enchantable {
  // console.log('Se forja ' + printEnchantable(target) + ' con ' + printEnchantable(sacrifice));
  totalForges++;
  return {
    enchants: target.enchants.concat(sacrifice.enchants),
    isEnchanted: true,
    penalty: Math.max(target.penalty, sacrifice.penalty) + 1,
    type: target.type
  };
}

export function findCost(target: Enchantable, sacrifice: Enchantable): number {
  // const result: Enchantable =  {
  //     type: target.type,
  //     enchants: target.enchants.concat(sacrifice.enchants),
  //     isEnchanted: true,
  //     penalty: Math.max(target.penalty, sacrifice.penalty) + 1
  // }
  if (sacrifice.type !== EnchantableType.Book) return 10000000;
  const target_penalty_cost = Math.pow(2, target.penalty) - 1;
  const sacrifice_penalty_cost = Math.pow(2, sacrifice.penalty) - 1;
  const totalLevels =
    target_penalty_cost + sacrifice_penalty_cost + getEnchantsCost(sacrifice);
  // console.log('cost: ' + printEnchantable(target) + ' + ' + printEnchantable(sacrifice) + ' = ' + totalLevels);
  return totalLevels;
}

function printEnchantable(enchant: Enchantable): string {
  if (!enchant) return '{undef}';
  return '[' + enchant.enchants.map((el) => el.type).join(', ') + ']';
}

function getEnchantsCost(enchant: Enchantable): number {
  if (enchant == null || enchant.enchants == null) return 0;
  let total = 0;
  if (enchant.type === EnchantableType.Book) {
    enchant.enchants.map((el) => (total += getEnchantCostOnBook(el)));
  } else {
    enchant.enchants.map((el) => (total += getEnchantCost(el)));
  }
  return total;
}

function getEnchantCostOnBook(enchant: Enchant): number {
  return !enchant.level ? 0 : enchant.level * enchant.mulBook;
}

function getEnchantCost(enchant: Enchant): number {
  return !enchant.level ? 0 : enchant.level * enchant.mulItem;
}
