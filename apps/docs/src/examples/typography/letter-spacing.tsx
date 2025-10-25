import * as stylex from "@stylexjs/stylex";

import { Flex } from "@/components/flex";
import { Grid } from "@/components/grid";
import { LabelText } from "@/components/typography";
import { Text } from "@/components/typography/text";

import { spacing } from "../../components/theme/spacing.stylex";

const styles = stylex.create({
  wrapper: {
    paddingBottom: spacing["4"],
    paddingTop: spacing["4"],
  },
});

export function LetterSpacing() {
  return (
    <Grid columns="repeat(2, 1fr)" columnGap="8" style={styles.wrapper}>
      <Flex direction="column" gap="2">
        <LabelText>Tighter</LabelText>
        <Text size="sm" tracking="tighter">
          The quick brown fox jumps over the lazy dog
        </Text>
      </Flex>
      <Flex direction="column" gap="2">
        <LabelText>Tight</LabelText>
        <Text size="sm" tracking="tight">
          The quick brown fox jumps over the lazy dog
        </Text>
      </Flex>
      <Flex direction="column" gap="2">
        <LabelText>Normal</LabelText>
        <Text size="sm" tracking="normal">
          The quick brown fox jumps over the lazy dog
        </Text>
      </Flex>
      <Flex direction="column" gap="2">
        <LabelText>Wide</LabelText>
        <Text size="sm" tracking="wide">
          The quick brown fox jumps over the lazy dog
        </Text>
      </Flex>
      <Flex direction="column" gap="2">
        <LabelText>Wider</LabelText>
        <Text size="sm" tracking="wider">
          The quick brown fox jumps over the lazy dog
        </Text>
      </Flex>
      <Flex direction="column" gap="2">
        <LabelText>Widest</LabelText>
        <Text size="sm" tracking="widest">
          The quick brown fox jumps over the lazy dog
        </Text>
      </Flex>
    </Grid>
  );
}
