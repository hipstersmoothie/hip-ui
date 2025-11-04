import { Button } from "@/components/button";
import { Drawer, DrawerHeader, DrawerBody } from "@/components/drawer";
import { Flex } from "@/components/flex";
import { Body } from "@/components/typography";

export function DrawerDirections() {
  return (
    <Flex gap="4" wrap>
      <Drawer
        size="sm"
        trigger={<Button>Open Left Drawer</Button>}
        direction="left"
      >
        <DrawerHeader>Left Drawer</DrawerHeader>
        <DrawerBody>
          <Body>This drawer slides in from the left side.</Body>
        </DrawerBody>
      </Drawer>

      <Drawer
        size="sm"
        trigger={<Button>Open Right Drawer</Button>}
        direction="right"
      >
        <DrawerHeader>Right Drawer</DrawerHeader>
        <DrawerBody>
          <Body>This drawer slides in from the right side.</Body>
        </DrawerBody>
      </Drawer>

      <Drawer
        size="sm"
        trigger={<Button>Open Top Drawer</Button>}
        direction="top"
      >
        <DrawerHeader>Top Drawer</DrawerHeader>
        <DrawerBody>
          <Body>This drawer slides in from the top.</Body>
        </DrawerBody>
      </Drawer>

      <Drawer
        size="sm"
        trigger={<Button>Open Bottom Drawer</Button>}
        direction="bottom"
      >
        <DrawerHeader>Bottom Drawer</DrawerHeader>
        <DrawerBody>
          <Body>This drawer slides in from the bottom.</Body>
        </DrawerBody>
      </Drawer>
    </Flex>
  );
}
