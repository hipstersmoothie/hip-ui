import {
  TimeFieldProps as AriaTimeFieldProps,
  DateInput,
  DateSegment,
  TimeValue,
  ValidationResult,
} from "react-aria-components";

import { FieldError, TimeField as AriaTimeField } from "react-aria-components";
import * as stylex from "@stylexjs/stylex";
import { Description, Label } from "../label";
import { useRef } from "react";
import { Size } from "../types";
import { useInputStyles } from "../theme/useInputStyles";

export interface TimeFieldProps<T extends TimeValue>
  extends Omit<AriaTimeFieldProps<T>, "style" | "className"> {
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
  size = "md",
  prefix,
  suffix,
  ...props
}: TimeFieldProps<T>) {
  const inputRef = useRef<HTMLInputElement>(null);
  const inputStyles = useInputStyles({ size });

  return (
    <AriaTimeField {...props} {...stylex.props(inputStyles.field, style)}>
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
    </AriaTimeField>
  );
}
