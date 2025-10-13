import { ComponentConfig } from "../../types";

export const buttonGroupConfig: ComponentConfig = {
  name: "button-group",
  filepath: "./index.tsx",
  hipDependencies: [
    "../theme/spacing.stylex.tsx",
    "../theme/colors.stylex.tsx",
    "../theme/radius.stylex.tsx",
    "../theme/semantic-color.stylex.tsx",
    "../theme/typography.stylex.tsx",
    "../theme/breakpoints.stylex.tsx",
    "../theme/shadow.stylex.tsx",
    // TODO:
    // "button"
  ],
  dependencies: {
    "react-aria-components": "^1.13.0",
  },
};
