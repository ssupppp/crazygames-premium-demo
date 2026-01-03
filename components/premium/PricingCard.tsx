import type { PricingTier } from '@/types';

interface PricingCardProps {
  tier: PricingTier;
  onSelect: (planType: PricingTier['id']) => void;
}

export function PricingCard({ tier, onSelect }: PricingCardProps) {
  return (
    <div
      className={`
        relative bg-bg-secondary rounded-xl p-6 border-2 transition-all hover:scale-105
        ${tier.recommended
          ? 'border-primary shadow-purple'
          : 'border-bg-tertiary hover:border-primary/50'
        }
      `}
    >
      {tier.recommended && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
          Recommended
        </div>
      )}

      {tier.savings && !tier.recommended && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-premium text-bg-primary px-4 py-1 rounded-full text-sm font-bold">
          {tier.savings}
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-text-primary mb-2">
          {tier.name}
        </h3>
        <div className="mb-2">
          <span className="text-4xl font-bold text-text-primary">
            ${tier.price}
          </span>
        </div>
        <p className="text-text-secondary text-sm">{tier.interval}</p>
      </div>

      <button
        onClick={() => onSelect(tier.id)}
        className={`
          w-full py-3 rounded-lg font-semibold transition-all
          ${tier.recommended
            ? 'bg-primary hover:bg-primary-dark text-white'
            : 'bg-bg-tertiary hover:bg-primary/20 text-text-primary border border-primary/50'
          }
        `}
      >
        Select Plan
      </button>
    </div>
  );
}
