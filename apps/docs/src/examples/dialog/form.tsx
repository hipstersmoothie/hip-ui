import { Button } from "@/components/button";
import { Dialog, DialogHeader, DialogFooter } from "@/components/dialog";
import { Flex } from "@/components/flex";
import { TextField } from "@/components/text-field";

export function DialogForm() {
  return (
    <Dialog trigger={<Button>Open Form Dialog</Button>}>
      <DialogHeader>Create New User</DialogHeader>
      <Flex direction="column" gap="4">
        <TextField label="Name" placeholder="Enter full name" />
        <TextField label="Email" placeholder="Enter email address" />
        <TextField label="Phone" placeholder="Enter phone number" />
      </Flex>
      <DialogFooter>
        <Button variant="secondary">Cancel</Button>
        <Button>Create User</Button>
      </DialogFooter>
    </Dialog>
  );
}
