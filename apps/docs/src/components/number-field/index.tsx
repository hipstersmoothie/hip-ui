import * as stylex from "@stylexjs/stylex";
import { Minus, Plus } from "lucide-react";
import { use, useRef } from "react";
import {
  NumberFieldProps as AriaNumberFieldProps,
  Input,
  InputProps,
  ValidationResult,
  NumberField as AriaNumberField,
  Group,
  Button,
} from "react-aria-components";

import { SizeContext } from "../context";
import { Description, FieldErrorMessage, Label } from "../label";
import { ui, uiColor } from "../theme/semantic-color.stylex";
import { spacing } from "../theme/spacing.stylex";
import { InputVariant, Size, StyleXComponentProps } from "../theme/types";
import { useInputStyles } from "../theme/useInputStyles";

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
      default: uiColor.text2,
      ":disabled": uiColor.text1,
    },
  },
});

export interface NumberFieldProps
  extends StyleXComponentProps<Omit<AriaNumberFieldProps, "children">>,
    Pick<InputProps, "placeholder"> {
  label?: React.ReactNode;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  size?: Size;
  variant?: InputVariant;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  hideStepper?: boolean;
}

export function NumberField({
  label,
  description,
  errorMessage,
  style,
  size: sizeProp,
  variant,
  prefix,
  suffix,
  placeholder,
  hideStepper = false,
  ...props
}: NumberFieldProps) {
  const size = sizeProp || use(SizeContext);
  const inputRef = useRef<HTMLInputElement>(null);
  const inputStyles = useInputStyles({ size, variant });
  const buttonStyles = stylex.props(
    styles.button,
    ui.borderInteractive,
    ui.bgAction,
  );

  return (
    <SizeContext value={size}>
      <AriaNumberField {...props} {...stylex.props(inputStyles.field, style)}>
        <Label>{label}</Label>
        {/* 
        This onClick is specifically for mouse users not clicking directly on the input.
        A keyboard user would not encounter the same issue.
      */}
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
        <div
          {...stylex.props(inputStyles.wrapper)}
          onClick={() => inputRef.current?.focus()}
        >
          {prefix != null && (
            <div {...stylex.props(inputStyles.addon)}>{prefix}</div>
          )}
          <Input
            placeholder={placeholder}
            ref={inputRef}
            {...stylex.props(inputStyles.input)}
          />
          {suffix != null && (
            <div {...stylex.props(inputStyles.addon)}>{suffix}</div>
          )}
          {!hideStepper && (
            <Group {...stylex.props(styles.buttons)}>
              <Button slot="decrement" {...buttonStyles}>
                <Minus />
              </Button>
              <Button slot="increment" {...buttonStyles}>
                <Plus />
              </Button>
            </Group>
          )}
        </div>
        <Description>{description}</Description>
        <FieldErrorMessage>{errorMessage}</FieldErrorMessage>
      </AriaNumberField>
    </SizeContext>
  );
}
