import * as stylex from "@stylexjs/stylex";
import { use } from "react";

import type { Size } from "../types";

import { SizeContext } from "../context";
import { slate } from "./colors.stylex";
import { radius } from "./radius.stylex";
import { gray } from "./semantic-color.stylex";
import { spacing } from "./spacing.stylex";
import { fontSize, lineHeight } from "./typography.stylex";

const styles = stylex.create({
  field: {
    gap: spacing["2"],
    display: "flex",
    flexDirection: "column",
  },
  addon: {
    color: gray.textDim,
    flexShrink: 0,
    height: "100%",
    minWidth: spacing["8"],
    paddingLeft: { ":first-child": spacing["0.5"] },
    paddingRight: {
      ":last-child:has(svg)": spacing["0.5"],
      ":last-child": spacing["2"],
    },

    gap: spacing["0.5"],
    alignItems: "center",
    display: "flex",
    justifyContent: "center",

    // eslint-disable-next-line @stylexjs/no-legacy-contextual-styles, @stylexjs/valid-styles
    ":is(*) svg": {
      flexShrink: 0,
      pointerEvents: "none",
      height: spacing["4"],
      width: spacing["4"],
    },
  },
  inputWrapper: {
    padding: 0,
    borderRadius: radius["md"],
    overflow: "hidden",
    boxSizing: "border-box",
    display: "flex",
    lineHeight: lineHeight["none"],

    borderColor: {
      default: slate.border2,
      ":hover": slate.border3,
      ":focus": slate.solid1,
    },
    borderStyle: "solid",
    borderWidth: 1,

    transitionProperty: "background-color, border-color",
  },
  input: {
    borderWidth: 0,
    alignItems: "center",
    outline: "none",
    backgroundColor: "transparent",
    boxSizing: "border-box",
    color: {
      ":is(::placeholder,[data-placeholder])": slate.text1,
    },
    display: "flex",
    flexGrow: 1,
    lineHeight: lineHeight["none"],

    appearance: {
      "::-webkit-search-cancel-button": "none",
      "::-webkit-search-decoration": "none",
    },
  },
  sm: {
    height: spacing["6"],
  },
  smInput: {
    fontSize: fontSize["xs"],
    paddingLeft: { ":first-child": spacing["1"] },
    paddingRight: spacing["1"],
  },
  md: {
    height: spacing["8"],
  },
  mdInput: {
    fontSize: fontSize["sm"],
    paddingLeft: { ":first-child": spacing["2"] },
    paddingRight: spacing["2"],
  },
  lg: {
    height: spacing["10"],
  },
  lgInput: {
    fontSize: fontSize["base"],
    paddingLeft: spacing["1"],
    paddingRight: spacing["2"],
  },
});

export function useInputStyles({ size: sizeProp }: { size?: Size }) {
  const size = sizeProp || use(SizeContext);

  return {
    field: [styles.field],
    wrapper: [styles.inputWrapper, gray.bgUi, gray.text, styles[size]],
    input: [styles.input, styles[`${size}Input`]],
    addon: styles.addon as unknown as stylex.StyleXStyles,
  };
}
