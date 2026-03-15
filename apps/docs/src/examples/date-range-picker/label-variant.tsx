import { Flex } from "@/components/flex";
import { DateRangePicker } from "@/components/date-range-picker";

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
