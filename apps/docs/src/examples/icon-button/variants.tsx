import { Plus, Minus, Settings, Heart, Star } from "lucide-react";

import { Flex } from "@/components/flex";
import { IconButton } from "@/components/icon-button";

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
      <IconButton label="Ghost" variant="critical">
        <Heart />
      </IconButton>
      <IconButton label="Critical" variant="critical-outline">
        <Star />
      </IconButton>
    </Flex>
  );
}
