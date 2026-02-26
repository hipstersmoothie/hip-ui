import * as stylex from "@stylexjs/stylex";

import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@/components/table";

import { uiColor } from "../../components/theme/color.stylex";

const styles = stylex.create({
  wrapper: {
    borderColor: uiColor.border1,
    borderStyle: "solid",
    borderWidth: 1,
    overflow: "auto",
    height: "400px",
    width: "100%",
  },
  table: {
    width: "100%",
  },
});

const columns = [
  { id: "id", name: "ID" },
  { id: "name", name: "Name" },
  { id: "email", name: "Email" },
  { id: "role", name: "Role" },
];

const rows = Array.from({ length: 1000 }, (_, i) => ({
  id: i + 1,
  name: "User " + (i + 1),
  email: "user" + (i + 1) + "@example.com",
  role: i % 3 === 0 ? "Admin" : i % 3 === 1 ? "Moderator" : "User",
}));

export function Virtualization() {
  return (
    <div {...stylex.props(styles.wrapper)}>
      <Table isVirtualized style={styles.table}>
        <TableHeader>
          {columns.map((column) => (
            <TableColumn isRowHeader key={column.id} id={column.id}>
              {column.name}
            </TableColumn>
          ))}
        </TableHeader>
        <TableBody items={rows}>
          {(item) => (
            <TableRow key={item.id} id={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.role}</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
