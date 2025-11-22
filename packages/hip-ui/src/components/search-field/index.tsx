import * as stylex from "@stylexjs/stylex";
import { SearchIcon, X } from "lucide-react";
import { use, useRef } from "react";
import {
  SearchFieldProps as AriaSearchFieldProps,
  Input,
  InputProps,
  ValidationResult,
  SearchField as AriaSearchField,
} from "react-aria-components";

import { SizeContext } from "../context";
import { IconButton } from "../icon-button";
import { Description, FieldErrorMessage, Label } from "../label";
import { SuffixIcon } from "../suffix-icon";
import { spacing } from "../theme/spacing.stylex";
import {
  InputVariant,
  InputValidationState,
  Size,
  StyleXComponentProps,
} from "../theme/types";
import { useInputStyles } from "../theme/useInputStyles";

const styles = stylex.create({
  wrapper: {
    position: "relative",
  },
  clearButton: {
    position: "absolute",
    transform: "translateY(-50%)",
    right: 0,
    top: "50%",
  },
  clearButtonPadding: {
    paddingRight: spacing["8"],
  },
});

interface SearchFieldContentProps {
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
  isEmpty: boolean;
}

function SearchFieldContent({
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
  isEmpty,
}: SearchFieldContentProps) {
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
        {...stylex.props(inputStyles.wrapper, styles.wrapper)}
        onClick={() => inputRef.current?.focus()}
      >
        {prefix != null && (
          <div {...stylex.props(inputStyles.addon)}>{prefix}</div>
        )}
        <Input
          placeholder={placeholder}
          ref={inputRef}
          {...stylex.props(
            inputStyles.input,
            !isEmpty && styles.clearButtonPadding,
          )}
        />
        <SuffixIcon
          suffix={suffix}
          style={inputStyles.addon}
          validationIconStyle={inputStyles.validationIcon}
          validationState={validationState}
        />
        {!isEmpty && (
          <div {...stylex.props(inputStyles.addon, styles.clearButton)}>
            <IconButton label="Clear search" size="sm" variant="secondary">
              <X />
            </IconButton>
          </div>
        )}
      </div>
      <Description>{description}</Description>
      <FieldErrorMessage>{errorMessage}</FieldErrorMessage>
    </>
  );
}

export interface SearchFieldProps
  extends StyleXComponentProps<Omit<AriaSearchFieldProps, "isInvalid">>,
    Pick<InputProps, "placeholder"> {
  label?: React.ReactNode;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  size?: Size;
  variant?: InputVariant;
  validationState?: InputValidationState;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

const defaultPrefix = <SearchIcon />;

export function SearchField({
  label,
  description,
  errorMessage,
  style,
  size: sizeProp,
  variant,
  validationState,
  prefix = defaultPrefix,
  suffix,
  placeholder,
  ...props
}: SearchFieldProps) {
  const size = sizeProp || use(SizeContext);
  const inputStyles = useInputStyles({ size, variant, validationState });

  return (
    <SizeContext value={size}>
      <AriaSearchField
        {...props}
        isInvalid={validationState ? validationState === "invalid" : undefined}
        {...stylex.props(inputStyles.field, style)}
      >
        {({ isInvalid, isEmpty }) => (
          <SearchFieldContent
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
            isEmpty={isEmpty}
          />
        )}
      </AriaSearchField>
    </SizeContext>
  );
}
