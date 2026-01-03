'use client';

import Link from 'next/link';

export default function PremiumPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] to-[#16161F] text-white p-8">
      {/* Back button */}
      <Link href="/" className="text-text-secondary hover:text-white mb-8 inline-block">
        ← Back to Homepage
      </Link>

      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-16 mt-8">
        <h1 className="text-5xl font-bold mb-4">
          Upgrade to <span className="text-[#EAB308]">Premium</span>
        </h1>
        <p className="text-xl text-text-secondary">
          Unlock the full CrazyGames experience with exclusive benefits
        </p>
      </div>

      {/* Benefits Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-[#1E1E2D] p-8 rounded-xl border border-[#262637]">
          <div className="text-4xl mb-4">🚫</div>
          <h3 className="text-2xl font-bold mb-3">No Ads</h3>
          <p className="text-text-secondary">
            Enjoy uninterrupted gaming with zero advertisements
          </p>
        </div>

        <div className="bg-[#1E1E2D] p-8 rounded-xl border border-[#262637]">
          <div className="text-4xl mb-4">🎮</div>
          <h3 className="text-2xl font-bold mb-3">Exclusive Games</h3>
          <p className="text-text-secondary">
            Access premium-only games and early releases
          </p>
        </div>

        <div className="bg-[#1E1E2D] p-8 rounded-xl border border-[#262637]">
          <div className="text-4xl mb-4">💰</div>
          <h3 className="text-2xl font-bold mb-3">2x Coin Rewards</h3>
          <p className="text-text-secondary">
            Earn double coins on every game you play
          </p>
        </div>
      </div>

      {/* Pricing */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Choose Your Plan</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Monthly */}
          <div className="bg-[#1E1E2D] p-8 rounded-xl border border-[#262637] hover:border-[#7C3AED] transition-all">
            <h3 className="text-xl font-bold mb-2">Monthly</h3>
            <div className="text-4xl font-bold mb-4">$4.99<span className="text-lg text-text-secondary">/mo</span></div>
            <Link
              href="/premium-home"
              className="block w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-center py-3 rounded-lg font-semibold transition-all"
            >
              Subscribe
            </Link>
          </div>

          {/* Annual - Recommended */}
          <div className="bg-gradient-to-br from-[#7C3AED]/20 to-[#EAB308]/20 p-8 rounded-xl border-2 border-[#EAB308] relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#EAB308] text-black px-4 py-1 rounded-full text-sm font-bold">
              BEST VALUE
            </div>
            <h3 className="text-xl font-bold mb-2">Annual</h3>
            <div className="text-4xl font-bold mb-1">$39.99<span className="text-lg text-text-secondary">/year</span></div>
            <p className="text-sm text-[#EAB308] mb-4">Save 33%</p>
            <Link
              href="/premium-home"
              className="block w-full bg-[#EAB308] hover:bg-[#CA8A04] text-black text-center py-3 rounded-lg font-bold transition-all"
            >
              Subscribe
            </Link>
          </div>

          {/* Lifetime */}
          <div className="bg-[#1E1E2D] p-8 rounded-xl border border-[#262637] hover:border-[#7C3AED] transition-all">
            <h3 className="text-xl font-bold mb-2">Lifetime</h3>
            <div className="text-4xl font-bold mb-4">$99.99<span className="text-lg text-text-secondary"> once</span></div>
            <Link
              href="/premium-home"
              className="block w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-center py-3 rounded-lg font-semibold transition-all"
            >
              Subscribe
            </Link>
          </div>
        </div>

        <p className="text-center text-text-secondary mt-8 text-sm">
          ✓ Cancel anytime • ✓ 7-day money back guarantee • ✓ Secure payment
        </p>
      </div>
    </div>
  );
}
