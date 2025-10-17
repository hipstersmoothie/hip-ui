import { ComponentConfig } from "../../types";

export const menuConfig: ComponentConfig = {
  name: "menu",
  filepath: "./index.tsx",
  hipDependencies: [
    "../context.ts",
    "../theme/usePopoverStyles.ts",
    "../theme/useListBoxItemStyles.ts",
  ],
};
