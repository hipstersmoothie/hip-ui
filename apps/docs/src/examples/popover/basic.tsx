import { Button } from "@/components/button";
import { Flex } from "@/components/flex";
import { Popover } from "@/components/popover";
import { Text } from "@/components/typography/text";

export function Basic() {
  return (
    <Popover trigger={<Button>Open Popover</Button>}>
      <Flex direction="column" gap="3">
        <Text size="lg" weight="medium">
          Popover Content
        </Text>
        <Text size="base">This is the content inside the popover.</Text>
      </Flex>
    </Popover>
  );
}
