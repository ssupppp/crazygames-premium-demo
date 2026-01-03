'use client';

import { useStore } from '@/store/useStore';
import { XCircle } from 'lucide-react';

interface AdBannerProps {
  size?: 'top' | 'sidebar';
  className?: string;
}

export default function AdBanner({ size = 'top', className = '' }: AdBannerProps) {
  const { isPremium } = useStore();

  // Don't render anything in premium mode
  if (isPremium) {
    return null;
  }

  const dimensions = {
    top: 'h-24', // 728x90 equivalent
    sidebar: 'h-64', // 300x250 equivalent
  };

  return (
    <div className={`${dimensions[size]} ${className}`}>
      <div className="relative w-full h-full bg-gradient-to-r from-gray-800 to-gray-700 border-2 border-gray-600 rounded-lg flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse" />
        </div>

        {/* Ad Content */}
        <div className="relative z-10 text-center p-4">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-gray-400 text-xs font-mono uppercase tracking-wider">
              Advertisement
            </span>
          </div>

          <p className="text-gray-300 text-sm font-semibold mb-1">
            {size === 'top' ? '🎮 Play More Games!' : '🎯 Special Offer!'}
          </p>

          <p className="text-gray-500 text-xs">
            Remove ads with Premium
          </p>

          {/* Fake Close Button (non-functional) */}
          <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-400" suppressHydrationWarning>
            <XCircle className="w-4 h-4" />
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse" />
      </div>
    </div>
  );
}
