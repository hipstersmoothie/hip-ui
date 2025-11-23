import { Alert } from "@/components/alert";
import { Flex } from "@/components/flex";

export function Variants() {
  return (
    <Flex gap="4" direction="column">
      <Alert variant="info" title="Information">
        This is an informational alert.
      </Alert>
      <Alert variant="success" title="Success">
        Your changes have been saved successfully.
      </Alert>
      <Alert variant="warning" title="Warning">
        Please review your input before submitting.
      </Alert>
      <Alert variant="critical" title="Error">
        Something went wrong. Please try again.
      </Alert>
    </Flex>
  );
}

