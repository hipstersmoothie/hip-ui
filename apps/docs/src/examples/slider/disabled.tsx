import * as stylex from "@stylexjs/stylex";

import { Slider } from "../../components/slider";

const styles = stylex.create({
  wrapper: {
    width: "min(100%, 300px)",
  },
});

export function Disabled() {
  return (
    <div {...stylex.props(styles.wrapper)}>
      <Slider
        label="Disabled Slider"
        defaultValue={50}
        minValue={0}
        maxValue={100}
        step={1}
        isDisabled
      />
    </div>
  );
}
