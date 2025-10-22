import { Dialog, DialogHeader } from "@/components/dialog";
import { Button } from "@/components/button";
import { Flex } from "@/components/flex";

export function DialogSizes() {
  return (
    <Flex gap="4" wrap>
      <Dialog trigger={<Button>Small Dialog</Button>}>
        <DialogHeader>Small Dialog</DialogHeader>
        <p>This is a small dialog with minimal content.</p>
      </Dialog>

      <Dialog trigger={<Button>Large Dialog</Button>}>
        <DialogHeader>Large Dialog</DialogHeader>
        <p>This is a large dialog with more space for content.</p>
        <p>Perfect for forms, detailed information, or complex layouts.</p>
      </Dialog>
    </Flex>
  );
}
