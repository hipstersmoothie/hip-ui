import { Avatar } from "@/components/avatar";
import { Flex } from "@/components/flex";

export function AvatarGroup() {
  return (
    <Flex gap="2" align="center">
      <Avatar size="sm" src="https://github.com/shadcn.png" fallback="JD" />
      <Avatar size="sm" src="https://github.com/vercel.png" fallback="VC" />
      <Avatar size="sm" src="https://github.com/nextjs.png" fallback="NJ" />
      <Avatar size="sm" fallback="+3" />
    </Flex>
  );
}
