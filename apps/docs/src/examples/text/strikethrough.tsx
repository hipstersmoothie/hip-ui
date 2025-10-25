import * as stylex from "@stylexjs/stylex";

import { Flex } from "@/components/flex";
import { Text } from "@/components/typography/text";

import { spacing } from "../../components/theme/spacing.stylex";

const styles = stylex.create({
  wrapper: {
    paddingBottom: spacing["4"],
    paddingTop: spacing["4"],
  },
});

export function TextStrikethrough() {
  return (
    <Flex direction="column" gap="4" style={styles.wrapper}>
      <Text>Regular text</Text>
      <Text strikethrough>Strikethrough text</Text>
      <Text strikethrough variant="secondary">
        Strikethrough secondary text
      </Text>
    </Flex>
  );
}
