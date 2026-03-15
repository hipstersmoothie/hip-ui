import { Flex } from "@/components/flex";
import { Select, SelectItem } from "@/components/select";

const options = [
  { id: "option1", name: "Option 1" },
  { id: "option2", name: "Option 2" },
  { id: "option3", name: "Option 3" },
];

export function LabelVariant() {
  return (
    <Flex direction="column" gap="4">
      <Select
        label="Horizontal label"
        labelVariant="horizontal"
        placeholder="Select an option"
        items={options}
        description="This is a description"
      >
        {(item) => <SelectItem id={item.id}>{item.name}</SelectItem>}
      </Select>
    </Flex>
  );
}
