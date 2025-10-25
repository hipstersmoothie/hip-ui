import { Flex } from "@/components/flex";
import { TimeField } from "@/components/time-field";

export function Variants() {
  return (
    <Flex gap="4">
      <TimeField label="Primary" variant="primary" />
      <TimeField label="Secondary" variant="secondary" />
      <TimeField label="Tertiary" variant="tertiary" />
    </Flex>
  );
}
