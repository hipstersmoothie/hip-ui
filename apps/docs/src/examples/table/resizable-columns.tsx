import * as stylex from "@stylexjs/stylex";
import { ResizableTableContainer } from "react-aria-components";

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

const rows = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "User",
    status: "Active",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    role: "User",
    status: "Inactive",
  },
  {
    id: 4,
    name: "Alice Brown",
    email: "alice@example.com",
    role: "Moderator",
    status: "Active",
  },
  {
    id: 5,
    name: "Charlie Davis",
    email: "charlie@example.com",
    role: "User",
    status: "Pending",
  },
];

export function ResizableColumns() {
  return (
    <div {...stylex.props(styles.wrapper)}>
      <ResizableTableContainer>
        <Table>
          <TableHeader>
            <TableColumn
              isRowHeader
              id="name"
              defaultWidth={100}
              hasResizer
              hasEllipsis
            >
              Name
            </TableColumn>
            <TableColumn
              isRowHeader
              id="role"
              defaultWidth={100}
              hasResizer
              hasEllipsis
            >
              Role
            </TableColumn>
            <TableColumn
              isRowHeader
              id="email"
              defaultWidth={300}
              hasResizer
              hasEllipsis
            >
              Email
            </TableColumn>
            <TableColumn isRowHeader id="status" defaultWidth="1fr" hasEllipsis>
              Status
            </TableColumn>
          </TableHeader>
          <TableBody items={rows}>
            {(item) => (
              <TableRow id={item.id} textValue={item.name}>
                <TableCell hasEllipsis>{item.name}</TableCell>
                <TableCell hasEllipsis>{item.role}</TableCell>
                <TableCell hasEllipsis>{item.email}</TableCell>
                <TableCell hasEllipsis>{item.status}</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </ResizableTableContainer>
    </div>
  );
}
