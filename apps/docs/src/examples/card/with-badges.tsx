import { Card, CardHeader, CardTitle, CardBody } from "@/components/card";
import { Flex } from "@/components/flex";
import { Badge } from "@/components/badge";

export function CardWithBadges() {
  return (
    <Card>
      <CardHeader>
        <Flex justify="between" align="center">
          <CardTitle>Project Status</CardTitle>
          <Badge variant="success">Active</Badge>
        </Flex>
      </CardHeader>
      <CardBody>
        <Flex gap="2" wrap>
          <Badge variant="primary">React</Badge>
          <Badge variant="default">TypeScript</Badge>
          <Badge variant="warning">In Progress</Badge>
        </Flex>
      </CardBody>
    </Card>
  );
}
