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
import { createContext, use, useEffect, useRef, useState } from "react";
import { pages, tableOfContents } from "virtual:content";

import { Button } from "@/components/button";
import { Flex } from "@/components/flex";
import { Grid } from "@/components/grid";
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

import { radius } from "../components/theme/radius.stylex";
import { uiColor } from "../components/theme/semantic-color.stylex";
import { spacing } from "../components/theme/spacing.stylex";
import { lineHeight } from "../components/theme/typography.stylex";

const TypographyRouterLink = createLink(TypographyLink);

const styles = stylex.create({
  root: {
    width: "100%",
  },
  main: {
    flexGrow: 1,
    maxWidth: "80ch",
    minWidth: 0,
    paddingBottom: spacing["20"],
    paddingLeft: spacing["16"],
    paddingRight: spacing["16"],
    paddingTop: spacing["20"],
  },
  pre: {
    borderColor: uiColor.border2,
    borderRadius: radius["lg"],
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
    top: "50%",
    transform: "translateY(-50%)",
  },
  h1: {
    marginBottom: spacing["8"],
    marginTop: spacing["8"],
  },
  h2: {
    marginBottom: spacing["4"],
    marginTop: spacing["8"],
  },
  h3: {
    marginBottom: spacing["5"],
    marginTop: spacing["8"],
  },
  h4: {
    marginBottom: spacing["8"],
    marginTop: spacing["8"],
  },
  h5: {
    marginBottom: spacing["8"],
    marginTop: spacing["8"],
  },
  p: {
    lineHeight: {
      default: lineHeight.xl,
      ":is(li *)": lineHeight.base,
      ":is(blockquote *)": lineHeight.base,
    },
    marginBottom: {
      default: spacing["5"],
      ":is(li *)": spacing["0"],
      ":is(blockquote *)": spacing["0"],
    },
    marginTop: {
      default: spacing["5"],
      ":is(li *)": spacing["0"],
      ":is(blockquote *)": spacing["0"],
    },
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
    transitionDuration: "100ms",
    transitionProperty: "opacity",
    transitionTimingFunction: "ease-in-out",
  },
});

const PreContext = createContext(false);

function Pre({
  children,
  className: _className,
  style: _style,
  ...props
}: React.ComponentProps<"pre">) {
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
    <Heading1 {...props} style={styles.h1} />
  ),
  h2: ({ className: _className, style: _style, ...props }) => (
    <LinkedHeading id={props.id} style={styles.h2}>
      <Heading2 {...props} />
    </LinkedHeading>
  ),
  h3: ({ className: _className, style: _style, ...props }) => (
    <LinkedHeading id={props.id} style={styles.h3}>
      <Heading3 {...props} />
    </LinkedHeading>
  ),
  h4: ({ className: _className, style: _style, ...props }) => (
    <LinkedHeading id={props.id} style={styles.h4}>
      <Heading4 {...props} />
    </LinkedHeading>
  ),
  h5: ({ className: _className, style: _style, ...props }) => (
    <LinkedHeading id={props.id} style={styles.h5}>
      <Heading5 {...props} />
    </LinkedHeading>
  ),
  p: ({ className: _className, style: _style, ...props }) => (
    <Body {...props} style={styles.p} />
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
});

function RouteComponent() {
  const { _splat } = Route.useParams();
  const location = useLocation();
  const doc = allDocs.find((d) => location.pathname.includes(d._meta.path));

  if (!doc) {
    throw new Error(`Doc not found: ${_splat ?? "unknown"}`);
  }

  const Content = pages[location.pathname];
  const isShowcase = location.pathname.includes("showcase");

  if (isShowcase) {
    return <Content components={components} />;
  }

  const toc = tableOfContents[location.pathname];
  console.log(toc);

  return (
    <Grid columns="1fr 240px" columnGap="4" style={styles.root}>
      <div {...stylex.props(styles.main)}>
        <Flex direction="column" gap="4" style={styles.header}>
          <Heading1>{doc.title}</Heading1>
          <Text size="xl" variant="secondary">
            {doc.description}
          </Text>
        </Flex>
        <Content components={components} />
      </div>
      <TableOfContents toc={toc} />
    </Grid>
  );
}
