import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Backgrounds
        'bg-primary': '#0F0F23',
        'bg-secondary': '#1A1A2E',
        'bg-tertiary': '#252540',

        // Primary purple (CrazyGames brand)
        'primary': {
          DEFAULT: '#7C3AED',
          dark: '#6D28D9',
          light: '#8B5CF6',
        },

        // Accents
        'accent-green': '#10B981',
        'accent-red': '#EF4444',
        'accent-blue': '#3B82F6',
        'accent-orange': '#F59E0B',

        // Premium (for demo)
        'premium': {
          DEFAULT: '#FFD700',
          dark: '#FFC700',
        },

        // Text colors
        'text-primary': '#FFFFFF',
        'text-secondary': '#9CA3AF',
        'text-tertiary': '#6B7280',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      spacing: {
        'sidebar': '220px',
        'topbar': '64px',
        'recently-played': '80px',
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
      },
      boxShadow: {
        'purple': '0 0 20px rgba(124, 58, 237, 0.3)',
      },
    },
  },
  plugins: [],
}
export default config
