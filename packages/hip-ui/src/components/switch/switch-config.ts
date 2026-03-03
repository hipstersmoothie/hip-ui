import type { ComponentConfig } from "../../types";

export const switchConfig: ComponentConfig = {
  name: "switch",
  filepath: "./index.tsx",
  hipDependencies: [
    "../haptics/haptics.ts",
    "../haptics/context.tsx",
    "../haptics/useHaptics.ts",
    "../haptics/index.ts",
    "../theme/spacing.stylex.tsx",
    "../theme/radius.stylex.tsx",
    "../theme/semantic-color.stylex.tsx",
    "../theme/typography.stylex.tsx",
    "../theme/shadow.stylex.tsx",
  ],
  dependencies: {
    "web-haptics": "^0.0.6",
  },
};
