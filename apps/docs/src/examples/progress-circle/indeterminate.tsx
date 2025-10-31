import * as stylex from "@stylexjs/stylex";

import { ProgressCircle } from "../../components/progress-circle";

const styles = stylex.create({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
});

export function Indeterminate() {
  return (
    <div {...stylex.props(styles.wrapper)}>
      <ProgressCircle isIndeterminate label="Loading..." />
    </div>
  );
}

