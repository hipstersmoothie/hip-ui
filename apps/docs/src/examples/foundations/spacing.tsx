import * as stylex from "@stylexjs/stylex";
import { useEffect, useState } from "react";
import { Fragment } from "react/jsx-runtime";

import { Grid } from "@/components/grid";
import { Text } from "@/components/typography/text";

import { radius } from "../../components/theme/radius.stylex";
import { primaryColor } from "../../components/theme/semantic-color.stylex";
import { spacing } from "../../components/theme/spacing.stylex";

const styles = stylex.create({
  box: {
    backgroundColor: primaryColor.solid1,
  },
  boxContainer: {
    marginBottom: spacing["8"],
    marginTop: spacing["8"],
  },
});

function VariableValue({ value }: { value: string }) {
  const [resolved, setResolved] = useState(value);
  useEffect(() => {
    // get the actual value of the css variable
    const r = getComputedStyle(document.documentElement).getPropertyValue(
      value.replace(/^var\(/, "").replace(/\)$/, ""),
    );
    // eslint-disable-next-line react-hooks/set-state-in-effect, @eslint-react/hooks-extra/no-direct-set-state-in-use-effect
    setResolved(r);
  }, [value]);
  return <div>{resolved}</div>;
}

const sortedSpacing = Object.entries(spacing)
  .filter(([key]) => !key.startsWith("__"))
  .toSorted(([a], [b]) => {
    if (a === "px") return -1;
    if (b === "px") return 1;
    return Number.parseFloat(a) - Number.parseFloat(b);
  }) as [string, string][];

export function Spacing() {
  return (
    <Grid
      columns="max-content max-content 1fr"
      columnGap="4"
      style={styles.boxContainer}
    >
      {sortedSpacing.map(([key, value]) => (
        <Fragment key={key}>
          <Text weight="semibold">{key}</Text>
          <VariableValue value={value} />
          <div
            {...stylex.props(styles.box)}
            style={{
              height: value,
              width: value,
            }}
          />
        </Fragment>
      ))}
    </Grid>
  );
}

const sortedRadius = Object.entries(radius).filter(
  ([key]) => !key.startsWith("__"),
) as [string, string][];

export function Radius() {
  return (
    <Grid
      columns="min-content min-content min-content"
      columnGap="4"
      justifyItems="center"
      style={styles.boxContainer}
    >
      {sortedRadius.map(([key, value]) => (
        <Fragment key={key}>
          <div
            {...stylex.props(styles.box)}
            style={{ height: 80, width: 80, borderRadius: value }}
          />
          <Text weight="semibold">{key}</Text>
          <VariableValue value={value} />
        </Fragment>
      ))}
    </Grid>
  );
}
