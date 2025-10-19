import * as stylex from "@stylexjs/stylex";
import { useRef } from "react";
import {
  ColorFieldProps as AriaColorFieldProps,
  Input,
  InputProps,
  ValidationResult,
  FieldError,
  ColorField as AriaColorField,
} from "react-aria-components";

import { Description, Label } from "../label";
import { InputVariant, Size } from "../theme/types";
import { useInputStyles } from "../theme/useInputStyles";

export interface ColorFieldProps
  extends Omit<AriaColorFieldProps, "style" | "className">,
    Pick<InputProps, "placeholder"> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
  label?: React.ReactNode;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  size?: Size;
  variant?: InputVariant;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

export function ColorField({
  label,
  description,
  errorMessage,
  style,
  size,
  variant,
  prefix,
  suffix,
  placeholder,
  ...props
}: ColorFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const inputStyles = useInputStyles({ size, variant });

  return (
    <AriaColorField {...props} {...stylex.props(inputStyles.field, style)}>
      {label != null && <Label size={size}>{label}</Label>}
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
      </div>
      {description !== undefined && (
        <Description size={size}>{description}</Description>
      )}
      <FieldError>{errorMessage}</FieldError>
    </AriaColorField>
  );
}
