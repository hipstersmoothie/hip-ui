import * as stylex from "@stylexjs/stylex";

import { ListBox, ListBoxItem } from "@/components/listbox";

import { uiColor } from "../../components/theme/color.stylex";

const styles = stylex.create({
  listBox: {
    borderColor: uiColor.border1,
    borderStyle: "solid",
    borderWidth: 1,
    overflow: "auto",
    height: "300px",
    width: "300px",
  },
});

const items = Array.from({ length: 1000 }, (_, i) => ({
  id: "item" + (i + 1),
  name: "Item " + (i + 1),
}));

export function Virtualization() {
  return (
    <ListBox items={items} isVirtualized style={styles.listBox}>
      {(item) => (
        <ListBoxItem key={item.id} id={item.id}>
          {item.name}
        </ListBoxItem>
      )}
    </ListBox>
  );
}
