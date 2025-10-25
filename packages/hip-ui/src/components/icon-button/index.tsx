"use client";

import * as stylex from "@stylexjs/stylex";
import { use } from "react";
import { ButtonProps as AriaButtonProps } from "react-aria-components";

import { Button } from "../button";
import { SizeContext } from "../context";
import { spacing } from "../theme/spacing.stylex";
import { ButtonVariant, Size, StyleXComponentProps } from "../theme/types";
import { Tooltip } from "../tooltip";

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

interface IconButtonProps extends StyleXComponentProps<AriaButtonProps> {
  variant?: ButtonVariant;
  size?: Size;
  label: string;
  tooltipOpen?: boolean;
  onTooltipOpenChange?: (isOpen: boolean) => void;
}

export const IconButton = ({
  children,
  size: sizeProp,
  label,
  style,
  tooltipOpen,
  onTooltipOpenChange,
  ...props
}: IconButtonProps) => {
  const size = sizeProp || use(SizeContext);

  return (
    <Tooltip
      text={label}
      isOpen={tooltipOpen}
      onOpenChange={onTooltipOpenChange}
    >
      <Button size={size} style={[styles[size], style]} {...props}>
        {children}
      </Button>
    </Tooltip>
  );
};
