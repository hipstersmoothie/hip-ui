import { ComponentConfig } from "../../types";

export const contentConfig: ComponentConfig = {
  name: "content",
  filepath: "./index.tsx",
  hipDependencies: [
    "../theme/spacing.stylex.tsx",
    "../theme/typography.stylex.tsx",
    "../theme/types.ts",
  ],
};
