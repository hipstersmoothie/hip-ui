"use client";

import * as stylex from "@stylexjs/stylex";
import { use } from "react";
import {
  ToggleButtonGroupProps as AriaToggleButtonGroupProps,
  ToggleButtonGroup as AriaToggleButtonGroup,
  ToggleButton as AriaToggleButton,
  ToggleButtonProps as AriaToggleButtonProps,
  SelectionIndicator,
} from "react-aria-components";

import { SizeContext } from "../context";
import { animationDuration } from "../theme/animations.stylex";
import { uiColor } from "../theme/color.stylex";
import { mediaQueries } from "../theme/media-queries.stylex";
import { radius } from "../theme/radius.stylex";
import { shadow } from "../theme/shadow.stylex";
import { spacing } from "../theme/spacing.stylex";
import { Size, StyleXComponentProps } from "../theme/types";

const styles = stylex.create({
  group: {
    // eslint-disable-next-line @stylexjs/valid-styles
    cornerShape: "squircle",
    padding: spacing["1"],
    borderRadius: {
      default: radius["lg"],
      [mediaQueries.supportsSquircle]: radius["4xl"],
    },
    gap: spacing["2"],
    alignItems: "center",
    backgroundColor: uiColor.component1,
    boxShadow: "inset 0 0 10px 1px rgba(0, 0, 0, 0.1  )",
    boxSizing: "border-box",
    display: "flex",
    height: {
      ":is([data-size=lg])": spacing["11"],
      ":is([data-size=md])": spacing["9"],
      ":is([data-size=sm])": spacing["7"],
    },
  },
  item: {
    // eslint-disable-next-line @stylexjs/valid-styles
    cornerShape: "squircle",
    borderRadius: {
      default: radius["md"],
      [mediaQueries.supportsSquircle]: radius["3xl"],
    },
    borderWidth: 0,
    alignItems: "center",
    backgroundColor: "transparent",
    boxSizing: "border-box",
    color: {
      default: uiColor.text1,
      ":is([data-selected])": uiColor.text2,
      ":hover": uiColor.text2,
    },
    display: "flex",
    flexGrow: 1,
    justifyContent: "center",
    position: "relative",
    zIndex: {
      default: 1,
      ":is([data-selected])": 0,
    },
    height: "100%",
    paddingBottom: spacing["1"],
    paddingLeft: spacing["2"],
    paddingRight: spacing["2"],
    paddingTop: spacing["1"],

    // eslint-disable-next-line @stylexjs/no-legacy-contextual-styles, @stylexjs/valid-styles
    ":is(*) svg": {
      flexShrink: 0,
      pointerEvents: "none",
      height: spacing["4"],
      width: spacing["4"],
    },
  },
  selectionIndicator: {
    // eslint-disable-next-line @stylexjs/valid-styles
    cornerShape: "squircle",
    borderRadius: {
      default: radius["md"],
      [mediaQueries.supportsSquircle]: radius["3xl"],
    },
    backgroundColor: uiColor.bgSubtle,
    boxShadow: shadow.sm,
    position: "absolute",
    transitionDuration: animationDuration.slow,
    transitionProperty: {
      default: "translate, width",
      [mediaQueries.reducedMotion]: "none",
    },
    zIndex: -1,
    height: "100%",
    left: 0,
    top: 0,
    width: "100%",
  },
});

export interface SegmentedControlProps
  extends StyleXComponentProps<
    Omit<
      AriaToggleButtonGroupProps,
      "children" | "disallowEmptySelection" | "selectionMode"
    >
  > {
  children?: React.ReactNode;
  size?: Size;
}

export const SegmentedControl = ({
  children,
  style,
  size: sizeProp,
  ...props
}: SegmentedControlProps) => {
  const size = sizeProp ?? use(SizeContext);

  return (
    <AriaToggleButtonGroup
      disallowEmptySelection
      selectionMode="single"
      data-size={size}
      {...props}
      {...stylex.props(styles.group, style)}
    >
      {children}
    </AriaToggleButtonGroup>
  );
};

export interface SegmentedControlItemProps
  extends StyleXComponentProps<Omit<AriaToggleButtonProps, "children">> {
  children?: React.ReactNode;
}

export const SegmentedControlItem = ({
  children,
  style,
  ...props
}: SegmentedControlItemProps) => {
  return (
    <AriaToggleButton {...props} {...stylex.props(styles.item, style)}>
      <SelectionIndicator {...stylex.props(styles.selectionIndicator)} />
      {children}
    </AriaToggleButton>
  );
};
