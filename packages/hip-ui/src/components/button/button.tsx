"use client";

import { HTMLAttributes } from "react";
import {
  Button as AriaButton,
  ButtonProps as AriaButtonProps,
} from "react-aria-components";
import * as stylex from "@stylexjs/stylex";

import { spacing } from "../theme/spacing.stylex";
import { radius } from "../theme/radius.stylex";
import { gray, primary } from "../theme/semantic-color.stylex";
import {
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
} from "../theme/typography.stylex";
import { shadow } from "../theme/shadow.stylex";

const buttonStyle = stylex.create({
  shadow: {
    boxShadow: shadow["xs"],
  },
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: fontFamily["sans"],
    boxSizing: "border-box",
    borderWidth: 0,
    borderStyle: "solid",
    borderRadius: radius["md"],
    fontWeight: fontWeight["medium"],
    whitespace: "nowrap",
    pointerEvents: {
      ":disabled": "none",
    },
    opacity: {
      ":disabled": 0.5,
    },
    transitionProperty: "all",
    transitionDuration: "100ms",
    transitionTimingFunction: "ease-in-out",
    flexShrink: 0,
    gap: spacing["1"],

    ":is(*) svg": {
      pointerEvents: "none",
      width: spacing["4"],
      height: spacing["4"],
      flexShrink: 0,
    },
  },
  small: {
    paddingLeft: {
      default: spacing["2"],
    },
    paddingRight: spacing["2"],
    height: spacing["7"],
    fontSize: fontSize["xs"],
    lineHeight: lineHeight["xs"],

    ":is(*) svg": {
      pointerEvents: "none",
      width: spacing["3.5"],
      height: spacing["3.5"],
      flexShrink: 0,
    },
  },
  medium: {
    paddingLeft: {
      default: spacing["3"],
      ":has(svg)": spacing["2.5"],
    },
    paddingRight: spacing["3"],
    height: spacing["8"],
    fontSize: fontSize["sm"],
    lineHeight: lineHeight["xs"],
    gap: spacing["1.5"],
  },
  large: {
    paddingLeft: {
      default: spacing["4"],
      ":has(svg)": spacing["3"],
    },
    paddingRight: spacing["4"],
    height: spacing["10"],
    gap: spacing["2"],
  },
  outline: {
    borderWidth: 1,
  },
});

interface ButtonProps
  extends Omit<
      HTMLAttributes<HTMLButtonElement>,
      "onFocus" | "onBlur" | "onClick" | "className" | "style"
    >,
    Pick<AriaButtonProps, "onFocus" | "onBlur" | "onClick"> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
  variant?: "primary" | "secondary" | "tertiary" | "outline";
  size?: "sm" | "md" | "lg";
}

export const Button = ({
  children,
  style,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) => {
  return (
    <AriaButton
      {...stylex.props(
        buttonStyle.base,
        variant === "primary" && [
          primary.bgAction,
          primary.border,
          primary.text,
          buttonStyle.shadow,
        ],
        variant === "secondary" && [gray.bgUi, gray.text],
        variant === "tertiary" && [gray.bgGhost, gray.text],
        variant === "outline" && [
          gray.border,
          gray.bgGhost,
          gray.text,
          buttonStyle.outline,
          buttonStyle.shadow,
        ],
        size === "sm" && buttonStyle.small,
        size === "md" && buttonStyle.medium,
        size === "lg" && buttonStyle.large,
        style
      )}
      {...props}
    >
      {children}
    </AriaButton>
  );
};
