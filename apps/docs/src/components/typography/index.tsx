import * as stylex from "@stylexjs/stylex";
import { useMemo } from "react";

import { LinkContext } from "../link/link-context";
import { radius } from "../theme/radius.stylex";
import { ui } from "../theme/semantic-color.stylex";
import { spacing } from "../theme/spacing.stylex";
import { StyleXComponentProps } from "../theme/types";
import {
  fontFamily,
  fontSize,
  lineHeight,
  typeramp,
} from "../theme/typography.stylex";

const styles = stylex.create({
  blockquote: {
    borderLeftColor: ui.borderDim,
    borderLeftStyle: "solid",
    borderLeftWidth: 1,
    color: ui.textDim,
    fontFamily: fontFamily["serif"],
    marginBottom: 0,
    marginLeft: spacing["2"],
    marginRight: 0,
    marginTop: 0,
    paddingLeft: spacing["4"],
  },
  unorderedList: {
    display: "flex",
    flexDirection: "column",
    gap: spacing["3"],
    listStyleType: "disc",
    margin: 0,
    paddingLeft: spacing["8"],
  },
  orderedList: {
    display: "flex",
    flexDirection: "column",
    gap: spacing["3"],
    listStyleType: "decimal",
    margin: 0,
    paddingLeft: spacing["8"],
  },
  listItem: {
    fontFamily: fontFamily["sans"],
    fontSize: fontSize["base"],
    lineHeight: lineHeight["base"],
    paddingLeft: spacing["1"],
  },
  inlineCode: {
    borderRadius: radius["sm"],
    fontSize: "0.9em",
    padding: spacing["1"],
  },
  underline: {
    textDecorationLine: "underline",
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
  variant?: "default" | "secondary";
}

export const Body = ({ style, variant = "default", ...props }: BodyProps) => {
  const contextValue = useMemo(
    () => ({
      style: [variant === "secondary" && ui.textDim, styles.underline],
    }),
    [variant],
  );

  return (
    <LinkContext value={contextValue}>
      <p {...stylex.props(typeramp.body, style)} {...props} />
    </LinkContext>
  );
};

export interface SmallBodyProps
  extends StyleXComponentProps<React.ComponentProps<"p">> {
  variant?: "default" | "secondary";
}

export const SmallBody = ({
  style,
  variant = "default",
  ...props
}: SmallBodyProps) => {
  const contextValue = useMemo(
    () => ({
      style: [variant === "secondary" && ui.textDim, styles.underline],
    }),
    [variant],
  );

  return (
    <LinkContext value={contextValue}>
      <p
        {...stylex.props(
          typeramp.smallBody,
          variant === "secondary" && ui.textDim,
          style,
        )}
        {...props}
      />
    </LinkContext>
  );
};

interface LabelTextProps
  extends StyleXComponentProps<React.ComponentProps<"p">> {}

export const LabelText = ({ style, ...props }: LabelTextProps) => {
  return <p {...stylex.props(typeramp.label, style)} {...props} />;
};

interface SubLabelProps
  extends StyleXComponentProps<React.ComponentProps<"p">> {
  variant?: "default" | "secondary";
}

export const SubLabel = ({
  style,
  variant = "default",
  ...props
}: SubLabelProps) => {
  const contextValue = useMemo(
    () => ({
      style: [variant === "secondary" && ui.textDim, styles.underline],
    }),
    [variant],
  );

  return (
    <LinkContext value={contextValue}>
      <p
        {...stylex.props(
          typeramp.sublabel,
          variant === "secondary" && ui.textDim,
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
