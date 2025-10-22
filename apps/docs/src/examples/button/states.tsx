import { Button } from "@/components/button";
import { Flex } from "@/components/flex";

export function ButtonStates() {
  return (
    <Flex gap="4" wrap>
      <Button>Default</Button>
      <Button isDisabled>Disabled</Button>
      <Button isPressed>Pressed</Button>
    </Flex>
  );
}
