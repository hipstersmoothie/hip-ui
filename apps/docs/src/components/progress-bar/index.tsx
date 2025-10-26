import type { ProgressBarProps as AriaProgresBarProps } from "react-aria-components";

import * as stylex from "@stylexjs/stylex";
import { use } from "react";
import { ProgressBar as AriaProgressBar } from "react-aria-components";

import { SizeContext } from "../context";
import { Label } from "../label";
import { mediaQueries } from "../theme/media-queries.stylex";
import { radius } from "../theme/radius.stylex";
import { primaryColor, uiColor } from "../theme/semantic-color.stylex";
import { spacing } from "../theme/spacing.stylex";
import { Size, StyleXComponentProps } from "../theme/types";
import { fontSize, lineHeight } from "../theme/typography.stylex";

const IndeterminateAnimation = stylex.keyframes({
  from: {
    transform: "translateX(-1.86%)",
  },
  to: {
    transform: "translateX(0%)",
  },
});

const styles = stylex.create({
  wrapper: {
    alignItems: "center",
    display: "grid",
    gap: spacing["2"],
    gridTemplateAreas: "'label value-label' 'bar bar'",
  },
  label: {
    gridArea: "label",
  },
  bar: {
    backgroundColor: uiColor.component2,
    borderRadius: radius.full,
    gridArea: "bar",
    overflow: "hidden",
    width: "100%",
  },
  smBar: {
    height: spacing["1"],
  },
  mdBar: {
    height: spacing["2"],
  },
  lgBar: {
    height: spacing["3"],
  },
  valueLabel: {
    color: uiColor.text1,
    fontVariantNumeric: "tabular-nums",
    gridArea: "value-label",
    justifySelf: "flex-end",
  },
  smValueLabel: {
    fontSize: fontSize["xs"],
    lineHeight: lineHeight["xs"],
  },
  mdValueLabel: {
    fontSize: fontSize["sm"],
    lineHeight: lineHeight["sm"],
  },
  lgValueLabel: {
    fontSize: fontSize["base"],
    lineHeight: lineHeight["base"],
  },
  fill: {
    backgroundColor: primaryColor.solid1,
    height: "100%",
    transform: "translateX(-100%)",
    transitionDuration: "10ms",
    transitionProperty: "transform",
    transitionTimingFunction: "linear",
    width: "100%",
  },
  progress: (percentage: number) => ({
    transform: `translateX(calc(${percentage.toString()}% - 100%))`,
  }),
  indeterminateFill: {
    backgroundRepeat: "no-repeat",
    backgroundImage: `repeating-linear-gradient(
      45deg,
      ${primaryColor.solid1},
      ${primaryColor.solid1} 20px,
      ${primaryColor.border2} 20px,
      ${primaryColor.border2} 40px
    )`,
    backgroundSize: "20%",
    height: "100%",
    animationName: {
      default: IndeterminateAnimation,
      [mediaQueries.reducedMotion]: "none",
    },
    animationDuration: "1s",
    animationIterationCount: "infinite",
    animationTimingFunction: "linear",
    width: "1000%",
    transformOrigin: "right",
  },
});

export interface ProgressBarProps
  extends StyleXComponentProps<AriaProgresBarProps> {
  label?: string;
  showValueLabel?: boolean;
  size?: Size;
}

export function ProgressBar({
  label,
  style,
  showValueLabel = true,
  size: sizeProp,
  ...props
}: ProgressBarProps) {
  const size = sizeProp || use(SizeContext);

  return (
    <SizeContext value={size}>
      <AriaProgressBar {...props} {...stylex.props(styles.wrapper, style)}>
        {({ percentage, valueText, isIndeterminate }) => (
          <>
            {label && <Label style={styles.label}>{label}</Label>}
            {showValueLabel && (
              <span
                {...stylex.props(
                  styles.valueLabel,
                  styles[`${size}ValueLabel`],
                )}
              >
                {valueText}
              </span>
            )}
            <div {...stylex.props(styles.bar, styles[`${size}Bar`])}>
              {isIndeterminate ? (
                <div {...stylex.props(styles.indeterminateFill)} />
              ) : (
                <div
                  {...stylex.props(
                    styles.fill,
                    styles.progress(percentage ?? 0),
                  )}
                />
              )}
            </div>
          </>
        )}
      </AriaProgressBar>
    </SizeContext>
  );
}
