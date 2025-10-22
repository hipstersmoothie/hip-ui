import * as stylex from "@stylexjs/stylex";
import { Children, use } from "react";
import {
  ToggleButtonProps as AriaToggleButtonProps,
  ToggleButton as AriaToggleButton,
} from "react-aria-components";

import { SizeContext } from "../context";
import { primaryColor, uiColor } from "../theme/semantic-color.stylex";
import { spacing } from "../theme/spacing.stylex";
import { ButtonVariant, Size } from "../theme/types";
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
    backgroundColor: {
      default: uiColor.border1,
      ":hover": uiColor.border2,
      ":active": uiColor.border3,
    },
    borderColor: {
      default: uiColor.border1,
      ":hover": uiColor.border2,
      ":active": uiColor.border3,
    },
  },
  tertiarySelected: {
    backgroundColor: {
      default: uiColor.border1,
      ":hover": uiColor.border2,
      ":active": uiColor.border3,
    },
    borderColor: {
      default: uiColor.border1,
      ":hover": uiColor.border2,
      ":active": uiColor.border3,
    },
  },
  outlineSelected: {
    backgroundColor: {
      default: uiColor.border1,
      ":hover": uiColor.border2,
      ":active": uiColor.border3,
    },
    borderColor: {
      default: uiColor.border1,
      ":hover": uiColor.border2,
      ":active": uiColor.border3,
    },
  },
  "critical-outlineSelected": {
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
  extends Omit<AriaToggleButtonProps, "style" | "className" | "children"> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
  variant?: Exclude<ButtonVariant, "critical">;
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
      styles[size],
      isSelected ? styles[`${variant}Selected`] : undefined,
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
