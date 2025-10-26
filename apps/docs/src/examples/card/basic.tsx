import { Button } from "@/components/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardBody,
  CardFooter,
} from "@/components/card";

export function Basic() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here</CardDescription>
      </CardHeader>
      <CardBody>This is the card body content.</CardBody>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  );
}
