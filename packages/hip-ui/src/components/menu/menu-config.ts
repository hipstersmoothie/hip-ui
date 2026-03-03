import type { ComponentConfig } from "../../types";

export const menuConfig: ComponentConfig = {
  name: "menu",
  filepath: "./index.tsx",
  hipDependencies: [
    "../haptics/haptics.ts",
    "../haptics/context.tsx",
    "../haptics/useHaptics.ts",
    "../haptics/index.ts",
    "../context.ts",
    "../theme/usePopoverStyles.ts",
    "../theme/useListBoxItemStyles.ts",
  ],
  dependencies: {
    "web-haptics": "^0.0.6",
  },
};
