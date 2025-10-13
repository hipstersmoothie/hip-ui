import {
  TextFieldProps as AriaTextFieldProps,
  InputContext,
  InputProps,
  ValidationResult,
} from "react-aria-components";

import {
  FieldError,
  Input,
  TextField as AriaTextField,
} from "react-aria-components";
import * as stylex from "@stylexjs/stylex";
import { gray } from "../theme/semantic-color.stylex";
import { spacing } from "../theme/spacing.stylex";
import { Description, Label } from "../label";
import { radius } from "../theme/radius.stylex";
import { lineHeight, fontSize } from "../theme/typography.stylex";
import { slate } from "../theme/colors.stylex";
import { useRef } from "react";
import { useState } from "react";
import { IconButton } from "../icon-button";
import { Eye, EyeOff } from "lucide-react";
import { use } from "react";

const styles = stylex.create({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    gap: spacing["2"],
  },
  addon: {
    color: gray.textDim,
    flexShrink: 0,
    height: "100%",
    minWidth: spacing["8"],
    paddingLeft: { ":first-child": spacing["0.5"] },
    paddingRight: {
      ":last-child": spacing["2"],
      ":last-child:has(svg)": spacing["0.5"],
    },

    alignItems: "center",
    display: "flex",
    gap: spacing["0.5"],
    justifyContent: "center",

    // eslint-disable-next-line @stylexjs/no-legacy-contextual-styles, @stylexjs/valid-styles
    ":is(*) svg": {
      flexShrink: 0,
      height: spacing["4"],
      pointerEvents: "none",
      width: spacing["4"],
    },
  },
  inputWrapper: {
    borderRadius: radius["md"],
    boxSizing: "border-box",
    display: "flex",

    borderColor: {
      default: slate[7],
      ":hover": slate[8],
      ":focus": slate[9],
    },
    borderStyle: "solid",
    borderWidth: 1,
  },
  input: {
    backgroundColor: "transparent",
    borderWidth: 0,
    color: {
      "::placeholder": slate[11],
    },
    flexGrow: 1,
    lineHeight: lineHeight["none"],
    outline: "none",
  },
  sm: {
    height: spacing["6"],
  },
  smInput: {
    fontSize: fontSize["xs"],
    paddingLeft: { ":first-child": spacing["1"] },
    paddingRight: spacing["1"],
  },
  md: {
    height: spacing["8"],
  },
  mdInput: {
    fontSize: fontSize["sm"],
    paddingLeft: { ":first-child": spacing["2"] },
    paddingRight: spacing["2"],
  },
  lg: {
    height: spacing["10"],
  },
  lgInput: {
    fontSize: fontSize["base"],
    paddingLeft: spacing["3"],
    paddingRight: spacing["3"],
  },
  description: {
    color: gray.textDim,
    fontSize: fontSize["sm"],
    lineHeight: lineHeight["sm"],
  },
  descriptionSm: {
    fontSize: fontSize["xs"],
    lineHeight: lineHeight["xs"],
  },
});

function PasswordToggle({
  type,
  setType,
}: {
  type: TextFieldProps["type"];
  setType: (type: TextFieldProps["type"]) => void;
}) {
  const state = use(InputContext);

  if (!state || !("value" in state) || !state.value) return null;

  return (
    <div {...stylex.props(styles.addon)}>
      <IconButton
        size="sm"
        variant="tertiary"
        label="Toggle password visibility"
        onPress={() => setType(type === "password" ? "text" : "password")}
      >
        {type === "password" ? <EyeOff /> : <Eye />}
      </IconButton>
    </div>
  );
}

export interface TextFieldProps
  extends Omit<AriaTextFieldProps, "style" | "className">,
    Pick<InputProps, "placeholder"> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
  label?: React.ReactNode;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  size?: "sm" | "md" | "lg";
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

export function TextField({
  label,
  description,
  errorMessage,
  style,
  size = "md",
  prefix,
  suffix,
  placeholder,
  ...props
}: TextFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [type, setType] = useState<TextFieldProps["type"]>(
    props.type || "text"
  );
  const isPasswordInput = props.type === "password";

  return (
    <AriaTextField
      {...props}
      type={type}
      {...stylex.props(styles.wrapper, style)}
    >
      <Label size={size}>{label}</Label>
      <div
        {...stylex.props(
          styles.inputWrapper,
          gray.bgUi,
          gray.text,
          styles[size]
        )}
        onClick={() => inputRef.current?.focus()}
      >
        {prefix && <div {...stylex.props(styles.addon)}>{prefix}</div>}
        <Input
          {...stylex.props(styles.input, styles[`${size}Input`])}
          ref={inputRef}
          placeholder={placeholder}
        />
        {suffix && <div {...stylex.props(styles.addon)}>{suffix}</div>}
        {isPasswordInput && <PasswordToggle type={type} setType={setType} />}
      </div>
      {description && <Description size={size}>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </AriaTextField>
  );
}
