import { ComboBox, ComboBoxItem } from "@/components/combobox";

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
      {(item) => (
        <ComboBoxItem key={item.id} id={item.id}>
          {item.name}
        </ComboBoxItem>
      )}
    </ComboBox>
  );
}
