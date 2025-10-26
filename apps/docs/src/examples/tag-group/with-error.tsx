import { TagGroup, Tag } from "@/components/tag-group";

const tags = [
  { id: "react", name: "React" },
  { id: "typescript", name: "TypeScript" },
];

export function WithError() {
  return (
    <TagGroup
      label="Tags"
      description="Please select at least one tag"
      errorMessage="This field is required"
      selectionMode="single"
      items={tags}
    >
      {(item) => <Tag id={item.id}>{item.name}</Tag>}
    </TagGroup>
  );
}
