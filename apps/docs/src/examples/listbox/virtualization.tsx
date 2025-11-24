import { ListBox, ListBoxItem } from "@/components/listbox";
import { uiColor } from "../../components/theme/color.stylex";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  listBox: {
    height: "300px",
    width: "300px",
    borderWidth: 1,
    borderColor: uiColor.border1,
    borderStyle: "solid",
    overflow: "auto",
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
