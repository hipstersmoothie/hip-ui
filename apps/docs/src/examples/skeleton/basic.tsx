import { Flex } from "@/components/flex";
import { Skeleton, SkeletonGroup } from "@/components/skeleton";
import { spacing } from "@/components/theme/spacing.stylex";

export function Basic() {
  return (
    <SkeletonGroup>
      <Flex direction="column" gap="4">
        <Flex align="center" gap="3">
          <Skeleton variant="circle" size="md" />
          <Flex direction="column" gap="2">
            <Skeleton variant="rectangle" height={spacing["4"]} width="80px" />
            <Skeleton variant="rectangle" height={spacing["3"]} width="120px" />
          </Flex>
        </Flex>
        <Flex direction="column" gap="2">
          <Skeleton variant="rectangle" height={spacing["3"]} width="100%" />
          <Skeleton variant="rectangle" height={spacing["3"]} width="100%" />
          <Skeleton variant="rectangle" height={spacing["3"]} width="100%" />
          <Skeleton variant="rectangle" height={spacing["3"]} width="120px" />
        </Flex>
      </Flex>
    </SkeletonGroup>
  );
}
