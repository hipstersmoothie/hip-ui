import type { ProgressBarProps as AriaProgressBarProps } from "react-aria-components";

import * as stylex from "@stylexjs/stylex";
import { Check } from "lucide-react";
import { use } from "react";
import { ProgressBar as ProgressBar } from "react-aria-components";

import type { Size, StyleXComponentProps } from "../theme/types";

import { SizeContext } from "../context";
import { Label } from "../label";
import { animationDuration } from "../theme/animations.stylex";
import { radius } from "../theme/radius.stylex";
import { primaryColor, uiColor } from "../theme/semantic-color.stylex";
import { spacing } from "../theme/spacing.stylex";

const IndeterminateFillAnimation = stylex.keyframes({
  from: {
    transform: "rotate(0deg)",
  },
  to: {
    transform: "rotate(360deg)",
  },
});

const styles = stylex.create({
  wrapper: {
    alignItems: "center",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    gap: spacing["2"],
  },
  circleWrapper: {
    justifyContent: "center",
    position: "relative",

    "--progress-border-width": spacing["1"],
    "--progress-size": {
      ":is([data-size=sm] *)": spacing["4"],
      ":is([data-size=md] *)": spacing["8"],
      ":is([data-size=lg] *)": spacing["10"],
    },
  },
  track: {
    borderColor: uiColor.component1,
    borderRadius: radius.full,
    borderStyle: "solid",
    borderWidth: "var(--progress-border-width)",
    boxSizing: "border-box",
    height: "var(--progress-size)",
    width: "var(--progress-size)",
  },
  fills: {
    height: "100%",
    left: 0,
    position: "absolute",
    top: 0,
    width: "100%",
  },
  fillMask: {
    boxSizing: "border-box",
    height: "100%",
    overflow: "hidden",
    position: "absolute",
    transformOrigin: "100%",
    width: "50%",
  },
  fillMask1: {
    transform: "rotate(0deg)",
  },
  fillMask2: {
    transform: "rotate(180deg)",
  },
  fillSubmask: {
    boxSizing: "border-box",
    height: "100%",
    overflow: "hidden",
    transformOrigin: "100%",
    transitionDuration: animationDuration.default,
    transitionProperty: "transform",
    transitionTimingFunction: "linear",
    width: "100%",
  },
  fill: {
    borderColor: primaryColor.solid1,
    borderRadius: radius.full,
    borderStyle: "solid",
    borderWidth: "var(--progress-border-width)",
    boxSizing: "border-box",
    height: "var(--progress-size)",
    width: "var(--progress-size)",
  },
  check: {
    left: "50%",
    position: "absolute",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },
  completed: {
    backgroundColor: primaryColor.solid1,
  },
  indeterminateFillAnimation: {
    animationDuration: "1s",
    animationIterationCount: "infinite",
    animationName: IndeterminateFillAnimation,
    animationTimingFunction: "linear",
  },
});

export interface ProgressCircleProps
  extends StyleXComponentProps<Omit<AriaProgressBarProps, "children">> {
  label?: string;
  size?: Size;
}

export function ProgressCircle({
  label,
  style,
  size: sizeProp,
  ...props
}: ProgressCircleProps) {
  const size = sizeProp || use(SizeContext);

  return (
    <ProgressBar
      {...props}
      data-size={size}
      {...stylex.props(styles.wrapper, style)}
    >
      {({ percentage = 0, isIndeterminate }) => {
        console.log({ percentage }, Math.min(0.5, percentage / 100));
        const rotateFirstHalf = Math.min(0.5, percentage / 100) * 360 - 180;
        const rotateSecondHalf = (1 - Math.max(0.5, percentage / 100)) * -360;

        return (
          <>
            <div {...stylex.props(styles.circleWrapper)}>
              <div
                {...stylex.props(
                  styles.track,
                  percentage === 100 && styles.completed,
                )}
              />

              {isIndeterminate ? (
                <div {...stylex.props(styles.fills)}>
                  <div
                    {...stylex.props(
                      styles.fillMask,
                      styles.fillMask1,
                      styles.indeterminateFillAnimation,
                    )}
                  >
                    <div
                      {...stylex.props(styles.fillSubmask)}
                      style={{ transform: "rotate(90deg)" }}
                    >
                      <div {...stylex.props(styles.fill)} />
                    </div>
                  </div>
                </div>
              ) : (
                <div {...stylex.props(styles.fills)}>
                  <div {...stylex.props(styles.fillMask, styles.fillMask1)}>
                    <div
                      {...stylex.props(styles.fillSubmask)}
                      style={{
                        transform: `rotate(${rotateSecondHalf.toString()}deg)`,
                      }}
                    >
                      <div {...stylex.props(styles.fill)} />
                    </div>
                  </div>
                  <div {...stylex.props(styles.fillMask, styles.fillMask2)}>
                    <div
                      {...stylex.props(styles.fillSubmask)}
                      style={{
                        transform: `rotate(${rotateFirstHalf.toString()}deg)`,
                      }}
                    >
                      <div {...stylex.props(styles.fill)} />
                    </div>
                  </div>
                </div>
              )}

              {percentage === 100 && <Check {...stylex.props(styles.check)} />}
            </div>
            {label && <Label>{label}</Label>}
          </>
        );
      }}
    </ProgressBar>
  );
}
