import { Flex } from "@/components/flex";
import { NumberField } from "@/components/number-field";

export function ValidationWarning() {
  return (
    <Flex gap="4" direction="column">
      <NumberField
        label="Quantity"
        defaultValue={85}
        validationState="warning"
        variant="primary"
        description="Quantity is approaching the maximum limit"
        minValue={0}
        maxValue={100}
      />
      <NumberField
        label="Quantity"
        defaultValue={85}
        validationState="warning"
        variant="secondary"
        description="Quantity is approaching the maximum limit"
        minValue={0}
        maxValue={100}
      />
      <NumberField
        label="Quantity"
        defaultValue={85}
        validationState="warning"
        variant="tertiary"
        description="Quantity is approaching the maximum limit"
        minValue={0}
        maxValue={100}
      />
    </Flex>
  );
}

