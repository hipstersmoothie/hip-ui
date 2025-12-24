import * as stylex from "@stylexjs/stylex";

import type { TextVariant, ThemeKeys } from "../theme/types";

import { criticalColor, uiColor } from "../theme/color.stylex";
import {
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  tracking,
} from "../theme/typography.stylex";

const styles = stylex.create({
  sans: { fontFamily: fontFamily["sans"] },
  serif: { fontFamily: fontFamily["serif"] },
  mono: { fontFamily: fontFamily["mono"] },

  thin: { fontWeight: fontWeight["thin"] },
  extralight: { fontWeight: fontWeight["extralight"] },
  light: { fontWeight: fontWeight["light"] },
  normal: { fontWeight: fontWeight["normal"] },
  medium: { fontWeight: fontWeight["medium"] },
  semibold: { fontWeight: fontWeight["semibold"] },
  bold: { fontWeight: fontWeight["bold"] },
  extrabold: { fontWeight: fontWeight["extrabold"] },
  black: { fontWeight: fontWeight["black"] },

  "font-xs": { fontSize: fontSize["xs"] },
  "font-sm": { fontSize: fontSize["sm"] },
  "font-base": { fontSize: fontSize["base"] },
  "font-lg": { fontSize: fontSize["lg"] },
  "font-xl": { fontSize: fontSize["xl"] },
  "font-2xl": { fontSize: fontSize["2xl"] },
  "font-3xl": { fontSize: fontSize["3xl"] },
  "font-4xl": { fontSize: fontSize["4xl"] },
  "font-5xl": { fontSize: fontSize["5xl"] },
  "font-6xl": { fontSize: fontSize["6xl"] },
  "font-7xl": { fontSize: fontSize["7xl"] },
  "font-8xl": { fontSize: fontSize["8xl"] },
  "font-9xl": { fontSize: fontSize["9xl"] },

  "leading-none": { lineHeight: lineHeight["none"] },
  "leading-xs": { lineHeight: lineHeight["xs"] },
  "leading-sm": { lineHeight: lineHeight["sm"] },
  "leading-base": { lineHeight: lineHeight["base"] },
  "leading-lg": { lineHeight: lineHeight["lg"] },
  "leading-xl": { lineHeight: lineHeight["xl"] },
  "leading-2xl": { lineHeight: lineHeight["2xl"] },
  "leading-3xl": { lineHeight: lineHeight["3xl"] },

  "tracking-tighter": { letterSpacing: tracking["tighter"] },
  "tracking-tight": { letterSpacing: tracking["tight"] },
  "tracking-normal": { letterSpacing: tracking["normal"] },
  "tracking-wide": { letterSpacing: tracking["wide"] },
  "tracking-wider": { letterSpacing: tracking["wider"] },
  "tracking-widest": { letterSpacing: tracking["widest"] },

  "variant-primary": { color: uiColor.text2 },
  "variant-secondary": { color: uiColor.text1 },
  "variant-critical": { color: criticalColor.text1 },

  strikethrough: { textDecoration: "line-through" },

  left: { textAlign: "left" },
  center: { textAlign: "center" },
  right: { textAlign: "right" },

  textEllipsis: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
});

interface TextProps extends Omit<
  React.ComponentProps<"span">,
  "style" | "className"
> {
  style?: stylex.StyleXStyles | Array<stylex.StyleXStyles>;
  font?: ThemeKeys<typeof fontFamily>;
  weight?: ThemeKeys<typeof fontWeight>;
  size?: ThemeKeys<typeof fontSize>;
  leading?: ThemeKeys<typeof lineHeight>;
  tracking?: ThemeKeys<typeof tracking>;
  variant?: TextVariant;
  strikethrough?: boolean;
  align?: "left" | "center" | "right";
  hasEllipsis?: boolean;
}

export const Text = ({
  style,
  font = "sans",
  weight,
  size,
  leading,
  tracking: trackingProp,
  variant,
  strikethrough = false,
  align,
  hasEllipsis = false,
  ...props
}: TextProps) => {
  return (
    <span
      {...props}
      {...stylex.props(
        styles[font],
        weight && styles[weight],
        size && styles[`font-${size}`],
        leading && styles[`leading-${leading}`],
        trackingProp && styles[`tracking-${trackingProp}`],
        variant && styles[`variant-${variant}`],
        strikethrough && styles.strikethrough,
        align && styles[align],
        hasEllipsis && styles.textEllipsis,
        style,
      )}
    />
  );
};
