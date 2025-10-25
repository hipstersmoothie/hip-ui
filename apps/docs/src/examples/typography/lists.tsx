import * as stylex from "@stylexjs/stylex";

import { Flex } from "@/components/flex";
import { UnorderedList, OrderedList, ListItem } from "@/components/typography";

import { spacing } from "../../components/theme/spacing.stylex";

const styles = stylex.create({
  wrapper: {
    paddingBottom: spacing["12"],
    paddingTop: spacing["12"],
  },
});

export function Lists() {
  return (
    <Flex direction="column" gap="6" style={styles.wrapper}>
      <UnorderedList>
        <ListItem>First item</ListItem>
        <ListItem>Second item</ListItem>
        <ListItem>Third item</ListItem>
      </UnorderedList>

      <OrderedList>
        <ListItem>First step</ListItem>
        <ListItem>Second step</ListItem>
        <ListItem>Third step</ListItem>
      </OrderedList>
    </Flex>
  );
}
