import { ComponentConfig } from "../../types";

export const editableTextConfig: ComponentConfig = {
  name: "editable-text",
  filepath: "./index.tsx",
  hipDependencies: [
    "../theme/spacing.stylex.tsx",
    "../theme/radius.stylex.tsx",
    "../theme/semantic-color.stylex.tsx",
    "../theme/typography.stylex.tsx",
    "../theme/types.ts",
    "../theme/useInputStyles.ts",
    "../context.ts",
    "../typography/text.tsx",
  ],
  dependencies: {
    "react-aria-components": "^1.13.0",
  },
};

