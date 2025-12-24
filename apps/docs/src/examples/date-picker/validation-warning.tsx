import { Flex } from "@/components/flex";
import { DatePicker } from "@/components/date-picker";

export function ValidationWarning() {
  return (
    <Flex gap="4" direction="column">
      <DatePicker
        label="Event Date"
        validationState="warning"
        variant="primary"
        description="This date is in the past"
      />
      <DatePicker
        label="Event Date"
        validationState="warning"
        variant="secondary"
        description="This date is in the past"
      />
      <DatePicker
        label="Event Date"
        validationState="warning"
        variant="tertiary"
        description="This date is in the past"
      />
    </Flex>
  );
}
