import * as stylex from "@stylexjs/stylex";

import { Flex } from "../flex";
import { radius } from "../theme/radius.stylex";
import { gray } from "../theme/semantic-color.stylex";
import { spacing } from "../theme/spacing.stylex";
import { fontFamily, fontSize, fontWeight } from "../theme/typography.stylex";

const styles = stylex.create({
  card: {
    borderRadius: radius["lg"],
    gap: spacing["6"],
    display: "flex",
    flexDirection: "column",
    fontFamily: fontFamily["sans"],
    width: "fit-content",
  },
  cardHeader: {
    paddingBottom: { ":last-child": spacing["4"] },
    paddingLeft: spacing["4"],
    paddingRight: spacing["4"],
    paddingTop: spacing["5"],
  },
  cardTitle: {
    fontSize: fontSize["lg"],
    fontWeight: fontWeight["bold"],
  },
  cardDescription: {
    margin: 0,
    fontSize: fontSize["sm"],
    fontWeight: fontWeight["normal"],
  },
  cardBody: {
    paddingBottom: { ":last-child": spacing["4"] },
    paddingLeft: spacing["4"],
    paddingRight: spacing["4"],
  },
  cardFooter: {
    paddingBottom: spacing["5"],
    paddingLeft: spacing["4"],
    paddingRight: spacing["4"],

    gap: spacing["2"],
    display: "flex",
    justifyContent: "flex-end",
  },
});

export interface CardProps extends Omit<
  React.ComponentProps<"div">,
  "style" | "className"
> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
}

export const Card = ({ style, ...props }: CardProps) => {
  return (
    <div
      {...props}
      {...stylex.props(styles.card, gray.bgSubtle, gray.border, style)}
    />
  );
};

export interface CardHeaderProps extends Omit<
  React.ComponentProps<"div">,
  "style" | "className"
> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
}

export const CardHeader = ({ style, ...props }: CardHeaderProps) => {
  return (
    <Flex
      {...props}
      style={[styles.cardHeader as unknown as stylex.StyleXStyles, style]}
      direction="column"
      gap="3"
    />
  );
};

export interface CardTitleProps extends Omit<
  React.ComponentProps<"h2">,
  "style" | "className"
> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
}

export const CardTitle = ({ style, ...props }: CardTitleProps) => {
  return <div {...props} {...stylex.props(styles.cardTitle, style)} />;
};

export interface CardDescriptionProps extends Omit<
  React.ComponentProps<"p">,
  "style" | "className"
> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
}

export const CardDescription = ({ style, ...props }: CardDescriptionProps) => {
  return (
    <p
      {...props}
      {...stylex.props(styles.cardDescription, gray.textDim, style)}
    />
  );
};

export interface CardBodyProps extends Omit<
  React.ComponentProps<"div">,
  "style" | "className"
> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
}

export const CardBody = ({ style, ...props }: CardBodyProps) => {
  return <div {...props} {...stylex.props(styles.cardBody, style)} />;
};

export interface CardFooterProps extends Omit<
  React.ComponentProps<"div">,
  "style" | "className"
> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
}

export const CardFooter = ({ style, ...props }: CardFooterProps) => {
  return <div {...props} {...stylex.props(styles.cardFooter, style)} />;
};
