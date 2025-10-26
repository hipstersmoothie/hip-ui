import * as stylex from "@stylexjs/stylex";

import { Meter } from "@/components/meter";

const styles = stylex.create({
  wrapper: {
    width: "min(100%, 300px)",
  },
});

export function WithoutValueLabel() {
  return (
    <div {...stylex.props(styles.wrapper)}>
      <Meter
        value={60}
        minValue={0}
        maxValue={100}
        label="Bandwidth"
        showValueLabel={false}
      />
    </div>
  );
}
