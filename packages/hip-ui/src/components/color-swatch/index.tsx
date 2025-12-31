import type { ColorSwatchProps as AriaColorSwatchProps } from "react-aria-components";

import * as stylex from "@stylexjs/stylex";
import { use } from "react";
import { ColorSwatch as AriaColorSwatch } from "react-aria-components";

import { SizeContext } from "../context";
import { uiColor } from "../theme/color.stylex";
import { mediaQueries } from "../theme/media-queries.stylex";
import { radius } from "../theme/radius.stylex";
import { spacing } from "../theme/spacing.stylex";
import { Size, StyleXComponentProps } from "../theme/types";

const styles = stylex.create({
  swatch: {
    borderColor: uiColor.border2,
    borderStyle: "solid",
    borderWidth: 1,
    boxSizing: "border-box",

    // eslint-disable-next-line @stylexjs/valid-styles
    cornerShape: "squircle",
  },
  swatchSm: {
    borderRadius: {
      default: radius["sm"],
      [mediaQueries.supportsSquircle]: radius["3xl"],
    },
    height: spacing["4"],
    width: spacing["4"],
  },
  swatchMd: {
    borderRadius: {
      default: radius["md"],
      [mediaQueries.supportsSquircle]: radius["3xl"],
    },
    height: spacing["6"],
    width: spacing["6"],
  },
  swatchLg: {
    borderRadius: {
      default: radius["lg"],
      [mediaQueries.supportsSquircle]: radius["3xl"],
    },
    height: spacing["8"],
    width: spacing["8"],
  },
  circle: {
    // eslint-disable-next-line @stylexjs/valid-styles
    cornerShape: "unset",
    borderRadius: {
      default: "50%",
      [mediaQueries.supportsSquircle]: "50%",
    },
  },
});

export interface ColorSwatchProps extends StyleXComponentProps<
  Omit<AriaColorSwatchProps, "children">
> {
  children?: React.ReactNode;
  size?: Size;
  variant?: "default" | "circle";
}

export function ColorSwatch({
  style,
  size: sizeProp,
  variant = "default",
  ...props
}: ColorSwatchProps) {
  const size = sizeProp || use(SizeContext);

  return (
    <AriaColorSwatch
      {...props}
      {...stylex.props(
        styles.swatch,
        size === "sm" && styles.swatchSm,
        size === "md" && styles.swatchMd,
        size === "lg" && styles.swatchLg,
        variant === "circle" && styles.circle,
        style,
      )}
      style={({ color }) => ({
        background: `linear-gradient(${color.toString()}, ${color.toString()}),
          repeating-conic-gradient(#CCC 0% 25%, white 0% 50%) 50% / 16px 16px`,
      })}
    />
  );
}
