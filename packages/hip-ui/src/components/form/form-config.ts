import { ComponentConfig } from "../../types";

export const formConfig: ComponentConfig = {
  name: "form",
  filepath: "./index.tsx",
  hipDependencies: ["../theme/spacing.stylex.tsx", "../theme/types.ts"],
  dependencies: {
    "react-aria-components": "^1.13.0",
  },
};
