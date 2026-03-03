import type { ComponentConfig } from "../../types";

export const tabsConfig: ComponentConfig = {
  name: "tabs",
  filepath: "./index.tsx",
  hipDependencies: [
    "../haptics/haptics.ts",
    "../haptics/context.tsx",
    "../haptics/useHaptics.ts",
    "../haptics/index.ts",
    "../theme/animations.stylex.tsx",
    "../theme/semantic-color.stylex.tsx",
    "../theme/spacing.stylex.tsx",
    "../theme/typography.stylex.tsx",
    "../theme/radius.stylex.tsx",
    "../theme/types.ts",
    "../context.ts",
  ],
  dependencies: {
    "react-aria-components": "^1.13.0",
    "web-haptics": "^0.0.6",
  },
};
