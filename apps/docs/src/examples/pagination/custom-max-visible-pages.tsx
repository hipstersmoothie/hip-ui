import * as stylex from "@stylexjs/stylex";

import { Flex } from "@/components/flex";
import { Pagination } from "@/components/pagination";

const styles = stylex.create({
  wrapper: {
    gap: "32px",
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
});

export function CustomMaxVisiblePages() {
  return (
    <div {...stylex.props(styles.wrapper)}>
      <Flex direction="column" gap="2">
        <div>maxVisiblePages: 3</div>
        <Pagination
          totalPages={20}
          defaultSelectedPage={1}
          maxVisiblePages={3}
        />
      </Flex>
      <Flex direction="column" gap="2">
        <div>maxVisiblePages: 7</div>
        <Pagination
          totalPages={20}
          defaultSelectedPage={1}
          maxVisiblePages={7}
        />
      </Flex>
      <Flex direction="column" gap="2">
        <div>maxVisiblePages: 10</div>
        <Pagination
          totalPages={20}
          defaultSelectedPage={1}
          maxVisiblePages={10}
        />
      </Flex>
    </div>
  );
}
