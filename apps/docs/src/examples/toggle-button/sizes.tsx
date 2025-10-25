import { Flex } from "@/components/flex";
import { ToggleButton } from "@/components/toggle-button";

export function Sizes() {
  return (
    <Flex gap="4" align="center">
      <ToggleButton size="sm">Small</ToggleButton>
      <ToggleButton size="md">Medium</ToggleButton>
      <ToggleButton size="lg">Large</ToggleButton>
    </Flex>
  );
}
