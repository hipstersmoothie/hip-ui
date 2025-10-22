import { Menu, MenuItem } from "@/components/menu";
import { Button } from "@/components/button";

export function Basic() {
  return (
    <Menu trigger={<Button>Open Menu</Button>}>
      <MenuItem>Profile</MenuItem>
      <MenuItem>Settings</MenuItem>
      <MenuItem>Help</MenuItem>
    </Menu>
  );
}
