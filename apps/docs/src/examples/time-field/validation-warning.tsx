import { Flex } from "@/components/flex";
import { TimeField } from "@/components/time-field";

export function ValidationWarning() {
  return (
    <Flex gap="4" direction="column">
      <TimeField
        label="Meeting Time"
        validationState="warning"
        variant="primary"
        description="This time is outside business hours"
      />
      <TimeField
        label="Meeting Time"
        validationState="warning"
        variant="secondary"
        description="This time is outside business hours"
      />
      <TimeField
        label="Meeting Time"
        validationState="warning"
        variant="tertiary"
        description="This time is outside business hours"
      />
    </Flex>
  );
}

