import { Flex } from "@/components/flex";
import { DateField } from "@/components/date-field";

export function ValidationWarning() {
  return (
    <Flex gap="4" direction="column">
      <DateField
        label="Event Date"
        validationState="warning"
        variant="primary"
        description="This date is in the past"
      />
      <DateField
        label="Event Date"
        validationState="warning"
        variant="secondary"
        description="This date is in the past"
      />
      <DateField
        label="Event Date"
        validationState="warning"
        variant="tertiary"
        description="This date is in the past"
      />
    </Flex>
  );
}
