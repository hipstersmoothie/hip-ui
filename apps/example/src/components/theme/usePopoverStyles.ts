import * as stylex from "@stylexjs/stylex";

import { radius } from "./radius.stylex";
import { gray } from "./semantic-color.stylex";
import { shadow } from "./shadow.stylex";
import { spacing } from "./spacing.stylex";

const styles = stylex.create({
  popover: {
    borderRadius: radius["md"],
    boxShadow: shadow["md"],
    minWidth: spacing["40"],
    outline: "none",
    overflow: "auto",

    paddingBottom: spacing["1"],
    paddingTop: spacing["1"],
  },
});

// eslint-disable-next-line @eslint-react/no-unnecessary-use-prefix
export function usePopoverStyles() {
  return [styles.popover, gray.bgSubtle, gray.text, gray.border];
}
