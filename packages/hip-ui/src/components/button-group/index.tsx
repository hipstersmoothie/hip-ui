"use client";

import { Group, GroupProps } from "react-aria-components";
import * as stylex from "@stylexjs/stylex";

import { ButtonGroupContext } from "../button";

const styles = stylex.create({
  group: {
    alignItems: "center",
    display: "flex",
  },
});

interface ButtonGroupProps extends Omit<GroupProps, "className" | "style"> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
}

export const ButtonGroup = ({
  children,
  style,
  ...props
}: ButtonGroupProps) => {
  return (
    <ButtonGroupContext.Provider value={true}>
      <Group {...stylex.props(styles.group, style)} {...props}>
        {children}
      </Group>
    </ButtonGroupContext.Provider>
  );
};
