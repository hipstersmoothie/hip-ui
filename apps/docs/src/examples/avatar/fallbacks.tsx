import { Avatar } from "@/components/avatar";
import { Flex } from "@/components/flex";

export function AvatarFallbacks() {
  return (
    <Flex gap="4" wrap>
      <Avatar size="lg" fallback="AB" />
      <Avatar size="lg" fallback="CD" />
      <Avatar size="lg" fallback="EF" />
      <Avatar size="lg" fallback="GH" />
    </Flex>
  );
}
