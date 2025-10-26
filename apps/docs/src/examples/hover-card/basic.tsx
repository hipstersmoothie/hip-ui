import { HoverCard } from "@/components/hover-card";
import { Text } from "@/components/typography/text";

export function Basic() {
  return (
    <HoverCard trigger={<Text variant="link">Hover me</Text>}>
      <Text>This is a hover card with some content.</Text>
    </HoverCard>
  );
}
