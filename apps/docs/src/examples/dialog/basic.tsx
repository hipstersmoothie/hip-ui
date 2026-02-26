import { Button } from "@/components/button";
import {
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@/components/dialog";
import { Body } from "@/components/typography";

export function Basic() {
  return (
    <Dialog trigger={<Button>Open Dialog</Button>}>
      <DialogHeader>Dialog Title</DialogHeader>
      <DialogBody>
        <Body>This is the dialog content. You can put any content here.</Body>
      </DialogBody>
      <DialogFooter>
        <Button variant="secondary">Cancel</Button>
        <Button>Confirm</Button>
      </DialogFooter>
    </Dialog>
  );
}
