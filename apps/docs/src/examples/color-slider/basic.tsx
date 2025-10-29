import * as stylex from "@stylexjs/stylex";

import { ColorSlider } from "@/components/color-slider";

const styles = stylex.create({
  wrapper: {
    width: 300,
  },
});

export function Basic() {
  return (
    <div {...stylex.props(styles.wrapper)}>
      <ColorSlider
        label="Hue"
        channel="hue"
        defaultValue="hsl(200, 100%, 50%)"
      />
    </div>
  );
}
