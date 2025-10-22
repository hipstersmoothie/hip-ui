import { Badge } from "@/components/badge";
import { Flex } from "@/components/flex";

export function BadgeSizes() {
  return (
    <Flex gap="4" align="center">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
    </Flex>
  );
}
