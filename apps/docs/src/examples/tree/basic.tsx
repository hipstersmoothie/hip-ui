import { Tree, TreeItem } from "@/components/tree";

const treeData = [
  {
    id: "1",
    name: "Folder 1",
    children: [
      { id: "1-1", name: "File 1-1" },
      { id: "1-2", name: "File 1-2" },
    ],
  },
  {
    id: "2",
    name: "Folder 2",
    children: [{ id: "2-1", name: "File 2-1" }],
  },
];

export function Basic() {
  return (
    <Tree items={treeData}>
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
