// Core Types for CrazyGames Premium Demo

export type PlanType = 'monthly' | 'annual' | 'lifetime';

export interface UserState {
  isPremium: boolean;
  coinBalance: number;
  gamesPlayed: number;
  userLevel: number;
  favoriteGames: string[];
  subscriptionDate: Date | null;
  planType: PlanType | null;
}

export interface Game {
  id: string;
  title: string;
  thumbnail: string;
  description: string;
  category: string;
  isPremiumExclusive: boolean;
  plays: number;
  rating: number;
}

export interface ShopItem {
  id: string;
  name: string;
  description: string;
  price: number; // in coins
  imageUrl: string;
  isPremiumExclusive: boolean;
  category: 'avatar' | 'badge' | 'powerup' | 'skin';
}

export interface PremiumBenefit {
  icon: string;
  title: string;
  description: string;
}

export interface PricingTier {
  id: PlanType;
  name: string;
  price: number;
  interval: string;
  savings?: string;
  recommended?: boolean;
}

export interface DeveloperGame {
  id: string;
  title: string;
  thumbnail: string;
  totalPlays: number;
  premiumPlays: number;
  freePlays: number;
  premiumEnabled: boolean;
  revenue: {
    total: number;
    premium: number;
    ads: number;
    purchases: number;
  };
}
