import * as stylex from "@stylexjs/stylex";

import { Flex } from "@/components/flex";
import { LabelText } from "@/components/typography";
import { Text } from "@/components/typography/text";

import { spacing } from "../../components/theme/spacing.stylex";

const styles = stylex.create({
  wrapper: {
    paddingBottom: spacing["4"],
    paddingTop: spacing["4"],
    width: "100%",
  },
});

export function FontFamilies() {
  return (
    <Flex direction="column" gap="10" style={styles.wrapper}>
      <Flex direction="column" gap="4">
        <LabelText>Sans Serif (Inter)</LabelText>
        <Text font="sans" weight="semibold" size="2xl">
          The quick brown fox jumps over the lazy dog
        </Text>
        <Text font="sans">The quick brown fox jumps over the lazy dog</Text>
      </Flex>

      <Flex direction="column" gap="4">
        <LabelText>Serif (Georgia)</LabelText>
        <Text font="serif" weight="semibold" size="2xl">
          The quick brown fox jumps over the lazy dog
        </Text>
        <Text font="serif">The quick brown fox jumps over the lazy dog</Text>
      </Flex>

      <Flex direction="column" gap="4">
        <LabelText>Monospace (Monaco)</LabelText>
        <Text font="mono" weight="semibold" size="2xl">
          The quick brown fox jumps over the lazy dog
        </Text>
        <Text font="mono">The quick brown fox jumps over the lazy dog</Text>
      </Flex>
    </Flex>
  );
}
