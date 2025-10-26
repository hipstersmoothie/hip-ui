import * as stylex from "@stylexjs/stylex";

import { ProgressBar } from "../../components/progress-bar";

const styles = stylex.create({
  wrapper: {
    width: "min(100%, 300px)",
  },
});

export function WithoutLabel() {
  return (
    <div {...stylex.props(styles.wrapper)}>
      <ProgressBar value={30} showValueLabel={false} />
    </div>
  );
}
