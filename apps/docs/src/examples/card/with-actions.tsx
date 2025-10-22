import { Card, CardHeader, CardTitle, CardDescription, CardBody, CardFooter, CardHeaderAction } from "@/components/card";
import { Button } from "@/components/button";
import { IconButton } from "@/components/icon-button";
import { MoreHorizontal, Heart, Share } from "lucide-react";

export function CardWithActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card with Actions</CardTitle>
        <CardDescription>This card includes header actions</CardDescription>
        <CardHeaderAction>
          <IconButton label="Like" variant="ghost">
            <Heart />
          </IconButton>
          <IconButton label="Share" variant="ghost">
            <Share />
          </IconButton>
          <IconButton label="More" variant="ghost">
            <MoreHorizontal />
          </IconButton>
        </CardHeaderAction>
      </CardHeader>
      <CardBody>
        <p>This card demonstrates how to include actions in the header.</p>
      </CardBody>
      <CardFooter>
        <Button variant="secondary">Cancel</Button>
        <Button>Save</Button>
      </CardFooter>
    </Card>
  );
}
