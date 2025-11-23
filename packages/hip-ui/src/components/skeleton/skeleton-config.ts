import { ComponentConfig } from "../../types";

export const skeletonConfig: ComponentConfig = {
  name: "skeleton",
  filepath: "./index.tsx",
  hipDependencies: [
    "../theme/spacing.stylex.tsx",
    "../theme/radius.stylex.tsx",
    "../theme/semantic-color.stylex.tsx",
    "../theme/types.ts",
  ],
};
