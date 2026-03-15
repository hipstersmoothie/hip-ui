import { Flex } from "@/components/flex";
import { ColorField } from "@/components/color-field";

export function LabelVariant() {
  return (
    <Flex direction="column" gap="4">
      <ColorField
        label="Horizontal label"
        labelVariant="horizontal"
        placeholder="#000000"
        description="This is a description"
      />
    </Flex>
  );
}
