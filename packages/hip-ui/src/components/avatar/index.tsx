import * as stylex from "@stylexjs/stylex";
import { use, useLayoutEffect, useState } from "react";

import { SizeContext } from "../context";
import { radius } from "../theme/radius.stylex";
import { uiColor } from "../theme/semantic-color.stylex";
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
    borderRadius: {
      ":is([data-size=lg])": {
        default: radius["lg"],
        "@supports (corner-shape: squircle)": radius["3xl"],
      },
      ":is([data-size=md])": {
        default: radius["md"],
        "@supports (corner-shape: squircle)": radius["3xl"],
      },
      ":is([data-size=sm])": {
        default: radius["sm"],
        "@supports (corner-shape: squircle)": radius["3xl"],
      },
      ":is([data-size=xl])": {
        default: radius["xl"],
        "@supports (corner-shape: squircle)": radius["3xl"],
      },
    },
    height: {
      ":is([data-size=lg])": spacing["10"],
      ":is([data-size=md])": spacing["8"],
      ":is([data-size=sm])": spacing["6"],
      ":is([data-size=xl])": spacing["14"],
    },
    width: {
      ":is([data-size=lg])": spacing["10"],
      ":is([data-size=md])": spacing["8"],
      ":is([data-size=sm])": spacing["6"],
      ":is([data-size=xl])": spacing["14"],
    },
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

    fontSize: {
      ":is([data-size=lg] *)": fontSize["lg"],
      ":is([data-size=md] *)": fontSize["base"],
      ":is([data-size=sm] *)": fontSize["sm"],
      ":is([data-size=xl] *)": fontSize["xl"],
    },
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
    <div {...props} data-size={size} {...stylex.props(styles.wrapper, style)}>
      {imageLoaded === "loaded" && (
        <img {...stylex.props(styles.image)} src={src} alt={alt} />
      )}
      {(!src || imageLoaded === "error") && (
        <div {...stylex.props(styles.fallback)}>{fallback}</div>
      )}
    </div>
  );
}
