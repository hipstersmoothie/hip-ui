import { ComponentConfig } from "../../types";

export const popoverConfig: ComponentConfig = {
  name: "popover",
  filepath: "./index.tsx",
  hipDependencies: [
    "../theme/spacing.stylex.tsx",
    "../theme/radius.stylex.tsx",
    "../theme/semantic-color.stylex.tsx",
    "../theme/typography.stylex.tsx",
    "../theme/shadow.stylex.tsx",
  ],
  dependencies: {
    "react-aria-components": "^1.13.0",
  },
};
