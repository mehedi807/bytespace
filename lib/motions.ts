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
