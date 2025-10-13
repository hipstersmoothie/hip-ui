import {
  TextFieldProps as AriaTextFieldProps,
  ValidationResult,
} from "react-aria-components";

import {
  FieldError,
  Input,
  Text,
  TextField as AriaTextField,
} from "react-aria-components";
import * as stylex from "@stylexjs/stylex";
import { gray } from "../theme/semantic-color.stylex";
import { spacing } from "../theme/spacing.stylex";
import { Label } from "../label";
import { radius } from "../theme/radius.stylex";
import { lineHeight, fontSize } from "../theme/typography.stylex";
import { slate } from "../theme/colors.stylex";

const styles = stylex.create({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    gap: spacing["1.5"],
  },
  input: {
    borderRadius: radius["md"],
    boxSizing: "border-box",
    outline: "none",

    borderColor: {
      default: slate[7],
      ":hover": slate[8],
      ":focus": slate[9],
    },
    borderStyle: "solid",
    borderWidth: 1,
  },
  sm: {
    fontSize: fontSize["xs"],
    height: spacing["6"],
    lineHeight: lineHeight["xs"],
    paddingLeft: spacing["1"],
    paddingRight: spacing["1"],
  },
  md: {
    fontSize: fontSize["sm"],
    height: spacing["8"],
    lineHeight: lineHeight["sm"],
    paddingLeft: spacing["2"],
    paddingRight: spacing["2"],
  },
  lg: {
    fontSize: fontSize["base"],
    height: spacing["10"],
    lineHeight: lineHeight["base"],
    paddingLeft: spacing["3"],
    paddingRight: spacing["3"],
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

export interface TextFieldProps
  extends Omit<AriaTextFieldProps, "style" | "className"> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  size?: "sm" | "md" | "lg";
}

export function TextField({
  label,
  description,
  errorMessage,
  style,
  size = "md",
  ...props
}: TextFieldProps) {
  return (
    <AriaTextField {...props} {...stylex.props(styles.wrapper, style)}>
      <Label size={size}>{label}</Label>
      <Input
        {...stylex.props(styles.input, gray.bgAction, gray.text, styles[size])}
      />
      {description && (
        <Text
          slot="description"
          {...stylex.props(
            styles.description,
            size === "sm" && styles.descriptionSm
          )}
        >
          {description}
        </Text>
      )}
      <FieldError>{errorMessage}</FieldError>
    </AriaTextField>
  );
}
