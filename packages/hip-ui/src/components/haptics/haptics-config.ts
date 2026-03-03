import type { ComponentConfig } from "../../types";

export const hapticsConfig: ComponentConfig = {
  name: "haptics",
  filepath: "./index.ts",
  hipDependencies: ["./haptics.ts", "./context.tsx", "./useHaptics.ts"],
  dependencies: {
    "web-haptics": "^0.0.6",
  },
};
