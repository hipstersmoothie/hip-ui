import { Body, SmallBody, LabelText, SubLabel } from "@/components/typography";

export function Text() {
  return (
    <div>
      <Body>This is a body text paragraph.</Body>
      <SmallBody>This is small body text.</SmallBody>
      <LabelText>This is label text</LabelText>
      <SubLabel>This is sub label text</SubLabel>
    </div>
  );
}
