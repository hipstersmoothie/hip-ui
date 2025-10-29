import * as stylex from "@stylexjs/stylex";

import { ColorSlider } from "../../components/color-slider";

const styles = stylex.create({
  wrapper: {
    width: 300,
  },
});

export function HideValueLabel() {
  return (
    <div {...stylex.props(styles.wrapper)}>
      <ColorSlider
        channel="hue"
        defaultValue="hsl(90, 100%, 50%)"
        showValueLabel={false}
      />
    </div>
  );
}
