import { Flex } from "@/components/flex";
import { Skeleton } from "@/components/skeleton";
import { Text } from "@/components/typography/text";
import { spacing } from "@/components/theme/spacing.stylex";

export function RectangleHeight() {
  return (
    <Flex direction="column" gap="4">
      <Flex direction="column" gap="2">
        <Text weight="semibold">Default height (no height prop)</Text>
        <Skeleton variant="rectangle" width="300px" />
      </Flex>
      <Flex direction="column" gap="2">
        <Text weight="semibold">Custom height: spacing["4"]</Text>
        <Skeleton variant="rectangle" height={spacing["4"]} width="300px" />
      </Flex>
      <Flex direction="column" gap="2">
        <Text weight="semibold">Custom height: spacing["8"]</Text>
        <Skeleton variant="rectangle" height={spacing["8"]} width="300px" />
      </Flex>
      <Flex direction="column" gap="2">
        <Text weight="semibold">Custom height: spacing["12"]</Text>
        <Skeleton variant="rectangle" height={spacing["12"]} width="300px" />
      </Flex>
    </Flex>
  );
}
