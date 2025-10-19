import * as stylex from "@stylexjs/stylex";
import { useMemo } from "react";

import { LinkContext } from "../link/link-context";
import { radius } from "../theme/radius.stylex";
import { gray } from "../theme/semantic-color.stylex";
import { spacing } from "../theme/spacing.stylex";
import {
  fontFamily,
  fontSize,
  lineHeight,
  typeramp,
} from "../theme/typography.stylex";

const styles = stylex.create({
  blockquote: {
    borderLeftColor: gray.borderDim,
    borderLeftStyle: "solid",
    borderLeftWidth: 1,
    color: gray.textDim,
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
    gap: spacing["1"],
    listStyleType: "disc",
    margin: 0,
    paddingLeft: spacing["8"],
  },
  orderedList: {
    display: "flex",
    flexDirection: "column",
    gap: spacing["1"],
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
  extends Omit<React.ComponentProps<"h1">, "style" | "className"> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
}

export const Heading1 = ({ style, ...props }: Heading1Props) => {
  // eslint-disable-next-line jsx-a11y/heading-has-content
  return <h1 {...stylex.props(typeramp.heading1, style)} {...props} />;
};

export interface Heading2Props
  extends Omit<React.ComponentProps<"h2">, "style" | "className"> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
}

export const Heading2 = ({ style, ...props }: Heading2Props) => {
  // eslint-disable-next-line jsx-a11y/heading-has-content
  return <h2 {...stylex.props(typeramp.heading2, style)} {...props} />;
};

export interface Heading3Props
  extends Omit<React.ComponentProps<"h3">, "style" | "className"> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
}

export const Heading3 = ({ style, ...props }: Heading3Props) => {
  // eslint-disable-next-line jsx-a11y/heading-has-content
  return <h3 {...stylex.props(typeramp.heading3, style)} {...props} />;
};

export interface Heading4Props
  extends Omit<React.ComponentProps<"h4">, "style" | "className"> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
}

export const Heading4 = ({ style, ...props }: Heading4Props) => {
  // eslint-disable-next-line jsx-a11y/heading-has-content
  return <h4 {...stylex.props(typeramp.heading4, style)} {...props} />;
};

export interface Heading5Props
  extends Omit<React.ComponentProps<"h5">, "style" | "className"> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
}

export const Heading5 = ({ style, ...props }: Heading5Props) => {
  // eslint-disable-next-line jsx-a11y/heading-has-content
  return <h5 {...stylex.props(typeramp.heading5, style)} {...props} />;
};

export interface BodyProps
  extends Omit<React.ComponentProps<"p">, "style" | "className"> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
  variant?: "default" | "secondary";
}

export const Body = ({ style, variant = "default", ...props }: BodyProps) => {
  const contextValue = useMemo(
    () => ({
      style: [variant === "secondary" && gray.textDim, styles.underline],
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
  extends Omit<React.ComponentProps<"p">, "style" | "className"> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
  variant?: "default" | "secondary";
}

export const SmallBody = ({
  style,
  variant = "default",
  ...props
}: SmallBodyProps) => {
  const contextValue = useMemo(
    () => ({
      style: [variant === "secondary" && gray.textDim, styles.underline],
    }),
    [variant],
  );

  return (
    <LinkContext value={contextValue}>
      <p
        {...stylex.props(
          typeramp.smallBody,
          variant === "secondary" && gray.textDim,
          style,
        )}
        {...props}
      />
    </LinkContext>
  );
};

interface LabelTextProps
  extends Omit<React.ComponentProps<"p">, "style" | "className"> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
}

export const LabelText = ({ style, ...props }: LabelTextProps) => {
  return <p {...stylex.props(typeramp.label, style)} {...props} />;
};

interface SubLabelProps
  extends Omit<React.ComponentProps<"p">, "style" | "className"> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
  variant?: "default" | "secondary";
}

export const SubLabel = ({
  style,
  variant = "default",
  ...props
}: SubLabelProps) => {
  const contextValue = useMemo(
    () => ({
      style: [variant === "secondary" && gray.textDim, styles.underline],
    }),
    [variant],
  );

  return (
    <LinkContext value={contextValue}>
      <p
        {...stylex.props(
          typeramp.sublabel,
          variant === "secondary" && gray.textDim,
          style,
        )}
        {...props}
      />
    </LinkContext>
  );
};

export interface BlockquoteProps
  extends Omit<React.ComponentProps<"blockquote">, "style" | "className"> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
}

export const Blockquote = ({ style, ...props }: BlockquoteProps) => {
  return <blockquote {...stylex.props(styles.blockquote, style)} {...props} />;
};

export interface UnorderedListProps
  extends Omit<React.ComponentProps<"ul">, "style" | "className"> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
}

export const UnorderedList = ({ style, ...props }: UnorderedListProps) => {
  return <ul {...stylex.props(styles.unorderedList, style)} {...props} />;
};

export interface OrderedListProps
  extends Omit<React.ComponentProps<"ol">, "style" | "className"> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
}

export const OrderedList = ({ style, ...props }: OrderedListProps) => {
  return <ol {...stylex.props(styles.orderedList, style)} {...props} />;
};

export interface ListItemProps
  extends Omit<React.ComponentProps<"li">, "style" | "className"> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
}

export const ListItem = ({ style, ...props }: ListItemProps) => {
  return <li {...stylex.props(styles.listItem, style)} {...props} />;
};

export interface InlineCodeProps
  extends Omit<React.ComponentProps<"code">, "style" | "className"> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
}

export const InlineCode = ({ style, ...props }: InlineCodeProps) => {
  return (
    <code
      {...stylex.props(styles.inlineCode, gray.bgSecondary, style)}
      {...props}
    />
  );
};
