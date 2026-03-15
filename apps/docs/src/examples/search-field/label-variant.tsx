import { Flex } from "@/components/flex";
import { SearchField } from "@/components/search-field";

export function LabelVariant() {
  return (
    <Flex direction="column" gap="4">
      <SearchField
        label="Horizontal label"
        labelVariant="horizontal"
        placeholder="Search for something..."
        description="This is a description"
      />
    </Flex>
  );
}
