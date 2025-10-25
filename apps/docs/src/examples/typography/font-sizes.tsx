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

export function FontSizes() {
  return (
    <Flex direction="column" gap="8" style={styles.wrapper}>
      <Text size="xs">Extra Small (xs) - 12px</Text>
      <Text size="sm">Small (sm) - 13.6px</Text>
      <Text size="base">Base (base) - 16px - Default</Text>
      <Text size="lg">Large (lg) - 18px</Text>
      <Text size="xl">Extra Large (xl) - 20px</Text>
      <Text size="2xl">2X Large (2xl) - 24px</Text>
      <Text size="3xl">3X Large (3xl) - 30px</Text>
      <Text size="4xl">4X Large (4xl) - 36px</Text>
      <Text size="5xl">5X Large (5xl) - 48px</Text>
      <Text size="6xl">6X Large (6xl) - 60px</Text>
      <Text size="7xl">7X Large (7xl) - 72px</Text>
      <Text size="8xl">8X Large (8xl) - 96px</Text>
      <Text size="9xl">9X Large (9xl) - 128px</Text>
    </Flex>
  );
}
