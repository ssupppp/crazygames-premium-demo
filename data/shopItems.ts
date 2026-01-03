import type { ShopItem } from '@/types';

export const SHOP_ITEMS: ShopItem[] = [
  {
    id: 'item-1',
    name: 'Basic Avatar Frame',
    description: 'Simple border for your profile picture',
    price: 100,
    imageUrl: '/shop/basic-frame.png',
    isPremiumExclusive: false,
    category: 'avatar',
  },
  {
    id: 'item-2',
    name: '2x Coin Booster',
    description: 'Double coins for 1 hour (stacks with Premium)',
    price: 200,
    imageUrl: '/shop/coin-booster.png',
    isPremiumExclusive: false,
    category: 'powerup',
  },
  {
    id: 'item-3',
    name: 'Gold Crown Badge',
    description: 'Exclusive premium crown icon',
    price: 500,
    imageUrl: '/shop/gold-crown.png',
    isPremiumExclusive: true,
    category: 'badge',
  },
  {
    id: 'item-4',
    name: 'Rainbow Trail Effect',
    description: 'Animated rainbow trail for your avatar',
    price: 300,
    imageUrl: '/shop/rainbow-trail.png',
    isPremiumExclusive: false,
    category: 'avatar',
  },
  {
    id: 'item-5',
    name: 'Premium Skin Pack',
    description: 'Exclusive character skins bundle',
    price: 1000,
    imageUrl: '/shop/skin-pack.png',
    isPremiumExclusive: true,
    category: 'skin',
  },
  {
    id: 'item-6',
    name: 'Victory Emote',
    description: 'Celebrate wins with style',
    price: 150,
    imageUrl: '/shop/victory-emote.png',
    isPremiumExclusive: false,
    category: 'avatar',
  },
  {
    id: 'item-7',
    name: 'Diamond Badge',
    description: 'Ultra-rare premium badge',
    price: 2000,
    imageUrl: '/shop/diamond-badge.png',
    isPremiumExclusive: true,
    category: 'badge',
  },
  {
    id: 'item-8',
    name: 'Speed Boost',
    description: 'Temporary speed increase powerup',
    price: 250,
    imageUrl: '/shop/speed-boost.png',
    isPremiumExclusive: false,
    category: 'powerup',
  },
];

// Helper functions
export const getShopItemsByCategory = (category: ShopItem['category']) =>
  SHOP_ITEMS.filter((item) => item.category === category);

export const getPremiumShopItems = () =>
  SHOP_ITEMS.filter((item) => item.isPremiumExclusive);

export const getFreeShopItems = () =>
  SHOP_ITEMS.filter((item) => !item.isPremiumExclusive);

export const getShopItemById = (id: string) =>
  SHOP_ITEMS.find((item) => item.id === id);
