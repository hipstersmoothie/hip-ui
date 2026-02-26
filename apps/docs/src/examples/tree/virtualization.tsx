import * as stylex from "@stylexjs/stylex";

import { Tree, TreeItem } from "@/components/tree";

import { uiColor } from "../../components/theme/color.stylex";

const styles = stylex.create({
  tree: {
    borderColor: uiColor.border1,
    borderStyle: "solid",
    borderWidth: 1,
    overflow: "auto",
    height: "300px",
    width: "300px",
  },
});

function renderTreeItem(item: {
  id: string;
  name: string;
  children?: Array<{ id: string; name: string }>;
}) {
  return (
    <TreeItem key={item.id} id={item.id} title={item.name}>
      {item.children?.map((child) => (
        <TreeItem key={child.id} id={child.id} title={child.name} />
      ))}
    </TreeItem>
  );
}

const treeData = Array.from({ length: 100 }, (_, i) => ({
  id: "folder" + (i + 1),
  name: "Folder " + (i + 1),
  children: Array.from({ length: 20 }, (__, j) => ({
    id: "file" + (j + 1),
    name: "File " + (j + 1),
  })),
}));

export function Virtualization() {
  return (
    <Tree items={treeData} isVirtualized style={styles.tree}>
      {renderTreeItem}
    </Tree>
  );
}
