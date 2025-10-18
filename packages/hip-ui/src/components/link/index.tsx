import * as stylex from "@stylexjs/stylex";
import { use } from "react";
import {
  LinkProps as AriaLinkProps,
  Link as AriaLink,
} from "react-aria-components";

import { blue } from "../theme/colors.stylex";
import { fontFamily, fontWeight } from "../theme/typography.stylex";
import { LinkContext } from "./link-context";

const styles = stylex.create({
  link: {
    color: {
      default: blue.text2,
      ":visited": blue.text1,
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
  const context = use(LinkContext);

  return (
    <AriaLink {...props} {...stylex.props(styles.link, context.style, style)} />
  );
}
