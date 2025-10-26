import { ComponentConfig } from "../../types";

export const typographyConfig: ComponentConfig = {
  name: "typography",
  filepath: "./index.tsx",
  hipDependencies: [
    "../theme/media-queries.stylex.tsx",
    "../theme/semantic-color.stylex.tsx",
    "../theme/spacing.stylex.tsx",
    "../theme/typography.stylex.tsx",
    "../link/link-context.ts",
    "../theme/types.ts",
    "./text.tsx",
  ],
};
