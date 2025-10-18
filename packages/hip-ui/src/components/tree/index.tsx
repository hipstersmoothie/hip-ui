import { ChevronRight, GripVertical } from "lucide-react";
import {
  Button,
  Tree as AriaTree,
  TreeProps as AriaTreeProps,
  TreeItemContent as AriaTreeItemContent,
  TreeItem as AriaTreeItem,
  TreeItemProps as AriaTreeItemProps,
  TreeItemContentProps as AriaTreeItemContentProps,
} from "react-aria-components";
import { Checkbox } from "../checkbox";
import * as stylex from "@stylexjs/stylex";
import { Size } from "../types";
import { SizeContext } from "../context";
import { useListBoxItemStyles } from "../theme/useListBoxItemStyles";
import { spacing } from "../theme/spacing.stylex";
import { gray } from "../theme/semantic-color.stylex";
import { radius } from "../theme/radius.stylex";
import { use } from "react";

const styles = stylex.create({
  wrapper: {
    position: "relative",
  },
  itemInner: {
    gap: spacing["1"],
  },
  spacer: {
    width: `calc((var(--tree-item-level, 0) - 1) * ${spacing["4"]})`,
  },
  content: {
    alignItems: "center",
    display: "flex",
    flexGrow: 1,
    gap: spacing["2"],
  },
  hidden: {
    opacity: 0,
    visibility: "hidden",
  },
  chevron: {
    backgroundColor: "transparent",
    borderWidth: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    transform: {
      default: "rotate(0deg)",
      ":is([aria-expanded=true] *)": "rotate(90deg)",
    },
  },
  addon: {
    marginBottom: `calc(${spacing["2"]} * -1)`,
    marginTop: `calc(${spacing["2"]} * -1)`,
  },
  dragButtonWrapper: {
    left: 0,
    opacity: {
      default: 0,
      ":hover": 1,
      ":is([data-react-aria-pressable=true]:hover:not([data-disabled]) *)": 1,
    },
    position: "absolute",
    top: "50%",
    transform: "translate(-100%, -50%)",
    transitionDuration: "100ms",
    transitionProperty: "opacity",
    transitionTimingFunction: "ease-in-out",
  },
  dragButton: {
    alignItems: "center",
    borderRadius: radius["sm"],
    display: "flex",
    justifyContent: "center",

    height: spacing["8"],
    width: spacing["8"],
  },
});

interface TreeItemContentProps
  extends Omit<AriaTreeItemContentProps, "children"> {
  children?: React.ReactNode;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

function TreeItemContent({ children, prefix, suffix }: TreeItemContentProps) {
  const listBoxItemStyles = useListBoxItemStyles();

  return (
    <AriaTreeItemContent>
      {({
        hasChildItems,
        selectionBehavior,
        selectionMode,
        allowsDragging,
      }) => (
        <div {...stylex.props(listBoxItemStyles.inner, styles.itemInner)}>
          {allowsDragging && (
            <div {...stylex.props(styles.dragButtonWrapper)}>
              <Button
                slot="drag"
                {...stylex.props(styles.dragButton, gray.border, gray.bgSubtle)}
              >
                <GripVertical size={18} />
              </Button>
            </div>
          )}
          {selectionBehavior === "toggle" && selectionMode !== "none" && (
            <Checkbox slot="selection" />
          )}
          <div {...stylex.props(styles.spacer)} />
          <Button
            slot="chevron"
            {...stylex.props(
              styles.chevron,
              gray.textDim,
              listBoxItemStyles.addon,
              !hasChildItems && styles.hidden
            )}
          >
            <ChevronRight size={16} />
          </Button>

          <div {...stylex.props(styles.content)}>
            {prefix && (
              <div {...stylex.props(listBoxItemStyles.addon, styles.addon)}>
                {prefix}
              </div>
            )}
            <div {...stylex.props(listBoxItemStyles.label)}>{children}</div>
            {suffix && (
              <div {...stylex.props(listBoxItemStyles.addon, styles.addon)}>
                {suffix}
              </div>
            )}
          </div>
        </div>
      )}
    </AriaTreeItemContent>
  );
}

interface TreeItemProps<T extends object>
  extends Omit<AriaTreeItemProps<T>, "style" | "textValue" | "children">,
    Pick<TreeItemContentProps, "prefix" | "suffix"> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
  title: string;
  children?: React.ReactNode;
}

export function TreeItem<T extends object>({
  style,
  title,
  prefix,
  suffix,
  ...props
}: TreeItemProps<T>) {
  const listBoxItemStyles = useListBoxItemStyles();

  return (
    <AriaTreeItem
      textValue={title}
      {...props}
      data-react-aria-pressable
      {...stylex.props(
        listBoxItemStyles.wrapper,
        styles.wrapper,
        styles.itemInner,
        style
      )}
    >
      <TreeItemContent prefix={prefix} suffix={suffix}>
        {title}
      </TreeItemContent>
      {props.children}
    </AriaTreeItem>
  );
}

export interface TreeProps<T extends object>
  extends Omit<AriaTreeProps<T>, "children" | "style"> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
  children: React.ReactNode | ((item: T) => React.ReactNode);
  size?: Size;
}

export function Tree<T extends object>({
  style,
  size: sizeProp,
  ...props
}: TreeProps<T>) {
  const size = sizeProp || use(SizeContext);

  return (
    <SizeContext.Provider value={size}>
      <AriaTree {...props} {...stylex.props(style)} />
    </SizeContext.Provider>
  );
}
