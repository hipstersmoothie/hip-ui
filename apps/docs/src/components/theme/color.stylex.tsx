import * as stylex from "@stylexjs/stylex";

import { green } from "./colors/green.stylex";
import { orange } from "./colors/orange.stylex";
import { red } from "./colors/red.stylex";
import { slate, slateInverted } from "./colors/slate.stylex";
import { yellow } from "./colors/yellow.stylex";

export const uiColor = stylex.defineVars({
  bg: slate.bg,
  bgSubtle: slate.bgSubtle,
  component1: slate.component1,
  component2: slate.component2,
  component3: slate.component3,
  border1: slate.border1,
  border2: slate.border2,
  border3: slate.border3,
  solid1: slate.solid1,
  solid2: slate.solid2,
  text1: slate.text1,
  text2: slate.text2,
  textContrast: "white",
});

export const uiInverted = stylex.defineVars({
  bg: slateInverted.bg,
  bgSubtle: slateInverted.bgSubtle,
  component1: slateInverted.component1,
  component2: slateInverted.component2,
  component3: slateInverted.component3,
  border1: slateInverted.border1,
  border2: slateInverted.border2,
  border3: slateInverted.border3,
  solid1: slateInverted.solid1,
  solid2: slateInverted.solid2,
  text1: slateInverted.text1,
  text2: slateInverted.text2,
  textContrast: "white",
});

export const primaryColor = stylex.defineVars({
  bg: orange.bg,
  bgSubtle: orange.bgSubtle,
  component1: orange.component1,
  component2: orange.component2,
  component3: orange.component3,
  border1: orange.border1,
  border2: orange.border2,
  border3: orange.border3,
  solid1: orange.solid1,
  solid2: orange.solid2,
  text1: orange.text1,
  text2: orange.text2,
  textContrast: "white",
});

export const criticalColor = stylex.defineVars({
  bg: red.bg,
  bgSubtle: red.bgSubtle,
  component1: red.component1,
  component2: red.component2,
  component3: red.component3,
  border1: red.border1,
  border2: red.border2,
  border3: red.border3,
  solid1: red.solid1,
  solid2: red.solid2,
  text1: red.text1,
  text2: red.text2,
  textContrast: "white",
});

export const warningColor = stylex.defineVars({
  bg: yellow.bg,
  bgSubtle: yellow.bgSubtle,
  component1: yellow.component1,
  component2: yellow.component2,
  component3: yellow.component3,
  border1: yellow.border1,
  border2: yellow.border2,
  border3: yellow.border3,
  solid1: yellow.solid1,
  solid2: yellow.solid2,
  text1: yellow.text1,
  text2: yellow.text2,
  textContrast: "black",
});

export const successColor = stylex.defineVars({
  bg: green.bg,
  bgSubtle: green.bgSubtle,
  component1: green.component1,
  component2: green.component2,
  component3: green.component3,
  border1: green.border1,
  border2: green.border2,
  border3: green.border3,
  solid1: green.solid1,
  solid2: green.solid2,
  text1: green.text1,
  text2: green.text2,
  textContrast: "white",
});
