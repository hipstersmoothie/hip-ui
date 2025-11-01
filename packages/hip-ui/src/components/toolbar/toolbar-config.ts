import { ComponentConfig } from "../../types";

export const toolbarConfig: ComponentConfig = {
  name: "toolbar",
  filepath: "./index.tsx",
  hipDependencies: [
    "../theme/spacing.stylex.tsx",
    "../theme/semantic-color.stylex.tsx",
    "../theme/types.ts",
  ],
  dependencies: {
    "react-aria-components": "^1.13.0",
  },
};
