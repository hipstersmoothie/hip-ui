import { Flex } from "@/components/flex";
import { TimeField } from "@/components/time-field";

export function ValidationSuccess() {
  return (
    <Flex gap="4" direction="column">
      <TimeField
        label="Meeting Time"
        validationState="valid"
        variant="primary"
        description="Time is valid and available"
      />
      <TimeField
        label="Meeting Time"
        validationState="valid"
        variant="secondary"
        description="Time is valid and available"
      />
      <TimeField
        label="Meeting Time"
        validationState="valid"
        variant="tertiary"
        description="Time is valid and available"
      />
    </Flex>
  );
}
