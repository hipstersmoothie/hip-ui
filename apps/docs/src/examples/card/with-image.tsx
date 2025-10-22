import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardImage,
} from "@/components/card";

export function CardWithImage() {
  return (
    <Card>
      <CardImage
        src="https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=272&h=272&q=80&crop=entropy"
        alt="Beautiful landscape"
        aspectRatio={16 / 9}
      />
      <CardHeader>
        <CardTitle>Card with Image</CardTitle>
      </CardHeader>
      <CardBody>
        <p>This card includes an image with a 16:9 aspect ratio.</p>
      </CardBody>
    </Card>
  );
}
