import * as stylex from "@stylexjs/stylex";

import { ProgressCircle } from "../../components/progress-circle";

const styles = stylex.create({
  wrapper: {
    gap: "16px",
    display: "flex",
    flexDirection: "column",
  },
});

export function WithLabel() {
  return (
    <div {...stylex.props(styles.wrapper)}>
      <ProgressCircle value={50} />
      <ProgressCircle value={75} />
      <ProgressCircle value={100} />
    </div>
  );
}
