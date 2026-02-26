import { DateRangePicker } from "@/components/date-range-picker";
import { Flex } from "@/components/flex";

export function ValidationWarning() {
  return (
    <Flex gap="4" direction="column">
      <DateRangePicker
        label="Date Range"
        validationState="warning"
        variant="primary"
        description="This date range may conflict with existing events"
      />
      <DateRangePicker
        label="Date Range"
        validationState="warning"
        variant="secondary"
        description="This date range may conflict with existing events"
      />
      <DateRangePicker
        label="Date Range"
        validationState="warning"
        variant="tertiary"
        description="This date range may conflict with existing events"
      />
    </Flex>
  );
}
