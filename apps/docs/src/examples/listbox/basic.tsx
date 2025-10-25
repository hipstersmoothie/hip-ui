import { ListBox, ListBoxItem } from "@/components/listbox";

const items = [
  { id: "item1", name: "Item 1" },
  { id: "item2", name: "Item 2" },
  { id: "item3", name: "Item 3" },
];

export function Basic() {
  return (
    <ListBox items={items}>
      {(item) => (
        <ListBoxItem key={item.id} id={item.id}>
          {item.name}
        </ListBoxItem>
      )}
    </ListBox>
  );
}
