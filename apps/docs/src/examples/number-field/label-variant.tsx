import { Flex } from "@/components/flex";
import { NumberField } from "@/components/number-field";

export function LabelVariant() {
  return (
    <Flex direction="column" gap="4">
      <NumberField
        label="Horizontal label"
        labelVariant="horizontal"
        placeholder="Label appears beside the field"
        description="This is a description"
      />
    </Flex>
  );
}
