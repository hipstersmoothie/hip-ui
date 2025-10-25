import type { MDXComponents } from "mdx/types";

import * as stylex from "@stylexjs/stylex";
import { createFileRoute, useLocation } from "@tanstack/react-router";
import { allDocs } from "content-collections";
import { createContext, use, useEffect, useRef, useState } from "react";
import { pages } from "virtual:content";

import { Flex } from "@/components/flex";
import { LinkProps, Link as TypographyLink } from "@/components/link";
import { StyleXComponentProps } from "@/components/theme/types";
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

import { radius } from "../components/theme/radius.stylex";
import { uiColor } from "../components/theme/semantic-color.stylex";
import { spacing } from "../components/theme/spacing.stylex";
import { lineHeight } from "../components/theme/typography.stylex";

const styles = stylex.create({
  main: {
    maxWidth: "80ch",
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
});

function Link(props: LinkProps) {
  return <TypographyLink {...props} />;
}

const PreContext = createContext(false);

function Pre({
  children,
  style,
  ...props
}: StyleXComponentProps<React.ComponentProps<"pre">>) {
  const [textContent, setTextContent] = useState("error");
  const ref = useRef<HTMLPreElement>(null);

  useEffect(() => {
    console.log(ref.current?.textContent);
    // eslint-disable-next-line react-hooks/set-state-in-effect, @eslint-react/hooks-extra/no-direct-set-state-in-use-effect
    setTextContent(ref.current?.textContent ?? "error");
  }, [ref]);

  return (
    <PreContext value={true}>
      <pre
        ref={ref}
        {...props}
        {...stylex.props(styles.pre, style)}
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

const components: MDXComponents = {
  pre: Pre,
  h1: (props) => <Heading1 {...props} style={styles.h1} />,
  h2: (props) => <Heading2 {...props} style={styles.h2} />,
  h3: (props) => <Heading3 {...props} style={styles.h3} />,
  h4: (props) => <Heading4 {...props} style={styles.h4} />,
  h5: (props) => <Heading5 {...props} style={styles.h5} />,
  p: (props) => <Body {...props} style={styles.p} />,
  a: Link,
  ul: UnorderedList,
  ol: OrderedList,
  li: ListItem,
  code: Code,
  blockquote: DocsBlockquote,
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

  return (
    <div {...stylex.props(styles.main)}>
      <Flex direction="column" gap="4" style={styles.header}>
        <Heading1>{doc.title}</Heading1>
        <Text size="xl" variant="secondary">
          {doc.description}
        </Text>
      </Flex>
      <Content components={components} />
    </div>
  );
}
