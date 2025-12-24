import { Flex } from "@/components/flex";
import { ComboBox, ComboBoxItem } from "@/components/combobox";

export function ValidationWarning() {
  return (
    <Flex gap="4" direction="column">
      <ComboBox
        label="Region"
        validationState="warning"
        variant="primary"
        description="This region may have limited availability"
      >
        <ComboBoxItem id="us">United States</ComboBoxItem>
        <ComboBoxItem id="uk">United Kingdom</ComboBoxItem>
        <ComboBoxItem id="ca">Canada</ComboBoxItem>
      </ComboBox>
      <ComboBox
        label="Region"
        validationState="warning"
        variant="secondary"
        description="This region may have limited availability"
      >
        <ComboBoxItem id="us">United States</ComboBoxItem>
        <ComboBoxItem id="uk">United Kingdom</ComboBoxItem>
        <ComboBoxItem id="ca">Canada</ComboBoxItem>
      </ComboBox>
      <ComboBox
        label="Region"
        validationState="warning"
        variant="tertiary"
        description="This region may have limited availability"
      >
        <ComboBoxItem id="us">United States</ComboBoxItem>
        <ComboBoxItem id="uk">United Kingdom</ComboBoxItem>
        <ComboBoxItem id="ca">Canada</ComboBoxItem>
      </ComboBox>
    </Flex>
  );
}
