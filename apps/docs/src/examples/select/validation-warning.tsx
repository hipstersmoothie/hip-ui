import { Flex } from "@/components/flex";
import { Select, SelectItem } from "@/components/select";

export function ValidationWarning() {
  return (
    <Flex gap="4" direction="column">
      <Select
        label="Region"
        validationState="warning"
        variant="primary"
        description="This region may have limited availability"
      >
        <SelectItem id="us">United States</SelectItem>
        <SelectItem id="uk">United Kingdom</SelectItem>
        <SelectItem id="ca">Canada</SelectItem>
      </Select>
      <Select
        label="Region"
        validationState="warning"
        variant="secondary"
        description="This region may have limited availability"
      >
        <SelectItem id="us">United States</SelectItem>
        <SelectItem id="uk">United Kingdom</SelectItem>
        <SelectItem id="ca">Canada</SelectItem>
      </Select>
      <Select
        label="Region"
        validationState="warning"
        variant="tertiary"
        description="This region may have limited availability"
      >
        <SelectItem id="us">United States</SelectItem>
        <SelectItem id="uk">United Kingdom</SelectItem>
        <SelectItem id="ca">Canada</SelectItem>
      </Select>
    </Flex>
  );
}
