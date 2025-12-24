import { ComponentConfig } from "../../types";

export const imageCropperConfig: ComponentConfig = {
  name: "image-cropper",
  filepath: "./index.tsx",
  hipDependencies: [
    "../theme/spacing.stylex.tsx",
    "../theme/radius.stylex.tsx",
    "../theme/shadow.stylex.tsx",
    "../theme/color.stylex.tsx",
    "../theme/types.ts",
  ],
  dependencies: {
    "@origin-space/image-cropper": "^0.1.9",
  },
};
