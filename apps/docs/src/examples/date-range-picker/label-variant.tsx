import { DateRangePicker } from "@/components/date-range-picker";
import { Flex } from "@/components/flex";

export function LabelVariant() {
  return (
    <Flex direction="column" gap="4">
      <DateRangePicker
        label="Horizontal label"
        labelVariant="horizontal"
        description="This is a description"
      />
    </Flex>
  );
}
