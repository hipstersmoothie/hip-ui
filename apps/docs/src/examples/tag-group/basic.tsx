import { TagGroup, Tag } from "@/components/tag-group";

const tags = [
  { id: "react", name: "React" },
  { id: "typescript", name: "TypeScript" },
  { id: "javascript", name: "JavaScript" },
  { id: "node", name: "Node.js" },
];

export function Basic() {
  return (
    <TagGroup label="Technologies" items={tags}>
      {(item) => <Tag id={item.id}>{item.name}</Tag>}
    </TagGroup>
  );
}
