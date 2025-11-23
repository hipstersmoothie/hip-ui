import * as stylex from "@stylexjs/stylex";

import { animationDuration } from "./animations.stylex";
import { mediaQueries } from "./media-queries.stylex";
import { radius } from "./radius.stylex";
import { ui } from "./semantic-color.stylex";
import { shadow } from "./shadow.stylex";
import { spacing } from "./spacing.stylex";

const styles = stylex.create({
  popover: {
    // eslint-disable-next-line @stylexjs/valid-styles
    cornerShape: "squircle",
    borderRadius: {
      default: radius["md"],
      [mediaQueries.supportsSquircle]: radius["3xl"],
    },
    outline: "none",
    overflow: "auto",
    boxShadow: shadow["md"],
  },
  animation: {
    "--origin-x": {
      ":is([data-placement=left],[data-placement=left] > *)": spacing["4"],
      ":is([data-placement=right],[data-placement=right] > *)": `calc(${spacing["4"]} * -1)`,
    },
    "--origin-y": {
      ":is([data-placement=bottom],[data-placement=bottom] > *)": `calc(${spacing["4"]} * -1)`,
      ":is([data-placement=top],[data-placement=top] > *)": spacing["4"],
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
