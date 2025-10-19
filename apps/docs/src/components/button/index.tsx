"use client";

import * as stylex from "@stylexjs/stylex";
import {
  Button as AriaButton,
  ButtonProps as AriaButtonProps,
} from "react-aria-components";

import { Size, ButtonVariant } from "../theme/types";
import { useButtonStyles } from "../theme/useButtonStyles";

export interface ButtonProps
  extends Omit<AriaButtonProps, "className" | "style"> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
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
    <AriaButton {...stylex.props(buttonStyles, style)} {...props}>
      {children}
    </AriaButton>
  );
};
