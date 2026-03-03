import type { ComponentConfig } from "../../types";

export const dialogConfig: ComponentConfig = {
  name: "dialog",
  filepath: "./index.tsx",
  hipDependencies: [
    "../haptics/haptics.ts",
    "../haptics/context.tsx",
    "../haptics/useHaptics.ts",
    "../haptics/index.ts",
    "../context.ts",
    "../theme/useDialogStyles.ts",
  ],
  dependencies: {
    "lucide-react": "^0.545.0",
    "web-haptics": "^0.0.6",
    "@react-stately/utils": "^3.10.8",
    "react-stately": "^3.42.0",
  },
};
