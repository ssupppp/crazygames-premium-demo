'use client';

import { useState } from 'react';
import { useStore } from '@/store/useStore';
import { Lock, Crown } from 'lucide-react';
import type { Game } from '@/types';
import Link from 'next/link';
import Image from 'next/image';

interface GameCardProps {
  game: Game;
  size?: 'small' | 'medium' | 'large';
  showHotBadge?: boolean;
}

export default function GameCard({ game, size = 'medium', showHotBadge = false }: GameCardProps) {
  const { isPremium } = useStore();
  const isLocked = game.isPremiumExclusive && !isPremium;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={isLocked ? '/premium' : `/game/${game.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative rounded-lg overflow-hidden cursor-pointer">
        {/* Card Container */}
        <div className="aspect-square bg-bg-tertiary border border-bg-tertiary rounded-lg overflow-hidden">
          {/* Image */}
          <img
            src={game.thumbnail}
            alt={game.title}
            className={`w-full h-full object-cover transition-transform duration-300 ${
              isLocked ? 'opacity-50' : 'group-hover:scale-105'
            }`}
          />

          {/* HOT Badge */}
          {showHotBadge && !isLocked && (
            <div className="absolute top-2 left-2 bg-accent-hot text-white px-2 py-1 rounded text-xs font-bold">
              HOT
            </div>
          )}

          {/* Premium Badge */}
          {game.isPremiumExclusive && (
            <div className="absolute top-2 right-2">
              <div className="flex items-center gap-1 bg-premium text-white px-2 py-1 rounded text-xs font-bold shadow-lg">
                <Crown className="w-3 h-3" />
                <span>PREMIUM</span>
              </div>
            </div>
          )}

          {/* Lock Overlay for Free Users */}
          {isLocked && (
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <div className="text-center">
                <div className="bg-premium rounded-full p-4 mx-auto mb-2">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <p className="text-white font-semibold text-sm">Premium Only</p>
              </div>
            </div>
          )}

          {/* Hover Overlay with Play Button */}
          {isHovered && !isLocked && (
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center transition-all">
              <button className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full font-semibold text-sm">
                Play Now
              </button>
            </div>
          )}
        </div>

        {/* Title */}
        <p className="mt-3 text-sm font-semibold text-text-primary truncate">
          {game.title}
        </p>
      </div>
    </Link>
  );
}
