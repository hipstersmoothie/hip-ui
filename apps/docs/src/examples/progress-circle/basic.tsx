import * as stylex from "@stylexjs/stylex";
import { useEffect, useState } from "react";

import { ProgressCircle } from "../../components/progress-circle";

const styles = stylex.create({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
});

export function Basic() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prev) => {
        const newVal = Math.min(100, prev + 10 * Math.random());

        if (newVal === 100) {
          clearInterval(interval);
        }

        return newVal;
      });
    }, 500);
  }, []);

  return (
    <div {...stylex.props(styles.wrapper)}>
      <ProgressCircle value={value} />
    </div>
  );
}
