import { Separator } from "@/components/separator";
import { Flex } from "@/components/flex";

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
