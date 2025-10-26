import * as stylex from "@stylexjs/stylex";

import { Slider } from "../../components/slider";

const styles = stylex.create({
  wrapper: {
    width: "min(100%, 300px)",
  },
});

export function ValueFormatting() {
  return (
    <div {...stylex.props(styles.wrapper)}>
      <Slider
        label="Percentage"
        defaultValue={50}
        minValue={0}
        maxValue={1}
        step={0.01}
        formatOptions={{ style: "percent" }}
      />
      <Slider
        label="Currency"
        defaultValue={500}
        minValue={0}
        maxValue={1000}
        step={10}
        formatOptions={{
          style: "currency",
          currency: "USD",
        }}
      />
      <Slider
        label="Decimal"
        defaultValue={0.5}
        minValue={0}
        maxValue={1}
        step={0.01}
        formatOptions={{
          style: "decimal",
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }}
      />
    </div>
  );
}
