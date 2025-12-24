import { Flex } from "@/components/flex";
import { TimeField } from "@/components/time-field";

export function Validation() {
  return (
    <Flex gap="4" direction="column">
      <TimeField
        label="Start Time"
        validationState="invalid"
        variant="primary"
        errorMessage="Please enter a valid time"
      />
      <TimeField
        label="Start Time"
        validationState="invalid"
        variant="secondary"
        errorMessage="Please enter a valid time"
      />
      <TimeField
        label="Start Time"
        validationState="invalid"
        variant="tertiary"
        errorMessage="Please enter a valid time"
      />
    </Flex>
  );
}
