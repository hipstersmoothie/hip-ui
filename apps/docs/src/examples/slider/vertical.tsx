import * as stylex from "@stylexjs/stylex";

import { Flex } from "@/components/flex";

import { Slider } from "../../components/slider";

const styles = stylex.create({
  wrapper: {
    height: 300,
  },
});

export function Vertical() {
  return (
    <Flex gap="4" style={styles.wrapper}>
      <Slider
        label="Volume"
        defaultValue={50}
        minValue={0}
        maxValue={100}
        step={1}
        orientation="vertical"
      />
      <Slider
        label="Range"
        defaultValue={[50, 80]}
        minValue={0}
        maxValue={100}
        step={1}
        orientation="vertical"
      />
    </Flex>
  );
}
