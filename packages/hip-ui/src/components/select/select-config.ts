import { ComponentConfig } from "../../types";

export const selectConfig: ComponentConfig = {
  name: "select",
  filepath: "./index.tsx",
  hipDependencies: [
    "../theme/spacing.stylex.tsx",
    "../theme/radius.stylex.tsx",
    "../theme/semantic-color.stylex.tsx",
    "../theme/typography.stylex.tsx",
    "../theme/shadow.stylex.tsx",
    "../theme/useInputStyles.ts",
    "../theme/usePopoverStyles.ts",
  ],
};
