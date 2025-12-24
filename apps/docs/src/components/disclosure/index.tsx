import * as stylex from "@stylexjs/stylex";
import { ChevronDown } from "lucide-react";
import { use } from "react";
import {
  Disclosure as AriaDisclosure,
  DisclosureProps as AriaDisclosureProps,
  DisclosurePanel as AriaDisclosurePanel,
  DisclosurePanelProps as AriaDisclosurePanelProps,
  Button,
  ButtonProps as AriaButtonProps,
} from "react-aria-components";

import { SizeContext } from "../context";
import { animationDuration } from "../theme/animations.stylex";
import { uiColor } from "../theme/color.stylex";
import { mediaQueries } from "../theme/media-queries.stylex";
import { radius } from "../theme/radius.stylex";
import { spacing } from "../theme/spacing.stylex";
import { Size, StyleXComponentProps } from "../theme/types";
import { fontFamily, fontSize, fontWeight } from "../theme/typography.stylex";

const styles = stylex.create({
  disclosure: {
    display: "flex",
    flexDirection: "column",
  },
  title: {
    // eslint-disable-next-line @stylexjs/valid-styles
    cornerShape: "squircle",
    padding: {
      ":is([data-size=lg] *)": `${spacing["4"]} ${spacing["4"]}`,
      ":is([data-size=md] *)": `${spacing["3"]} ${spacing["3"]}`,
      ":is([data-size=sm] *)": `${spacing["2"]} ${spacing["2"]}`,
    },
    borderRadius: {
      default: radius["md"],
      [mediaQueries.supportsSquircle]: radius["2xl"],
    },
    borderWidth: 0,
    gap: spacing["2"],
    alignItems: "center",
    backgroundColor: {
      default: "transparent",
      ":is([data-hovered=true])": uiColor.component2,
      ":is([data-pressed=true])": uiColor.component3,
    },
    color: uiColor.text1,
    display: "flex",
    fontFamily: fontFamily["sans"],
    fontSize: {
      ":is([data-size=lg] *)": fontSize["lg"],
      ":is([data-size=md] *)": fontSize["base"],
      ":is([data-size=sm] *)": fontSize["sm"],
    },
    fontWeight: fontWeight["medium"],
    justifyContent: "space-between",
    textAlign: "left",
    transitionDuration: animationDuration.fast,
    transitionProperty: {
      default: "background-color",
      [mediaQueries.reducedMotion]: "none",
    },
    transitionTimingFunction: "ease-in-out",
    width: "100%",
  },
  titleDisabled: {
    opacity: 0.5,
    pointerEvents: "none",
  },
  chevron: {
    transition: {
      default: "rotate 200ms ease-in-out",
      [mediaQueries.reducedMotion]: "none",
    },
    color: uiColor.text2,
    flexShrink: 0,
    rotate: {
      default: "0deg",
      ":is([aria-expanded=true] *)": "180deg",
    },
  },
  panel: {
    overflow: "clip",
    fontSize: {
      ":is([data-size=lg] *)": fontSize["lg"],
      ":is([data-size=md] *)": fontSize["base"],
      ":is([data-size=sm] *)": fontSize["sm"],
    },
    transitionDuration: {
      default: animationDuration.default,
      [mediaQueries.reducedMotion]: null,
    },
    transitionProperty: "height",
    transitionTimingFunction: "ease-in-out",
    height: "var(--disclosure-panel-height)",
  },
  panelContent: {
    padding: {
      ":is([data-size=lg] *)": `${spacing["4"]} ${spacing["4"]}`,
      ":is([data-size=md] *)": `${spacing["3"]} ${spacing["3"]}`,
      ":is([data-size=sm] *)": `${spacing["2"]} ${spacing["2"]}`,
    },
  },
});

export interface DisclosureProps extends StyleXComponentProps<
  Omit<AriaDisclosureProps, "children">
> {
  children: React.ReactNode;
  size?: Size;
}

export function Disclosure({
  children,
  style,
  size: sizeProp,
  ...props
}: DisclosureProps) {
  const size = sizeProp || use(SizeContext);

  return (
    <AriaDisclosure
      {...props}
      data-size={size}
      {...stylex.props(styles.disclosure, style)}
    >
      {children}
    </AriaDisclosure>
  );
}

export interface DisclosureTitleProps extends StyleXComponentProps<
  Omit<AriaButtonProps, "slot" | "children">
> {
  children: React.ReactNode;
}

export function DisclosureTitle({
  children,
  style,
  ...props
}: DisclosureTitleProps) {
  return (
    <Button
      {...props}
      slot="trigger"
      {...stylex.props(
        styles.title,
        props.isDisabled && styles.titleDisabled,
        style,
      )}
    >
      {children}
      <ChevronDown size={16} {...stylex.props(styles.chevron)} />
    </Button>
  );
}

export interface DisclosurePanelProps extends StyleXComponentProps<
  Omit<AriaDisclosurePanelProps, "children">
> {
  children: React.ReactNode;
  isQuiet?: boolean;
}

export function DisclosurePanel({
  children,
  style,
  ...props
}: DisclosurePanelProps) {
  return (
    <AriaDisclosurePanel {...props} {...stylex.props(styles.panel, style)}>
      <div {...stylex.props(styles.panelContent)}>{children}</div>
    </AriaDisclosurePanel>
  );
}
