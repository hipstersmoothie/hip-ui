import { Label } from "@/components/label";
import { Flex } from "@/components/flex";

export function LabelSizes() {
  return (
    <Flex direction="column" gap="4">
      <Label size="sm">Small Label</Label>
      <Label size="md">Medium Label</Label>
      <Label size="lg">Large Label</Label>
    </Flex>
  );
}
