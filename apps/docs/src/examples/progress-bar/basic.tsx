import * as stylex from "@stylexjs/stylex";
import { useEffect, useState } from "react";

import { ProgressBar } from "../../components/progress-bar";

const styles = stylex.create({
  wrapper: {
    width: "min(100%, 300px)",
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
      <ProgressBar value={value} label="Loading" />
    </div>
  );
}
