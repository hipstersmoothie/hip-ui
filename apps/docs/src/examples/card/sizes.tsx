import { Card, CardHeader, CardTitle, CardBody } from "@/components/card";
import { Flex } from "@/components/flex";

export function CardSizes() {
  return (
    <Flex gap="4" wrap>
      <Card size="sm">
        <CardHeader>
          <CardTitle>Small Card</CardTitle>
        </CardHeader>
        <CardBody>
          <p>Small card content</p>
        </CardBody>
      </Card>
      <Card size="md">
        <CardHeader>
          <CardTitle>Medium Card</CardTitle>
        </CardHeader>
        <CardBody>
          <p>Medium card content</p>
        </CardBody>
      </Card>
      <Card size="lg">
        <CardHeader>
          <CardTitle>Large Card</CardTitle>
        </CardHeader>
        <CardBody>
          <p>Large card content</p>
        </CardBody>
      </Card>
    </Flex>
  );
}
