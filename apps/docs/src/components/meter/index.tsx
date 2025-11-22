import type { MeterProps as AriaMeterProps } from "react-aria-components";

import * as stylex from "@stylexjs/stylex";
import { use } from "react";
import { Meter as AriaMeter } from "react-aria-components";

import { SizeContext } from "../context";
import { Label } from "../label";
import { animationDuration } from "../theme/animations.stylex";
import { radius } from "../theme/radius.stylex";
import {
  criticalColor,
  primaryColor,
  successColor,
  uiColor,
  warningColor,
} from "../theme/semantic-color.stylex";
import { spacing } from "../theme/spacing.stylex";
import { MeterVariant, Size, StyleXComponentProps } from "../theme/types";
import { fontSize, lineHeight } from "../theme/typography.stylex";

const styles = stylex.create({
  wrapper: {
    gap: spacing["2"],
    gridTemplateAreas: "'label value-label' 'bar bar'",
    alignItems: "center",
    display: "grid",
  },
  label: {
    gridArea: "label",
  },
  bar: {
    gridArea: "bar",
    borderRadius: radius.full,
    overflow: "hidden",
    backgroundColor: {
      ":is([data-variant=critical] *)": criticalColor.component2,
      ":is([data-variant=primary] *)": primaryColor.component2,
      ":is([data-variant=secondary] *)": uiColor.component2,
      ":is([data-variant=success] *)": successColor.component2,
      ":is([data-variant=warning] *)": warningColor.component2,
    },
    boxShadow: {
      ":is([data-variant=critical] *)": `inset 0 0 2px 1px rgba(0,0,0,0.2)`,
      ":is([data-variant=primary] *)": `inset 0 0 2px 1px rgba(0,0,0,0.2)`,
      ":is([data-variant=secondary] *)": `inset 0 0 2px 1px rgba(0,0,0,0.2)`,
      ":is([data-variant=success] *)": `inset 0 0 2px 1px rgba(0,0,0,0.2)`,
      ":is([data-variant=warning] *)": `inset 0 0 2px 1px rgba(0,0,0,0.2)`,
    },
    height: {
      ":is([data-size=lg] *)": spacing["3"],
      ":is([data-size=md] *)": spacing["2"],
      ":is([data-size=sm] *)": spacing["1"],
    },
    width: "100%",
  },

  valueLabel: {
    gridArea: "value-label",
    color: uiColor.text1,
    fontVariantNumeric: "tabular-nums",
    justifySelf: "flex-end",

    fontSize: {
      ":is([data-size=lg] *)": fontSize["base"],
      ":is([data-size=md] *)": fontSize["sm"],
      ":is([data-size=sm] *)": fontSize["xs"],
    },
    lineHeight: {
      ":is([data-size=lg] *)": lineHeight["base"],
      ":is([data-size=md] *)": lineHeight["sm"],
      ":is([data-size=sm] *)": lineHeight["xs"],
    },
  },
  fill: {
    transform: "translateX(-100%)",
    transitionDuration: animationDuration.default,
    transitionProperty: "transform",
    transitionTimingFunction: "linear",
    height: "100%",
    width: "100%",

    backgroundColor: {
      ":is([data-variant=critical] *)": criticalColor.solid1,
      ":is([data-variant=primary] *)": primaryColor.solid1,
      ":is([data-variant=secondary] *)": uiColor.solid1,
      ":is([data-variant=success] *)": successColor.solid1,
      ":is([data-variant=warning] *)": warningColor.solid2,
    },
  },
  progress: (percentage: number) => ({
    transform: `translateX(calc(${percentage.toString()}% - 100%))`,
  }),
});

export interface MeterProps extends StyleXComponentProps<AriaMeterProps> {
  label?: string;
  showValueLabel?: boolean;
  size?: Size;
  variant?: MeterVariant;
}

export function Meter({
  label,
  style,
  showValueLabel = true,
  size: sizeProp,
  variant = "primary",
  ...props
}: MeterProps) {
  const size = sizeProp || use(SizeContext);

  return (
    <SizeContext value={size}>
      <AriaMeter
        {...props}
        {...stylex.props(styles.wrapper, style)}
        data-size={size}
        data-variant={variant}
      >
        {({ percentage, valueText }) => (
          <>
            {label && <Label style={styles.label}>{label}</Label>}
            {showValueLabel && (
              <span {...stylex.props(styles.valueLabel)}>{valueText}</span>
            )}
            <div {...stylex.props(styles.bar)}>
              <div
                {...stylex.props(styles.fill, styles.progress(percentage))}
              />
            </div>
          </>
        )}
      </AriaMeter>
    </SizeContext>
  );
}
