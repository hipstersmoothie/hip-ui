import { ComponentConfig } from "../../types";

export const windowSplitterConfig: ComponentConfig = {
  name: "window-splitter",
  filepath: "./index.tsx",
  hipDependencies: [
    "../theme/semantic-color.stylex.tsx",
    "../theme/spacing.stylex.tsx",
    "../theme/types.ts",
  ],
  dependencies: {
    "@window-splitter/react": "^1.0.0",
  },
};

