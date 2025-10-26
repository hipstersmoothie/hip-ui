import type { SliderProps as AriaSliderProps } from "react-aria-components";

import * as stylex from "@stylexjs/stylex";
import {
  Slider as AriaSlider,
  SliderTrack,
  SliderThumb,
  SliderOutput,
} from "react-aria-components";

import { Label } from "../label";
import { radius } from "../theme/radius.stylex";
import { primaryColor, uiColor } from "../theme/semantic-color.stylex";
import { shadow } from "../theme/shadow.stylex";
import { spacing } from "../theme/spacing.stylex";
import { StyleXComponentProps } from "../theme/types";
import { fontSize, lineHeight } from "../theme/typography.stylex";

const styles = stylex.create({
  wrapper: {
    alignItems: {
      ":is([data-orientation=vertical])": "center",
    },
    display: {
      default: "grid",
      ":is([data-orientation=vertical])": "flex",
    },
    flexDirection: {
      ":is([data-orientation=vertical])": "column",
    },
    gap: {
      ":is([data-orientation=vertical])": spacing["2"],
    },
    gridTemplateAreas: "'label value-label' 'track track'",
  },
  track: {
    flexGrow: {
      ":is([data-orientation=vertical] *)": 1,
    },
    gridArea: "track",
    height: {
      ":is([data-orientation=horizontal] *)": spacing["8"],
      ":is([data-orientation=horizontal] *)::before": spacing["1"],
      ":is([data-orientation=vertical] *)": "100%",
      ":is([data-orientation=vertical] *)::before": "100%",
    },
    opacity: {
      ":is([data-disabled=true] *)": 0.5,
    },
    position: "relative",
    width: {
      ":is([data-orientation=horizontal] *)": "100%",
      ":is([data-orientation=horizontal] *)::before": "100%",
      ":is([data-orientation=vertical] *)": spacing["8"],
      ":is([data-orientation=vertical] *)::before": spacing["1"],
    },

    bottom: {
      ":is([data-orientation=vertical] *)::before": 0,
    },
    left: {
      ":is([data-orientation=horizontal] *)::before": 0,
      ":is([data-orientation=vertical] *)::before": "50%",
    },
    right: {
      ":is([data-orientation=horizontal] *)::before": 0,
    },
    top: {
      ":is([data-orientation=horizontal] *)::before": "50%",
      ":is([data-orientation=vertical] *)::before": 0,
    },
    transform: {
      ":is([data-orientation=horizontal] *)::before": "translateY(-50%)",
      ":is([data-orientation=vertical] *)::before": "translateX(-50%)",
    },
    "::before": {
      backgroundColor: uiColor.border1,
      borderRadius: radius.full,
      content: "''",
      position: "absolute",
    },
  },
  thumb: {
    backgroundColor: {
      default: uiColor.component1,
      ":hover": uiColor.component2,
      ":is([data-dragging=true]):is([data-dragging=true])": uiColor.component3,
    },
    borderColor: uiColor.border1,
    borderRadius: radius.full,
    borderStyle: "solid",
    borderWidth: 1,
    boxShadow: shadow.md,
    content: "''",
    forcedColorAdjust: "none",
    height: spacing["4"],
    left: {
      ":is([data-orientation=vertical] *)": "50%",
    },
    top: {
      ":is([data-orientation=horizontal] *)": "50%",
    },
    width: spacing["4"],
  },
  trackInner: {
    backgroundColor: {
      default: primaryColor.solid1,
      ":is([data-disabled=true] *)": uiColor.border3,
    },
    borderRadius: radius.full,
    height: {
      ":is([data-orientation=horizontal] *)": spacing["1"],
      ":is([data-orientation=vertical] *)": "100%",
    },
    left: {
      ":is([data-orientation=vertical] *)": "50%",
    },
    position: "absolute",
    top: {
      ":is([data-orientation=horizontal] *)": "50%",
    },
    transform: {
      ":is([data-orientation=horizontal] *)": "translateY(-50%)",
      ":is([data-orientation=vertical] *)": "translateX(-50%)",
    },
    width: {
      ":is([data-orientation=horizontal] *)": "100%",
      ":is([data-orientation=vertical] *)": spacing["1"],
    },
  },
  trackSingle: {
    height: {
      ":is([data-orientation=horizontal] *)": spacing["1"],
      ":is([data-orientation=vertical] *)":
        "calc(attr(data-progress type(<number>)) * 1%)",
    },
    width: {
      ":is([data-orientation=horizontal] *)":
        "calc(attr(data-progress type(<number>)) * 1%)",
      ":is([data-orientation=vertical] *)": spacing["1"],
    },
  },
  trackMultiple: {
    height: {
      ":is([data-orientation=horizontal] *)": spacing["1"],
      ":is([data-orientation=vertical] *)":
        "calc(attr(data-progress-end type(<number>)) * 1% - attr(data-progress-start type(<number>)) * 1%)",
    },
    left: {
      ":is([data-orientation=horizontal] *)":
        "calc(attr(data-progress-start type(<number>)) * 1%)",
      ":is([data-orientation=vertical] *)": "50%",
    },
    top: {
      ":is([data-orientation=horizontal] *)": "50%",
      ":is([data-orientation=vertical] *)":
        "calc(100% - attr(data-progress-end type(<number>)) * 1%)",
    },
    width: {
      ":is([data-orientation=horizontal] *)":
        "calc(attr(data-progress-end type(<number>)) * 1% - attr(data-progress-start type(<number>)) * 1%)",
      ":is([data-orientation=vertical] *)": spacing["1"],
    },
  },
  valueLabel: {
    color: uiColor.text1,
    fontSize: fontSize["sm"],
    fontVariantNumeric: "tabular-nums",
    gridArea: "value-label",
    justifySelf: "flex-end",
    lineHeight: lineHeight["sm"],
  },
  label: {
    gridArea: "label",
  },
});

interface SliderProps<T> extends StyleXComponentProps<AriaSliderProps<T>> {
  label?: string;
  names?: string[];
  thumbLabels?: string[];
  autoFocus?: boolean;
  showValueLabel?: boolean;
}

export function Slider<T extends number | number[]>({
  label,
  thumbLabels,
  style,
  names,
  autoFocus,
  showValueLabel = true,
  ...props
}: SliderProps<T>) {
  return (
    <AriaSlider {...props} {...stylex.props(styles.wrapper, style)}>
      {label && <Label style={styles.label}>{label}</Label>}
      {showValueLabel && (
        <SliderOutput {...stylex.props(styles.valueLabel)}>
          {({ state }) =>
            state.values.map((_, i) => state.getThumbValueLabel(i)).join(" – ")
          }
        </SliderOutput>
      )}
      <SliderTrack {...stylex.props(styles.track)}>
        {({ state }) => (
          <>
            {state.values.length === 1 && (
              <div
                data-progress={state.getThumbPercent(0) * 100}
                {...stylex.props(styles.trackInner, styles.trackSingle)}
              />
            )}
            {state.values.length > 1 && (
              <div
                data-progress-start={state.getThumbPercent(0) * 100}
                data-progress-end={
                  state.getThumbPercent(state.values.length - 1) * 100
                }
                {...stylex.props(styles.trackInner, styles.trackMultiple)}
              />
            )}
            {state.values.map((_, i) => (
              <SliderThumb
                // eslint-disable-next-line @eslint-react/no-array-index-key
                key={i}
                index={i}
                aria-label={thumbLabels?.[i]}
                name={names?.[i]}
                // eslint-disable-next-line jsx-a11y/no-autofocus
                autoFocus={autoFocus && i === 0}
                {...stylex.props(styles.thumb)}
              />
            ))}
          </>
        )}
      </SliderTrack>
    </AriaSlider>
  );
}
