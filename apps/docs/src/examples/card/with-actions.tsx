import { MoreHorizontal, Heart, Share } from "lucide-react";

import { Button } from "@/components/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardBody,
  CardFooter,
  CardHeaderAction,
} from "@/components/card";
import { IconButton } from "@/components/icon-button";

export function CardWithActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card with Actions</CardTitle>
        <CardDescription>This card includes header actions</CardDescription>
        <CardHeaderAction>
          <IconButton label="Like" variant="tertiary">
            <Heart />
          </IconButton>
          <IconButton label="Share" variant="tertiary">
            <Share />
          </IconButton>
          <IconButton label="More" variant="tertiary">
            <MoreHorizontal />
          </IconButton>
        </CardHeaderAction>
      </CardHeader>
      <CardBody>
        This card demonstrates how to include actions in the header.
      </CardBody>
      <CardFooter>
        <Button variant="secondary">Cancel</Button>
        <Button>Save</Button>
      </CardFooter>
    </Card>
  );
}
