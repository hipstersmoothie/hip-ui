import { Flex } from "@/components/flex";
import { ComboBox, ComboBoxItem } from "@/components/combobox";

const options = [
  { id: "option1", name: "Option 1" },
  { id: "option2", name: "Option 2" },
  { id: "option3", name: "Option 3" },
];

export function LabelVariant() {
  return (
    <Flex direction="column" gap="4">
      <ComboBox
        label="Horizontal label"
        labelVariant="horizontal"
        placeholder="Type to search..."
        items={options}
        description="This is a description"
      >
        {(item) => (
          <ComboBoxItem key={item.id} id={item.id}>
            {item.name}
          </ComboBoxItem>
        )}
      </ComboBox>
    </Flex>
  );
}
