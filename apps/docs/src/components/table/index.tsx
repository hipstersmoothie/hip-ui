import * as stylex from "@stylexjs/stylex";
import { ArrowDown, ArrowUp, GripVertical } from "lucide-react";
import { use } from "react";
import {
  TableBodyProps as AriaTableBodyProps,
  TableBody as AriaTableBody,
  TableProps as AriaTableProps,
  Table as AriaTable,
  TableHeader as AriaTableHeader,
  TableHeaderProps as AriaTableHeaderProps,
  useTableOptions,
  Column as AriaColumn,
  Collection,
  Row as AriaRow,
  RowProps as AriaRowProps,
  Cell as AriaCell,
  ColumnProps as AriaColumnProps,
  CellProps as AriaCellProps,
} from "react-aria-components";

import { Checkbox } from "../checkbox";
import { SizeContext } from "../context";
import { IconButton } from "../icon-button";
import { uiColor } from "../theme/semantic-color.stylex";
import { spacing } from "../theme/spacing.stylex";
import { Size, StyleXComponentProps } from "../theme/types";

const styles = stylex.create({
  table: {},
  tableHeader: {},
  row: {},
  column: {
    borderBottomColor: uiColor.border2,
    borderBottomStyle: "solid",
    borderBottomWidth: 1,
  },
  tableBody: {},
  cell: {
    height: {
      default: spacing["8"],
      ":is([data-table-size=md] *)": spacing["10"],
      ":is([data-table-size=lg] *)": spacing["12"],
    },
    paddingBottom: {
      default: spacing["1"],
      ":is([data-table-size=md] *)": spacing["2"],
      ":is([data-table-size=lg] *)": spacing["3"],
    },
    paddingLeft: {
      ":not(:first-child)": spacing["2"],
      ":is([data-table-size=md] *:not(:first-child))": spacing["3"],
      ":is([data-table-size=lg] *:not(:first-child))": spacing["4"],
    },
    paddingRight: {
      ":not(:last-child)": spacing["2"],
      ":is([data-table-size=md] *:not(:last-child))": spacing["3"],
      ":is([data-table-size=lg] *:not(:last-child))": spacing["4"],
    },
    paddingTop: {
      default: spacing["1"],
      ":is([data-table-size=md] *)": spacing["2"],
      ":is([data-table-size=lg] *)": spacing["3"],
    },
    textAlign: "left",
  },
});

export interface TableProps extends StyleXComponentProps<AriaTableProps> {
  size?: Size;
}

export const Table = ({ style, size: sizeProp, ...props }: TableProps) => {
  const size = sizeProp || use(SizeContext);

  return (
    <SizeContext value={size}>
      <AriaTable
        data-table-size={size}
        {...stylex.props(styles.table, style)}
        {...props}
      />
    </SizeContext>
  );
};

export interface TableColumnProps
  extends StyleXComponentProps<Omit<AriaColumnProps, "children">> {
  children?: React.ReactNode;
}

export function TableColumn({ style, children, ...props }: TableColumnProps) {
  return (
    <AriaColumn {...props} {...stylex.props(styles.column, styles.cell, style)}>
      {({ allowsSorting, sortDirection }) => (
        <div className="column-header">
          {children}
          {allowsSorting && (
            <span aria-hidden="true" className="sort-indicator">
              {sortDirection === "ascending" ? (
                <ArrowUp size={14} />
              ) : (
                <ArrowDown size={14} />
              )}
            </span>
          )}
        </div>
      )}
    </AriaColumn>
  );
}

export interface TableHeaderProps<T extends object>
  extends StyleXComponentProps<AriaTableHeaderProps<T>> {}

export function TableHeader<T extends object>({
  children,
  style,
  ...otherProps
}: TableHeaderProps<T>) {
  const { selectionBehavior, selectionMode, allowsDragging } =
    useTableOptions();

  return (
    <AriaTableHeader
      {...stylex.props(styles.tableHeader, style)}
      {...otherProps}
    >
      {/* Add extra columns for drag and drop and selection. */}
      {allowsDragging && <TableColumn />}
      {selectionBehavior === "toggle" && (
        <TableColumn>
          {selectionMode === "multiple" && <Checkbox slot="selection" />}
        </TableColumn>
      )}
      <Collection items={otherProps.columns}>{children}</Collection>
    </AriaTableHeader>
  );
}

export interface TableRowProps<T extends object>
  extends StyleXComponentProps<AriaRowProps<T>> {}

export function TableRow<T extends object>({
  id,
  columns,
  children,
  style,
  ...props
}: TableRowProps<T>) {
  const { selectionBehavior, allowsDragging } = useTableOptions();

  return (
    <AriaRow id={id} {...stylex.props(styles.row, style)} {...props}>
      {allowsDragging && (
        <TableCell>
          <IconButton slot="drag" label="Drag" variant="tertiary">
            <GripVertical size={16} />
          </IconButton>
        </TableCell>
      )}
      {selectionBehavior === "toggle" && (
        <TableCell>
          <Checkbox slot="selection" />
        </TableCell>
      )}
      <Collection items={columns}>{children}</Collection>
    </AriaRow>
  );
}

export interface TableBodyProps<T extends object>
  extends StyleXComponentProps<AriaTableBodyProps<T>> {}

export function TableBody<T extends object>({
  style,
  ...prop
}: TableBodyProps<T>) {
  return <AriaTableBody {...stylex.props(styles.tableBody, style)} {...prop} />;
}

export interface TableCellProps extends StyleXComponentProps<AriaCellProps> {}

export function TableCell({ style, ...props }: TableCellProps) {
  return <AriaCell {...stylex.props(styles.cell, style)} {...props} />;
}
