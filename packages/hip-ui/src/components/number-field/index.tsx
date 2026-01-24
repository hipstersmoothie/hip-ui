import type {
  NumberFieldProps as AriaNumberFieldProps,
  InputProps,
  ValidationResult,
} from "react-aria-components";

import { useUNSAFE_PortalContext } from "@react-aria/overlays";
import * as stylex from "@stylexjs/stylex";
import { Minus, MoveHorizontal, Plus } from "lucide-react";
import { use, useRef } from "react";
import { mergeProps } from "react-aria";
import {
  NumberField as AriaNumberField,
  Button,
  Group,
  Input,
  NumberFieldStateContext,
} from "react-aria-components";
import { createPortal } from "react-dom";

import type {
  InputValidationState,
  InputVariant,
  Size,
  StyleXComponentProps,
} from "../theme/types";

import { SizeContext } from "../context";
import { Description, FieldErrorMessage, Label } from "../label";
import { SuffixIcon } from "../suffix-icon";
import { uiColor } from "../theme/color.stylex";
import { ui } from "../theme/semantic-color.stylex";
import { spacing } from "../theme/spacing.stylex";
import { useInputStyles } from "../theme/useInputStyles";
import { usePointerLock } from "./usePointerLock";

interface NumberInputWrapperProps {
  style: stylex.StyleXStyles;
  onClick: () => void;
  children: React.ReactNode;
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function NumberInputWrapper({
  style,
  onClick,
  children,
}: NumberInputWrapperProps) {
  const state = use(NumberFieldStateContext);
  const { lockProps, isLocked, cursorProps } = usePointerLock({
    onMove(e) {
      if (!state) return;
      state.setNumberValue(
        clamp(
          state.numberValue + e.deltaX,
          state.minValue ?? -Infinity,
          state.maxValue ?? Infinity,
        ),
      );
    },
  });
  const { getContainer } = useUNSAFE_PortalContext();

  return (
    <div
      {...stylex.props(styles.wrapper, style)}
      {...mergeProps(lockProps, { onClick })}
    >
      {children}
      {isLocked &&
        createPortal(
          <div {...cursorProps}>
            <MoveHorizontal size={16} />
          </div>,
          getContainer?.() ?? document.body,
        )}
    </div>
  );
}

const styles = stylex.create({
  wrapper: {
    cursor: "ew-resize",
  },
  input: {
    cursor: "text",
  },
  buttons: {
    display: "flex",
  },
  button: {
    padding: 0,
    borderWidth: 0,
    alignItems: "center",
    aspectRatio: 1,
    display: "flex",
    flexGrow: 1,
    justifyContent: "center",
    borderBottomWidth: 0,
    borderLeftStyle: "solid",
    borderLeftWidth: 1,
    borderRightWidth: 0,
    borderTopWidth: 0,
    minHeight: 0,

    // eslint-disable-next-line @stylexjs/no-legacy-contextual-styles, @stylexjs/valid-styles
    ":is(*) svg": {
      flexShrink: 0,
      pointerEvents: "none",
      height: spacing["4"],
      width: spacing["4"],
    },

    color: {
      default: uiColor.text2,
      ":disabled": uiColor.text1,
    },
  },
});

interface NumberFieldContentProps {
  label?: React.ReactNode;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  size: Size;
  variant: InputVariant | undefined;
  validationState: InputValidationState | undefined;
  isInvalid: boolean;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  placeholder?: string;
  hideStepper: boolean;
}

function NumberFieldContent({
  label,
  description,
  errorMessage,
  size,
  variant,
  validationState,
  isInvalid,
  prefix,
  suffix,
  placeholder,
  hideStepper,
}: NumberFieldContentProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const inputStyles = useInputStyles({
    size,
    variant,
    validationState: isInvalid ? "invalid" : validationState,
  });
  const buttonStyles = stylex.props(
    styles.button,
    ui.borderInteractive,
    ui.bgAction,
  );

  return (
    <>
      <Label>{label}</Label>
      {/* 
        This onClick is specifically for mouse users not clicking directly on the input.
        A keyboard user would not encounter the same issue.
      */}
      <NumberInputWrapper
        style={inputStyles.wrapper}
        onClick={() => inputRef.current?.focus()}
      >
        {prefix != null && (
          <div {...stylex.props(inputStyles.addon)}>{prefix}</div>
        )}
        <Input
          placeholder={placeholder}
          ref={inputRef}
          {...stylex.props(styles.input, inputStyles.input)}
        />
        <SuffixIcon
          suffix={suffix}
          style={inputStyles.addon}
          validationIconStyle={inputStyles.validationIcon}
          validationState={validationState}
        />
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
      </NumberInputWrapper>
      <Description>{description}</Description>
      <FieldErrorMessage>{errorMessage}</FieldErrorMessage>
    </>
  );
}

export interface NumberFieldProps
  extends
    StyleXComponentProps<Omit<AriaNumberFieldProps, "children" | "isInvalid">>,
    Pick<InputProps, "placeholder"> {
  label?: React.ReactNode;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  size?: Size;
  variant?: InputVariant;
  validationState?: InputValidationState;
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
  validationState,
  prefix,
  suffix,
  placeholder,
  hideStepper = false,
  ...props
}: NumberFieldProps) {
  const size = sizeProp || use(SizeContext);
  const inputStyles = useInputStyles({ size, variant, validationState });

  return (
    <SizeContext value={size}>
      <AriaNumberField
        {...props}
        isInvalid={validationState ? validationState === "invalid" : undefined}
        {...stylex.props(inputStyles.field, style)}
      >
        {({ isInvalid }) => (
          <NumberFieldContent
            label={label}
            description={description}
            errorMessage={errorMessage}
            size={size}
            variant={variant}
            validationState={validationState}
            isInvalid={isInvalid}
            prefix={prefix}
            suffix={suffix}
            placeholder={placeholder}
            hideStepper={hideStepper}
          />
        )}
      </AriaNumberField>
    </SizeContext>
  );
}
