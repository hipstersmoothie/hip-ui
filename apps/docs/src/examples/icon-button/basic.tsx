import { IconButton } from "@/components/icon-button";
import { Plus, Minus, Settings, Heart } from "lucide-react";

export function Basic() {
  return (
    <div>
      <IconButton label="Add">
        <Plus />
      </IconButton>
    </div>
  );
}
