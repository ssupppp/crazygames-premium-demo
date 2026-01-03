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
        // Will be populated after analyzing CrazyGames website
        primary: '#FF6B35',
        secondary: '#004E89',
        accent: '#FFD700',
      },
    },
  },
  plugins: [],
}
export default config
