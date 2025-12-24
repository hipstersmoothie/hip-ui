import * as stylex from "@stylexjs/stylex";

import {
  SegmentedControl,
  SegmentedControlItem,
} from "@/components/segmented-control";

const styles = stylex.create({
  root: {
    width: "100%",
  },
});

export function Basic() {
  return (
    <SegmentedControl style={styles.root} defaultSelectedKey="option1">
      <SegmentedControlItem id="option1">Option 1</SegmentedControlItem>
      <SegmentedControlItem id="option2">Option 2</SegmentedControlItem>
      <SegmentedControlItem id="option3">Option 3</SegmentedControlItem>
    </SegmentedControl>
  );
}
