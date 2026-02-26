"use client";

import type { ButtonProps as AriaButtonProps } from "react-aria-components";

import * as stylex from "@stylexjs/stylex";
import { use } from "react";

import type { ButtonVariant, Size, StyleXComponentProps } from "../theme/types";

import { Button } from "../button";
import { SizeContext } from "../context";
import { spacing } from "../theme/spacing.stylex";
import { Tooltip } from "../tooltip";

const styles = stylex.create({
  button: {
    height: {
      ":is([data-size=lg])": spacing["10"],
      ":is([data-size=md])": spacing["8"],
      ":is([data-size=sm])": spacing["7"],
    },
    width: {
      ":is([data-size=lg])": spacing["10"],
      ":is([data-size=md])": spacing["8"],
      ":is([data-size=sm])": spacing["7"],
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

  const buttonChildren =
    typeof children === "function"
      ? (children as () => React.ReactNode)()
      : children;

  if (!label) {
    return (
      <Button
        size={size}
        style={[styles.button as unknown as stylex.StyleXStyles, style]}
        {...props}
      >
        {buttonChildren}
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
        {buttonChildren}
      </Button>
    </Tooltip>
  );
};
