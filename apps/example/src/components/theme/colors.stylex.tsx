import * as stylex from "@stylexjs/stylex";

export const slateLight = stylex.defineVars({
  1: "#fcfcfd",
  2: "#f9f9fb",
  3: "#f0f0f3",
  4: "#e8e8ec",
  5: "#e0e1e6",
  6: "#d9d9e0",
  7: "#cdced6",
  8: "#b9bbc6",
  9: "#8b8d98",
  10: "#80838d",
  11: "#60646c",
  12: "#1c2024",
});

export const slateLightP3 = stylex.defineVars({
  1: "color(display-p3 0.988 0.988 0.992)",
  2: "color(display-p3 0.976 0.976 0.984)",
  3: "color(display-p3 0.94 0.941 0.953)",
  4: "color(display-p3 0.908 0.909 0.925)",
  5: "color(display-p3 0.88 0.881 0.901)",
  6: "color(display-p3 0.85 0.852 0.876)",
  7: "color(display-p3 0.805 0.808 0.838)",
  8: "color(display-p3 0.727 0.733 0.773)",
  9: "color(display-p3 0.547 0.553 0.592)",
  10: "color(display-p3 0.503 0.512 0.549)",
  11: "color(display-p3 0.379 0.392 0.421)",
  12: "color(display-p3 0.113 0.125 0.14)",
});

export const slateDark = stylex.defineVars({
  1: "#111113",
  2: "#18191b",
  3: "#212225",
  4: "#272a2d",
  5: "#2e3135",
  6: "#363a3f",
  7: "#43484e",
  8: "#5a6169",
  9: "#696e77",
  10: "#777b84",
  11: "#b0b4ba",
  12: "#edeef0",
});

export const slateDarkP3 = stylex.defineVars({
  1: "color(display-p3 0.067 0.067 0.074)",
  2: "color(display-p3 0.095 0.098 0.105)",
  3: "color(display-p3 0.13 0.135 0.145)",
  4: "color(display-p3 0.156 0.163 0.176)",
  5: "color(display-p3 0.183 0.191 0.206)",
  6: "color(display-p3 0.215 0.226 0.244)",
  7: "color(display-p3 0.265 0.28 0.302)",
  8: "color(display-p3 0.357 0.381 0.409)",
  9: "color(display-p3 0.415 0.431 0.463)",
  10: "color(display-p3 0.469 0.483 0.514)",
  11: "color(display-p3 0.692 0.704 0.728)",
  12: "color(display-p3 0.93 0.933 0.94)",
});

export const slate = stylex.defineVars({
  1: {
    default: `light-dark(${slateLight[1]}, ${slateDark[1]})`,
    "@media (color-gamut: p3)": `light-dark(${slateLightP3[1]}, ${slateDarkP3[1]})`,
  },
  2: {
    default: `light-dark(${slateLight[2]}, ${slateDark[2]})`,
    "@media (color-gamut: p3)": `light-dark(${slateLightP3[2]}, ${slateDarkP3[2]})`,
  },
  3: {
    default: `light-dark(${slateLight[3]}, ${slateDark[3]})`,
    "@media (color-gamut: p3)": `light-dark(${slateLightP3[3]}, ${slateDarkP3[3]})`,
  },
  4: {
    default: `light-dark(${slateLight[4]}, ${slateDark[4]})`,
    "@media (color-gamut: p3)": `light-dark(${slateLightP3[4]}, ${slateDarkP3[4]})`,
  },
  5: {
    default: `light-dark(${slateLight[5]}, ${slateDark[5]})`,
    "@media (color-gamut: p3)": `light-dark(${slateLightP3[5]}, ${slateDarkP3[5]})`,
  },
  6: {
    default: `light-dark(${slateLight[6]}, ${slateDark[6]})`,
    "@media (color-gamut: p3)": `light-dark(${slateLightP3[6]}, ${slateDarkP3[6]})`,
  },
  7: {
    default: `light-dark(${slateLight[7]}, ${slateDark[7]})`,
    "@media (color-gamut: p3)": `light-dark(${slateLightP3[7]}, ${slateDarkP3[7]})`,
  },
  8: {
    default: `light-dark(${slateLight[8]}, ${slateDark[8]})`,
    "@media (color-gamut: p3)": `light-dark(${slateLightP3[8]}, ${slateDarkP3[8]})`,
  },
  9: {
    default: `light-dark(${slateLight[9]}, ${slateDark[9]})`,
    "@media (color-gamut: p3)": `light-dark(${slateLightP3[9]}, ${slateDarkP3[9]})`,
  },
  10: {
    default: `light-dark(${slateLight[10]}, ${slateDark[10]})`,
    "@media (color-gamut: p3)": `light-dark(${slateLightP3[10]}, ${slateDarkP3[10]})`,
  },
  11: {
    default: `light-dark(${slateLight[11]}, ${slateDark[11]})`,
    "@media (color-gamut: p3)": `light-dark(${slateLightP3[11]}, ${slateDarkP3[11]})`,
  },
  12: {
    default: `light-dark(${slateLight[12]}, ${slateDark[12]})`,
    "@media (color-gamut: p3)": `light-dark(${slateLightP3[12]}, ${slateDarkP3[12]})`,
  },
});

export const slateInverted = stylex.defineVars({
  1: {
    default: `light-dark(${slateDark[1]}, ${slateLight[1]})`,
    "@media (color-gamut: p3)": `light-dark(${slateDarkP3[1]}, ${slateLightP3[1]})`,
  },
  2: {
    default: `light-dark(${slateDark[2]}, ${slateLight[2]})`,
    "@media (color-gamut: p3)": `light-dark(${slateDarkP3[2]}, ${slateLightP3[2]})`,
  },
  3: {
    default: `light-dark(${slateDark[3]}, ${slateLight[3]})`,
    "@media (color-gamut: p3)": `light-dark(${slateDarkP3[3]}, ${slateLightP3[3]})`,
  },
  4: {
    default: `light-dark(${slateDark[4]}, ${slateLight[4]})`,
    "@media (color-gamut: p3)": `light-dark(${slateDarkP3[4]}, ${slateLightP3[4]})`,
  },
  5: {
    default: `light-dark(${slateDark[5]}, ${slateLight[5]})`,
    "@media (color-gamut: p3)": `light-dark(${slateDarkP3[5]}, ${slateLightP3[5]})`,
  },
  6: {
    default: `light-dark(${slateDark[6]}, ${slateLight[6]})`,
    "@media (color-gamut: p3)": `light-dark(${slateDarkP3[6]}, ${slateLightP3[6]})`,
  },
  7: {
    default: `light-dark(${slateDark[7]}, ${slateLight[7]})`,
    "@media (color-gamut: p3)": `light-dark(${slateDarkP3[7]}, ${slateLightP3[7]})`,
  },
  8: {
    default: `light-dark(${slateDark[8]}, ${slateLight[8]})`,
    "@media (color-gamut: p3)": `light-dark(${slateDarkP3[8]}, ${slateLightP3[8]})`,
  },
  9: {
    default: `light-dark(${slateDark[9]}, ${slateLight[9]})`,
    "@media (color-gamut: p3)": `light-dark(${slateDarkP3[9]}, ${slateLightP3[9]})`,
  },
  10: {
    default: `light-dark(${slateDark[10]}, ${slateLight[10]})`,
    "@media (color-gamut: p3)": `light-dark(${slateDarkP3[10]}, ${slateLightP3[10]})`,
  },
  11: {
    default: `light-dark(${slateDark[11]}, ${slateLight[11]})`,
    "@media (color-gamut: p3)": `light-dark(${slateDarkP3[11]}, ${slateLightP3[11]})`,
  },
  12: {
    default: `light-dark(${slateDark[12]}, ${slateLight[12]})`,
    "@media (color-gamut: p3)": `light-dark(${slateDarkP3[12]}, ${slateLightP3[12]})`,
  },
});

export const plum = stylex.defineVars({
  1: {
    default: "light-dark(#fefcff, #181118)",
    "@media (color-gamut: p3)":
      "light-dark(color(display-p3 0.995 0.988 0.999), color(display-p3 0.09 0.068 0.092))",
  },
  2: {
    default: "light-dark(#fdf7fd, #201320)",
    "@media (color-gamut: p3)":
      "light-dark(color(display-p3 0.988 0.971 0.99), color(display-p3 0.118 0.077 0.121))",
  },
  3: {
    default: "light-dark(#fbebfb, #351a35)",
    "@media (color-gamut: p3)":
      "light-dark(color(display-p3 0.973 0.923 0.98), color(display-p3 0.192 0.105 0.202))",
  },
  4: {
    default: "light-dark(#f7def8, #451d47)",
    "@media (color-gamut: p3)":
      "light-dark(color(display-p3 0.953 0.875 0.966), color(display-p3 0.25 0.121 0.271))",
  },
  5: {
    default: "light-dark(#f2d1f3, #512454)",
    "@media (color-gamut: p3)":
      "light-dark(color(display-p3 0.926 0.825 0.945), color(display-p3 0.293 0.152 0.319))",
  },
  6: {
    default: "light-dark(#e9c2ec, #5e3061)",
    "@media (color-gamut: p3)":
      "light-dark(color(display-p3 0.89 0.765 0.916), color(display-p3 0.343 0.198 0.372))",
  },
  7: {
    default: "light-dark(#deade3, #734079)",
    "@media (color-gamut: p3)":
      "light-dark(color(display-p3 0.84 0.686 0.877), color(display-p3 0.424 0.262 0.461))",
  },
  8: {
    default: "light-dark(#cf91d8, #92549c)",
    "@media (color-gamut: p3)":
      "light-dark(color(display-p3 0.775 0.58 0.832), color(display-p3 0.54 0.341 0.595))",
  },
  9: {
    default: "light-dark(#ab4aba, #ab4aba)",
    "@media (color-gamut: p3)":
      "light-dark(color(display-p3 0.624 0.313 0.708), color(display-p3 0.624 0.313 0.708))",
  },
  10: {
    default: "light-dark(#a144af, #b658c4)",
    "@media (color-gamut: p3)":
      "light-dark(color(display-p3 0.587 0.29 0.667), color(display-p3 0.666 0.365 0.748))",
  },
  11: {
    default: "light-dark(#953ea3, #e796f3)",
    "@media (color-gamut: p3)":
      "light-dark(color(display-p3 0.543 0.263 0.619), color(display-p3 0.86 0.602 0.933))",
  },
  12: {
    default: "light-dark(#53195d, #f4d4f4)",
    "@media (color-gamut: p3)":
      "light-dark(color(display-p3 0.299 0.114 0.352), color(display-p3 0.936 0.836 0.949))",
  },
});
