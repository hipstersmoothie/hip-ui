import { IconButton } from "@/components/icon-button";
import { Flex } from "@/components/flex";
import { Plus, Minus, Settings } from "lucide-react";

export function IconButtonSizes() {
  return (
    <Flex gap="4" align="center">
      <IconButton label="Small" size="sm">
        <Plus />
      </IconButton>
      <IconButton label="Medium" size="md">
        <Minus />
      </IconButton>
      <IconButton label="Large" size="lg">
        <Settings />
      </IconButton>
    </Flex>
  );
}
