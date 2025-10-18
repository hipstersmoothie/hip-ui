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
