import * as stylex from "@stylexjs/stylex";
import { Eye, EyeOff } from "lucide-react";
import { useRef, useState, use } from "react";
import {
  TextFieldProps as AriaTextFieldProps,
  InputContext,
  InputProps,
  ValidationResult,
  FieldError,
  Input,
  TextField as AriaTextField,
} from "react-aria-components";

import { IconButton } from "../icon-button";
import { Description, Label } from "../label";
import { useInputStyles } from "../theme/useInputStyles";
import { Size } from "../types";

function PasswordToggle({
  type,
  setType,
  style,
}: {
  type: TextFieldProps["type"];
  setType: (type: TextFieldProps["type"]) => void;
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
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

export interface TextFieldProps
  extends
    Omit<AriaTextFieldProps, "style" | "className">,
    Pick<InputProps, "placeholder"> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
  label?: React.ReactNode;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  size?: Size;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

export function TextField({
  label,
  description,
  errorMessage,
  style,
  size,
  prefix,
  suffix,
  placeholder,
  ...props
}: TextFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [type, setType] = useState<TextFieldProps["type"]>(
    props.type || "text",
  );
  const isPasswordInput = props.type === "password";
  const inputStyles = useInputStyles({ size });

  return (
    <AriaTextField
      {...props}
      type={type}
      {...stylex.props(inputStyles.field, style)}
    >
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
        <Input
          {...stylex.props(inputStyles.input)}
          ref={inputRef}
          placeholder={placeholder}
        />
        {suffix !== null && (
          <div {...stylex.props(inputStyles.addon)}>{suffix}</div>
        )}
        {isPasswordInput && (
          <PasswordToggle
            type={type}
            setType={setType}
            style={inputStyles.addon}
          />
        )}
      </div>
      {description && <Description size={size}>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </AriaTextField>
  );
}
