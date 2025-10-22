import { CommandMenu } from "@/components/command-menu";

const items = [
  { id: "item1", name: "Item 1" },
  { id: "item2", name: "Item 2" },
  { id: "item3", name: "Item 3" },
];

export function Basic() {
  return <CommandMenu items={items}>{(item) => item.name}</CommandMenu>;
}
