import {
  DateFieldProps as AriaDateFieldProps,
  DateInput,
  DateSegment,
  DateValue,
  ValidationResult,
} from "react-aria-components";

import { FieldError, DateField as AriaDateField } from "react-aria-components";
import * as stylex from "@stylexjs/stylex";
import { Description, Label } from "../label";
import { useRef } from "react";
import { Size } from "../types";
import { useInputStyles } from "../theme/useInputStyles";

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
      <Label size={size}>{label}</Label>
      <div
        {...stylex.props(inputStyles.wrapper)}
        onClick={() => inputRef.current?.focus()}
      >
        {prefix && <div {...stylex.props(inputStyles.addon)}>{prefix}</div>}
        <DateInput {...stylex.props(inputStyles.input)} ref={inputRef}>
          {(segment) => <DateSegment segment={segment} />}
        </DateInput>
        {suffix && <div {...stylex.props(inputStyles.addon)}>{suffix}</div>}
      </div>
      {description && <Description size={size}>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </AriaDateField>
  );
}
