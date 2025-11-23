import { blue } from "../components/theme/colors/blue.stylex";
import { purple } from "../components/theme/colors/purple.stylex";
import { green } from "../components/theme/colors/green.stylex";
import { red } from "../components/theme/colors/red.stylex";
import { orange } from "../components/theme/colors/orange.stylex";
import { yellow } from "../components/theme/colors/yellow.stylex";
import { pink } from "../components/theme/colors/pink.stylex";
import { brown } from "../components/theme/colors/brown.stylex";
import { gray, grayInverted } from "../components/theme/colors/gray.stylex";
import { mauve, mauveInverted } from "../components/theme/colors/mauve.stylex";
import { slate, slateInverted } from "../components/theme/colors/slate.stylex";
import { sage, sageInverted } from "../components/theme/colors/sage.stylex";
import { olive, oliveInverted } from "../components/theme/colors/olive.stylex";
import { sand, sandInverted } from "../components/theme/colors/sand.stylex";
import { tomato } from "../components/theme/colors/tomato.stylex";
import { ruby } from "../components/theme/colors/ruby.stylex";
import { crimson } from "../components/theme/colors/crimson.stylex";
import { plum } from "../components/theme/colors/plum.stylex";
import { violet } from "../components/theme/colors/violet.stylex";
import { iris } from "../components/theme/colors/iris.stylex";
import { indigo } from "../components/theme/colors/indigo.stylex";
import { cyan } from "../components/theme/colors/cyan.stylex";
import { teal } from "../components/theme/colors/teal.stylex";
import { jade } from "../components/theme/colors/jade.stylex";
import { grass } from "../components/theme/colors/grass.stylex";
import { bronze } from "../components/theme/colors/bronze.stylex";
import { gold } from "../components/theme/colors/gold.stylex";
import { amber } from "../components/theme/colors/amber.stylex";
import { lime } from "../components/theme/colors/lime.stylex";
import { mint } from "../components/theme/colors/mint.stylex";
import { sky } from "../components/theme/colors/sky.stylex";
import { createContext } from "react";

if (import.meta.env.DEV) {
  import("virtual:stylex:runtime");
}

export const uiNames = [
  "gray",
  "mauve",
  "slate",
  "sage",
  "olive",
  "sand",
] as const;
export type UiColor = (typeof uiNames)[number];
export const uiColorsInverted: Record<UiColor, typeof grayInverted> = {
  gray: grayInverted,
  mauve: mauveInverted,
  slate: slateInverted,
  sage: sageInverted,
  olive: oliveInverted,
  sand: sandInverted,
};

export const primaryColors = [
  "tomato",
  "red",
  "ruby",
  "crimson",
  "pink",
  "plum",
  "purple",
  "violet",
  "iris",
  "indigo",
  "blue",
  "cyan",
  "teal",
  "jade",
  "green",
  "grass",
  "bronze",
  "gold",
  "brown",
  "orange",
  "amber",
  "yellow",
  "lime",
  "mint",
  "sky",
] as const;
export type PrimaryColor = (typeof primaryColors)[number];

const names = [...uiNames, ...primaryColors];
export type Color = (typeof names)[number];

export const allColors: Record<Color, typeof blue> = {
  blue,
  purple,
  green,
  red,
  orange,
  yellow,
  pink,
  brown,
  gray,
  mauve,
  slate,
  sage,
  olive,
  sand,
  tomato,
  ruby,
  crimson,
  plum,
  violet,
  iris,
  indigo,
  cyan,
  teal,
  jade,
  grass,
  bronze,
  gold,
  amber,
  lime,
  mint,
  sky,
};

export interface Theme {
  primaryColor: PrimaryColor;
  uiColor: UiColor;
  successColor: PrimaryColor;
  warningColor: PrimaryColor;
  criticalColor: PrimaryColor;
}

export const defaultTheme: Theme = {
  primaryColor: "brown",
  uiColor: "slate",
  successColor: "green",
  warningColor: "yellow",
  criticalColor: "red",
};

export const ThemeContext = createContext({
  theme: defaultTheme,
  setTheme: (_theme: Theme) => {},
});
