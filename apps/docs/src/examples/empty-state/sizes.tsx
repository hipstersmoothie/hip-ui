import {
  EmptyState,
  EmptyStateImage,
  EmptyStateTitle,
  EmptyStateDescription,
  EmptyStateActions,
} from "@/components/empty-state";
import { Button } from "@/components/button";
import { Flex } from "@/components/flex";
import * as stylex from "@stylexjs/stylex";
import { spacing } from "../../components/theme/spacing.stylex";
import { TriangleAlert } from "lucide-react";

const styles = stylex.create({
  wrapper: {
    padding: spacing["6"],
  },
});

function CheckIllustration() {
  return (
    <svg
      width="180"
      height="180"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="60" cy="60" r="50" stroke="currentColor" strokeWidth="2" />
      <path
        d="M40 60L55 75L80 45"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Sizes() {
  return (
    <Flex style={styles.wrapper} direction="column" align="center" gap="20">
      <EmptyState size="sm">
        <EmptyStateImage>
          <TriangleAlert />
        </EmptyStateImage>
        <EmptyStateTitle>No items found</EmptyStateTitle>
        <EmptyStateDescription>
          Get started by creating a new item.
        </EmptyStateDescription>
        <EmptyStateActions>
          <Button variant="outline">Create Item</Button>
        </EmptyStateActions>
      </EmptyState>

      <EmptyState size="md">
        <EmptyStateImage>
          <CheckIllustration />
        </EmptyStateImage>
        <EmptyStateTitle>No items found</EmptyStateTitle>
        <EmptyStateDescription>
          Get started by creating a new item.
        </EmptyStateDescription>
        <EmptyStateActions>
          <Button variant="outline">Create Item</Button>
        </EmptyStateActions>
      </EmptyState>

      <EmptyState size="lg">
        <EmptyStateImage>
          <CheckIllustration />
        </EmptyStateImage>
        <EmptyStateTitle>No items found</EmptyStateTitle>
        <EmptyStateDescription>
          Get started by creating a new item.
        </EmptyStateDescription>
        <EmptyStateActions>
          <Button variant="outline" size="lg">
            Create Item
          </Button>
        </EmptyStateActions>
      </EmptyState>
    </Flex>
  );
}
