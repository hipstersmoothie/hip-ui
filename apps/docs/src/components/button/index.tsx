"use client";

import type { ButtonProps as AriaButtonProps } from "react-aria-components";

import * as stylex from "@stylexjs/stylex";
import { Button as AriaButton } from "react-aria-components";

import type { ButtonVariant, Size, StyleXComponentProps } from "../theme/types";

import { useButtonStyles } from "../theme/useButtonStyles";

export interface ButtonProps extends StyleXComponentProps<AriaButtonProps> {
  variant?: ButtonVariant;
  size?: Size;
}

export const Button = ({
  children,
  style,
  variant = "primary",
  size,
  ...props
}: ButtonProps) => {
  const buttonStyles = useButtonStyles({ variant, size });

  return (
    <AriaButton
      {...stylex.props(buttonStyles, style)}
      data-size={size}
      {...props}
    >
      {children}
    </AriaButton>
  );
};
