import { Badge } from "@/components/badge";
import { Flex } from "@/components/flex";

export function BadgeVariants() {
  return (
    <Flex gap="4" wrap>
      <Badge variant="default">Default</Badge>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="critical">Critical</Badge>
    </Flex>
  );
}
