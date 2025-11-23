import {
  EmptyState,
  EmptyStateImage,
  EmptyStateTitle,
  EmptyStateDescription,
} from "@/components/empty-state";
import { spacing } from "../../components/theme/spacing.stylex";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  wrapper: {
    padding: spacing["16"],
  },
});

export function Basic() {
  return (
    <EmptyState style={styles.wrapper}>
      <EmptyStateImage>
        <svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="60"
            cy="60"
            r="50"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M40 60L55 75L80 45"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </EmptyStateImage>
      <EmptyStateTitle>No items found</EmptyStateTitle>
      <EmptyStateDescription>
        Get started by creating a new item.
      </EmptyStateDescription>
    </EmptyState>
  );
}
