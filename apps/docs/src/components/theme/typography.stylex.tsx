import * as stylex from "@stylexjs/stylex";

import { breakpoints } from "./breakpoints.stylex";
import { spacing } from "./spacing.stylex";

export const fontFamily = stylex.defineVars({
  sans: "'Inter', sans-serif",
  serif: "Georgia, serif",
  mono: "Monaco, monospace",
});

export const fontWeight = stylex.defineVars({
  thin: "100",
  extralight: "200",
  light: "300",
  normal: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
  extrabold: "800",
  black: "900",
});

export const fontSize = stylex.defineVars({
  xs: "0.75rem",
  sm: "0.85rem",
  base: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "3xl": "1.875rem",
  "4xl": "2.25rem",
  "5xl": "3rem",
  "6xl": "3.75rem",
  "7xl": "4.5rem",
  "8xl": "6rem",
  "9xl": "8rem",
});

export const lineHeight = stylex.defineVars({
  none: "1",
  xs: "0.8",
  sm: "1.25",
  base: "1.75",
  lg: "2",
  xl: "2.5",
  "2xl": "3",
  "3xl": "3.5",
});

export const tracking = stylex.defineVars({
  tighter: "-0.05em",
  tight: "-0.025em",
  normal: "0em",
  wide: "0.025em",
  wider: "0.05em",
  widest: "0.1em",
});

// eslint-disable-next-line @stylexjs/enforce-extension
export const typeramp = stylex.create({
  heading1: {
    // eslint-disable-next-line @stylexjs/valid-styles
    fontFamily: fontFamily["sans"],
    fontSize: {
      default: fontSize["4xl"],
      [breakpoints["md"]]: fontSize["5xl"],
    },
    // eslint-disable-next-line @stylexjs/valid-styles
    fontWeight: fontWeight["extrabold"],
    letterSpacing: tracking["tight"],
    lineHeight: lineHeight.base,
    margin: 0,
    scrollMarginBlockStart: spacing["20"],
  },
  heading2: {
    borderBottomWidth: 1,
    // eslint-disable-next-line @stylexjs/valid-styles
    fontFamily: fontFamily["sans"],
    fontSize: {
      default: fontSize["3xl"],
      [breakpoints["md"]]: fontSize["4xl"],
    },
    // eslint-disable-next-line @stylexjs/valid-styles
    fontWeight: fontWeight["semibold"],
    letterSpacing: tracking["tight"],
    lineHeight: lineHeight.sm,
    margin: 0,
    scrollMarginBlockStart: spacing["20"],
  },
  heading3: {
    // eslint-disable-next-line @stylexjs/valid-styles
    fontFamily: fontFamily["sans"],
    fontSize: { default: fontSize["2xl"] },
    // eslint-disable-next-line @stylexjs/valid-styles
    fontWeight: fontWeight["semibold"],
    letterSpacing: tracking["tight"],
    lineHeight: lineHeight.sm,
    margin: 0,
    scrollMarginBlockStart: spacing["20"],
  },
  heading4: {
    // eslint-disable-next-line @stylexjs/valid-styles
    fontFamily: fontFamily["sans"],
    fontSize: { default: fontSize["xl"] },
    // eslint-disable-next-line @stylexjs/valid-styles
    fontWeight: fontWeight["semibold"],
    letterSpacing: tracking["tight"],
    lineHeight: lineHeight.sm,
    margin: 0,
    scrollMarginBlockStart: spacing["20"],
  },
  heading5: {
    // eslint-disable-next-line @stylexjs/valid-styles
    fontFamily: fontFamily["sans"],
    fontSize: { default: fontSize["lg"] },
    // eslint-disable-next-line @stylexjs/valid-styles
    fontWeight: fontWeight["semibold"],
    letterSpacing: tracking["tight"],
    lineHeight: lineHeight.sm,
    margin: 0,
    scrollMarginBlockStart: spacing["20"],
  },
  body: {
    // eslint-disable-next-line @stylexjs/valid-styles
    fontFamily: fontFamily["sans"],
    fontSize: { default: fontSize["base"] },
    lineHeight: lineHeight.base,
    margin: 0,
  },
  smallBody: {
    // eslint-disable-next-line @stylexjs/valid-styles
    fontFamily: fontFamily["sans"],
    fontSize: { default: fontSize["sm"] },
    lineHeight: lineHeight.base,
    margin: 0,
  },
  label: {
    // eslint-disable-next-line @stylexjs/valid-styles
    fontFamily: fontFamily["sans"],
    fontSize: { default: fontSize["sm"] },
    // eslint-disable-next-line @stylexjs/valid-styles
    fontWeight: fontWeight["semibold"],
    letterSpacing: tracking["tight"],
    lineHeight: lineHeight.sm,
    margin: 0,
  },
  sublabel: {
    // eslint-disable-next-line @stylexjs/valid-styles
    fontFamily: fontFamily["sans"],
    fontSize: { default: fontSize["xs"] },
    // eslint-disable-next-line @stylexjs/valid-styles
    fontWeight: fontWeight["medium"],
    lineHeight: lineHeight.sm,
    margin: 0,
  },
});
