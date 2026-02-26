"use client";

import * as stylex from "@stylexjs/stylex";
import { use } from "react";

import type { ButtonVariant, Size } from "../theme/types";

import { ButtonGroupContext } from "../button/context";
import { SizeContext } from "../context";
import { animationDuration } from "./animations.stylex";
import { uiColor } from "./color.stylex";
import { mediaQueries } from "./media-queries.stylex";
import { radius } from "./radius.stylex";
import { critical, primary, ui } from "./semantic-color.stylex";
import { shadow } from "./shadow.stylex";
import { spacing } from "./spacing.stylex";
import { fontFamily, fontSize, fontWeight } from "./typography.stylex";

const styles = stylex.create({
  shadow: {
    boxShadow: shadow["xs"],
  },
  base: {
    borderRadius: {
      default: radius["lg"],
      [mediaQueries.supportsSquircle]: radius["full"],
    },
    borderStyle: "solid",
    borderWidth: 1,

    cornerShape: "squircle",
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
    transitionProperty: "background-color, color",
    transitionTimingFunction: "ease-in-out",
    userSelect: "none",
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
    height: spacing["8"],
    paddingLeft: {
      default: spacing["3"],
      ":has(svg+*)": spacing["2.5"],
    },
    paddingRight: spacing["3"],
  },
  large: {
    gap: spacing["2"],
    fontSize: fontSize["sm"],
    height: spacing["10"],
    paddingLeft: {
      default: spacing["4"],
      ":has(svg+*)": spacing["3"],
    },
    paddingRight: spacing["4"],
  },
  xl: {
    gap: spacing["2"],
    fontSize: fontSize["lg"],
    height: spacing["12"],
    paddingLeft: {
      default: spacing["5"],
      ":has(svg+*)": spacing["4"],
    },
    paddingRight: spacing["5"],
  },
  secondary: {
    borderColor: {
      default: uiColor.component1,
      ":is([data-hovered])": uiColor.component2,
      ":is([data-pressed])": uiColor.component3,
    },
  },
  tertiary: {
    borderColor: {
      default: "transparent",
      ":is([data-hovered])": uiColor.component2,
      ":is([data-pressed])": uiColor.component3,
    },
  },

  groupHorizontal: {
    borderBottomLeftRadius: { ":not(:first-child)": `0 !important` },
    borderBottomRightRadius: { ":not(:last-child)": `0 !important` },
    borderLeftWidth: { ":not(:first-child)": `0 !important` },
    borderTopLeftRadius: { ":not(:first-child)": `0 !important` },
    borderTopRightRadius: { ":not(:last-child)": `0 !important` },
  },
  secondaryGroupedHorizontal: {
    borderRightColor: { ":not(:last-child)": uiColor.border2 },
  },
  groupVertical: {
    borderBottomLeftRadius: { ":not(:last-child)": `0 !important` },
    borderBottomRightRadius: { ":not(:last-child)": `0 !important` },
    borderTopLeftRadius: { ":not(:first-child)": `0 !important` },
    borderTopRightRadius: { ":not(:first-child)": `0 !important` },
    borderTopWidth: { ":not(:first-child)": `0 !important` },
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
  size?: Size | "xl";
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
      critical.bgUi,
      critical.text,
      styles.shadow,
    ],
    size === "sm" && styles.small,
    size === "md" && styles.medium,
    size === "lg" && styles.large,
    size === "xl" && styles.xl,
    group?.variant === "separate" && styles.separate,
    styles.base,
  ];
};
