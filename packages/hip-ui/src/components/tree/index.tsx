import * as stylex from "@stylexjs/stylex";
import { ChevronRight, GripVertical } from "lucide-react";
import { use } from "react";
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
import { SizeContext } from "../context";
import { animationDuration } from "../theme/animations.stylex";
import { primaryColor } from "../theme/color.stylex";
import { mediaQueries } from "../theme/media-queries.stylex";
import { radius } from "../theme/radius.stylex";
import { ui } from "../theme/semantic-color.stylex";
import { spacing } from "../theme/spacing.stylex";
import { Size, StyleXComponentProps } from "../theme/types";
import { useListBoxItemStyles } from "../theme/useListBoxItemStyles";

const styles = stylex.create({
  wrapper: {
    position: "relative",
  },
  itemInner: {
    gap: spacing["1"],
    paddingLeft: spacing["0.5"],
  },
  selected: {
    backgroundColor: primaryColor.component2,
  },
  spacer: {
    width: `calc((var(--tree-item-level, 0) - 1) * ${spacing["3"]})`,
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

    // eslint-disable-next-line @stylexjs/no-legacy-contextual-styles, @stylexjs/valid-styles
    ":is(*) svg": {
      height: spacing["3"],
      width: spacing["3"],
    },
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
    // eslint-disable-next-line @stylexjs/valid-styles
    cornerShape: "squircle",
    borderRadius: {
      default: radius["sm"],
      [mediaQueries.supportsSquircle]: radius["2xl"],
    },
    alignItems: "center",
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
        isSelected,
      }) => (
        <div
          {...stylex.props(
            listBoxItemStyles.inner,
            styles.itemInner,
            isSelected && selectionBehavior === "replace" && styles.selected,
          )}
        >
          {allowsDragging && (
            <div {...stylex.props(styles.dragButtonWrapper)}>
              <Button
                slot="drag"
                {...stylex.props(styles.dragButton, ui.border, ui.bgSubtle)}
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
              ui.textDim,
              listBoxItemStyles.addon,
              styles.chevron,
              !hasChildItems && styles.hidden,
            )}
          >
            <ChevronRight />
          </Button>

          <div {...stylex.props(styles.content)}>
            {prefix != null && (
              <div {...stylex.props(listBoxItemStyles.addon, styles.addon)}>
                {prefix}
              </div>
            )}
            <div {...stylex.props(listBoxItemStyles.label)}>{children}</div>
            {suffix != null && (
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

interface TreeItemBaseProps<T extends object>
  extends StyleXComponentProps<
      Omit<AriaTreeItemProps<T>, "textValue" | "children">
    >,
    Pick<TreeItemContentProps, "prefix" | "suffix"> {
  children?: React.ReactNode;
}

interface TreeItemTextProps<T extends object> extends TreeItemBaseProps<T> {
  title: string;
  textValue?: string;
}

interface TreeItemNodeProps<T extends object> extends TreeItemBaseProps<T> {
  title: React.ReactNode;
  textValue: string;
}

type TreeItemProps<T extends object> =
  | TreeItemTextProps<T>
  | TreeItemNodeProps<T>;

export function TreeItem<T extends object>({
  style,
  title,
  prefix,
  suffix,
  textValue,
  ...props
}: TreeItemProps<T>) {
  const listBoxItemStyles = useListBoxItemStyles();

  return (
    <AriaTreeItem
      textValue={textValue ?? (typeof title === "string" ? title : "")}
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

export interface TreeProps<T extends object>
  extends StyleXComponentProps<Omit<AriaTreeProps<T>, "children">> {
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
