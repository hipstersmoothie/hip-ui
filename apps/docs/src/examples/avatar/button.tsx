import { AvatarButton } from "@/components/avatar";
import { Flex } from "@/components/flex";

export function AvatarButtonExample() {
  return (
    <Flex gap="4">
      <AvatarButton
        size="xl"
        src="https://github.com/shadcn.png"
        fallback="JD"
        onPress={() => alert("Avatar clicked!")}
      />
      <AvatarButton
        size="xl"
        fallback="JD"
        onPress={() => alert("Avatar clicked!")}
      />
    </Flex>
  );
}
