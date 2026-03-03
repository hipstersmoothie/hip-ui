import type { ComponentConfig } from "../../types";

export const drawerConfig: ComponentConfig = {
  name: "drawer",
  filepath: "./index.tsx",
  hipDependencies: [
    "../haptics/haptics.ts",
    "../haptics/context.tsx",
    "../haptics/useHaptics.ts",
    "../haptics/index.ts",
    "../context.ts",
    "../theme/useDialogStyles.ts",
    "../theme/spacing.stylex.tsx",
    "../theme/semantic-color.stylex.tsx",
    "../theme/typography.stylex.tsx",
    "../theme/types.ts",
    "./NonModalDrawer.tsx",
  ],
  dependencies: {
    "react-aria-components": "^1.13.0",
    "lucide-react": "^0.545.0",
    "web-haptics": "^0.0.6",
  },
};
