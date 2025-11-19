import * as stylex from "@stylexjs/stylex";
import { use } from "react";

import { SizeContext } from "../context";
import { InputVariant, Size } from "../theme/types";
import { radius } from "./radius.stylex";
import { criticalColor, ui, uiColor } from "./semantic-color.stylex";
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
    borderRadius: {
      default: radius["md"],
      "@supports (corner-shape: squircle)": radius["3xl"],
    },
    cornerShape: "squircle",
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
  primary: {
    borderColor: {
      default: uiColor.border2,
      ":has([data-hovered]:not([data-invalid])": uiColor.border3,
      ":focus": uiColor.solid1,
      ":has([data-invalid])": criticalColor.border2,
    },
    borderStyle: "solid",
    borderWidth: 1,
    transitionProperty: "background-color, border-color",
  },
  secondary: {
    borderColor: {
      default: uiColor.component1,
      ":has([data-invalid])": criticalColor.border2,
    },
    borderStyle: "solid",
    borderWidth: 1,
    transitionProperty: "background-color, border-color",
  },
  tertiary: {
    borderColor: {
      default: "transparent",
      ":has([data-invalid])": criticalColor.border2,
    },
    borderStyle: "solid",
    borderWidth: 1,
    transitionProperty: "background-color, border-color",
  },
  inputSize: (size: Size) => ({
    fontSize:
      size === "sm"
        ? fontSize["xs"]
        : size === "md"
          ? fontSize["sm"]
          : fontSize["base"],
    paddingLeft: {
      ":first-child":
        size === "sm"
          ? spacing["1"]
          : size === "md"
            ? spacing["2"]
            : spacing["1"],
    },
    paddingRight:
      size === "sm"
        ? spacing["1"]
        : size === "md"
          ? spacing["2"]
          : spacing["2"],
  }),
  wrapperSize: (size: Size) => ({
    height:
      size === "sm"
        ? spacing["6"]
        : size === "md"
          ? spacing["8"]
          : spacing["10"],
  }),
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
      variant === "primary" && [ui.bgGhost, styles.primary],
      variant === "secondary" && [ui.bgUi, styles.secondary],
      variant === "tertiary" && [ui.bgGhost, styles.tertiary],
      ui.text,
      styles.wrapperSize(size),
    ],
    input: [styles.input, styles.inputSize(size)],
    addon: styles.addon as unknown as stylex.StyleXStyles,
  };
}
