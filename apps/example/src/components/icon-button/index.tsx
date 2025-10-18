"use client";

import { ButtonProps as AriaButtonProps } from "react-aria-components";
import * as stylex from "@stylexjs/stylex";

import { Tooltip } from "../tooltip";
import { Button } from "../button";
import { spacing } from "../theme/spacing.stylex";
import { ButtonVariant, Size } from "../types";
import { use } from "react";
import { SizeContext } from "../context";

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
  variant?: ButtonVariant;
  size?: Size;
  label: string;
}

export const IconButton = ({
  children,
  size: sizeProp,
  label,
  style,
  ...props
}: IconButtonProps) => {
  const size = sizeProp || use(SizeContext);

  return (
    <Tooltip text={label}>
      <Button size={size} style={[styles[size], style]} {...props}>
        {children}
      </Button>
    </Tooltip>
  );
};
