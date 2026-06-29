// ─── Shared Framer Motion Variants ────────────────────────────────
// All animation variants are defined here for reuse across components.
// Each variant respects the `custom` prop for stagger indexing.

import type { Variants } from "framer-motion";

export const EASING = {
  outExpo: [0.19, 1, 0.22, 1] as [number, number, number, number],
  inOutQuart: [0.76, 0, 0.24, 1] as [number, number, number, number],
  spring: { type: "spring", stiffness: 260, damping: 20 },
};

// Fade up — primary reveal animation
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(4px)" },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      delay: i * 0.1,
      ease: EASING.outExpo,
    },
  }),
};

// Fade in — subtle opacity only
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (i: number = 0) => ({
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: i * 0.08,
      ease: EASING.outExpo,
    },
  }),
};

// Slide in from left
export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.08,
      ease: EASING.outExpo,
    },
  }),
};

// Scale reveal — for chips and small elements
export const scaleReveal: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (i: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: i * 0.04,
      ease: EASING.outExpo,
    },
  }),
};

// Container for stagger children
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

// Line reveal — for horizontal dividers
export const lineReveal: Variants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: 1,
      ease: EASING.outExpo,
    },
  },
};

// Character split animation
export const charReveal: Variants = {
  hidden: { opacity: 0, y: "110%" },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: "0%",
    transition: {
      duration: 0.7,
      delay: i * 0.03,
      ease: EASING.outExpo,
    },
  }),
};

// Section heading reveal
export const headingReveal: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: EASING.outExpo,
    },
  },
};

// Number counter reveal
export const countUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.12,
      ease: EASING.outExpo,
    },
  }),
};
