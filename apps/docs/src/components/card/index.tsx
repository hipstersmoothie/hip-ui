import * as stylex from "@stylexjs/stylex";
import { use } from "react";

import type { Size, StyleXComponentProps } from "../theme/types";

import { AspectRatio, AspectRatioImage } from "../aspect-ratio";
import { SizeContext } from "../context";
import { mediaQueries } from "../theme/media-queries.stylex";
import { radius } from "../theme/radius.stylex";
import { ui } from "../theme/semantic-color.stylex";
import { spacing } from "../theme/spacing.stylex";
import { fontFamily, fontSize, fontWeight } from "../theme/typography.stylex";

const styles = stylex.create({
  card: {
    // eslint-disable-next-line @stylexjs/valid-styles
    cornerShape: "squircle",
    borderRadius: {
      default: radius["lg"],
      [mediaQueries.supportsSquircle]: radius["3xl"],
    },
    gap: "var(--card-gap)",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    fontFamily: fontFamily["sans"],

    "--card-gap": {
      ":is([data-card-size=lg])": spacing["9"],
      ":is([data-card-size=md])": spacing["6"],
      ":is([data-card-size=sm])": spacing["2"],
    },
    "--card-x-padding": {
      ":is([data-card-size=lg])": spacing["9"],
      ":is([data-card-size=md])": spacing["6"],
      ":is([data-card-size=sm])": spacing["2"],
    },
    "--card-y-padding": {
      ":is([data-card-size=lg])": spacing["10"],
      ":is([data-card-size=md])": spacing["7"],
      ":is([data-card-size=sm])": spacing["2"],
    },
  },
  cardSection: {
    boxSizing: "border-box",
    paddingBottom: { ":last-child": "var(--card-y-padding)" },
    paddingLeft: "var(--card-x-padding)",
    paddingRight: "var(--card-x-padding)",
    paddingTop: { ":first-child": "var(--card-y-padding)" },
  },
  cardHeader: {
    gridTemplate: {
      default: `'title action'`,
      ":has([data-card-header-description])": `
        'title action'
        'description action'
      `,
    },
    gap: "var(--card-gap)",
    alignItems: "center",
    display: "grid",
  },
  cardHeaderAction: {
    gridArea: "action",
    gap: spacing["1"],
    display: "flex",
    justifyContent: "flex-end",
  },
  cardTitle: {
    gridArea: "title",
    fontSize: {
      ":is([data-card-size='lg'] *)": fontSize["2xl"],
      ":is([data-card-size='md'] *)": fontSize["xl"],
      ":is([data-card-size='sm'] *)": fontSize["lg"],
    },
    fontWeight: fontWeight["bold"],
  },
  cardDescription: {
    gridArea: "description",
    margin: 0,
    fontSize: fontSize["sm"],
    fontWeight: fontWeight["normal"],
  },
  cardBody: {
    gap: "var(--card-gap)",
    display: "flex",
    flexDirection: "column",
  },
  cardFooter: {
    gap: spacing["2"],
    display: "flex",
    justifyContent: "flex-end",
  },
  cardImage: {
    overflow: "hidden",
    borderBottomLeftRadius: { default: 0, ":last-child": radius.md },
    borderBottomRightRadius: { default: 0, ":last-child": radius.md },
    borderTopLeftRadius: { default: 0, ":first-child": radius.md },
    borderTopRightRadius: { default: 0, ":first-child": radius.md },
  },
});

export interface CardProps extends StyleXComponentProps<
  React.ComponentProps<"div">
> {
  size?: Size;
}

export const Card = ({ style, size: sizeProp, ...props }: CardProps) => {
  const size = sizeProp || use(SizeContext);

  return (
    <SizeContext value={size}>
      <div
        {...props}
        data-card-size={size}
        {...stylex.props(styles.card, ui.bgSubtle, ui.border, ui.text, style)}
      />
    </SizeContext>
  );
};

export interface CardHeaderProps extends StyleXComponentProps<
  React.ComponentProps<"div">
> {}

export const CardHeader = ({ style, ...props }: CardHeaderProps) => {
  return (
    <div
      {...props}
      {...stylex.props(styles.cardSection, styles.cardHeader, style)}
    />
  );
};

export interface CardTitleProps extends StyleXComponentProps<
  React.ComponentProps<"h2">
> {}

export const CardTitle = ({ style, ...props }: CardTitleProps) => {
  return <div {...props} {...stylex.props(styles.cardTitle, style)} />;
};

export interface CardDescriptionProps extends StyleXComponentProps<
  React.ComponentProps<"p">
> {}

export const CardDescription = ({ style, ...props }: CardDescriptionProps) => {
  return (
    <p
      {...props}
      data-card-header-description
      {...stylex.props(styles.cardDescription, ui.textDim, style)}
    />
  );
};

export interface CardHeaderActionProps extends StyleXComponentProps<
  React.ComponentProps<"div">
> {}

export const CardHeaderAction = ({
  style,
  ...props
}: CardHeaderActionProps) => {
  return <div {...props} {...stylex.props(styles.cardHeaderAction, style)} />;
};
export interface CardBodyProps extends StyleXComponentProps<
  React.ComponentProps<"div">
> {}

export const CardBody = ({ style, ...props }: CardBodyProps) => {
  return (
    <div
      {...props}
      {...stylex.props(styles.cardSection, styles.cardBody, style)}
    />
  );
};

export interface CardFooterProps extends StyleXComponentProps<
  React.ComponentProps<"div">
> {}

export const CardFooter = ({ style, ...props }: CardFooterProps) => {
  return (
    <div
      {...props}
      {...stylex.props(styles.cardSection, styles.cardFooter, style)}
    />
  );
};

export interface CardImageProps extends StyleXComponentProps<
  React.ComponentProps<"img">
> {
  aspectRatio?: number;
}

export const CardImage = ({ style, aspectRatio, ...props }: CardImageProps) => {
  return (
    <AspectRatio
      aspectRatio={aspectRatio}
      style={[
        styles.cardSection as unknown as stylex.StyleXStyles,
        styles.cardImage,
        style,
      ]}
    >
      <AspectRatioImage {...props} />
    </AspectRatio>
  );
};
