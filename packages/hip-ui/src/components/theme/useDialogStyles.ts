import * as stylex from "@stylexjs/stylex";
import { use } from "react";

import { SizeContext } from "../context";
import { animationDuration, animations } from "../theme/animations.stylex";
import { radius } from "../theme/radius.stylex";
import { shadow } from "../theme/shadow.stylex";
import { Size } from "../theme/types";
import { ui } from "./semantic-color.stylex";

const styles = stylex.create({
  overlay: {
    animationDuration: animationDuration.slow,
    animationName: {
      ":is([data-entering])": animations.fadeIn,
    },
    animationTimingFunction: "ease-in",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    opacity: {
      default: 1,
      ":is([data-exiting])": 0,
    },
    position: "absolute",
    transitionDuration: {
      ":is([data-exiting])": animationDuration.fast,
    },
    transitionProperty: "opacity",
    transitionTimingFunction: "ease-in-out",
    zIndex: 100,
    height: "var(--page-height)",
    left: 0,
    top: 0,
    width: "100vw",
  },
  modal: {
    // eslint-disable-next-line @stylexjs/valid-styles
    cornerShape: "squircle",
    borderRadius: {
      default: radius["lg"],
      "@supports (corner-shape: squircle)": radius["4xl"],
    },
    outline: "none",
    boxShadow: shadow["lg"],
    display: "flex",
    flexDirection: "column",
    position: "fixed",
    translate: "-50% -50%",
    left: "50%",
    maxHeight: "calc(var(--visual-viewport-height) * 0.8)",
    top: "calc(var(--visual-viewport-height) / 2)",

    animationDuration: { ":is([data-entering])": "300ms" },
    animationName: { ":is([data-entering])": animations.zoomIn },
    animationTimingFunction: {
      ":is([data-entering])": "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    },
  },
  dialog: {
    outline: "none",
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    minHeight: 0,
  },
  size: (size: Size) => ({
    width: size === "sm" ? 400 : size === "md" ? 600 : 800,
  }),
});

export function useDialogStyles({ size: sizeProp }: { size?: Size }) {
  const size = sizeProp || use(SizeContext);

  return {
    overlay: styles.overlay,
    modal: [styles.modal, ui.bg, ui.text, ui.border, styles.size(size)],
    dialog: styles.dialog,
  };
}
