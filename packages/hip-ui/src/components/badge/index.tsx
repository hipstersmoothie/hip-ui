import * as stylex from "@stylexjs/stylex";
import { use } from "react";

import { SizeContext } from "../context";
import { radius } from "../theme/radius.stylex";
import {
  critical,
  ui,
  primary,
  success,
  warning,
} from "../theme/semantic-color.stylex";
import { spacing } from "../theme/spacing.stylex";
import { Size, StyleXComponentProps } from "../theme/types";
import { fontFamily, fontSize, fontWeight } from "../theme/typography.stylex";

const styles = stylex.create({
  wrapper: {
    alignItems: "center",
    borderStyle: "solid",
    borderWidth: 1,
    display: "flex",
    fontFamily: fontFamily["sans"],
    fontWeight: fontWeight["semibold"],
    overflow: "hidden",
    width: "fit-content",
  },
  sm: {
    borderRadius: radius["sm"],
    fontSize: fontSize["xs"],
    gap: spacing["1.5"],
    height: spacing["5"],
    paddingLeft: spacing["1.5"],
    paddingRight: spacing["1.5"],

    // eslint-disable-next-line @stylexjs/no-legacy-contextual-styles, @stylexjs/valid-styles
    ":is(*) svg": {
      flexShrink: 0,
      height: spacing["3"],
      pointerEvents: "none",
      width: spacing["3"],
    },
  },
  md: {
    borderRadius: radius["md"],
    fontSize: fontSize["sm"],
    gap: spacing["1.5"],
    height: spacing["6"],
    paddingLeft: spacing["2"],
    paddingRight: spacing["2"],

    // eslint-disable-next-line @stylexjs/no-legacy-contextual-styles, @stylexjs/valid-styles
    ":is(*) svg": {
      flexShrink: 0,
      height: spacing["3.5"],
      pointerEvents: "none",
      width: spacing["3.5"],
    },
  },
});

export interface BadgeProps
  extends StyleXComponentProps<React.ComponentProps<"div">> {
  size?: Extract<Size, "sm" | "md">;
  variant?: "primary" | "default" | "warning" | "critical" | "success";
}

export function Badge({
  style,
  size: sizeProp,
  variant = "default",
  ...props
}: BadgeProps) {
  const sizeContext = use(SizeContext);
  const size =
    sizeProp ||
    (sizeContext === "sm" || sizeContext === "md" ? sizeContext : "md");

  return (
    <div
      {...props}
      {...stylex.props(
        styles.wrapper,
        size === "sm" && styles.sm,
        size === "md" && styles.md,
        variant === "primary" && [
          primary.bgDim,
          primary.borderDim,
          primary.text,
        ],
        variant === "default" && [ui.bgDim, ui.borderDim, ui.text],
        variant === "warning" && [
          warning.bgDim,
          warning.borderDim,
          warning.text,
        ],
        variant === "critical" && [
          critical.bgDim,
          critical.borderDim,
          critical.text,
        ],
        variant === "success" && [
          success.bgDim,
          success.borderDim,
          success.text,
        ],
        style,
      )}
    />
  );
}
