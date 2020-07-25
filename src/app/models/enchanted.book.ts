export enum EnchantType {
    Aqua_Affinity = 'Aqua Affinity',
    Bane_Of_Arthropods = 'Bane of Arthropods',
    Blast_Protection = 'Blast Protection',
    Channeling = 'Channeling',
    Chopping = 'Chopping',
    Curse_Of_Binding = 'Curse of Binding',
    Curse_Of_Vanishing = 'Curse of Vanishing',
    Item_Destroyed_On_Death_ = 'Item destroyed on death.',
    Depth_Strider = 'Depth Strider',
    Efficiency = 'Efficiency',
    Feather_Falling = 'Feather Falling',
    Fire_Aspect = 'Fire Aspect',
    Fire_Protection = 'Fire Protection',
    Flame = 'Flame',
    Fortune = 'Fortune',
    Frost_Walker = 'Frost Walker',
    Impaling = 'Impaling',
    Infinity = 'Infinity',
    Knockback = 'Knockback',
    Looting = 'Looting',
    Loyalty = 'Loyalty',
    Luck_Of_The_Sea = 'Luck of the Sea',
    Lure = 'Lure',
    Mending = 'Mending',
    Multishot = 'Multishot',
    Piercing = 'Piercing',
    Power = 'Power',
    Projectile_Protection = 'Projectile Protection',
    Protection = 'Protection',
    Punch = 'Punch',
    Quick_Charge = 'Quick Charge',
    Respiration = 'Respiration',
    Riptide = 'Riptide',
    Sharpness = 'Sharpness',
    Silk_Touch = 'Silk Touch',
    Smite = 'Smite',
    Soul_Speed = 'Soul Speed',
    Sweeping_Edge = 'Sweeping Edge',
    Thorns = 'Thorns',
    Unbreaking = 'Unbreaking',
}

export enum EnchantableType {
    Sword = 'Sword',
    Axe = 'Axe',
    Pickaxe = 'Pickaxe',
    Shovel = 'Shovel',
    Helmet = 'Helmet',
    Chestplate = 'Chestplate',
    Leggings = 'Leggings',
    Boots = 'Boots',
    Bow = 'Bow',
    Crossbow = 'Crossbow',
    Trident = 'Trident',
    Fishing_Rod = 'Fishing Rod',
    Book = 'Book',
}

export interface Enchant {
    type: EnchantType
    level?: number;
    max: number;
    mulItem: number;
    mulBook: number;
}

export interface Book {
}

export interface Enchantable {
    type: EnchantableType
    penalty: number;
    isEnchanted: boolean;
    enchants: Enchant[];
}

export interface EnchantableWithCost {
    cost: number, 
    totalCost: number;
    maxCost: number;
    enchant: Enchantable;
    children?: [EnchantableWithCost, EnchantableWithCost]
}

export interface EnchantedBook extends Book, Enchantable {

}