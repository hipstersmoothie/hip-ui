import { ComponentConfig } from "../../types";

export const typographyConfig: ComponentConfig = {
  name: "typography",
  filepath: "./typography.tsx",
  hipDependencies: [
    "../theme/breakpoints.stylex.ts",
    "../theme/colors.stylex.ts",
    "../theme/semantic-color.stylex.ts",
    "../theme/spacing.stylex.ts",
    "../theme/typography.stylex.ts",
  ],
};
