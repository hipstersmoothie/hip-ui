import type { ComponentConfig } from "../../types";

export const popoverConfig: ComponentConfig = {
  name: "popover",
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
    "react-aria-components": "^1.13.0",
    "web-haptics": "^0.0.6",
  },
};
