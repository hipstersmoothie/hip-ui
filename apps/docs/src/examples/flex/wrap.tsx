import * as stylex from "@stylexjs/stylex";

import { Flex } from "@/components/flex";

import { uiColor } from "../../components/theme/semantic-color.stylex";

const styles = stylex.create({
  container: {
    borderColor: uiColor.border2,
    borderStyle: "solid",
    borderWidth: 1,
    padding: "1rem",
  },

  item: {
    backgroundColor: uiColor.component1,
    padding: "0.5rem",
  },
});

export function FlexWrap() {
  return (
    <div>
      <Flex wrap gap="4" style={styles.container}>
        <div {...stylex.props(styles.item)}>Item 1</div>
        <div {...stylex.props(styles.item)}>Item 2</div>
        <div {...stylex.props(styles.item)}>Item 3</div>
        <div {...stylex.props(styles.item)}>Item 4</div>
        <div {...stylex.props(styles.item)}>Item 5</div>
      </Flex>
    </div>
  );
}
