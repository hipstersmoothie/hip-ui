import { ComboBox } from "@/components/combobox";

const options = [
  { id: "option1", name: "Option 1" },
  { id: "option2", name: "Option 2" },
  { id: "option3", name: "Option 3" },
];

export function Basic() {
  return (
    <ComboBox
      label="Choose an option"
      placeholder="Type to search..."
      items={options}
    >
      {(item) => item.name}
    </ComboBox>
  );
}
