import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { PlanType } from '@/types';

interface StoreState {
  // Premium Status
  isPremium: boolean;
  subscriptionDate: Date | null;
  planType: PlanType | null;

  // User Data
  coinBalance: number;
  gamesPlayed: number;
  userLevel: number;
  favoriteGames: string[];

  // Actions
  activatePremium: (planType: PlanType) => void;
  resetToFree: () => void;
  addCoins: (amount: number) => void;
  spendCoins: (amount: number) => boolean;
  incrementGamesPlayed: () => void;
  addFavorite: (gameId: string) => void;
  removeFavorite: (gameId: string) => void;
  resetDemo: () => void;
}

const initialState = {
  isPremium: false,
  subscriptionDate: null,
  planType: null,
  coinBalance: 1000,
  gamesPlayed: 0,
  userLevel: 1,
  favoriteGames: [],
};

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      ...initialState,

      // Activate premium subscription
      activatePremium: (planType: PlanType) => {
        set({
          isPremium: true,
          subscriptionDate: new Date(),
          planType,
        });
      },

      // Reset to free user (for demo purposes)
      resetToFree: () => {
        set({
          isPremium: false,
          subscriptionDate: null,
          planType: null,
        });
      },

      // Add coins (with premium multiplier)
      addCoins: (amount: number) => {
        const { isPremium, coinBalance } = get();
        const multiplier = isPremium ? 2 : 1;
        const actualAmount = amount * multiplier;

        set({
          coinBalance: coinBalance + actualAmount,
        });
      },

      // Spend coins (returns success/failure)
      spendCoins: (amount: number) => {
        const { coinBalance } = get();

        if (coinBalance >= amount) {
          set({ coinBalance: coinBalance - amount });
          return true;
        }

        return false;
      },

      // Increment games played counter
      incrementGamesPlayed: () => {
        const { gamesPlayed } = get();
        set({ gamesPlayed: gamesPlayed + 1 });
      },

      // Add game to favorites
      addFavorite: (gameId: string) => {
        const { favoriteGames } = get();

        if (!favoriteGames.includes(gameId)) {
          set({ favoriteGames: [...favoriteGames, gameId] });
        }
      },

      // Remove game from favorites
      removeFavorite: (gameId: string) => {
        const { favoriteGames } = get();
        set({
          favoriteGames: favoriteGames.filter((id) => id !== gameId),
        });
      },

      // Reset entire demo (for testing)
      resetDemo: () => {
        set(initialState);
      },
    }),
    {
      name: 'crazygames-store', // localStorage key
      partialize: (state) => ({
        // Only persist certain fields
        isPremium: state.isPremium,
        subscriptionDate: state.subscriptionDate,
        planType: state.planType,
        coinBalance: state.coinBalance,
        gamesPlayed: state.gamesPlayed,
        favoriteGames: state.favoriteGames,
      }),
    }
  )
);
