import * as stylex from "@stylexjs/stylex";

export const breakpoints = stylex.defineConsts({
  sm: "@media (min-width: 40rem)",
  md: "@media (min-width: 48rem)",
  lg: "@media (min-width: 64rem)",
  xl: "@media (min-width: 80rem)",
  "2xl": "@media (min-width: 96rem)",
});

export const containerBreakpoints = stylex.defineConsts({
  sm: "@container (min-width: 40rem)",
  md: "@container (min-width: 48rem)",
  lg: "@container (min-width: 64rem)",
  xl: "@container (min-width: 80rem)",
  "2xl": "@container (min-width: 96rem)",
});

/**
 * Named container breakpoints that query parent containers only.
 * Use these when you want to query a parent container by name,
 * preventing elements with containerType from querying themselves.
 * 
 * Usage:
 * 1. Set container-name on the parent: containerName: "parent"
 * 2. Use parentContainerBreakpoints in child styles
 */
export const parentContainerBreakpoints = stylex.defineConsts({
  sm: "@container parent (min-width: 40rem)",
  md: "@container parent (min-width: 48rem)",
  lg: "@container parent (min-width: 64rem)",
  xl: "@container parent (min-width: 80rem)",
  "2xl": "@container parent (min-width: 96rem)",
});

export const maxBreakpoints = stylex.defineConsts({
  sm: "@media (max-width: 40rem)",
});

export const mediaQueries = stylex.defineConsts({
  reducedMotion: "@media (prefers-reduced-motion: reduce)",
  supportsSquircle: "@supports (corner-shape: squircle)",
});
