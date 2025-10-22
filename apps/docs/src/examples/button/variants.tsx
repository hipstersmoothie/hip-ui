import { Button } from "@/components/button";
import { Flex } from "@/components/flex";

export function ButtonVariants() {
  return (
    <Flex gap="4" wrap>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary">Tertiary</Button>
      <Button variant="ghost">Ghost</Button>
    </Flex>
  );
}
