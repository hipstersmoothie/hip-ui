import { useState } from "react";
import { Key } from "react-aria";

import { TagGroup, Tag } from "@/components/tag-group";

const tags = [
  { id: "react", name: "React" },
  { id: "typescript", name: "TypeScript" },
  { id: "javascript", name: "JavaScript" },
  { id: "node", name: "Node.js" },
];

export function Selected() {
  const [selectedKeys, setSelectedKeys] = useState<Set<Key>>(
    () => new Set(["react", "typescript"]),
  );

  return (
    <TagGroup
      label="Select tags"
      description="Selected tags are highlighted"
      items={tags}
      selectedKeys={selectedKeys}
      onSelectionChange={(keys) =>
        setSelectedKeys(
          keys === "all" ? new Set(tags.map((tag) => tag.id)) : keys,
        )
      }
      selectionMode="multiple"
    >
      {(item) => <Tag id={item.id}>{item.name}</Tag>}
    </TagGroup>
  );
}
