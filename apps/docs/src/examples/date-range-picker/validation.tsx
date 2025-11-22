import { Flex } from "@/components/flex";
import { DateRangePicker } from "@/components/date-range-picker";

export function Validation() {
  return (
    <Flex gap="4" direction="column">
      <DateRangePicker
        label="Date Range"
        validationState="invalid"
        variant="primary"
        errorMessage="Please select a valid date range"
      />
      <DateRangePicker
        label="Date Range"
        validationState="invalid"
        variant="secondary"
        errorMessage="Please select a valid date range"
      />
      <DateRangePicker
        label="Date Range"
        validationState="invalid"
        variant="tertiary"
        errorMessage="Please select a valid date range"
      />
    </Flex>
  );
}

