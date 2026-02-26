import * as stylex from "@stylexjs/stylex";
import { use, useLayoutEffect, useState } from "react";

import type { Size } from "../types";

import { SizeContext } from "../context";
import { slate } from "../theme/colors.stylex";
import { radius } from "../theme/radius.stylex";
import { spacing } from "../theme/spacing.stylex";
import {
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
} from "../theme/typography.stylex";

const styles = stylex.create({
  wrapper: {
    borderColor: slate.border1,
    borderStyle: "solid",
    borderWidth: 1,
    overflow: "hidden",
    alignItems: "center",
    backgroundColor: slate.component1,
    display: "flex",
    justifyContent: "center",
  },
  sm: {
    borderRadius: radius["sm"],
    height: spacing["6"],
    width: spacing["6"],
  },
  md: {
    borderRadius: radius["md"],
    height: spacing["8"],
    width: spacing["8"],
  },
  lg: {
    borderRadius: radius["lg"],
    height: spacing["10"],
    width: spacing["10"],
  },
  xl: {
    borderRadius: radius["xl"],
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
    color: slate.text1,
    fontFamily: fontFamily["sans"],
    fontWeight: fontWeight["medium"],
    lineHeight: lineHeight["none"],
  },
  smFallback: {
    fontSize: fontSize["sm"],
  },
  mdFallback: {
    fontSize: fontSize["base"],
  },
  lgFallback: {
    fontSize: fontSize["lg"],
  },
  xlFallback: {
    fontSize: fontSize["xl"],
  },
});

export interface AvatarProps extends Omit<
  React.ComponentProps<"div">,
  "style" | "className" | "children"
> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
  src: string;
  alt?: string;
  fallback: React.ReactNode;
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
    <div {...props} {...stylex.props(styles.wrapper, styles[size], style)}>
      {imageLoaded === "loaded" && (
        <img {...stylex.props(styles.image)} src={src} alt={alt} />
      )}
      {(!src || imageLoaded === "error") && (
        <div {...stylex.props(styles.fallback, styles[`${size}Fallback`])}>
          {fallback}
        </div>
      )}
    </div>
  );
}
