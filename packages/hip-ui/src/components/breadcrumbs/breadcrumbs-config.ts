import { ComponentConfig } from "../../types";

export const breadcrumbsConfig: ComponentConfig = {
  name: "breadcrumbs",
  filepath: "./index.tsx",
  hipDependencies: [
    "../theme/semantic-color.stylex.tsx",
    "../theme/spacing.stylex.tsx",
    "../theme/typography.stylex.tsx",
    "../link/index.tsx",
  ],
  dependencies: {
    "react-aria-components": "^1.13.0",
    "lucide-react": "^0.263.1",
  },
};

