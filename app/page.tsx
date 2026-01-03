'use client';

import { GAMES } from '@/data/games';
import GameCard from '@/components/GameCard';
import AdBanner from '@/components/AdBanner';
import { useStore } from '@/store/useStore';
import Link from 'next/link';

export default function Home() {
  const { isPremium } = useStore();

  return (
    <main className="min-h-screen bg-bg-primary">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-primary/20 to-bg-primary py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            {isPremium ? (
              <>
                Welcome to <span className="text-premium">Premium</span> Gaming
              </>
            ) : (
              'Discover Amazing Games'
            )}
          </h1>
          <p className="text-text-secondary text-lg mb-8">
            {isPremium
              ? 'Enjoy ad-free gaming with 2x coin rewards!'
              : 'Play thousands of games - free forever'}
          </p>

          {!isPremium && (
            <Link
              href="/premium"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-premium to-premium-dark hover:from-premium-dark hover:to-premium text-bg-primary px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 active:scale-95 shadow-lg shadow-premium/50"
            >
              <span>⭐</span>
              Unlock Premium
            </Link>
          )}
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Top Ad Banner (Free Mode Only) */}
        <AdBanner size="top" className="mb-8" />

        {/* Featured Section Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-text-primary mb-2">
            {isPremium ? 'All Games Unlocked' : 'Featured Games'}
          </h2>
          <p className="text-text-secondary">
            {isPremium
              ? `${GAMES.length} premium games available`
              : `${GAMES.filter(g => !g.isPremiumExclusive).length} free games • ${GAMES.filter(g => g.isPremiumExclusive).length} premium exclusives`}
          </p>
        </div>

        {/* Game Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {GAMES.map((game, index) => (
            <div key={game.id}>
              <GameCard game={game} />

              {/* Ad Banner after every 4th game (Free Mode Only) */}
              {!isPremium && (index + 1) % 4 === 0 && index !== GAMES.length - 1 && (
                <div className="col-span-1 sm:col-span-2 lg:col-span-3 xl:col-span-4 my-6">
                  <AdBanner size="top" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Premium CTA Section (Free Mode Only) */}
        {!isPremium && (
          <div className="mt-16 bg-gradient-to-r from-primary/20 to-premium/20 border border-primary/30 rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-3xl font-bold text-text-primary mb-4">
              Tired of Ads? Go Premium!
            </h3>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              Unlock all exclusive games, remove ads completely, and earn 2x coins on every game you play.
            </p>
            <Link
              href="/premium"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-premium to-premium-dark hover:from-premium-dark hover:to-premium text-bg-primary px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 active:scale-95 shadow-xl shadow-premium/50"
            >
              <span>👑</span>
              View Premium Plans
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
