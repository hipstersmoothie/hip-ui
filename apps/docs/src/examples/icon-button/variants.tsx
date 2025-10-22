import { IconButton } from "@/components/icon-button";
import { Flex } from "@/components/flex";
import { Plus, Minus, Settings, Heart, Star } from "lucide-react";

export function IconButtonVariants() {
  return (
    <Flex gap="4" wrap>
      <IconButton label="Primary" variant="primary">
        <Plus />
      </IconButton>
      <IconButton label="Secondary" variant="secondary">
        <Minus />
      </IconButton>
      <IconButton label="Tertiary" variant="tertiary">
        <Settings />
      </IconButton>
      <IconButton label="Ghost" variant="ghost">
        <Heart />
      </IconButton>
    </Flex>
  );
}
