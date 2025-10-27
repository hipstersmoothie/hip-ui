import * as stylex from "@stylexjs/stylex";

import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
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

const rows = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    role: "User",
    disabled: true,
  },
  { id: 4, name: "Alice Brown", email: "alice@example.com", role: "Moderator" },
  {
    id: 5,
    name: "Charlie Davis",
    email: "charlie@example.com",
    role: "User",
    disabled: true,
  },
];

export function DisabledRows() {
  return (
    <Table style={styles.wrapper}>
      <TableHeader>
        {columns.map((column) => (
          <TableColumn isRowHeader key={column.id} id={column.id}>
            {column.name}
          </TableColumn>
        ))}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow id={item.id} isDisabled={item.disabled}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>{item.role}</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
