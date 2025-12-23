"use client";

import * as stylex from "@stylexjs/stylex";

import { spacing } from "../theme/spacing.stylex";
import { StyleXComponentProps } from "../theme/types";
import { primaryColor, uiColor } from "../theme/color.stylex";
import { primary } from "../theme/semantic-color.stylex";
import { containerBreakpoints } from "../theme/media-queries.stylex";

const styles = stylex.create({
  root: {
    "--page-content-max-width": "1280px",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    backgroundColor: uiColor.bg,
    containerType: "inline-size",
    width: "100cqw",
  },
  header: {
    flexShrink: 0,
  },
  page: {
    flexGrow: 1,
    minHeight: 0,
    paddingTop: {
      default: spacing["2"],
      [containerBreakpoints.sm]: spacing["6"],
    },
    paddingBottom: {
      default: spacing["10"],
      [containerBreakpoints.sm]: spacing["12"],
    },
    paddingLeft: {
      default: spacing["4"],
      [containerBreakpoints.sm]: spacing["8"],
    },
    paddingRight: {
      default: spacing["4"],
      [containerBreakpoints.sm]: spacing["8"],
    },
    maxWidth: "var(--page-content-max-width)",
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    boxSizing: "border-box",
  },
  footer: {
    flexShrink: 0,
  },
  hero: {
    width: "100%",
    boxSizing: "border-box",
    backgroundColor: primaryColor.solid1,
    color: primaryColor.textContrast,
    paddingTop: {
      default: spacing["6"],
      [containerBreakpoints.sm]: spacing["12"],
    },
    paddingBottom: {
      default: spacing["6"],
      [containerBreakpoints.sm]: spacing["12"],
    },
    paddingLeft: {
      default: spacing["4"],
      [containerBreakpoints.sm]: spacing["8"],
    },
    paddingRight: {
      default: spacing["4"],
      [containerBreakpoints.sm]: spacing["8"],
    },
  },
  heroContent: {
    maxWidth: "var(--page-content-max-width)",
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    boxSizing: "border-box",
  },
});

/**
 * Header layout root component. Main container for the page layout.
 */
export interface HeaderLayoutRootProps
  extends StyleXComponentProps<React.ComponentProps<"div">> {}

export const HeaderLayoutRoot = ({
  style,
  ...props
}: HeaderLayoutRootProps) => {
  return <div {...props} {...stylex.props(styles.root, style)} />;
};

/**
 * Header layout header component. Slot for header content.
 */
export interface HeaderLayoutHeaderProps
  extends StyleXComponentProps<React.ComponentProps<"header">> {}

export const HeaderLayoutHeader = ({
  style,
  ...props
}: HeaderLayoutHeaderProps) => {
  return <header {...props} {...stylex.props(styles.header, style)} />;
};

/**
 * Header layout page component. Slot for main page content.
 */
export interface HeaderLayoutPageProps
  extends StyleXComponentProps<React.ComponentProps<"main">> {}

export const HeaderLayoutPage = ({
  style,
  ...props
}: HeaderLayoutPageProps) => {
  return <main {...props} {...stylex.props(styles.page, style)} />;
};

/**
 * Header layout footer component. Slot for footer content.
 */
export interface HeaderLayoutFooterProps
  extends StyleXComponentProps<React.ComponentProps<"div">> {}

export const HeaderLayoutFooter = ({
  style,
  ...props
}: HeaderLayoutFooterProps) => {
  return <div {...props} {...stylex.props(styles.footer, style)} />;
};

/**
 * Header layout hero component. Full-width section with primary background color.
 * Content follows the max-width constraint.
 */
export interface HeaderLayoutHeroProps
  extends StyleXComponentProps<React.ComponentProps<"section">> {}

export const HeaderLayoutHero = ({
  style,
  children,
  ...props
}: HeaderLayoutHeroProps) => {
  return (
    <section {...props} {...stylex.props(styles.hero, style)}>
      <div {...stylex.props(styles.heroContent)}>{children}</div>
    </section>
  );
};

/**
 * Header layout component with subcomponents.
 */
export const HeaderLayout = {
  Root: HeaderLayoutRoot,
  Header: HeaderLayoutHeader,
  Page: HeaderLayoutPage,
  Footer: HeaderLayoutFooter,
  Hero: HeaderLayoutHero,
};
