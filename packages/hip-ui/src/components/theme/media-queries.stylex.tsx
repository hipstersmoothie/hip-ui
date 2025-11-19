import * as stylex from "@stylexjs/stylex";

// eslint-disable-next-line @stylexjs/enforce-extension
export const breakpoints = stylex.defineConsts({
  sm: "@media (min-width: 40rem)",
  md: "@media (min-width: 48rem)",
  lg: "@media (min-width: 64rem)",
  xl: "@media (min-width: 80rem)",
  "2xl": "@media (min-width: 96rem)",
});

// eslint-disable-next-line @stylexjs/enforce-extension
export const mediaQueries = stylex.defineConsts({
  reducedMotion: "@media (prefers-reduced-motion: reduce)",
  supportsSquircle: "@supports (corner-shape: squircle)",
});
