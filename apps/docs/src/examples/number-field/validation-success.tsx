import { Flex } from "@/components/flex";
import { NumberField } from "@/components/number-field";

export function ValidationSuccess() {
  return (
    <Flex gap="4" direction="column">
      <NumberField
        label="Quantity"
        defaultValue={50}
        validationState="valid"
        variant="primary"
        description="Quantity is within the valid range"
        minValue={0}
        maxValue={100}
      />
      <NumberField
        label="Quantity"
        defaultValue={50}
        validationState="valid"
        variant="secondary"
        description="Quantity is within the valid range"
        minValue={0}
        maxValue={100}
      />
      <NumberField
        label="Quantity"
        defaultValue={50}
        validationState="valid"
        variant="tertiary"
        description="Quantity is within the valid range"
        minValue={0}
        maxValue={100}
      />
    </Flex>
  );
}
