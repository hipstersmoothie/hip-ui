import * as stylex from "@stylexjs/stylex";
import {
  fontFamily,
  fontSize,
  lineHeight,
  typeramp,
} from "../theme/typography.stylex";
import { gray } from "../theme/semantic-color.stylex";
import { spacing } from "../theme/spacing.stylex";
import { radius } from "../theme/radius.stylex";

const styles = stylex.create({
  blockquote: {
    borderLeftWidth: 1,
    borderLeftStyle: "solid",
    borderLeftColor: gray.borderDim,
    paddingLeft: spacing["4"],
    marginLeft: spacing["2"],
    marginTop: 0,
    marginBottom: 0,
    marginRight: 0,
    color: gray.textDim,
    fontFamily: fontFamily["serif"],
  },
  unorderedList: {
    listStyleType: "disc",
    paddingLeft: spacing["8"],
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: spacing["1"],
  },
  orderedList: {
    listStyleType: "decimal",
    paddingLeft: spacing["8"],
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: spacing["1"],
  },
  listItem: {
    paddingLeft: spacing["1"],
    fontFamily: fontFamily["sans"],
    fontSize: fontSize["base"],
    lineHeight: lineHeight["base"],
  },
  inlineCode: {
    padding: spacing["1"],
    borderRadius: radius["sm"],
    fontSize: "0.9em",
  },
});

export interface Heading1Props
  extends Omit<React.ComponentProps<"h1">, "style" | "className"> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
}

export const Heading1 = ({ style, ...props }: Heading1Props) => {
  return <h1 {...stylex.props(typeramp.heading1, style)} {...props} />;
};

export interface Heading2Props
  extends Omit<React.ComponentProps<"h2">, "style" | "className"> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
}

export const Heading2 = ({ style, ...props }: Heading2Props) => {
  return <h2 {...stylex.props(typeramp.heading2, style)} {...props} />;
};

export interface Heading3Props
  extends Omit<React.ComponentProps<"h3">, "style" | "className"> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
}

export const Heading3 = ({ style, ...props }: Heading3Props) => {
  return <h3 {...stylex.props(typeramp.heading3, style)} {...props} />;
};

export interface Heading4Props
  extends Omit<React.ComponentProps<"h4">, "style" | "className"> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
}

export const Heading4 = ({ style, ...props }: Heading4Props) => {
  return <h4 {...stylex.props(typeramp.heading4, style)} {...props} />;
};

export interface BodyProps
  extends Omit<React.ComponentProps<"p">, "style" | "className"> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
}

export const Body = ({ style, ...props }: BodyProps) => {
  return <p {...stylex.props(typeramp.body, style)} {...props} />;
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
