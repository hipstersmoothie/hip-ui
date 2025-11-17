import * as stylex from "@stylexjs/stylex";
import { useState } from "react";

import { Card } from "@/components/card";
import { EditableText } from "@/components/editable-text";
import { ListBox, ListBoxItem } from "@/components/listbox";

import { spacing } from "../../components/theme/spacing.stylex";

const styles = stylex.create({
  card: {
    paddingBottom: spacing["1"],
    paddingTop: spacing["1"],
    width: "300px",
  },
});

const initialItems = [
  { id: "item1", name: "Task 1" },
  { id: "item2", name: "Task 2" },
  { id: "item3", name: "Task 3" },
];

export function Composition() {
  const [items, setItems] = useState(initialItems);

  const updateItem = (id: string, newName: string) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, name: newName } : item,
      ),
    );
  };

  return (
    <Card style={styles.card}>
      <ListBox
        items={items}
        selectionMode="single"
        defaultSelectedKeys={["item1"]}
      >
        {(item) => (
          <ListBoxItem key={item.id} id={item.id}>
            <EditableText onChange={(value) => updateItem(item.id, value)}>
              {item.name}
            </EditableText>
          </ListBoxItem>
        )}
      </ListBox>
    </Card>
  );
}
