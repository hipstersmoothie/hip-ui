import { Flex } from "@/components/flex";
import { ToggleButton } from "@/components/toggle-button";

export function Variants() {
  return (
    <Flex gap="4" align="center">
      <ToggleButton variant="primary">Primary</ToggleButton>
      <ToggleButton variant="secondary">Secondary</ToggleButton>
      <ToggleButton variant="tertiary">Tertiary</ToggleButton>
      <ToggleButton variant="outline">Outline</ToggleButton>
    </Flex>
  );
}
