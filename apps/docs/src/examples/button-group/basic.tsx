import { ButtonGroup } from "@/components/button-group";
import { Button } from "@/components/button";
import { IconButton } from "@/components/icon-button";
import { MenuIcon } from "lucide-react";

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
