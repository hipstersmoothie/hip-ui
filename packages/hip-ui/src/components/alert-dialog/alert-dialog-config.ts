import { ComponentConfig } from "../../types";

export const alertDialogConfig: ComponentConfig = {
  name: "alert-dialog",
  filepath: "./index.tsx",
  hipDependencies: ["../context.ts", "../theme/useDialogStyles.ts"],
  dependencies: {
    "lucide-react": "^0.545.0",
    "@react-stately/utils": "^3.10.8",
    "react-stately": "^3.42.0",
    "@stylexjs/stylex": "^0.16.2",
  },
};
