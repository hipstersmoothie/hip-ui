import { Alert } from "@/components/alert";
import { Button } from "@/components/button";
import { Flex } from "@/components/flex";

export function WithAction() {
  return (
    <Flex gap="4" direction="column">
      <Alert
        variant="info"
        title="Information"
        action={<Button variant="tertiary">Learn more</Button>}
      >
        This alert includes an action button.
      </Alert>
      <Alert
        variant="success"
        title="Success"
        action={<Button variant="tertiary">View details</Button>}
      >
        Your changes have been saved successfully.
      </Alert>
      <Alert
        variant="warning"
        title="Warning"
        action={
          <Flex gap="1">
            <Button variant="tertiary">Cancel</Button>
            <Button variant="primary">Continue</Button>
          </Flex>
        }
      >
        Please review your input before submitting.
      </Alert>
      <Alert
        variant="critical"
        title="Error"
        onDismiss={() => {}}
        action={<Button variant="critical">Retry</Button>}
      >
        Something went wrong. Please try again.
      </Alert>
    </Flex>
  );
}
