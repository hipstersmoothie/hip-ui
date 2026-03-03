"use client";

import type { Components } from "react-markdown";

import * as stylex from "@stylexjs/stylex";
import ReactMarkdown from "react-markdown";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";

import type { StyleXComponentProps } from "../theme/types";

import { Link } from "../link";
import { uiColor } from "../theme/color.stylex";
import { radius } from "../theme/radius.stylex";
import { spacing } from "../theme/spacing.stylex";
import { fontFamily, fontSize } from "../theme/typography.stylex";
import { Text } from "../typography/text";

const styles = stylex.create({
  root: {},
  italic: {
    fontStyle: "italic",
  },
  paragraph: {
    margin: 0,
  },
  list: {
    margin: `${spacing["1"]} 0`,
    paddingLeft: spacing["5"],
  },
  code: {
    borderRadius: radius["sm"],
    backgroundColor: uiColor.component2,
    fontFamily: fontFamily["mono"],
    fontSize: fontSize["sm"],
    paddingBottom: spacing["0.5"],
    paddingLeft: spacing["1"],
    paddingRight: spacing["1"],
    paddingTop: spacing["0.5"],
  },
});

const components: Components = {
  p: ({ children }) => (
    <p {...stylex.props(styles.paragraph)}>
      <Text leading="base">{children}</Text>
    </p>
  ),
  strong: ({ children }) => <Text weight="semibold">{children}</Text>,
  em: ({ children }) => <em {...stylex.props(styles.italic)}>{children}</em>,
  a: ({ href, children }) => (
    <Link href={href ?? "#"} target="_blank" rel="noopener noreferrer">
      {children}
    </Link>
  ),
  ul: ({ children }) => <ul {...stylex.props(styles.list)}>{children}</ul>,
  ol: ({ children }) => <ol {...stylex.props(styles.list)}>{children}</ol>,
  li: ({ children }) => (
    <li>
      <Text size="sm" variant="secondary">
        {children}
      </Text>
    </li>
  ),
  code: ({ children }) => (
    <code {...stylex.props(styles.code)}>{children}</code>
  ),
};

/**
 * Props for the MarkdownContent component.
 */
export interface MarkdownContentProps extends StyleXComponentProps<
  React.ComponentProps<"div">
> {
  /**
   * The markdown string to render.
   */
  content: string;
}

/**
 * Renders GitHub-flavored markdown with sanitization to prevent XSS.
 */
export function MarkdownContent({
  content,
  style,
  ...props
}: MarkdownContentProps) {
  return (
    <div {...stylex.props(styles.root, style)} {...props}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeSanitize]}
        components={components}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
