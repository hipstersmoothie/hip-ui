"use client";

import * as stylex from "@stylexjs/stylex";
import { Group, GroupProps } from "react-aria-components";

import { ButtonGroupContext } from "../button/context";

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
}

export const ButtonGroup = ({
  children,
  style,
  orientation = "horizontal",
  ...props
}: ButtonGroupProps) => {
  return (
    <ButtonGroupContext value={orientation}>
      <Group
        {...stylex.props(
          styles.group,
          orientation === "horizontal" && styles.horizontal,
          orientation === "vertical" && styles.vertical,
          style
        )}
        {...props}
      >
        {children}
      </Group>
    </ButtonGroupContext>
  );
};
