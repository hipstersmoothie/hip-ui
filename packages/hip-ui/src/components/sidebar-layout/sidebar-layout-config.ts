import { ComponentConfig } from "../../types";

export const sidebarLayoutConfig: ComponentConfig = {
  name: "sidebar-layout",
  filepath: "./index.tsx",
  hipDependencies: [
    "../theme/spacing.stylex.tsx",
    "../theme/color.stylex.tsx",
    "../theme/semantic-color.stylex.tsx",
    "../theme/media-queries.stylex.tsx",
    "../theme/types.ts",
  ],
  dependencies: {},
};
