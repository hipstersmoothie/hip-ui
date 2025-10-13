import { LinkProps as AriaLinkProps } from "react-aria-components";
import { Link as AriaLink } from "react-aria-components";
import * as stylex from "@stylexjs/stylex";

import { blue } from "../theme/colors.stylex";
import { fontFamily, fontWeight } from "../theme/typography.stylex";

const styles = stylex.create({
  link: {
    color: {
      default: blue[10],
      ":visited": blue[11],
    },
    cursor: "pointer",
    fontFamily: fontFamily["sans"],
    fontWeight: fontWeight["normal"],
    textDecoration: {
      default: "none",
      ":hover": "underline",
    },
  },
});

export interface LinkProps extends Omit<AriaLinkProps, "style" | "className"> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
}

export function Link({ style, ...props }: LinkProps) {
  return <AriaLink {...props} {...stylex.props(styles.link, style)} />;
}
