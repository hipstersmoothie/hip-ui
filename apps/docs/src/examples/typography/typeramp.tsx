import * as stylex from "@stylexjs/stylex";

import { Flex } from "@/components/flex";
import { Separator } from "@/components/separator";
import { LabelText } from "@/components/typography";
import { Text } from "@/components/typography/text";

import { spacing } from "../../components/theme/spacing.stylex";

const styles = stylex.create({
  wrapper: {
    paddingBottom: spacing["4"],
    paddingTop: spacing["4"],
  },
});

export function Typeramp() {
  return (
    <Flex direction="column" gap="8" style={styles.wrapper}>
      <Flex direction="column" gap="4">
        <LabelText>Headings</LabelText>
        <Text size="5xl" weight="extrabold" tracking="tight">
          Heading 1 - Page Title
        </Text>
        <Text size="4xl" weight="semibold" tracking="tight">
          Heading 2 - Section Title
        </Text>
        <Text size="2xl" weight="semibold" tracking="tight">
          Heading 3 - Subsection
        </Text>
        <Text size="xl" weight="semibold" tracking="tight">
          Heading 4 - Fourth Level
        </Text>
        <Text size="lg" weight="semibold" tracking="tight">
          Heading 5 - Smallest Heading
        </Text>
      </Flex>

      <Separator />

      <Flex direction="column" gap="4">
        <LabelText>Body Text</LabelText>
        <Text size="base" leading="base">
          Body text for paragraphs and general content. This is the standard
          text size used throughout the application for readable content.
        </Text>
        <Text size="sm" leading="sm">
          Small body text for captions and secondary information. Used for less
          prominent content that still needs to be readable.
        </Text>
      </Flex>

      <Separator />

      <Flex direction="column" gap="4">
        <LabelText>Labels</LabelText>
        <Text size="sm" weight="semibold" tracking="tight">
          Form Label
        </Text>
        <Text size="xs" weight="medium">
          Sub Label - Additional context or metadata
        </Text>
      </Flex>
    </Flex>
  );
}
