import { Kbd } from "@/components/kbd";
import { MenuItem, MenuSeparator, SubMenu } from "@/components/menu";
import { Menubar, MenubarItem } from "@/components/menubar";

export function Basic() {
  return (
    <Menubar>
      <MenubarItem label="File">
        <MenuItem suffix={<Kbd>MetaOrCtrl+T</Kbd>}>New Tab</MenuItem>
        <MenuItem suffix={<Kbd>MetaOrCtrl+N</Kbd>}>New Window</MenuItem>
        <MenuItem isDisabled>New Incognito Window</MenuItem>
        <MenuSeparator />
        <SubMenu trigger={<MenuItem>Share</MenuItem>}>
          <MenuItem>Email link</MenuItem>
          <MenuItem>Messages</MenuItem>
          <MenuItem>Notes</MenuItem>
        </SubMenu>
        <MenuSeparator />
        <MenuItem suffix={<Kbd>MetaOrCtrl+P</Kbd>}>Print</MenuItem>
      </MenubarItem>
      <MenubarItem label="Edit">
        <MenuItem suffix={<Kbd>MetaOrCtrl+Z</Kbd>}>Undo</MenuItem>
        <MenuItem suffix={<Kbd>MetaOrCtrl+Y</Kbd>}>Redo</MenuItem>
        <MenuSeparator />
        <MenuItem suffix={<Kbd>MetaOrCtrl+X</Kbd>}>Cut</MenuItem>
        <MenuItem suffix={<Kbd>MetaOrCtrl+C</Kbd>}>Copy</MenuItem>
        <MenuItem suffix={<Kbd>MetaOrCtrl+V</Kbd>}>Paste</MenuItem>
        <MenuSeparator />
        <MenuItem suffix={<Kbd>MetaOrCtrl+A</Kbd>}>Select All</MenuItem>
      </MenubarItem>
      <MenubarItem label="View">
        <MenuItem suffix={<Kbd>MetaOrCtrl+0</Kbd>}>Actual Size</MenuItem>
        <MenuItem suffix={<Kbd>MetaOrCtrl+1</Kbd>}>Zoom In</MenuItem>
        <MenuItem suffix={<Kbd>MetaOrCtrl+2</Kbd>}>Zoom Out</MenuItem>
        <MenuSeparator />
        <MenuItem suffix={<Kbd>MetaOrCtrl+L</Kbd>}>Toggle Layout</MenuItem>
      </MenubarItem>
    </Menubar>
  );
}
