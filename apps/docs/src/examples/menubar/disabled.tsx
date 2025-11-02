import { MenuItem, MenuSeparator } from "@/components/menu";
import { Menubar, MenubarItem } from "@/components/menubar";

export function Disabled() {
  return (
    <Menubar>
      <MenubarItem label="File">
        <MenuItem>New File</MenuItem>
        <MenuItem>Open</MenuItem>
        <MenuItem>Save</MenuItem>
      </MenubarItem>
      <MenubarItem label="Edit" isDisabled>
        <MenuItem>Cut</MenuItem>
        <MenuItem>Copy</MenuItem>
        <MenuItem>Paste</MenuItem>
      </MenubarItem>
      <MenubarItem label="View">
        <MenuItem>Zoom In</MenuItem>
        <MenuItem>Zoom Out</MenuItem>
        <MenuSeparator />
        <MenuItem>Toggle Layout</MenuItem>
      </MenubarItem>
    </Menubar>
  );
}
