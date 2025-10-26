import * as stylex from "@stylexjs/stylex";
import { use } from "react";
import {
  LabelProps as AriaLabelProps,
  Text,
  TextProps,
  Label as AriaLabel,
} from "react-aria-components";

import { SizeContext } from "../context";
import { critical, ui } from "../theme/semantic-color.stylex";
import { Size, StyleXComponentProps } from "../theme/types";
import { fontSize, fontWeight, lineHeight } from "../theme/typography.stylex";

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
    color: ui.textDim,
    fontSize: fontSize["sm"],
    lineHeight: lineHeight["sm"],
  },
  descriptionSm: {
    fontSize: fontSize["xs"],
    lineHeight: lineHeight["xs"],
  },
  errorMessage: {
    color: critical.textDim,
    fontSize: fontSize["sm"],
    lineHeight: lineHeight["sm"],
  },
  errorMessageSm: {
    fontSize: fontSize["xs"],
    lineHeight: lineHeight["xs"],
  },
});

export interface LabelProps extends StyleXComponentProps<AriaLabelProps> {
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

export interface DescriptionProps extends StyleXComponentProps<TextProps> {
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
        ui.textDim,
        size === "sm" && styles.descriptionSm,
        style,
      )}
      {...props}
    />
  );
}

export interface ErrorMessageProps extends StyleXComponentProps<TextProps> {
  size?: Size;
}

export function ErrorMessage({
  style,
  size: sizeProp,
  ...props
}: ErrorMessageProps) {
  const size = sizeProp || use(SizeContext);

  return (
    <Text
      slot="errorMessage"
      {...stylex.props(
        styles.errorMessage,
        critical.textDim,
        size === "sm" && styles.errorMessageSm,
        style,
      )}
      {...props}
    />
  );
}
