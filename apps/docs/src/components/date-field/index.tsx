import * as stylex from "@stylexjs/stylex";
import { useRef } from "react";
import {
  DateFieldProps as AriaDateFieldProps,
  DateInput,
  DateSegment,
  DateValue,
  ValidationResult,
  FieldError,
  DateField as AriaDateField,
} from "react-aria-components";

import { Description, Label } from "../label";
import { useInputStyles } from "../theme/useInputStyles";
import { Size } from "../types";

export interface DateFieldProps<T extends DateValue>
  extends Omit<AriaDateFieldProps<T>, "style" | "className"> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
  label?: React.ReactNode;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  size?: Size;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

export function DateField<T extends DateValue>({
  label,
  description,
  errorMessage,
  style,
  size,
  prefix,
  suffix,
  ...props
}: DateFieldProps<T>) {
  const inputRef = useRef<HTMLInputElement>(null);
  const inputStyles = useInputStyles({ size });

  return (
    <AriaDateField {...props} {...stylex.props(inputStyles.field, style)}>
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
        <DateInput {...stylex.props(inputStyles.input)} ref={inputRef}>
          {(segment) => <DateSegment segment={segment} />}
        </DateInput>
        {suffix != null && (
          <div {...stylex.props(inputStyles.addon)}>{suffix}</div>
        )}
      </div>
      {description && <Description size={size}>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </AriaDateField>
  );
}
