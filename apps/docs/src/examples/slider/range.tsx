import * as stylex from "@stylexjs/stylex";

import { Slider } from "../../components/slider";

const styles = stylex.create({
  wrapper: {
    width: "min(100%, 300px)",
  },
});

export function Range() {
  return (
    <div {...stylex.props(styles.wrapper)}>
      <Slider
        label="Price Range"
        defaultValue={[20, 80]}
        minValue={0}
        maxValue={100}
        thumbLabels={["Min", "Max"]}
        formatOptions={{
          style: "currency",
          currency: "USD",
          maximumSignificantDigits: 1,
        }}
      />
    </div>
  );
}
