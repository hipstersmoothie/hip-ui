import * as stylex from "@stylexjs/stylex";
import { use } from "react";

import { SizeContext } from "../context";
import { InputValidationState, InputVariant, Size } from "../theme/types";
import { animationDuration } from "./animations.stylex";
import {
  criticalColor,
  successColor,
  uiColor,
  warningColor,
} from "./color.stylex";
import { mediaQueries } from "./media-queries.stylex";
import { radius } from "./radius.stylex";
import { ui } from "./semantic-color.stylex";
import { spacing } from "./spacing.stylex";
import { lineHeight, fontSize } from "./typography.stylex";

const styles = stylex.create({
  field: {
    gap: spacing["2"],
    display: "flex",
    flexDirection: "column",
  },
  addon: {
    boxSizing: "border-box",
    color: ui.textDim,
    flexShrink: 0,
    height: "100%",

    gap: spacing["2"],
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
  addonSm: {
    paddingLeft: { ":first-child": spacing["1.5"] },
    paddingRight: {
      ":first-child": spacing["1"],
      ":last-child": spacing["1.5"],
    },
  },
  addonMd: {
    paddingLeft: { ":first-child": spacing["2.5"] },
    paddingRight: {
      ":first-child": spacing["2"],
      ":last-child": spacing["2.5"],
    },
  },
  addonLg: {
    paddingLeft: { ":first-child": spacing["3"] },
    paddingRight: {
      ":first-child": spacing["2"],
      ":last-child": spacing["3"],
    },
  },
  validationIcon: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
  invalidIcon: {
    color: criticalColor.text1,
  },
  validIcon: {
    color: successColor.text1,
  },
  warningIcon: {
    color: warningColor.text1,
  },
  inputWrapper: {
    // eslint-disable-next-line @stylexjs/valid-styles
    cornerShape: "squircle",
    padding: 0,
    borderRadius: {
      default: radius["md"],
      [mediaQueries.supportsSquircle]: radius["3xl"],
    },
    borderWidth: 0,
    overflow: "hidden",
    boxSizing: "border-box",
    display: "flex",
    lineHeight: lineHeight["none"],
  },
  input: {
    borderWidth: 0,
    outline: "none",
    alignItems: "center",
    backgroundColor: "transparent",
    boxSizing: "border-box",
    color: {
      default: "inherit",
      ":is(::placeholder,[data-placeholder])": uiColor.text1,
    },
    display: "flex",
    flexGrow: 1,
    lineHeight: lineHeight["none"],
    minWidth: 0,

    appearance: {
      "::-webkit-search-cancel-button": "none",
      "::-webkit-search-decoration": "none",
    },
  },
  primary: {
    borderColor: {
      default: uiColor.border2,
      ":has([data-hovered]):not(:has([data-invalid]))": uiColor.border3,
      ":focus": uiColor.solid1,
    },
    borderStyle: "solid",
    borderWidth: 1,
    backgroundColor: {
      default: "transparent",
      ":hover:not(:has(* button:hover)):not(:disabled)": uiColor.component2,
      ":is(:active,[data-pressed=true]):not(:disabled)": uiColor.component3,
      ":disabled": "transparent",
    },
    boxShadow: {
      ":has([data-invalid])": `0 0 0 2px ${criticalColor.component1}`,
    },
    transitionDuration: animationDuration.fast,
    transitionProperty: "background-color",
    transitionTimingFunction: "ease-in-out",
  },
  primaryInvalid: {
    borderColor: {
      default: criticalColor.border2,
      ":has([data-hovered])": criticalColor.border3,
      ":focus": uiColor.solid1,
    },
    backgroundColor: {
      default: criticalColor.bgSubtle,
      ":hover:not(:has(* button:hover)):not(:disabled)":
        criticalColor.component2,
      ":disabled": "transparent",
    },
    boxShadow: `0 0 0 2px ${criticalColor.component1}`,
    color: criticalColor.text2,
  },
  primaryWarning: {
    borderColor: {
      default: warningColor.border2,
      ":has([data-hovered])": warningColor.border3,
      ":focus": uiColor.solid1,
    },
    backgroundColor: {
      default: warningColor.bgSubtle,
      ":hover:not(:has(* button:hover)):not(:disabled)":
        warningColor.component2,
      ":disabled": "transparent",
    },
    boxShadow: `0 0 0 2px ${warningColor.component1}`,
    color: warningColor.text2,
  },
  primaryValid: {
    borderColor: {
      default: successColor.border2,
      ":has([data-hovered])": successColor.border3,
      ":focus": uiColor.solid1,
    },
    backgroundColor: {
      default: successColor.bgSubtle,
      ":hover:not(:has(* button:hover)):not(:disabled)":
        successColor.component2,
      ":disabled": "transparent",
    },
    boxShadow: `0 0 0 2px ${successColor.component1}`,
    color: successColor.text2,
  },
  secondary: {
    borderColor: {
      default: uiColor.component1,
      ":hover:not(:has(* button:hover)):not(:disabled)": uiColor.component2,
      ":is(:active,[data-pressed=true]):not(:disabled)": uiColor.component3,
      ":disabled": uiColor.component1,
    },
    borderStyle: "solid",
    borderWidth: 1,
    backgroundColor: {
      default: uiColor.component1,
      ":hover:not(:has(* button:hover)):not(:disabled)": uiColor.component2,
      ":is(:active,[data-pressed=true]):not(:disabled)": uiColor.component3,
      ":disabled": uiColor.component1,
    },
    transitionDuration: animationDuration.fast,
    transitionProperty: "background-color",
    transitionTimingFunction: "ease-in-out",
  },
  secondaryInvalid: {
    borderColor: {
      default: criticalColor.component1,
      ":hover:not(:has(* button:hover)):not(:disabled)":
        criticalColor.component2,
    },
    backgroundColor: {
      default: criticalColor.component1,
      ":hover:not(:has(* button:hover)):not(:disabled)":
        criticalColor.component2,
    },
  },
  secondaryWarning: {
    borderColor: {
      default: warningColor.component1,
      ":hover:not(:has(* button:hover)):not(:disabled)":
        warningColor.component2,
    },
    backgroundColor: {
      default: warningColor.component1,
      ":hover:not(:has(* button:hover)):not(:disabled)":
        warningColor.component2,
    },
    color: warningColor.text2,
  },
  secondaryValid: {
    borderColor: {
      default: successColor.component1,
      ":hover:not(:has(* button:hover)):not(:disabled)":
        successColor.component2,
    },
    backgroundColor: {
      default: successColor.component1,
      ":hover:not(:has(* button:hover)):not(:disabled)":
        successColor.component2,
    },
    color: successColor.text2,
  },
  tertiary: {
    borderColor: {
      default: "transparent",
      ":hover:not(:has(* button:hover)):not(:disabled)": uiColor.component2,
      ":is(:active,[data-pressed=true]):not(:disabled)": uiColor.component3,
      ":disabled": "transparent",
    },
    borderStyle: "solid",
    borderWidth: 1,
    backgroundColor: {
      default: "transparent",
      ":hover:not(:has(* button:hover)):not(:disabled)": uiColor.component2,
      ":is(:active,[data-pressed=true]):not(:disabled)": uiColor.component3,
      ":disabled": "transparent",
    },
    transitionDuration: animationDuration.fast,
    transitionProperty: "background-color",
    transitionTimingFunction: "ease-in-out",
  },
  tertiaryInvalid: {
    borderColor: {
      default: "transparent",
      ":hover:not(:has(* button:hover)):not(:disabled)":
        criticalColor.component1,
      ":is(:active,[data-pressed=true]):not(:disabled)":
        criticalColor.component2,
      ":disabled": "transparent",
    },
    backgroundColor: {
      default: "transparent",
      ":hover:not(:has(* button:hover)):not(:disabled)":
        criticalColor.component1,
      ":is(:active,[data-pressed=true]):not(:disabled)":
        criticalColor.component2,
      ":disabled": "transparent",
    },
    color: criticalColor.text2,
  },
  tertiaryWarning: {
    borderColor: {
      default: "transparent",
      ":hover:not(:has(* button:hover)):not(:disabled)":
        warningColor.component1,
      ":is(:active,[data-pressed=true]):not(:disabled)":
        warningColor.component2,
      ":disabled": "transparent",
    },
    backgroundColor: {
      default: "transparent",
      ":hover:not(:has(* button:hover)):not(:disabled)":
        warningColor.component1,
      ":is(:active,[data-pressed=true]):not(:disabled)":
        warningColor.component2,
      ":disabled": "transparent",
    },
    color: warningColor.text1,
  },
  tertiaryValid: {
    borderColor: {
      default: "transparent",
      ":hover:not(:has(* button:hover)):not(:disabled)":
        successColor.component1,
      ":is(:active,[data-pressed=true]):not(:disabled)":
        successColor.component2,
      ":disabled": "transparent",
    },
    backgroundColor: {
      default: "transparent",
      ":hover:not(:has(* button:hover)):not(:disabled)":
        successColor.component1,
      ":is(:active,[data-pressed=true]):not(:disabled)":
        successColor.component2,
      ":disabled": "transparent",
    },
    color: successColor.text1,
  },

  inputSizeSm: {
    fontSize: fontSize["xs"],
    paddingLeft: {
      ":first-child": spacing["2"],
    },
    paddingRight: spacing["1"],
  },
  inputSizeMd: {
    fontSize: fontSize["sm"],
    paddingLeft: {
      ":first-child": spacing["2"],
    },
    paddingRight: spacing["2"],
  },
  inputSizeLg: {
    fontSize: fontSize["base"],
    paddingLeft: {
      ":first-child": spacing["3"],
    },
    paddingRight: spacing["3"],
  },
  wrapperSizeSm: {
    height: spacing["6"],
  },
  wrapperSizeMd: {
    height: spacing["8"],
  },
  wrapperSizeLg: {
    height: spacing["10"],
  },
});

export function useInputStyles({
  size: sizeProp,
  variant = "primary",
  validationState,
}: {
  size: Size | undefined;
  variant: InputVariant | undefined;
  validationState: InputValidationState | undefined;
}) {
  const size = sizeProp || use(SizeContext);

  return {
    field: [styles.field],
    wrapper: [
      styles.inputWrapper,
      ui.text,
      variant === "primary" && [
        styles.primary,
        validationState === "invalid" && [styles.primaryInvalid],
        validationState === "warning" && [styles.primaryWarning],
        validationState === "valid" && [styles.primaryValid],
      ],
      variant === "secondary" && [
        styles.secondary,
        validationState === "invalid" && [styles.secondaryInvalid],
        validationState === "warning" && [styles.secondaryWarning],
        validationState === "valid" && [styles.secondaryValid],
      ],
      variant === "tertiary" && [
        styles.tertiary,
        validationState === "invalid" && [styles.tertiaryInvalid],
        validationState === "warning" && [styles.tertiaryWarning],
        validationState === "valid" && [styles.tertiaryValid],
      ],
      size === "sm" && styles.wrapperSizeSm,
      size === "md" && styles.wrapperSizeMd,
      size === "lg" && styles.wrapperSizeLg,
    ],
    input: [
      styles.input,
      size === "sm" && styles.inputSizeSm,
      size === "md" && styles.inputSizeMd,
      size === "lg" && styles.inputSizeLg,
    ],
    addon: [
      styles.addon,
      size === "sm" && styles.addonSm,
      size === "md" && styles.addonMd,
      size === "lg" && styles.addonLg,
    ] as unknown as stylex.StyleXStyles,
    validationIcon: [
      styles.validationIcon,
      validationState === "invalid" && [styles.invalidIcon],
      validationState === "valid" && [styles.validIcon],
      validationState === "warning" && [styles.warningIcon],
    ],
  };
}
