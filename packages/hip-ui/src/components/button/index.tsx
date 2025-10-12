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
    alignItems: "center",
    borderRadius: radius["md"],
    borderStyle: "solid",
    borderWidth: 0,
    boxSizing: "border-box",
    display: "inline-flex",
    flexShrink: 0,
    fontFamily: fontFamily["sans"],
    fontWeight: fontWeight["medium"],
    gap: spacing["1"],
    justifyContent: "center",
    opacity: {
      ":disabled": 0.5,
    },
    pointerEvents: {
      ":disabled": "none",
    },
    transitionDuration: "100ms",
    transitionProperty: "all",
    transitionTimingFunction: "ease-in-out",
    whiteSpace: "nowrap",

    // eslint-disable-next-line @stylexjs/no-legacy-contextual-styles, @stylexjs/valid-styles
    ":is(*) svg": {
      flexShrink: 0,
      height: spacing["4"],
      pointerEvents: "none",
      width: spacing["4"],
    },
  },
  small: {
    fontSize: fontSize["xs"],
    height: spacing["7"],
    lineHeight: lineHeight["xs"],
    paddingLeft: {
      default: spacing["2"],
    },
    paddingRight: spacing["2"],

    // eslint-disable-next-line @stylexjs/no-legacy-contextual-styles, @stylexjs/valid-styles
    ":is(*) svg": {
      flexShrink: 0,
      height: spacing["3.5"],
      pointerEvents: "none",
      width: spacing["3.5"],
    },
  },
  medium: {
    fontSize: fontSize["sm"],
    gap: spacing["1.5"],
    height: spacing["8"],
    lineHeight: lineHeight["xs"],
    paddingLeft: {
      default: spacing["3"],
      ":has(svg+*)": spacing["2.5"],
    },
    paddingRight: spacing["3"],
  },
  large: {
    gap: spacing["2"],
    height: spacing["10"],
    paddingLeft: {
      default: spacing["4"],
      ":has(svg+*)": spacing["3"],
    },
    paddingRight: spacing["4"],
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
