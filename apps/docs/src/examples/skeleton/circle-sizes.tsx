import { Flex } from "@/components/flex";
import { Skeleton } from "@/components/skeleton";
import { Text } from "@/components/typography/text";

export function CircleSizes() {
  return (
    <Flex gap="8" align="center">
      <Flex direction="column" gap="2" align="center">
        <Text weight="semibold">Small</Text>
        <Skeleton variant="circle" size="sm" />
      </Flex>
      <Flex direction="column" gap="2" align="center">
        <Text weight="semibold">Medium</Text>
        <Skeleton variant="circle" size="md" />
      </Flex>
      <Flex direction="column" gap="2" align="center">
        <Text weight="semibold">Large</Text>
        <Skeleton variant="circle" size="lg" />
      </Flex>
    </Flex>
  );
}
