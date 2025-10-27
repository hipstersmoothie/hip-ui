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
  ColumnResizer,
  DropIndicatorProps,
  DropIndicator,
} from "react-aria-components";

import { Checkbox } from "../checkbox";
import { SizeContext } from "../context";
import { Flex } from "../flex";
import { IconButton } from "../icon-button";
import { primaryColor, uiColor } from "../theme/semantic-color.stylex";
import { spacing } from "../theme/spacing.stylex";
import { Size, StyleXComponentProps } from "../theme/types";
import { LabelText } from "../typography";

const styles = stylex.create({
  table: {
    borderSpacing: 0,
  },
  tableHeader: {},
  row: {
    backgroundColor: {
      default: uiColor.bg,
      ":has(td:hover)": uiColor.bgSubtle,
    },
  },
  column: {
    borderBottomColor: uiColor.border2,
    borderBottomStyle: "solid",
    borderBottomWidth: 1,
    padding: 0,
  },
  columnHeader: {
    alignItems: "center",
    backgroundColor: uiColor.component1,
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: {
      default: spacing["2"],
      ":is(:first-child)": 0,
    },
  },
  tableBody: {},
  cell: {
    borderBottomColor: uiColor.border2,
    borderBottomStyle: "solid",
    borderBottomWidth: {
      default: 1,
      ":is([role=row]:last-child *)": 0,
    },
    overflow: "auto",
  },
  cellContent: {
    boxSizing: "border-box",
    minHeight: {
      default: spacing["8"],
      ":is([data-table-size=md] *)": spacing["10"],
      ":is([data-table-size=lg] *)": spacing["12"],
    },
    opacity: {
      default: 1,
      ":is([aria-disabled=true] *)": 0.5,
    },
    paddingBottom: {
      default: spacing["1"],
      ":is([data-table-size=md] *)": spacing["2"],
      ":is([data-table-size=lg] *)": spacing["3"],
    },
    paddingLeft: {
      default: spacing["2"],
      ":is([data-table-size=md] *:not(:first-child))": spacing["3"],
      ":is([data-table-size=lg] *:not(:first-child))": spacing["4"],
    },
    paddingRight: {
      default: spacing["2"],
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
  textEllipsis: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  resizer: {
    boxSizing: "border-box",
    cursor: {
      ":is([data-resizable-direction=both])": "ew-resize",
      ":is([data-resizable-direction=left])": "e-resize",
      ":is([data-resizable-direction=right])": "w-resize",
    },
    flexBasis: "auto",
    flexGrow: 0,
    flexShrink: 0,
    marginBottom: {
      default: `calc(${spacing["1"]} * -1)`,
      ":is([data-table-size=md] *)": `calc(${spacing["2"]} * -1)`,
      ":is([data-table-size=lg] *)": `calc(${spacing["3"]} * -1)`,
    },
    marginTop: {
      default: `calc(${spacing["1"]} * -1)`,
      ":is([data-table-size=md] *)": `calc(${spacing["2"]} * -1)`,
      ":is([data-table-size=lg] *)": `calc(${spacing["3"]} * -1)`,
    },
    minHeight: {
      default: spacing["8"],
      ":is([data-table-size=md] *)": spacing["10"],
      ":is([data-table-size=lg] *)": spacing["12"],
    },
    position: "relative",
    touchAction: "none",
    width: spacing["3"],
  },
  resizerLine: {
    backgroundColor: {
      default: uiColor.border1,
      ":is([data-hovered=true] *)": uiColor.border2,
      ":is([data-resizing=true] *)": uiColor.border3,
    },
    bottom: 0,
    display: "block",
    left: "50%",
    position: "absolute",
    top: 0,
    transform: "translateX(-50%)",
    width: spacing["0.5"],
  },
  dropIndicator: {
    outlineColor: primaryColor.solid1,
    outlineStyle: "solid",
    outlineWidth: "1px",
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
  hasResizer?: boolean;
  hasEllipsis?: boolean;
}

export function TableColumn({
  style,
  children,
  hasResizer,
  hasEllipsis,
  ...props
}: TableColumnProps) {
  return (
    <AriaColumn {...props} {...stylex.props(styles.column, style)}>
      {({ allowsSorting, sortDirection }) => (
        <div {...stylex.props(styles.columnHeader, styles.cellContent)}>
          <Flex align="center" gap="1">
            <LabelText
              tabIndex={hasResizer ? -1 : undefined}
              hasEllipsis={hasEllipsis}
            >
              {children}
            </LabelText>
            {allowsSorting && (
              <span aria-hidden="true" className="sort-indicator">
                {sortDirection === "ascending" ? (
                  <ArrowUp size={14} />
                ) : sortDirection === "descending" ? (
                  <ArrowDown size={14} />
                ) : null}
              </span>
            )}
          </Flex>
          {hasResizer && (
            <ColumnResizer {...stylex.props(styles.resizer)}>
              <div {...stylex.props(styles.resizerLine)} />
            </ColumnResizer>
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
      {allowsDragging && <TableColumn minWidth={52} width={52} />}
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
          <IconButton slot="drag" label="Reorder" variant="tertiary">
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

export interface TableCellProps
  extends StyleXComponentProps<Omit<AriaCellProps, "children">> {
  children?: React.ReactNode;
  hasEllipsis?: boolean;
}

export function TableCell({
  style,
  children,
  hasEllipsis,
  ...props
}: TableCellProps) {
  return (
    <AriaCell {...stylex.props(styles.cell, style)} {...props}>
      <div
        {...stylex.props(
          styles.cellContent,
          hasEllipsis && styles.textEllipsis,
        )}
      >
        {children}
      </div>
    </AriaCell>
  );
}

export function TableDropIndicator(props: DropIndicatorProps) {
  return <DropIndicator {...props} {...stylex.props(styles.dropIndicator)} />;
}
