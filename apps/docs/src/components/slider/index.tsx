import type { SliderProps as AriaSliderProps } from "react-aria-components";
import * as stylex from "@stylexjs/stylex";

import {
  Slider as AriaSlider,
  SliderTrack,
  SliderThumb,
  SliderOutput,
  Label,
} from "react-aria-components";

const styles = stylex.create({
  wrapper: {
    width: "100%",
  },
});

interface MySliderProps<T>
  extends Omit<AriaSliderProps<T>, "style" | "className"> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
  label?: string;
  thumbLabels?: string[];
}

export function Slider<T extends number | number[]>({
  label,
  thumbLabels,
  style,
  ...props
}: MySliderProps<T>) {
  return (
    <AriaSlider {...props} {...stylex.props(styles.wrapper, style)}>
      {label && <Label>{label}</Label>}
      <SliderOutput>
        {({ state }) =>
          state.values.map((_, i) => state.getThumbValueLabel(i)).join(" – ")
        }
      </SliderOutput>
      <SliderTrack>
        {({ state }) =>
          state.values.map((_, i) => (
            <SliderThumb key={i} index={i} aria-label={thumbLabels?.[i]} />
          ))
        }
      </SliderTrack>
    </AriaSlider>
  );
}
