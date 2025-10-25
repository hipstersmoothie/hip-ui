import { Button } from "@/components/button";
import { Flex } from "@/components/flex";

export function ButtonVariants() {
  return (
    <Flex gap="4" wrap>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary">Tertiary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="critical">Critical</Button>
      <Button variant="critical-outline">Critical Outline</Button>
    </Flex>
  );
}
