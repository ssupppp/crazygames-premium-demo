'use client';

import { useStore } from '@/store/useStore';
import { Crown, Coins } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  const { isPremium, coinBalance } = useStore();

  const formatCoins = (amount: number) => {
    return amount.toLocaleString();
  };

  return (
    <header className="sticky top-0 z-40 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg p-2">
              <span className="text-2xl">🎮</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                CrazyGames
              </h1>
              {isPremium && (
                <p className="text-xs text-yellow-400 font-semibold flex items-center gap-1">
                  <Crown className="w-3 h-3" />
                  Premium
                </p>
              )}
            </div>
          </Link>

          {/* Right Side - Coin Balance & Premium Badge */}
          <div className="flex items-center gap-4">
            {/* Coin Balance */}
            <div
              className={`
                flex items-center gap-2 px-4 py-2 rounded-full
                ${
                  isPremium
                    ? 'bg-gradient-to-r from-yellow-600 to-yellow-700'
                    : 'bg-gray-800'
                }
                transition-all duration-300
              `}
            >
              <Coins className="w-5 h-5 text-yellow-400" />
              <div className="flex flex-col">
                <span className="text-white font-bold text-sm">
                  {formatCoins(coinBalance)}
                </span>
                {isPremium && (
                  <span className="text-yellow-300 text-xs font-semibold">
                    2x Earnings
                  </span>
                )}
              </div>
            </div>

            {/* Premium Badge (mobile-friendly) */}
            {isPremium ? (
              <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 px-4 py-2 rounded-full flex items-center gap-2 shadow-lg shadow-yellow-500/50">
                <Crown className="w-5 h-5 text-white" />
                <span className="text-white font-bold text-sm hidden sm:inline">
                  Premium
                </span>
              </div>
            ) : (
              <Link
                href="/premium"
                className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-full text-white font-semibold text-sm transition-all hover:scale-105 active:scale-95"
              >
                Upgrade
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
