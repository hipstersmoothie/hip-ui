import { Select, SelectItem } from "@/components/select";

const options = [
  { id: "option1", name: "Option 1" },
  { id: "option2", name: "Option 2" },
  { id: "option3", name: "Option 3" },
];

export function Basic() {
  return (
    <Select
      label="Choose an option"
      placeholder="Select an option"
      items={options}
    >
      {(item) => <SelectItem id={item.id}>{item.name}</SelectItem>}
    </Select>
  );
}
