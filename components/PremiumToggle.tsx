'use client';

import { useStore } from '@/store/useStore';
import { Crown, User } from 'lucide-react';

export default function PremiumToggle() {
  const { isPremium, activatePremium, resetToFree } = useStore();

  const handleToggle = () => {
    if (isPremium) {
      resetToFree();
    } else {
      activatePremium('monthly');
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleToggle}
        className={`
          flex items-center gap-3 px-6 py-4 rounded-full
          shadow-lg transition-all duration-300 font-semibold text-lg
          hover:scale-105 active:scale-95
          ${
            isPremium
              ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white shadow-yellow-500/50'
              : 'bg-gray-700 text-gray-200 hover:bg-gray-600 shadow-gray-700/50'
          }
        `}
        aria-label={isPremium ? 'Switch to Free Mode' : 'Switch to Premium Mode'}
      >
        {isPremium ? (
          <>
            <Crown className="w-6 h-6" />
            <span>Premium Mode</span>
          </>
        ) : (
          <>
            <User className="w-6 h-6" />
            <span>Free Mode</span>
          </>
        )}
      </button>

      {/* Mode Indicator Badge */}
      <div className="absolute -top-2 -left-2 pointer-events-none">
        <div
          className={`
            px-3 py-1 rounded-full text-xs font-bold
            ${isPremium ? 'bg-yellow-400 text-yellow-900' : 'bg-gray-500 text-white'}
          `}
        >
          {isPremium ? '⭐ ACTIVE' : 'TAP TO UPGRADE'}
        </div>
      </div>
    </div>
  );
}
