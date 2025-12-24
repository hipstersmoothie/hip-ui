import * as stylex from "@stylexjs/stylex";
import { use, useLayoutEffect, useState } from "react";
import {
  Button as AriaButton,
  ButtonProps as AriaButtonProps,
} from "react-aria-components";

import { SizeContext } from "../context";
import {
  animationDuration,
  animationTimingFunction,
} from "../theme/animations.stylex";
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
    position: "relative",

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
  buttonWrapper: {
    margin: 0,
    padding: 0,
    borderWidth: 0,
    backgroundColor: "transparent",
    cursor: "pointer",
    display: "inline-block",
  },
  overlay: {
    backgroundColor: uiColor.solid2,
    opacity: {
      default: 0,
      ":is([data-avatar-button][data-hovered] *)": 0.5,
    },
    pointerEvents: "none",
    position: "absolute",
    transitionDuration: animationDuration.default,
    transitionProperty: "opacity",
    transitionTimingFunction: animationTimingFunction.easeOut,
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
  },
});

export interface AvatarProps extends StyleXComponentProps<
  Omit<React.ComponentProps<"div">, "children">
> {
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
      <div {...stylex.props(styles.overlay)} />
    </div>
  );
}

export interface AvatarButtonProps
  extends
    StyleXComponentProps<AriaButtonProps>,
    Pick<AvatarProps, "size" | "src" | "alt" | "fallback"> {
  /** The style for the avatar. */
  avatarStyle?: AvatarProps["style"];
}

export function AvatarButton({
  avatarStyle,
  style,
  size: sizeProp,
  src,
  alt,
  fallback,
  ...buttonProps
}: AvatarButtonProps) {
  const size = sizeProp || use(SizeContext);
  const avatarProps: AvatarProps = {
    src,
    alt,
    fallback,
    size,
  };

  return (
    <AriaButton
      data-avatar-button
      {...buttonProps}
      {...stylex.props(styles.buttonWrapper, style)}
    >
      <Avatar {...avatarProps} size={size} style={avatarStyle} />
    </AriaButton>
  );
}
