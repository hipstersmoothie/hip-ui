import type { ColorSliderProps as AriaColorSliderProps } from "react-aria-components";

import * as stylex from "@stylexjs/stylex";
import { use } from "react";
import {
  ColorSlider as AriaColorSlider,
  SliderOutput,
  SliderTrack,
} from "react-aria-components";

import { ColorThumb } from "../color-area";
import { SizeContext } from "../context";
import { Label } from "../label";
import { radius } from "../theme/radius.stylex";
import { uiColor } from "../theme/semantic-color.stylex";
import { spacing } from "../theme/spacing.stylex";
import { Size, StyleXComponentProps } from "../theme/types";
import { fontSize, lineHeight } from "../theme/typography.stylex";

const styles = stylex.create({
  colorSlider: {
    display: "grid",
    flexDirection: "column",
    gap: spacing["2"],
    gridTemplateAreas: {
      default: "'track'",
      ":has(label,[data-slider-output])": "'label value-label' 'track track'",
    },
  },
  label: {
    gridArea: "label",
  },
  valueLabel: {
    color: uiColor.text1,
    fontVariantNumeric: "tabular-nums",
    gridArea: "value-label",
    justifySelf: "flex-end",

    fontSize: {
      ":is([data-size=sm] *)": fontSize["xs"],
      ":is([data-size=md] *)": fontSize["sm"],
      ":is([data-size=lg] *)": fontSize["base"],
    },
    lineHeight: {
      ":is([data-size=sm] *)": lineHeight["xs"],
      ":is([data-size=md] *)": lineHeight["sm"],
      ":is([data-size=lg] *)": lineHeight["base"],
    },
  },
  track: {
    borderRadius: radius.full,
    gridArea: "track",
    height: {
      ":is([data-size=sm] *)": spacing["3"],
      ":is([data-size=md] *)": spacing["4"],
      ":is([data-size=lg] *)": spacing["6"],
    },
    width: "100%",
  },
  thumb: {
    top: "50%",
  },
});

export interface ColorAreaProps
  extends StyleXComponentProps<Omit<AriaColorSliderProps, "children">> {
  label?: string;
  showValueLabel?: boolean;
  size?: Size;
}

export function ColorSlider({
  style,
  label,
  showValueLabel = true,
  size: sizeProp,
  ...props
}: ColorAreaProps) {
  const size = sizeProp || use(SizeContext);

  return (
    <SizeContext value={size}>
      <AriaColorSlider
        {...props}
        data-size={size}
        {...stylex.props(styles.colorSlider, style)}
      >
        {label && <Label style={styles.label}>{label}</Label>}
        {showValueLabel && (
          <SliderOutput
            data-slider-output
            {...stylex.props(styles.valueLabel)}
          />
        )}
        <SliderTrack
          {...stylex.props(styles.track)}
          style={({ defaultStyle, isDisabled }) => ({
            background: isDisabled
              ? uiColor.component2
              : `${defaultStyle.background as string},
                    repeating-conic-gradient(#CCC 0% 25%, white 0% 50%) 50% / 16px 16px`,
          })}
        >
          <ColorThumb style={styles.thumb} />
        </SliderTrack>
      </AriaColorSlider>
    </SizeContext>
  );
}
