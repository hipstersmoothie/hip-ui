import { Move, Square, Circle, Paintbrush, Pencil } from "lucide-react";

import { IconButton } from "@/components/icon-button";
import { Toolbar, ToolbarGroup, ToolbarSeparator } from "@/components/toolbar";

export function Vertical() {
  return (
    <Toolbar aria-label="Tools" orientation="vertical">
      <ToolbarGroup aria-label="Select">
        <IconButton aria-label="Move" variant="secondary">
          <Move />
        </IconButton>
        <IconButton aria-label="Rectangle" variant="secondary">
          <Square />
        </IconButton>
        <IconButton aria-label="Circle" variant="secondary">
          <Circle />
        </IconButton>
      </ToolbarGroup>
      <ToolbarSeparator />
      <ToolbarGroup aria-label="Draw">
        <IconButton aria-label="Brush" variant="secondary">
          <Paintbrush />
        </IconButton>
        <IconButton aria-label="Pencil" variant="secondary">
          <Pencil />
        </IconButton>
      </ToolbarGroup>
    </Toolbar>
  );
}
