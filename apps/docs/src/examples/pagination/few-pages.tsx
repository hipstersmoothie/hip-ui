import * as stylex from "@stylexjs/stylex";
import { useState } from "react";

import { Pagination } from "@/components/pagination";

const styles = stylex.create({
  wrapper: {
    width: "100%",
  },
});

export function FewPages() {
  const [page, setPage] = useState(1);

  return (
    <div {...stylex.props(styles.wrapper)}>
      <Pagination
        totalPages={3}
        selectedPage={page}
        onSelectedPageChange={setPage}
      />
    </div>
  );
}
