declare module "*.mdx" {
  import type { Toc } from "@stefanprobst/rehype-extract-toc";
  import type { MDXProps } from "mdx/types";

  export const tableOfContents: Toc;
  export default function MDXContent(props: MDXProps): JSX.Element;
}
