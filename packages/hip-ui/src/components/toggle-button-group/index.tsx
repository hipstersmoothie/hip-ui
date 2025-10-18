"use client";

import {
  ToggleButtonGroupProps as AriaToggleButtonGroupProps,
  ToggleButtonGroup as AriaToggleButtonGroup,
} from "react-aria-components";
import * as stylex from "@stylexjs/stylex";
import { ButtonGroupContext } from "../button/context";
import { use } from "react";

const styles = stylex.create({
  group: {
    alignItems: "center",
    display: "flex",
  },
  horizontal: {
    flexDirection: "row",
  },
  vertical: {
    flexDirection: "column",
  },
  contents: {
    display: "contents",
  },
  horizontalContents: {
    borderBottomLeftRadius: { ":is(:not(:first-child))  *": "0" },
    borderBottomRightRadius: { ":is(:not(:last-child))  *": "0" },
    borderLeftWidth: { ":is(:not(:first-child))  *": "0" },
    borderRightWidth: { ":is(:not(:last-child))  *": "0" },
    borderTopLeftRadius: { ":is(:not(:first-child))  *": "0" },
    borderTopRightRadius: { ":is(:not(:last-child))  *": "0" },
  },
  verticalContents: {
    // eslint-disable-next-line @stylexjs/valid-styles
    borderBottomLeftWidth: { ":is(:not(:first-child))  *": "0" },
    borderBottomRightRadius: { ":is(:not(:last-child))  *": "0" },
    borderBottomWidth: { ":is(:not(:last-child))  *": "0" },
    borderTopLeftRadius: { ":is(:not(:first-child))  *": "0" },
    borderTopRightRadius: { ":is(:not(:first-child))  *": "0" },
    borderTopWidth: { ":is(:not(:first-child))  *": "0" },
  },
});

interface ToggleButtonGroupProps
  extends Omit<AriaToggleButtonGroupProps, "className" | "style" | "children"> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
  orientation?: "horizontal" | "vertical";
  children?: React.ReactNode;
}

export const ToggleButtonGroup = ({
  children,
  style,
  orientation: orientationProp = "horizontal",
  ...props
}: ToggleButtonGroupProps) => {
  const groupOrientation = use(ButtonGroupContext);
  const isInGroup = groupOrientation !== undefined;
  const orientation = groupOrientation || orientationProp;

  return (
    <ButtonGroupContext.Provider value={orientation}>
      <AriaToggleButtonGroup
        {...stylex.props(
          isInGroup
            ? [
                styles.contents,
                orientation === "horizontal" && styles.horizontalContents,
                orientation === "vertical" && styles.verticalContents,
              ]
            : [
                styles.group,
                orientation === "horizontal" && styles.horizontal,
                orientation === "vertical" && styles.vertical,
              ],
          style
        )}
        {...props}
      >
        {children}
      </AriaToggleButtonGroup>
    </ButtonGroupContext.Provider>
  );
};
