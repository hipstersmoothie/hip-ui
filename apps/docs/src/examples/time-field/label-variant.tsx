import { Flex } from "@/components/flex";
import { TimeField } from "@/components/time-field";

export function LabelVariant() {
  return (
    <Flex direction="column" gap="4">
      <TimeField
        label="Horizontal label"
        labelVariant="horizontal"
        description="This is a description"
      />
    </Flex>
  );
}
