import * as stylex from "@stylexjs/stylex";

import { ColorSlider } from "../../components/color-slider";
import { Flex } from "../../components/flex";

const styles = stylex.create({
  wrapper: {
    width: 320,
  },
});

export function Channels() {
  return (
    <Flex direction="column" gap="4" style={styles.wrapper}>
      <ColorSlider
        label="Hue"
        channel="hue"
        defaultValue="hsl(180, 100%, 50%)"
      />
      <ColorSlider
        label="Saturation"
        channel="saturation"
        defaultValue="hsl(180, 50%, 50%)"
      />
      <ColorSlider
        label="Lightness"
        channel="lightness"
        defaultValue="hsl(180, 50%, 50%)"
      />
    </Flex>
  );
}
