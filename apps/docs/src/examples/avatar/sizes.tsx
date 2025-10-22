import { Avatar } from "../../components/avatar";
import { Flex } from "../../components/flex";

const sizes = ["sm", "md", "lg", "xl"] as const;

export function AvatarSizes() {
  return (
    <Flex direction="column" gap="4">
      <Flex gap="4">
        {sizes.map((size) => (
          <Avatar
            key={size}
            size={size}
            src="https://github.com/shadcn.png"
            fallback="JD"
          />
        ))}
      </Flex>
      <Flex gap="4">
        {sizes.map((size) => (
          <Avatar key={size} size={size} fallback="JD" />
        ))}
      </Flex>
    </Flex>
  );
}
