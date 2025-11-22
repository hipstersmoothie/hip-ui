import { Flex } from "@/components/flex";
import { DateField } from "@/components/date-field";

export function Validation() {
  return (
    <Flex gap="4" direction="column">
      <DateField
        label="Birth Date"
        validationState="invalid"
        variant="primary"
        errorMessage="Please enter a valid date"
      />
      <DateField
        label="Birth Date"
        validationState="invalid"
        variant="secondary"
        errorMessage="Please enter a valid date"
      />
      <DateField
        label="Birth Date"
        validationState="invalid"
        variant="tertiary"
        errorMessage="Please enter a valid date"
      />
    </Flex>
  );
}
