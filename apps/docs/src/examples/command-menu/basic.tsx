import { CommandMenu } from "@/components/command-menu";
import { MenuItem } from "@/components/menu";

const items = [
  { id: "item1", name: "Item 1" },
  { id: "item2", name: "Item 2" },
  { id: "item3", name: "Item 3" },
];

export function Basic() {
  return (
    <CommandMenu>
      {items.map((item) => (
        <MenuItem key={item.id} id={item.id}>
          {item.name}
        </MenuItem>
      ))}
    </CommandMenu>
  );
}
