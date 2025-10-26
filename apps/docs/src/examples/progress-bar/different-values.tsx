import * as stylex from "@stylexjs/stylex";

import { ProgressBar } from "../../components/progress-bar";
import { spacing } from "../../components/theme/spacing.stylex";

const styles = stylex.create({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    gap: spacing["4"],
    width: "min(100%, 300px)",
  },
});

export function DifferentValues() {
  return (
    <div {...stylex.props(styles.wrapper)}>
      <ProgressBar value={25} label="Low" />
      <ProgressBar value={50} label="Medium" />
      <ProgressBar value={75} label="High" />
      <ProgressBar value={100} label="Complete" />
    </div>
  );
}
