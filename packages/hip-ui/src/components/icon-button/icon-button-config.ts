import { ComponentConfig } from "../../types";

export const iconButtonConfig: ComponentConfig = {
  name: "icon-button",
  filepath: "./index.tsx",
  hipDependencies: [
    "../theme/spacing.stylex.tsx",
    "../theme/colors.stylex.tsx",
    "../theme/radius.stylex.tsx",
    "../theme/semantic-color.stylex.tsx",
    "../theme/typography.stylex.tsx",
    "../theme/breakpoints.stylex.tsx",
    "../theme/shadow.stylex.tsx",
    // TODOD
    // "button"
    // "tooltip"
  ],
  dependencies: {
    "react-aria-components": "^1.13.0",
  },
};
