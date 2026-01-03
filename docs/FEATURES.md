# Feature Specification

Comprehensive breakdown of all features for the CrazyGames Premium Demo.

**Last Updated:** 2026-01-03

---

## 🎯 Core Concept

A **toggle-able demo** that shows real-time differences between Free and Premium user experiences on a gaming platform.

**Key Principle:** Everything is visual and interactive - no actual backend, payments, or authentication.

---

## 🔑 Core Features

### 1. Premium Toggle (THE MOST CRITICAL FEATURE)

**Description:** Global switch that instantly transforms the entire site between Free and Premium modes.

**Requirements:**
- [ ] Fixed position component (always visible, doesn't scroll away)
- [ ] Toggle states: `Free` ↔ `Premium`
- [ ] Visual indicator showing current mode
- [ ] Instant state change (no page reload)
- [ ] Persists across all pages during session
- [ ] Smooth animations during toggle

**Technical:**
- Zustand global state: `isPremium: boolean`
- Action: `togglePremium()`
- Accessible from all pages/components

**Design:**
- Prominent position (top-right corner or floating button)
- Clear labels: "Free Mode" | "Premium Mode"
- Premium mode shows gold/yellow accent
- Smooth transition animation

---

### 2. Global State Management (Zustand)

**State Structure:**
```typescript
interface AppState {
  // Premium Status
  isPremium: boolean;
  togglePremium: () => void;

  // User Data
  coinBalance: number;
  addCoins: (amount: number) => void;
  spendCoins: (amount: number) => void;

  // User Profile
  userLevel: number;
  gamesPlayed: number;

  // Preferences
  favoriteGames: string[];
  addFavorite: (gameId: string) => void;
  removeFavorite: (gameId: string) => void;
}
```

**Requirements:**
- [ ] Single global store
- [ ] Premium status accessible everywhere
- [ ] Coin balance tracking
- [ ] User stats tracking
- [ ] State persists during session (optional: localStorage)

---

### 3. Conditional Content System

**Description:** Content that shows/hides or changes based on premium status.

**Free Mode Shows:**
- [ ] Ad banners (mockups/placeholders)
- [ ] Standard coin earning rates (1x)
- [ ] Locked premium content (with lock icons)
- [ ] Basic user badge
- [ ] Limited shop items

**Premium Mode Shows:**
- [ ] No ads (hidden or replaced with content)
- [ ] Enhanced earning rates (2x coins)
- [ ] Unlocked premium content
- [ ] Premium badge (⭐ or custom icon)
- [ ] Exclusive shop items available

**Technical Implementation:**
```tsx
{isPremium ? (
  <PremiumContent />
) : (
  <FreeContent />
)}
```

---

## 📄 Page Features Breakdown

### User-Facing Pages (5 pages)

#### **1. Homepage (`/`)**

**Purpose:** Main games directory

**Free Mode:**
- [ ] Grid of 10-12 game cards
- [ ] Banner ads at top and between rows
- [ ] Premium games shown but locked
- [ ] Basic navigation
- [ ] "Go Premium" CTA button

**Premium Mode:**
- [ ] Same game grid, all unlocked
- [ ] No ads (more breathing room)
- [ ] Premium badge on exclusive games
- [ ] Enhanced navigation with premium indicator

**Components Needed:**
- GameCard component
- AdBanner component (shows in free, hides in premium)
- GameGrid layout
- PremiumBadge indicator

---

#### **2. Profile Page (`/profile`)**

**Purpose:** User stats, achievements, coin balance

**Free Mode:**
- [ ] Basic user badge
- [ ] Coin balance display
- [ ] Games played count
- [ ] Standard earning history
- [ ] "Upgrade to Premium" section

**Premium Mode:**
- [ ] Premium badge (⭐ gold accent)
- [ ] Coin balance with 2x multiplier indicator
- [ ] Enhanced stats display
- [ ] Premium benefits list
- [ ] Exclusive achievements visible

**Components Needed:**
- UserBadge (free vs premium variants)
- CoinDisplay
- StatsCard
- AchievementsList (with locked/unlocked states)
- EarningHistory

---

#### **3. Game View (`/game/[id]`)**

**Purpose:** Individual game page with play area

**Free Mode:**
- [ ] Game iframe/mockup
- [ ] Pre-roll ad before game starts
- [ ] In-game banner ads
- [ ] Standard coin rewards after playing
- [ ] Ad countdown timer

**Premium Mode:**
- [ ] Same game, no pre-roll ad
- [ ] No in-game banner ads
- [ ] 2x coin rewards
- [ ] "Premium: Ad-Free Experience" badge
- [ ] Instant game start

**Components Needed:**
- GameFrame (mockup)
- PreRollAd (conditional)
- InGameAd (conditional)
- CoinRewardDisplay (with multiplier)
- PlayButton

**Interactions:**
- [ ] "Play" button triggers ad or game based on mode
- [ ] Coin rewards calculated and added on game completion
- [ ] Visual feedback for premium benefits

---

#### **4. Shop Page (`/shop`)**

**Purpose:** Items marketplace with premium exclusives

**Free Mode:**
- [ ] 4-5 regular items available
- [ ] 2-3 premium items locked
- [ ] Lock icons on premium items
- [ ] "Get Premium to Unlock" tooltips
- [ ] Basic item cards

**Premium Mode:**
- [ ] All items unlocked
- [ ] Premium badge on exclusive items
- [ ] Enhanced item previews
- [ ] "Premium Exclusive" tags
- [ ] All items purchasable

**Components Needed:**
- ShopItemCard (with locked/unlocked states)
- LockIcon overlay
- PurchaseButton (conditional)
- CoinPriceDisplay
- PremiumTag

**Data Structure:**
```typescript
interface ShopItem {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  isPremiumExclusive: boolean;
  category: string;
}
```

**Interactions:**
- [ ] Click item to view details
- [ ] Purchase button (mockup - just deducts coins)
- [ ] "Unlock with Premium" button on locked items
- [ ] Success animation on purchase

---

#### **5. Premium Page (`/premium`)**

**Purpose:** Pricing tiers and conversion flow

**Features:**
- [ ] Pricing tiers display (3 tiers)
- [ ] Feature comparison table
- [ ] Free vs Premium side-by-side comparison
- [ ] Benefits list with icons
- [ ] "Activate Premium" CTA button
- [ ] Visual previews of premium benefits

**Pricing Tiers:**
1. **Monthly:** $4.99/mo
2. **Annual:** $49.99/yr (save 17%)
3. **Lifetime:** $99.99 (one-time)

**Comparison Features:**
- [ ] Ad-free gaming
- [ ] 2x coin earnings
- [ ] Exclusive games
- [ ] Premium badge
- [ ] Early access
- [ ] Priority support

**Components Needed:**
- PricingCard (3 variants)
- FeatureComparisonTable
- BenefitsList
- ActivatePremiumButton (just toggles state in demo)

**Interactions:**
- [ ] "Activate Premium" button toggles premium mode
- [ ] Visual feedback showing activation
- [ ] Redirect to profile or homepage after activation

---

### Developer-Facing Pages (4 pages)

#### **6. Developer Dashboard (`/developer`)**

**Purpose:** Overview of developer's games and premium status

**Features:**
- [ ] List of developer's games (2-3 mock games)
- [ ] Quick stats for each game
- [ ] Premium enrollment status
- [ ] Revenue overview (total earnings)
- [ ] "Enable Premium" CTA if not enabled
- [ ] Analytics preview

**Components Needed:**
- DeveloperGameCard
- RevenueOverview
- EnrollmentStatus
- QuickStatsGrid

**Mock Data:**
```typescript
interface DeveloperGame {
  id: string;
  title: string;
  thumbnail: string;
  totalPlays: number;
  premiumEnabled: boolean;
  revenue: {
    total: number;
    premium: number;
    ads: number;
  };
}
```

---

#### **7. Enable Premium Flow (`/developer/enable`)**

**Purpose:** Opt-in flow for developers to enable premium on their games

**Features:**
- [ ] Explainer: "What is Premium for Developers?"
- [ ] Revenue estimate calculator
- [ ] Input: estimated monthly plays
- [ ] Output: projected revenue with premium
- [ ] Comparison: Ad revenue vs Premium revenue
- [ ] "Enable Premium" confirmation button

**Components Needed:**
- RevenueCalculator (input + projection)
- ComparisonChart (bar chart or similar)
- ExplainerSection
- EnableButton

**Interaction Flow:**
1. Enter estimated monthly plays
2. See projected revenue comparison
3. Click "Enable Premium"
4. Success message + redirect to configure page

---

#### **8. Configure Page (`/developer/configure`)**

**Purpose:** Set up premium benefits for a game

**Features:**
- [ ] Game selector (which game to configure)
- [ ] Premium benefits configurator:
  - [ ] Exclusive in-game items
  - [ ] Early access features
  - [ ] Ad-free experience (default)
  - [ ] Bonus coins multiplier
- [ ] Create exclusive shop items
- [ ] Preview of premium experience
- [ ] Save configuration button

**Components Needed:**
- GameSelector dropdown
- BenefitsConfigurator (checkboxes + inputs)
- ExclusiveItemCreator (form)
- PreviewPanel
- SaveButton

**Mock Configuration:**
```typescript
interface PremiumConfig {
  gameId: string;
  benefits: {
    adFree: boolean;
    coinMultiplier: number; // 1.5x, 2x, etc.
    exclusiveItems: string[]; // IDs of items
    earlyAccess: boolean;
  };
}
```

---

#### **9. Revenue Page (`/developer/revenue`)**

**Purpose:** Analytics and earnings breakdown

**Features:**
- [ ] Total revenue display (big number)
- [ ] Revenue breakdown chart:
  - Premium subscriptions
  - Ad revenue
  - In-game purchases
- [ ] Timeline (last 7 days, 30 days, all time)
- [ ] Premium vs Free player ratio
- [ ] Top-performing games
- [ ] Export data button (mockup)

**Components Needed:**
- RevenueChart (line or bar chart)
- RevenuePieChart (breakdown)
- TimelineSelector
- PlayerRatioDisplay
- TopGamesTable
- ExportButton

**Mock Data:**
```typescript
interface RevenueData {
  date: string;
  premium: number;
  ads: number;
  purchases: number;
}
```

**Charts:**
- [ ] Revenue over time (line chart)
- [ ] Revenue by source (pie chart)
- [ ] Premium vs Free players (donut chart)

---

## 🧩 Shared Components

### Essential Components Needed Across Pages

1. **Navigation/Header**
   - [ ] Logo
   - [ ] Main nav links
   - [ ] Premium toggle (always visible)
   - [ ] User coin balance display
   - [ ] Premium badge indicator

2. **Footer**
   - [ ] Links (About, Developer Portal, Support)
   - [ ] Social media icons
   - [ ] Copyright

3. **Premium Badge**
   - [ ] ⭐ icon or custom design
   - [ ] Shows on user profile, game cards, etc.
   - [ ] Conditional rendering

4. **Ad Banners (Mockups)**
   - [ ] Top banner (728x90)
   - [ ] Sidebar banner (300x250)
   - [ ] In-game banner
   - [ ] Only shows in free mode

5. **Coin Display**
   - [ ] Animated counter
   - [ ] Shows current balance
   - [ ] Updates on earn/spend
   - [ ] Premium multiplier indicator

6. **Game Card**
   - [ ] Thumbnail image
   - [ ] Game title
   - [ ] Premium exclusive badge (if applicable)
   - [ ] Lock icon (if premium required and user is free)
   - [ ] Play count/rating

7. **Modal/Dialogs**
   - [ ] Premium upgrade prompt
   - [ ] Purchase confirmation
   - [ ] Success messages

---

## 📊 Mock Data Requirements

### Games Data (10-12 games)
```typescript
interface Game {
  id: string;
  title: string;
  thumbnail: string;
  description: string;
  category: string;
  isPremiumExclusive: boolean;
  plays: number;
  rating: number;
}
```

**Examples:**
- Stickman Hook (Free)
- Subway Surfers (Free)
- Premium Racing (Premium Exclusive)
- etc.

### Shop Items Data (6-8 items)
```typescript
interface ShopItem {
  id: string;
  name: string;
  description: string;
  price: number; // in coins
  imageUrl: string;
  isPremiumExclusive: boolean;
  category: "avatar" | "badge" | "powerup" | "skin";
}
```

**Examples:**
- Basic Avatar Frame (100 coins, Free)
- Gold Crown Badge (500 coins, Premium)
- 2x Coin Booster (200 coins, Free)
- Exclusive Skin Pack (1000 coins, Premium)

### Developer Games Data (2-3 games)
```typescript
interface DeveloperGame {
  id: string;
  title: string;
  thumbnail: string;
  totalPlays: number;
  premiumPlays: number;
  freePlays: number;
  premiumEnabled: boolean;
  revenue: {
    total: number;
    premium: number;
    ads: number;
    purchases: number;
  };
  revenueHistory: RevenueData[]; // for charts
}
```

---

## 🎨 Key Interactions & Animations

### Premium Toggle Animation
- [ ] Smooth state transition (300ms)
- [ ] Color change (gray → gold)
- [ ] Page-wide fade/slide effects
- [ ] Ads fade out, content reflows
- [ ] Badge appears/disappears

### Coin Earning Animation
- [ ] Counter increments with animation
- [ ] "+X coins" popup
- [ ] Celebration effect for large amounts
- [ ] Premium multiplier visual ("+100 coins ✕2")

### Lock/Unlock States
- [ ] Locked content: grayscale + lock icon
- [ ] Unlock animation: color reveal + lock opens
- [ ] Shake animation on click when locked

### Ad Placeholders
- [ ] Mockup ad banners (use placeholder images)
- [ ] "Ad will play here" text in free mode
- [ ] Smooth removal in premium mode

---

## 🔀 User Flows

### Flow 1: Free User Exploring Premium
1. Lands on homepage (free mode)
2. Sees ads between game rows
3. Clicks on premium-exclusive game → locked
4. Clicks "Unlock with Premium" → goes to `/premium`
5. Sees pricing tiers
6. Clicks "Try Premium Mode" → toggles premium
7. Returns to homepage → all games unlocked, no ads

### Flow 2: Developer Enabling Premium
1. Goes to `/developer` dashboard
2. Sees "Enable Premium on Your Games" CTA
3. Clicks → goes to `/developer/enable`
4. Enters estimated plays: 10,000/month
5. Sees revenue projection: $500 (premium) vs $200 (ads only)
6. Clicks "Enable Premium"
7. Goes to `/developer/configure`
8. Sets benefits: ad-free, 2x coins, 1 exclusive item
9. Saves configuration
10. Returns to dashboard → premium enabled

### Flow 3: Premium User Shopping
1. Goes to `/shop` (premium mode)
2. Sees all items unlocked
3. Clicks on exclusive item (1000 coins)
4. Clicks "Purchase"
5. Coin balance updates (deducts 1000)
6. Success message + item added to inventory (mock)

---

## 📈 Success Metrics (Visual Demonstration)

The demo should clearly show:

1. **Ad Removal:** Visible difference in page layout without ads
2. **Earning Boost:** Side-by-side comparison of coin earnings (1x vs 2x)
3. **Content Unlock:** Locked games become available
4. **Developer Value:** Clear revenue increase with premium model
5. **User Value:** Better experience = worth the price

---

## 🚀 Implementation Priority

### Phase 1: Foundation (Week 1)
- [ ] Global state (Zustand)
- [ ] Premium toggle component
- [ ] Mock data files
- [ ] Basic routing structure

### Phase 2: User Pages (Week 2)
- [ ] Homepage with game grid
- [ ] Profile page
- [ ] Game view page
- [ ] Shop page
- [ ] Premium page

### Phase 3: Developer Pages (Week 3)
- [ ] Developer dashboard
- [ ] Enable flow
- [ ] Configure page
- [ ] Revenue analytics page

### Phase 4: Polish (Week 4)
- [ ] Animations and transitions
- [ ] Design tokens applied
- [ ] Responsive design
- [ ] Testing and bug fixes
- [ ] Deployment

---

## ✅ Feature Checklist Summary

**Core Features:** 0/3
- [ ] Premium toggle
- [ ] Global state management
- [ ] Conditional content system

**User Pages:** 0/5
- [ ] Homepage
- [ ] Profile
- [ ] Game View
- [ ] Shop
- [ ] Premium

**Developer Pages:** 0/4
- [ ] Dashboard
- [ ] Enable Flow
- [ ] Configure
- [ ] Revenue

**Shared Components:** 0/7
- [ ] Navigation
- [ ] Footer
- [ ] Premium Badge
- [ ] Ad Banners
- [ ] Coin Display
- [ ] Game Card
- [ ] Modals

**Data:** 0/3
- [ ] Games mock data
- [ ] Shop items mock data
- [ ] Developer games mock data

---

**Total Features:** 22 major features across 3 categories
**Current Status:** 0/22 complete

This document will be updated as features are implemented.
