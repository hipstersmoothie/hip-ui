import {
  ColorFieldProps as AriaColorFieldProps,
  Input,
  InputProps,
  ValidationResult,
  FieldError,
  ColorField as AriaColorField,
} from "react-aria-components";
import * as stylex from "@stylexjs/stylex";
import { Description, Label } from "../label";
import { useRef } from "react";
import { Size } from "../types";
import { useInputStyles } from "../theme/useInputStyles";

export interface ColorFieldProps
  extends Omit<AriaColorFieldProps, "style" | "className">,
    Pick<InputProps, "placeholder"> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
  label?: React.ReactNode;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  size?: Size;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

export function ColorField({
  label,
  description,
  errorMessage,
  style,
  size,
  prefix,
  suffix,
  placeholder,
  ...props
}: ColorFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const inputStyles = useInputStyles({ size });

  return (
    <AriaColorField {...props} {...stylex.props(inputStyles.field, style)}>
      <Label size={size}>{label}</Label>
      <div
        {...stylex.props(inputStyles.wrapper)}
        onClick={() => inputRef.current?.focus()}
      >
        {prefix && <div {...stylex.props(inputStyles.addon)}>{prefix}</div>}
        <Input
          placeholder={placeholder}
          ref={inputRef}
          {...stylex.props(inputStyles.input)}
        />
        {suffix && <div {...stylex.props(inputStyles.addon)}>{suffix}</div>}
      </div>
      {description && <Description size={size}>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </AriaColorField>
  );
}
