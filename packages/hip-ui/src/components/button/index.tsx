"use client";

import type { ButtonProps as AriaButtonProps } from "react-aria-components";

import * as stylex from "@stylexjs/stylex";
import { Button as AriaButton } from "react-aria-components";

import type { ButtonVariant, Size, StyleXComponentProps } from "../theme/types";

import { ProgressCircle } from "../progress-circle";
import { animationDuration } from "../theme/animations.stylex";
import { spacing } from "../theme/spacing.stylex";
import { useButtonStyles } from "../theme/useButtonStyles";

const styles = stylex.create({
  content: {
    gap: spacing["2"],
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    transitionDuration: animationDuration.fast,
    transitionProperty: "opacity",
    transitionTimingFunction: "ease-in-out",
  },
  contentPending: {
    opacity: 0,
  },
  spinner: {
    position: "absolute",
  },
  link: {
    cursor: "pointer",
  },
});

export interface ButtonProps extends StyleXComponentProps<
  Omit<AriaButtonProps, "children">
> {
  variant?: ButtonVariant;
  size?: Size | "xl";
  isPending?: boolean;
  children?: React.ReactNode;
}

export const Button = ({
  children,
  style,
  variant = "primary",
  size,
  isPending = false,
  isDisabled,
  ...props
}: ButtonProps) => {
  const buttonStyles = useButtonStyles({ variant, size });
  const isHref = "href" in props;

  return (
    <AriaButton
      {...props}
      {...stylex.props(buttonStyles, isHref && styles.link, style)}
      data-size={size}
      data-pending={isPending || undefined}
      isDisabled={isDisabled || isPending}
    >
      {isPending && (
        <ProgressCircle
          isIndeterminate
          size="sm"
          style={styles.spinner}
          aria-label="Loading"
        />
      )}
      <span
        {...stylex.props(styles.content, isPending && styles.contentPending)}
      >
        {children}
      </span>
    </AriaButton>
  );
};
