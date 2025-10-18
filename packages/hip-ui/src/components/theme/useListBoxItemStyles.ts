import * as stylex from "@stylexjs/stylex";
import { spacing } from "../theme/spacing.stylex";
import { plum, slate } from "../theme/colors.stylex";
import { radius } from "../theme/radius.stylex";
import {
  fontSize,
  fontWeight,
  lineHeight,
  typeramp,
} from "../theme/typography.stylex";
import { SizeContext } from "../context";
import { use } from "react";

const styles = stylex.create({
  item: {
    display: "flex",
    userSelect: "none",

    boxSizing: "border-box",
    fontWeight: fontWeight["medium"],
    outline: {
      default: "none",
      ":focus": "none",
    },
    paddingBottom: spacing["0.5"],
    paddingLeft: spacing["1"],
    paddingRight: spacing["1"],
    paddingTop: spacing["0.5"],
  },
  sm: { minHeight: spacing["7"] },
  md: { minHeight: spacing["9"] },
  lg: { minHeight: spacing["12"] },
  itemInner: {
    alignItems: "center",
    backgroundColor: {
      default: "transparent",
      [":is([data-react-aria-pressable=true][data-focused] *)"]: slate[4],
      [":is([data-react-aria-pressable=true][data-selected=true] *)"]: slate[4],
      [":is([data-react-aria-pressable=true]:hover:not([data-disabled]) *)"]:
        slate[4],
      [":is([data-react-aria-pressable=true]:not([data-disabled]):active *)"]:
        slate[5],
    },
    borderRadius: radius["md"],
    boxSizing: "border-box",
    color: {
      default: slate[12],
      [":is([data-react-aria-pressable=true][data-disabled] *)"]: slate[8],
    },
    display: "flex",
    flexGrow: 1,
    gap: spacing["3"],
    paddingBottom: spacing["2"],
    paddingLeft: spacing["3"],
    paddingRight: spacing["3"],
    paddingTop: spacing["2"],
    transitionDuration: "100ms",
    transitionProperty: "background-color",
    transitionTimingFunction: "ease-in-out",
  },
  smItemInner: {
    fontSize: fontSize["xs"],
    gap: spacing["2"],
    lineHeight: lineHeight["xs"],
    paddingBottom: spacing["1"],
    paddingTop: spacing["1"],
  },
  lgItemInner: {
    fontSize: fontSize["base"],
  },
  check: {
    color: plum[9],
  },
  addon: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    minWidth: spacing["4"],

    // eslint-disable-next-line @stylexjs/no-legacy-contextual-styles, @stylexjs/valid-styles
    ":is(*) svg": {
      flexShrink: 0,
      height: spacing["4"],
      pointerEvents: "none",
      width: spacing["4"],
    },
  },
  label: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    gap: spacing["1.5"],
  },
});

export function useListBoxItemStyles() {
  const size = use(SizeContext);

  return {
    wrapper: [typeramp.label, styles.item, styles[size]],
    inner: [
      styles.itemInner,
      size === "sm" && styles.smItemInner,
      size === "lg" && styles.lgItemInner,
    ],
    label: styles.label,
    addon: styles.addon,
    check: styles.check,
  };
}
