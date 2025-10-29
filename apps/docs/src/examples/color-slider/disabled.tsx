import * as stylex from "@stylexjs/stylex";

import { ColorSlider } from "@/components/color-slider";

const styles = stylex.create({
  wrapper: {
    width: 300,
  },
});

export function Disabled() {
  return (
    <div {...stylex.props(styles.wrapper)}>
      <ColorSlider
        channel="hue"
        label="Disabled Color Slider"
        defaultValue="hsl(0, 100%, 50%)"
        isDisabled
      />
    </div>
  );
}
