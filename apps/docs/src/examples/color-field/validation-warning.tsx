import { Flex } from "@/components/flex";
import { ColorField } from "@/components/color-field";

export function ValidationWarning() {
  return (
    <Flex gap="4" direction="column">
      <ColorField
        label="Background Color"
        defaultValue="#FF0000"
        validationState="warning"
        variant="primary"
        description="This color may be too bright for text readability"
      />
      <ColorField
        label="Background Color"
        defaultValue="#FF0000"
        validationState="warning"
        variant="secondary"
        description="This color may be too bright for text readability"
      />
      <ColorField
        label="Background Color"
        defaultValue="#FF0000"
        validationState="warning"
        variant="tertiary"
        description="This color may be too bright for text readability"
      />
    </Flex>
  );
}

