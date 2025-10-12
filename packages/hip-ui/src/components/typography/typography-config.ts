import { ComponentConfig } from "../../types";

export const typographyConfig: ComponentConfig = {
  name: "typography",
  filepath: "./index.tsx",
  hipDependencies: [
    "../theme/breakpoints.stylex.tsx",
    "../theme/colors.stylex.tsx",
    "../theme/semantic-color.stylex.tsx",
    "../theme/spacing.stylex.tsx",
    "../theme/typography.stylex.tsx",
  ],
};
