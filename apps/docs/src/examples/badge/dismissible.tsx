import { Badge } from "@/components/badge";
import { Flex } from "@/components/flex";

export function BadgeDismissible() {
  return (
    <Flex gap="4" wrap>
      <Badge variant="default">Dismissible Badge</Badge>
      <Badge variant="primary">Primary Badge</Badge>
      <Badge variant="success">Success Badge</Badge>
    </Flex>
  );
}
