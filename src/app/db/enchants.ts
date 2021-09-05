import { EnchantType, Enchant, EnchantableType, Enchantable } from "../models/enchanted.book";

export const ENCHANT_TYPES: EnchantableType[] = [
    EnchantableType.Sword,
    EnchantableType.Axe,
    EnchantableType.Pickaxe,
    EnchantableType.Shovel,
    EnchantableType.Helmet,
    EnchantableType.Chestplate,
    EnchantableType.Leggings,
    EnchantableType.Boots,
    EnchantableType.Bow,
    EnchantableType.Crossbow,
    EnchantableType.Trident,
    EnchantableType.Fishing_Rod,
    EnchantableType.Book
];

export const CONFLICT_ENCHANT: EnchantType[][] = [
    [
        EnchantType.Protection,
        EnchantType.Fire_Protection,
        EnchantType.Blast_Protection,
        EnchantType.Projectile_Protection
    ],
    [EnchantType.Sharpness, EnchantType.Bane_Of_Arthropods, EnchantType.Smite],
    [EnchantType.Silk_Touch, EnchantType.Fortune],
    [EnchantType.Depth_Strider, EnchantType.Frost_Walker],
    [EnchantType.Infinity, EnchantType.Mending],
    [EnchantType.Loyalty, EnchantType.Riptide],
    [EnchantType.Channeling, EnchantType.Riptide],
    [EnchantType.Multishot, EnchantType.Piercing]
]


export const APPLICABLE_ENCHANT: Map<EnchantableType, EnchantType[]> = new Map([
    [EnchantableType.Sword, [
        EnchantType.Sharpness,
        EnchantType.Smite,
        EnchantType.Bane_Of_Arthropods,
        EnchantType.Knockback,
        EnchantType.Fire_Aspect,
        EnchantType.Looting,
        EnchantType.Unbreaking,
        EnchantType.Mending,
        EnchantType.Curse_Of_Vanishing,
        EnchantType.Sweeping_Edge
    ]],
    [EnchantableType.Pickaxe, [
        EnchantType.Efficiency,
        EnchantType.Fortune,
        EnchantType.Silk_Touch,
        EnchantType.Unbreaking,
        EnchantType.Mending,
        EnchantType.Curse_Of_Vanishing
    ]],
    [EnchantableType.Axe, [
        EnchantType.Efficiency,
        EnchantType.Fortune,
        EnchantType.Silk_Touch,
        EnchantType.Sharpness,
        EnchantType.Smite,
        EnchantType.Bane_Of_Arthropods,
        EnchantType.Unbreaking,
        EnchantType.Mending,
        EnchantType.Curse_Of_Vanishing
    ]],
    [EnchantableType.Shovel, [
        EnchantType.Efficiency,
        EnchantType.Fortune,
        EnchantType.Silk_Touch,
        EnchantType.Unbreaking,
        EnchantType.Mending,
        EnchantType.Curse_Of_Vanishing
    ]],
    [EnchantableType.Helmet, [
        EnchantType.Protection,
        EnchantType.Fire_Protection,
        EnchantType.Projectile_Protection,
        EnchantType.Blast_Protection,
        EnchantType.Respiration,
        EnchantType.Aqua_Affinity,
        EnchantType.Thorns,
        EnchantType.Unbreaking,
        EnchantType.Mending,
        EnchantType.Curse_Of_Binding,
        EnchantType.Curse_Of_Vanishing
    ]],
    [EnchantableType.Chestplate, [
        EnchantType.Protection,
        EnchantType.Fire_Protection,
        EnchantType.Projectile_Protection,
        EnchantType.Blast_Protection,
        EnchantType.Thorns,
        EnchantType.Unbreaking,
        EnchantType.Mending,
        EnchantType.Curse_Of_Binding,
        EnchantType.Curse_Of_Vanishing
    ]],
    [EnchantableType.Leggings, [
        EnchantType.Protection,
        EnchantType.Fire_Protection,
        EnchantType.Projectile_Protection,
        EnchantType.Blast_Protection,
        EnchantType.Thorns,
        EnchantType.Unbreaking,
        EnchantType.Mending,
        EnchantType.Curse_Of_Binding,
        EnchantType.Curse_Of_Vanishing
    ]],
    [EnchantableType.Boots, [
        EnchantType.Protection,
        EnchantType.Fire_Protection,
        EnchantType.Projectile_Protection,
        EnchantType.Blast_Protection,
        EnchantType.Feather_Falling,
        EnchantType.Frost_Walker,
        EnchantType.Depth_Strider,
        EnchantType.Thorns,
        EnchantType.Unbreaking,
        EnchantType.Mending,
        EnchantType.Curse_Of_Binding,
        EnchantType.Curse_Of_Vanishing
    ]],
    [EnchantableType.Bow, [
        EnchantType.Power,
        EnchantType.Punch,
        EnchantType.Flame,
        EnchantType.Infinity,
        EnchantType.Unbreaking,
        EnchantType.Mending,
        EnchantType.Curse_Of_Vanishing
    ]],
    [EnchantableType.Crossbow, [
        EnchantType.Piercing,
        EnchantType.Multishot,
        EnchantType.Quick_Charge,
        EnchantType.Unbreaking,
        EnchantType.Mending,
        EnchantType.Curse_Of_Vanishing
    ]],
    [EnchantableType.Trident, [
        EnchantType.Impaling,
        EnchantType.Loyalty,
        EnchantType.Riptide,
        EnchantType.Channeling,
        EnchantType.Unbreaking,
        EnchantType.Mending,
        EnchantType.Curse_Of_Vanishing
    ]],
    [EnchantableType.Fishing_Rod, [
        EnchantType.Lure,
        EnchantType.Luck_Of_The_Sea,
        EnchantType.Unbreaking,
        EnchantType.Mending,
        EnchantType.Curse_Of_Vanishing
    ]],
    [EnchantableType.Book, [
        EnchantType.Protection,
        EnchantType.Fire_Protection,
        EnchantType.Feather_Falling,
        EnchantType.Blast_Protection,
        EnchantType.Projectile_Protection,
        EnchantType.Thorns,
        EnchantType.Respiration,
        EnchantType.Depth_Strider,
        EnchantType.Aqua_Affinity,
        EnchantType.Sharpness,
        EnchantType.Smite,
        EnchantType.Bane_Of_Arthropods,
        EnchantType.Knockback,
        EnchantType.Fire_Aspect,
        EnchantType.Looting,
        EnchantType.Efficiency,
        EnchantType.Silk_Touch,
        EnchantType.Unbreaking,
        EnchantType.Fortune,
        EnchantType.Power,
        EnchantType.Punch,
        EnchantType.Flame,
        EnchantType.Infinity,
        EnchantType.Luck_Of_The_Sea,
        EnchantType.Lure,
        EnchantType.Frost_Walker,
        EnchantType.Mending,
        EnchantType.Curse_Of_Binding,
        EnchantType.Curse_Of_Vanishing,
        EnchantType.Impaling,
        EnchantType.Riptide,
        EnchantType.Loyalty,
        EnchantType.Channeling,
        EnchantType.Multishot,
        EnchantType.Piercing,
        EnchantType.Quick_Charge,
        EnchantType.Sweeping_Edge
    ]]
]);

export const ENCHANT_LIST: Enchant[] = [
    {    
        type: EnchantType.Protection,
        max: 4,
        mulItem: 1,
        mulBook: 1
    },
    {
    	type: EnchantType.Fire_Protection,
        max: 4,
        mulItem: 2,
        mulBook: 1
    },
    {
    	type: EnchantType.Feather_Falling,
        max: 4,
        mulItem: 2,
        mulBook: 1
    },
    {
    	type: EnchantType.Blast_Protection,
        max: 4,
        mulItem: 4,
        mulBook: 2
    },
    {
    	type: EnchantType.Projectile_Protection,
        max: 4,
        mulItem: 2,
        mulBook: 1
    },
    {
    	type: EnchantType.Thorns,
        max: 3,
        mulItem: 8,
        mulBook: 4
    },
    {
    	type: EnchantType.Respiration,
        max: 3,
        mulItem: 4,
        mulBook: 2
    },
    {
    	type: EnchantType.Depth_Strider,
        max: 3,
        mulItem: 4,
        mulBook: 2
    },
    {
    	type: EnchantType.Aqua_Affinity,
        max: 1,
        mulItem: 4,
        mulBook: 2
    },
    {
    	type: EnchantType.Sharpness,
        max: 5,
        mulItem: 1,
        mulBook: 1
    },
    {
    	type: EnchantType.Smite,
        max: 5,
        mulItem: 2,
        mulBook: 1
    },
    {
    	type: EnchantType.Bane_Of_Arthropods,
        max: 5,
        mulItem: 2,
        mulBook: 1
    },
    {
    	type: EnchantType.Knockback,
        max: 2,
        mulItem: 2,
        mulBook: 1
    },
    {
    	type: EnchantType.Fire_Aspect,
        max: 2,
        mulItem: 4,
        mulBook: 2
    },
    {
    	type: EnchantType.Looting,
        max: 3,
        mulItem: 4,
        mulBook: 2
    },
    {
    	type: EnchantType.Efficiency,
        max: 5,
        mulItem: 1,
        mulBook: 1
    },
    {
    	type: EnchantType.Silk_Touch,
        max: 1,
        mulItem: 8,
        mulBook: 4
    },
    {
    	type: EnchantType.Unbreaking,
        max: 3,
        mulItem: 2,
        mulBook: 1
    },
    {
    	type: EnchantType.Fortune,
        max: 3,
        mulItem: 4,
        mulBook: 2
    },
    {
    	type: EnchantType.Power,
        max: 5,
        mulItem: 1,
        mulBook: 1
    },
    {
    	type: EnchantType.Punch,
        max: 2,
        mulItem: 4,
        mulBook: 2
    },
    {
    	type: EnchantType.Flame,
        max: 1,
        mulItem: 4,
        mulBook: 2
    },
    {
    	type: EnchantType.Infinity,
        max: 1,
        mulItem: 8,
        mulBook: 4
    },
    {
    	type: EnchantType.Luck_Of_The_Sea,
        max: 3,
        mulItem: 4,
        mulBook: 2
    },
    {
    	type: EnchantType.Lure,
        max: 3,
        mulItem: 4,
        mulBook: 2
    },
    {
    	type: EnchantType.Frost_Walker,
        max: 2,
        mulItem: 4,
        mulBook: 2
    },
    {
    	type: EnchantType.Mending,
        max: 1,
        mulItem: 4,
        mulBook: 2
    },
    {
    	type: EnchantType.Curse_Of_Binding,
        max: 1,
        mulItem: 8,
        mulBook: 4
    },
    {
    	type: EnchantType.Curse_Of_Vanishing,
        max: 1,
        mulItem: 8,
        mulBook: 4
    },
    {
    	type: EnchantType.Impaling,
        max: 5,
        mulItem: 2,
        mulBook: 1
    },
    {
    	type: EnchantType.Riptide,
        max: 3,
        mulItem: 4,
        mulBook: 2
    },
    {
    	type: EnchantType.Loyalty,
        max: 3,
        mulItem: 1,
        mulBook: 1
    },
    {
    	type: EnchantType.Channeling,
        max: 1,
        mulItem: 8,
        mulBook: 4
    },
    {
    	type: EnchantType.Multishot,
        max: 1,
        mulItem: 4,
        mulBook: 2
    },
    {
    	type: EnchantType.Piercing,
        max: 4,
        mulItem: 1,
        mulBook: 1
    },
    {
    	type: EnchantType.Quick_Charge,
        max: 3,
        mulItem: 2,
        mulBook: 1
    },
    {
    	type: EnchantType.Sweeping_Edge,
        max: 3,
        mulItem: 4,
        mulBook: 2
    }
];


export const PERFECT_HELMET_ENCHANTABLES: Enchantable[] = [
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

export const PERFECT_SWORD_ENCHANTABLES: Enchantable[] = [
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
