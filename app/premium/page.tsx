'use client';

import { useRouter } from 'next/navigation';
import { PREMIUM_BENEFITS } from '@/data/premiumBenefits';
import { PRICING_TIERS } from '@/data/pricingTiers';
import { BenefitCard } from '@/components/premium/BenefitCard';
import { PricingCard } from '@/components/premium/PricingCard';
import { ComparisonTable } from '@/components/premium/ComparisonTable';
import type { PlanType } from '@/types';

export default function PremiumPage() {
  const router = useRouter();

  const handleSelectPlan = (planType: PlanType) => {
    // Store selected plan and navigate to checkout
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('selectedPlan', planType);
    }
    router.push('/premium/checkout');
  };

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Hero Section */}
      <section className="relative py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-text-primary mb-6">
            Level Up Your Gaming with Premium
          </h1>
          <p className="text-xl text-text-secondary mb-8">
            Ad-free gaming, exclusive content, and 2x rewards
          </p>

          {/* Split Comparison Visual */}
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {/* Free Side */}
            <div className="bg-bg-secondary rounded-xl p-6 border-2 border-bg-tertiary">
              <div className="text-text-secondary font-semibold mb-4">
                Free Experience
              </div>
              <ul className="space-y-3 text-left text-text-secondary">
                <li className="flex items-center gap-2">
                  <span className="text-accent-red">✗</span> Ads between games
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent-red">✗</span> Standard rewards (1x)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent-red">✗</span> Limited content
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent-red">✗</span> Basic profile
                </li>
              </ul>
            </div>

            {/* Premium Side */}
            <div className="bg-gradient-to-br from-primary/20 to-premium/20 rounded-xl p-6 border-2 border-primary">
              <div className="text-premium font-semibold mb-4 flex items-center justify-center gap-2">
                <span>⭐</span> Premium Experience
              </div>
              <ul className="space-y-3 text-left text-text-primary">
                <li className="flex items-center gap-2">
                  <span className="text-accent-green">✓</span> Ad-free gaming
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent-green">✓</span> 2x coin earnings
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent-green">✓</span> Exclusive games
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent-green">✓</span> Premium badge
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 bg-bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary text-center mb-12">
            Premium Benefits
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PREMIUM_BENEFITS.map((benefit, index) => (
              <BenefitCard
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary text-center mb-4">
            Choose Your Plan
          </h2>
          <p className="text-text-secondary text-center mb-12">
            Select the plan that works best for you
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {PRICING_TIERS.map((tier) => (
              <PricingCard
                key={tier.id}
                tier={tier}
                onSelect={handleSelectPlan}
              />
            ))}
          </div>

          <div className="text-center mt-8 text-text-tertiary text-sm">
            <p>✓ Cancel anytime • ✓ 7-day money back guarantee • ✓ Secure checkout</p>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-16 px-6 bg-bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary text-center mb-12">
            Free vs Premium
          </h2>
          <div className="bg-bg-primary rounded-xl p-6">
            <ComparisonTable />
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-text-secondary text-lg mb-4">
            Join over <span className="text-premium font-bold">100,000+</span> Premium Gamers
          </p>
          <div className="flex justify-center gap-8 text-text-secondary">
            <div>
              <div className="text-3xl font-bold text-text-primary">4.9/5</div>
              <div className="text-sm">User Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-text-primary">100k+</div>
              <div className="text-sm">Premium Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-text-primary">50M+</div>
              <div className="text-sm">Games Played</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-primary to-premium">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Go Premium?
          </h2>
          <p className="text-white/90 mb-8">
            Start enjoying ad-free gaming and exclusive rewards today
          </p>
          <button
            onClick={() => handleSelectPlan('annual')}
            className="bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            Get Premium Now
          </button>
        </div>
      </section>
    </div>
  );
}
