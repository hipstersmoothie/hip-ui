import {
  Card,
  CardBody,
  CardHeader,
  CardImage,
  CardTitle,
} from "@/components/card";
import { Flex } from "@/components/flex";

export function CardSizes() {
  return (
    <Flex gap="4" wrap align="start">
      <Card size="sm">
        <CardImage
          src="https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=272&h=272&q=80&crop=entropy"
          alt="Beautiful landscape"
          aspectRatio={16 / 9}
        />
        <CardHeader>
          <CardTitle>Small Card</CardTitle>
        </CardHeader>
        <CardBody>Small card content</CardBody>
      </Card>
      <Card size="md">
        <CardImage
          src="https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=272&h=272&q=80&crop=entropy"
          alt="Beautiful landscape"
          aspectRatio={16 / 9}
        />
        <CardHeader>
          <CardTitle>Medium Card</CardTitle>
        </CardHeader>
        <CardBody>Medium card content</CardBody>
      </Card>
      <Card size="lg">
        <CardImage
          src="https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=272&h=272&q=80&crop=entropy"
          alt="Beautiful landscape"
          aspectRatio={16 / 9}
        />
        <CardHeader>
          <CardTitle>Large Card</CardTitle>
        </CardHeader>
        <CardBody>Large card content</CardBody>
      </Card>
    </Flex>
  );
}
