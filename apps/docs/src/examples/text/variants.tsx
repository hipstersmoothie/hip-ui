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

export function TextVariants() {
  return (
    <Flex direction="column" gap="4" style={styles.wrapper}>
      <Text variant="primary">Primary text</Text>
      <Text variant="secondary">Secondary text</Text>
      <Text variant="critical">Critical text</Text>
    </Flex>
  );
}
