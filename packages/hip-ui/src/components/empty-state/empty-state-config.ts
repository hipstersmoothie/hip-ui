import { ComponentConfig } from "../../types";

export const emptyStateConfig: ComponentConfig = {
  name: "empty-state",
  filepath: "./index.tsx",
  hipDependencies: [
    "../theme/spacing.stylex.tsx",
    "../theme/semantic-color.stylex.tsx",
    "../theme/typography.stylex.tsx",
    "../theme/types.ts",
    "../context.ts",
  ],
};
