import * as stylex from "@stylexjs/stylex";

import { Flex } from "@/components/flex";
import { Meter } from "@/components/meter";

const styles = stylex.create({
  wrapper: {
    width: "min(100%, 300px)",
  },
});

export function Sizes() {
  return (
    <Flex direction="column" gap="4" style={styles.wrapper}>
      <Meter value={50} minValue={0} maxValue={100} label="Small" size="sm" />
      <Meter value={50} minValue={0} maxValue={100} label="Medium" size="md" />
      <Meter value={50} minValue={0} maxValue={100} label="Large" size="lg" />
    </Flex>
  );
}
