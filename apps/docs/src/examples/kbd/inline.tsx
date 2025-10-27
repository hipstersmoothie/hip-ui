import { Kbd } from "@/components/kbd";
import { Text } from "@/components/typography/text";

export function Inline() {
  return (
    <Text variant="secondary">
      Use <Kbd>Tab</Kbd> to navigate forward, <Kbd>Shift+Tab</Kbd> to navigate
      backward.
    </Text>
  );
}
