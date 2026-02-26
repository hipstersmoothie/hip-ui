"use client";

import * as stylex from "@stylexjs/stylex";
import { use } from "react";

import type { ButtonVariant, Size } from "../types";

import { ButtonGroupContext } from "../button/context";
import { SizeContext } from "../context";
import { animationDuration } from "./animations.stylex";
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
    borderRadius: radius["md"],
    borderStyle: "solid",
    borderWidth: 1,
    gap: spacing["1"],
    alignItems: "center",
    boxSizing: "border-box",
    display: "inline-flex",
    flexShrink: 0,
    fontFamily: fontFamily["sans"],
    fontWeight: fontWeight["medium"],
    justifyContent: "center",
    opacity: {
      ":disabled": 0.5,
    },
    pointerEvents: {
      ":disabled": "none",
    },
    transitionDuration: animationDuration.fast,
    transitionProperty: "all",
    transitionTimingFunction: "ease-in-out",
    whiteSpace: "nowrap",

    // eslint-disable-next-line @stylexjs/no-legacy-contextual-styles, @stylexjs/valid-styles
    ":is(*) svg": {
      flexShrink: 0,
      pointerEvents: "none",
      height: spacing["4"],
      width: spacing["4"],
    },
  },
  small: {
    fontSize: fontSize["xs"],
    lineHeight: lineHeight["xs"],
    height: spacing["7"],
    paddingLeft: {
      default: spacing["2"],
    },
    paddingRight: spacing["2"],

    // eslint-disable-next-line @stylexjs/no-legacy-contextual-styles, @stylexjs/valid-styles
    ":is(*) svg": {
      flexShrink: 0,
      pointerEvents: "none",
      height: spacing["3.5"],
      width: spacing["3.5"],
    },
  },
  medium: {
    gap: spacing["1.5"],
    fontSize: fontSize["sm"],
    lineHeight: lineHeight["xs"],
    height: spacing["8"],
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
      default: slate.component1,
      ":hover": slate.component2,
      ":active": slate.component3,
    },
  },
  tertiary: {
    borderColor: {
      default: "transparent",
      ":hover": slate.component2,
      ":active": slate.component3,
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
    borderRightColor: { ":not(:last-child)": slate.border2 },
  },
  groupVertical: {
    borderBottomLeftRadius: { ":not(:last-child)": 0 },
    borderBottomRightRadius: { ":not(:last-child)": 0 },
    borderTopLeftRadius: { ":not(:first-child)": 0 },
    borderTopRightRadius: { ":not(:first-child)": 0 },
    borderTopWidth: { ":not(:first-child)": 0 },
  },
  secondaryGroupVertical: {
    borderBottomColor: { ":not(:last-child)": slate.border2 },
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
