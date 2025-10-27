import { clamp, useControlledState } from "@react-stately/utils";
import * as stylex from "@stylexjs/stylex";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Ellipsis,
} from "lucide-react";
import { use } from "react";

import { Button } from "../button";
import { SizeContext } from "../context";
import { Flex } from "../flex";
import { IconButton } from "../icon-button";
import { Size, StyleXComponentProps } from "../theme/types";

const styles = stylex.create({
  wrapper: {
    containerType: "inline-size",
  },
  pages: {
    flexGrow: 1,
  },
  mobileButton: {
    display: {
      default: "flex",
      ["@container (min-width: 400px)"]: "none",
    },
  },
  desktopButton: {
    display: {
      default: "none",
      ["@container (min-width: 400px)"]: "flex",
    },
  },
});

export interface PaginationProps
  extends StyleXComponentProps<React.ComponentProps<"div">> {
  defaultSelectedPage?: number;
  selectedPage?: number;
  onSelectedPageChange?: (page: number) => void;
  totalPages: number;
  maxVisiblePages?: number;
  size?: Size;
}

function sliceRange(
  center: number,
  totalPages: number,
  maxVisiblePages: number,
) {
  const span = Math.floor(maxVisiblePages / 2);
  // Pages arent 0-indexed, so we need to subtract 1 from the center
  const safeCenter = clamp(center - 1, span, totalPages - 1 - span);
  const startPage = Math.max(0, safeCenter - Math.floor(maxVisiblePages / 2));
  const used = safeCenter - startPage;
  const remainingPages = maxVisiblePages - used;
  const endPage = Math.min(totalPages, safeCenter + remainingPages);

  return Array.from({ length: totalPages })
    .map((_, index) => index)
    .slice(startPage, endPage)
    .map((page) => page + 1);
}

export function Pagination({
  defaultSelectedPage,
  selectedPage,
  onSelectedPageChange,
  style,
  totalPages,
  maxVisiblePages = 5,
  size: sizeProp,
  ...props
}: PaginationProps) {
  const size = sizeProp || use(SizeContext);
  const [page, setPage] = useControlledState(
    selectedPage,
    defaultSelectedPage ?? 0,
    onSelectedPageChange,
  );
  const visiblePages = sliceRange(page, totalPages, maxVisiblePages);

  return (
    <Flex {...props} style={[styles.wrapper, style]} align="center" gap="4">
      <IconButton
        style={styles.mobileButton as unknown as stylex.StyleXStyles}
        size={size}
        label="Previous page"
        isDisabled={page === 1}
        onClick={() => setPage(page - 1)}
        variant="tertiary"
      >
        <ChevronLeft />
      </IconButton>
      <Button
        style={styles.desktopButton as unknown as stylex.StyleXStyles}
        variant="tertiary"
        size={size}
        isDisabled={page === 1}
        onClick={() => setPage(page - 1)}
      >
        <ArrowLeft />
        Previous
      </Button>
      <Flex align="center" justify="center" gap="1" style={styles.pages}>
        {visiblePages[0] !== 1 && (
          <Button
            style={styles.desktopButton as unknown as stylex.StyleXStyles}
            variant="tertiary"
            size={size}
            onClick={() => setPage(page - maxVisiblePages)}
          >
            <Ellipsis />
          </Button>
        )}
        {visiblePages.map((visiblePage) => (
          <Button
            variant={page === visiblePage ? "outline" : "tertiary"}
            size={size}
            key={visiblePage}
            onClick={() => setPage(visiblePage)}
          >
            {visiblePage}
          </Button>
        ))}
        {visiblePages.at(-1) !== totalPages && (
          <IconButton
            style={styles.desktopButton as unknown as stylex.StyleXStyles}
            label="More pages"
            variant="tertiary"
            size={size}
            onClick={() => setPage(page + maxVisiblePages)}
          >
            <Ellipsis />
          </IconButton>
        )}
      </Flex>
      <IconButton
        style={styles.mobileButton as unknown as stylex.StyleXStyles}
        size={size}
        label="Next page"
        isDisabled={page === totalPages}
        onClick={() => setPage(page + 1)}
        variant="tertiary"
      >
        <ChevronRight />
      </IconButton>
      <Button
        style={styles.desktopButton as unknown as stylex.StyleXStyles}
        variant="tertiary"
        size={size}
        isDisabled={page === totalPages}
        onClick={() => setPage(page + 1)}
      >
        Next
        <ArrowRight />
      </Button>
    </Flex>
  );
}
