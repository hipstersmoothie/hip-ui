import { useListData } from "react-stately";

import { TagGroup, Tag } from "@/components/tag-group";

export function Removable() {
  const list = useListData({
    initialItems: [
      { id: "react", name: "React" },
      { id: "typescript", name: "TypeScript" },
      { id: "javascript", name: "JavaScript" },
      { id: "node", name: "Node.js" },
    ],
  });

  return (
    <TagGroup
      label="Remove tags"
      description="Click the X button to remove tags"
      items={list.items}
      onRemove={(keys) => list.remove(...keys)}
    >
      {(item) => <Tag id={item.id}>{item.name}</Tag>}
    </TagGroup>
  );
}
