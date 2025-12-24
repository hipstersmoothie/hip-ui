import * as stylex from "@stylexjs/stylex";
import { Eye, EyeOff } from "lucide-react";
import { useRef, useState, use } from "react";
import {
  TextFieldProps as AriaTextFieldProps,
  InputContext,
  InputProps,
  ValidationResult,
  Input,
  TextField as AriaTextField,
} from "react-aria-components";

import { SizeContext } from "../context";
import { IconButton } from "../icon-button";
import { Description, FieldErrorMessage, Label } from "../label";
import { SuffixIcon } from "../suffix-icon";
import {
  InputValidationState,
  InputVariant,
  Size,
  StyleXComponentProps,
} from "../theme/types";
import { useInputStyles } from "../theme/useInputStyles";

function PasswordToggle({
  type,
  setType,
  style,
}: {
  type: TextFieldProps["type"];
  setType: (type: TextFieldProps["type"]) => void;
  style?: stylex.StyleXStyles;
}) {
  const state = use(InputContext);

  if (!state || !("value" in state) || !state.value) return null;

  return (
    <div {...stylex.props(style)}>
      <IconButton
        size="sm"
        variant="tertiary"
        label="Toggle password visibility"
        onPress={() => {
          setType(type === "password" ? "text" : "password");
        }}
      >
        {type === "password" ? <EyeOff /> : <Eye />}
      </IconButton>
    </div>
  );
}

interface TextFieldContentProps {
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
  type: TextFieldProps["type"];
  setType: (type: TextFieldProps["type"]) => void;
}

function TextFieldContent({
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
  type,
  setType,
}: TextFieldContentProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const isPasswordInput = type === "password";
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
        <Input
          {...stylex.props(inputStyles.input)}
          ref={inputRef}
          placeholder={placeholder}
        />
        {isPasswordInput && (
          <PasswordToggle
            type={type}
            setType={setType}
            style={inputStyles.addon}
          />
        )}
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

export interface TextFieldProps
  extends
    StyleXComponentProps<Omit<AriaTextFieldProps, "isInvalid">>,
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

export function TextField({
  label,
  description,
  errorMessage,
  style,
  size: sizeProp,
  variant,
  validationState,
  prefix,
  suffix,
  placeholder,
  ...props
}: TextFieldProps) {
  const size = sizeProp || use(SizeContext);
  const [type, setType] = useState<TextFieldProps["type"]>(
    props.type || "text",
  );
  const inputStyles = useInputStyles({ size, variant, validationState });

  return (
    <SizeContext value={size}>
      <AriaTextField
        {...props}
        isInvalid={validationState ? validationState === "invalid" : undefined}
        type={type}
        {...stylex.props(inputStyles.field, style)}
      >
        {({ isInvalid }) => (
          <TextFieldContent
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
            type={type}
            setType={setType}
          />
        )}
      </AriaTextField>
    </SizeContext>
  );
}
