import { Flex } from "@/components/flex";
import { TextField } from "@/components/text-field";

export function Validation() {
  return (
    <Flex gap="4" direction="column">
      <TextField
        label="Email"
        defaultValue="test@example"
        validationState="invalid"
        variant="primary"
        errorMessage="Please enter a valid email"
      />
      <TextField
        label="Email"
        defaultValue="test@example"
        validationState="invalid"
        variant="secondary"
        errorMessage="Please enter a valid email"
      />
      <TextField
        label="Email"
        defaultValue="test@example"
        validationState="invalid"
        variant="tertiary"
        errorMessage="Please enter a valid email"
      />
    </Flex>
  );
}
