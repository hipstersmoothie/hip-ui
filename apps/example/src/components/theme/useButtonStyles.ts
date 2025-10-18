"use client";

import * as stylex from "@stylexjs/stylex";
import { use } from "react";

import { ButtonGroupContext } from "../button/context";
import { SizeContext } from "../context";
import { Size, ButtonVariant } from "../types";
import { slate } from "./colors.stylex";
import { radius } from "./radius.stylex";
import { critical, gray, primary } from "./semantic-color.stylex";
import { shadow } from "./shadow.stylex";
import { spacing } from "./spacing.stylex";
import {
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
} from "./typography.stylex";

const styles = stylex.create({
  shadow: {
    boxShadow: shadow["xs"],
  },
  base: {
    alignItems: "center",
    borderRadius: radius["md"],
    borderStyle: "solid",
    borderWidth: 1,
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
  secondary: {
    borderColor: {
      default: slate[3],
      ":hover": slate[4],
      ":active": slate[5],
    },
  },
  tertiary: {
    borderColor: {
      default: "transparent",
      ":hover": slate[4],
      ":active": slate[5],
    },
  },

  groupHorizontal: {
    borderBottomLeftRadius: { ":not(:first-child)": 0 },
    borderBottomRightRadius: { ":not(:last-child)": 0 },
    borderLeftWidth: { ":not(:first-child)": 0 },
    borderTopLeftRadius: { ":not(:first-child)": 0 },
    borderTopRightRadius: { ":not(:last-child)": 0 },
  },
  secondaryGroupHorizontal: {
    borderRightColor: { ":not(:last-child)": slate[7] },
  },
  groupVertical: {
    borderBottomLeftRadius: { ":not(:last-child)": 0 },
    borderBottomRightRadius: { ":not(:last-child)": 0 },
    borderTopLeftRadius: { ":not(:first-child)": 0 },
    borderTopRightRadius: { ":not(:first-child)": 0 },
    borderTopWidth: { ":not(:first-child)": 0 },
  },
  secondaryGroupVertical: {
    borderBottomColor: { ":not(:last-child)": slate[7] },
  },
});

export const useButtonStyles = ({
  variant = "primary",
  size: sizeProp,
}: {
  variant?: ButtonVariant;
  size?: Size;
}) => {
  const size = sizeProp || use(SizeContext);
  const group = use(ButtonGroupContext);

  return [
    styles.base,
    group === "horizontal" && styles.groupHorizontal,
    group === "vertical" && styles.groupVertical,
    variant === "primary" && [
      primary.bgAction,
      primary.borderInteractive,
      primary.text,
      styles.shadow,
    ],
    variant === "secondary" && [
      gray.bgUi,
      styles.secondary,
      gray.text,
      group === "horizontal" && styles.secondaryGroupHorizontal,
      group === "vertical" && styles.secondaryGroupVertical,
    ],
    variant === "tertiary" && [
      gray.bgGhost,
      styles.tertiary,
      gray.text,
      group === "horizontal" && styles.secondaryGroupHorizontal,
      group === "vertical" && styles.secondaryGroupVertical,
    ],
    variant === "outline" && [
      gray.borderInteractive,
      gray.bgGhost,
      gray.text,
      styles.outline,
      styles.shadow,
    ],
    variant === "critical" && [
      critical.bgSolidAction,
      critical.borderInteractive,
      critical.textContrast,
      styles.shadow,
    ],
    size === "sm" && styles.small,
    size === "md" && styles.medium,
    size === "lg" && styles.large,
  ];
};
