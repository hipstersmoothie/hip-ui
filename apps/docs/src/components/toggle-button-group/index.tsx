"use client";

import * as stylex from "@stylexjs/stylex";
import { use, useMemo } from "react";
import {
  ToggleButtonGroupProps as AriaToggleButtonGroupProps,
  ToggleButtonGroup as AriaToggleButtonGroup,
} from "react-aria-components";

import { ButtonGroupContext } from "../button/context";
import { spacing } from "../theme/spacing.stylex";

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
  horizontalGroupedContents: {
    borderBottomLeftRadius: { ":is(:not(:first-child))  *": "0" },
    borderBottomRightRadius: { ":is(:not(:last-child))  *": "0" },
    borderLeftWidth: { ":is(:not(:first-child))  *": "0" },
    borderRightWidth: { ":is(:not(:last-child))  *": "0" },
    borderTopLeftRadius: { ":is(:not(:first-child))  *": "0" },
    borderTopRightRadius: { ":is(:not(:last-child))  *": "0" },
  },
  verticalGroupedContents: {
    // eslint-disable-next-line @stylexjs/valid-styles
    borderBottomLeftWidth: { ":is(:not(:first-child))  *": "0" },
    borderBottomRightRadius: { ":is(:not(:last-child))  *": "0" },
    borderBottomWidth: { ":is(:not(:last-child))  *": "0" },
    borderTopLeftRadius: { ":is(:not(:first-child))  *": "0" },
    borderTopRightRadius: { ":is(:not(:first-child))  *": "0" },
    borderTopWidth: { ":is(:not(:first-child))  *": "0" },
  },
  separate: (itemsPerRow?: number) => ({
    "--items-per-row": itemsPerRow,
    "--toggle-button-group-gap": spacing["2"],
    flexWrap: "wrap",
    gap: "var(--toggle-button-group-gap)",
  }),
});

interface ToggleButtonGroupBaseProps
  extends Omit<AriaToggleButtonGroupProps, "className" | "style" | "children"> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
  orientation?: "horizontal" | "vertical";
  children?: React.ReactNode;
}

interface ToggleButtonGroupSeparateProps extends ToggleButtonGroupBaseProps {
  itemsPerRow: number;
  variant: "separate";
}

interface ToggleButtonGroupGroupedProps extends ToggleButtonGroupBaseProps {
  variant?: "grouped";
  itemsPerRow?: never;
}

type ToggleButtonGroupProps =
  | ToggleButtonGroupSeparateProps
  | ToggleButtonGroupGroupedProps;

export const ToggleButtonGroup = ({
  children,
  style,
  orientation: orientationProp = "horizontal",
  variant = "grouped",
  itemsPerRow,
  ...props
}: ToggleButtonGroupProps) => {
  const groupOrientation = use(ButtonGroupContext);
  const isInGroup = groupOrientation?.orientation !== undefined;
  const orientation = groupOrientation?.orientation || orientationProp;

  let stylesToApply = [];

  if (isInGroup && variant === "grouped") {
    stylesToApply = [
      styles.contents,
      orientation === "horizontal" && styles.horizontalGroupedContents,
      orientation === "vertical" && styles.verticalGroupedContents,
    ];
  } else if (isInGroup && variant === "separate") {
    stylesToApply = [styles.contents];
  } else {
    stylesToApply = [
      styles.group,
      orientation === "horizontal" && styles.horizontal,
      orientation === "vertical" && styles.vertical,
      variant === "separate" && styles.separate(itemsPerRow),
    ];
  }

  const contextValue = useMemo(
    () => ({ orientation, variant }),
    [orientation, variant],
  );

  return (
    <ButtonGroupContext value={contextValue}>
      <AriaToggleButtonGroup {...stylex.props(stylesToApply, style)} {...props}>
        {children}
      </AriaToggleButtonGroup>
    </ButtonGroupContext>
  );
};
