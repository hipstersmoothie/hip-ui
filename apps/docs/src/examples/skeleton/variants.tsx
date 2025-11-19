import { Flex } from "@/components/flex";
import { Skeleton } from "@/components/skeleton";
import { spacing } from "@/components/theme/spacing.stylex";
import { Text } from "@/components/typography/text";

export function Variants() {
  return (
    <Flex gap="8" align="center">
      <Flex direction="column" gap="2">
        <Text weight="semibold">Circle</Text>
        <Skeleton variant="circle" size="md" />
      </Flex>
      <Flex direction="column" gap="2">
        <Text weight="semibold">Rectangle</Text>
        <Skeleton variant="rectangle" height={spacing["8"]} width="150px" />
      </Flex>
    </Flex>
  );
}
