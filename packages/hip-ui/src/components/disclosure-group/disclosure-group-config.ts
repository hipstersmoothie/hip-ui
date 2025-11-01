import { ComponentConfig } from "../../types";

export const disclosureGroupConfig: ComponentConfig = {
  name: "disclosure-group",
  filepath: "./index.tsx",
  hipDependencies: [
    "../theme/types.ts",
    "../context.ts",
  ],
  dependencies: {
    "react-aria-components": "^1.13.0",
  },
};

