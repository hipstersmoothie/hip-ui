import { Tree, TreeItem } from "@/components/tree";
import { uiColor } from "../../components/theme/color.stylex";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  tree: {
    height: "300px",
    width: "300px",
    borderWidth: 1,
    borderColor: uiColor.border1,
    borderStyle: "solid",
    overflow: "auto",
  },
});

const treeData = Array.from({ length: 100 }, (_, i) => ({
  id: `folder-${i + 1}`,
  name: `Folder ${i + 1}`,
  children: Array.from({ length: 20 }, (_, j) => ({
    id: `folder-${i + 1}-file-${j + 1}`,
    name: `File ${j + 1}`,
  })),
}));

export function Virtualization() {
  return (
    <Tree items={treeData} isVirtualized style={styles.tree}>
      {function renderTreeItem(item) {
        return (
          <TreeItem key={item.id} id={item.id} title={item.name}>
            {item.children.map((child) => (
              <TreeItem key={child.id} id={child.id} title={child.name} />
            ))}
          </TreeItem>
        );
      }}
    </Tree>
  );
}

