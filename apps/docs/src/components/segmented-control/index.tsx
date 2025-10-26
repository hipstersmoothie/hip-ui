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
import { mediaQueries } from "../theme/media-queries.stylex";
import { radius } from "../theme/radius.stylex";
import { uiColor } from "../theme/semantic-color.stylex";
import { spacing } from "../theme/spacing.stylex";
import { Size, StyleXComponentProps } from "../theme/types";

const styles = stylex.create({
  group: {
    alignItems: "center",
    backgroundColor: uiColor.component1,
    borderRadius: radius.lg,
    display: "flex",
    gap: spacing["2"],
    padding: spacing["1.5"],
  },
  item: {
    alignItems: "center",
    backgroundColor: "transparent",
    borderRadius: radius.md,
    borderWidth: 0,
    boxSizing: "border-box",
    color: {
      default: uiColor.text1,
      ":is([data-selected])": uiColor.text2,
    },
    display: "flex",
    flexGrow: 1,
    height: {
      ":is([data-size=sm] *)": spacing["6"],
      ":is([data-size=md] *)": spacing["8"],
      ":is([data-size=lg] *)": spacing["10"],
    },
    justifyContent: "center",
    paddingBottom: spacing["1"],
    paddingLeft: spacing["2"],
    paddingRight: spacing["2"],
    paddingTop: spacing["1"],
    position: "relative",
    zIndex: {
      default: 1,
      ":is([data-selected])": 0,
    },

    // eslint-disable-next-line @stylexjs/no-legacy-contextual-styles, @stylexjs/valid-styles
    ":is(*) svg": {
      flexShrink: 0,
      height: spacing["4"],
      pointerEvents: "none",
      width: spacing["4"],
    },
  },
  selectionIndicator: {
    backgroundColor: uiColor.bgSubtle,
    borderRadius: radius.md,
    height: "100%",
    left: 0,
    outlineColor: uiColor.border2,
    outlineStyle: "solid",
    outlineWidth: "1px",
    position: "absolute",
    top: 0,
    transitionDuration: "200ms",
    transitionProperty: {
      default: "translate, width",
      [mediaQueries.reducedMotion]: "none",
    },
    width: "100%",
    zIndex: -1,
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
      {...stylex.props(styles.group, style)}
      {...props}
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
    <AriaToggleButton {...stylex.props(styles.item, style)} {...props}>
      <SelectionIndicator {...stylex.props(styles.selectionIndicator)} />
      {children}
    </AriaToggleButton>
  );
};
