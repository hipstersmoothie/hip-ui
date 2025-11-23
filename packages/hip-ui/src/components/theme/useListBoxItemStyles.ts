import * as stylex from "@stylexjs/stylex";
import { use } from "react";

import { SizeContext } from "../context";
import { radius } from "../theme/radius.stylex";
import { spacing } from "../theme/spacing.stylex";
import {
  fontSize,
  fontWeight,
  lineHeight,
  typeramp,
} from "../theme/typography.stylex";
import { animationDuration } from "./animations.stylex";
import { criticalColor, primaryColor, uiColor } from "./color.stylex";
import { mediaQueries } from "./media-queries.stylex";

const styles = stylex.create({
  item: {
    display: "flex",
    userSelect: "none",

    outline: {
      default: "none",
      ":focus": "none",
    },
    boxSizing: "border-box",
    fontWeight: {
      default: fontWeight["normal"],
      [":is([data-react-aria-pressable=true][data-selected=true])"]:
        fontWeight["medium"],
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
    // eslint-disable-next-line @stylexjs/valid-styles
    cornerShape: "squircle",
    borderRadius: {
      default: radius["md"],
      [mediaQueries.supportsSquircle]: radius["3xl"],
    },
    gap: spacing["3"],
    alignItems: "center",
    backgroundColor: {
      default: "transparent",
      [":is([data-react-aria-pressable=true]:hover:not([data-disabled]) *)"]:
        uiColor.component2,
      [":is([data-react-aria-pressable=true]:not([data-disabled]):active *)"]:
        uiColor.component3,
    },
    boxSizing: "border-box",
    color: {
      default: uiColor.text2,
      [":is([data-react-aria-pressable=true][data-disabled] *)"]:
        uiColor.border3,
    },
    display: "flex",
    flexGrow: 1,
    transitionDuration: animationDuration.fast,
    transitionProperty: "background-color",
    transitionTimingFunction: "ease-in-out",
    paddingBottom: spacing["2"],
    paddingLeft: spacing["3"],
    paddingRight: spacing["3"],
    paddingTop: spacing["2"],
  },
  smItemInner: {
    gap: spacing["2"],
    fontSize: fontSize["xs"],
    lineHeight: lineHeight["xs"],
    paddingBottom: spacing["1"],
    paddingTop: spacing["1"],
  },
  lgItemInner: {
    fontSize: fontSize["base"],
  },
  check: {
    color: primaryColor.solid1,
  },
  addon: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    marginBottom: `calc(${spacing["2"]} * -1)`,
    marginTop: `calc(${spacing["2"]} * -1)`,
    minWidth: spacing["4"],

    // eslint-disable-next-line @stylexjs/valid-styles, @stylexjs/no-legacy-contextual-styles
    ":is(*) svg": {
      flexShrink: 0,
      pointerEvents: "none",
      height: spacing["4"],
      width: spacing["4"],
    },
  },
  label: {
    gap: spacing["1.5"],
    color: {
      [":is([data-variant=destructive] *)"]: criticalColor.text1,
    },
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
  },
});

export function useListBoxItemStyles() {
  const size = use(SizeContext);

  return {
    wrapper: [
      typeramp.label,
      styles.item,
      size === "sm" && styles.sm,
      size === "md" && styles.md,
      size === "lg" && styles.lg,
    ],
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
