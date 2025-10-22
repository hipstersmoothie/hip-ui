import * as stylex from "@stylexjs/stylex";
import { use } from "react";

import { AspectRatio, AspectRatioImage } from "../aspect-ratio";
import { SizeContext } from "../context";
import { radius } from "../theme/radius.stylex";
import { ui } from "../theme/semantic-color.stylex";
import { spacing } from "../theme/spacing.stylex";
import { Size } from "../theme/types";
import { fontFamily, fontSize, fontWeight } from "../theme/typography.stylex";

const styles = stylex.create({
  card: {
    borderRadius: radius["lg"],
    display: "flex",
    flexDirection: "column",
    fontFamily: fontFamily["sans"],
    gap: "var(--card-gap)",
  },
  smCard: {
    "--card-gap": spacing["2"],
    "--card-x-padding": spacing["2"],
    "--card-y-padding": spacing["2"],
  },
  mdCard: {
    "--card-gap": spacing["6"],
    "--card-x-padding": spacing["6"],
    "--card-y-padding": spacing["7"],
  },
  lgCard: {
    "--card-gap": spacing["9"],
    "--card-x-padding": spacing["9"],
    "--card-y-padding": spacing["10"],
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
    gap: spacing["2"],
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
});

export interface CardProps
  extends Omit<React.ComponentProps<"div">, "style" | "className"> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
  size?: Size;
}

export const Card = ({ style, size: sizeProp, ...props }: CardProps) => {
  const size = sizeProp || use(SizeContext);

  return (
    <SizeContext value={size}>
      <div
        {...props}
        data-card-size={size}
        {...stylex.props(
          styles.card,
          ui.bgSubtle,
          ui.border,
          ui.text,
          style,
          styles[`${size}Card`],
        )}
      />
    </SizeContext>
  );
};

export interface CardHeaderProps
  extends Omit<React.ComponentProps<"div">, "style" | "className"> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
}

export const CardHeader = ({ style, ...props }: CardHeaderProps) => {
  return (
    <div
      {...props}
      {...stylex.props(styles.cardSection, styles.cardHeader, style)}
    />
  );
};

export interface CardTitleProps
  extends Omit<React.ComponentProps<"h2">, "style" | "className"> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
}

export const CardTitle = ({ style, ...props }: CardTitleProps) => {
  return <div {...props} {...stylex.props(styles.cardTitle, style)} />;
};

export interface CardDescriptionProps
  extends Omit<React.ComponentProps<"p">, "style" | "className"> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
}

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
  extends Omit<React.ComponentProps<"div">, "style" | "className"> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
}

export const CardHeaderAction = ({
  style,
  ...props
}: CardHeaderActionProps) => {
  return <div {...props} {...stylex.props(styles.cardHeaderAction, style)} />;
};
export interface CardBodyProps
  extends Omit<React.ComponentProps<"div">, "style" | "className"> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
}

export const CardBody = ({ style, ...props }: CardBodyProps) => {
  return (
    <div
      {...props}
      {...stylex.props(styles.cardSection, styles.cardBody, style)}
    />
  );
};

export interface CardFooterProps
  extends Omit<React.ComponentProps<"div">, "style" | "className"> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
}

export const CardFooter = ({ style, ...props }: CardFooterProps) => {
  return (
    <div
      {...props}
      {...stylex.props(styles.cardSection, styles.cardFooter, style)}
    />
  );
};

export interface CardImageProps
  extends Omit<React.ComponentProps<"img">, "style" | "className"> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
  aspectRatio?: number;
}

export const CardImage = ({ style, aspectRatio, ...props }: CardImageProps) => {
  return (
    <AspectRatio
      aspectRatio={aspectRatio}
      style={[styles.cardSection as unknown as stylex.StyleXStyles, style]}
    >
      <AspectRatioImage {...props} />
    </AspectRatio>
  );
};
