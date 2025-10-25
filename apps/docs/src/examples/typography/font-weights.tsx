import * as stylex from "@stylexjs/stylex";

import { Flex } from "@/components/flex";
import { Text } from "@/components/typography/text";

import { spacing } from "../../components/theme/spacing.stylex";

const styles = stylex.create({
  wrapper: {
    paddingBottom: spacing["4"],
    paddingTop: spacing["4"],
    width: "100%",
  },
});

export function FontWeights() {
  return (
    <Flex direction="column" gap="8" style={styles.wrapper}>
      <Text weight="thin" size="2xl">
        Thin (100)
      </Text>

      <Text weight="extralight" size="2xl">
        Extra Light (200)
      </Text>

      <Text weight="light" size="2xl">
        Light (300)
      </Text>

      <Text weight="normal" size="2xl">
        Normal (400) - Default
      </Text>

      <Text weight="medium" size="2xl">
        Medium (500)
      </Text>

      <Text weight="semibold" size="2xl">
        Semi Bold (600)
      </Text>

      <Text weight="bold" size="2xl">
        Bold (700)
      </Text>

      <Text weight="extrabold" size="2xl">
        Extra Bold (800)
      </Text>

      <Text weight="black" size="2xl">
        Black (900)
      </Text>
    </Flex>
  );
}
