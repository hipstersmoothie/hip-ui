import * as stylex from "@stylexjs/stylex";

import { Flex } from "@/components/flex";
import { Meter } from "@/components/meter";

const styles = stylex.create({
  wrapper: {
    width: "min(100%, 300px)",
  },
});

export function ValueFormatting() {
  return (
    <Flex direction="column" gap="4" style={styles.wrapper}>
      <Meter
        value={75}
        minValue={0}
        maxValue={100}
        label="Percentage"
        formatOptions={{ style: "percent" }}
      />
      <Meter
        value={500}
        minValue={0}
        maxValue={1000}
        label="Currency"
        formatOptions={{
          style: "currency",
          currency: "USD",
        }}
      />
      <Meter
        value={0.75}
        minValue={0}
        maxValue={1}
        label="Decimal"
        formatOptions={{
          style: "decimal",
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }}
      />
    </Flex>
  );
}
