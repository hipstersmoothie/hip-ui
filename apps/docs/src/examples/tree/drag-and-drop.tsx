"use client";

import type { DropIndicatorProps } from "react-aria-components";

import * as stylex from "@stylexjs/stylex";
import { DropIndicator, useDragAndDrop } from "react-aria-components";
import { useTreeData } from "react-stately";

import { Tree, TreeItem } from "@/components/tree";

import { primaryColor } from "../../components/theme/color.stylex";

const styles = stylex.create({
  root: {
    width: "min(80%, 300px)",
  },
  dropIndicator: {
    outlineColor: primaryColor.solid1,
    outlineStyle: "solid",
    outlineWidth: "1px",
  },
});

interface TreeItem {
  id: string;
  name: string;
  children?: Array<TreeItem>;
}

function TreeDropIndicator(props: DropIndicatorProps) {
  return <DropIndicator {...props} {...stylex.props(styles.dropIndicator)} />;
}

const initialItems: Array<TreeItem> = [
  {
    id: "1",
    name: "Documents",
    children: [
      { id: "1-1", name: "Project Proposal.pdf" },
      { id: "1-2", name: "Meeting Notes.docx" },
      {
        id: "1-3",
        name: "Designs",
        children: [
          { id: "1-3-1", name: "Mockup.png" },
          { id: "1-3-2", name: "Wireframe.pdf" },
        ],
      },
    ],
  },
  {
    id: "2",
    name: "Images",
    children: [
      { id: "2-1", name: "Photo1.jpg" },
      { id: "2-2", name: "Photo2.jpg" },
    ],
  },
  {
    id: "3",
    name: "Videos",
    children: [{ id: "3-1", name: "Presentation.mp4" }],
  },
];

function renderTreeItem(item: {
  value: { id: string; name: string };
  children?: Array<{ value: { id: string; name: string }; children?: Array<unknown> }>;
}): React.ReactNode {
  return (
    <TreeItem
      key={item.value.id}
      id={item.value.id}
      title={item.value.name}
    >
      {item.children?.map((child) => renderTreeItem(child))}
    </TreeItem>
  );
}

export function DragAndDrop() {
  const tree = useTreeData({
    initialItems,
    getKey: (item) => item.id,
    getChildren: (item) => item.children ?? [],
  });

  const { dragAndDropHooks } = useDragAndDrop({
    getItems: (keys) =>
      [...keys].map((key) => {
        const item = tree.getItem(key);
        return {
          "text/plain": item?.value.name ?? "",
        };
      }),
    onMove(e) {
      if (e.target.dropPosition === "before") {
        tree.moveBefore(e.target.key, e.keys);
      } else if (e.target.dropPosition === "after") {
        tree.moveAfter(e.target.key, e.keys);
      } else if (e.target.dropPosition === "on") {
        // Move items to become children of the target
        const targetNode = tree.getItem(e.target.key);
        if (targetNode) {
          const targetIndex = targetNode.children
            ? targetNode.children.length
            : 0;
          const keyArray = [...e.keys];
          for (let i = 0; i < keyArray.length; i++) {
            tree.move(keyArray[i], e.target.key, targetIndex + i);
          }
        }
      }
    },
    renderDropIndicator(target) {
      return <TreeDropIndicator target={target} />;
    },
  });

  return (
    <Tree
      style={styles.root}
      items={tree.items}
      dragAndDropHooks={dragAndDropHooks}
    >
      {renderTreeItem}
    </Tree>
  );
}
