import type { ColorSwatchProps as AriaColorSwatchProps } from "react-aria-components";

import * as stylex from "@stylexjs/stylex";
import { use } from "react";
import { ColorSwatch as AriaColorSwatch } from "react-aria-components";

import { SizeContext } from "../context";
import { radius } from "../theme/radius.stylex";
import { uiColor } from "../theme/semantic-color.stylex";
import { spacing } from "../theme/spacing.stylex";
import { Size, StyleXComponentProps } from "../theme/types";

const styles = stylex.create({
  swatch: {
    borderColor: uiColor.border2,
    borderStyle: "solid",
    borderWidth: 1,
    boxSizing: "border-box",

    borderRadius: {
      ":is([data-size=sm])": {
        default: radius["sm"],
        "@supports (corner-shape: squircle)": radius["3xl"],
      },
      ":is([data-size=md])": {
        default: radius["md"],
        "@supports (corner-shape: squircle)": radius["3xl"],
      },
      ":is([data-size=lg])": {
        default: radius["lg"],
        "@supports (corner-shape: squircle)": radius["3xl"],
      },
    },
    cornerShape: "squircle",
    height: {
      ":is([data-size=sm])": spacing["4"],
      ":is([data-size=md])": spacing["6"],
      ":is([data-size=lg])": spacing["8"],
    },
    width: {
      ":is([data-size=sm])": spacing["4"],
      ":is([data-size=md])": spacing["6"],
      ":is([data-size=lg])": spacing["8"],
    },
  },
});

export interface ColorSwatchProps
  extends StyleXComponentProps<Omit<AriaColorSwatchProps, "children">> {
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
      {...stylex.props(styles.swatch, style)}
      data-size={size}
      style={({ color }) => ({
        background: `linear-gradient(${color.toString()}, ${color.toString()}),
          repeating-conic-gradient(#CCC 0% 25%, white 0% 50%) 50% / 16px 16px`,
      })}
    />
  );
}
