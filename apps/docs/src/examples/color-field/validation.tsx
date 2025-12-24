import { Flex } from "@/components/flex";
import { ColorField } from "@/components/color-field";

export function Validation() {
  return (
    <Flex gap="4" direction="column">
      <ColorField
        label="Background Color"
        defaultValue="#invalid"
        validationState="invalid"
        variant="primary"
        errorMessage="Please enter a valid hex color code"
      />
      <ColorField
        label="Background Color"
        defaultValue="#invalid"
        validationState="invalid"
        variant="secondary"
        errorMessage="Please enter a valid hex color code"
      />
      <ColorField
        label="Background Color"
        defaultValue="#invalid"
        validationState="invalid"
        variant="tertiary"
        errorMessage="Please enter a valid hex color code"
      />
    </Flex>
  );
}
