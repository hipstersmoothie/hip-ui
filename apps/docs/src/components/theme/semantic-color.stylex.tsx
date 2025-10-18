import * as stylex from "@stylexjs/stylex";

import { slate, plum, red, yellow, green } from "./colors.stylex";
import { fontFamily } from "./typography.stylex";

// eslint-disable-next-line @stylexjs/enforce-extension
export const gray = stylex.create({
  bg: { backgroundColor: slate.bg1 },
  bgSubtle: { backgroundColor: slate.bg2 },
  bgDim: { backgroundColor: slate.component1 },
  bgSecondary: { backgroundColor: slate.component2 },
  bgActive: { backgroundColor: slate.component3 },
  borderDim: {
    borderColor: slate.border1,
    borderStyle: "solid",
    borderWidth: 1,
  },
  border: {
    borderColor: slate.border2,
    borderStyle: "solid",
    borderWidth: 1,
  },
  borderInteractive: {
    borderColor: {
      default: slate.border2,
      ":hover": slate.border3,
    },
    borderStyle: "solid",
    borderWidth: 1,

    transitionDuration: "100ms",
    transitionProperty: "background-color, border-color",
    transitionTimingFunction: "ease-in-out",
  },
  bgSolid: { backgroundColor: slate.solid1 },
  bgSolidDark: { backgroundColor: slate.solid2 },
  textDim: { color: slate.text1, fontFamily: fontFamily["sans"] },
  text: { color: slate.text2, fontFamily: fontFamily["sans"] },
  textContrast: { color: "white" },

  bgGhost: {
    backgroundColor: {
      default: "transparent",
      ":hover:not(:has(* button:hover)):not(:disabled)": slate.component2,
      ":is(:active,[data-pressed=true]):not(:disabled)": slate.component3,
      ":disabled": slate.component1,
    },
    transitionDuration: "100ms",
    transitionProperty: "background-color, border-color",
    transitionTimingFunction: "ease-in-out",
  },
  bgUi: {
    backgroundColor: {
      default: slate.component1,
      ":hover:not(:has(* button:hover)):not(:disabled)": slate.component2,
      ":active:not(:disabled)": slate.component3,
      ":disabled": slate.component1,
    },
    transitionDuration: "100ms",
    transitionProperty: "background-color, border-color",
    transitionTimingFunction: "ease-in-out",
  },
  bgAction: {
    backgroundColor: {
      default: slate.component2,
      ":hover:not(:has(* button:hover)):not(:disabled)": slate.component3,
      ":active:not(:disabled)": slate.component3,
      ":disabled": slate.component1,
    },
    transitionDuration: "100ms",
    transitionProperty: "background-color, border-color",
    transitionTimingFunction: "ease-in-out",
  },
});

// eslint-disable-next-line @stylexjs/enforce-extension
export const primary = stylex.create({
  bg: { backgroundColor: plum.bg1 },
  bgSubtle: { backgroundColor: plum.bg2 },
  bgDim: { backgroundColor: plum.component1 },
  bgSecondary: { backgroundColor: plum.component2 },
  bgActive: { backgroundColor: plum.component3 },
  borderDim: {
    borderColor: plum.border1,
    borderStyle: "solid",
    borderWidth: 1,
  },
  border: {
    borderColor: plum.border2,
    borderStyle: "solid",
    borderWidth: 1,
  },
  borderInteractive: {
    borderColor: {
      default: plum.border2,
      ":hover": plum.border3,
    },
    borderStyle: "solid",
    borderWidth: 1,

    transitionDuration: "100ms",
    transitionProperty: "background-color, border-color",
    transitionTimingFunction: "ease-in-out",
  },
  bgSolid: { backgroundColor: plum.solid1 },
  bgSolidDark: { backgroundColor: plum.solid2 },
  textDim: { color: plum.text1, fontFamily: fontFamily["sans"] },
  text: { color: plum.text2, fontFamily: fontFamily["sans"] },
  textContrast: { color: "white" },

  bgGhost: {
    backgroundColor: {
      default: "transparent",
      ":hover:not(:has(* button:hover)):not(:disabled)": plum.component2,
      ":active:not(:disabled)": plum.component3,
      ":disabled": plum.component1,
    },
    transitionDuration: "100ms",
    transitionProperty: "background-color, border-color",
    transitionTimingFunction: "ease-in-out",
  },
  bgUi: {
    backgroundColor: {
      default: plum.component1,
      ":hover:not(:has(* button:hover)):not(:disabled)": plum.component2,
      ":active": plum.component3,
      ":disabled": plum.component1,
    },
    transitionDuration: "100ms",
    transitionProperty: "background-color, border-color",
    transitionTimingFunction: "ease-in-out",
  },
  bgAction: {
    backgroundColor: {
      default: plum.component2,
      ":hover:not(:has(* button:hover)):not(:disabled)": plum.component3,
      ":active:not(:disabled)": plum.component3,
      ":disabled": plum.component1,
    },
    transitionDuration: "100ms",
    transitionProperty: "background-color, border-color",
    transitionTimingFunction: "ease-in-out",
  },
});

// eslint-disable-next-line @stylexjs/enforce-extension
export const critical = stylex.create({
  bg: { backgroundColor: red.bg1 },
  bgSubtle: { backgroundColor: red.bg2 },
  bgDim: { backgroundColor: red.component1 },
  bgSecondary: { backgroundColor: red.component2 },
  bgActive: { backgroundColor: red.component3 },
  borderDim: {
    borderColor: red.border1,
    borderStyle: "solid",
    borderWidth: 1,
  },
  border: {
    borderColor: red.border2,
    borderStyle: "solid",
    borderWidth: 1,
  },
  borderInteractive: {
    borderColor: {
      default: red.border2,
      ":hover": red.border3,
    },
    borderStyle: "solid",
    borderWidth: 1,
    transitionDuration: "100ms",
    transitionProperty: "background-color, border-color",
    transitionTimingFunction: "ease-in-out",
  },
  bgSolid: { backgroundColor: red.solid1 },
  bgSolidDark: { backgroundColor: red.solid2 },
  textDim: { color: red.text1, fontFamily: fontFamily["sans"] },
  text: { color: red.text2, fontFamily: fontFamily["sans"] },
  textContrast: { color: "white" },

  bgGhost: {
    backgroundColor: {
      default: "transparent",
      ":hover:not(:has(* button:hover)):not(:disabled)": red.component2,
      ":active:not(:disabled)": red.component3,
      ":disabled": red.component1,
    },
    transitionDuration: "100ms",
    transitionProperty: "background-color, border-color",
    transitionTimingFunction: "ease-in-out",
  },
  bgUi: {
    backgroundColor: {
      default: red.component1,
      ":hover:not(:has(* button:hover)):not(:disabled)": red.component2,
      ":active:not(:disabled)": red.component3,
      ":disabled": red.component1,
    },
    transitionDuration: "100ms",
    transitionProperty: "background-color, border-color",
    transitionTimingFunction: "ease-in-out",
  },
  bgAction: {
    backgroundColor: {
      default: red.component2,
      ":hover:not(:has(* button:hover)):not(:disabled)": red.component3,
      ":active:not(:disabled)": red.component3,
      ":disabled": red.component1,
    },
    transitionDuration: "100ms",
    transitionProperty: "background-color, border-color",
    transitionTimingFunction: "ease-in-out",
  },
  bgSolidAction: {
    backgroundColor: {
      default: red.solid1,
      ":hover:not(:has(* button:hover)):not(:disabled)": red.solid2,
      ":disabled": red.component1,
    },
    transitionDuration: "100ms",
    transitionProperty: "background-color, border-color",
    transitionTimingFunction: "ease-in-out",
  },
});

// eslint-disable-next-line @stylexjs/enforce-extension
export const warning = stylex.create({
  bg: { backgroundColor: yellow.bg1 },
  bgSubtle: { backgroundColor: yellow.bg2 },
  bgDim: { backgroundColor: yellow.component1 },
  bgSecondary: { backgroundColor: yellow.component2 },
  bgActive: { backgroundColor: yellow.component3 },
  borderDim: {
    borderColor: yellow.border1,
    borderStyle: "solid",
    borderWidth: 1,
  },
  border: {
    borderColor: yellow.border2,
    borderStyle: "solid",
    borderWidth: 1,
  },
  borderInteractive: {
    borderColor: {
      default: yellow.border2,
      ":hover": yellow.border3,
    },
  },
  bgSolid: { backgroundColor: yellow.solid1 },
  bgSolidDark: { backgroundColor: yellow.solid2 },
  textDim: { color: yellow.text1, fontFamily: fontFamily["sans"] },
  text: { color: yellow.text2, fontFamily: fontFamily["sans"] },
  textContrast: { color: "black" },

  bgGhost: {
    backgroundColor: {
      default: "transparent",
      ":hover:not(:has(* button:hover)):not(:disabled)": yellow.component2,
      ":active:not(:disabled)": yellow.component3,
      ":disabled": yellow.component1,
    },
    transitionDuration: "100ms",
    transitionProperty: "background-color, border-color",
    transitionTimingFunction: "ease-in-out",
  },
  bgUi: {
    backgroundColor: {
      default: yellow.component1,
      ":hover:not(:has(* button:hover)):not(:disabled)": yellow.component2,
      ":active:not(:disabled)": yellow.component3,
      ":disabled": yellow.component1,
    },
    transitionDuration: "100ms",
    transitionProperty: "background-color, border-color",
    transitionTimingFunction: "ease-in-out",
  },
  bgAction: {
    backgroundColor: {
      default: yellow.component2,
      ":hover:not(:has(* button:hover)):not(:disabled)": yellow.component3,
      ":active:not(:disabled)": yellow.component3,
      ":disabled": yellow.component1,
    },
    transitionDuration: "100ms",
    transitionProperty: "background-color, border-color",
    transitionTimingFunction: "ease-in-out",
  },
  bgSolidAction: {
    backgroundColor: {
      default: yellow.solid1,
      ":hover:not(:has(* button:hover)):not(:disabled)": yellow.solid2,
      ":disabled": yellow.component1,
    },
    transitionDuration: "100ms",
    transitionProperty: "background-color, border-color",
    transitionTimingFunction: "ease-in-out",
  },
});

// eslint-disable-next-line @stylexjs/enforce-extension
export const success = stylex.create({
  bg: { backgroundColor: green.bg1 },
  bgSubtle: { backgroundColor: green.bg2 },
  bgDim: { backgroundColor: green.component1 },
  bgSecondary: { backgroundColor: green.component2 },
  bgActive: { backgroundColor: green.component3 },
  borderDim: {
    borderColor: green.border1,
    borderStyle: "solid",
    borderWidth: 1,
  },
  border: {
    borderColor: green.border2,
    borderStyle: "solid",
    borderWidth: 1,
  },
  borderInteractive: {
    borderColor: {
      default: green.border2,
      ":hover": green.border3,
    },
    borderStyle: "solid",
    borderWidth: 1,
    transitionDuration: "100ms",
    transitionProperty: "background-color, border-color",
    transitionTimingFunction: "ease-in-out",
  },
  bgSolid: { backgroundColor: green.solid1 },
  bgSolidDark: { backgroundColor: green.solid2 },
  textDim: { color: green.text1, fontFamily: fontFamily["sans"] },
  text: { color: green.text2, fontFamily: fontFamily["sans"] },
  textContrast: { color: "white" },

  bgGhost: {
    backgroundColor: {
      default: "transparent",
      ":hover:not(:has(* button:hover)):not(:disabled)": green.component2,
      ":active:not(:disabled)": green.component3,
      ":disabled": green.component1,
    },
    transitionDuration: "100ms",
    transitionProperty: "background-color, border-color",
    transitionTimingFunction: "ease-in-out",
  },
  bgUi: {
    backgroundColor: {
      default: green.component1,
      ":hover:not(:has(* button:hover)):not(:disabled)": green.component2,
      ":active:not(:disabled)": green.component3,
      ":disabled": green.component1,
    },
    transitionDuration: "100ms",
    transitionProperty: "background-color, border-color",
    transitionTimingFunction: "ease-in-out",
  },
  bgAction: {
    backgroundColor: {
      default: green.component2,
      ":hover:not(:has(* button:hover)):not(:disabled)": green.component3,
      ":active:not(:disabled)": green.component3,
      ":disabled": green.component1,
    },
    transitionDuration: "100ms",
    transitionProperty: "background-color, border-color",
    transitionTimingFunction: "ease-in-out",
  },
  bgSolidAction: {
    backgroundColor: {
      default: green.solid1,
      ":hover:not(:has(* button:hover)):not(:disabled)": green.solid2,
      ":disabled": green.component1,
    },
    transitionDuration: "100ms",
    transitionProperty: "background-color, border-color",
    transitionTimingFunction: "ease-in-out",
  },
});
