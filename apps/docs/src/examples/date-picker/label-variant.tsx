import { Flex } from "@/components/flex";
import { DatePicker } from "@/components/date-picker";

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
