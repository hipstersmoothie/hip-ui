import { Flex } from "@/components/flex";
import { Select, SelectItem } from "@/components/select";

export function ValidationSuccess() {
  return (
    <Flex gap="4" direction="column">
      <Select
        label="Country"
        validationState="valid"
        variant="primary"
        description="Selection is valid"
      >
        <SelectItem id="us">United States</SelectItem>
        <SelectItem id="uk">United Kingdom</SelectItem>
        <SelectItem id="ca">Canada</SelectItem>
      </Select>
      <Select
        label="Country"
        validationState="valid"
        variant="secondary"
        description="Selection is valid"
      >
        <SelectItem id="us">United States</SelectItem>
        <SelectItem id="uk">United Kingdom</SelectItem>
        <SelectItem id="ca">Canada</SelectItem>
      </Select>
      <Select
        label="Country"
        validationState="valid"
        variant="tertiary"
        description="Selection is valid"
      >
        <SelectItem id="us">United States</SelectItem>
        <SelectItem id="uk">United Kingdom</SelectItem>
        <SelectItem id="ca">Canada</SelectItem>
      </Select>
    </Flex>
  );
}

