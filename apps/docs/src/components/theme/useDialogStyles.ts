import * as stylex from "@stylexjs/stylex";
import { use } from "react";

import { SizeContext } from "../context";
import { animations } from "../theme/animations.stylex";
import { radius } from "../theme/radius.stylex";
import { shadow } from "../theme/shadow.stylex";
import { Size } from "../theme/types";
import { gray } from "./semantic-color.stylex";

const styles = stylex.create({
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    height: "var(--page-height)",
    left: 0,
    position: "absolute",
    top: 0,
    width: "100vw",
    zIndex: 100,

    animationDuration: "200ms",
    animationName: {
      ":is([data-entering])": animations.fadeIn,
    },
    animationTimingFunction: "ease-in",
    opacity: {
      default: 1,
      ":is([data-exiting])": 0,
    },
    transitionDuration: {
      ":is([data-exiting])": "100ms",
    },
    transitionProperty: "opacity",
    transitionTimingFunction: "ease-in-out",
  },
  modal: {
    borderRadius: radius["lg"],
    boxShadow: shadow["lg"],
    display: "flex",
    flexDirection: "column",
    left: "50%",
    maxHeight: "calc(var(--visual-viewport-height) * 0.8)",
    outline: "none",
    position: "fixed",
    top: "calc(var(--visual-viewport-height) / 2)",
    translate: "-50% -50%",

    animationDuration: { ":is([data-entering])": "300ms" },
    animationName: { ":is([data-entering])": animations.zoomIn },
    animationTimingFunction: {
      ":is([data-entering])": "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    },
  },
  dialog: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    minHeight: 0,
    outline: "none",
  },
  sm: {
    width: 400,
  },
  md: {
    width: 600,
  },
  lg: {
    width: 800,
  },
});

export function useDialogStyles({ size: sizeProp }: { size?: Size }) {
  const size = sizeProp || use(SizeContext);

  return {
    overlay: styles.overlay,
    modal: [
      styles.modal,
      styles.modal,
      gray.bg,
      gray.text,
      gray.border,
      styles[size],
    ],
    dialog: styles.dialog,
  };
}
