import type { ColorSwatchProps as AriaColorSwatchProps } from "react-aria-components";

import * as stylex from "@stylexjs/stylex";
import { use } from "react";
import { ColorSwatch as AriaColorSwatch } from "react-aria-components";

import { SizeContext } from "../context";
import { slate } from "../theme/colors.stylex";
import { radius } from "../theme/radius.stylex";
import { spacing } from "../theme/spacing.stylex";
import { Size } from "../theme/types";

const styles = stylex.create({
  swatch: {
    borderColor: slate.border2,
    borderStyle: "solid",
    borderWidth: 1,
    boxSizing: "border-box",
  },
  sm: {
    borderRadius: radius.sm,
    height: spacing["4"],
    width: spacing["4"],
  },
  md: {
    borderRadius: radius.md,
    height: spacing["6"],
    width: spacing["6"],
  },
  lg: {
    borderRadius: radius.lg,
    height: spacing["8"],
    width: spacing["8"],
  },
});

export interface ColorSwatchProps
  extends Omit<AriaColorSwatchProps, "children" | "style" | "className"> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
  children?: React.ReactNode;
  size?: Size;
}

export function ColorSwatch({
  style,
  size: sizeProp,
  ...props
}: ColorSwatchProps) {
  const size = sizeProp || use(SizeContext);

  return (
    <AriaColorSwatch
      {...props}
      {...stylex.props(styles.swatch, styles[size], style)}
      style={({ color }) => ({
        background: `linear-gradient(${color.toString()}, ${color.toString()}),
          repeating-conic-gradient(#CCC 0% 25%, white 0% 50%) 50% / 16px 16px`,
      })}
    />
  );
}
