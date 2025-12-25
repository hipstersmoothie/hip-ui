import { ComponentConfig } from "../../types";

export const copyToClipboardButtonConfig: ComponentConfig = {
  name: "copy-to-clipboard-button",
  filepath: "./index.tsx",
  hipDependencies: [
    "../icon-button/index.tsx",
    "../theme/types.ts",
  ],
  dependencies: {
    "lucide-react": "^0.545.0",
  },
};

