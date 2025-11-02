import { ComponentConfig } from "../../types";

export const menubarConfig: ComponentConfig = {
  name: "menubar",
  filepath: "./index.tsx",
  hipDependencies: [
    "../theme/animations.stylex.tsx",
    "../theme/semantic-color.stylex.tsx",
    "../theme/spacing.stylex.tsx",
    "../theme/types.ts",
    "../theme/usePopoverStyles.ts",
    "../menu/index.tsx",
  ],
  dependencies: {
    "react-aria-components": "^1.13.0",
  },
};

