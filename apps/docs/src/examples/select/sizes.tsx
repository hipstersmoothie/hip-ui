import { Flex } from "@/components/flex";
import { Select, SelectItem } from "@/components/select";

const sizes = [
  { id: "xs", name: "Extra Small" },
  { id: "sm", name: "Small" },
  { id: "md", name: "Medium" },
  { id: "lg", name: "Large" },
  { id: "xl", name: "Extra Large" },
];

export function SelectSizes() {
  return (
    <Flex direction="column" gap="4">
      <Select label="Small" size="sm" placeholder="Select size" items={sizes}>
        {(item) => <SelectItem id={item.id}>{item.name}</SelectItem>}
      </Select>
      <Select label="Medium" size="md" placeholder="Select size" items={sizes}>
        {(item) => <SelectItem id={item.id}>{item.name}</SelectItem>}
      </Select>
      <Select label="Large" size="lg" placeholder="Select size" items={sizes}>
        {(item) => <SelectItem id={item.id}>{item.name}</SelectItem>}
      </Select>
    </Flex>
  );
}
