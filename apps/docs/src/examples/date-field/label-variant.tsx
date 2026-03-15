import { Flex } from "@/components/flex";
import { DateField } from "@/components/date-field";

export function LabelVariant() {
  return (
    <Flex direction="column" gap="4">
      <DateField
        label="Horizontal label"
        labelVariant="horizontal"
        placeholder="Select a date"
        description="This is a description"
      />
    </Flex>
  );
}
