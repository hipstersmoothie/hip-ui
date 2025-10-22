import { Body, SmallBody, SubLabel } from "@/components/typography";

export function TextVariants() {
  return (
    <div>
      <Body variant="default">Default body text</Body>
      <Body variant="secondary">Secondary body text</Body>
      <SmallBody variant="default">Default small body text</SmallBody>
      <SmallBody variant="secondary">Secondary small body text</SmallBody>
      <SubLabel variant="default">Default sub label</SubLabel>
      <SubLabel variant="secondary">Secondary sub label</SubLabel>
    </div>
  );
}
