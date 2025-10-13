import { ToggleButtonProps as AriaToggleButtonProps } from "react-aria-components";
import { ToggleButton as AriaToggleButton } from "react-aria-components";
import * as stylex from "@stylexjs/stylex";

import { fontFamily, fontWeight } from "../theme/typography.stylex";
import { gray, primary } from "../theme/semantic-color.stylex";
import { spacing } from "../theme/spacing.stylex";
import { radius } from "../theme/radius.stylex";
import { plum, slate } from "../theme/colors.stylex";
import { Tooltip } from "../tooltip";

const styles = stylex.create({
  base: {
    alignItems: "center",
    borderRadius: radius["md"],
    borderStyle: "solid",
    borderWidth: 1,
    boxSizing: "border-box",
    display: "inline-flex",
    flexShrink: 0,
    fontFamily: fontFamily["sans"],
    fontWeight: fontWeight["medium"],
    gap: spacing["1"],
    justifyContent: "center",
    opacity: {
      ":disabled": 0.5,
    },
    pointerEvents: {
      ":disabled": "none",
    },
    transitionDuration: "100ms",
    transitionProperty: "all",
    transitionTimingFunction: "ease-in-out",

    // eslint-disable-next-line @stylexjs/no-legacy-contextual-styles, @stylexjs/valid-styles
    ":is(*) svg": {
      flexShrink: 0,
      height: spacing["4"],
      pointerEvents: "none",
      width: spacing["4"],
    },
  },
  primary: {
    backgroundColor: {
      default: plum[4],
      ":hover": plum[5],
      ":active": plum[6],
      ":is([data-selected=true])": plum[9],
    },
    color: {
      default: plum[12],
      ":is([data-selected=true])": "light-dark(white, black)",
    },
    transitionDuration: "100ms",
    transitionProperty: "background-color, border-color",
    transitionTimingFunction: "ease-in-out",
  },
  secondary: {
    backgroundColor: {
      default: slate[3],
      ":hover": slate[4],
      ":active": slate[5],
      ":is([data-selected=true])": slate[6],
    },
    borderColor: {
      default: slate[3],
      ":hover": slate[4],
      ":active": slate[5],
      ":is([data-selected=true])": slate[6],
    },
    transitionDuration: "100ms",
    transitionProperty: "background-color, border-color",
    transitionTimingFunction: "ease-in-out",
  },
  tertiary: {
    backgroundColor: {
      default: "transparent",
      ":hover": slate[4],
      ":active": slate[5],
      ":is([data-selected=true])": slate[6],
    },
    borderColor: {
      default: "transparent",
      ":hover": slate[4],
      ":active": slate[5],
      ":is([data-selected=true])": slate[6],
    },
    transitionDuration: "100ms",
    transitionProperty: "background-color, border-color",
    transitionTimingFunction: "ease-in-out",
  },
  outline: {
    backgroundColor: {
      default: "transparent",
      ":hover": slate[4],
      ":active": slate[5],
      ":is([data-selected=true])": slate[6],
    },
    transitionDuration: "100ms",
    transitionProperty: "background-color, border-color",
    transitionTimingFunction: "ease-in-out",
  },
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

export interface ToggleButtonProps
  extends Omit<AriaToggleButtonProps, "style" | "className"> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
  variant?: "primary" | "secondary" | "tertiary" | "outline";
  size?: "sm" | "md" | "lg";
  label: string;
}

export function ToggleButton({
  style,
  variant = "primary",
  size = "md",
  label,
  ...props
}: ToggleButtonProps) {
  return (
    <Tooltip text={label}>
      <AriaToggleButton
        {...props}
        {...stylex.props(
          styles.base,
          variant === "primary" && [styles.primary, primary.borderInteractive],
          variant === "secondary" && [styles.secondary, gray.text],
          variant === "tertiary" && [styles.tertiary, gray.text],
          variant === "outline" && [
            gray.borderInteractive,
            gray.text,
            styles.outline,
          ],
          styles[size],
          style
        )}
      />
    </Tooltip>
  );
}
