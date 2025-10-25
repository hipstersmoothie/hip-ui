import { Button } from "@/components/button";
import { Dialog, DialogHeader, DialogFooter } from "@/components/dialog";
import { Body } from "@/components/typography";

export function Basic() {
  return (
    <Dialog trigger={<Button>Open Dialog</Button>}>
      <DialogHeader>Dialog Title</DialogHeader>
      <Body>This is the dialog content. You can put any content here.</Body>
      <DialogFooter>
        <Button variant="secondary">Cancel</Button>
        <Button>Confirm</Button>
      </DialogFooter>
    </Dialog>
  );
}
