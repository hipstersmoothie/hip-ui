import * as stylex from "@stylexjs/stylex";
import { Children, use } from "react";
import {
  ToggleButtonProps as AriaToggleButtonProps,
  ToggleButton as AriaToggleButton,
} from "react-aria-components";

import { SizeContext } from "../context";
import { plum, slate } from "../theme/colors.stylex";
import { spacing } from "../theme/spacing.stylex";
import { useButtonStyles } from "../theme/useButtonStyles";
import { ButtonVariant, Size } from "../types";

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
  variant?: ButtonVariant;
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
