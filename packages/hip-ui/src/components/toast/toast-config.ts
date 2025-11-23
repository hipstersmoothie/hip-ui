import { ComponentConfig } from "../../types";

export const toastConfig: ComponentConfig = {
  name: "toast",
  filepath: "./index.ts",
  hipDependencies: [
    "../theme/spacing.stylex.tsx",
    "../theme/radius.stylex.tsx",
    "../theme/semantic-color.stylex.tsx",
    "../theme/typography.stylex.tsx",
    "../theme/shadow.stylex.tsx",
    "../theme/types.ts",
    "../icon-button/index.tsx",
    "./queue.ts",
    "./Toast.tsx",
  ],
  dependencies: {
    "react-aria-components": "^1.13.0",
    "lucide-react": "^0.545.0",
  },
};
