import {
  LabelProps as AriaLabelProps,
  Text,
  TextProps,
} from "react-aria-components";
import { Label as AriaLabel } from "react-aria-components";
import * as stylex from "@stylexjs/stylex";

import { fontSize, fontWeight, lineHeight } from "../theme/typography.stylex";
import { gray } from "../theme/semantic-color.stylex";

const styles = stylex.create({
  label: {
    fontWeight: fontWeight["semibold"],
  },
  sm: {
    fontSize: fontSize["xs"],
    lineHeight: lineHeight["xs"],
  },
  md: {
    fontSize: fontSize["sm"],
    lineHeight: lineHeight["sm"],
  },
  lg: {
    fontSize: fontSize["base"],
    lineHeight: lineHeight["base"],
  },
  description: {
    color: gray.textDim,
    fontSize: fontSize["sm"],
    lineHeight: lineHeight["sm"],
  },
  descriptionSm: {
    fontSize: fontSize["xs"],
    lineHeight: lineHeight["xs"],
  },
});

export interface LabelProps
  extends Omit<AriaLabelProps, "style" | "className"> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
  size?: "sm" | "md" | "lg";
}

export function Label({ style, size = "md", ...props }: LabelProps) {
  return (
    <AriaLabel
      {...props}
      {...stylex.props(styles[size], styles.label, style)}
    />
  );
}

export interface DescriptionProps
  extends Omit<TextProps, "style" | "className"> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
  size?: "sm" | "md" | "lg";
}

export function Description({
  style,
  size = "md",
  ...props
}: DescriptionProps) {
  return (
    <Text
      slot="description"
      {...stylex.props(
        styles.description,
        gray.textDim,
        size === "sm" && styles.descriptionSm,
        style
      )}
      {...props}
    />
  );
}
