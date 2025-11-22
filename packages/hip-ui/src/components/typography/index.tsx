import * as stylex from "@stylexjs/stylex";
import { useMemo } from "react";

import { LinkContext } from "../link/link-context";
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
      "@supports (corner-shape: squircle)": radius["2xl"],
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
});

export interface Heading1Props
  extends StyleXComponentProps<React.ComponentProps<"h1">> {}

export const Heading1 = ({ style, ...props }: Heading1Props) => {
  // eslint-disable-next-line jsx-a11y/heading-has-content
  return <h1 {...stylex.props(typeramp.heading1, style)} {...props} />;
};

export interface Heading2Props
  extends StyleXComponentProps<React.ComponentProps<"h2">> {}

export const Heading2 = ({ style, ...props }: Heading2Props) => {
  // eslint-disable-next-line jsx-a11y/heading-has-content
  return <h2 {...stylex.props(typeramp.heading2, style)} {...props} />;
};

export interface Heading3Props
  extends StyleXComponentProps<React.ComponentProps<"h3">> {}

export const Heading3 = ({ style, ...props }: Heading3Props) => {
  // eslint-disable-next-line jsx-a11y/heading-has-content
  return <h3 {...stylex.props(typeramp.heading3, style)} {...props} />;
};

export interface Heading4Props
  extends StyleXComponentProps<React.ComponentProps<"h4">> {}

export const Heading4 = ({ style, ...props }: Heading4Props) => {
  // eslint-disable-next-line jsx-a11y/heading-has-content
  return <h4 {...stylex.props(typeramp.heading4, style)} {...props} />;
};

export interface Heading5Props
  extends StyleXComponentProps<React.ComponentProps<"h5">> {}

export const Heading5 = ({ style, ...props }: Heading5Props) => {
  // eslint-disable-next-line jsx-a11y/heading-has-content
  return <h5 {...stylex.props(typeramp.heading5, style)} {...props} />;
};

export interface BodyProps
  extends StyleXComponentProps<React.ComponentProps<"p">> {
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
        {...stylex.props(
          typeramp.body,
          variant === "secondary" && ui.textDim,
          variant === "critical" && critical.textDim,
          style,
        )}
        {...props}
      />
    </LinkContext>
  );
};

export interface SmallBodyProps
  extends StyleXComponentProps<React.ComponentProps<"p">> {
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
        {...stylex.props(
          typeramp.smallBody,
          variant === "secondary" && ui.textDim,
          variant === "critical" && critical.textDim,
          style,
        )}
        {...props}
      />
    </LinkContext>
  );
};

interface LabelTextProps
  extends StyleXComponentProps<React.ComponentProps<"p">> {
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
      {...stylex.props(
        typeramp.label,
        variant === "secondary" && ui.textDim,
        variant === "critical" && critical.textDim,
        hasEllipsis && styles.textEllipsis,
        style,
      )}
      {...props}
    />
  );
};

interface SubLabelProps
  extends StyleXComponentProps<React.ComponentProps<"p">> {
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
        {...stylex.props(
          typeramp.sublabel,
          variant === "secondary" && ui.textDim,
          variant === "critical" && critical.textDim,
          style,
        )}
        {...props}
      />
    </LinkContext>
  );
};

export interface BlockquoteProps
  extends StyleXComponentProps<React.ComponentProps<"blockquote">> {}

export const Blockquote = ({ style, ...props }: BlockquoteProps) => {
  return <blockquote {...stylex.props(styles.blockquote, style)} {...props} />;
};

export interface UnorderedListProps
  extends StyleXComponentProps<React.ComponentProps<"ul">> {}

export const UnorderedList = ({ style, ...props }: UnorderedListProps) => {
  return <ul {...stylex.props(styles.unorderedList, style)} {...props} />;
};

export interface OrderedListProps
  extends StyleXComponentProps<React.ComponentProps<"ol">> {}

export const OrderedList = ({ style, ...props }: OrderedListProps) => {
  return <ol {...stylex.props(styles.orderedList, style)} {...props} />;
};

export interface ListItemProps
  extends StyleXComponentProps<React.ComponentProps<"li">> {}

export const ListItem = ({ style, children, ...props }: ListItemProps) => {
  return (
    <li {...stylex.props(styles.listItem, style)} {...props}>
      {children}
    </li>
  );
};

export interface InlineCodeProps
  extends StyleXComponentProps<React.ComponentProps<"code">> {}

export const InlineCode = ({ style, ...props }: InlineCodeProps) => {
  return (
    <code
      {...stylex.props(styles.inlineCode, ui.bgSecondary, style)}
      {...props}
    />
  );
};
