import { MenuIcon } from "lucide-react";

import { Button } from "@/components/button";
import { ButtonGroup } from "@/components/button-group";
import { IconButton } from "@/components/icon-button";

export function Basic() {
  return (
    <ButtonGroup>
      <IconButton label="Menu">
        <MenuIcon />
      </IconButton>
      <Button>First</Button>
      <Button>Second</Button>
      <Button>Third</Button>
    </ButtonGroup>
  );
}
