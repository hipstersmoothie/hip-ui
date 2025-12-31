"use client";

import * as stylex from "@stylexjs/stylex";

import { primaryColor, uiColor } from "../theme/color.stylex";
import { containerBreakpoints } from "../theme/media-queries.stylex";
import { spacing } from "../theme/spacing.stylex";
import { StyleXComponentProps } from "../theme/types";

const styles = stylex.create({
  root: {
    backgroundColor: uiColor.bg,
    containerType: "inline-size",
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    width: "100cqw",
  },
  rootMaxWidth: (maxWidth: string | undefined) => ({
    "--page-content-max-width": maxWidth || "1280px",
  }),
  header: {
    flexShrink: 0,
  },
  page: {
    boxSizing: "border-box",
    flexGrow: 1,
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "var(--page-content-max-width)",
    minHeight: 0,
    paddingBottom: {
      default: spacing["10"],
      [containerBreakpoints.sm]: spacing["12"],
      ":has(> [data-sidebar-layout=true])": "0 !important",
    },
    paddingLeft: {
      default: spacing["4"],
      [containerBreakpoints.sm]: spacing["8"],
      ":has(> [data-sidebar-layout=true])": "0 !important",
    },
    paddingRight: {
      default: spacing["4"],
      [containerBreakpoints.sm]: spacing["8"],
      ":has(> [data-sidebar-layout=true])": "0 !important",
    },
    paddingTop: {
      default: spacing["2"],
      [containerBreakpoints.sm]: spacing["6"],
      ":has(> [data-sidebar-layout=true])": "0 !important",
    },
    width: "100%",
  },
  footer: {
    flexShrink: 0,
  },
  hero: {
    backgroundColor: primaryColor.solid1,
    boxSizing: "border-box",
    color: primaryColor.textContrast,
    paddingBottom: {
      default: spacing["6"],
      [containerBreakpoints.sm]: spacing["12"],
    },
    paddingTop: {
      default: spacing["6"],
      [containerBreakpoints.sm]: spacing["12"],
    },
    width: "100%",
  },
  heroContent: {
    boxSizing: "border-box",
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "var(--page-content-max-width)",
    paddingLeft: {
      default: spacing["4"],
      [containerBreakpoints.sm]: spacing["8"],
    },
    paddingRight: {
      default: spacing["4"],
      [containerBreakpoints.sm]: spacing["8"],
    },
    width: "100%",
  },
});

/**
 * Header layout root component. Main container for the page layout.
 */
export interface HeaderLayoutRootProps extends StyleXComponentProps<
  React.ComponentProps<"div">
> {
  maxWidth?: string;
}

export const HeaderLayoutRoot = ({
  style,
  maxWidth,
  ...props
}: HeaderLayoutRootProps) => {
  return (
    <div
      {...props}
      {...stylex.props(styles.root, styles.rootMaxWidth(maxWidth), style)}
      data-header-layout={true}
    />
  );
};

/**
 * Header layout header component. Slot for header content.
 */
export interface HeaderLayoutHeaderProps extends StyleXComponentProps<
  React.ComponentProps<"header">
> {}

export const HeaderLayoutHeader = ({
  style,
  ...props
}: HeaderLayoutHeaderProps) => {
  return <header {...props} {...stylex.props(styles.header, style)} />;
};

/**
 * Header layout page component. Slot for main page content.
 */
export interface HeaderLayoutPageProps extends StyleXComponentProps<
  React.ComponentProps<"main">
> {}

export const HeaderLayoutPage = ({
  style,
  ...props
}: HeaderLayoutPageProps) => {
  return <main {...props} {...stylex.props(styles.page, style)} />;
};

/**
 * Header layout footer component. Slot for footer content.
 */
export interface HeaderLayoutFooterProps extends StyleXComponentProps<
  React.ComponentProps<"div">
> {}

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
export interface HeaderLayoutHeroProps extends StyleXComponentProps<
  React.ComponentProps<"section">
> {}

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
// eslint-disable-next-line react-refresh/only-export-components
export const HeaderLayout = {
  Root: HeaderLayoutRoot,
  Header: HeaderLayoutHeader,
  Page: HeaderLayoutPage,
  Footer: HeaderLayoutFooter,
  Hero: HeaderLayoutHero,
};
