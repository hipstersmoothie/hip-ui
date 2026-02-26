import type {
  TreeItemContentProps as AriaTreeItemContentProps,
  TreeItemProps as AriaTreeItemProps,
  TreeProps as AriaTreeProps,
} from "react-aria-components";

import * as stylex from "@stylexjs/stylex";
import { ChevronRight, GripVertical } from "lucide-react";
import { use } from "react";
import {
  Tree as AriaTree,
  TreeItem as AriaTreeItem,
  TreeItemContent as AriaTreeItemContent,
  Button,
} from "react-aria-components";

import type { Size } from "../types";

import { Checkbox } from "../checkbox";
import { SizeContext } from "../context";
import { animationDuration } from "../theme/animations.stylex";
import { radius } from "../theme/radius.stylex";
import { gray } from "../theme/semantic-color.stylex";
import { spacing } from "../theme/spacing.stylex";
import { useListBoxItemStyles } from "../theme/useListBoxItemStyles";

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
    gap: spacing["2"],
    alignItems: "center",
    display: "flex",
    flexGrow: 1,
  },
  hidden: {
    opacity: 0,
    visibility: "hidden",
  },
  chevron: {
    borderWidth: 0,
    backgroundColor: "transparent",
    transform: {
      default: "rotate(0deg)",
      ":is([aria-expanded=true] *)": "rotate(90deg)",
    },
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
  },
  addon: {
    marginBottom: `calc(${spacing["2"]} * -1)`,
    marginTop: `calc(${spacing["2"]} * -1)`,
  },
  dragButtonWrapper: {
    opacity: {
      default: 0,
      ":is([data-react-aria-pressable=true]:hover:not([data-disabled]) *)": 1,
      ":hover": 1,
    },
    position: "absolute",
    transform: "translate(-100%, -50%)",
    transitionDuration: animationDuration.fast,
    transitionProperty: "opacity",
    transitionTimingFunction: "ease-in-out",
    left: 0,
    top: "50%",
  },
  dragButton: {
    borderRadius: radius["sm"],
    alignItems: "center",
    display: "flex",
    justifyContent: "center",

    height: spacing["8"],
    width: spacing["8"],
  },
});

interface TreeItemContentProps extends Omit<
  AriaTreeItemContentProps,
  "children"
> {
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
              !hasChildItems && styles.hidden,
            )}
          >
            <ChevronRight size={16} />
          </Button>

          <div {...stylex.props(styles.content)}>
            {prefix !== null && (
              <div {...stylex.props(listBoxItemStyles.addon, styles.addon)}>
                {prefix}
              </div>
            )}
            <div {...stylex.props(listBoxItemStyles.label)}>{children}</div>
            {suffix !== null && (
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
  extends
    Omit<AriaTreeItemProps<T>, "style" | "textValue" | "children">,
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
        style,
      )}
    >
      <TreeItemContent prefix={prefix} suffix={suffix}>
        {title}
      </TreeItemContent>
      {props.children}
    </AriaTreeItem>
  );
}

export interface TreeProps<T extends object> extends Omit<
  AriaTreeProps<T>,
  "children" | "style"
> {
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
    <SizeContext value={size}>
      <AriaTree {...props} {...stylex.props(style)} />
    </SizeContext>
  );
}
