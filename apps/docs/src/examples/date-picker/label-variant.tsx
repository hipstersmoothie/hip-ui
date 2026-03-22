import { DatePicker } from "@/components/date-picker";
import { Flex } from "@/components/flex";

export function LabelVariant() {
  return (
    <Flex direction="column" gap="4">
      <DatePicker
        label="Horizontal label"
        labelVariant="horizontal"
        description="This is a description"
      />
    </Flex>
  );
}
