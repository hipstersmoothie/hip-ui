import { Grid } from "@/components/grid";
import { spacing } from "../../components/theme/spacing.stylex";
import * as stylex from "@stylexjs/stylex";
import { Fragment } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { Text } from "@/components/typography/text";
import { radius } from "../../components/theme/radius.stylex";
import { primaryColor } from "../../components/theme/semantic-color.stylex";

const styles = stylex.create({
  box: {
    backgroundColor: primaryColor.solid1,
  },
  boxContainer: {
    marginTop: spacing["8"],
    marginBottom: spacing["8"],
  },
});

function VariableValue({ value }: { value: string }) {
  const [resolved, setResolved] = useState(value);
  useEffect(() => {
    // get the actual value of the css variable
    const r = getComputedStyle(document.documentElement).getPropertyValue(
      value.replace(/^var\(/, "").replace(/\)$/, ""),
    );
    setResolved(r);
  }, [value]);
  return <div>{resolved}</div>;
}

const sortedSpacing = Object.entries(spacing)
  .filter(([key]) => !key.startsWith("__"))
  .sort(([a], [b]) => {
    if (a === "px") return -1;
    if (b === "px") return 1;
    return parseFloat(a) - parseFloat(b);
  });

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
);

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
