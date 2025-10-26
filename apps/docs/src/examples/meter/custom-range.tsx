import * as stylex from "@stylexjs/stylex";

import { Flex } from "@/components/flex";
import { Meter } from "@/components/meter";

const styles = stylex.create({
  wrapper: {
    width: "min(100%, 300px)",
  },
});

export function CustomRange() {
  return (
    <Flex direction="column" gap="4" style={styles.wrapper}>
      <Meter value={42} minValue={0} maxValue={50} label="Score" />
      <Meter value={750} minValue={0} maxValue={1000} label="Kilobytes" />
      <Meter value={3.5} minValue={0} maxValue={5} label="Rating" />
    </Flex>
  );
}
