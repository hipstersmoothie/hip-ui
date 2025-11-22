import { Flex } from "@/components/flex";
import { Select, SelectItem } from "@/components/select";

export function Validation() {
  return (
    <Flex gap="4" direction="column">
      <Select
        label="Country"
        validationState="invalid"
        variant="primary"
        errorMessage="Please select a country"
      >
        <SelectItem id="us">United States</SelectItem>
        <SelectItem id="uk">United Kingdom</SelectItem>
        <SelectItem id="ca">Canada</SelectItem>
      </Select>
      <Select
        label="Country"
        validationState="invalid"
        variant="secondary"
        errorMessage="Please select a country"
      >
        <SelectItem id="us">United States</SelectItem>
        <SelectItem id="uk">United Kingdom</SelectItem>
        <SelectItem id="ca">Canada</SelectItem>
      </Select>
      <Select
        label="Country"
        validationState="invalid"
        variant="tertiary"
        errorMessage="Please select a country"
      >
        <SelectItem id="us">United States</SelectItem>
        <SelectItem id="uk">United Kingdom</SelectItem>
        <SelectItem id="ca">Canada</SelectItem>
      </Select>
    </Flex>
  );
}
