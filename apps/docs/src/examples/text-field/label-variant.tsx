import { Flex } from "@/components/flex";
import { TextField } from "@/components/text-field";

export function LabelVariant() {
  return (
    <Flex direction="column" gap="4">
      <TextField
        label="Horizontal label"
        labelVariant="horizontal"
        placeholder="Label appears beside the field"
        description="This is a description"
      />
    </Flex>
  );
}
