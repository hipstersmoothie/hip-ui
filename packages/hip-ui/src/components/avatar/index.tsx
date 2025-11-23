import * as stylex from "@stylexjs/stylex";
import { use, useLayoutEffect, useState } from "react";

import { SizeContext } from "../context";
import { uiColor } from "../theme/color.stylex";
import { mediaQueries } from "../theme/media-queries.stylex";
import { radius } from "../theme/radius.stylex";
import { spacing } from "../theme/spacing.stylex";
import { Size, StyleXComponentProps } from "../theme/types";
import {
  fontSize,
  fontWeight,
  lineHeight,
  fontFamily,
} from "../theme/typography.stylex";

const styles = stylex.create({
  wrapper: {
    borderColor: uiColor.border1,
    borderStyle: "solid",
    borderWidth: 1,
    overflow: "hidden",
    alignItems: "center",
    backgroundColor: uiColor.component1,
    display: "flex",
    justifyContent: "center",

    // eslint-disable-next-line @stylexjs/valid-styles
    cornerShape: "squircle",
  },
  wrapperSm: {
    borderRadius: {
      default: radius["sm"],
      [mediaQueries.supportsSquircle]: radius["3xl"],
    },
    height: spacing["6"],
    width: spacing["6"],
  },
  wrapperMd: {
    borderRadius: {
      default: radius["md"],
      [mediaQueries.supportsSquircle]: radius["3xl"],
    },
    height: spacing["8"],
    width: spacing["8"],
  },
  wrapperLg: {
    borderRadius: {
      default: radius["lg"],
      [mediaQueries.supportsSquircle]: radius["3xl"],
    },
    height: spacing["10"],
    width: spacing["10"],
  },
  wrapperXl: {
    borderRadius: {
      default: radius["xl"],
      [mediaQueries.supportsSquircle]: radius["3xl"],
    },
    height: spacing["14"],
    width: spacing["14"],
  },
  image: {
    objectFit: "cover",
    objectPosition: "center",
    height: "100%",
    width: "100%",
  },
  fallback: {
    color: uiColor.text1,
    fontFamily: fontFamily["sans"],
    fontWeight: fontWeight["medium"],
    lineHeight: lineHeight["none"],
  },
  fallbackSm: {
    fontSize: fontSize["sm"],
  },
  fallbackMd: {
    fontSize: fontSize["base"],
  },
  fallbackLg: {
    fontSize: fontSize["lg"],
  },
  fallbackXl: {
    fontSize: fontSize["xl"],
  },
});

export interface AvatarProps
  extends StyleXComponentProps<Omit<React.ComponentProps<"div">, "children">> {
  /** The source of the image. */
  src?: string;
  /** The alt text of the image. */
  alt?: string;
  /** The fallback content of the avatar. */
  fallback: React.ReactNode;
  /** The size of the avatar. */
  size?: Size | "xl";
}

export function Avatar({
  style,
  alt = "",
  src,
  fallback,
  size: sizeProp,
  ...props
}: AvatarProps) {
  const size = sizeProp || use(SizeContext);
  const [imageLoaded, setImageLoaded] = useState<
    "loading" | "loaded" | "error"
  >("loading");

  useLayoutEffect(() => {
    if (!src) return;

    const onLoad = () => setImageLoaded("loaded");
    const onError = () => setImageLoaded("error");

    const image = new Image();

    image.addEventListener("load", onLoad);
    image.addEventListener("error", onError);

    image.src = src;

    return () => {
      image.removeEventListener("load", onLoad);
      image.removeEventListener("error", onError);
    };
  }, [src]);

  return (
    <div
      {...props}
      {...stylex.props(
        styles.wrapper,
        size === "sm" && styles.wrapperSm,
        size === "md" && styles.wrapperMd,
        size === "lg" && styles.wrapperLg,
        size === "xl" && styles.wrapperXl,
        style,
      )}
    >
      {imageLoaded === "loaded" && (
        <img {...stylex.props(styles.image)} src={src} alt={alt} />
      )}
      {(!src || imageLoaded === "error") && (
        <div
          {...stylex.props(
            styles.fallback,
            size === "sm" && styles.fallbackSm,
            size === "md" && styles.fallbackMd,
            size === "lg" && styles.fallbackLg,
            size === "xl" && styles.fallbackXl,
          )}
        >
          {fallback}
        </div>
      )}
    </div>
  );
}
