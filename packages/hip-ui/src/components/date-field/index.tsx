import * as stylex from "@stylexjs/stylex";
import { use, useRef } from "react";
import {
  DateFieldProps as AriaDateFieldProps,
  DateInput,
  DateSegment,
  DateValue,
  ValidationResult,
  DateField as AriaDateField,
} from "react-aria-components";

import { SizeContext } from "../context";
import { Description, FieldErrorMessage, Label } from "../label";
import { InputVariant, Size, StyleXComponentProps } from "../theme/types";
import { useInputStyles } from "../theme/useInputStyles";

export interface DateFieldProps<T extends DateValue>
  extends StyleXComponentProps<AriaDateFieldProps<T>> {
  label?: React.ReactNode;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  size?: Size;
  variant?: InputVariant;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

export function DateField<T extends DateValue>({
  label,
  description,
  errorMessage,
  style,
  size: sizeProp,
  variant,
  prefix,
  suffix,
  ...props
}: DateFieldProps<T>) {
  const size = sizeProp || use(SizeContext);
  const inputRef = useRef<HTMLInputElement>(null);
  const inputStyles = useInputStyles({ size, variant });

  return (
    <SizeContext value={size}>
      <AriaDateField {...props} {...stylex.props(inputStyles.field, style)}>
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
          <DateInput {...stylex.props(inputStyles.input)} ref={inputRef}>
            {(segment) => <DateSegment segment={segment} />}
          </DateInput>
          {suffix != null && (
            <div {...stylex.props(inputStyles.addon)}>{suffix}</div>
          )}
        </div>
        <Description>{description}</Description>
        <FieldErrorMessage>{errorMessage}</FieldErrorMessage>
      </AriaDateField>
    </SizeContext>
  );
}
