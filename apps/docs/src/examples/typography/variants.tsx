import { Flex } from "@/components/flex";
import { Body, SmallBody, SubLabel } from "@/components/typography";

export function TextVariants() {
  return (
    <Flex direction="column" gap="2">
      <Body variant="secondary">Secondary body text</Body>
      <SmallBody variant="secondary">Secondary small body text</SmallBody>
      <SubLabel variant="secondary">Secondary sub label</SubLabel>
    </Flex>
  );
}
