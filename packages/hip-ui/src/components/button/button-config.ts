import { ComponentConfig } from "../../types";

export const buttonConfig: ComponentConfig = {
  name: "button",
  filepath: "./button.tsx",
  hipDependencies: [
    "../theme/spacing.stylex.ts",
    "../theme/colors.stylex.ts",
    "../theme/radius.stylex.ts",
    "../theme/semantic-color.stylex.ts",
    "../theme/typography.stylex.ts",
    "../theme/breakpoints.stylex.ts",
    "../theme/shadow.stylex.ts",
  ],
  dependencies: {
    "react-aria-components": "^1.13.0",
  },
};
