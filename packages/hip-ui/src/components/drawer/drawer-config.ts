import { ComponentConfig } from "../../types";

export const drawerConfig: ComponentConfig = {
  name: "drawer",
  filepath: "./index.tsx",
  hipDependencies: [
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
    "@react-types/shared": "^3.32.1",
  },
};
