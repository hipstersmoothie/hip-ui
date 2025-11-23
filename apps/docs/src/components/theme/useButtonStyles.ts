"use client";

import * as stylex from "@stylexjs/stylex";
import { use } from "react";

import { ButtonGroupContext } from "../button/context";
import { SizeContext } from "../context";
import { Size, ButtonVariant } from "../theme/types";
import { animationDuration } from "./animations.stylex";
import { uiColor } from "./color.stylex";
import { mediaQueries } from "./media-queries.stylex";
import { radius } from "./radius.stylex";
import { critical, ui, primary } from "./semantic-color.stylex";
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
    // eslint-disable-next-line @stylexjs/valid-styles
    cornerShape: "squircle",
    borderRadius: {
      default: radius["md"],
      [mediaQueries.supportsSquircle]: radius["full"],
    },
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
  secondary: {
    borderColor: {
      default: uiColor.component1,
      ":hover": uiColor.component2,
      ":active": uiColor.component3,
    },
  },
  tertiary: {
    borderColor: {
      default: "transparent",
      ":hover": uiColor.component2,
      ":active": uiColor.component3,
    },
  },

  groupHorizontal: {
    borderBottomLeftRadius: { ":not(:first-child)": 0 },
    borderBottomRightRadius: { ":not(:last-child)": 0 },
    borderLeftWidth: { ":not(:first-child)": 0 },
    borderTopLeftRadius: { ":not(:first-child)": 0 },
    borderTopRightRadius: { ":not(:last-child)": 0 },
  },
  secondaryGroupedHorizontal: {
    borderRightColor: { ":not(:last-child)": uiColor.border2 },
  },
  groupVertical: {
    borderBottomLeftRadius: { ":not(:last-child)": 0 },
    borderBottomRightRadius: { ":not(:last-child)": 0 },
    borderTopLeftRadius: { ":not(:first-child)": 0 },
    borderTopRightRadius: { ":not(:first-child)": 0 },
    borderTopWidth: { ":not(:first-child)": 0 },
  },
  secondaryGroupedVertical: {
    borderBottomColor: { ":not(:last-child)": uiColor.border2 },
  },
  separate: {
    flexBasis:
      "calc((1 / var(--items-per-row)) * (100% - (var(--toggle-button-group-gap) * (var(--items-per-row) - 1))))",
    flexGrow: 1,
    flexShrink: 1,
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
    group?.orientation === "horizontal" &&
      group.variant === "grouped" &&
      styles.groupHorizontal,
    group?.orientation === "vertical" &&
      group.variant === "grouped" &&
      styles.groupVertical,
    variant === "primary" && [
      primary.bgAction,
      primary.borderInteractive,
      primary.text,
      styles.shadow,
    ],
    variant === "secondary" && [
      ui.bgUi,
      styles.secondary,
      ui.text,
      group?.orientation === "horizontal" &&
        group.variant === "grouped" &&
        styles.secondaryGroupedHorizontal,
      group?.orientation === "vertical" &&
        group.variant === "grouped" &&
        styles.secondaryGroupedVertical,
    ],
    variant === "tertiary" && [
      ui.bgGhost,
      styles.tertiary,
      ui.text,
      group?.orientation === "horizontal" &&
        group.variant === "grouped" &&
        styles.secondaryGroupedHorizontal,
      group?.orientation === "vertical" &&
        group.variant === "grouped" &&
        styles.secondaryGroupedVertical,
    ],
    variant === "outline" && [
      ui.borderInteractive,
      ui.bgGhost,
      ui.text,
      styles.shadow,
    ],
    variant === "critical" && [
      critical.bgSolidAction,
      critical.borderInteractive,
      critical.textContrast,
      styles.shadow,
    ],
    variant === "critical-outline" && [
      critical.borderInteractive,
      critical.bgGhost,
      critical.text,
      styles.shadow,
    ],
    size === "sm" && styles.small,
    size === "md" && styles.medium,
    size === "lg" && styles.large,
    group?.variant === "separate" && styles.separate,
    styles.base,
  ];
};
