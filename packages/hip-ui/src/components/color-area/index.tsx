import type {
  ColorAreaProps as AriaColorAreaProps,
  ColorThumbProps as AriaColorThumbProps,
} from "react-aria-components";

import * as stylex from "@stylexjs/stylex";
import {
  ColorArea as AriaColorArea,
  ColorThumb as AriaColorThumb,
} from "react-aria-components";

import { radius } from "../theme/radius.stylex";
import { spacing } from "../theme/spacing.stylex";
import { StyleXComponentProps } from "../theme/types";

const styles = stylex.create({
  colorArea: {
    // eslint-disable-next-line @stylexjs/valid-styles
    cornerShape: "squircle",
    borderRadius: {
      default: radius["md"],
      "@supports (corner-shape: squircle)": radius["3xl"],
    },
    filter: {
      ":is([data-disabled])": "grayscale(1)",
    },
    flexShrink: 0,
  },
  thumb: {
    // eslint-disable-next-line @stylexjs/valid-styles
    cornerShape: "squircle",
    borderColor: "white",
    borderRadius: {
      default: radius["full"],
      "@supports (corner-shape: squircle)": radius["3xl"],
    },
    borderStyle: "solid",
    borderWidth: 2,
    boxShadow: " 0 0 0 1px black, inset 0 0 0 1px black",
    boxSizing: "border-box",
    filter: {
      ":is([data-disabled])": "grayscale(1)",
    },
    height: {
      default: spacing["4"],
      ":is([data-focus-visible])": spacing["6"],
      ":is([data-size=lg] *)": spacing["6"],
      ":is([data-size=md] *)": spacing["4"],
      ":is([data-size=sm] *)": spacing["3"],
    },
    width: {
      default: spacing["4"],
      ":is([data-focus-visible])": spacing["6"],
      ":is([data-size=lg] *)": spacing["6"],
      ":is([data-size=md] *)": spacing["4"],
      ":is([data-size=sm] *)": spacing["3"],
    },
  },
  aspectRatio: (aspectRatio: number) => ({
    aspectRatio,
  }),
});

export function ColorThumb({
  style,
  ...props
}: StyleXComponentProps<Omit<AriaColorThumbProps, "children">>) {
  return <AriaColorThumb {...props} {...stylex.props(styles.thumb, style)} />;
}

export interface ColorAreaProps
  extends StyleXComponentProps<Omit<AriaColorAreaProps, "children">> {
  children?: React.ReactNode;
  aspectRatio?: number;
}

export function ColorArea({
  style,
  aspectRatio = 1,
  ...props
}: ColorAreaProps) {
  return (
    <AriaColorArea
      {...props}
      {...stylex.props(
        styles.colorArea,
        style,
        styles.aspectRatio(aspectRatio),
      )}
    >
      <ColorThumb />
    </AriaColorArea>
  );
}
