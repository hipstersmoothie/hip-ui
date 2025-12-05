import { ComponentConfig } from "../../types";

export const navbarConfig: ComponentConfig = {
  name: "navbar",
  filepath: "./index.tsx",
  hipDependencies: [
    "../theme/spacing.stylex.tsx",
    "../theme/semantic-color.stylex.tsx",
    "../theme/media-queries.stylex.tsx",
    "../theme/types.ts",
    "../context.ts",
    "../icon-button/index.tsx",
    "../flex/index.tsx",
    "../separator/index.tsx",
    "./useAnimatedNavbar.tsx",
    "./Navbar.tsx",
    "./NavbarMenu.tsx",
  ],
  dependencies: {
    "react-aria-components": "^1.13.0",
    "lucide-react": "^0.263.1",
    "raf-throttle": "^2.0.6",
  },
};
