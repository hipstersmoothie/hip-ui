import { ComponentConfig } from "../../types";

export const disclosureConfig: ComponentConfig = {
  name: "disclosure",
  filepath: "./index.tsx",
  hipDependencies: [
    "../theme/semantic-color.stylex.tsx",
    "../theme/spacing.stylex.tsx",
    "../theme/typography.stylex.tsx",
    "../theme/radius.stylex.tsx",
    "../theme/animations.stylex.tsx",
    "../theme/media-queries.stylex.tsx",
    "../context.ts",
  ],
  dependencies: {
    "react-aria-components": "^1.13.0",
    "lucide-react": "^0.263.1",
  },
};

