import { Flex } from "@/components/flex";
import { ToggleButton } from "@/components/toggle-button";
import { PinIcon } from "lucide-react";

export function Basic() {
  return (
    <Flex gap="2">
      <ToggleButton>Toggle</ToggleButton>
      <ToggleButton>
        <PinIcon />
      </ToggleButton>
    </Flex>
  );
}
