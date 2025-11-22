import * as stylex from "@stylexjs/stylex";
import { List, Grid, Columns } from "lucide-react";

import {
  SegmentedControl,
  SegmentedControlItem,
} from "@/components/segmented-control";

const styles = stylex.create({
  root: {
    width: "100%",
  },
});

export function WithIcons() {
  return (
    <SegmentedControl style={styles.root} defaultSelectedKey="list">
      <SegmentedControlItem id="list">
        <List />
        List
      </SegmentedControlItem>
      <SegmentedControlItem id="grid">
        <Grid />
        Grid
      </SegmentedControlItem>
      <SegmentedControlItem id="columns">
        <Columns />
        Columns
      </SegmentedControlItem>
    </SegmentedControl>
  );
}

