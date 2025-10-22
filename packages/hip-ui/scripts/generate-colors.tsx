import * as colors from "@radix-ui/colors";
import { camelCase } from "change-case";
import dedent from "dedent";
import fs from "node:fs/promises";
import path from "node:path";

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const uiNames = ["gray", "mauve", "slate", "sage", "olive", "sand"];
const names = [
  ...uiNames,
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
];

function generateDefineVars(
  name: string,
  color: string[],
  colorDark: string[],
  colorP3: string[],
  colorDarkP3: string[],
) {
  return dedent`
    export const ${name} = stylex.defineVars({
        bg: {
            default: "light-dark(${color[0]}, ${colorDark[0]})",
            "@media (color-gamut: p3)": "light-dark(${colorP3[0]}, ${colorDarkP3[0]})",
        },
        bgSubtle: {
            default: "light-dark(${color[1]}, ${colorDark[1]})",
            "@media (color-gamut: p3)": "light-dark(${colorP3[1]}, ${colorDarkP3[1]})",
        },
        component1: {
            default: "light-dark(${color[2]}, ${colorDark[2]})",
            "@media (color-gamut: p3)": "light-dark(${colorP3[2]}, ${colorDarkP3[2]})",
        },
        component2: {
            default: "light-dark(${color[3]}, ${colorDark[3]})",
            "@media (color-gamut: p3)": "light-dark(${colorP3[3]}, ${colorDarkP3[3]})",
        },
        component3: {
            default: "light-dark(${color[4]}, ${colorDark[4]})",
            "@media (color-gamut: p3)": "light-dark(${colorP3[4]}, ${colorDarkP3[4]})",
        },
        border1: {
            default: "light-dark(${color[5]}, ${colorDark[5]})",
            "@media (color-gamut: p3)": "light-dark(${colorP3[5]}, ${colorDarkP3[5]})",
        },
        border2: {
            default: "light-dark(${color[6]}, ${colorDark[6]})",
            "@media (color-gamut: p3)": "light-dark(${colorP3[6]}, ${colorDarkP3[6]})",
        },
        border3: {
            default: "light-dark(${color[7]}, ${colorDark[7]})",
            "@media (color-gamut: p3)": "light-dark(${colorP3[7]}, ${colorDarkP3[7]})",
        },
        solid1: {
            default: "light-dark(${color[8]}, ${colorDark[8]})",
            "@media (color-gamut: p3)": "light-dark(${colorP3[8]}, ${colorDarkP3[8]})",
        },
        solid2: {
            default: "light-dark(${color[9]}, ${colorDark[9]})",
            "@media (color-gamut: p3)": "light-dark(${colorP3[9]}, ${colorDarkP3[9]})",
        },
        text1: {
            default: "light-dark(${color[10]}, ${colorDark[10]})",
            "@media (color-gamut: p3)": "light-dark(${colorP3[10]}, ${colorDarkP3[10]})",
        },
        text2: {
            default: "light-dark(${color[11]}, ${colorDark[11]})",
            "@media (color-gamut: p3)": "light-dark(${colorP3[11]}, ${colorDarkP3[11]})",
        },
        });
  `;
}

async function generateColor(name: string) {
  const color = Object.values(colors[name as keyof typeof colors]);
  const colorDark = Object.values(
    colors[camelCase(name) as keyof typeof colors],
  );
  const colorP3 = Object.values(
    colors[camelCase(`${name}P3`) as keyof typeof colors],
  );
  const colorDarkP3 = Object.values(
    colors[camelCase(`${name}DarkP3`) as keyof typeof colors],
  );
  const colorA = Object.values(
    colors[camelCase(`${name}A`) as keyof typeof colors],
  );
  const colorDarkA = Object.values(
    colors[camelCase(`${name}DarkA`) as keyof typeof colors],
  );
  const colorP3A = Object.values(
    colors[camelCase(`${name}P3A`) as keyof typeof colors],
  );
  const colorDarkP3A = Object.values(
    colors[camelCase(`${name}DarkP3A`) as keyof typeof colors],
  );

  await fs.writeFile(
    path.join(__dirname, `../src/components/theme/colors/${name}.stylex.tsx`),
    dedent`
      import * as stylex from "@stylexjs/stylex";

      ${generateDefineVars(name, color, colorDark, colorP3, colorDarkP3)}
      ${generateDefineVars(camelCase(`${name}A`), colorA, colorDarkA, colorP3A, colorDarkP3A)}

      ${
        uiNames.includes(name)
          ? dedent`
            ${generateDefineVars(camelCase(`${name}Inverted`), colorDark, color, colorDarkP3, colorP3)}
            ${generateDefineVars(camelCase(`${name}InvertedA`), colorDarkA, colorA, colorDarkP3A, colorP3A)}
          `
          : ""
      }
    `,
  );
}

async function main() {
  for (const name of names) {
    await generateColor(name);
  }
}

await main();
