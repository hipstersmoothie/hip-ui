import * as stylex from "@stylexjs/stylex";

import { Flex } from "../flex";
import { radius } from "../theme/radius.stylex";
import { gray } from "../theme/semantic-color.stylex";
import { spacing } from "../theme/spacing.stylex";
import { fontFamily, fontSize, fontWeight } from "../theme/typography.stylex";

const styles = stylex.create({
  card: {
    borderRadius: radius["lg"],
    display: "flex",
    flexDirection: "column",
    fontFamily: fontFamily["sans"],
    gap: spacing["6"],
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
    fontSize: fontSize["sm"],
    fontWeight: fontWeight["normal"],
    margin: 0,
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

    display: "flex",
    gap: spacing["2"],
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
