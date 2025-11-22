import * as stylex from "@stylexjs/stylex";
import { use, useRef } from "react";
import {
  TimeFieldProps as AriaTimeFieldProps,
  DateInput,
  DateSegment,
  TimeValue,
  ValidationResult,
  TimeField as AriaTimeField,
} from "react-aria-components";

import { SizeContext } from "../context";
import { Description, FieldErrorMessage, Label } from "../label";
import { SuffixIcon } from "../suffix-icon";
import {
  InputVariant,
  InputValidationState,
  Size,
  StyleXComponentProps,
} from "../theme/types";
import { useInputStyles } from "../theme/useInputStyles";

interface TimeFieldContentProps {
  label?: React.ReactNode;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  size: Size;
  variant: InputVariant | undefined;
  validationState: InputValidationState | undefined;
  isInvalid: boolean;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

function TimeFieldContent({
  label,
  description,
  errorMessage,
  size,
  variant,
  validationState,
  isInvalid,
  prefix,
  suffix,
}: TimeFieldContentProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const inputStyles = useInputStyles({
    size,
    variant,
    validationState: isInvalid ? "invalid" : validationState,
  });

  return (
    <>
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
        <SuffixIcon
          suffix={suffix}
          style={inputStyles.addon}
          validationIconStyle={inputStyles.validationIcon}
          validationState={validationState}
        />
      </div>
      <Description>{description}</Description>
      <FieldErrorMessage>{errorMessage}</FieldErrorMessage>
    </>
  );
}

export interface TimeFieldProps<T extends TimeValue>
  extends StyleXComponentProps<Omit<AriaTimeFieldProps<T>, "isInvalid">> {
  label?: React.ReactNode;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  size?: Size;
  variant?: InputVariant;
  validationState?: InputValidationState;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

export function TimeField<T extends TimeValue>({
  label,
  description,
  errorMessage,
  style,
  size: sizeProp,
  variant,
  validationState,
  prefix,
  suffix,
  ...props
}: TimeFieldProps<T>) {
  const size = sizeProp || use(SizeContext);
  const inputStyles = useInputStyles({ size, variant, validationState });

  return (
    <SizeContext value={size}>
      <AriaTimeField
        {...props}
        isInvalid={validationState ? validationState === "invalid" : undefined}
        {...stylex.props(inputStyles.field, style)}
      >
        {({ isInvalid }) => (
          <TimeFieldContent
            label={label}
            description={description}
            errorMessage={errorMessage}
            size={size}
            variant={variant}
            validationState={validationState}
            isInvalid={isInvalid}
            prefix={prefix}
            suffix={suffix}
          />
        )}
      </AriaTimeField>
    </SizeContext>
  );
}
