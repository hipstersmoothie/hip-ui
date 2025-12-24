import * as stylex from "@stylexjs/stylex";
import { Minus, Plus } from "lucide-react";
import { useRef } from "react";
import {
  NumberFieldProps as AriaNumberFieldProps,
  Input,
  InputProps,
  ValidationResult,
  FieldError,
  NumberField as AriaNumberField,
  Group,
  Button,
} from "react-aria-components";

import { Description, Label } from "../label";
import { slate } from "../theme/colors.stylex";
import { gray } from "../theme/semantic-color.stylex";
import { spacing } from "../theme/spacing.stylex";
import { useInputStyles } from "../theme/useInputStyles";
import { Size } from "../types";

const styles = stylex.create({
  buttons: {
    display: "flex",
  },
  button: {
    alignItems: "center",
    borderBottomWidth: 0,
    borderLeftStyle: "solid",
    borderLeftWidth: 1,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderWidth: 0,
    display: "flex",
    flexGrow: 1,
    justifyContent: "center",
    minHeight: 0,

    // eslint-disable-next-line @stylexjs/no-legacy-contextual-styles, @stylexjs/valid-styles
    ":is(*) svg": {
      flexShrink: 0,
      height: spacing["4"],
      pointerEvents: "none",
      width: spacing["4"],
    },

    color: {
      default: slate.text2,
      ":disabled": slate.text1,
    },
  },
});

export interface NumberFieldProps
  extends
    Omit<AriaNumberFieldProps, "style" | "className">,
    Pick<InputProps, "placeholder"> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
  label?: React.ReactNode;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  size?: Size;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

export function NumberField({
  label,
  description,
  errorMessage,
  style,
  size,
  prefix,
  suffix,
  placeholder,
  ...props
}: NumberFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const inputStyles = useInputStyles({ size });
  const buttonStyles = stylex.props(
    styles.button,
    gray.borderInteractive,
    gray.bgAction,
  );

  return (
    <AriaNumberField {...props} {...stylex.props(inputStyles.field, style)}>
      <Label size={size}>{label}</Label>
      {/* 
        This onClick is specifically for mouse users not clicking directly on the input.
        A keyboard user would not encounter the same issue.
      */}
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
      <div
        {...stylex.props(inputStyles.wrapper)}
        onClick={() => inputRef.current?.focus()}
      >
        {prefix !== null && (
          <div {...stylex.props(inputStyles.addon)}>{prefix}</div>
        )}
        <Input
          placeholder={placeholder}
          ref={inputRef}
          {...stylex.props(inputStyles.input)}
        />
        {suffix !== null && (
          <div {...stylex.props(inputStyles.addon)}>{suffix}</div>
        )}
        <Group {...stylex.props(styles.buttons)}>
          <Button slot="decrement" {...buttonStyles}>
            <Minus />
          </Button>
          <Button slot="increment" {...buttonStyles}>
            <Plus />
          </Button>
        </Group>
      </div>
      {description && <Description size={size}>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </AriaNumberField>
  );
}
