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

export function Sizes() {
  return (
    <div {...stylex.props(styles.wrapper)}>
      <ProgressBar value={50} label="Small" size="sm" />
      <ProgressBar value={50} label="Medium" size="md" />
      <ProgressBar value={50} label="Large" size="lg" />
    </div>
  );
}
