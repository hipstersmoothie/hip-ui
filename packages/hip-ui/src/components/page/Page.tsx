"use client";

import type { LinkProps as AriaLinkProps } from "react-aria-components";

import * as stylex from "@stylexjs/stylex";
import { ArrowLeft } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import type { IconButtonProps } from "../icon-button";
import type { StyleXComponentProps } from "../theme/types";

import { Flex } from "../flex";
import { IconButton } from "../icon-button";
import { primaryColor, uiColor } from "../theme/color.stylex";
import {
  breakpoints,
  containerBreakpoints,
  mediaQueries,
} from "../theme/media-queries.stylex";
import { radius } from "../theme/radius.stylex";
import { shadow } from "../theme/shadow.stylex";
import { spacing } from "../theme/spacing.stylex";
import { Text } from "../typography/text";
import { PageContext, usePageContext } from "./context";

const smallRootStyles = stylex.create({
  root: {
    boxSizing: "border-box",
    flexGrow: 1,
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "880px",
    paddingTop: {
      default: spacing["4"],
      [breakpoints.sm]: spacing["4"],
    },
    width: "100%",
  },
});

const largeRootStyles = stylex.create({
  root: {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "var(--page-content-max-width)",
    paddingBottom: spacing["16"],
    paddingTop: spacing["3.5"],
    width: "100%",
  },
});

const smallHeaderStyles = stylex.create({
  header: {
    marginBottom: {
      default: spacing["6"],
      ":is([data-sticky-header=true] *)": 0,
    },
    minHeight: spacing["8"],
  },
});

const largeHeaderStyles = stylex.create({
  header: {
    gridTemplateAreas: {
      default: `
        'title actions'
        'description actions'
      `,
      ":has([data-page-icon])": `
        'icon title actions'
        'icon description actions'
      `,
    },
    alignItems: "center",
    columnGap: spacing["4"],
    display: "grid",
    gridTemplateColumns: {
      default: "1fr auto",
      ":has([data-page-icon])": "auto 1fr auto",
    },
    rowGap: spacing["2"],
    marginBottom: {
      default: spacing["8"],
      ":is([data-sticky-header=true] *)": 0,
    },
    minHeight: spacing["8"],
    paddingBottom: spacing["4"],
    paddingTop: spacing["4"],
  },
});

const sharedStyles = stylex.create({
  smallTitle: {
    flexGrow: 1,
    minWidth: 0,
  },
  largeTitle: {
    gridArea: "title",
    flexGrow: 1,
    minWidth: 0,
  },
  description: {
    gridArea: "description",
  },
  smallActions: {
    flexShrink: 0,
  },
  largeActions: {
    gridArea: "actions",
    minHeight: spacing["8"],
  },
  icon: {
    gridArea: "icon",
    borderRadius: {
      default: radius["md"],
      [mediaQueries.supportsSquircle]: radius["3xl"],
    },
    // eslint-disable-next-line @stylexjs/valid-styles, @stylexjs/sort-keys
    cornerShape: "squircle",
    alignItems: "center",
    backgroundColor: primaryColor.solid1,
    boxShadow: shadow["lg"],
    color: primaryColor.textContrast,
    display: "flex",
    justifyContent: "center",
    height: spacing["12"],
    width: spacing["12"],
  },
});

const stickyBaseStyles = stylex.create({
  sentinel: {
    pointerEvents: "none",
    position: "relative",
    height: 1,
    width: "100%",
  },
  largeSentinel: {
    height: 0,
  },
  stickyWrapper: {
    position: "sticky",
    zIndex: 10,
    left: 0,
    marginBottom: spacing["2"],
    marginLeft: `calc(-50vw + 50%)`,
    marginRight: `calc(-50vw + 50%)`,
    right: 0,
    top: 0,
    width: "100vw",
  },
  largeStickyWrapper: {
    zIndex: 100,
    marginBottom: spacing["8"],
  },
  stickyWrapperStuck: {
    backgroundColor: {
      default: "light-dark(rgba(252, 252, 253, 0.8), rgba(17, 17, 19, 0.8))",
    },
    boxShadow: `${shadow.sm}, 0 0 32px 4px ${uiColor.bgSubtle}`,
    borderBottomColor: uiColor.border1,
    borderBottomStyle: "solid",
    borderBottomWidth: 1,
  },
  blurContainer: {
    inset: 0,
    overflow: "hidden",
    position: "absolute",
    zIndex: 0,
  },
  blur: {
    backdropFilter: "blur(32px) saturate(500%)",
    position: "absolute",
    bottom: -48,
    left: -48,
    right: -48,
    top: -48,
  },
  smallStickyContent: {
    position: "relative",
    zIndex: 1,
    marginBottom: 0,
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "880px",
    paddingBottom: spacing["4"],
    paddingLeft: spacing["4"],
    paddingRight: spacing["4"],
    paddingTop: spacing["4"],
  },
  largeStickyContent: {
    boxSizing: "border-box",
    position: "relative",
    zIndex: 1,
    marginBottom: 0,
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "var(--page-content-max-width)",
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
  },
});

const stickyFooterBaseStyles = stylex.create({
  sentinel: {
    pointerEvents: "none",
    position: "relative",
    height: 1,
    width: "100%",
  },
  stickyWrapper: {
    position: "sticky",
    zIndex: 10,
    bottom: 0,
    left: 0,
    marginLeft: `calc(-50vw + 50%)`,
    marginRight: `calc(-50vw + 50%)`,
    marginTop: spacing["2"],
    right: 0,
    width: "100vw",
  },
  stickyWrapperStuck: {
    backgroundColor: {
      default: "light-dark(rgba(252, 252, 253, 0.8), rgba(17, 17, 19, 0.8))",
    },
    boxShadow: `${shadow.sm}, 0 0 32px 4px ${uiColor.bgSubtle}`,
    borderTopColor: uiColor.border1,
    borderTopStyle: "solid",
    borderTopWidth: 1,
  },
  blurContainer: {
    inset: 0,
    overflow: "hidden",
    position: "absolute",
    zIndex: 0,
  },
  blur: {
    backdropFilter: "blur(32px) saturate(500%)",
    position: "absolute",
    bottom: -48,
    left: -48,
    right: -48,
    top: -48,
  },
  smallStickyContent: {
    position: "relative",
    zIndex: 1,
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "880px",
    paddingBottom: spacing["4"],
    paddingLeft: spacing["4"],
    paddingRight: spacing["4"],
    paddingTop: spacing["4"],
  },
  largeStickyContent: {
    boxSizing: "border-box",
    position: "relative",
    zIndex: 1,
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "var(--page-content-max-width)",
    paddingBottom: spacing["4"],
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
    paddingTop: spacing["4"],
  },
});

export interface PageRootProps extends StyleXComponentProps<
  React.ComponentProps<"div">
> {
  /**
   * Layout variant. "small" uses a narrow max-width (880px), "large" uses full content width.
   */
  variant?: "small" | "large";
}

/**
 * Root container for a page layout.
 */
export const PageRoot = ({
  style,
  variant = "large",
  ...props
}: PageRootProps) => {
  const rootStyles =
    variant === "small" ? smallRootStyles.root : largeRootStyles.root;

  return (
    <PageContext value={variant}>
      <div
        {...props}
        data-page-variant={variant}
        {...stylex.props(rootStyles, style)}
      />
    </PageContext>
  );
};

export interface PageHeaderProps extends StyleXComponentProps<
  React.ComponentProps<"div">
> {}

/**
 * Header section for a page.
 */
export const PageHeader = ({ style, ...props }: PageHeaderProps) => {
  const variant = usePageContext();
  const isSmall = variant === "small";

  if (isSmall) {
    return (
      <Flex
        align="center"
        gap="3"
        {...props}
        style={[smallHeaderStyles.header, style]}
      />
    );
  }

  return <div {...props} {...stylex.props(largeHeaderStyles.header, style)} />;
};

export interface PageIconProps extends StyleXComponentProps<
  React.ComponentProps<"div">
> {}

/**
 * Icon component for a large page header.
 * Only used with variant="large".
 */
export const PageIcon = ({ style, ...props }: PageIconProps) => {
  return (
    <div
      data-page-icon
      {...props}
      {...stylex.props(sharedStyles.icon, style)}
    />
  );
};

export interface PageTitleProps extends StyleXComponentProps<
  React.ComponentProps<"h1">
> {
  /** Page title content. */
  children: React.ReactNode;
}

/**
 * Title component for a page.
 */
export const PageTitle = ({ style, children, ...props }: PageTitleProps) => {
  const variant = usePageContext();
  const isSmall = variant === "small";
  const titleStyles = isSmall
    ? sharedStyles.smallTitle
    : sharedStyles.largeTitle;

  return (
    <Text
      size={
        isSmall ? { default: "xl", sm: "2xl" } : { default: "xl", sm: "3xl" }
      }
      weight="semibold"
      {...props}
      style={[titleStyles, style]}
    >
      {children}
    </Text>
  );
};

export interface PageDescriptionProps extends StyleXComponentProps<
  React.ComponentProps<"p">
> {
  /** Description content. */
  children: React.ReactNode;
}

/**
 * Description component for a large page header.
 * Only used with variant="large".
 */
export const PageDescription = ({
  style,
  children,
  ...props
}: PageDescriptionProps) => {
  return (
    <Text
      size="sm"
      variant="secondary"
      weight="light"
      {...props}
      style={[sharedStyles.description, style]}
    >
      {children}
    </Text>
  );
};

export interface PageActionsProps extends StyleXComponentProps<
  React.ComponentProps<"div">
> {}

/**
 * Actions container for header buttons and controls.
 */
export const PageActions = ({ style, ...props }: PageActionsProps) => {
  const variant = usePageContext();
  const isSmall = variant === "small";
  const actionsStyles = isSmall
    ? sharedStyles.smallActions
    : sharedStyles.largeActions;

  return (
    <Flex align="center" gap="2" {...props} style={[actionsStyles, style]} />
  );
};

export interface PageStickyHeaderProps {
  /** Content to display in the sticky header. */
  children: React.ReactNode;
  /** Optional style overrides. */
  style?: stylex.StyleXStyles;
}

/**
 * Sticky header component that becomes opaque when scrolled past.
 * Includes a sentinel element for intersection observer detection.
 */
export const PageStickyHeader = ({
  children,
  style,
}: PageStickyHeaderProps) => {
  const variant = usePageContext();
  const isSmall = variant === "small";
  const [isStuck, setIsStuck] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    const header = headerRef.current;
    if (!sentinel || !header) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry) setIsStuck(!entry.isIntersecting);
      },
      {
        threshold: [0, 1],
        rootMargin: "0px 0px 0px 0px",
      },
    );

    observer.observe(sentinel);

    return () => {
      observer.disconnect();
    };
  }, []);

  const sentinelStyles = isSmall
    ? stickyBaseStyles.sentinel
    : [stickyBaseStyles.sentinel, stickyBaseStyles.largeSentinel];
  const wrapperStyles = isSmall
    ? stickyBaseStyles.stickyWrapper
    : [stickyBaseStyles.stickyWrapper, stickyBaseStyles.largeStickyWrapper];
  const contentStyles = isSmall
    ? stickyBaseStyles.smallStickyContent
    : stickyBaseStyles.largeStickyContent;

  return (
    <div style={{ display: "contents" }}>
      <div ref={sentinelRef} {...stylex.props(sentinelStyles)} />
      <div
        ref={headerRef}
        data-sticky-header
        {...stylex.props(
          wrapperStyles,
          isStuck && stickyBaseStyles.stickyWrapperStuck,
          style,
        )}
      >
        {isStuck && (
          <div {...stylex.props(stickyBaseStyles.blurContainer)}>
            <div {...stylex.props(stickyBaseStyles.blur)} />
          </div>
        )}
        <div {...stylex.props(contentStyles)}>{children}</div>
      </div>
    </div>
  );
};

export interface PageStickyFooterProps {
  /** Content to display in the sticky footer. */
  children: React.ReactNode;
}

/**
 * Sticky footer component that becomes opaque when scrolled past.
 * Includes a sentinel element for intersection observer detection.
 */
export const PageStickyFooter = ({ children }: PageStickyFooterProps) => {
  const variant = usePageContext();
  const isSmall = variant === "small";
  const [isStuck, setIsStuck] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    const footer = footerRef.current;
    if (!sentinel || !footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry) setIsStuck(!entry.isIntersecting);
      },
      {
        threshold: [0, 1],
        rootMargin: "0px 0px 0px 0px",
      },
    );

    observer.observe(sentinel);

    return () => {
      observer.disconnect();
    };
  }, []);

  const contentStyles = isSmall
    ? stickyFooterBaseStyles.smallStickyContent
    : stickyFooterBaseStyles.largeStickyContent;

  return (
    <>
      <div
        ref={sentinelRef}
        {...stylex.props(stickyFooterBaseStyles.sentinel)}
      />
      <div
        ref={footerRef}
        data-sticky-footer
        {...stylex.props(
          stickyFooterBaseStyles.stickyWrapper,
          isStuck && stickyFooterBaseStyles.stickyWrapperStuck,
        )}
      >
        {isStuck && (
          <div {...stylex.props(stickyFooterBaseStyles.blurContainer)}>
            <div {...stylex.props(stickyFooterBaseStyles.blur)} />
          </div>
        )}
        <div {...stylex.props(contentStyles)}>{children}</div>
      </div>
    </>
  );
};

/**
 * Back link component for navigating to the previous page.
 */
export const PageBackLink = ({
  style,
  children,
  ...props
}: IconButtonProps) => {
  return (
    <IconButton
      {...(props as React.ComponentProps<typeof IconButton>)}
      style={style}
      variant="tertiary"
      size="lg"
    >
      {children ?? <ArrowLeft size={20} />}
    </IconButton>
  );
};
