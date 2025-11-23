"use client";

import * as stylex from "@stylexjs/stylex";
import { use } from "react";

import { SizeContext } from "../context";
import { ui } from "../theme/semantic-color.stylex";
import { spacing } from "../theme/spacing.stylex";
import { Size, StyleXComponentProps } from "../theme/types";
import { fontFamily, fontSize, fontWeight } from "../theme/typography.stylex";

const styles = stylex.create({
  emptyState: {
    "--empty-state-gap": {
      ":is([data-empty-state-size=lg])": spacing["8"],
      ":is([data-empty-state-size=md])": spacing["6"],
      ":is([data-empty-state-size=sm])": spacing["4"],
    },
    "--empty-state-image-size": {
      ":is([data-empty-state-size=lg])": "240px",
      ":is([data-empty-state-size=md])": "180px",
      ":is([data-empty-state-size=sm])": "120px",
    },
    gap: "var(--empty-state-gap)",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    fontFamily: fontFamily["sans"],
    justifyContent: "center",
    textAlign: "center",
  },
  image: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    objectFit: "contain",
    height: "var(--empty-state-image-size)",
    width: "var(--empty-state-image-size)",
  },
  title: {
    margin: 0,
    fontSize: {
      ":is([data-empty-state-size='lg'] *)": fontSize["2xl"],
      ":is([data-empty-state-size='md'] *)": fontSize["xl"],
      ":is([data-empty-state-size='sm'] *)": fontSize["lg"],
    },
    fontWeight: fontWeight["semibold"],
  },
  description: {
    margin: 0,
    fontSize: fontSize["sm"],
    fontWeight: fontWeight["normal"],
    maxWidth: {
      ":is([data-empty-state-size=lg])": "480px",
      ":is([data-empty-state-size=md])": "400px",
      ":is([data-empty-state-size=sm])": "320px",
    },
  },
  actions: {
    gap: spacing["2"],
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});

export interface EmptyStateProps
  extends StyleXComponentProps<React.ComponentProps<"div">> {
  /**
   * The size of the empty state component.
   * @default "md"
   */
  size?: Size;
}

export const EmptyState = ({
  style,
  size: sizeProp,
  ...props
}: EmptyStateProps) => {
  const size = sizeProp || use(SizeContext);

  return (
    <SizeContext value={size}>
      <div
        {...props}
        data-empty-state-size={size}
        {...stylex.props(styles.emptyState, style)}
      />
    </SizeContext>
  );
};

export interface EmptyStateImageProps
  extends StyleXComponentProps<
    Omit<React.ComponentProps<"div">, "src" | "alt">
  > {
  /**
   * The source URL of the image.
   * When provided, renders an img element instead of a div.
   */
  src?: string;
  /**
   * The alt text for the image.
   * Required when src is provided.
   */
  alt?: string;
}

export const EmptyStateImage = ({
  style,
  src,
  alt,
  children,
  ...props
}: EmptyStateImageProps) => {
  if (src) {
    return <img src={src} alt={alt} {...stylex.props(styles.image, style)} />;
  }

  return (
    <div {...props} {...stylex.props(styles.image, style)}>
      {children}
    </div>
  );
};

export interface EmptyStateTitleProps
  extends StyleXComponentProps<React.ComponentProps<"h2">> {}

export const EmptyStateTitle = ({ style, ...props }: EmptyStateTitleProps) => {
  return <div {...props} {...stylex.props(styles.title, ui.text, style)} />;
};

export interface EmptyStateDescriptionProps
  extends StyleXComponentProps<React.ComponentProps<"p">> {}

export const EmptyStateDescription = ({
  style,
  ...props
}: EmptyStateDescriptionProps) => {
  return (
    <p {...props} {...stylex.props(styles.description, ui.textDim, style)} />
  );
};

export interface EmptyStateActionsProps
  extends StyleXComponentProps<React.ComponentProps<"div">> {}

export const EmptyStateActions = ({
  style,
  ...props
}: EmptyStateActionsProps) => {
  return <div {...props} {...stylex.props(styles.actions, style)} />;
};
