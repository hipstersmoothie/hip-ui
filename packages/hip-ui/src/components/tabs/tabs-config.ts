import { ComponentConfig } from "../../types";

export const tabsConfig: ComponentConfig = {
  name: "tabs",
  filepath: "./index.tsx",
  hipDependencies: [
    "../theme/animations.stylex.tsx",
    "../theme/semantic-color.stylex.tsx",
    "../theme/spacing.stylex.tsx",
    "../theme/typography.stylex.tsx",
    "../theme/radius.stylex.tsx",
    "../theme/media-queries.stylex.tsx",
    "../theme/types.ts",
    "../context.ts",
  ],
  dependencies: {
    "react-aria-components": "^1.13.0",
  },
};
