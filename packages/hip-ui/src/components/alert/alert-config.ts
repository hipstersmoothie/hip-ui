import { ComponentConfig } from "../../types";

export const alertConfig: ComponentConfig = {
  name: "alert",
  filepath: "./index.tsx",
  hipDependencies: [
    "../theme/spacing.stylex.tsx",
    "../theme/radius.stylex.tsx",
    "../theme/semantic-color.stylex.tsx",
    "../theme/typography.stylex.tsx",
    "../theme/types.ts",
    "../context.ts",
    "../icon-button/index.tsx",
  ],
  dependencies: {
    "react-aria-components": "^1.13.0",
    "lucide-react": "^0.263.1",
  },
};

