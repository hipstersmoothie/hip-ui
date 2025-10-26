import { ComponentConfig } from "../../types";

export const toggleButtonGroupConfig: ComponentConfig = {
  name: "toggle-button-group",
  filepath: "./index.tsx",
  hipDependencies: [
    "../theme/spacing.stylex.tsx",
    "../theme/radius.stylex.tsx",
    "../theme/semantic-color.stylex.tsx",
    "../theme/typography.stylex.tsx",
    "../theme/media-queries.stylex.tsx",
    "../theme/shadow.stylex.tsx",
    // TODO:
    // "button"
  ],
  dependencies: {
    "react-aria-components": "^1.13.0",
  },
};
