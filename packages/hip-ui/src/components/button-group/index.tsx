"use client";

import * as stylex from "@stylexjs/stylex";
import { useMemo } from "react";
import { Group, GroupProps } from "react-aria-components";

import { ButtonGroupContext } from "../button/context";
import { ButtonGroupVariant } from "../theme/types";

const styles = stylex.create({
  group: {
    display: "flex",
  },
  horizontal: {
    alignItems: "center",
    flexDirection: "row",
  },
  vertical: {
    flexDirection: "column",
  },
});

export interface ButtonGroupProps
  extends Omit<GroupProps, "className" | "style"> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
  orientation?: "horizontal" | "vertical";
  variant?: ButtonGroupVariant;
}

export const ButtonGroup = ({
  children,
  style,
  orientation = "horizontal",
  variant = "grouped",
  ...props
}: ButtonGroupProps) => {
  const contextValue = useMemo(
    () => ({ orientation, variant }),
    [orientation, variant],
  );

  return (
    <ButtonGroupContext value={contextValue}>
      <Group
        {...stylex.props(
          styles.group,
          orientation === "horizontal" && styles.horizontal,
          orientation === "vertical" && styles.vertical,
          style,
        )}
        {...props}
      >
        {children}
      </Group>
    </ButtonGroupContext>
  );
};
