import * as stylex from "@stylexjs/stylex";
import { LinkIcon } from "lucide-react";
import {
  createContext,
  use,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { CopyToClipboardButton } from "../copy-to-clipboard-button";
import { Flex } from "../flex";
import { LinkContext } from "../link/link-context";
import { animationDuration } from "../theme/animations.stylex";
import { uiColor } from "../theme/color.stylex";
import { mediaQueries } from "../theme/media-queries.stylex";
import { radius } from "../theme/radius.stylex";
import { critical, ui } from "../theme/semantic-color.stylex";
import { spacing } from "../theme/spacing.stylex";
import { StyleXComponentProps, TextVariant } from "../theme/types";
import {
  fontFamily,
  fontSize,
  lineHeight,
  typeramp,
} from "../theme/typography.stylex";

const styles = stylex.create({
  pre: {
    // eslint-disable-next-line @stylexjs/valid-styles
    cornerShape: "squircle",
    padding: spacing["4"],
    borderColor: uiColor.border2,
    borderRadius: {
      default: radius["lg"],
      "@supports (corner-shape: squircle)": radius["4xl"],
    },
    borderStyle: "solid",
    borderWidth: 1,
    position: "relative",
    marginBottom: spacing["8"],
    marginTop: spacing["8"],
  },
  copyButton: {
    position: "absolute",
    right: spacing["3"],
    top: spacing["2.5"],
  },
  blockquote: {
    color: ui.textDim,
    fontFamily: fontFamily["serif"],
    borderLeftColor: ui.borderDim,
    borderLeftStyle: "solid",
    borderLeftWidth: 1,
    marginBottom: 0,
    marginLeft: spacing["2"],
    marginRight: 0,
    marginTop: 0,
    paddingLeft: spacing["4"],
  },
  unorderedList: {
    margin: 0,
    gap: spacing["3"],
    display: "flex",
    flexDirection: "column",
    listStyleType: "disc",
    paddingLeft: spacing["8"],
  },
  orderedList: {
    margin: 0,
    gap: spacing["3"],
    display: "flex",
    flexDirection: "column",
    listStyleType: "decimal",
    paddingLeft: spacing["8"],
  },
  listItem: {
    fontFamily: fontFamily["sans"],
    fontSize: fontSize["base"],
    lineHeight: lineHeight["base"],
    paddingLeft: spacing["1"],
  },
  inlineCode: {
    // eslint-disable-next-line @stylexjs/valid-styles
    cornerShape: "squircle",
    borderRadius: {
      default: radius["sm"],
      [mediaQueries.supportsSquircle]: radius["2xl"],
    },
    fontSize: "0.95em",
    position: "relative",
    paddingBottom: spacing["1"],
    paddingLeft: spacing["1"],
    paddingRight: spacing["1"],
    paddingTop: spacing["1"],
    top: "-0.01em",
  },
  underline: {
    textDecorationLine: "underline",
  },
  textEllipsis: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
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
});

export interface Heading1Props extends StyleXComponentProps<
  React.ComponentProps<"h1">
> {}

export const Heading1 = ({ style, ...props }: Heading1Props) => {
  // eslint-disable-next-line jsx-a11y/heading-has-content
  return <h1 {...props} {...stylex.props(typeramp.heading1, style)} />;
};

export interface Heading2Props extends StyleXComponentProps<
  React.ComponentProps<"h2">
> {}

export const Heading2 = ({ style, ...props }: Heading2Props) => {
  // eslint-disable-next-line jsx-a11y/heading-has-content
  return <h2 {...props} {...stylex.props(typeramp.heading2, style)} />;
};

export interface Heading3Props extends StyleXComponentProps<
  React.ComponentProps<"h3">
> {}

export const Heading3 = ({ style, ...props }: Heading3Props) => {
  // eslint-disable-next-line jsx-a11y/heading-has-content
  return <h3 {...props} {...stylex.props(typeramp.heading3, style)} />;
};

export interface Heading4Props extends StyleXComponentProps<
  React.ComponentProps<"h4">
> {}

export const Heading4 = ({ style, ...props }: Heading4Props) => {
  // eslint-disable-next-line jsx-a11y/heading-has-content
  return <h4 {...props} {...stylex.props(typeramp.heading4, style)} />;
};

export interface Heading5Props extends StyleXComponentProps<
  React.ComponentProps<"h5">
> {}

export const Heading5 = ({ style, ...props }: Heading5Props) => {
  // eslint-disable-next-line jsx-a11y/heading-has-content
  return <h5 {...props} {...stylex.props(typeramp.heading5, style)} />;
};

export interface BodyProps extends StyleXComponentProps<
  React.ComponentProps<"p">
> {
  variant?: TextVariant;
}

export const Body = ({ style, variant = "primary", ...props }: BodyProps) => {
  const contextValue = useMemo(
    () => ({
      style: [
        variant === "secondary" && ui.textDim,
        variant === "critical" && critical.textDim,
        styles.underline,
      ],
    }),
    [variant],
  );

  return (
    <LinkContext value={contextValue}>
      <p
        {...props}
        {...stylex.props(
          typeramp.body,
          variant === "secondary" && ui.textDim,
          variant === "critical" && critical.textDim,
          style,
        )}
      />
    </LinkContext>
  );
};

export interface SmallBodyProps extends StyleXComponentProps<
  React.ComponentProps<"p">
> {
  variant?: TextVariant;
}

export const SmallBody = ({
  style,
  variant = "primary",
  ...props
}: SmallBodyProps) => {
  const contextValue = useMemo(
    () => ({
      style: [
        variant === "secondary" && ui.textDim,
        variant === "critical" && critical.textDim,
        styles.underline,
      ],
    }),
    [variant],
  );

  return (
    <LinkContext value={contextValue}>
      <p
        {...props}
        {...stylex.props(
          typeramp.smallBody,
          variant === "secondary" && ui.textDim,
          variant === "critical" && critical.textDim,
          style,
        )}
      />
    </LinkContext>
  );
};

interface LabelTextProps extends StyleXComponentProps<
  React.ComponentProps<"p">
> {
  variant?: TextVariant;
  hasEllipsis?: boolean;
}

export const LabelText = ({
  style,
  variant = "primary",
  hasEllipsis = false,
  ...props
}: LabelTextProps) => {
  return (
    <p
      {...props}
      {...stylex.props(
        typeramp.label,
        variant === "secondary" && ui.textDim,
        variant === "critical" && critical.textDim,
        hasEllipsis && styles.textEllipsis,
        style,
      )}
    />
  );
};

interface SubLabelProps extends StyleXComponentProps<
  React.ComponentProps<"p">
> {
  variant?: TextVariant;
}

export const SubLabel = ({
  style,
  variant = "primary",
  ...props
}: SubLabelProps) => {
  const contextValue = useMemo(
    () => ({
      style: [
        variant === "secondary" && ui.textDim,
        variant === "critical" && critical.textDim,
        styles.underline,
      ],
    }),
    [variant],
  );

  return (
    <LinkContext value={contextValue}>
      <p
        {...props}
        {...stylex.props(
          typeramp.sublabel,
          variant === "secondary" && ui.textDim,
          variant === "critical" && critical.textDim,
          style,
        )}
      />
    </LinkContext>
  );
};

export interface BlockquoteProps extends StyleXComponentProps<
  React.ComponentProps<"blockquote">
> {}

export const Blockquote = ({ style, ...props }: BlockquoteProps) => {
  return <blockquote {...props} {...stylex.props(styles.blockquote, style)} />;
};

export interface UnorderedListProps extends StyleXComponentProps<
  React.ComponentProps<"ul">
> {}

export const UnorderedList = ({ style, ...props }: UnorderedListProps) => {
  return <ul {...props} {...stylex.props(styles.unorderedList, style)} />;
};

export interface OrderedListProps extends StyleXComponentProps<
  React.ComponentProps<"ol">
> {}

export const OrderedList = ({ style, ...props }: OrderedListProps) => {
  return <ol {...props} {...stylex.props(styles.orderedList, style)} />;
};

export interface ListItemProps extends StyleXComponentProps<
  React.ComponentProps<"li">
> {}

export const ListItem = ({ style, children, ...props }: ListItemProps) => {
  return (
    <li {...props} {...stylex.props(styles.listItem, style)}>
      {children}
    </li>
  );
};

const PreContext = createContext(false);

export interface PreProps extends StyleXComponentProps<
  React.ComponentProps<"pre">
> {}

export function Pre({ style, children, ...props }: PreProps) {
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
        {...stylex.props(styles.pre, style)}
        data-testid="code"
      >
        {children}
        <CopyToClipboardButton style={styles.copyButton} text={textContent} />
      </pre>
    </PreContext>
  );
}

export interface InlineCodeProps extends StyleXComponentProps<
  React.ComponentProps<"code">
> {}

export const InlineCode = ({ style, ...props }: InlineCodeProps) => {
  const isPre = use(PreContext);

  if (isPre) {
    return (
      <code
        {...props}
        // className={className} style={style}
      />
    );
  }

  return (
    <code
      {...props}
      {...stylex.props(styles.inlineCode, ui.bgSecondary, style)}
    />
  );
};

/**
 * Props for the LinkedHeading component.
 */
export interface LinkedHeadingProps {
  /**
   * The ID of the heading, used to create the anchor link.
   * If not provided, the component will just render the children.
   */
  id?: string;
  /**
   * The heading content to display.
   */
  children: React.ReactNode;
  /**
   * Optional style to apply to the container.
   */
  style?: stylex.StyleXStyles;
}

/**
 * A wrapper component for headings that adds a link and copy-to-clipboard button.
 * The link allows users to jump to the heading, and the button copies the full URL
 * with the anchor to the clipboard.
 */
export const LinkedHeading = ({
  id,
  children,
  style,
}: LinkedHeadingProps) => {
  if (!id) {
    return <>{children}</>;
  }

  const url = typeof window !== "undefined"
    ? `${window.location.origin}${window.location.pathname}#${id}`
    : `#${id}`;

  return (
    <Flex
      direction="row"
      gap="2"
      align="center"
      data-heading-link={true}
      style={style}
    >
      <a href={`#${id}`} {...stylex.props(styles.linkedHeadingLink)}>
        {children}
      </a>
      <CopyToClipboardButton
        text={url}
        icon={<LinkIcon />}
        style={styles.linkedHeadingLinkButton}
      />
    </Flex>
  );
};
