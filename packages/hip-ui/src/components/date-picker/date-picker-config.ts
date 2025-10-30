import { ComponentConfig } from "../../types";

export const datePickerConfig: ComponentConfig = {
  name: "date-picker",
  filepath: "./index.tsx",
  hipDependencies: [
    "../theme/useInputStyles.ts",
    "../theme/useCalendarStyles.ts",
  ],
};
