declare module "virtual:content" {
  import type { MDXComponents } from "mdx/types";

  export const pages: Record<
    string,
    React.ComponentType<{ components: MDXComponents }>
  >;
}
