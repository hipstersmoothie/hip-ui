import * as stylex from "@stylexjs/stylex";

import {
  SegmentedControl,
  SegmentedControlItem,
} from "@/components/segmented-control";

const styles = stylex.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    width: "100%",
  },
});

export function Size() {
  return (
    <div {...stylex.props(styles.container)}>
      <div>
        <h3>Small</h3>
        <SegmentedControl size="sm" defaultSelectedKey="option1-sm">
          <SegmentedControlItem id="option1-sm">Option 1</SegmentedControlItem>
          <SegmentedControlItem id="option2-sm">Option 2</SegmentedControlItem>
          <SegmentedControlItem id="option3-sm">Option 3</SegmentedControlItem>
        </SegmentedControl>
      </div>
      <div>
        <h3>Medium</h3>
        <SegmentedControl size="md" defaultSelectedKey="option1-md">
          <SegmentedControlItem id="option1-md">Option 1</SegmentedControlItem>
          <SegmentedControlItem id="option2-md">Option 2</SegmentedControlItem>
          <SegmentedControlItem id="option3-md">Option 3</SegmentedControlItem>
        </SegmentedControl>
      </div>
      <div>
        <h3>Large</h3>
        <SegmentedControl size="lg" defaultSelectedKey="option1-lg">
          <SegmentedControlItem id="option1-lg">Option 1</SegmentedControlItem>
          <SegmentedControlItem id="option2-lg">Option 2</SegmentedControlItem>
          <SegmentedControlItem id="option3-lg">Option 3</SegmentedControlItem>
        </SegmentedControl>
      </div>
    </div>
  );
}

