import { ComponentConfig } from "../../types";

export const tableOfContentsConfig: ComponentConfig = {
  name: "table-of-contents",
  filepath: "./index.tsx",
  hipDependencies: [
    "../theme/animations.stylex.tsx",
    "../theme/color.stylex.tsx",
    "../theme/spacing.stylex.tsx",
    "../theme/typography.stylex.tsx",
    "../theme/types.ts",
  ],
  dependencies: {
    "@stefanprobst/rehype-extract-toc": "^3.0.0",
  },
};

