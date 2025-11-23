import { ComponentConfig } from "../../types";

export const progressCircleConfig: ComponentConfig = {
  name: "progress-circle",
  filepath: "./index.tsx",
  hipDependencies: [
    "../context.ts",
    "../label/index.tsx",
    "../theme/radius.stylex.tsx",
    "../theme/spacing.stylex.tsx",
    "../theme/types.ts",
  ],
  dependencies: {
    "react-aria-components": "^1.13.0",
  },
};
