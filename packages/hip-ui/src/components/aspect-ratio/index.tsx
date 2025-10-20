import * as stylex from "@stylexjs/stylex";

import { radius } from "../theme/radius.stylex";

const styles = stylex.create({
  aspectRatio: (aspectRatio: number) => ({
    aspectRatio,
  }),
  container: {
    position: "relative",
  },
  imageContainer: {
    inset: 0,
    position: "absolute",
  },
  image: {
    borderRadius: radius["md"],
    height: "100%",
    objectFit: "cover",
    overflow: "hidden",
    width: "100%",
  },
});

export interface AspectRatioProps
  extends Omit<React.ComponentProps<"div">, "style" | "className"> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
  aspectRatio?: number;
}

export function AspectRatio({
  style,
  aspectRatio = 1,
  ...props
}: AspectRatioProps) {
  return (
    <div
      {...props}
      {...stylex.props(
        styles.container,
        styles.aspectRatio(aspectRatio),
        style,
      )}
    />
  );
}

export interface AspectRatioImageProps
  extends Omit<React.ComponentProps<"img">, "style" | "className"> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
}

export function AspectRatioImage({ style, ...props }: AspectRatioImageProps) {
  return (
    <div {...stylex.props(styles.imageContainer, style)}>
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img {...props} {...stylex.props(styles.image, style)} />
    </div>
  );
}
