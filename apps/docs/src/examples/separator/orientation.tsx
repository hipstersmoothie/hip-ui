import { Flex } from "@/components/flex";
import { Separator } from "@/components/separator";

export function SeparatorOrientation() {
  return (
    <Flex gap="4" align="center">
      <div>Left</div>
      <Separator orientation="vertical" />
      <div>Center</div>
      <Separator orientation="vertical" />
      <div>Right</div>
    </Flex>
  );
}
