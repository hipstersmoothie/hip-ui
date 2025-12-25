"use client";

import * as stylex from "@stylexjs/stylex";
import { ArrowRightFromLineIcon } from "lucide-react";

import { Drawer } from "../drawer";
import { IconButton } from "../icon-button";
import { uiColor } from "../theme/color.stylex";
import { containerBreakpoints } from "../theme/media-queries.stylex";
import { spacing } from "../theme/spacing.stylex";
import { StyleXComponentProps } from "../theme/types";

const styles = stylex.create({
  wrapper: {
    backgroundColor: uiColor.bgSubtle,
    position: "relative",
    width: "100cqw",
  },
  root: {
    "--page-content-max-width": "1600px",
    containerType: "inline-size",
    display: "flex",
    flexDirection: "row",
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "var(--page-content-max-width)",
    minHeight: "100vh",
    width: "100%",
  },
  sidebar: {
    overflow: "auto",
    overscrollBehavior: "contain",
    boxSizing: "border-box",
    display: {
      default: "none",
      [containerBreakpoints.md]: "block",
    },
    flexShrink: 0,
    position: "sticky",
    borderRightColor: uiColor.border1,
    borderRightStyle: "solid",
    borderRightWidth: 1,
    height: "100vh",
    overflowX: "hidden",
    overflowY: "auto",
    top: 0,
  },
  drawer: {
    display: {
      default: "flex",
      [containerBreakpoints.md]: "none",
    },
    position: "absolute",
    left: spacing["2"],
    top: spacing["2"],
  },
  page: {
    backgroundColor: uiColor.bg,
    boxSizing: "border-box",
    containerType: "inline-size",
    flexGrow: 1,
    minHeight: 0,
    minWidth: 0,
    paddingBottom: {
      default: spacing["10"],
      [containerBreakpoints.sm]: spacing["20"],
      ":has(> [data-header-layout=true])": "0 !important",
    },
    paddingLeft: {
      default: spacing["4"],
      [containerBreakpoints.sm]: spacing["16"],
      ":has(> [data-header-layout=true])": "0 !important",
    },
    paddingRight: {
      default: spacing["4"],
      [containerBreakpoints.sm]: spacing["16"],
      ":has(> [data-header-layout=true])": "0 !important",
    },
    paddingTop: {
      default: spacing["2"],
      [containerBreakpoints.sm]: spacing["10"],
      ":has(> [data-header-layout=true])": "0 !important",
    },
    width: "100%",
  },
});

/**
 * Sidebar layout root component. Main container for the sidebar layout.
 */
export interface SidebarLayoutRootProps extends StyleXComponentProps<
  React.ComponentProps<"div">
> {}

export const SidebarLayoutRoot = ({
  style,
  children,
  ...props
}: SidebarLayoutRootProps) => {
  return (
    <div {...props} {...stylex.props(styles.wrapper, style)}>
      <div {...stylex.props(styles.root)}>{children}</div>
    </div>
  );
};

/**
 * Sidebar layout sidebar component. Slot for sidebar content.
 */
export interface SidebarLayoutSidebarProps extends StyleXComponentProps<
  React.ComponentProps<"aside">
> {}

export const SidebarLayoutSidebar = ({
  style,
  children,
  ...props
}: SidebarLayoutSidebarProps) => {
  return (
    <>
      <aside {...props} {...stylex.props(styles.sidebar, style)}>
        {children}
      </aside>
      <Drawer
        trigger={
          <IconButton
            label="Open Navigation"
            variant="outline"
            style={styles.drawer as unknown as stylex.StyleXStyles}
          >
            <ArrowRightFromLineIcon />
          </IconButton>
        }
        direction="left"
        size="sm"
      >
        {children}
      </Drawer>
    </>
  );
};

/**
 * Sidebar layout page component. Slot for main page content.
 */
export interface SidebarLayoutPageProps extends StyleXComponentProps<
  React.ComponentProps<"main">
> {}

export const SidebarLayoutPage = ({
  style,
  ...props
}: SidebarLayoutPageProps) => {
  return <main {...props} {...stylex.props(styles.page, style)} />;
};

/**
 * Sidebar layout component with subcomponents.
 */
// eslint-disable-next-line react-refresh/only-export-components
export const SidebarLayout = {
  Root: SidebarLayoutRoot,
  Sidebar: SidebarLayoutSidebar,
  Page: SidebarLayoutPage,
};
