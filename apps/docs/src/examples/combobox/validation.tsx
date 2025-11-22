import { Flex } from "@/components/flex";
import { ComboBox, ComboBoxItem } from "@/components/combobox";

export function Validation() {
  return (
    <Flex gap="4" direction="column">
      <ComboBox
        label="Country"
        validationState="invalid"
        variant="primary"
        errorMessage="Please select a country"
      >
        <ComboBoxItem id="us">United States</ComboBoxItem>
        <ComboBoxItem id="uk">United Kingdom</ComboBoxItem>
        <ComboBoxItem id="ca">Canada</ComboBoxItem>
      </ComboBox>
      <ComboBox
        label="Country"
        validationState="invalid"
        variant="secondary"
        errorMessage="Please select a country"
      >
        <ComboBoxItem id="us">United States</ComboBoxItem>
        <ComboBoxItem id="uk">United Kingdom</ComboBoxItem>
        <ComboBoxItem id="ca">Canada</ComboBoxItem>
      </ComboBox>
      <ComboBox
        label="Country"
        validationState="invalid"
        variant="tertiary"
        errorMessage="Please select a country"
      >
        <ComboBoxItem id="us">United States</ComboBoxItem>
        <ComboBoxItem id="uk">United Kingdom</ComboBoxItem>
        <ComboBoxItem id="ca">Canada</ComboBoxItem>
      </ComboBox>
    </Flex>
  );
}

