import type { ColorWheelProps as AriaColorWheelProps } from "react-aria-components";

import * as stylex from "@stylexjs/stylex";
import { use } from "react";
import {
  ColorWheel as AriaColorWheel,
  ColorWheelTrack,
} from "react-aria-components";

import { ColorThumb } from "../color-area";
import { SizeContext } from "../context";
import { uiColor } from "../theme/color.stylex";
import { radius } from "../theme/radius.stylex";
import { spacing } from "../theme/spacing.stylex";
import { Size, StyleXComponentProps } from "../theme/types";

const styles = stylex.create({
  track: {
    gridArea: "track",
    borderRadius: radius.full,
    height: {
      ":is([data-size=lg] *)": spacing["6"],
      ":is([data-size=md] *)": spacing["4"],
      ":is([data-size=sm] *)": spacing["3"],
    },
    width: "100%",

    backgroundImage: {
      ":is([data-disabled])": `linear-gradient(${uiColor.component2}, ${uiColor.component2}) !important`,
    },
  },
  thumb: {
    top: "50%",
  },
});

export interface ColorWheelProps extends StyleXComponentProps<
  Omit<AriaColorWheelProps, "children" | "outerRadius" | "innerRadius">
> {
  size?: Size;
  width: number;
}

export function ColorWheel({
  style,
  size: sizeProp,
  width,
  ...props
}: ColorWheelProps) {
  const size = sizeProp || use(SizeContext);
  const trackWidth = size === "sm" ? 12 : size === "md" ? 16 : 24;

  return (
    <AriaColorWheel
      {...props}
      {...stylex.props(style)}
      data-size={size}
      outerRadius={width}
      innerRadius={width - trackWidth}
    >
      <ColorWheelTrack {...stylex.props(styles.track)} />
      <ColorThumb style={styles.thumb} />
    </AriaColorWheel>
  );
}
