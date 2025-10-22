import * as stylex from "@stylexjs/stylex";
import { use } from "react";

import { SizeContext } from "../context";
import { InputVariant, Size } from "../theme/types";
import { radius } from "./radius.stylex";
import { ui, uiColor } from "./semantic-color.stylex";
import { spacing } from "./spacing.stylex";
import { lineHeight, fontSize } from "./typography.stylex";

const styles = stylex.create({
  field: {
    display: "flex",
    flexDirection: "column",
    gap: spacing["2"],
  },
  addon: {
    color: ui.textDim,
    flexShrink: 0,
    height: "100%",
    minWidth: spacing["8"],
    paddingLeft: { ":first-child": spacing["0.5"] },
    paddingRight: {
      ":last-child": spacing["2"],
      ":last-child:has(svg)": spacing["0.5"],
    },

    alignItems: "center",
    display: "flex",
    gap: spacing["0.5"],
    justifyContent: "center",

    // eslint-disable-next-line @stylexjs/no-legacy-contextual-styles, @stylexjs/valid-styles
    ":is(*) svg": {
      flexShrink: 0,
      height: spacing["4"],
      pointerEvents: "none",
      width: spacing["4"],
    },
  },
  inputWrapper: {
    borderRadius: radius["md"],
    borderWidth: 0,
    boxSizing: "border-box",
    display: "flex",
    lineHeight: lineHeight["none"],
    overflow: "hidden",
    padding: 0,
  },
  input: {
    alignItems: "center",
    backgroundColor: "transparent",
    borderWidth: 0,
    boxSizing: "border-box",
    color: {
      ":is(::placeholder,[data-placeholder])": uiColor.text1,
    },
    display: "flex",
    flexGrow: 1,
    lineHeight: lineHeight["none"],
    minWidth: 0,
    outline: "none",

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
  primary: {
    borderColor: {
      default: uiColor.border2,
      ":hover": uiColor.border3,
      ":focus": uiColor.solid1,
    },
    borderStyle: "solid",
    borderWidth: 1,
    transitionProperty: "background-color, border-color",
  },
});

export function useInputStyles({
  size: sizeProp,
  variant = "primary",
}: {
  size: Size | undefined;
  variant: InputVariant | undefined;
}) {
  const size = sizeProp || use(SizeContext);

  return {
    field: [styles.field],
    wrapper: [
      styles.inputWrapper,
      variant === "primary" && [ui.bgUi, styles.primary],
      variant === "secondary" && [ui.bgUi],
      variant === "tertiary" && [ui.bgGhost],
      ui.text,
      styles[size],
    ],
    input: [styles.input, styles[`${size}Input`]],
    addon: styles.addon as unknown as stylex.StyleXStyles,
  };
}
