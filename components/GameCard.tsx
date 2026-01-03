'use client';

import { useStore } from '@/store/useStore';
import { Lock, Crown, Play } from 'lucide-react';
import type { Game } from '@/types';
import Link from 'next/link';

interface GameCardProps {
  game: Game;
}

export default function GameCard({ game }: GameCardProps) {
  const { isPremium } = useStore();
  const isLocked = game.isPremiumExclusive && !isPremium;

  const formatPlays = (plays: number) => {
    if (plays >= 1000000) return `${(plays / 1000000).toFixed(1)}M`;
    if (plays >= 1000) return `${(plays / 1000).toFixed(0)}K`;
    return plays.toString();
  };

  return (
    <Link
      href={isLocked ? '/premium' : `/game/${game.id}`}
      className="group block"
    >
      <div
        className={`
          relative overflow-hidden rounded-xl bg-gray-800
          transition-all duration-300
          ${isLocked ? 'opacity-75' : 'hover:scale-105 hover:shadow-2xl'}
        `}
      >
        {/* Thumbnail */}
        <div className="relative aspect-video bg-gradient-to-br from-purple-900 to-blue-900">
          {/* Placeholder gradient since we don't have actual images */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Play className="w-16 h-16 text-white/30" />
          </div>

          {/* Game Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <h3 className="font-bold text-white text-lg line-clamp-1">
              {game.title}
            </h3>
          </div>

          {/* Premium Exclusive Badge */}
          {game.isPremiumExclusive && (
            <div className="absolute top-3 right-3">
              <div className="flex items-center gap-1 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                <Crown className="w-3 h-3" />
                <span>PREMIUM</span>
              </div>
            </div>
          )}

          {/* Lock Overlay for Free Users */}
          {isLocked && (
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center">
              <div className="text-center">
                <div className="bg-yellow-500 rounded-full p-4 mx-auto mb-2">
                  <Lock className="w-8 h-8 text-yellow-900" />
                </div>
                <p className="text-white font-semibold text-sm">Premium Only</p>
                <p className="text-yellow-400 text-xs mt-1">Tap to unlock</p>
              </div>
            </div>
          )}
        </div>

        {/* Game Info */}
        <div className="p-4">
          <p className="text-gray-400 text-sm line-clamp-2 mb-3">
            {game.description}
          </p>

          <div className="flex items-center justify-between text-xs">
            <span className="bg-purple-900/50 text-purple-300 px-3 py-1 rounded-full">
              {game.category}
            </span>

            <div className="flex items-center gap-3 text-gray-400">
              <span>⭐ {game.rating}</span>
              <span>▶ {formatPlays(game.plays)}</span>
            </div>
          </div>
        </div>

        {/* Hover Play Button (only for unlocked games) */}
        {!isLocked && (
          <div className="absolute inset-0 bg-purple-900/0 group-hover:bg-purple-900/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <div className="bg-white rounded-full p-4 transform scale-0 group-hover:scale-100 transition-transform duration-300">
              <Play className="w-8 h-8 text-purple-900 fill-purple-900" />
            </div>
          </div>
        )}
      </div>
    </Link>
  );
}
