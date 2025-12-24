import { MenuItem, MenuSeparator } from "@/components/menu";
import { Menubar, MenubarItem } from "@/components/menubar";
import { Flex } from "@/components/flex";

export function Size() {
  return (
    <Flex direction="column" gap="4">
      <Menubar size="sm">
        <MenubarItem label="File">
          <MenuItem>New</MenuItem>
          <MenuItem>Open</MenuItem>
          <MenuSeparator />
          <MenuItem>Save</MenuItem>
        </MenubarItem>
        <MenubarItem label="Edit">
          <MenuItem>Cut</MenuItem>
          <MenuItem>Copy</MenuItem>
          <MenuItem>Paste</MenuItem>
        </MenubarItem>
      </Menubar>

      <Menubar size="md">
        <MenubarItem label="File">
          <MenuItem>New</MenuItem>
          <MenuItem>Open</MenuItem>
          <MenuSeparator />
          <MenuItem>Save</MenuItem>
        </MenubarItem>
        <MenubarItem label="Edit">
          <MenuItem>Cut</MenuItem>
          <MenuItem>Copy</MenuItem>
          <MenuItem>Paste</MenuItem>
        </MenubarItem>
      </Menubar>

      <Menubar size="lg">
        <MenubarItem label="File">
          <MenuItem>New</MenuItem>
          <MenuItem>Open</MenuItem>
          <MenuSeparator />
          <MenuItem>Save</MenuItem>
        </MenubarItem>
        <MenubarItem label="Edit">
          <MenuItem>Cut</MenuItem>
          <MenuItem>Copy</MenuItem>
          <MenuItem>Paste</MenuItem>
        </MenubarItem>
      </Menubar>
    </Flex>
  );
}
