import * as stylex from "@stylexjs/stylex";

import { Flex } from "@/components/flex";
import { Separator } from "@/components/separator";
import {
  Heading4,
  Heading3,
  Heading2,
  Heading1,
  LabelText,
  Heading5,
  SmallBody,
  Body,
  SubLabel,
} from "@/components/typography";

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
        <Heading1>Heading 1 - Page Title</Heading1>
        <Heading2>Heading 2 - Section Title</Heading2>
        <Heading3>Heading 3 - Subsection</Heading3>
        <Heading4>Heading 4 - Fourth Level</Heading4>
        <Heading5>Heading 5 - Smallest Heading</Heading5>
      </Flex>

      <Separator />

      <Flex direction="column" gap="4">
        <LabelText>Body Text</LabelText>
        <Body>
          Body text for paragraphs and general content. This is the standard
          text size used throughout the application for readable content.
        </Body>
        <SmallBody>
          Small body text for captions and secondary information. Used for less
          prominent content that still needs to be readable.
        </SmallBody>
      </Flex>

      <Separator />

      <Flex direction="column" gap="4">
        <LabelText>Labels</LabelText>
        <LabelText>Form Label</LabelText>
        <SubLabel>Sub Label - Additional context or metadata</SubLabel>
      </Flex>
    </Flex>
  );
}
