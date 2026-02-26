import { Flex } from "@/components/flex";
import { StarRating, StarRatingInput } from "@/components/star-rating";
import { Text } from "@/components/typography/text";

export function Sizes() {
  return (
    <Flex direction="column" gap="4">
      <Flex direction="column" align="start" gap="2">
        <Text size="sm" variant="secondary">
          Read-only (StarRating)
        </Text>
        <Flex direction="row" gap="4" align="center" wrap>
          <Flex direction="column" align="start" gap="1">
            <Text size="xs">12px</Text>
            <StarRating rating={4} size={12} showReviewCount={false} />
          </Flex>
          <Flex direction="column" align="start" gap="1">
            <Text size="xs">16px (default)</Text>
            <StarRating rating={4} size={16} showReviewCount={false} />
          </Flex>
          <Flex direction="column" align="start" gap="1">
            <Text size="xs">20px</Text>
            <StarRating rating={4} size={20} showReviewCount={false} />
          </Flex>
          <Flex direction="column" align="start" gap="1">
            <Text size="xs">24px</Text>
            <StarRating rating={4} size={24} showReviewCount={false} />
          </Flex>
        </Flex>
      </Flex>
      <Flex direction="column" align="start" gap="2">
        <Text size="sm" variant="secondary">
          Interactive (StarRatingInput)
        </Text>
        <Flex direction="row" gap="4" align="center" wrap>
          <Flex direction="column" align="start" gap="1">
            <Text size="xs">12px</Text>
            <StarRatingInput
              defaultValue={3}
              size={12}
              aria-label="Small rating"
            />
          </Flex>
          <Flex direction="column" align="start" gap="1">
            <Text size="xs">16px (default)</Text>
            <StarRatingInput
              defaultValue={3}
              size={16}
              aria-label="Default rating"
            />
          </Flex>
          <Flex direction="column" align="start" gap="1">
            <Text size="xs">20px</Text>
            <StarRatingInput
              defaultValue={3}
              size={20}
              aria-label="Medium rating"
            />
          </Flex>
          <Flex direction="column" align="start" gap="1">
            <Text size="xs">24px</Text>
            <StarRatingInput
              defaultValue={3}
              size={24}
              aria-label="Large rating"
            />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
