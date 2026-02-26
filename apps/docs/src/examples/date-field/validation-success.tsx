import { DateField } from "@/components/date-field";
import { Flex } from "@/components/flex";

export function ValidationSuccess() {
  return (
    <Flex gap="4" direction="column">
      <DateField
        label="Event Date"
        validationState="valid"
        variant="primary"
        description="Date is valid and available"
      />
      <DateField
        label="Event Date"
        validationState="valid"
        variant="secondary"
        description="Date is valid and available"
      />
      <DateField
        label="Event Date"
        validationState="valid"
        variant="tertiary"
        description="Date is valid and available"
      />
    </Flex>
  );
}
