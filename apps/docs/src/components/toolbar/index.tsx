"use client";

import * as stylex from "@stylexjs/stylex";
import {
  Toolbar as AriaToolbar,
  ToolbarProps as AriaToolbarProps,
  Group,
  GroupProps,
  Separator as AriaSeparator,
  SeparatorProps as AriaSeparatorProps,
} from "react-aria-components";

import { uiColor } from "../theme/color.stylex";
import { spacing } from "../theme/spacing.stylex";
import { StyleXComponentProps } from "../theme/types";

const styles = stylex.create({
  toolbar: {
    gap: spacing["1"],
    display: "flex",
    flexWrap: "wrap",
  },
  horizontal: {
    flexDirection: "row",
  },
  vertical: {
    flexDirection: "column",
  },
  group: {
    display: "contents",
  },
  separator: {
    borderWidth: 0,
    backgroundColor: uiColor.border2,
    height: {
      ":is([data-orientation=vertical] *)": "1px",
    },
    marginBottom: {
      ":is([data-orientation=horizontal] *)": spacing["1"],
      ":is([data-orientation=vertical] *)": spacing["2"],
    },
    marginLeft: {
      ":is([data-orientation=horizontal] *)": spacing["2"],
      ":is([data-orientation=vertical] *)": spacing["1"],
    },
    marginRight: {
      ":is([data-orientation=horizontal] *)": spacing["2"],
      ":is([data-orientation=vertical] *)": spacing["1"],
    },
    marginTop: {
      ":is([data-orientation=horizontal] *)": spacing["1"],
      ":is([data-orientation=vertical] *)": spacing["2"],
    },
    width: {
      ":is([data-orientation=horizontal] *)": "1px",
    },
  },
});

export interface ToolbarProps extends StyleXComponentProps<AriaToolbarProps> {
  /**
   * The orientation of the toolbar.
   * @default "horizontal"
   */
  orientation?: "horizontal" | "vertical";
}

export function Toolbar({
  style,
  orientation = "horizontal",
  ...props
}: ToolbarProps) {
  return (
    <AriaToolbar
      {...props}
      orientation={orientation}
      {...stylex.props(
        styles.toolbar,
        orientation === "horizontal" && styles.horizontal,
        orientation === "vertical" && styles.vertical,
        style,
      )}
    />
  );
}

export interface ToolbarGroupProps extends StyleXComponentProps<GroupProps> {}

export function ToolbarGroup({ style, ...props }: ToolbarGroupProps) {
  return <Group {...props} {...stylex.props(styles.group, style)} />;
}

export interface ToolbarSeparatorProps
  extends StyleXComponentProps<Omit<AriaSeparatorProps, "orientation">> {}

export function ToolbarSeparator({ style, ...props }: ToolbarSeparatorProps) {
  return (
    <AriaSeparator {...props} {...stylex.props(styles.separator, style)} />
  );
}
