import type { ComponentConfig } from "../../types";

export const pageConfig: ComponentConfig = {
  name: "page",
  filepath: "./index.ts",
  hipDependencies: [
    "context.ts",
    "../theme/color.stylex.tsx",
    "../theme/media-queries.stylex.tsx",
    "../theme/radius.stylex.tsx",
    "../theme/shadow.stylex.tsx",
    "../theme/spacing.stylex.tsx",
    "../theme/types.ts",
    "../flex/index.tsx",
    "../icon-button/index.tsx",
    "../link/index.tsx",
    "../typography/text.tsx",
    "./Page.tsx",
  ],
  dependencies: {
    "@tanstack/react-router": "^1.0.0",
    "react-aria-components": "^1.13.0",
  },
};
