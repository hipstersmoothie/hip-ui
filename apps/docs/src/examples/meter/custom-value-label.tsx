import * as stylex from "@stylexjs/stylex";

import { Meter } from "@/components/meter";

const styles = stylex.create({
  wrapper: {
    width: "min(100%, 300px)",
  },
});

export function CustomValueLabel() {
  return (
    <div {...stylex.props(styles.wrapper)}>
      <Meter
        value={750}
        minValue={0}
        maxValue={1000}
        label="Storage"
        valueLabel="750 MB (75%)"
      />
    </div>
  );
}
