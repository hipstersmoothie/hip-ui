import { Button } from "@/components/button";
import {
  Card,
  CardBody,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
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
