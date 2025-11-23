import { Alert } from "@/components/alert";
import { Button } from "@/components/button";
import { Flex } from "@/components/flex";

export function WithActionTitleOnly() {
  return (
    <Flex gap="4" direction="column">
      <Alert
        variant="info"
        title="Information"
        action={<Button variant="tertiary">Learn more</Button>}
      />
      <Alert
        variant="success"
        title="Success"
        action={<Button variant="tertiary">View details</Button>}
      />
      <Alert
        variant="critical"
        title="Error"
        onDismiss={() => {}}
        action={
          <Flex gap="2">
            <Button variant="critical">Retry</Button>
          </Flex>
        }
      />
    </Flex>
  );
}
