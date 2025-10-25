import * as stylex from "@stylexjs/stylex";

import { Flex } from "@/components/flex";

import { uiColor } from "../../components/theme/semantic-color.stylex";

const styles = stylex.create({
  container: {
    borderColor: uiColor.border2,
    borderStyle: "solid",
    borderWidth: 1,
    marginBottom: "1rem",
    padding: "1rem",
  },
});

export function FlexAlignment() {
  return (
    <div>
      <Flex justify="start" gap="4" style={styles.container}>
        <div>Start</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </Flex>
      <Flex justify="center" gap="4" style={styles.container}>
        <div>Center</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </Flex>
      <Flex justify="end" gap="4" style={styles.container}>
        <div>End</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </Flex>
      <Flex justify="between" gap="4" style={styles.container}>
        <div>Between</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </Flex>
    </div>
  );
}
