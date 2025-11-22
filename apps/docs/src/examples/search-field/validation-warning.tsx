import { Flex } from "@/components/flex";
import { SearchField } from "@/components/search-field";

export function ValidationWarning() {
  return (
    <Flex gap="4" direction="column">
      <SearchField
        label="Search"
        defaultValue="test"
        validationState="warning"
        variant="primary"
        description="Search query is too short, try a longer phrase"
      />
      <SearchField
        label="Search"
        defaultValue="test"
        validationState="warning"
        variant="secondary"
        description="Search query is too short, try a longer phrase"
      />
      <SearchField
        label="Search"
        defaultValue="test"
        validationState="warning"
        variant="tertiary"
        description="Search query is too short, try a longer phrase"
      />
    </Flex>
  );
}

