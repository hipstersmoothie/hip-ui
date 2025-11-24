import { ComboBox, ComboBoxItem } from "@/components/combobox";

const options = Array.from({ length: 1000 }, (_, i) => ({
  id: "option" + (i + 1),
  name: "Option " + (i + 1),
}));

export function Virtualization() {
  return (
    <ComboBox
      label="Choose an option"
      placeholder="Type to search..."
      items={options}
      isVirtualized
    >
      {(item) => (
        <ComboBoxItem key={item.id} id={item.id}>
          {item.name}
        </ComboBoxItem>
      )}
    </ComboBox>
  );
}
