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

export function LineHeights() {
  return (
    <Grid columns="repeat(2, 1fr)" columnGap="8" style={styles.wrapper}>
      <Flex direction="column" gap="2">
        <LabelText>None</LabelText>
        <Text size="sm" leading="none">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos. Consectetur adipisicing elit. Quisquam, quos. Quisquam, quos.
          Repellendus, quos. Praesentium, quos.
        </Text>
      </Flex>
      <Flex direction="column" gap="2">
        <LabelText>xs</LabelText>
        <Text size="sm" leading="xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos. Consectetur adipisicing elit. Quisquam, quos. Quisquam, quos.
          Repellendus, quos. Praesentium, quos.
        </Text>
      </Flex>
      <Flex direction="column" gap="2">
        <LabelText>sm</LabelText>
        <Text size="sm" leading="sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos. Consectetur adipisicing elit. Quisquam, quos. Quisquam, quos.
          Repellendus, quos. Praesentium, quos.
        </Text>
      </Flex>
      <Flex direction="column" gap="2">
        <LabelText>base</LabelText>
        <Text size="sm" leading="base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos. Consectetur adipisicing elit. Quisquam, quos. Quisquam, quos.
          Repellendus, quos. Praesentium, quos.
        </Text>
      </Flex>
      <Flex direction="column" gap="2">
        <LabelText>lg</LabelText>
        <Text size="sm" leading="lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos. Consectetur adipisicing elit. Quisquam, quos. Quisquam, quos.
          Repellendus, quos. Praesentium, quos.
        </Text>
      </Flex>
      <Flex direction="column" gap="2">
        <LabelText>xl</LabelText>
        <Text size="sm" leading="xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos. Consectetur adipisicing elit. Quisquam, quos. Quisquam, quos.
          Repellendus, quos. Praesentium, quos.
        </Text>
      </Flex>
      <Flex direction="column" gap="2">
        <LabelText>2xl</LabelText>
        <Text size="sm" leading="2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos. Consectetur adipisicing elit. Quisquam, quos. Quisquam, quos.
          Repellendus, quos. Praesentium, quos.
        </Text>
      </Flex>
      <Flex direction="column" gap="2">
        <LabelText>3xl</LabelText>
        <Text size="sm" leading="3xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos. Consectetur adipisicing elit. Quisquam, quos. Quisquam, quos.
          Repellendus, quos. Praesentium, quos.
        </Text>
      </Flex>
    </Grid>
  );
}
