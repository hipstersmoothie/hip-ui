import type { ComponentConfig } from "../../types";

export const lightboxConfig: ComponentConfig = {
  name: "lightbox",
  filepath: "./index.tsx",
  hipDependencies: [
    "../icon-button/index.tsx",
    "../theme/animations.stylex.tsx",
    "../theme/color.stylex.tsx",
    "../theme/semantic-color.stylex.tsx",
    "../theme/spacing.stylex.tsx",
    "../theme/types.ts",
  ],
  dependencies: {
    "lucide-react": "^0.545.0",
    "react-aria-components": "^1.13.0",
  },
};
