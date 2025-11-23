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

const styles = stylex.create({
  link: {
    textDecoration: {
      default: "none",
      ":is([data-breadcrumb] *)": "none",
      ":is([data-hovered])": "underline",
    },
    color: {
      default: primaryColor.text2,
      ":is([data-breadcrumb] *)": uiColor.text1,
      ":is([data-breadcrumb][data-current] *)": uiColor.text2,
    },
    cursor: {
      default: "default",
      ":is([data-hovered])": "pointer",
    },
    fontFamily: fontFamily["sans"],
    fontWeight: fontWeight["normal"],
    textUnderlineOffset: spacing["1"],
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
