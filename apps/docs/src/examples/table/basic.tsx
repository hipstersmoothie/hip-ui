import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@/components/table";

const columns = [
  { id: "name", name: "Name" },
  { id: "email", name: "Email" },
  { id: "role", name: "Role" },
];

const rows = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "User" },
];

export function Basic() {
  return (
    <Table>
      <TableHeader>
        {columns.map((column) => (
          <TableColumn key={column.id} id={column.id}>
            {column.name}
          </TableColumn>
        ))}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.id} id={item.id}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>{item.role}</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
