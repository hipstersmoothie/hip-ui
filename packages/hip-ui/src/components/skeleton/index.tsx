"use client";

import * as stylex from "@stylexjs/stylex";

import { radius } from "../theme/radius.stylex";
import { uiColor } from "../theme/semantic-color.stylex";
import { shadow } from "../theme/shadow.stylex";
import { spacing } from "../theme/spacing.stylex";
import { Size, StyleXComponentProps } from "../theme/types";

const shimmer = stylex.keyframes({
  "0%": {
    transform: "translateX(-65%)",
  },
  "100%": {
    transform: "translateX(0%)",
  },
});

const styles = stylex.create({
  group: {},
  base: {
    backgroundColor: uiColor.component1,
    boxShadow: shadow["insetSm"],
    overflow: "hidden",
    position: "relative",
  },
  shimmer: {
    // eslint-disable-next-line @stylexjs/valid-styles
    animationDuration: "1.7s",
    animationIterationCount: "infinite",
    animationName: shimmer,
    animationTimingFunction: "linear",
    backgroundImage: `linear-gradient(
      -80deg,
      transparent 0%,
      transparent 30%,
      ${uiColor.component3} 50%,
      transparent 70%,
      transparent 100%
    )`,
    backgroundSize: "100%",
    bottom: 0,
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
    width: "300%",
  },
  circle: {
    borderRadius: radius.full,
  },
  rectangle: {
    borderRadius: radius.md,
  },
  sizeSm: {
    height: spacing["8"],
    width: spacing["8"],
  },
  sizeMd: {
    height: spacing["12"],
    width: spacing["12"],
  },
  sizeLg: {
    height: spacing["16"],
    width: spacing["16"],
  },
  height: (height: string | undefined) => ({
    height: height || spacing["4"],
  }),
  width: (width: string | undefined) => ({
    width: width || "100%",
  }),
});

export interface SkeletonGroupProps
  extends StyleXComponentProps<React.ComponentProps<"div">> {
  children: React.ReactNode;
}

export function SkeletonGroup({
  children,
  style,
  ...props
}: SkeletonGroupProps) {
  return (
    <div {...props} {...stylex.props(styles.group, style)}>
      {children}
    </div>
  );
}

export type SkeletonVariant = "circle" | "rectangle";

interface SkeletonBaseProps
  extends StyleXComponentProps<React.ComponentProps<"div">> {}

interface SkeletonCircleProps extends SkeletonBaseProps {
  variant: "circle";
  size: Size;
  height?: never;
  width?: string;
}

interface SkeletonRectangleProps extends SkeletonBaseProps {
  variant: "rectangle";
  height?: string;
  size?: never;
  width?: string;
}

type SkeletonProps = SkeletonCircleProps | SkeletonRectangleProps;

export function Skeleton({
  variant,
  size,
  height,
  width,
  style,
  ...props
}: SkeletonProps) {
  if (variant === "circle") {
    return (
      <div
        {...props}
        {...stylex.props(
          styles.base,
          styles.circle,
          size === "sm" && styles.sizeSm,
          size === "md" && styles.sizeMd,
          size === "lg" && styles.sizeLg,
          width ? styles.width(width) : null,
          style,
        )}
      >
        <div {...stylex.props(styles.shimmer)} />
      </div>
    );
  }

  return (
    <div
      {...props}
      {...stylex.props(
        styles.base,
        styles.rectangle,
        styles.height(height),
        styles.width(width),
        style,
      )}
    >
      <div {...stylex.props(styles.shimmer)} />
    </div>
  );
}
