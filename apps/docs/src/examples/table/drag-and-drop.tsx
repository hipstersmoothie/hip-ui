import * as stylex from "@stylexjs/stylex";
import { ResizableTableContainer, useDragAndDrop } from "react-aria-components";
import { useListData } from "react-stately";

import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  TableDropIndicator,
} from "@/components/table";

const styles = stylex.create({
  wrapper: {
    width: "100%",
  },
});

const columns = [
  { id: "name", name: "Name" },
  { id: "email", name: "Email" },
  { id: "role", name: "Role" },
];

interface RoleItem {
  id: number;
  name: string;
  email: string;
  role: string;
}

export function DragAndDrop() {
  const list = useListData<RoleItem>({
    initialItems: [
      { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
      { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
      { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "User" },
      {
        id: 4,
        name: "Alice Brown",
        email: "alice@example.com",
        role: "Moderator",
      },
      {
        id: 5,
        name: "Charlie Davis",
        email: "charlie@example.com",
        role: "User",
      },
    ],
  });

  const { dragAndDropHooks } = useDragAndDrop<RoleItem>({
    getItems: (_, items) =>
      items.map((item) => ({
        "text/plain": item.name,
      })),
    onReorder(e) {
      if (e.target.dropPosition === "before") {
        list.moveBefore(e.target.key, e.keys);
      } else if (e.target.dropPosition === "after") {
        list.moveAfter(e.target.key, e.keys);
      }
    },
    renderDropIndicator(target) {
      return <TableDropIndicator target={target} />;
    },
  });

  return (
    <ResizableTableContainer {...stylex.props(styles.wrapper)}>
      <Table style={styles.wrapper} dragAndDropHooks={dragAndDropHooks}>
        <TableHeader>
          {columns.map((column) => (
            <TableColumn isRowHeader key={column.id} id={column.id}>
              {column.name}
            </TableColumn>
          ))}
        </TableHeader>
        <TableBody items={list.items}>
          {(item) => (
            <TableRow id={item.id} textValue={item.name}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.role}</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </ResizableTableContainer>
  );
}
