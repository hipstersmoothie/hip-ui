import { ComponentConfig } from "../../types";

export const numberFieldConfig: ComponentConfig = {
  name: "number-field",
  filepath: "./index.tsx",
  hipDependencies: [
    "../theme/spacing.stylex.tsx",
    "../theme/colors.stylex.tsx",
    "../theme/radius.stylex.tsx",
    "../theme/semantic-color.stylex.tsx",
    "../theme/typography.stylex.tsx",
    "../theme/breakpoints.stylex.tsx",
    "../theme/shadow.stylex.tsx",
    "../theme/useInputStyles.ts",
  ],
  dependencies: {
    "lucide-react": "^0.545.0",
  },
};
