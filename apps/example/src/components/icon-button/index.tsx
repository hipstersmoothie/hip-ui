"use client";

import { ButtonProps as AriaButtonProps } from "react-aria-components";
import * as stylex from "@stylexjs/stylex";

import { Tooltip } from "../tooltip";
import { Button } from "../button";
import { spacing } from "../theme/spacing.stylex";

const styles = stylex.create({
  sm: {
    height: spacing["7"],
    width: spacing["7"],
  },
  md: {
    height: spacing["8"],
    width: spacing["8"],
  },
  lg: {
    height: spacing["10"],
    width: spacing["10"],
  },
});

interface IconButtonProps extends Omit<AriaButtonProps, "className" | "style"> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
  variant?: "primary" | "secondary" | "tertiary" | "outline";
  size?: "sm" | "md" | "lg";
  label: string;
}

export const IconButton = ({
  children,
  size = "md",
  label,
  style,
  ...props
}: IconButtonProps) => {
  return (
    <Tooltip text={label}>
      <Button size={size} style={[styles[size], style]} {...props}>
        {children}
      </Button>
    </Tooltip>
  );
};
