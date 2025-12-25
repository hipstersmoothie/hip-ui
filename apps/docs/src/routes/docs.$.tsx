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
import { LinkIcon } from "lucide-react";
import {
  createContext,
  Suspense,
  use,
  useEffect,
  useRef,
  useState,
} from "react";
import { modules, pages } from "virtual:content";

import { Flex } from "@/components/flex";
import { LinkProps, Link as TypographyLink } from "@/components/link";
import {
  Blockquote,
  BlockquoteProps,
  Body,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  InlineCode,
  ListItem,
  OrderedList,
  UnorderedList,
} from "@/components/typography";
import { Text } from "@/components/typography/text";
import { CopyToClipboardButton } from "@/lib/CopyToClipboardButton";
import { TableOfContents } from "@/lib/TableOfContents";

import { animationDuration } from "../components/theme/animations.stylex";
import { radius } from "../components/theme/radius.stylex";
import { uiColor } from "../components/theme/color.stylex";
import { spacing } from "../components/theme/spacing.stylex";
import { Content } from "@/components/content";
import { containerBreakpoints } from "../components/theme/media-queries.stylex";

const TypographyRouterLink = createLink(TypographyLink);

const styles = stylex.create({
  root: {
    width: "100%",
    gap: {
      default: spacing["4"],
      [containerBreakpoints.lg]: spacing["8"],
    },
    display: "grid",
    gridTemplateColumns: {
      default: "minmax(0, 1fr)",
      [containerBreakpoints.lg]: "minmax(0, 1fr) 240px",
    },
  },
  pre: {
    borderColor: uiColor.border2,
    borderRadius: {
      default: radius["lg"],
      "@supports (corner-shape: squircle)": radius["4xl"],
    },
    cornerShape: "squircle",
    borderStyle: "solid",
    borderWidth: 1,
    marginBottom: spacing["8"],
    marginTop: spacing["8"],
    padding: spacing["4"],
    position: "relative",
  },
  copyButton: {
    position: "absolute",
    right: spacing["3"],
    top: spacing["2.5"],
  },
  header: {
    marginBottom: spacing["12"],
  },
  blockquote: {
    marginBottom: 0,
    marginLeft: spacing["2"],
    marginRight: 0,
    marginTop: 0,
    paddingLeft: spacing["4"],
  },
  linkedHeadingLink: {
    color: "inherit",
    textDecoration: "none",
  },
  linkedHeadingLinkButton: {
    opacity: {
      default: 0,
      ":is([data-heading-link]:hover *)": 1,
      ":is([data-focus-visible])": 1,
    },
    transitionDuration: animationDuration.fast,
    transitionProperty: {
      default: "opacity",
      "@media (prefers-reduced-motion: reduce)": "none",
    },
    transitionTimingFunction: "ease-in-out",
  },
  tableOfContents: {
    display: {
      default: "none",
      [containerBreakpoints.lg]: "block",
    },
  },
});

const PreContext = createContext(false);

function Pre({ children, ...props }: React.ComponentProps<"pre">) {
  const [textContent, setTextContent] = useState("error");
  const ref = useRef<HTMLPreElement>(null);

  useEffect(() => {
    // eslint-disable-next-line @eslint-react/hooks-extra/no-direct-set-state-in-use-effect, react-hooks/set-state-in-effect
    setTextContent(ref.current?.textContent ?? "error");
  }, [ref]);

  return (
    <PreContext value={true}>
      <pre
        ref={ref}
        {...props}
        {...stylex.props(styles.pre)}
        data-testid="code"
      >
        {children}
        <CopyToClipboardButton style={styles.copyButton} text={textContent} />
      </pre>
    </PreContext>
  );
}

function Code({ className, style, ...props }: React.ComponentProps<"code">) {
  const isPre = use(PreContext);

  if (isPre) {
    return <code {...props} className={className} style={style} />;
  }

  return <InlineCode {...props} />;
}

function DocsBlockquote(props: BlockquoteProps) {
  return <Blockquote {...props} style={styles.blockquote} />;
}

function LinkedHeading({
  id,
  children,
  style,
}: {
  id?: string;
  children: React.ReactNode;
  style?: stylex.StyleXStyles;
}) {
  const location = useLocation();

  if (!id) {
    return children;
  }

  return (
    <Flex
      direction="row"
      gap="2"
      align="center"
      data-heading-link={true}
      style={[style]}
    >
      <a href={`#${id}`} {...stylex.props(styles.linkedHeadingLink)}>
        {children}
      </a>
      <CopyToClipboardButton
        text={`${location.url}#${id}`}
        icon={<LinkIcon />}
        style={styles.linkedHeadingLinkButton}
      />
    </Flex>
  );
}

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
  pre: Pre,
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
  code: Code,
  blockquote: ({ className: _className, style: _style, ...props }) => (
    <DocsBlockquote {...props} />
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
    <div {...stylex.props(styles.root)}>
      <Content>
        <Flex direction="column" gap="4" style={styles.header}>
          <Heading1>{doc.title}</Heading1>
          <Text size="xl" variant="secondary">
            {doc.description}
          </Text>
        </Flex>
        <Suspense fallback={<div>Loading...</div>}>
          <Page components={components} />
        </Suspense>
      </Content>
      {toc && <TableOfContents toc={toc} style={styles.tableOfContents} />}
    </div>
  );
}
