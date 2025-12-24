import { Flex } from "@/components/flex";
import { SearchField } from "@/components/search-field";

export function Validation() {
  return (
    <Flex gap="4" direction="column">
      <SearchField
        label="Search"
        defaultValue="invalid search"
        validationState="invalid"
        variant="primary"
        errorMessage="Search query contains invalid characters"
      />
      <SearchField
        label="Search"
        defaultValue="invalid search"
        validationState="invalid"
        variant="secondary"
        errorMessage="Search query contains invalid characters"
      />
      <SearchField
        label="Search"
        defaultValue="invalid search"
        validationState="invalid"
        variant="tertiary"
        errorMessage="Search query contains invalid characters"
      />
    </Flex>
  );
}
