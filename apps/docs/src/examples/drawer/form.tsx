import { Button } from "@/components/button";
import {
  Drawer,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
} from "@/components/drawer";
import { Flex } from "@/components/flex";
import { TextField } from "@/components/text-field";

export function DrawerForm() {
  return (
    <Drawer trigger={<Button>Open Form Drawer</Button>}>
      <DrawerHeader>Create New User</DrawerHeader>
      <DrawerBody>
        <Flex direction="column" gap="4">
          <TextField label="Name" placeholder="Enter full name" />
          <TextField label="Email" placeholder="Enter email address" />
          <TextField label="Phone" placeholder="Enter phone number" />
        </Flex>
      </DrawerBody>
      <DrawerFooter>
        <Button variant="secondary">Cancel</Button>
        <Button>Create User</Button>
      </DrawerFooter>
    </Drawer>
  );
}
