import { Flex } from "@/components/flex";
import { ComboBox, ComboBoxItem } from "@/components/combobox";

export function ValidationSuccess() {
  return (
    <Flex gap="4" direction="column">
      <ComboBox
        label="Country"
        validationState="valid"
        variant="primary"
        description="Selection is valid"
      >
        <ComboBoxItem id="us">United States</ComboBoxItem>
        <ComboBoxItem id="uk">United Kingdom</ComboBoxItem>
        <ComboBoxItem id="ca">Canada</ComboBoxItem>
      </ComboBox>
      <ComboBox
        label="Country"
        validationState="valid"
        variant="secondary"
        description="Selection is valid"
      >
        <ComboBoxItem id="us">United States</ComboBoxItem>
        <ComboBoxItem id="uk">United Kingdom</ComboBoxItem>
        <ComboBoxItem id="ca">Canada</ComboBoxItem>
      </ComboBox>
      <ComboBox
        label="Country"
        validationState="valid"
        variant="tertiary"
        description="Selection is valid"
      >
        <ComboBoxItem id="us">United States</ComboBoxItem>
        <ComboBoxItem id="uk">United Kingdom</ComboBoxItem>
        <ComboBoxItem id="ca">Canada</ComboBoxItem>
      </ComboBox>
    </Flex>
  );
}

