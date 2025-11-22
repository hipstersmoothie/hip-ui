import { Flex } from "@/components/flex";
import { TextField } from "@/components/text-field";

export function ValidationSuccess() {
  return (
    <Flex gap="4" direction="column">
      <TextField
        label="Email"
        defaultValue="test@example.com"
        validationState="valid"
        variant="primary"
        description="Email address is valid"
      />
      <TextField
        label="Email"
        defaultValue="test@example.com"
        validationState="valid"
        variant="secondary"
        description="Email address is valid"
      />
      <TextField
        label="Email"
        defaultValue="test@example.com"
        validationState="valid"
        variant="tertiary"
        description="Email address is valid"
      />
    </Flex>
  );
}
