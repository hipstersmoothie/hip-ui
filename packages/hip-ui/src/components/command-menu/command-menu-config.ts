import { ComponentConfig } from "../../types";

export const commandMenuConfig: ComponentConfig = {
  name: "command-menu",
  filepath: "./index.tsx",
  hipDependencies: [
    "../context.ts",
    "../theme/usePopoverStyles.ts",
    "../theme/useListBoxItemStyles.ts",
    "../theme/animations.stylex.tsx",
  ],
  dependencies: {
    "lucide-react": "^0.545.0",
    "@react-stately/utils": "^3.10.8",
    "react-stately": "^3.42.0",
  },
};
