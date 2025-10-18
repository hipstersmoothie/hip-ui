import {
  SearchFieldProps as AriaSearchFieldProps,
  Input,
  InputProps,
  ValidationResult,
  FieldError,
  SearchField as AriaSearchField,
} from "react-aria-components";
import * as stylex from "@stylexjs/stylex";
import { Description, Label } from "../label";
import { useRef } from "react";
import { Size } from "../types";
import { useInputStyles } from "../theme/useInputStyles";
import { SearchIcon, X } from "lucide-react";
import { IconButton } from "../icon-button";
import { spacing } from "../theme/spacing.stylex";

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
  prefix = defaultPrefix,
  suffix,
  placeholder,
  ...props
}: SearchFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const inputStyles = useInputStyles({ size });

  return (
    <AriaSearchField {...props} {...stylex.props(inputStyles.field, style)}>
      {({ isEmpty }) => {
        return (
          <>
            {label !== undefined && <Label size={size}>{label}</Label>}
            <div
              {...stylex.props(inputStyles.wrapper, styles.wrapper)}
              onClick={() => inputRef.current?.focus()}
            >
              {prefix !== undefined && (
                <div {...stylex.props(inputStyles.addon)}>{prefix}</div>
              )}
              <Input
                placeholder={placeholder}
                ref={inputRef}
                {...stylex.props(
                  inputStyles.input,
                  !isEmpty && styles.clearButtonPadding
                )}
              />
              {suffix !== undefined && (
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
