import { Button } from "@/components/button";
import { Flex } from "@/components/flex";

export function ButtonLoading() {
  return (
    <Flex gap="4" wrap>
      <Button isLoading>Loading</Button>
      <Button variant="secondary" isLoading>
        Loading Secondary
      </Button>
    </Flex>
  );
}
