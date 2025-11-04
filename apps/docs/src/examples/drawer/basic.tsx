import { Button } from "@/components/button";
import {
  Drawer,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
} from "@/components/drawer";
import { Body } from "@/components/typography";

export function Basic() {
  return (
    <Drawer trigger={<Button>Open Drawer</Button>}>
      <DrawerHeader>Drawer Title</DrawerHeader>
      <DrawerBody>
        <Body>This is the drawer content. You can put any content here.</Body>
      </DrawerBody>
      <DrawerFooter>
        <Button variant="secondary">Cancel</Button>
        <Button>Confirm</Button>
      </DrawerFooter>
    </Drawer>
  );
}
