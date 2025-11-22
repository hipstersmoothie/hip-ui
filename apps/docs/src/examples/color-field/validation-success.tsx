import { Flex } from "@/components/flex";
import { ColorField } from "@/components/color-field";

export function ValidationSuccess() {
  return (
    <Flex gap="4" direction="column">
      <ColorField
        label="Background Color"
        defaultValue="#3B82F6"
        validationState="valid"
        variant="primary"
        description="Color is valid and accessible"
      />
      <ColorField
        label="Background Color"
        defaultValue="#3B82F6"
        validationState="valid"
        variant="secondary"
        description="Color is valid and accessible"
      />
      <ColorField
        label="Background Color"
        defaultValue="#3B82F6"
        validationState="valid"
        variant="tertiary"
        description="Color is valid and accessible"
      />
    </Flex>
  );
}

