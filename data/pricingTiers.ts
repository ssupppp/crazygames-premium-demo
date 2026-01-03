import type { PricingTier } from '@/types';

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'monthly',
    name: 'Monthly',
    price: 4.99,
    interval: 'per month',
  },
  {
    id: 'annual',
    name: 'Annual',
    price: 49.99,
    interval: 'per year',
    savings: 'Save 17%',
    recommended: true,
  },
  {
    id: 'lifetime',
    name: 'Lifetime',
    price: 99.99,
    interval: 'one-time',
    savings: 'Best Value',
  },
];
