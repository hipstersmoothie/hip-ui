import * as stylex from "@stylexjs/stylex";
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Circle,
  MoreHorizontal,
  PlusCircle,
  Settings2,
} from "lucide-react";
import { useState } from "react";
import {
  ResizableTableContainer,
  Pressable,
  Autocomplete,
  useFilter,
} from "react-aria-components";

import { Avatar } from "@/components/avatar";
import { Badge } from "@/components/badge";
import { Button } from "@/components/button";
import { Card } from "@/components/card";
import { Flex } from "@/components/flex";
import { IconButton } from "@/components/icon-button";
import { Kbd } from "@/components/kbd";
import { ListBox, ListBoxItem } from "@/components/listbox";
import { Menu, MenuItem, MenuSeparator } from "@/components/menu";
import { Popover } from "@/components/popover";
import { SearchField } from "@/components/search-field";
import { Select, SelectItem } from "@/components/select";
import { Separator } from "@/components/separator";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@/components/table";
import { Heading2, SmallBody } from "@/components/typography";
import { Text } from "@/components/typography/text";

import { radius } from "../components/theme/radius.stylex";
import { uiColor } from "../components/theme/semantic-color.stylex";
import { shadow } from "../components/theme/shadow.stylex";
import { spacing } from "../components/theme/spacing.stylex";

const styles = stylex.create({
  main: {
    backgroundColor: uiColor.bg,
    borderColor: uiColor.border1,
    borderRadius: radius.lg,
    borderStyle: "solid",
    borderWidth: 1,
    boxShadow: shadow.md,
    display: "flex",
    flexDirection: "column",
    marginTop: spacing["16"],
    overflow: "hidden",
    paddingBottom: spacing["6"],
    paddingLeft: spacing["8"],
    paddingRight: spacing["8"],
    paddingTop: spacing["6"],
    width: 1200,
  },
  emptyState: {
    padding: spacing["8"],
  },
  noPadding: {
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
  },
  filterSection: {
    padding: spacing["2"],
  },
});

interface Task {
  id: string;
  title: string;
  type: "Documentation" | "Bug" | "Feature";
  status: "Todo" | "In Progress" | "Done" | "Backlog" | "Canceled";
  priority: "Low" | "Medium" | "High";
}

const tasks: Task[] = [
  {
    id: "TASK-8782",
    title:
      "You can't compress the program without quantifying the open-source SSD",
    type: "Documentation",
    status: "In Progress",
    priority: "Medium",
  },
  {
    id: "TASK-7878",
    title:
      "Try to calculate the EXE feed, maybe it will index the multi-byte pixel!",
    type: "Documentation",
    status: "Backlog",
    priority: "Medium",
  },
  {
    id: "TASK-7839",
    title: "We need to bypass the neural TCP card!",
    type: "Bug",
    status: "Todo",
    priority: "High",
  },
  {
    id: "TASK-5562",
    title:
      "The SAS interface is down, hack the mobile port so we can back up the PNG pixel!",
    type: "Feature",
    status: "Backlog",
    priority: "Medium",
  },
  {
    id: "TASK-8686",
    title:
      "I'll parse the back-end RSS protocol, that should driver the SMTP card!",
    type: "Documentation",
    status: "Canceled",
    priority: "Medium",
  },
  {
    id: "TASK-1280",
    title:
      "Use the digital TLS card, then you can synthesize the optical protocol!",
    type: "Feature",
    status: "Done",
    priority: "High",
  },
  {
    id: "TASK-7262",
    title:
      "You can't compress the program without quantifying the open-source SSD",
    type: "Feature",
    status: "Done",
    priority: "High",
  },
  {
    id: "TASK-1138",
    title:
      "Try to calculate the EXE feed, maybe it will index the multi-byte pixel!",
    type: "Bug",
    status: "In Progress",
    priority: "Medium",
  },
  {
    id: "TASK-7184",
    title: "We need to bypass the neural TCP card!",
    type: "Feature",
    status: "Todo",
    priority: "Low",
  },
  {
    id: "TASK-4521",
    title:
      "Backing up the firewall won't do anything, we need to copy the neural XML protocol!",
    type: "Bug",
    status: "Todo",
    priority: "High",
  },
  {
    id: "TASK-9347",
    title:
      "The CSS feed is down, navigate the virtual interface so we can connect the JSON protocol!",
    type: "Feature",
    status: "In Progress",
    priority: "Low",
  },
  {
    id: "TASK-2314",
    title:
      "If we override the microchip, we can get to the USB protocol through the auxiliary RAM driver!",
    type: "Documentation",
    status: "Done",
    priority: "Medium",
  },
  {
    id: "TASK-6578",
    title:
      "The HTTP matrix is down, quantify the cross-platform alarm so we can generate the API pixel!",
    type: "Bug",
    status: "Backlog",
    priority: "High",
  },
  {
    id: "TASK-8812",
    title: "We need to program the primary IB bandwidth!",
    type: "Feature",
    status: "Canceled",
    priority: "Low",
  },
  {
    id: "TASK-3456",
    title:
      "Calculating the bus won't do anything, we need to navigate the optical SSL application!",
    type: "Documentation",
    status: "Todo",
    priority: "Medium",
  },
  {
    id: "TASK-1923",
    title:
      "The GB interface is down, compress the wireless card so we can transmit the PNG array!",
    type: "Feature",
    status: "In Progress",
    priority: "High",
  },
  {
    id: "TASK-7743",
    title:
      "You can't generate the capacitor without indexing the auxiliary XSS monitor!",
    type: "Bug",
    status: "Done",
    priority: "Low",
  },
  {
    id: "TASK-5431",
    title:
      "Try to override the SQL feed, maybe it will back up the bluetooth pixel!",
    type: "Documentation",
    status: "Backlog",
    priority: "Medium",
  },
  {
    id: "TASK-2967",
    title:
      "The ADP array is down, copy the neural bandwidth so we can parse the FTP pixel!",
    type: "Feature",
    status: "Todo",
    priority: "High",
  },
  {
    id: "TASK-5160",
    title:
      "The SAS interface is down, hack the mobile port so we can back up the PNG pixel!",
    type: "Bug",
    status: "In Progress",
    priority: "High",
  },
];

const StatusIcon = ({ status }: { status: Task["status"] }) => {
  switch (status) {
    case "Todo": {
      return <Circle size={16} />;
    }
    case "In Progress": {
      return <CheckCircle2 size={16} />;
    }
    case "Done": {
      return <CheckCircle2 size={16} />;
    }
    case "Backlog": {
      return <Circle size={16} />;
    }
    case "Canceled": {
      return <CheckCircle2 size={16} />;
    }
  }
};

const PriorityIcon = ({ priority }: { priority: Task["priority"] }) => {
  switch (priority) {
    case "High": {
      return <ArrowUp size={16} />;
    }
    case "Medium": {
      return <ArrowRight size={16} />;
    }
    case "Low": {
      return <ArrowDown size={16} />;
    }
  }
};

const columns = [
  { id: "task", name: "Task" },
  { id: "status", name: "Status", allowsSorting: true, width: 140 },
  { id: "priority", name: "Priority", allowsSorting: true, width: 120 },
  { id: "actions", name: "", allowsSorting: true, width: 60 },
];

const hideableColumns = ["status", "priority"];

function Filter<T extends string>({
  title,
  selectedKeys,
  onSelectionChange,
  children,
}: {
  title: string;
  selectedKeys: T[];
  onSelectionChange: (keys: T[]) => void;
  children: React.ReactNode;
}) {
  const { contains } = useFilter({ sensitivity: "base" });

  return (
    <Popover
      style={styles.noPadding}
      trigger={
        <Button variant="outline">
          <PlusCircle />
          {title}
          {selectedKeys.length > 0 && (
            <Badge size="sm" variant="default">
              {selectedKeys.join(" / ")}
            </Badge>
          )}
        </Button>
      }
    >
      <Autocomplete filter={contains}>
        <Flex direction="column" gap="1" style={styles.filterSection}>
          <SearchField placeholder={`Search ${title}...`} />
        </Flex>
        <Separator />
        <ListBox
          style={styles.filterSection}
          variant="checkbox"
          selectionMode="multiple"
          selectedKeys={selectedKeys}
          onSelectionChange={(keys) => {
            if (keys === "all") {
              //
            } else {
              onSelectionChange([...keys] as T[]);
            }
          }}
        >
          {children}
        </ListBox>
        {selectedKeys.length > 0 && (
          <>
            <Separator />
            <Flex direction="column" style={styles.filterSection}>
              <Button variant="outline" onClick={() => onSelectionChange([])}>
                Clear
              </Button>
            </Flex>
          </>
        )}
      </Autocomplete>
    </Popover>
  );
}

export function TodoTable() {
  const [search, setSearch] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selectedRows, setSelectedRows] = useState<Task[]>([]);
  const [page, setPage] = useState(1);
  const [priorityFilter, setPriorityFilter] = useState<Task["priority"][]>([]);
  const [statusFilter, setStatusFilter] = useState<Task["status"][]>([]);
  const currentPageTasks = tasks
    .filter((task) => task.title.toLowerCase().includes(search.toLowerCase()))
    .filter(
      (task) =>
        priorityFilter.includes(task.priority) ||
        statusFilter.includes(task.status) ||
        (priorityFilter.length === 0 && statusFilter.length === 0),
    )
    .slice((page - 1) * rowsPerPage, page * rowsPerPage);
  const [visibleColumns, setVisibleColumns] =
    useState<string[]>(hideableColumns);
  const activeColumns = columns.filter(
    (column) =>
      !hideableColumns.includes(column.id) ||
      visibleColumns.includes(column.id),
  );

  return (
    <Flex direction="column" gap="6" style={styles.main}>
      <Flex align="start" justify="between">
        <Flex direction="column" gap="1">
          <Heading2>Welcome back!</Heading2>
          <SmallBody variant="secondary">
            Here's a list of your tasks for this month.
          </SmallBody>
        </Flex>
        <Menu
          placement="bottom end"
          trigger={
            <Pressable>
              <Avatar
                fallback="S"
                src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
              />
            </Pressable>
          }
          header={
            <Flex direction="column" gap="1">
              <Text size="sm" weight="semibold">
                Andrew
              </Text>
              <Text size="sm" variant="secondary">
                andrew@example.com
              </Text>
            </Flex>
          }
        >
          <MenuItem suffix={<Kbd>Shift+MetaOrCtrl+P</Kbd>}>Profile</MenuItem>
          <MenuItem suffix={<Kbd>MetaOrCtrl+B</Kbd>}>Billing</MenuItem>
          <MenuItem suffix={<Kbd>MetaOrCtrl+S</Kbd>}>Settings</MenuItem>
          <MenuItem>New Team</MenuItem>
          <MenuSeparator />
          <MenuItem suffix={<Kbd>Shift+MetaOrCtrl+Q</Kbd>}>Logout</MenuItem>
        </Menu>
      </Flex>

      <Flex justify="between" align="center" wrap gap="3">
        <Flex gap="2">
          <div style={{ minWidth: "400px" }}>
            <SearchField
              placeholder="Filter tasks..."
              value={search}
              onChange={setSearch}
            />
          </div>
          <Filter
            title="Status"
            selectedKeys={statusFilter}
            onSelectionChange={setStatusFilter}
          >
            <ListBoxItem
              id="Todo"
              suffix={
                <Badge size="sm" variant="default">
                  {tasks.filter((task) => task.status === "Todo").length}
                </Badge>
              }
            >
              Todo
            </ListBoxItem>
            <ListBoxItem
              id="In Progress"
              suffix={
                <Badge size="sm" variant="default">
                  {tasks.filter((task) => task.status === "In Progress").length}
                </Badge>
              }
            >
              In Progress
            </ListBoxItem>
            <ListBoxItem
              id="Done"
              suffix={
                <Badge size="sm" variant="default">
                  {tasks.filter((task) => task.status === "Done").length}
                </Badge>
              }
            >
              Done
            </ListBoxItem>
            <ListBoxItem id="Backlog">Backlog</ListBoxItem>
            <ListBoxItem
              id="Canceled"
              suffix={
                <Badge size="sm" variant="default">
                  {tasks.filter((task) => task.status === "Canceled").length}
                </Badge>
              }
            >
              Canceled
            </ListBoxItem>
          </Filter>
          <Filter
            title="Priority"
            selectedKeys={priorityFilter}
            onSelectionChange={setPriorityFilter}
          >
            <ListBoxItem
              id="High"
              suffix={
                <Badge size="sm" variant="default">
                  {tasks.filter((task) => task.priority === "High").length}
                </Badge>
              }
            >
              High
            </ListBoxItem>
            <ListBoxItem
              id="Medium"
              suffix={
                <Badge size="sm" variant="default">
                  {tasks.filter((task) => task.priority === "Medium").length}
                </Badge>
              }
            >
              Medium
            </ListBoxItem>
            <ListBoxItem
              id="Low"
              suffix={
                <Badge size="sm" variant="default">
                  {tasks.filter((task) => task.priority === "Low").length}
                </Badge>
              }
            >
              Low
            </ListBoxItem>
          </Filter>
        </Flex>

        <Flex gap="2">
          <Menu
            placement="bottom end"
            selectedKeys={visibleColumns}
            onSelectionChange={(keys) => {
              if (keys === "all") {
                setVisibleColumns(columns.map((column) => column.id));
              } else {
                setVisibleColumns([...keys] as string[]);
              }
            }}
            selectionMode="multiple"
            trigger={
              <Button variant="outline">
                <Settings2 />
                View
              </Button>
            }
          >
            <MenuItem id="status">Status</MenuItem>
            <MenuItem id="priority">Priority</MenuItem>
          </Menu>
          <Button>Add Task</Button>
        </Flex>
      </Flex>

      <Card>
        <ResizableTableContainer>
          <Table
            selectionMode="multiple"
            selectedKeys={selectedRows.map((task) => task.id)}
            onSelectionChange={(keys) => {
              if (keys === "all") {
                setSelectedRows(tasks);
              } else {
                setSelectedRows(
                  [...keys]
                    .map((key) => tasks.find((task) => task.id === key))
                    .filter((t): t is Task => t !== undefined),
                );
              }
            }}
          >
            <TableHeader columns={activeColumns}>
              {(column) => {
                return (
                  <TableColumn
                    key={column.id}
                    id={column.id}
                    allowsSorting={column.allowsSorting}
                    width={column.width}
                  >
                    {column.name}
                  </TableColumn>
                );
              }}
            </TableHeader>
            <TableBody
              items={currentPageTasks}
              dependencies={[activeColumns]}
              renderEmptyState={() => (
                <Flex align="center" justify="center" style={styles.emptyState}>
                  <Text size="sm" variant="secondary">
                    No tasks found
                  </Text>
                </Flex>
              )}
            >
              {(task: Task) => (
                <TableRow id={task.id}>
                  <TableCell>
                    <Flex align="center" gap="2">
                      <Badge size="sm" variant="default">
                        {task.type}
                      </Badge>
                      <Text size="sm" variant="secondary">
                        {task.title}
                      </Text>
                    </Flex>
                  </TableCell>
                  {visibleColumns.includes("status") && (
                    <TableCell>
                      <Flex align="center" gap="1.5">
                        <StatusIcon status={task.status} />
                        <Text size="sm">{task.status}</Text>
                      </Flex>
                    </TableCell>
                  )}
                  {visibleColumns.includes("priority") && (
                    <TableCell>
                      <Flex align="center" gap="1.5">
                        <PriorityIcon priority={task.priority} />
                        <Text size="sm">{task.priority}</Text>
                      </Flex>
                    </TableCell>
                  )}
                  <TableCell>
                    <Menu
                      trigger={
                        <IconButton label="More options" variant="tertiary">
                          <MoreHorizontal />
                        </IconButton>
                      }
                    >
                      <MenuItem>Edit</MenuItem>
                      <MenuItem>Duplicate</MenuItem>
                      <MenuItem>Archive</MenuItem>
                    </Menu>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </ResizableTableContainer>
      </Card>

      <Flex justify="between" align="center">
        <Text size="sm">
          {selectedRows.length} of {tasks.length} row(s) selected.
        </Text>

        <Flex align="center" gap="2">
          <Text size="sm" variant="secondary">
            Rows per page
          </Text>
          <Select
            value={rowsPerPage.toString()}
            onChange={(v) =>
              v &&
              setRowsPerPage(typeof v === "number" ? v : Number.parseInt(v))
            }
            size="sm"
          >
            <SelectItem id="10">10</SelectItem>
            <SelectItem id="25">25</SelectItem>
            <SelectItem id="50">50</SelectItem>
            <SelectItem id="100">100</SelectItem>
          </Select>
        </Flex>

        <Flex gap="2" align="center">
          <Text size="sm" variant="secondary">
            Page {page} of {Math.ceil(tasks.length / rowsPerPage)}
          </Text>
          <Flex gap="1">
            <IconButton
              label="First page"
              variant="outline"
              size="sm"
              isDisabled={page === 1}
              onClick={() => setPage(1)}
            >
              <ChevronsLeft />
            </IconButton>
            <IconButton
              label="Previous page"
              variant="outline"
              size="sm"
              isDisabled={page === 1}
              onClick={() => setPage(page - 1)}
            >
              <ChevronLeft />
            </IconButton>
            <IconButton
              label="Next page"
              variant="outline"
              size="sm"
              isDisabled={page === Math.ceil(tasks.length / rowsPerPage)}
              onClick={() => setPage(page + 1)}
            >
              <ChevronRight />
            </IconButton>
            <IconButton
              label="Last page"
              variant="outline"
              size="sm"
              isDisabled={page === Math.ceil(tasks.length / rowsPerPage)}
              onClick={() => setPage(Math.ceil(tasks.length / rowsPerPage))}
            >
              <ChevronsRight />
            </IconButton>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
