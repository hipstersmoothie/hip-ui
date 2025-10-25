import * as stylex from "@stylexjs/stylex";
import { use, useRef } from "react";
import {
  TextArea as AriaTextArea,
  TextAreaProps as AriaTextAreaProps,
  InputProps,
  TextFieldProps,
  ValidationResult,
  FieldError,
  TextField as AriaTextField,
} from "react-aria-components";

import { SizeContext } from "../context";
import { Description, Label } from "../label";
import { radius } from "../theme/radius.stylex";
import { ui, uiColor } from "../theme/semantic-color.stylex";
import { spacing } from "../theme/spacing.stylex";
import { Size, StyleXComponentProps } from "../theme/types";
import { lineHeight, fontSize, fontFamily } from "../theme/typography.stylex";

const styles = stylex.create({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    gap: spacing["2"],
  },
  addon: {
    color: ui.textDim,
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
      default: uiColor.border2,
      ":hover": uiColor.border3,
      ":focus": uiColor.solid1,
    },
    borderStyle: "solid",
    borderWidth: 1,
  },
  input: {
    backgroundColor: "transparent",
    borderWidth: 0,
    boxSizing: "border-box",
    color: {
      "::placeholder": uiColor.text1,
    },
    flexGrow: 1,
    fontFamily: fontFamily["sans"],
    outline: "none",
  },
  smInput: {
    fontSize: fontSize["xs"],
    lineHeight: lineHeight["xs"],
    minHeight: spacing["6"],
    paddingBottom: spacing["1"],
    paddingLeft: { ":first-child": spacing["1"] },
    paddingRight: spacing["1"],
    paddingTop: spacing["1"],
  },
  mdInput: {
    fontSize: fontSize["sm"],
    lineHeight: lineHeight["sm"],
    minHeight: spacing["8"],
    paddingBottom: spacing["2"],
    paddingLeft: { ":first-child": spacing["2"] },
    paddingRight: spacing["2"],
    paddingTop: spacing["2"],
  },
  lgInput: {
    fontSize: fontSize["base"],
    lineHeight: lineHeight["base"],
    minHeight: spacing["10"],
    paddingBottom: spacing["3"],
    paddingLeft: spacing["3"],
    paddingRight: spacing["3"],
    paddingTop: spacing["3"],
  },
  description: {
    color: ui.textDim,
    fontSize: fontSize["sm"],
    lineHeight: lineHeight["sm"],
  },
  descriptionSm: {
    fontSize: fontSize["xs"],
    lineHeight: lineHeight["xs"],
  },
});

export interface TextAreaProps
  extends StyleXComponentProps<Omit<TextFieldProps, "children">>,
    Pick<AriaTextAreaProps, "rows">,
    Pick<InputProps, "placeholder"> {
  label?: React.ReactNode;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  size?: Size;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

export function TextArea({
  label,
  description,
  errorMessage,
  style,
  size: sizeProp,
  prefix,
  suffix,
  placeholder,
  rows,
  ...props
}: TextAreaProps) {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const size = sizeProp || use(SizeContext);

  return (
    <AriaTextField {...props} {...stylex.props(styles.wrapper, style)}>
      {label != null && <Label size={size}>{label}</Label>}
      {/* 
        This onClick is specifically for mouse users not clicking directly on the input.
        A keyboard user would not encounter the same issue.
      */}
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
      <div
        {...stylex.props(styles.inputWrapper, ui.bgUi, ui.text)}
        onClick={() => textAreaRef.current?.focus()}
      >
        {prefix != null && <div {...stylex.props(styles.addon)}>{prefix}</div>}
        <AriaTextArea
          {...stylex.props(styles.input, styles[`${size}Input`])}
          ref={textAreaRef}
          placeholder={placeholder}
          rows={rows}
        />
        {suffix != null && <div {...stylex.props(styles.addon)}>{suffix}</div>}
      </div>
      {description && <Description size={size}>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </AriaTextField>
  );
}
