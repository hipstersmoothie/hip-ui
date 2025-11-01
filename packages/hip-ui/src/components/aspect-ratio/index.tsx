import * as stylex from "@stylexjs/stylex";

import { radius } from "../theme/radius.stylex";
import { StyleXComponentProps } from "../theme/types";

const styles = stylex.create({
  aspectRatio: (aspectRatio: number) => ({
    aspectRatio,
  }),
  container: {
    overflow: "hidden",
    position: "relative",
  },
  rounded: {
    borderBottomLeftRadius: radius["md"],
    borderBottomRightRadius: radius["md"],
    borderTopLeftRadius: radius["md"],
    borderTopRightRadius: radius["md"],
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
  extends StyleXComponentProps<React.ComponentProps<"div">> {
  aspectRatio?: number;
  rounded?: boolean;
}

export function AspectRatio({
  style,
  aspectRatio = 1,
  rounded = true,
  ...props
}: AspectRatioProps) {
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
  extends StyleXComponentProps<React.ComponentProps<"img">> {}

export function AspectRatioImage({ style, ...props }: AspectRatioImageProps) {
  return (
    <div {...stylex.props(styles.imageContainer, style)}>
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img {...props} {...stylex.props(styles.image, style)} />
    </div>
  );
}
