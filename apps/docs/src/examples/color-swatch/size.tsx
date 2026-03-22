import { ColorSwatch } from "@/components/color-swatch";
import { Flex } from "@/components/flex";

export function Size() {
  return (
    <Flex align="center" gap="4" wrap>
      <ColorSwatch color="#2563eb" size="sm" />
      <ColorSwatch color="#2563eb" size="md" />
      <ColorSwatch color="#2563eb" size="lg" />
    </Flex>
  );
}
