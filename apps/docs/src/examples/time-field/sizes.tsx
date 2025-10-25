import { Flex } from "@/components/flex";
import { TimeField } from "@/components/time-field";

export function Sizes() {
  return (
    <Flex gap="4">
      <TimeField label="Small" size="sm" />
      <TimeField label="Medium" size="md" />
      <TimeField label="Large" size="lg" />
    </Flex>
  );
}
