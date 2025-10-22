declare module "virtual:content" {
  import type { MDXComponents } from "mdx/types";

  export const pages: Record<
    string,
    React.ComponentType<{ components: MDXComponents }>
  >;
}

declare module "virtual:propDocs" {
  import type { ComponentDoc } from "react-docgen-typescript";
  export const propDocs: ComponentDoc[];
}
