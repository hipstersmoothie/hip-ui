import { ComponentConfig } from "../../types";

export const avatarConfig: ComponentConfig = {
  name: "avatar",
  filepath: "./index.tsx",
  hipDependencies: [
    "../theme/spacing.stylex.tsx",
    "../theme/radius.stylex.tsx",
    "../theme/semantic-color.stylex.tsx",
    "../theme/typography.stylex.tsx",
    "../theme/shadow.stylex.tsx",
  ],
};
