# Design Tokens

Design tokens extracted from CrazyGames website screenshots to ensure brand consistency.

**Status:** ✅ Extracted from Screenshots
**Last Updated:** 2026-01-03

---

## Colors

### Primary Colors
```css
--primary-purple: #7C3AED;     /* Main brand color - buttons, links, accents */
--primary-purple-dark: #6D28D9; /* Hover states */
--primary-purple-light: #8B5CF6; /* Lighter variant */
```

### Background Colors
```css
--background-primary: #0F0F23;   /* Main page background - very dark navy */
--background-secondary: #1A1A2E; /* Sidebar, cards, elevated surfaces */
--background-tertiary: #252540;  /* Hover states, subtle elevation */
```

### Text Colors
```css
--text-primary: #FFFFFF;    /* Primary text, headings */
--text-secondary: #9CA3AF;  /* Secondary text, descriptions */
--text-tertiary: #6B7280;   /* Muted text, labels */
```

### Accent Colors
```css
--accent-green: #10B981;    /* User avatar, success states */
--accent-red: #EF4444;      /* Notifications badge, errors */
--accent-blue: #3B82F6;     /* Info, links */
--accent-orange: #F59E0B;   /* "Hot" badges, warnings */
```

### Premium Colors (For Your Demo)
```css
--premium-gold: #FFD700;        /* Premium badge, exclusive content */
--premium-gold-dark: #FFC700;   /* Hover state */
--premium-gradient: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
```

### Semantic Colors
```css
--success: #10B981;  /* Green */
--warning: #F59E0B;  /* Orange */
--error: #EF4444;    /* Red */
--info: #3B82F6;     /* Blue */
```

---

## Typography

### Font Families
```css
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-heading: 'Inter', sans-serif;
--font-mono: 'Fira Code', 'Courier New', monospace;
```

### Font Sizes
```css
/* Headings */
--text-h1: 2.5rem;      /* 40px - Large hero text */
--text-h2: 2rem;        /* 32px - Section headings */
--text-h3: 1.5rem;      /* 24px - Card titles */
--text-h4: 1.25rem;     /* 20px - Subsections */

/* Body */
--text-base: 1rem;      /* 16px - Base text */
--text-lg: 1.125rem;    /* 18px - Emphasized text */
--text-sm: 0.875rem;    /* 14px - Small text, captions */
--text-xs: 0.75rem;     /* 12px - Tiny text, labels */
```

### Font Weights
```css
--font-regular: 400;    /* Normal text */
--font-medium: 500;     /* Slightly emphasized */
--font-semibold: 600;   /* Sidebar items, buttons */
--font-bold: 700;       /* Headings, important text */
```

---

## Spacing

### Standard Spacing Scale
```css
--space-1: 0.25rem;  /* 4px */
--space-2: 0.5rem;   /* 8px */
--space-3: 0.75rem;  /* 12px */
--space-4: 1rem;     /* 16px */
--space-6: 1.5rem;   /* 24px */
--space-8: 2rem;     /* 32px */
--space-12: 3rem;    /* 48px */
--space-16: 4rem;    /* 64px */
```

### Layout Spacing
```css
--sidebar-width: 220px;           /* Left sidebar width */
--container-padding: 2rem;        /* 32px - Main content padding */
--section-gap: 2rem;              /* 32px - Gap between sections */
--card-padding: 1rem;             /* 16px - Internal card padding */
--card-gap: 1rem;                 /* 16px - Gap between cards */
--recently-played-height: 80px;   /* Top horizontal scroll bar */
```

---

## Border Radius

```css
--radius-sm: 4px;       /* Small elements, badges */
--radius-md: 8px;       /* Cards, buttons - MOST COMMON */
--radius-lg: 12px;      /* Large containers, modals */
--radius-xl: 16px;      /* Extra large, featured cards */
--radius-full: 9999px;  /* Circular - avatars, pills */
```

---

## Shadows

```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.2);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.3);
--shadow-purple: 0 0 20px rgba(124, 58, 237, 0.3); /* For premium elements */
```

---

## Breakpoints

```css
--breakpoint-sm: 640px;   /* Mobile */
--breakpoint-md: 768px;   /* Tablet */
--breakpoint-lg: 1024px;  /* Desktop */
--breakpoint-xl: 1280px;  /* Large desktop */
```

---

## Component-Specific

### Buttons
```css
--button-height: 40px;              /* Standard button height */
--button-padding-x: 1.5rem;         /* 24px horizontal */
--button-padding-y: 0.625rem;       /* 10px vertical */
--button-border-radius: 8px;        /* Rounded corners */
--button-font-weight: 600;          /* Semi-bold text */
```

### Game Cards
```css
--card-background: #1A1A2E;         /* Dark background */
--card-border: 1px solid #252540;   /* Subtle border */
--card-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
--card-padding: 0;                  /* Cards use image with title overlay */
--card-border-radius: 8px;          /* Consistent radius */
--card-aspect-ratio: 16/9;          /* Landscape game thumbnails */
--card-hover-scale: 1.05;           /* Slight zoom on hover */
```

### Sidebar Navigation
```css
--sidebar-width: 220px;
--sidebar-background: #1A1A2E;
--sidebar-item-height: 40px;
--sidebar-item-padding: 0.75rem 1rem;
--sidebar-icon-size: 20px;
--nav-link-color: #9CA3AF;          /* Default state */
--nav-link-hover: #FFFFFF;          /* Hover/active state */
--nav-link-active-bg: #252540;      /* Active background */
```

### Top Bar
```css
--topbar-height: 64px;
--topbar-background: #0F0F23;
--topbar-padding: 0 2rem;
--search-width: 400px;              /* Search bar width */
--search-background: #1A1A2E;
--search-border-radius: 8px;
--avatar-size: 36px;                /* User avatar */
--notification-badge-size: 18px;    /* Red notification dot */
```

### Recently Played Bar
```css
--recently-played-height: 80px;
--recently-played-padding: 1rem 2rem;
--recently-played-thumbnail-width: 100px;
--recently-played-thumbnail-height: 56px;
--recently-played-gap: 0.75rem;
```

---

## Implementation in Tailwind

Update `tailwind.config.ts` with these extracted values:

```typescript
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

        // Primary purple (brand)
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

        // Text
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
```

---

## Key Observations from Screenshots

### Layout Structure
- **Left Sidebar:** Fixed navigation, ~220px width, dark background
- **Top Bar:** Search, notifications, user avatar, 64px height
- **Recently Played:** Horizontal scrolling bar at top of content (when logged in)
- **Main Content:** Grid layout for games, sections with headings
- **Game Cards:** 16:9 aspect ratio, rounded corners, hover effects

### Logged In vs Not Logged In
**Logged In:**
- Shows "Recently played" horizontal scroll bar
- User avatar (green circle with initials) in top right
- More personalized sections
- "My games" panel available

**Not Logged In:**
- Purple "Log in" button in top right
- No recently played bar
- More generic content
- Prompts to log in for personalization

### Game Page
- Full-width game iframe
- Right sidebar with suggested games
- Game controls below game window
- Dark background for better focus on game

### Profile Panel
- Slides in from right side
- User avatar at top (green circle)
- Email display
- Purple "Profile" button (main CTA)
- Settings options
- Social media links at bottom
- Semi-transparent dark overlay on rest of page

### Premium Opportunity (For Your Demo)
You can add premium indicators:
- **Gold badge** (⭐) next to username when premium
- **No ads** - remove banner ad placeholders
- **Premium-exclusive games** - add lock icons for free users
- **Enhanced profile** - premium badge, special avatar border
- **2x coins** - visual multiplier indicator

---

## Design Philosophy

CrazyGames uses:
- **Dark theme** - reduces eye strain for gaming
- **Purple as primary** - stands out, gaming-associated color
- **High contrast** - white text on dark backgrounds
- **Rounded corners** - modern, friendly feel
- **Subtle shadows** - depth without being heavy
- **Icon + text navigation** - clear and accessible
- **Grid layouts** - efficient game browsing

For your premium demo, maintain this aesthetic but add:
- **Gold accents** for premium features
- **Lock icons** for restricted content
- **Subtle animations** on toggle
- **Clear visual differentiation** between free and premium states

---

**Status:** ✅ Design tokens extracted and ready for implementation!
