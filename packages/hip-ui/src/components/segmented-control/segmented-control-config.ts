import type { ComponentConfig } from "../../types";

export const segmentedControlConfig: ComponentConfig = {
  name: "segmented-control",
  filepath: "./index.tsx",
  hipDependencies: [
    "../haptics/haptics.ts",
    "../haptics/context.tsx",
    "../haptics/useHaptics.ts",
    "../haptics/index.ts",
    "../theme/animations.stylex.tsx",
  ],
  dependencies: {
    "react-aria-components": "^1.13.0",
    "web-haptics": "^0.0.6",
  },
};
