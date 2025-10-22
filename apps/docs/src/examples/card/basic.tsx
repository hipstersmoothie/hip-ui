import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardBody,
  CardFooter,
} from "@/components/card";
import { Button } from "@/components/button";

export function Basic() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here</CardDescription>
      </CardHeader>
      <CardBody>
        <p>This is the card body content.</p>
      </CardBody>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  );
}
