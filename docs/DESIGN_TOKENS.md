# Design Tokens

Design tokens extracted from CrazyGames website to ensure brand consistency.

**Status:** ⏳ Pending Analysis
**Last Updated:** 2026-01-03

---

## Colors

### Primary Colors
```css
/* TO BE EXTRACTED FROM CRAZYGAMES.COM */
--primary: #PLACEHOLDER;
--primary-dark: #PLACEHOLDER;
--primary-light: #PLACEHOLDER;
```

### Secondary Colors
```css
--secondary: #PLACEHOLDER;
--accent: #PLACEHOLDER;
```

### UI Colors
```css
--background: #PLACEHOLDER;
--surface: #PLACEHOLDER;
--border: #PLACEHOLDER;
--text-primary: #PLACEHOLDER;
--text-secondary: #PLACEHOLDER;
```

### Premium Colors
```css
--premium-gold: #FFD700;  /* Standard gold for premium features */
--premium-badge: #PLACEHOLDER;
```

### Semantic Colors
```css
--success: #PLACEHOLDER;
--warning: #PLACEHOLDER;
--error: #PLACEHOLDER;
--info: #PLACEHOLDER;
```

---

## Typography

### Font Families
```css
--font-primary: 'PLACEHOLDER', sans-serif;
--font-heading: 'PLACEHOLDER', sans-serif;
--font-mono: 'PLACEHOLDER', monospace;
```

### Font Sizes
```css
/* Headings */
--text-h1: PLACEHOLDER;
--text-h2: PLACEHOLDER;
--text-h3: PLACEHOLDER;
--text-h4: PLACEHOLDER;

/* Body */
--text-base: PLACEHOLDER;
--text-lg: PLACEHOLDER;
--text-sm: PLACEHOLDER;
--text-xs: PLACEHOLDER;
```

### Font Weights
```css
--font-regular: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

---

## Spacing

### Standard Spacing Scale
```css
--space-1: PLACEHOLDER;  /* 4px */
--space-2: PLACEHOLDER;  /* 8px */
--space-3: PLACEHOLDER;  /* 12px */
--space-4: PLACEHOLDER;  /* 16px */
--space-6: PLACEHOLDER;  /* 24px */
--space-8: PLACEHOLDER;  /* 32px */
--space-12: PLACEHOLDER; /* 48px */
--space-16: PLACEHOLDER; /* 64px */
```

### Layout Spacing
```css
--container-padding: PLACEHOLDER;
--section-gap: PLACEHOLDER;
--card-padding: PLACEHOLDER;
```

---

## Border Radius

```css
--radius-sm: PLACEHOLDER;   /* Small elements */
--radius-md: PLACEHOLDER;   /* Cards, buttons */
--radius-lg: PLACEHOLDER;   /* Large containers */
--radius-full: 9999px;      /* Pills, badges */
```

---

## Shadows

```css
--shadow-sm: PLACEHOLDER;
--shadow-md: PLACEHOLDER;
--shadow-lg: PLACEHOLDER;
--shadow-xl: PLACEHOLDER;
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
--button-height: PLACEHOLDER;
--button-padding-x: PLACEHOLDER;
--button-padding-y: PLACEHOLDER;
--button-border-radius: PLACEHOLDER;
```

### Cards
```css
--card-background: PLACEHOLDER;
--card-border: PLACEHOLDER;
--card-shadow: PLACEHOLDER;
--card-padding: PLACEHOLDER;
```

### Navigation
```css
--nav-height: PLACEHOLDER;
--nav-background: PLACEHOLDER;
--nav-link-color: PLACEHOLDER;
--nav-link-hover: PLACEHOLDER;
```

---

## Implementation in Tailwind

After extracting values, update `tailwind.config.ts`:

```typescript
const config: Config = {
  theme: {
    extend: {
      colors: {
        primary: 'EXTRACTED_VALUE',
        secondary: 'EXTRACTED_VALUE',
        // ...
      },
      fontFamily: {
        sans: ['EXTRACTED_FONT', 'sans-serif'],
        // ...
      },
      spacing: {
        // Custom spacing if needed
      },
    },
  },
}
```

---

## Analysis Checklist

### Homepage Analysis
- [ ] Visit https://www.crazygames.com
- [ ] Screenshot header/navigation
- [ ] Screenshot game cards
- [ ] Screenshot buttons and CTAs
- [ ] Extract color palette using DevTools
- [ ] Identify fonts using DevTools
- [ ] Measure spacing and layout grid

### Developer Portal Analysis
- [ ] Visit https://developer.crazygames.com
- [ ] Compare design language
- [ ] Extract any unique components
- [ ] Note differences from main site

### Assets to Collect
- [ ] Logo (SVG if possible)
- [ ] Favicon
- [ ] Game thumbnails (5-10 examples)
- [ ] Icons used in UI

---

## Notes

- Use browser DevTools to inspect actual CSS values
- Take screenshots for visual reference
- Document any animations or transitions
- Note hover states and interactive elements
- CrazyGames uses a gaming/playful aesthetic - capture that tone

---

**Next Action:** Analyze CrazyGames website and populate this document with actual values.
