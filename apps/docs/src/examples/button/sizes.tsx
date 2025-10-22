import { Button } from "@/components/button";
import { Flex } from "@/components/flex";

export function ButtonSizes() {
  return (
    <Flex gap="4" align="center">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </Flex>
  );
}
