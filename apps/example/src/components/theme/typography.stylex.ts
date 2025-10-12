import * as stylex from "@stylexjs/stylex";
import { spacing } from "./spacing.stylex";
import { breakpoints } from "./breakpoints.stylex";

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
  xs: "0.65rem",
  sm: "0.75rem",
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
  xs: "calc(1 / 0.65)",
  sm: "calc(1.25 / 0.75)",
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

export const typeramp = stylex.create({
  heading1: {
    margin: 0,
    fontFamily: fontFamily["sans"],
    scrollMarginBlockStart: spacing["20"],
    fontWeight: fontWeight["extrabold"],
    letterSpacing: tracking["tight"],
    textBalance: "balance",
    fontSize: {
      default: fontSize["4xl"],
      [breakpoints["md"]]: fontSize["5xl"],
    },
    lineHeight: {
      default: lineHeight["4xl"],
      [breakpoints["md"]]: lineHeight["5xl"],
    },
  },
  heading2: {
    fontFamily: fontFamily["sans"],
    scrollMarginBlockStart: spacing["20"],
    borderBottomWidth: 1,
    paddingBottom: spacing["2"],
    fontWeight: fontWeight["semibold"],
    letterSpacing: tracking["tight"],
    fontSize: {
      default: fontSize["3xl"],
      [breakpoints["md"]]: fontSize["4xl"],
    },
    lineHeight: {
      default: lineHeight["3xl"],
      [breakpoints["md"]]: lineHeight["4xl"],
    },
    margin: 0,
  },
  heading3: {
    fontFamily: fontFamily["sans"],
    scrollMarginBlockStart: spacing["20"],
    fontWeight: fontWeight["semibold"],
    letterSpacing: tracking["tight"],
    fontSize: { default: fontSize["2xl"] },
    lineHeight: { default: lineHeight["2xl"] },
    margin: 0,
  },
  heading4: {
    fontFamily: fontFamily["sans"],
    scrollMarginBlockStart: spacing["20"],
    fontWeight: fontWeight["semibold"],
    letterSpacing: tracking["tight"],
    fontSize: { default: fontSize["xl"] },
    lineHeight: { default: lineHeight["xl"] },
    margin: 0,
  },
  body: {
    fontFamily: fontFamily["sans"],
    lineHeight: spacing["7"],
    fontSize: { default: fontSize["base"] },
    margin: 0,
  },
  label: {
    fontFamily: fontFamily["sans"],
    fontWeight: fontWeight["medium"],
    letterSpacing: tracking["tight"],
    fontSize: { default: fontSize["sm"] },
    lineHeight: { default: lineHeight["sm"] },
  },
  sublabel: {
    fontFamily: fontFamily["sans"],
    fontWeight: fontWeight["medium"],
    fontSize: { default: fontSize["xs"] },
    lineHeight: { default: lineHeight["xs"] },
  },
});
