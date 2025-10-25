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

export function TextTypography() {
  return (
    <Flex direction="column" gap="6" style={styles.wrapper}>
      <Flex direction="column" gap="2">
        <Text size="sm" weight="semibold" variant="secondary">
          Font Weights
        </Text>
        <Text weight="thin">Thin weight</Text>
        <Text weight="light">Light weight</Text>
        <Text weight="normal">Normal weight</Text>
        <Text weight="medium">Medium weight</Text>
        <Text weight="semibold">Semibold weight</Text>
        <Text weight="bold">Bold weight</Text>
        <Text weight="extrabold">Extrabold weight</Text>
      </Flex>

      <Flex direction="column" gap="2">
        <Text size="sm" weight="semibold" variant="secondary">
          Font Sizes
        </Text>
        <Text size="xs">Extra small text</Text>
        <Text size="sm">Small text</Text>
        <Text size="base">Base text</Text>
        <Text size="lg">Large text</Text>
        <Text size="xl">Extra large text</Text>
        <Text size="2xl">2X large text</Text>
        <Text size="3xl">3X large text</Text>
      </Flex>

      <Flex direction="column" gap="2">
        <Text size="sm" weight="semibold" variant="secondary">
          Letter Spacing
        </Text>
        <Text tracking="tighter">Tighter tracking</Text>
        <Text tracking="tight">Tight tracking</Text>
        <Text tracking="normal">Normal tracking</Text>
        <Text tracking="wide">Wide tracking</Text>
        <Text tracking="wider">Wider tracking</Text>
        <Text tracking="widest">Widest tracking</Text>
      </Flex>
    </Flex>
  );
}
