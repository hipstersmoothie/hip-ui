import * as stylex from "@stylexjs/stylex";
import { use } from "react";
import {
  LinkProps as AriaLinkProps,
  Link as AriaLink,
} from "react-aria-components";

import { primaryColor, uiColor } from "../theme/color.stylex";
import { spacing } from "../theme/spacing.stylex";
import { StyleXComponentProps } from "../theme/types";
import { fontFamily, fontWeight } from "../theme/typography.stylex";
import { LinkContext } from "./link-context";
import { pointInPolygon } from "tldraw";

const styles = stylex.create({
  link: {
    textDecoration: "none",
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    gap: spacing["2"],
    "--underline-opacity": {
      default: 0,
      ":is([data-breadcrumb] *)": 0,
      ":is([data-hovered])": 1,
      ":is([aria-expanded=true])": 1,
    },
    color: {
      default: primaryColor.text2,
      ":is([data-breadcrumb] *)": uiColor.text1,
      ":is([data-breadcrumb][data-current] *)": uiColor.text2,
    },
    cursor: "pointer",
    fontFamily: fontFamily["sans"],
    fontWeight: fontWeight["normal"],

    ":is(*) svg": {
      width: "1.2em",
      height: "1.2em",
    },

    "::after": {
      opacity: "var(--underline-opacity)",
      content: '""',
      display: "block",
      width: "100%",
      height: "2px",
      backgroundColor: "currentColor",
      position: "absolute",
      bottom: `calc(${spacing["1"]} * -1)`,
      left: 0,
      right: 0,
      pointerEvents: "none",
    },
  },
});

export interface LinkProps
  extends StyleXComponentProps<Omit<AriaLinkProps, "children">> {
  children: React.ReactNode;
}

export function Link({ style, ...props }: LinkProps) {
  const context = use(LinkContext);

  return (
    <AriaLink {...props} {...stylex.props(styles.link, context.style, style)} />
  );
}
