declare module "virtual:content" {
  import type { MDXComponents } from "mdx/types";

  import { Toc } from "@stefanprobst/rehype-extract-toc";

  export const pages: Record<
    string,
    React.ComponentType<{ components: MDXComponents }>
  >;

  export const tableOfContents: Record<string, Toc>;
}

declare module "virtual:propDocs" {
  import type { ComponentDoc } from "react-docgen-typescript";
  export const propDocs: ComponentDoc[];
}

declare module "virtual:examples" {
  export const examples: Record<string, string>;
}
