import * as stylex from "@stylexjs/stylex";
import { use } from "react";
import {
  LabelProps as AriaLabelProps,
  Text,
  TextProps,
  Label as AriaLabel,
} from "react-aria-components";

import { SizeContext } from "../context";
import { gray } from "../theme/semantic-color.stylex";
import { fontSize, fontWeight, lineHeight } from "../theme/typography.stylex";
import { Size } from "../types";

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
  size?: Size;
}

export function Label({ style, size: sizeProp, ...props }: LabelProps) {
  const size = sizeProp || use(SizeContext);

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
  size?: Size;
}

export function Description({
  style,
  size: sizeProp,
  ...props
}: DescriptionProps) {
  const size = sizeProp || use(SizeContext);

  return (
    <Text
      slot="description"
      {...stylex.props(
        styles.description,
        gray.textDim,
        size === "sm" && styles.descriptionSm,
        style,
      )}
      {...props}
    />
  );
}
