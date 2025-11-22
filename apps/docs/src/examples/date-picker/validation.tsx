import { Flex } from "@/components/flex";
import { DatePicker } from "@/components/date-picker";

export function Validation() {
  return (
    <Flex gap="4" direction="column">
      <DatePicker
        label="Event Date"
        validationState="invalid"
        variant="primary"
        errorMessage="Please select a valid date"
      />
      <DatePicker
        label="Event Date"
        validationState="invalid"
        variant="secondary"
        errorMessage="Please select a valid date"
      />
      <DatePicker
        label="Event Date"
        validationState="invalid"
        variant="tertiary"
        errorMessage="Please select a valid date"
      />
    </Flex>
  );
}

