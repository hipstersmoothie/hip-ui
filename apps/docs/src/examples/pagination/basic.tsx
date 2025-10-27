import * as stylex from "@stylexjs/stylex";
import { useState } from "react";

import { Pagination } from "@/components/pagination";

const styles = stylex.create({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
});

export function Basic() {
  const [page, setPage] = useState(1);

  return (
    <div {...stylex.props(styles.wrapper)}>
      <Pagination
        totalPages={20}
        selectedPage={page}
        onSelectedPageChange={setPage}
      />
    </div>
  );
}
