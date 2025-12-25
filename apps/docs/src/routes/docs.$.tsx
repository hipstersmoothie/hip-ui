import type { MDXComponents } from "mdx/types";
import type { JSX as Jsx } from "react/jsx-runtime";

import {
  createLink,
  createFileRoute,
  useLocation,
} from "@tanstack/react-router";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    type ElementClass = Jsx.ElementClass;
    type Element = Jsx.Element;
    type IntrinsicElements = Jsx.IntrinsicElements;
  }
}

import * as stylex from "@stylexjs/stylex";
import { allDocs } from "content-collections";
import { modules, pages } from "virtual:content";

import { Flex } from "@/components/flex";
import { LinkProps, Link as TypographyLink } from "@/components/link";
import {
  Blockquote,
  Body,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  InlineCode,
  LinkedHeading,
  ListItem,
  OrderedList,
  Pre,
  UnorderedList,
} from "@/components/typography";
import { Text } from "@/components/typography/text";
import { TableOfContents } from "@/components/table-of-contents";

import { spacing } from "../components/theme/spacing.stylex";
import { Content } from "@/components/content";
import { SidebarLayout } from "@/components/sidebar-layout";

const TypographyRouterLink = createLink(TypographyLink);

const styles = stylex.create({
  header: {
    marginBottom: spacing["12"],
  },
});

function Link({ href, ...props }: LinkProps) {
  if (href && href.startsWith("/")) {
    const splat = href.split("/").slice(2).join("/");
    return (
      <TypographyRouterLink
        to="/docs/$"
        params={{ _splat: splat }}
        {...props}
      />
    );
  }

  return <TypographyLink {...props} href={href} />;
}

const components: MDXComponents = {
  h1: ({ className: _className, style: _style, ...props }) => (
    <Heading1 {...props} />
  ),
  h2: ({ className: _className, style: _style, ...props }) => (
    <LinkedHeading id={props.id}>
      <Heading2 {...props} />
    </LinkedHeading>
  ),
  h3: ({ className: _className, style: _style, ...props }) => (
    <LinkedHeading id={props.id}>
      <Heading3 {...props} />
    </LinkedHeading>
  ),
  h4: ({ className: _className, style: _style, ...props }) => (
    <LinkedHeading id={props.id}>
      <Heading4 {...props} />
    </LinkedHeading>
  ),
  h5: ({ className: _className, style: _style, ...props }) => (
    <LinkedHeading id={props.id}>
      <Heading5 {...props} />
    </LinkedHeading>
  ),
  p: ({ className: _className, style: _style, ...props }) => (
    <Body {...props} />
  ),
  a: ({ className: _className, style: _style, ...props }) => (
    <Link {...(props as LinkProps)} />
  ),
  ul: ({ className: _className, style: _style, ...props }) => (
    <UnorderedList {...props} />
  ),
  ol: ({ className: _className, style: _style, ...props }) => (
    <OrderedList {...props} />
  ),
  li: ({ className: _className, style: _style, ...props }) => (
    <ListItem {...props} />
  ),
  pre: ({ className: _className, style: _style, ...props }) => (
    <Pre {...props} />
  ),
  code: ({ className: _className, style: _style, ...props }) => (
    <InlineCode {...props} />
  ),
  blockquote: ({ className: _className, style: _style, ...props }) => (
    <Blockquote {...props} />
  ),
};

export const Route = createFileRoute("/docs/$")({
  component: RouteComponent,
  loader: async ({ location }) => {
    return {
      toc: await modules[location.pathname]?.then((mod) => mod.toc),
    };
  },
});

function RouteComponent() {
  const { _splat } = Route.useParams();
  const location = useLocation();
  const { toc } = Route.useLoaderData();
  const doc = allDocs.find((d) =>
    location.pathname.match(new RegExp(`${d._meta.path}$`)),
  );

  if (!doc) {
    throw new Error(`Doc not found: ${_splat ?? "unknown"}`);
  }

  const Page = pages[location.pathname];

  if (!Page) {
    throw new Error(`Content not found: ${location.pathname}`);
  }

  const isShowcase = location.pathname.includes("showcase");

  if (isShowcase) {
    return <Page components={components} />;
  }

  return (
    <>
      <SidebarLayout.Page>
        <Content>
          <Flex direction="column" gap="4" style={styles.header}>
            <Heading1>{doc.title}</Heading1>
            <Text size="xl" variant="secondary">
              {doc.description}
            </Text>
          </Flex>
          <Page components={components} />
        </Content>
      </SidebarLayout.Page>

      {toc && (
        <SidebarLayout.InconsequentialSidebar visible="md">
          <TableOfContents toc={toc} />
        </SidebarLayout.InconsequentialSidebar>
      )}
    </>
  );
}
