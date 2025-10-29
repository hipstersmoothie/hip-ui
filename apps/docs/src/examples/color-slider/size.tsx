import * as stylex from "@stylexjs/stylex";

import { Flex } from "../../components/flex";
import { ColorSlider } from "../../components/color-slider";

const styles = stylex.create({
  wrapper: {
    width: 300,
  },
});

export function Size() {
  return (
    <Flex direction="column" gap="4" style={styles.wrapper}>
      <ColorSlider
        label="Small"
        channel="hue"
        defaultValue="hsl(100, 100%, 50%)"
        size="sm"
      />
      <ColorSlider
        label="Medium"
        channel="hue"
        defaultValue="hsl(200, 100%, 50%)"
        size="md"
      />
      <ColorSlider
        label="Large"
        channel="hue"
        defaultValue="hsl(300, 100%, 50%)"
        size="lg"
      />
    </Flex>
  );
}

