import * as stylex from "@stylexjs/stylex";
import { use, useRef } from "react";
import {
  TextArea as AriaTextArea,
  TextAreaProps as AriaTextAreaProps,
  InputProps,
  TextFieldProps,
  ValidationResult,
  TextField as AriaTextField,
} from "react-aria-components";

import { SizeContext } from "../context";
import { Description, FieldErrorMessage, Label } from "../label";
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
    borderRadius: {
      default: radius["md"],
      "@supports (corner-shape: squircle)": radius["2xl"],
    },
    cornerShape: "squircle",
    boxSizing: "border-box",
    display: "flex",
    flexGrow: 1,

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
    resize: "none",

    fontSize: {
      ":is([data-size=sm])": fontSize["xs"],
      ":is([data-size=md])": fontSize["sm"],
      ":is([data-size=lg])": fontSize["base"],
    },
    lineHeight: {
      ":is([data-size=sm])": lineHeight["xs"],
      ":is([data-size=md])": lineHeight["sm"],
      ":is([data-size=lg])": lineHeight["base"],
    },
    minHeight: {
      ":is([data-size=sm])": spacing["6"],
      ":is([data-size=md])": spacing["8"],
      ":is([data-size=lg])": spacing["10"],
    },
    paddingBottom: {
      ":is([data-size=sm])": spacing["1"],
      ":is([data-size=md])": spacing["2"],
      ":is([data-size=lg])": spacing["3"],
    },
    paddingLeft: {
      ":is([data-size=sm])": spacing["1"],
      ":is([data-size=md])": spacing["2"],
      ":is([data-size=lg])": spacing["3"],
    },
    paddingRight: {
      ":is([data-size=sm])": spacing["1"],
      ":is([data-size=md])": spacing["2"],
      ":is([data-size=lg])": spacing["3"],
    },
    paddingTop: {
      ":is([data-size=sm])": spacing["1"],
      ":is([data-size=md])": spacing["2"],
      ":is([data-size=lg])": spacing["3"],
    },
  },
  resizable: {
    resize: "both",
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
  isResizable?: boolean;
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
  isResizable = true,
  ...props
}: TextAreaProps) {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const size = sizeProp || use(SizeContext);

  return (
    <SizeContext value={size}>
      <AriaTextField {...props} {...stylex.props(styles.wrapper, style)}>
        <Label>{label}</Label>
        {/* 
        This onClick is specifically for mouse users not clicking directly on the input.
        A keyboard user would not encounter the same issue.
      */}
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
        <div
          {...stylex.props(styles.inputWrapper, ui.bgUi, ui.text)}
          onClick={() => textAreaRef.current?.focus()}
        >
          {prefix != null && (
            <div {...stylex.props(styles.addon)}>{prefix}</div>
          )}
          <AriaTextArea
            data-size={size}
            {...stylex.props(styles.input, isResizable && styles.resizable)}
            ref={textAreaRef}
            placeholder={placeholder}
            rows={rows}
          />
          {suffix != null && (
            <div {...stylex.props(styles.addon)}>{suffix}</div>
          )}
        </div>
        <Description>{description}</Description>
        <FieldErrorMessage>{errorMessage}</FieldErrorMessage>
      </AriaTextField>
    </SizeContext>
  );
}
