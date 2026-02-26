import * as stylex from "@stylexjs/stylex";

import { ProgressCircle } from "../../components/progress-circle";

const styles = stylex.create({
  wrapper: {
    gap: "16px",
    display: "flex",
    flexDirection: "column",
  },
});

export function Sizes() {
  return (
    <div {...stylex.props(styles.wrapper)}>
      <ProgressCircle value={75} label="Small" size="sm" />
      <ProgressCircle value={75} label="Medium" size="md" />
      <ProgressCircle value={75} label="Large" size="lg" />
    </div>
  );
}
