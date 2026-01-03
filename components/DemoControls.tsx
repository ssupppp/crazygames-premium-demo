'use client';

import { useStore } from '@/store/useStore';
import { Crown, User, Settings } from 'lucide-react';
import { useState } from 'react';

export default function DemoControls() {
  const { isPremium, activatePremium, resetToFree, resetDemo } = useStore();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-50 bg-gray-800 hover:bg-gray-700 text-gray-300 p-3 rounded-full shadow-lg transition-all"
        aria-label="Demo Controls"
      >
        <Settings className="w-5 h-5" />
      </button>

      {/* Control Panel */}
      {isOpen && (
        <div className="fixed bottom-20 left-6 z-50 bg-gray-800 border border-gray-700 rounded-lg shadow-xl p-4 w-64">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-semibold text-sm">🎮 Demo Controls</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white"
            >
              ✕
            </button>
          </div>

          {/* Current Status */}
          <div className="mb-4 p-3 bg-gray-900 rounded-lg">
            <div className="text-xs text-gray-400 mb-1">Current Mode:</div>
            <div className="flex items-center gap-2">
              {isPremium ? (
                <>
                  <Crown className="w-4 h-4 text-yellow-400" />
                  <span className="text-yellow-400 font-semibold">Premium</span>
                </>
              ) : (
                <>
                  <User className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-300 font-semibold">Free</span>
                </>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-2">
            <button
              onClick={() => resetToFree()}
              disabled={!isPremium}
              className="w-full px-3 py-2 bg-gray-700 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm rounded-lg transition-all"
            >
              Reset to Free User
            </button>

            <button
              onClick={() => activatePremium('monthly')}
              disabled={isPremium}
              className="w-full px-3 py-2 bg-primary hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm rounded-lg transition-all"
            >
              Skip to Premium
            </button>

            <button
              onClick={() => resetDemo()}
              className="w-full px-3 py-2 bg-accent-red hover:bg-red-600 text-white text-sm rounded-lg transition-all"
            >
              Reset Demo
            </button>
          </div>

          <div className="mt-4 pt-3 border-t border-gray-700">
            <p className="text-gray-500 text-xs">
              For demo purposes only. Users should go through the conversion flow.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
