---
name: motion-animations
description: >-
  Rules, patterns, and best practices for UI animations using Tailwind CSS and Motion (motion/react).
  Use this skill whenever designing or implementing animations, transitions, scroll reveals, gestures,
  or layout state changes.
---

# Motion & Animation Skill Guide

This skill governs how animations and interactions are implemented across Next.js, Tailwind CSS v4, and Motion (`motion/react`).

---

## 1. Decision Matrix: CSS vs. Motion

| Use **Tailwind / CSS** | Use **Motion (`motion/react`)** |
| :--- | :--- |
| Element remains mounted; only style/state changes | Element mounts, unmounts, or swaps (`AnimatePresence`) |
| Hover, focus, active, disabled states (`hover:`, `transition`) | Layout animations, expanding cards, shared elements (`layoutId`) |
| Continuous ambient effects (spinners, pulse, skeleton loaders) | Drag, swipe, pan, interactive physics gestures |
| One-time page load CSS keyframe transitions | Staggered sequence reveals (`variants`) |
| Simple opacity / color transitions | Scroll-triggered reveals (`whileInView`, `useScroll`) |
| Tooltip styling / simple popovers | Height auto-animating accordions / dropdowns |

> **Note**: Avoid heavy animation libraries like GSAP unless explicitly requested.

---

## 2. Core Implementation Rules

1. **Lazy Loading & Optimization**:
   * Use `LazyMotion` + `m` + `domAnimation` from `motion/react` to minimize bundle size.
   * Avoid importing the entire heavy `motion` package at root level.
2. **Client Boundary Isolation**:
   * Motion components require `"use client"`.
   * Keep animated components as small **leaf nodes**; parent sections should stay Server Components.
3. **Hardware Acceleration**:
   * Animate only **`transform`** (`scale`, `x`, `y`, `rotate`) and **`opacity`**.
   * Avoid animating layout-triggering properties (`width`, `height`, `top`, `left`, `margin`) directly unless utilizing `layout`.
4. **Layout Shift Prevention**:
   * Inspect container anchoring before animating.
   * Use `AnimatePresence mode="wait"` with distinct `key` attributes on swap transitions.
   * Allocate fixed dimensions or unified wrappers to prevent parent jumping.
5. **No Rule Mixing**:
   * Never combine CSS `transition-*` classes and Motion animate props on the identical DOM element.
6. **Accessibility**:
   * Honor `prefers-reduced-motion` using `MotionConfig reducedMotion="user"` or Tailwind `motion-reduce:`.

---

## 3. Centralized Presets (`lib/motions.ts`)

All reusable animation variants, easings, and transitions must reside in `lib/motions.ts`. Never inline arbitrary transition objects across components.

```ts
/**
 * lib/motions.ts
 * Centralized Motion Presets & Transitions
 */

export const transitions = {
  default: { duration: 0.25, ease: [0.16, 1, 0.3, 1] }, // easeOutExpo
  fast: { duration: 0.15, ease: "easeOut" },
  exit: { duration: 0.15, ease: "easeIn" },
  spring: { type: "spring", stiffness: 300, damping: 30 },
} as const;

export const fadeUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: transitions.default,
} as const;

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: transitions.default,
} as const;

export const staggerContainer = (staggerChildren = 0.08, delayChildren = 0) => ({
  initial: {},
  animate: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});
```

---

## 4. Common Patterns & Code Examples

### A. LazyMotion Wrapper Setup (`components/layout/MotionProvider.tsx`)
```tsx
"use client";

import { LazyMotion, domAnimation, MotionConfig } from "motion/react";
import type { ReactNode } from "react";

export default function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig reducedMotion="user">
        {children}
      </MotionConfig>
    </LazyMotion>
  );
}
```

### B. Scroll Reveal Section (`components/sections/HeroSection.tsx`)
```tsx
"use client";

import { m } from "motion/react";
import { fadeUp, staggerContainer } from "@/lib/motions";

interface HeroSectionProps {
  title: string;
  subtitle: string;
}

export default function HeroSection({ title, subtitle }: HeroSectionProps) {
  return (
    <m.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
      variants={staggerContainer(0.1)}
      className="py-24 text-center"
    >
      <m.h1 variants={fadeUp} className="text-5xl font-bold tracking-tight">
        {title}
      </m.h1>
      <m.p variants={fadeUp} className="mt-4 text-lg text-neutral-600">
        {subtitle}
      </m.p>
    </m.section>
  );
}
```

### C. Coordinated Tab Swap (`components/ui/TabPanel.tsx`)
```tsx
"use client";

import { AnimatePresence, m } from "motion/react";
import { fadeIn } from "@/lib/motions";

interface TabPanelProps {
  activeTab: string;
  content: string;
}

export default function TabPanel({ activeTab, content }: TabPanelProps) {
  return (
    <div className="relative min-h-[160px] overflow-hidden">
      <AnimatePresence mode="wait">
        <m.div
          key={activeTab}
          variants={fadeIn}
          initial="initial"
          animate="animate"
          exit="exit"
          className="w-full"
        >
          <p>{content}</p>
        </m.div>
      </AnimatePresence>
    </div>
  );
}
```

---

## 5. Verification Checklist

- [ ] Has `"use client"` been applied to the leaf component only?
- [ ] Are presets imported from `lib/motions.ts`?
- [ ] Is layout jumping prevented via fixed wrappers or `AnimatePresence mode="wait"`?
- [ ] Are transformations limited to `opacity` and `transform`?
- [ ] Is reduced-motion respected?
