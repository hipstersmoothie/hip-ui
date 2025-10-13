import * as stylex from "@stylexjs/stylex";
import { slate, plum } from "./colors.stylex";

// eslint-disable-next-line @stylexjs/enforce-extension
export const gray = stylex.create({
  bg: {
    backgroundColor: slate[1],
  },
  bgSubtle: {
    backgroundColor: slate[2],
  },
  bgDim: {
    backgroundColor: slate[3],
  },
  bgSecondary: {
    backgroundColor: slate[4],
  },
  bgActive: {
    backgroundColor: slate[5],
  },
  bgUi: {
    backgroundColor: {
      default: slate[3],
      ":hover": slate[4],
      ":active": slate[5],
    },
  },
  bgGhost: {
    backgroundColor: {
      default: "transparent",
      ":hover": slate[4],
      ":active": slate[5],
    },
  },
  bgAction: {
    backgroundColor: {
      default: slate[4],
      ":hover": slate[5],
      ":active": slate[6],
    },
  },
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
  },
  bgSolid: {
    backgroundColor: slate[9],
  },
  bgSolidDark: {
    backgroundColor: slate[10],
  },
  textDim: {
    color: slate[11],
  },
  text: {
    color: slate[12],
  },
});

// eslint-disable-next-line @stylexjs/enforce-extension
export const primary = stylex.create({
  bg: {
    backgroundColor: plum[1],
  },
  bgSubtle: {
    backgroundColor: plum[2],
  },
  bgDim: {
    backgroundColor: plum[3],
  },
  bgSecondary: {
    backgroundColor: plum[4],
  },
  bgActive: {
    backgroundColor: plum[5],
  },
  bgUi: {
    backgroundColor: {
      default: plum[3],
      ":hover": plum[4],
      ":active": plum[5],
    },
  },
  bgGhost: {
    backgroundColor: {
      default: "transparent",
      ":hover": plum[4],
      ":active": plum[5],
    },
  },
  bgAction: {
    backgroundColor: {
      default: plum[4],
      ":hover": plum[5],
      ":active": plum[6],
    },
  },
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
  },
  bgSolid: {
    backgroundColor: plum[9],
  },
  bgSolidDark: {
    backgroundColor: plum[10],
  },
  textDim: {
    color: plum[11],
  },
  text: {
    color: plum[12],
  },
});
