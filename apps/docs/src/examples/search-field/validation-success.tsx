import { Flex } from "@/components/flex";
import { SearchField } from "@/components/search-field";

export function ValidationSuccess() {
  return (
    <Flex gap="4" direction="column">
      <SearchField
        label="Search"
        defaultValue="valid search query"
        validationState="valid"
        variant="primary"
        description="Search query is valid"
      />
      <SearchField
        label="Search"
        defaultValue="valid search query"
        validationState="valid"
        variant="secondary"
        description="Search query is valid"
      />
      <SearchField
        label="Search"
        defaultValue="valid search query"
        validationState="valid"
        variant="tertiary"
        description="Search query is valid"
      />
    </Flex>
  );
}

