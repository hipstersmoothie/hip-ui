import { Flex } from "@/components/flex";
import { Kbd } from "@/components/kbd";

export function Basic() {
  return (
    <Flex direction="column" gap="2">
      <div>
        Press <Kbd>MetaOrCtrl+K</Kbd> to open the command menu.
      </div>
      <div>
        Press <Kbd>MetaOrCtrl</Kbd> + <Kbd>Shift</Kbd> + <Kbd>P</Kbd> to open
        the file menu.
      </div>
    </Flex>
  );
}
