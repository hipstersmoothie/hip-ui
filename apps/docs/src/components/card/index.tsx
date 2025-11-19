import * as stylex from "@stylexjs/stylex";
import { use } from "react";

import { AspectRatio, AspectRatioImage } from "../aspect-ratio";
import { SizeContext } from "../context";
import { radius } from "../theme/radius.stylex";
import { ui } from "../theme/semantic-color.stylex";
import { spacing } from "../theme/spacing.stylex";
import { Size, StyleXComponentProps } from "../theme/types";
import { fontFamily, fontSize, fontWeight } from "../theme/typography.stylex";

const styles = stylex.create({
  card: {
    borderRadius: {
      default: radius["lg"],
      "@supports (corner-shape: squircle)": radius["3xl"],
    },
    cornerShape: "squircle",
    display: "flex",
    flexDirection: "column",
    fontFamily: fontFamily["sans"],
    gap: "var(--card-gap)",
    overflow: "hidden",

    "--card-gap": {
      ":is([data-card-size=sm])": spacing["2"],
      ":is([data-card-size=md])": spacing["6"],
      ":is([data-card-size=lg])": spacing["9"],
    },
    "--card-x-padding": {
      ":is([data-card-size=sm])": spacing["2"],
      ":is([data-card-size=md])": spacing["6"],
      ":is([data-card-size=lg])": spacing["9"],
    },
    "--card-y-padding": {
      ":is([data-card-size=sm])": spacing["2"],
      ":is([data-card-size=md])": spacing["7"],
      ":is([data-card-size=lg])": spacing["10"],
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
    alignItems: "center",
    display: "grid",
    gap: "var(--card-gap)",
    gridTemplate: {
      default: `'title action'`,
      ":has([data-card-header-description])": `
        'title action'
        'description action'
      `,
    },
  },
  cardHeaderAction: {
    display: "flex",
    gap: spacing["1"],
    gridArea: "action",
    justifyContent: "flex-end",
  },
  cardTitle: {
    fontSize: {
      ":is([data-card-size='sm'] *)": fontSize["lg"],
      ":is([data-card-size='md'] *)": fontSize["xl"],
      ":is([data-card-size='lg'] *)": fontSize["2xl"],
    },
    fontWeight: fontWeight["bold"],
    gridArea: "title",
  },
  cardDescription: {
    fontSize: fontSize["sm"],
    fontWeight: fontWeight["normal"],
    gridArea: "description",
    margin: 0,
  },
  cardBody: {
    display: "flex",
    flexDirection: "column",
    gap: "var(--card-gap)",
  },
  cardFooter: {
    display: "flex",
    gap: spacing["2"],
    justifyContent: "flex-end",
  },
  cardImage: {
    borderBottomLeftRadius: { default: 0, ":last-child": radius.md },
    borderBottomRightRadius: { default: 0, ":last-child": radius.md },
    borderTopLeftRadius: { default: 0, ":first-child": radius.md },
    borderTopRightRadius: { default: 0, ":first-child": radius.md },
    overflow: "hidden",
  },
});

export interface CardProps
  extends StyleXComponentProps<React.ComponentProps<"div">> {
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

export interface CardHeaderProps
  extends StyleXComponentProps<React.ComponentProps<"div">> {}

export const CardHeader = ({ style, ...props }: CardHeaderProps) => {
  return (
    <div
      {...props}
      {...stylex.props(styles.cardSection, styles.cardHeader, style)}
    />
  );
};

export interface CardTitleProps
  extends StyleXComponentProps<React.ComponentProps<"h2">> {}

export const CardTitle = ({ style, ...props }: CardTitleProps) => {
  return <div {...props} {...stylex.props(styles.cardTitle, style)} />;
};

export interface CardDescriptionProps
  extends StyleXComponentProps<React.ComponentProps<"p">> {}

export const CardDescription = ({ style, ...props }: CardDescriptionProps) => {
  return (
    <p
      {...props}
      data-card-header-description
      {...stylex.props(styles.cardDescription, ui.textDim, style)}
    />
  );
};

export interface CardHeaderActionProps
  extends StyleXComponentProps<React.ComponentProps<"div">> {}

export const CardHeaderAction = ({
  style,
  ...props
}: CardHeaderActionProps) => {
  return <div {...props} {...stylex.props(styles.cardHeaderAction, style)} />;
};
export interface CardBodyProps
  extends StyleXComponentProps<React.ComponentProps<"div">> {}

export const CardBody = ({ style, ...props }: CardBodyProps) => {
  return (
    <div
      {...props}
      {...stylex.props(styles.cardSection, styles.cardBody, style)}
    />
  );
};

export interface CardFooterProps
  extends StyleXComponentProps<React.ComponentProps<"div">> {}

export const CardFooter = ({ style, ...props }: CardFooterProps) => {
  return (
    <div
      {...props}
      {...stylex.props(styles.cardSection, styles.cardFooter, style)}
    />
  );
};

export interface CardImageProps
  extends StyleXComponentProps<React.ComponentProps<"img">> {
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
