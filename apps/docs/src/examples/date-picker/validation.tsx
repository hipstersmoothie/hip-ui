import { DatePicker } from "@/components/date-picker";
import { Flex } from "@/components/flex";

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
