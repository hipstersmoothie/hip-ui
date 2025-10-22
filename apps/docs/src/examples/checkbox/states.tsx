import { Checkbox } from "@/components/checkbox";
import { Flex } from "@/components/flex";

export function CheckboxStates() {
  return (
    <Flex direction="column" gap="4">
      <Checkbox>Unchecked</Checkbox>
      <Checkbox defaultSelected>Checked</Checkbox>
      <Checkbox isIndeterminate>Indeterminate</Checkbox>
      <Checkbox isDisabled>Disabled</Checkbox>
    </Flex>
  );
}
