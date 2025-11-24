import * as stylex from "@stylexjs/stylex";
import { use } from "react";

import { SizeContext } from "../context";
import { mediaQueries } from "../theme/media-queries.stylex";
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
    // eslint-disable-next-line @stylexjs/valid-styles
    cornerShape: "squircle",
    borderStyle: "solid",
    borderWidth: 1,
    overflow: "hidden",
    alignItems: "center",
    display: "flex",
    fontFamily: fontFamily["sans"],
    fontWeight: fontWeight["semibold"],
    width: "fit-content",
  },
  sm: {
    borderRadius: {
      default: radius["sm"],
      [mediaQueries.supportsSquircle]: radius["3xl"],
    },
    gap: spacing["1"],
    fontSize: fontSize["xs"],
    height: spacing["5"],
    paddingLeft: spacing["1.5"],
    paddingRight: spacing["1.5"],

    // eslint-disable-next-line @stylexjs/no-legacy-contextual-styles, @stylexjs/valid-styles
    ":is(*) svg": {
      flexShrink: 0,
      pointerEvents: "none",
      height: spacing["3"],
      width: spacing["3"],
    },
  },
  md: {
    borderRadius: {
      default: radius["md"],
      [mediaQueries.supportsSquircle]: radius["3xl"],
    },
    gap: spacing["1.5"],
    fontSize: fontSize["sm"],
    height: spacing["6"],
    paddingLeft: spacing["2"],
    paddingRight: spacing["2"],

    // eslint-disable-next-line @stylexjs/no-legacy-contextual-styles, @stylexjs/valid-styles
    ":is(*) svg": {
      flexShrink: 0,
      pointerEvents: "none",
      height: spacing["3.5"],
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
