import * as stylex from "@stylexjs/stylex";
import { SearchIcon, X } from "lucide-react";
import { useRef } from "react";
import {
  SearchFieldProps as AriaSearchFieldProps,
  Input,
  InputProps,
  ValidationResult,
  FieldError,
  SearchField as AriaSearchField,
} from "react-aria-components";

import { IconButton } from "../icon-button";
import { Description, Label } from "../label";
import { spacing } from "../theme/spacing.stylex";
import { InputVariant, Size } from "../theme/types";
import { useInputStyles } from "../theme/useInputStyles";

const styles = stylex.create({
  wrapper: {
    position: "relative",
  },
  clearButton: {
    position: "absolute",
    right: 0,
    top: "50%",
    transform: "translateY(-50%)",
  },
  clearButtonPadding: {
    paddingRight: spacing["8"],
  },
});

export interface SearchFieldProps
  extends Omit<AriaSearchFieldProps, "style" | "className">,
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

const defaultPrefix = <SearchIcon />;

export function SearchField({
  label,
  description,
  errorMessage,
  style,
  size,
  variant,
  prefix = defaultPrefix,
  suffix,
  placeholder,
  ...props
}: SearchFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const inputStyles = useInputStyles({ size, variant });

  return (
    <AriaSearchField {...props} {...stylex.props(inputStyles.field, style)}>
      {({ isEmpty }) => {
        return (
          <>
            {label != null && <Label size={size}>{label}</Label>}
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
              {suffix != null && (
                <div {...stylex.props(inputStyles.addon)}>{suffix}</div>
              )}
              {!isEmpty && (
                <div {...stylex.props(inputStyles.addon, styles.clearButton)}>
                  <IconButton
                    label="Clear search"
                    size="sm"
                    variant="secondary"
                  >
                    <X />
                  </IconButton>
                </div>
              )}
            </div>
            {description && (
              <Description size={size}>{description}</Description>
            )}
            <FieldError>{errorMessage}</FieldError>
          </>
        );
      }}
    </AriaSearchField>
  );
}
