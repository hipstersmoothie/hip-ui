import * as stylex from "@stylexjs/stylex";

const fadeIn = stylex.keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
});

const fadeOut = stylex.keyframes({
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0,
  },
});

const zoomIn = stylex.keyframes({
  from: {
    transform: "scale(0.8)",
  },
  to: {
    transform: "scale(1)",
  },
});

const slideInRight = stylex.keyframes({
  from: {
    transform: "translateX(100%)",
  },
  to: {
    transform: "translateX(0)",
  },
});

const slideOutRight = stylex.keyframes({
  from: {
    transform: "translateX(0)",
  },
  to: {
    transform: "translateX(100%)",
  },
});

const slideInLeft = stylex.keyframes({
  from: {
    transform: "translateX(-100%)",
  },
  to: {
    transform: "translateX(0)",
  },
});

const slideOutLeft = stylex.keyframes({
  from: {
    transform: "translateX(0)",
  },
  to: {
    transform: "translateX(-100%)",
  },
});

const slideInTop = stylex.keyframes({
  from: {
    transform: "translateY(-100%)",
  },
  to: {
    transform: "translateY(0)",
  },
});

const slideOutTop = stylex.keyframes({
  from: {
    transform: "translateY(0)",
  },
  to: {
    transform: "translateY(-100%)",
  },
});

const slideInBottom = stylex.keyframes({
  from: {
    transform: "translateY(100%)",
  },
  to: {
    transform: "translateY(0)",
  },
});

const slideOutBottom = stylex.keyframes({
  from: {
    transform: "translateY(0)",
  },
  to: {
    transform: "translateY(100%)",
  },
});

export const animations = stylex.defineVars({
  fadeIn,
  fadeOut,
  zoomIn,
  slideInRight,
  slideOutRight,
  slideInLeft,
  slideOutLeft,
  slideInTop,
  slideOutTop,
  slideInBottom,
  slideOutBottom,
});

export const animationDuration = stylex.defineVars({
  fast: "100ms",
  default: "150ms",
  slow: "200ms",
  verySlow: "300ms",
});
