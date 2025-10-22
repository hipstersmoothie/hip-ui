import { Flex } from "@/components/flex";
import { Avatar } from "@/components/avatar";

export function Basic() {
  return (
    <Flex gap="4">
      <Avatar size="xl" src="https://github.com/shadcn.png" fallback="JD" />
      <Avatar size="xl" fallback="JD" />
    </Flex>
  );
}
