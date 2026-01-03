'use client';

import { GAMES } from '@/data/games';
import GameCard from '@/components/GameCard';
import AdBanner from '@/components/AdBanner';
import { useStore } from '@/store/useStore';
import Link from 'next/link';

export default function Home() {
  const { isPremium } = useStore();

  return (
    <main className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-purple-900 to-gray-900 py-12 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {isPremium ? (
              <>
                Welcome to <span className="text-yellow-400">Premium</span> Gaming
              </>
            ) : (
              'Discover Amazing Games'
            )}
          </h1>
          <p className="text-gray-300 text-lg mb-6">
            {isPremium
              ? 'Enjoy ad-free gaming with 2x coin rewards!'
              : 'Play thousands of games for free'}
          </p>

          {!isPremium && (
            <Link
              href="/premium"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-8 py-3 rounded-full font-bold text-lg transition-all hover:scale-105 active:scale-95 shadow-lg shadow-yellow-500/50"
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
          <h2 className="text-2xl font-bold text-white mb-2">
            {isPremium ? 'All Games Unlocked' : 'Featured Games'}
          </h2>
          <p className="text-gray-400">
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
          <div className="mt-12 bg-gradient-to-r from-purple-900 to-blue-900 rounded-2xl p-8 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready for Ad-Free Gaming?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Unlock all premium games, remove ads, and earn 2x coins with Premium membership.
            </p>
            <Link
              href="/premium"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 active:scale-95 shadow-xl shadow-yellow-500/50"
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
