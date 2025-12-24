import { Button } from "@/components/button";
import { Drawer, DrawerHeader, DrawerBody } from "@/components/drawer";
import { Flex } from "@/components/flex";
import { Body } from "@/components/typography";

export function DrawerSizes() {
  return (
    <Flex gap="4" wrap>
      <Drawer trigger={<Button>Small Drawer</Button>} size="sm">
        <DrawerHeader>Small Drawer</DrawerHeader>
        <DrawerBody>
          <Body>This is a small drawer with minimal content.</Body>
        </DrawerBody>
      </Drawer>

      <Drawer trigger={<Button>Medium Drawer</Button>} size="md">
        <DrawerHeader>Medium Drawer</DrawerHeader>
        <DrawerBody>
          <Body>This is a medium drawer with more space for content.</Body>
        </DrawerBody>
      </Drawer>

      <Drawer trigger={<Button>Large Drawer</Button>} size="lg">
        <DrawerHeader>Large Drawer</DrawerHeader>
        <DrawerBody>
          <Body>
            This is a large drawer with even more space for content. Perfect for
            forms, detailed information, or complex layouts.
          </Body>
        </DrawerBody>
      </Drawer>
    </Flex>
  );
}
