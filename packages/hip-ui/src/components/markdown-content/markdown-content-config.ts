import type { ComponentConfig } from "../../types";

export const markdownContentConfig: ComponentConfig = {
  name: "markdown-content",
  filepath: "./index.tsx",
  hipDependencies: [
    "../theme/color.stylex.tsx",
    "../theme/radius.stylex.tsx",
    "../theme/spacing.stylex.tsx",
    "../theme/typography.stylex.tsx",
    "../theme/types.ts",
    "../link/index.tsx",
    "../link/link-context.ts",
    "../typography/text.tsx",
  ],
  dependencies: {
    "react-markdown": "^10.1.0",
    "rehype-sanitize": "^6.0.0",
    "remark-gfm": "^4.0.0",
  },
};
