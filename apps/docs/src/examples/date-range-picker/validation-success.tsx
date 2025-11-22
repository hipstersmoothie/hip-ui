import { Flex } from "@/components/flex";
import { DateRangePicker } from "@/components/date-range-picker";

export function ValidationSuccess() {
  return (
    <Flex gap="4" direction="column">
      <DateRangePicker
        label="Date Range"
        validationState="valid"
        variant="primary"
        description="Date range is valid and available"
      />
      <DateRangePicker
        label="Date Range"
        validationState="valid"
        variant="secondary"
        description="Date range is valid and available"
      />
      <DateRangePicker
        label="Date Range"
        validationState="valid"
        variant="tertiary"
        description="Date range is valid and available"
      />
    </Flex>
  );
}

