import { Flex } from "@/components/flex";
import { NumberField } from "@/components/number-field";

export function Validation() {
  return (
    <Flex gap="4" direction="column">
      <NumberField
        label="Quantity"
        defaultValue={150}
        validationState="invalid"
        variant="primary"
        errorMessage="Quantity must be between 0 and 100"
        minValue={0}
        maxValue={100}
      />
      <NumberField
        label="Quantity"
        defaultValue={150}
        validationState="invalid"
        variant="secondary"
        errorMessage="Quantity must be between 0 and 100"
        minValue={0}
        maxValue={100}
      />
      <NumberField
        label="Quantity"
        defaultValue={150}
        validationState="invalid"
        variant="tertiary"
        errorMessage="Quantity must be between 0 and 100"
        minValue={0}
        maxValue={100}
      />
    </Flex>
  );
}

