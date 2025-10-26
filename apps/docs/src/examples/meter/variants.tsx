import * as stylex from "@stylexjs/stylex";

import { Flex } from "@/components/flex";
import { Meter } from "@/components/meter";

const styles = stylex.create({
  wrapper: {
    width: "min(100%, 300px)",
  },
});

export function Variants() {
  return (
    <Flex direction="column" gap="4" style={styles.wrapper}>
      <Meter
        value={25}
        minValue={0}
        maxValue={100}
        label="Primary"
        variant="primary"
      />
      <Meter
        value={50}
        minValue={0}
        maxValue={100}
        label="Secondary"
        variant="secondary"
      />
      <Meter
        value={75}
        minValue={0}
        maxValue={100}
        label="Success"
        variant="success"
      />
      <Meter
        value={95}
        minValue={0}
        maxValue={100}
        label="Warning"
        variant="warning"
      />
      <Meter
        value={95}
        minValue={0}
        maxValue={100}
        label="Critical"
        variant="critical"
      />
    </Flex>
  );
}
