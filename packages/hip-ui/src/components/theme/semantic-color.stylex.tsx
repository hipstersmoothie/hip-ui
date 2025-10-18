import * as stylex from "@stylexjs/stylex";

import { slate, plum, red } from "./colors.stylex";

// eslint-disable-next-line @stylexjs/enforce-extension
export const gray = stylex.create({
  bg: { backgroundColor: slate[1] },
  bgSubtle: { backgroundColor: slate[2] },
  bgDim: { backgroundColor: slate[3] },
  bgSecondary: { backgroundColor: slate[4] },
  bgActive: { backgroundColor: slate[5] },
  borderDim: {
    borderColor: slate[6],
    borderStyle: "solid",
    borderWidth: 1,
  },
  border: {
    borderColor: slate[7],
    borderStyle: "solid",
    borderWidth: 1,
  },
  borderInteractive: {
    borderColor: {
      default: slate[7],
      ":hover": slate[8],
    },
    borderStyle: "solid",
    borderWidth: 1,

    transitionDuration: "100ms",
    transitionProperty: "background-color, border-color",
    transitionTimingFunction: "ease-in-out",
  },
  bgSolid: { backgroundColor: slate[9] },
  bgSolidDark: { backgroundColor: slate[10] },
  textDim: { color: slate[11] },
  text: { color: slate[12] },
  textContrast: { color: "white" },

  bgGhost: {
    backgroundColor: {
      default: "transparent",
      ":hover:not(:has(* button:hover)):not(:disabled)": slate[4],
      ":active:not(:disabled)": slate[5],
      ":disabled": slate[3],
    },
    transitionDuration: "100ms",
    transitionProperty: "background-color, border-color",
    transitionTimingFunction: "ease-in-out",
  },
  bgUi: {
    backgroundColor: {
      default: slate[3],
      ":hover:not(:has(* button:hover)):not(:disabled)": slate[4],
      ":active:not(:disabled)": slate[5],
      ":disabled": slate[3],
    },
    transitionDuration: "100ms",
    transitionProperty: "background-color, border-color",
    transitionTimingFunction: "ease-in-out",
  },
  bgAction: {
    backgroundColor: {
      default: slate[4],
      ":hover:not(:has(* button:hover)):not(:disabled)": slate[5],
      ":active:not(:disabled)": slate[6],
      ":disabled": slate[3],
    },
    transitionDuration: "100ms",
    transitionProperty: "background-color, border-color",
    transitionTimingFunction: "ease-in-out",
  },
});

// eslint-disable-next-line @stylexjs/enforce-extension
export const primary = stylex.create({
  bg: { backgroundColor: plum[1] },
  bgSubtle: { backgroundColor: plum[2] },
  bgDim: { backgroundColor: plum[3] },
  bgSecondary: { backgroundColor: plum[4] },
  bgActive: { backgroundColor: plum[5] },
  borderDim: {
    borderColor: plum[6],
    borderStyle: "solid",
    borderWidth: 1,
  },
  border: {
    borderColor: plum[7],
    borderStyle: "solid",
    borderWidth: 1,
  },
  borderInteractive: {
    borderColor: {
      default: plum[7],
      ":hover": plum[8],
    },
    borderStyle: "solid",
    borderWidth: 1,

    transitionDuration: "100ms",
    transitionProperty: "background-color, border-color",
    transitionTimingFunction: "ease-in-out",
  },
  bgSolid: { backgroundColor: plum[9] },
  bgSolidDark: { backgroundColor: plum[10] },
  textDim: { color: plum[11] },
  text: { color: plum[12] },
  textContrast: { color: "white" },

  bgGhost: {
    backgroundColor: {
      default: "transparent",
      ":hover:not(:has(* button:hover)):not(:disabled)": plum[4],
      ":active:not(:disabled)": plum[5],
      ":disabled": plum[3],
    },
    transitionDuration: "100ms",
    transitionProperty: "background-color, border-color",
    transitionTimingFunction: "ease-in-out",
  },
  bgUi: {
    backgroundColor: {
      default: plum[3],
      ":hover:not(:has(* button:hover)):not(:disabled)": plum[4],
      ":active": plum[5],
      ":disabled": plum[3],
    },
    transitionDuration: "100ms",
    transitionProperty: "background-color, border-color",
    transitionTimingFunction: "ease-in-out",
  },
  bgAction: {
    backgroundColor: {
      default: plum[4],
      ":hover:not(:has(* button:hover)):not(:disabled)": plum[5],
      ":active:not(:disabled)": plum[6],
      ":disabled": plum[3],
    },
    transitionDuration: "100ms",
    transitionProperty: "background-color, border-color",
    transitionTimingFunction: "ease-in-out",
  },
});

// eslint-disable-next-line @stylexjs/enforce-extension
export const critical = stylex.create({
  bg: { backgroundColor: red[1] },
  bgSubtle: { backgroundColor: red[2] },
  bgDim: { backgroundColor: red[3] },
  bgSecondary: { backgroundColor: red[4] },
  bgActive: { backgroundColor: red[5] },
  borderDim: {
    borderColor: red[6],
    borderStyle: "solid",
    borderWidth: 1,
  },
  border: {
    borderColor: red[7],
    borderStyle: "solid",
    borderWidth: 1,
  },
  borderInteractive: {
    borderColor: {
      default: red[7],
      ":hover": red[8],
    },
    borderStyle: "solid",
    borderWidth: 1,
    transitionDuration: "100ms",
    transitionProperty: "background-color, border-color",
    transitionTimingFunction: "ease-in-out",
  },
  bgSolid: { backgroundColor: red[9] },
  bgSolidDark: { backgroundColor: red[10] },
  textDim: { color: red[11] },
  text: { color: red[12] },
  textContrast: { color: "white" },

  bgGhost: {
    backgroundColor: {
      default: "transparent",
      ":hover:not(:has(* button:hover)):not(:disabled)": red[4],
      ":active:not(:disabled)": red[5],
      ":disabled": red[3],
    },
    transitionDuration: "100ms",
    transitionProperty: "background-color, border-color",
    transitionTimingFunction: "ease-in-out",
  },
  bgUi: {
    backgroundColor: {
      default: red[3],
      ":hover:not(:has(* button:hover)):not(:disabled)": red[4],
      ":active:not(:disabled)": red[5],
      ":disabled": red[3],
    },
    transitionDuration: "100ms",
    transitionProperty: "background-color, border-color",
    transitionTimingFunction: "ease-in-out",
  },
  bgAction: {
    backgroundColor: {
      default: red[4],
      ":hover:not(:has(* button:hover)):not(:disabled)": red[5],
      ":active:not(:disabled)": red[6],
      ":disabled": red[3],
    },
    transitionDuration: "100ms",
    transitionProperty: "background-color, border-color",
    transitionTimingFunction: "ease-in-out",
  },
  bgSolidAction: {
    backgroundColor: {
      default: red[9],
      ":hover:not(:has(* button:hover)):not(:disabled)": red[10],
      ":disabled": red[3],
    },
    transitionDuration: "100ms",
    transitionProperty: "background-color, border-color",
    transitionTimingFunction: "ease-in-out",
  },
});
