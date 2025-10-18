import * as stylex from "@stylexjs/stylex";

export const slateLight = stylex.defineVars({
  bg1: stylex.types.color("#fcfcfd"),
  bg2: stylex.types.color("#f9f9fb"),
  component1: stylex.types.color("#f0f0f3"),
  component2: stylex.types.color("#e8e8ec"),
  component3: stylex.types.color("#e0e1e6"),
  border1: stylex.types.color("#d9d9e0"),
  border2: stylex.types.color("#cdced6"),
  border3: stylex.types.color("#b9bbc6"),
  solid1: stylex.types.color("#8b8d98"),
  solid2: stylex.types.color("#80838d"),
  text1: stylex.types.color("#60646c"),
  text2: stylex.types.color("#1c2024"),
});

export const slateLightP3 = stylex.defineVars({
  bg1: stylex.types.color("color(display-p3 0.988 0.988 0.992)"),
  bg2: stylex.types.color("color(display-p3 0.976 0.976 0.984)"),
  component1: stylex.types.color("color(display-p3 0.94 0.941 0.953)"),
  component2: stylex.types.color("color(display-p3 0.908 0.909 0.925)"),
  component3: stylex.types.color("color(display-p3 0.88 0.881 0.901)"),
  border1: stylex.types.color("color(display-p3 0.85 0.852 0.876)"),
  border2: stylex.types.color("color(display-p3 0.805 0.808 0.838)"),
  border3: stylex.types.color("color(display-p3 0.727 0.733 0.773)"),
  solid1: stylex.types.color("color(display-p3 0.547 0.553 0.592)"),
  solid2: stylex.types.color("color(display-p3 0.503 0.512 0.549)"),
  text1: stylex.types.color("color(display-p3 0.379 0.392 0.421)"),
  text2: stylex.types.color("color(display-p3 0.113 0.125 0.14)"),
});

export const slateDark = stylex.defineVars({
  bg1: stylex.types.color("#111113"),
  bg2: stylex.types.color("#18191b"),
  component1: stylex.types.color("#212225"),
  component2: stylex.types.color("#272a2d"),
  component3: stylex.types.color("#2e3135"),
  border1: stylex.types.color("#363a3f"),
  border2: stylex.types.color("#43484e"),
  border3: stylex.types.color("#5a6169"),
  solid1: stylex.types.color("#696e77"),
  solid2: stylex.types.color("#777b84"),
  text1: stylex.types.color("#b0b4ba"),
  text2: stylex.types.color("#edeef0"),
});

export const slateDarkP3 = stylex.defineVars({
  bg1: stylex.types.color("color(display-p3 0.067 0.067 0.074)"),
  bg2: stylex.types.color("color(display-p3 0.095 0.098 0.105)"),
  component1: stylex.types.color("color(display-p3 0.13 0.135 0.145)"),
  component2: stylex.types.color("color(display-p3 0.156 0.163 0.176)"),
  component3: stylex.types.color("color(display-p3 0.183 0.191 0.206)"),
  border1: stylex.types.color("color(display-p3 0.215 0.226 0.244)"),
  border2: stylex.types.color("color(display-p3 0.265 0.28 0.302)"),
  border3: stylex.types.color("color(display-p3 0.357 0.381 0.409)"),
  solid1: stylex.types.color("color(display-p3 0.415 0.431 0.463)"),
  solid2: stylex.types.color("color(display-p3 0.469 0.483 0.514)"),
  text1: stylex.types.color("color(display-p3 0.692 0.704 0.728)"),
  text2: stylex.types.color("color(display-p3 0.93 0.933 0.94)"),
});

export const slate = stylex.defineVars({
  bg1: {
    default: `light-dark(${slateLight.bg1}, ${slateDark.bg1})`,
    "@media (color-gamut: p3)": `light-dark(${slateLightP3.bg1}, ${slateDarkP3.bg1})`,
  },
  bg2: {
    default: `light-dark(${slateLight.bg2}, ${slateDark.bg2})`,
    "@media (color-gamut: p3)": `light-dark(${slateLightP3.bg2}, ${slateDarkP3.bg2})`,
  },
  component1: {
    default: `light-dark(${slateLight.component1}, ${slateDark.component1})`,
    "@media (color-gamut: p3)": `light-dark(${slateLightP3.component1}, ${slateDarkP3.component1})`,
  },
  component2: {
    default: `light-dark(${slateLight.component2}, ${slateDark.component2})`,
    "@media (color-gamut: p3)": `light-dark(${slateLightP3.component2}, ${slateDarkP3.component2})`,
  },
  component3: {
    default: `light-dark(${slateLight.component3}, ${slateDark.component3})`,
    "@media (color-gamut: p3)": `light-dark(${slateLightP3.component3}, ${slateDarkP3.component3})`,
  },
  border1: {
    default: `light-dark(${slateLight.border1}, ${slateDark.border1})`,
    "@media (color-gamut: p3)": `light-dark(${slateLightP3.border1}, ${slateDarkP3.border1})`,
  },
  border2: {
    default: `light-dark(${slateLight.border2}, ${slateDark.border2})`,
    "@media (color-gamut: p3)": `light-dark(${slateLightP3.border2}, ${slateDarkP3.border2})`,
  },
  border3: {
    default: `light-dark(${slateLight.border3}, ${slateDark.border3})`,
    "@media (color-gamut: p3)": `light-dark(${slateLightP3.border3}, ${slateDarkP3.border3})`,
  },
  solid1: {
    default: `light-dark(${slateLight.solid1}, ${slateDark.solid1})`,
    "@media (color-gamut: p3)": `light-dark(${slateLightP3.solid1}, ${slateDarkP3.solid1})`,
  },
  solid2: {
    default: `light-dark(${slateLight.solid2}, ${slateDark.solid2})`,
    "@media (color-gamut: p3)": `light-dark(${slateLightP3.solid2}, ${slateDarkP3.solid2})`,
  },
  text1: {
    default: `light-dark(${slateLight.text1}, ${slateDark.text1})`,
    "@media (color-gamut: p3)": `light-dark(${slateLightP3.text1}, ${slateDarkP3.text1})`,
  },
  text2: {
    default: `light-dark(${slateLight.text2}, ${slateDark.text2})`,
    "@media (color-gamut: p3)": `light-dark(${slateLightP3.text2}, ${slateDarkP3.text2})`,
  },
});

export const slateInverted = stylex.defineVars({
  bg1: {
    default: `light-dark(${slateDark.bg1}, ${slateLight.bg1})`,
    "@media (color-gamut: p3)": `light-dark(${slateDarkP3.bg1}, ${slateLightP3.bg1})`,
  },
  bg2: {
    default: `light-dark(${slateDark.bg2}, ${slateLight.bg2})`,
    "@media (color-gamut: p3)": `light-dark(${slateDarkP3.bg2}, ${slateLightP3.bg2})`,
  },
  component1: {
    default: `light-dark(${slateDark.component1}, ${slateLight["component1"]})`,
    "@media (color-gamut: p3)": `light-dark(${slateDarkP3.component1}, ${slateLightP3.component1})`,
  },
  component2: {
    default: `light-dark(${slateDark.component2}, ${slateLight["component2"]})`,
    "@media (color-gamut: p3)": `light-dark(${slateDarkP3.component2}, ${slateLightP3.component2})`,
  },
  component3: {
    default: `light-dark(${slateDark.component3}, ${slateLight["component3"]})`,
    "@media (color-gamut: p3)": `light-dark(${slateDarkP3.component3}, ${slateLightP3.component3})`,
  },
  border1: {
    default: `light-dark(${slateDark.border1}, ${slateLight.border1})`,
    "@media (color-gamut: p3)": `light-dark(${slateDarkP3.border1}, ${slateLightP3.border1})`,
  },
  border2: {
    default: `light-dark(${slateDark.border2}, ${slateLight.border2})`,
    "@media (color-gamut: p3)": `light-dark(${slateDarkP3.border2}, ${slateLightP3.border2})`,
  },
  border3: {
    default: `light-dark(${slateDark.border3}, ${slateLight.border3})`,
    "@media (color-gamut: p3)": `light-dark(${slateDarkP3.border3}, ${slateLightP3.border3})`,
  },
  solid1: {
    default: `light-dark(${slateDark.solid1}, ${slateLight.solid1})`,
    "@media (color-gamut: p3)": `light-dark(${slateDarkP3.solid1}, ${slateLightP3.solid1})`,
  },
  solid2: {
    default: `light-dark(${slateDark.solid2}, ${slateLight.solid2})`,
    "@media (color-gamut: p3)": `light-dark(${slateDarkP3.solid2}, ${slateLightP3.solid2})`,
  },
  text1: {
    default: `light-dark(${slateDark.text1}, ${slateLight.text1})`,
    "@media (color-gamut: p3)": `light-dark(${slateDarkP3.text1}, ${slateLightP3.text1})`,
  },
  text2: {
    default: `light-dark(${slateDark.text2}, ${slateLight.text2})`,
    "@media (color-gamut: p3)": `light-dark(${slateDarkP3.text2}, ${slateLightP3.text2})`,
  },
});

export const plum = stylex.defineVars({
  bg1: {
    default: "light-dark(#fefcff, #181118)",
    "@media (color-gamut: p3)":
      "light-dark(color(display-p3 0.995 0.988 0.999), color(display-p3 0.09 0.068 0.092))",
  },
  bg2: {
    default: "light-dark(#fdf7fd, #201320)",
    "@media (color-gamut: p3)":
      "light-dark(color(display-p3 0.988 0.971 0.99), color(display-p3 0.118 0.077 0.121))",
  },
  component1: {
    default: "light-dark(#fbebfb, #351a35)",
    "@media (color-gamut: p3)":
      "light-dark(color(display-p3 0.973 0.923 0.98), color(display-p3 0.192 0.105 0.202))",
  },
  component2: {
    default: "light-dark(#f7def8, #451d47)",
    "@media (color-gamut: p3)":
      "light-dark(color(display-p3 0.953 0.875 0.966), color(display-p3 0.25 0.121 0.271))",
  },
  component3: {
    default: "light-dark(#f2d1f3, #512454)",
    "@media (color-gamut: p3)":
      "light-dark(color(display-p3 0.926 0.825 0.945), color(display-p3 0.293 0.152 0.319))",
  },
  border1: {
    default: "light-dark(#e9c2ec, #5e3061)",
    "@media (color-gamut: p3)":
      "light-dark(color(display-p3 0.89 0.765 0.916), color(display-p3 0.343 0.198 0.372))",
  },
  border2: {
    default: "light-dark(#deade3, #734079)",
    "@media (color-gamut: p3)":
      "light-dark(color(display-p3 0.84 0.686 0.877), color(display-p3 0.424 0.262 0.461))",
  },
  border3: {
    default: "light-dark(#cf91d8, #92549c)",
    "@media (color-gamut: p3)":
      "light-dark(color(display-p3 0.775 0.58 0.832), color(display-p3 0.54 0.341 0.595))",
  },
  solid1: {
    default: "light-dark(#ab4aba, #ab4aba)",
    "@media (color-gamut: p3)":
      "light-dark(color(display-p3 0.624 0.313 0.708), color(display-p3 0.624 0.313 0.708))",
  },
  solid2: {
    default: "light-dark(#a144af, #b658c4)",
    "@media (color-gamut: p3)":
      "light-dark(color(display-p3 0.587 0.29 0.667), color(display-p3 0.666 0.365 0.748))",
  },
  text1: {
    default: "light-dark(#953ea3, #e796f3)",
    "@media (color-gamut: p3)":
      "light-dark(color(display-p3 0.543 0.263 0.619), color(display-p3 0.86 0.602 0.933))",
  },
  text2: {
    default: "light-dark(#53195d, #f4d4f4)",
    "@media (color-gamut: p3)":
      "light-dark(color(display-p3 0.299 0.114 0.352), color(display-p3 0.936 0.836 0.949))",
  },
});

export const blue = stylex.defineVars({
  bg1: {
    default: "light-dark(#fbfdff, #0d1520)",
    "@media (color-gamut: p3)":
      "light-dark(color(display-p3 0.986 0.992 0.999), color(display-p3 0.057 0.081 0.122))",
  },
  bg2: {
    default: "light-dark(#f4faff, #111927)",
    "@media (color-gamut: p3)":
      "light-dark(color(display-p3 0.96 0.979 0.998), color(display-p3 0.072 0.098 0.147))",
  },
  component1: {
    default: "light-dark(#e6f4fe, #0d2847)",
    "@media (color-gamut: p3)":
      "light-dark(color(display-p3 0.912 0.956 0.991), color(display-p3 0.078 0.154 0.27))",
  },
  component2: {
    default: "light-dark(#d5efff, #003362)",
    "@media (color-gamut: p3)":
      "light-dark(color(display-p3 0.853 0.932 1), color(display-p3 0.033 0.197 0.37))",
  },
  component3: {
    default: "light-dark(#c2e5ff, #004074)",
    "@media (color-gamut: p3)":
      "light-dark(color(display-p3 0.788 0.894 0.998), color(display-p3 0.08 0.245 0.441))",
  },
  border1: {
    default: "light-dark(#acd8fc, #104d87)",
    "@media (color-gamut: p3)":
      "light-dark(color(display-p3 0.709 0.843 0.976), color(display-p3 0.14 0.298 0.511))",
  },
  border2: {
    default: "light-dark(#8ec8f6, #205d9e)",
    "@media (color-gamut: p3)":
      "light-dark(color(display-p3 0.606 0.777 0.947), color(display-p3 0.195 0.361 0.6))",
  },
  border3: {
    default: "light-dark(#5eb1ef, #2870bd)",
    "@media (color-gamut: p3)":
      "light-dark(color(display-p3 0.451 0.688 0.917), color(display-p3 0.239 0.434 0.72))",
  },
  solid1: {
    default: "light-dark(#0090ff, #0090ff)",
    "@media (color-gamut: p3)":
      "light-dark(color(display-p3 0.247 0.556 0.969), color(display-p3 0.247 0.556 0.969))",
  },
  solid2: {
    default: "light-dark(#0588f0, #3b9eff)",
    "@media (color-gamut: p3)":
      "light-dark(color(display-p3 0.234 0.523 0.912), color(display-p3 0.344 0.612 0.973))",
  },
  text1: {
    default: "light-dark(#0d74ce, #70b8ff)",
    "@media (color-gamut: p3)":
      "light-dark(color(display-p3 0.15 0.44 0.84), color(display-p3 0.49 0.72 1))",
  },
  text2: {
    default: "light-dark(#113264, #c2e6ff)",
    "@media (color-gamut: p3)":
      "light-dark(color(display-p3 0.102 0.193 0.379), color(display-p3 0.788 0.898 0.99))",
  },
});

export const red = stylex.defineVars({
  bg1: {
    default: "light-dark(#fffcfc, #191111)",
    "@media (color-gamut: p3)":
      "light-dark(color(display-p3 0.998 0.989 0.988), color(display-p3 0.093 0.068 0.067))",
  },
  bg2: {
    default: "light-dark(#fff7f7, #201314)",
    "@media (color-gamut: p3)":
      "light-dark(color(display-p3 0.995 0.971 0.971), color(display-p3 0.118 0.077 0.079))",
  },
  component1: {
    default: "light-dark(#feebec, #3b1219)",
    "@media (color-gamut: p3)":
      "light-dark(color(display-p3 0.985 0.925 0.925), color(display-p3 0.211 0.081 0.099))",
  },
  component2: {
    default: "light-dark(#ffdbdc, #500f1c)",
    "@media (color-gamut: p3)":
      "light-dark(color(display-p3 0.999 0.866 0.866), color(display-p3 0.287 0.079 0.113))",
  },
  component3: {
    default: "light-dark(#ffcdce, #611623)",
    "@media (color-gamut: p3)":
      "light-dark(color(display-p3 0.984 0.812 0.811), color(display-p3 0.348 0.11 0.142))",
  },
  border1: {
    default: "light-dark(#fdbdbe, #72232d)",
    "@media (color-gamut: p3)":
      "light-dark(color(display-p3 0.955 0.751 0.749), color(display-p3 0.414 0.16 0.183))",
  },
  border2: {
    default: "light-dark(#f4a9aa, #8c333a)",
    "@media (color-gamut: p3)":
      "light-dark(color(display-p3 0.915 0.675 0.672), color(display-p3 0.508 0.224 0.236))",
  },
  border3: {
    default: "light-dark(#eb8e90, #b54548)",
    "@media (color-gamut: p3)":
      "light-dark(color(display-p3 0.872 0.575 0.572), color(display-p3 0.659 0.298 0.297))",
  },
  solid1: {
    default: "light-dark(#e5484d, #e5484d)",
    "@media (color-gamut: p3)":
      "light-dark(color(display-p3 0.83 0.329 0.324), color(display-p3 0.83 0.329 0.324))",
  },
  solid2: {
    default: "light-dark(#dc3e42, #ec5d5e)",
    "@media (color-gamut: p3)":
      "light-dark(color(display-p3 0.798 0.294 0.285), color(display-p3 0.861 0.403 0.387))",
  },
  text1: {
    default: "light-dark(#ce2c31, #ff9592)",
    "@media (color-gamut: p3)":
      "light-dark(color(display-p3 0.744 0.234 0.222), color(display-p3 1 0.57 0.55))",
  },
  text2: {
    default: "light-dark(#641723, #ffd1d9)",
    "@media (color-gamut: p3)":
      "light-dark(color(display-p3 0.36 0.115 0.143), color(display-p3 0.971 0.826 0.852))",
  },
});

export const yellow = stylex.defineVars({
  bg1: {
    default: "light-dark(#fdfdf9, #14120b)",
    "@media (color-gamut: p3)":
      "light-dark(color(display-p3 0.992 0.992 0.978), color(display-p3 0.078 0.069 0.047))",
  },
  bg2: {
    default: "light-dark(#fefce9, #1b180f)",
    "@media (color-gamut: p3)":
      "light-dark(color(display-p3 0.995 0.99 0.922), color(display-p3 0.103 0.094 0.063))",
  },
  component1: {
    default: "light-dark(#fffab8, #2d2305)",
    "@media (color-gamut: p3)":
      "light-dark(color(display-p3 0.997 0.982 0.749), color(display-p3 0.168 0.137 0.039))",
  },
  component2: {
    default: "light-dark(#fff394, #362b00)",
    "@media (color-gamut: p3)":
      "light-dark(color(display-p3 0.992 0.953 0.627), color(display-p3 0.209 0.169 0))",
  },
  component3: {
    default: "light-dark(#ffe770, #433500)",
    "@media (color-gamut: p3)":
      "light-dark(color(display-p3 0.984 0.91 0.51), color(display-p3 0.255 0.209 0))",
  },
  border1: {
    default: "light-dark(#f3d768, #524202)",
    "@media (color-gamut: p3)":
      "light-dark(color(display-p3 0.934 0.847 0.474), color(display-p3 0.31 0.261 0.07))",
  },
  border2: {
    default: "light-dark(#e4c767, #665417)",
    "@media (color-gamut: p3)":
      "light-dark(color(display-p3 0.876 0.785 0.46), color(display-p3 0.389 0.331 0.135))",
  },
  border3: {
    default: "light-dark(#d5ae39, #836a21)",
    "@media (color-gamut: p3)":
      "light-dark(color(display-p3 0.811 0.689 0.313), color(display-p3 0.497 0.42 0.182))",
  },
  solid1: {
    default: "light-dark(#ffe629, #ffe629)",
    "@media (color-gamut: p3)":
      "light-dark(color(display-p3 1 0.92 0.22), color(display-p3 1 0.92 0.22))",
  },
  solid2: {
    default: "light-dark(#ffdc00, #ffff57)",
    "@media (color-gamut: p3)":
      "light-dark(color(display-p3 0.977 0.868 0.291), color(display-p3 1 1 0.456))",
  },
  text1: {
    default: "light-dark(#9e6c00, #f5e147)",
    "@media (color-gamut: p3)":
      "light-dark(color(display-p3 0.6 0.44 0), color(display-p3 0.948 0.885 0.392))",
  },
  text2: {
    default: "light-dark(#473b1f, #f6eeb4)",
    "@media (color-gamut: p3)":
      "light-dark(color(display-p3 0.271 0.233 0.137), color(display-p3 0.959 0.934 0.731))",
  },
});

export const green = stylex.defineVars({
  bg1: {
    default: "light-dark(#fbfefc, #0e1512)",
    "@media (color-gamut: p3)":
      "light-dark(color(display-p3 0.986 0.996 0.989), color(display-p3 0.062 0.083 0.071))",
  },
  bg2: {
    default: "light-dark(#f4fbf6, #121b17)",
    "@media (color-gamut: p3)":
      "light-dark(color(display-p3 0.963 0.983 0.967), color(display-p3 0.079 0.106 0.09))",
  },
  component1: {
    default: "light-dark(#e6f6eb, #132d21)",
    "@media (color-gamut: p3)":
      "light-dark(color(display-p3 0.913 0.964 0.925), color(display-p3 0.1 0.173 0.133))",
  },
  component2: {
    default: "light-dark(#d6f1df, #113b29)",
    "@media (color-gamut: p3)":
      "light-dark(color(display-p3 0.859 0.94 0.879), color(display-p3 0.115 0.229 0.166))",
  },
  component3: {
    default: "light-dark(#c4e8d1, #174933)",
    "@media (color-gamut: p3)":
      "light-dark(color(display-p3 0.796 0.907 0.826), color(display-p3 0.147 0.282 0.206))",
  },
  border1: {
    default: "light-dark(#adddc0, #19573a)",
    "@media (color-gamut: p3)":
      "light-dark(color(display-p3 0.718 0.863 0.761), color(display-p3 0.185 0.338 0.25))",
  },
  border2: {
    default: "light-dark(#8eceaa, #28684a)",
    "@media (color-gamut: p3)":
      "light-dark(color(display-p3 0.61 0.801 0.675), color(display-p3 0.227 0.403 0.298))",
  },
  border3: {
    default: "light-dark(#5bb98b, #2f7c57)",
    "@media (color-gamut: p3)":
      "light-dark(color(display-p3 0.451 0.715 0.559), color(display-p3 0.27 0.479 0.351))",
  },
  solid1: {
    default: "light-dark(#30a46c, #30a46c)",
    "@media (color-gamut: p3)":
      "light-dark(color(display-p3 0.332 0.634 0.442), color(display-p3 0.332 0.634 0.442))",
  },
  solid2: {
    default: "light-dark(#2b9a66, #33b074)",
    "@media (color-gamut: p3)":
      "light-dark(color(display-p3 0.308 0.595 0.417), color(display-p3 0.357 0.682 0.474))",
  },
  text1: {
    default: "light-dark(#218358, #3dd68c)",
    "@media (color-gamut: p3)":
      "light-dark(color(display-p3 0.19 0.5 0.32), color(display-p3 0.434 0.828 0.573))",
  },
  text2: {
    default: "light-dark(#193b2d, #b1f1cb)",
    "@media (color-gamut: p3)":
      "light-dark(color(display-p3 0.132 0.228 0.18), color(display-p3 0.747 0.938 0.807))",
  },
});
