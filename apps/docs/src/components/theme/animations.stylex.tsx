import * as stylex from "@stylexjs/stylex";

const fadeIn = stylex.keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
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

export const animations = stylex.defineVars({
  fadeIn,
  zoomIn,
});

export const animationDuration = stylex.defineVars({
  fast: "100ms",
  default: "150ms",
  slow: "200ms",
  verySlow: "300ms",
});
