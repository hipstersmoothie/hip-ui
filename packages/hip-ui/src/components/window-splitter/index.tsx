"use client";

import * as stylex from "@stylexjs/stylex";
import {
  PanelGroup as BasePanelGroup,
  Panel as BasePanel,
  PanelResizer as BasePanelResizer,
  type PanelGroupProps,
  type PanelProps,
  type PanelResizerProps,
} from "@window-splitter/react";

import { primaryColor, uiColor } from "../theme/semantic-color.stylex";
import { spacing } from "../theme/spacing.stylex";
import { StyleXComponentProps } from "../theme/types";

const styles = stylex.create({
  panel: {
    overflow: "auto",
  },
  panelResizer: {
    backgroundColor: {
      default: uiColor.border2,
      ":hover:not([data-state='dragging'])": uiColor.border3,
      ":is([data-state='dragging'])": primaryColor.border2,
    },
    cursor: {
      default: "col-resize",
      ":is([data-panel-group-direction=vertical])": "row-resize",
    },
    position: "relative",
  },
  hitArea: {
    display: {
      default: "none",
      ":is([data-splitter-type='handle']:hover > *)": "block",
    },
    position: "absolute",

    bottom: { ":is([data-handle-orientation='horizontal'] *)": 0 },
    left: { ":is([data-handle-orientation='vertical'] *)": 0 },
    right: { ":is([data-handle-orientation='vertical'] *)": 0 },
    top: { ":is([data-handle-orientation='horizontal'] *)": 0 },
    transform: {
      ":is([data-handle-orientation='horizontal'] *)": "translateX(-50%)",
      ":is([data-handle-orientation='vertical'] *)": "translateY(-50%)",
    },

    height: {
      ":is([data-handle-orientation='horizontal'] *)": "100%",
      ":is([data-handle-orientation='vertical'] *)": spacing["2"],
    },
    width: {
      ":is([data-handle-orientation='horizontal'] *)": spacing["2"],
      ":is([data-handle-orientation='vertical'] *)": "100%",
    },
  },
});

export interface WindowSplitterPanelGroupProps
  extends StyleXComponentProps<PanelGroupProps> {}

export interface WindowSplitterPanelProps
  extends StyleXComponentProps<PanelProps> {}

export interface WindowSplitterPanelResizerProps
  extends StyleXComponentProps<PanelResizerProps> {}

export function PanelGroup({ style, ...props }: WindowSplitterPanelGroupProps) {
  return <BasePanelGroup {...props} {...stylex.props(style)} />;
}

export function Panel({ style, ...props }: WindowSplitterPanelProps) {
  return <BasePanel {...props} {...stylex.props(styles.panel, style)} />;
}

export function PanelResizer({
  style,
  ...props
}: WindowSplitterPanelResizerProps) {
  return (
    <BasePanelResizer
      {...props}
      {...stylex.props(styles.panelResizer, style)}
      size="1px"
    >
      <div {...stylex.props(styles.hitArea)} />
    </BasePanelResizer>
  );
}
