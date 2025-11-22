import { Flex } from "@/components/flex";
import { TextField } from "@/components/text-field";

export function ValidationWarning() {
  return (
    <Flex gap="4" direction="column">
      <TextField
        label="Username"
        defaultValue="xXx_test_xXx"
        validationState="warning"
        variant="primary"
        description="Username should be at least 6 characters"
      />
      <TextField
        label="Username"
        defaultValue="xXx_test_xXx"
        validationState="warning"
        variant="secondary"
        description="Username should be at least 6 characters"
      />
      <TextField
        label="Username"
        defaultValue="xXx_test_xXx"
        validationState="warning"
        variant="tertiary"
        description="Username should be at least 6 characters"
      />
    </Flex>
  );
}
