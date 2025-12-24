import { ComponentConfig } from "../../types";

export const footerConfig: ComponentConfig = {
  name: "footer",
  filepath: "./index.tsx",
  hipDependencies: [
    "../theme/spacing.stylex.tsx",
    "../theme/semantic-color.stylex.tsx",
    "../theme/typography.stylex.tsx",
    "../theme/media-queries.stylex.tsx",
    "../theme/types.ts",
    "../button/index.tsx",
    "../text-field/index.tsx",
  ],
  dependencies: {
    "react-aria-components": "^1.13.0",
  },
};
