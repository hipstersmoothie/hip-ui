import * as stylex from "@stylexjs/stylex";
import { Children, use } from "react";
import {
  ToggleButtonProps as AriaToggleButtonProps,
  ToggleButton as AriaToggleButton,
} from "react-aria-components";

import { SizeContext } from "../context";
import { primaryColor, uiColor } from "../theme/color.stylex";
import { spacing } from "../theme/spacing.stylex";
import { ButtonVariant, Size, StyleXComponentProps } from "../theme/types";
import { useButtonStyles } from "../theme/useButtonStyles";

const styles = stylex.create({
  primarySelected: {
    backgroundColor: {
      default: primaryColor.solid1,
      ":hover": primaryColor.solid2,
      ":active": primaryColor.text1,
    },
    color: "light-dark(white, black)",
  },
  secondarySelected: {
    borderColor: {
      default: uiColor.border1,
      ":hover": uiColor.border2,
      ":active": uiColor.border3,
    },
    backgroundColor: {
      default: uiColor.border1,
      ":hover": uiColor.border2,
      ":active": uiColor.border3,
    },
  },
  tertiarySelected: {
    borderColor: {
      default: uiColor.border1,
      ":hover": uiColor.border2,
      ":active": uiColor.border3,
    },
    backgroundColor: {
      default: uiColor.border1,
      ":hover": uiColor.border2,
      ":active": uiColor.border3,
    },
  },
  outlineSelected: {
    borderColor: {
      default: uiColor.border1,
      ":hover": uiColor.border2,
      ":active": uiColor.border3,
    },
    backgroundColor: {
      default: uiColor.border1,
      ":hover": uiColor.border2,
      ":active": uiColor.border3,
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
  extends StyleXComponentProps<Omit<AriaToggleButtonProps, "children">> {
  variant?: Exclude<ButtonVariant, "critical" | "critical-outline">;
  size?: Size;
  children?: React.ReactNode;
}

export function ToggleButton({
  style,
  variant = "primary",
  size: sizeProp,
  children,
  ...props
}: ToggleButtonProps) {
  const size = sizeProp || use(SizeContext);
  const buttonStyles = useButtonStyles({ variant, size });
  const toggleButtonStyles = (isSelected?: boolean) =>
    stylex.props(
      buttonStyles,
      size === "sm" && styles.sm,
      size === "md" && styles.md,
      size === "lg" && styles.lg,
      isSelected
        ? [
            variant === "primary" && styles.primarySelected,
            variant === "secondary" && styles.secondarySelected,
            variant === "tertiary" && styles.tertiarySelected,
            variant === "outline" && styles.outlineSelected,
          ]
        : undefined,
      style,
    );

  return (
    <AriaToggleButton
      {...props}
      {...toggleButtonStyles()}
      className={({ isSelected }) =>
        toggleButtonStyles(isSelected).className || ""
      }
    >
      {/* eslint-disable-next-line @eslint-react/no-children-map */}
      {Children.map(children, (child, index) =>
        typeof child === "string" ? (
          <span key={`${child}-${index.toString()}`}>{child}</span>
        ) : (
          child
        ),
      )}
    </AriaToggleButton>
  );
}
