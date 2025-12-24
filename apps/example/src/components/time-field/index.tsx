import * as stylex from "@stylexjs/stylex";
import { useRef } from "react";
import {
  TimeFieldProps as AriaTimeFieldProps,
  DateInput,
  DateSegment,
  TimeValue,
  ValidationResult,
  FieldError,
  TimeField as AriaTimeField,
} from "react-aria-components";

import { Description, Label } from "../label";
import { useInputStyles } from "../theme/useInputStyles";
import { Size } from "../types";

export interface TimeFieldProps<T extends TimeValue> extends Omit<
  AriaTimeFieldProps<T>,
  "style" | "className"
> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
  label?: React.ReactNode;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  size?: Size;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

export function TimeField<T extends TimeValue>({
  label,
  description,
  errorMessage,
  style,
  size,
  prefix,
  suffix,
  ...props
}: TimeFieldProps<T>) {
  const inputRef = useRef<HTMLInputElement>(null);
  const inputStyles = useInputStyles({ size });

  return (
    <AriaTimeField {...props} {...stylex.props(inputStyles.field, style)}>
      {label !== null && <Label size={size}>{label}</Label>}
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
        <DateInput {...stylex.props(inputStyles.input)} ref={inputRef}>
          {(segment) => <DateSegment segment={segment} />}
        </DateInput>
        {suffix !== null && (
          <div {...stylex.props(inputStyles.addon)}>{suffix}</div>
        )}
      </div>
      {description && <Description size={size}>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </AriaTimeField>
  );
}
