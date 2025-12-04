import { ComponentConfig } from "../../types";

export const navbarConfig: ComponentConfig = {
  name: "navbar",
  filepath: "./index.tsx",
  hipDependencies: [
    "../theme/spacing.stylex.tsx",
    "../theme/semantic-color.stylex.tsx",
    "../theme/media-queries.stylex.tsx",
    "../theme/types.ts",
    "../context.ts",
    "../icon-button/index.tsx",
    "../flex/index.tsx",
    "../separator/index.tsx",
  ],
  dependencies: {
    "react-aria-components": "^1.13.0",
    "lucide-react": "^0.263.1",
  },
};

