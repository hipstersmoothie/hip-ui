import type { ComponentConfig } from "../../types";

export const autocompleteConfig: ComponentConfig = {
  name: "autocomplete",
  filepath: "./index.tsx",
  hipDependencies: [
    "../theme/spacing.stylex.tsx",
    "../theme/usePopoverStyles.ts",
  ],
  dependencies: {
    "react-aria-components": "^1.13.0",
  },
};
