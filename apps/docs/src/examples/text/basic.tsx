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

export function TextExample() {
  return (
    <Flex direction="column" gap="8" style={styles.wrapper}>
      <Flex direction="column" gap="4">
        <Text font="sans" size="2xl" weight="bold">
          Sans serif text (default)
        </Text>
        <Text font="serif" size="2xl" weight="semibold">
          Serif text
        </Text>
        <Text font="mono" size="2xl">
          Monospace text
        </Text>
      </Flex>
    </Flex>
  );
}
