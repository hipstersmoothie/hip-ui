import type { ComponentConfig } from "../../types";

export const listboxConfig: ComponentConfig = {
  name: "listbox",
  filepath: "./index.tsx",
  hipDependencies: [
    "../haptics/haptics.ts",
    "../haptics/context.tsx",
    "../haptics/useHaptics.ts",
    "../haptics/index.ts",
    "../context.ts",
  ],
  dependencies: {
    "web-haptics": "^0.0.6",
  },
};
