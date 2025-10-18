import * as stylex from "@stylexjs/stylex";

import { breakpoints } from "./breakpoints.stylex";
import { spacing } from "./spacing.stylex";

export const fontFamily = stylex.defineVars({
  sans: "Inter, sans-serif",
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
  xs: "1",
  sm: "1.25",
  base: "calc(1.5 / 1)",
  lg: "calc(1.75 / 1.125)",
  xl: "calc(1.75 / 1.25)",
  "2xl": "calc(2 / 1.5)",
  "3xl": "calc(2.25 / 1.875)",
  "4xl": "calc(2.5 / 2.25)",
  "5xl": "1",
  "6xl": "1",
  "7xl": "1",
  "8xl": "1",
  "9xl": "1",
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
    lineHeight: {
      default: lineHeight["4xl"],
      [breakpoints["md"]]: lineHeight["5xl"],
    },
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
    lineHeight: {
      default: lineHeight["3xl"],
      [breakpoints["md"]]: lineHeight["4xl"],
    },
    margin: 0,
    paddingBottom: spacing["2"],
    scrollMarginBlockStart: spacing["20"],
  },
  heading3: {
    // eslint-disable-next-line @stylexjs/valid-styles
    fontFamily: fontFamily["sans"],
    fontSize: { default: fontSize["2xl"] },
    // eslint-disable-next-line @stylexjs/valid-styles
    fontWeight: fontWeight["semibold"],
    letterSpacing: tracking["tight"],
    lineHeight: { default: lineHeight["2xl"] },
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
    lineHeight: { default: lineHeight["xl"] },
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
    lineHeight: { default: lineHeight["lg"] },
  },
  body: {
    // eslint-disable-next-line @stylexjs/valid-styles
    fontFamily: fontFamily["sans"],
    fontSize: { default: fontSize["base"] },
    lineHeight: spacing["7"],
    margin: 0,
  },
  smallBody: {
    // eslint-disable-next-line @stylexjs/valid-styles
    fontFamily: fontFamily["sans"],
    fontSize: { default: fontSize["sm"] },
    lineHeight: { default: lineHeight["sm"] },
    margin: 0,
  },
  label: {
    // eslint-disable-next-line @stylexjs/valid-styles
    fontFamily: fontFamily["sans"],
    fontSize: { default: fontSize["sm"] },
    // eslint-disable-next-line @stylexjs/valid-styles
    fontWeight: fontWeight["semibold"],
    letterSpacing: tracking["tight"],
    lineHeight: { default: lineHeight["sm"] },
  },
  sublabel: {
    // eslint-disable-next-line @stylexjs/valid-styles
    fontFamily: fontFamily["sans"],
    fontSize: { default: fontSize["xs"] },
    // eslint-disable-next-line @stylexjs/valid-styles
    fontWeight: fontWeight["medium"],
    lineHeight: { default: lineHeight["xs"] },
    margin: 0,
  },
});
