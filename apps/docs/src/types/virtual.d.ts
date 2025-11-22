declare module "virtual:content" {
  import type { MDXComponents } from "mdx/types";

  import { Toc } from "@stefanprobst/rehype-extract-toc";

  type Page = React.ComponentType<{
    components: MDXComponents;
  }>;

  export const pages: Partial<Record<string, React.LazyExoticComponent<Page>>>;
  export const modules: Record<string, Promise<{ default: Page; toc: Toc }>>;
}

declare module "virtual:propDocs" {
  import type { ComponentDoc } from "react-docgen-typescript";
  export const propDocs: ComponentDoc[];
}

declare module "virtual:examples" {
  export const examples: Record<string, string>;
}

declare module "virtual:stylex:runtime" {
  // Side-effect only module for StyleX runtime in development
}
