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
  button: {
    height: {
      ":is([data-size=sm])": spacing["7"],
      ":is([data-size=md])": spacing["8"],
      ":is([data-size=lg])": spacing["10"],
    },
    width: {
      ":is([data-size=sm])": spacing["7"],
      ":is([data-size=md])": spacing["8"],
      ":is([data-size=lg])": spacing["10"],
    },
  },
});

interface IconBaseButtonProps extends StyleXComponentProps<AriaButtonProps> {
  variant?: ButtonVariant;
  size?: Size;
}

interface IconButtonWithLabelProps extends IconBaseButtonProps {
  label: string;
  tooltipOpen?: boolean;
  onTooltipOpenChange?: (isOpen: boolean) => void;
}

interface IconButtonWithAriaLabelProps extends IconBaseButtonProps {
  "aria-label": string;
  label?: never;
  tooltipOpen?: never;
  onTooltipOpenChange?: never;
}

type IconButtonProps = IconButtonWithLabelProps | IconButtonWithAriaLabelProps;

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

  if (!label) {
    return (
      <Button
        size={size}
        style={[styles.button as unknown as stylex.StyleXStyles, style]}
        {...props}
      >
        {children}
      </Button>
    );
  }

  return (
    <Tooltip
      text={label}
      isOpen={tooltipOpen}
      onOpenChange={onTooltipOpenChange}
    >
      <Button
        size={size}
        style={[styles.button as unknown as stylex.StyleXStyles, style]}
        {...props}
      >
        {children}
      </Button>
    </Tooltip>
  );
};
