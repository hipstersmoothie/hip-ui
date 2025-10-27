import * as stylex from "@stylexjs/stylex";
import { useMemo, useState } from "react";
import { SortDescriptor } from "react-stately";

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
  { id: "name", name: "Name", allowsSorting: true },
  { id: "email", name: "Email", allowsSorting: true },
  { id: "role", name: "Role" },
];

const rows = [
  { id: 4, name: "Jane Smith", email: "jane@example.com", role: "User" },
  { id: 2, name: "Bob Johnson", email: "bob@example.com", role: "User" },
  { id: 1, name: "Alice Brown", email: "alice@example.com", role: "Moderator" },
  { id: 3, name: "Charlie Davis", email: "charlie@example.com", role: "User" },
  { id: 5, name: "John Doe", email: "john@example.com", role: "Admin" },
];

export function Sorting() {
  const [sortDescriptor, setSortDescriptor] = useState<
    SortDescriptor | undefined
  >();

  const sortedRows = useMemo(() => {
    const sorted = rows.toSorted((a, b) => {
      if (sortDescriptor?.column === "name") {
        return a.name.localeCompare(b.name);
      }
      if (sortDescriptor?.column === "email") {
        return a.email.localeCompare(b.email);
      }

      return 0;
    });

    if (sortDescriptor?.direction === "descending") {
      return sorted.toReversed();
    }

    return sorted;
  }, [sortDescriptor]);

  return (
    <Table
      style={styles.wrapper}
      sortDescriptor={sortDescriptor}
      onSortChange={setSortDescriptor}
    >
      <TableHeader>
        {columns.map((column) => (
          <TableColumn
            key={column.id}
            id={column.id}
            allowsSorting={column.allowsSorting}
            isRowHeader
          >
            {column.name}
          </TableColumn>
        ))}
      </TableHeader>
      <TableBody items={sortedRows}>
        {(item) => (
          <TableRow id={item.id} textValue={item.name}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>{item.role}</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
