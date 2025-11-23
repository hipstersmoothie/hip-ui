import { ComponentConfig } from "../../types";

export const segmentedControlConfig: ComponentConfig = {
  name: "segmented-control",
  filepath: "./index.tsx",
  hipDependencies: ["../theme/animations.stylex.tsx"],
  dependencies: {
    "react-aria-components": "^1.13.0",
  },
};
