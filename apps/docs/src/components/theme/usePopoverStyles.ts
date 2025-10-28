import * as stylex from "@stylexjs/stylex";

import { animationDuration } from "./animations.stylex";
import { radius } from "./radius.stylex";
import { ui } from "./semantic-color.stylex";
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
  animation: {
    "--origin-x": {
      ":is([data-placement=left],[data-placement=left] > *)": spacing["4"],
      ":is([data-placement=right],[data-placement=right] > *)": `calc(${spacing["4"]} * -1)`,
    },
    "--origin-y": {
      ":is([data-placement=top],[data-placement=top] > *)": spacing["4"],
      ":is([data-placement=bottom],[data-placement=bottom] > *)": `calc(${spacing["4"]} * -1)`,
    },
    opacity: {
      ":is([data-entering], [data-entering] > *)": 0,
      ":is([data-exiting], [data-exiting] > *)": 0,
    },
    pointerEvents: {
      ":is([data-exiting], [data-exiting] > *)": "none",
    },
    transform: {
      ":is([data-entering], [data-entering] > *)": `scale(0.95) translate(var(--origin-x, 0), var(--origin-y, 0))`,
      ":is([data-exiting], [data-exiting] > *)":
        "scale(0.95) translate(var(--origin-x, 0), var(--origin-y, 0))",
    },
    transitionDuration: animationDuration.fast,
    transitionProperty: "transform, opacity",
  },
});

// eslint-disable-next-line @eslint-react/no-unnecessary-use-prefix
export function usePopoverStyles() {
  return {
    wrapper: [styles.popover, ui.bgSubtle, ui.text, ui.border],
    animation: styles.animation,
  };
}
