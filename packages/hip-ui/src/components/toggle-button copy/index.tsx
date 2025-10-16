import { ToggleButtonProps as AriaToggleButtonProps } from "react-aria-components";
import { ToggleButton as AriaToggleButton } from "react-aria-components";
import * as stylex from "@stylexjs/stylex";

import { spacing } from "../theme/spacing.stylex";
import { plum, slate } from "../theme/colors.stylex";
import { Children } from "react";
import { useButtonStyles } from "../theme/useButtonStyles";

const styles = stylex.create({
  primarySelected: {
    backgroundColor: {
      default: plum[9],
      ":hover": plum[10],
      ":active": plum[11],
    },
    color: "light-dark(white, black)",
  },
  secondarySelected: {
    backgroundColor: {
      default: slate[6],
      ":hover": slate[7],
      ":active": slate[8],
    },
    borderColor: {
      default: slate[6],
      ":hover": slate[7],
      ":active": slate[8],
    },
  },
  tertiarySelected: {
    backgroundColor: {
      default: slate[6],
      ":hover": slate[7],
      ":active": slate[8],
    },
    borderColor: {
      default: slate[6],
      ":hover": slate[7],
      ":active": slate[8],
    },
  },
  outlineSelected: {
    backgroundColor: {
      default: slate[6],
      ":hover": slate[7],
      ":active": slate[8],
    },
    borderColor: {
      default: slate[6],
      ":hover": slate[7],
      ":active": slate[8],
    },
  },
  sm: {
    paddingLeft: {
      ":has(> * + *, > *:not(svg):only-child)": spacing["2"],
    },
    paddingRight: {
      ":has(> * + *, > *:not(svg):only-child)": spacing["2"],
    },
    width: {
      ":has(svg:only-child)": spacing["7"],
    },
  },
  md: {
    paddingLeft: {
      ":has(> * + *, > *:not(svg):only-child)": spacing["3"],
    },
    paddingRight: {
      ":has(> * + *, > *:not(svg):only-child)": spacing["3"],
    },
    width: {
      ":has(svg:only-child)": spacing["8"],
    },
  },
  lg: {
    paddingLeft: {
      ":has(> * + *, > *:not(svg):only-child)": spacing["4"],
    },
    paddingRight: {
      ":has(> * + *, > *:not(svg):only-child)": spacing["4"],
    },
    width: {
      ":has(svg:only-child)": spacing["10"],
    },
  },
});

export interface ToggleButtonProps
  extends Omit<AriaToggleButtonProps, "style" | "className" | "children"> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
  variant?: "primary" | "secondary" | "tertiary" | "outline";
  size?: "sm" | "md" | "lg";
  children?: React.ReactNode;
}

export function ToggleButton({
  style,
  variant = "primary",
  size = "md",
  children,
  ...props
}: ToggleButtonProps) {
  const buttonStyles = useButtonStyles({ variant, size });
  const toggleButtonStyles = (isSelected?: boolean) =>
    stylex.props(
      buttonStyles,
      styles[size],
      isSelected ? styles[`${variant}Selected`] : undefined,
      style
    );

  return (
    <AriaToggleButton
      {...props}
      {...toggleButtonStyles()}
      className={({ isSelected }) =>
        toggleButtonStyles(isSelected).className || ""
      }
    >
      {Children.map(children, (child, index) =>
        typeof child === "string" ? (
          <span key={`${child}-${index}`}>{child}</span>
        ) : (
          child
        )
      )}
    </AriaToggleButton>
  );
}
