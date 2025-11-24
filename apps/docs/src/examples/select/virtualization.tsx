import { Select, SelectItem } from "@/components/select";

const options = Array.from({ length: 1000 }, (_, i) => ({
  id: `option-${i + 1}`,
  name: `Option ${i + 1}`,
}));

export function Virtualization() {
  return (
    <Select
      label="Choose an option"
      placeholder="Select an option"
      items={options}
      isVirtualized
    >
      {(item) => <SelectItem id={item.id}>{item.name}</SelectItem>}
    </Select>
  );
}
