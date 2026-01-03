# Project Rules & Conventions

**Last Updated:** 2026-01-03

This document defines coding standards and conventions for the CrazyGames Premium Demo project. Since development happens across multiple phone sessions, consistency is critical.

---

## File Naming Conventions

### Components
- **Format:** PascalCase with descriptive names
- **Examples:** `PremiumToggle.tsx`, `GameCard.tsx`, `AdBanner.tsx`
- **Location:** `/components/` or `/components/[category]/`

### Pages
- **Format:** lowercase with hyphens for multi-word routes
- **Examples:** `page.tsx`, `layout.tsx`
- **Location:** `/app/[route]/`

### Utilities & Helpers
- **Format:** camelCase
- **Examples:** `formatCurrency.ts`, `calculateEarnings.ts`
- **Location:** `/lib/`

### Types
- **Format:** PascalCase, suffix with `Type` or use descriptive names
- **Examples:** `Game.ts`, `ShopItem.ts`, `UserState.ts`
- **Location:** `/types/`

---

## Code Style

### TypeScript
- **Always use TypeScript** - no `.js` or `.jsx` files
- **Explicit types** for function parameters and return values
- **Interfaces over types** for object shapes
- **Enums** for fixed sets of values (e.g., subscription tiers)

```typescript
// Good
interface Game {
  id: string;
  title: string;
  thumbnail: string;
  isPremiumExclusive: boolean;
}

export function getGame(id: string): Game | undefined {
  // implementation
}

// Avoid
const getGame = (id) => {
  // implementation
}
```

### React Components
- **Functional components only** - no class components
- **Named exports** for components (not default)
- **Props interface** defined inline or separately

```typescript
// Good
interface GameCardProps {
  game: Game;
  isPremium: boolean;
}

export function GameCard({ game, isPremium }: GameCardProps) {
  return <div>...</div>
}
```

### Tailwind CSS
- **Use Tailwind classes** - avoid custom CSS unless necessary
- **Responsive design** - mobile-first approach
- **Extract repeated patterns** into components
- **Use design tokens** from `tailwind.config.ts`

```tsx
// Good
<button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark">
  Subscribe
</button>
```

---

## State Management (Zustand)

### Store Structure
- **Single global store** in `/store/useStore.ts`
- **Slices** for different concerns (user, premium, games, etc.)
- **Actions** co-located with state

```typescript
// Structure
interface StoreState {
  // User state
  isPremium: boolean;
  coinBalance: number;

  // Actions
  togglePremium: () => void;
  addCoins: (amount: number) => void;
}
```

---

## Component Organization

### Folder Structure
```
components/
├── common/          # Reusable UI components
├── layout/          # Navigation, header, footer
├── premium/         # Premium-specific components
└── developer/       # Developer dashboard components
```

### Component Anatomy
```tsx
// 1. Imports
import { useState } from 'react'
import { useStore } from '@/store/useStore'

// 2. Types/Interfaces
interface ComponentProps {
  // ...
}

// 3. Component
export function Component({ prop }: ComponentProps) {
  // 4. Hooks
  const state = useStore()
  const [localState, setLocalState] = useState()

  // 5. Handlers
  const handleClick = () => {}

  // 6. Render
  return <div>...</div>
}
```

---

## Data Management

### Mock Data
- **Location:** `/data/` folder
- **Format:** TypeScript files exporting constants
- **Examples:** `games.ts`, `shopItems.ts`, `devGames.ts`

```typescript
// data/games.ts
export const GAMES: Game[] = [
  {
    id: '1',
    title: 'Stickman Hook',
    thumbnail: '/games/stickman-hook.jpg',
    isPremiumExclusive: false,
  },
  // ...
]
```

---

## Git Workflow

### Commit Messages
- **Format:** `type: description`
- **Types:** `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`
- **Examples:**
  - `feat: add premium toggle component`
  - `fix: coin balance not updating`
  - `docs: update progress tracking`

### Branch Strategy
- **main:** Production-ready code
- **dev:** Development branch
- **feature/[name]:** Feature branches (if needed)

### Commit Frequency
- **Commit often** - especially important for phone development
- **Small, logical commits** - easier to track and revert
- **End each session with a commit** - document where you stopped

---

## Session Management

### Before Starting Work
1. Check `docs/PROGRESS.md` for where you left off
2. Pull latest changes if working across devices
3. Review any TODOs or notes from previous session

### During Work
1. Update `PROGRESS.md` with what you're working on
2. Commit frequently
3. Document any blockers or decisions

### After Work
1. Commit all changes
2. Update `PROGRESS.md` with:
   - What you completed
   - What's next
   - Any blockers or questions
3. Push to GitHub

---

## Design Consistency

### CrazyGames Brand Matching
- **Always reference** `docs/DESIGN_TOKENS.md` for colors, fonts, spacing
- **Use real assets** from CrazyGames website when possible
- **Screenshot reference** in `/reference-screenshots/` folder

### Premium Indicators
- **Badge:** ⭐ emoji or custom icon
- **Colors:** Gold/yellow for premium features
- **States:** Clear locked/unlocked visual states

---

## Testing Approach

### Manual Testing Checklist
- [ ] Premium toggle works on all pages
- [ ] Conditional content shows/hides correctly
- [ ] State persists across navigation
- [ ] Responsive on mobile, tablet, desktop
- [ ] All links work
- [ ] No console errors

### Browser Testing
- Chrome (primary)
- Safari (iOS - since you're on phone)
- Firefox (if possible)

---

## Performance Guidelines

- **Optimize images** - use Next.js Image component
- **Lazy load** non-critical components
- **Minimize bundle size** - check with `npm run build`
- **Lighthouse score** - aim for 90+ on all metrics

---

## Notes for Phone Development

### Recommended Workflow
1. **Use Claude Code** for code generation and file operations
2. **Multiple terminals** for different tasks (dev server, git, etc.)
3. **Small commits** - easier to manage on phone
4. **Preview often** - test changes immediately
5. **Document everything** - future sessions depend on it

### Common Commands
```bash
# Start dev server (leave running in terminal 1)
npm run dev

# Git operations (terminal 2)
git status
git add .
git commit -m "message"
git push

# Quick checks
npm run lint
npm run build
```

---

**Remember:** Consistency over cleverness. Simple, readable code is better than complex optimizations.
