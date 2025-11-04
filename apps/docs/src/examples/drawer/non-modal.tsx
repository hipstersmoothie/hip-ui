import { Button } from "@/components/button";
import {
  Drawer,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
} from "@/components/drawer";
import { Body } from "@/components/typography";

export function DrawerNonModal() {
  return (
    <Drawer trigger={<Button>Open Non-Modal Drawer</Button>} isNonModal>
      <DrawerHeader>Non-Modal Drawer</DrawerHeader>
      <DrawerBody>
        <Body>
          This drawer is non-modal, meaning you can still interact with the page
          behind it while it's open. Try clicking outside the drawer or
          interacting with other elements on the page.
        </Body>
      </DrawerBody>
      <DrawerFooter>
        <Button variant="secondary">Cancel</Button>
        <Button>Confirm</Button>
      </DrawerFooter>
    </Drawer>
  );
}
