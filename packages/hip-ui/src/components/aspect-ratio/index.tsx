import * as stylex from "@stylexjs/stylex";

import { radius } from "../theme/radius.stylex";

const styles = stylex.create({
  aspectRatio: (aspectRatio: number) => ({
    aspectRatio,
  }),
  container: {
    overflow: "hidden",
    position: "relative",
  },
  rounded: {
    borderTopLeftRadius: radius["md"],
    borderBottomLeftRadius: radius["md"],
    borderTopRightRadius: radius["md"],
    borderBottomRightRadius: radius["md"],
  },
  imageContainer: {
    inset: 0,
    position: "absolute",
  },
  image: {
    height: "100%",
    objectFit: "cover",
    width: "100%",
  },
});

export interface AspectRatioProps
  extends Omit<React.ComponentProps<"div">, "style" | "className"> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
  aspectRatio?: number;
  rounded?: boolean;
}

export function AspectRatio({
  style,
  aspectRatio = 1,
  rounded = true,
  ...props
}: AspectRatioProps) {
  console.log(style);
  return (
    <div
      {...props}
      {...stylex.props(
        styles.container,
        styles.aspectRatio(aspectRatio),
        rounded && styles.rounded,
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
