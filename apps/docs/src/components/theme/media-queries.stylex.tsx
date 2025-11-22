import * as stylex from "@stylexjs/stylex";

export const mediaQueries = stylex.defineConsts({
  reducedMotion: "@media (prefers-reduced-motion: reduce)",
  supportsSquircle: "@supports (corner-shape: squircle)",
});
