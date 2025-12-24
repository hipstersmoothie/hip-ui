import { Alert } from "@/components/alert";
import { Flex } from "@/components/flex";

export function TitleOnly() {
  return (
    <Flex gap="4" direction="column">
      <Alert variant="info" title="Information" />
      <Alert variant="success" title="Success" />
      <Alert variant="warning" title="Warning" />
      <Alert variant="critical" title="Error" />
    </Flex>
  );
}
