"use client";

import type { LinkProps } from "react-aria-components";

import * as stylex from "@stylexjs/stylex";
import { Menu, X } from "lucide-react";
import * as React from "react";
import { use, useState } from "react";
import { Link } from "react-aria-components";

import type { Size, StyleXComponentProps } from "../theme/types";

import { SizeContext } from "../context";
import { IconButton } from "../icon-button";
import { Separator } from "../separator";
import { primaryColor, uiColor } from "../theme/color.stylex";
import { containerBreakpoints } from "../theme/media-queries.stylex";
import { ui } from "../theme/semantic-color.stylex";
import { spacing } from "../theme/spacing.stylex";
import { fontFamily, fontWeight } from "../theme/typography.stylex";

const styles = stylex.create({
  wrapper: {
    zIndex: 1000,
    borderBottomColor: uiColor.border1,
    borderBottomStyle: "solid",
    borderBottomWidth: 1,
    top: 0,
    width: "100%",
  },
  navbar: {
    "--separator-visibility": {
      default: "none",
      ":is([data-navbar-open]):has([data-navbar-action])": "flex",
      ":has([data-always-visible])": "none",
      [containerBreakpoints.sm]: "none",
    },
    "--visibility": {
      ":is([data-navbar-open])": "flex",
      [containerBreakpoints.sm]: "none",
    },
    borderWidth: 0,
    gridTemplateAreas: {
      default: `
        "logo hamburger"
      `,
      ":is([data-navbar-open])": `
        "logo hamburger"
        "navigation navigation"
      `,
      ":is([data-navbar-open]):has([data-navbar-action])": `
        "logo hamburger"
        "navigation navigation"
        "separator separator"
        "action action"
      `,
      ":has([data-always-visible])": `
        "logo action hamburger"
      `,
      ":has([data-always-visible]):is([data-navbar-open])": `
        "logo action hamburger"
        "navigation navigation navigation"
        "separator separator separator"
      `,
      [containerBreakpoints.sm]: {
        default: `
          "logo navigation"
        `,
        ":has([data-navbar-action])": `
          "logo navigation action"
        `,
      },
    },
    overflow: {
      ":is([data-navbar-open])": "auto",
    },
    alignItems: "center",
    boxSizing: "border-box",
    columnGap: {
      default: spacing["4"],
      [containerBreakpoints.sm]: spacing["8"],
    },
    display: "grid",
    gridTemplateColumns: {
      default: "1fr auto",
      ":has([data-always-visible]):not([data-navbar-action])":
        "1fr min-content min-content",
      [containerBreakpoints.sm]: {
        default: "1fr auto",
        ":has([data-navbar-action])": "auto 1fr auto",
      },
    },
    gridTemplateRows: {
      ":is([data-navbar-open])": `min-content min-content min-content`,
      ":is([data-navbar-open]):has([data-navbar-action])": `min-content min-content min-content min-content`,
    },
    rowGap: spacing["8"],
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "var(--page-content-max-width)",
    minHeight: {
      default: spacing["14"],
      ":is([data-navbar-open])": "100%",
      [containerBreakpoints.sm]: spacing["14"],
    },
    paddingBottom: {
      default: spacing["3"],
      ":is([data-navbar-open]):has([data-navbar-action])": spacing["4"],
    },
    paddingLeft: {
      default: spacing["4"],
      [containerBreakpoints.sm]: spacing["8"],
    },
    paddingRight: {
      default: spacing["4"],
      [containerBreakpoints.sm]: spacing["8"],
    },
    paddingTop: spacing["3"],
    width: "100%",
  },
  logo: {
    "--underline-opacity": {
      default: 0,
      ":is([aria-current=page])": 1,
      ":is([data-active])": 1,
      ":is([data-status=active])": 1,
    },
    gap: spacing["2"],
    textDecoration: "none",
    alignItems: "center",
    color: {
      default: primaryColor.text2,
    },
    cursor: "pointer",
    display: "flex",
    fontFamily: fontFamily["sans"],
    fontWeight: fontWeight["normal"],
    position: "relative",
    width: {
      default: "100%",
      [containerBreakpoints.sm]: "auto",
    },
  },
  logoContent: {
    position: "relative",

    "::after": {
      backgroundColor: "currentColor",
      content: '""',
      display: "block",
      opacity: "var(--underline-opacity)",
      pointerEvents: "none",
      position: "absolute",
      bottom: `calc(${spacing["1"]} * -1)`,
      height: "2px",
      left: 0,
      right: 0,
      width: "100%",
    },
  },
  separator: {
    gridArea: "separator",
    // eslint-disable-next-line @stylexjs/valid-styles
    display: "var(--separator-visibility, none)",
  },
  navigation: {
    gridArea: "navigation",
    flex: "1",
    gap: {
      default: spacing["6"],
      [containerBreakpoints.sm]: spacing["8"],
    },
    alignItems: {
      default: "start",
      [containerBreakpoints.sm]: "stretch",
    },
    display: {
      // eslint-disable-next-line @stylexjs/valid-styles
      default: "var(--visibility, none)",
      [containerBreakpoints.sm]: "flex",
    },
    flexDirection: {
      default: "column",
      [containerBreakpoints.sm]: "row",
    },
  },
  navigationJustifyLeft: {
    justifyContent: "flex-start",
  },
  navigationJustifyCenter: {
    justifyContent: "center",
  },
  navigationJustifyRight: {
    justifyContent: "flex-end",
  },
  action: {
    gridArea: "action",
    gap: spacing["2"],
    alignItems: "center",
    display: {
      // eslint-disable-next-line @stylexjs/valid-styles
      default: "var(--visibility, none)",
      [containerBreakpoints.sm]: "flex",
      ":is([data-always-visible])": "flex",
    },
  },
  hamburgerButton: {
    gridArea: "hamburger",
    alignItems: "center",
    display: {
      default: "flex",
      [containerBreakpoints.sm]: "none",
    },
  },
  link: {
    "--underline-opacity": {
      default: 0,
      ":is([aria-current=page])": 1,
      ":is([aria-expanded=true])": 1,
      ":is([data-active])": 1,
      ":is([data-breadcrumb] *)": 0,
      ":is([data-hovered])": 1,
      ":is([data-status=active])": 1,
    },
    gap: spacing["2"],
    textDecoration: "none",
    alignItems: "center",
    color: {
      default: primaryColor.text2,
      ":is([data-breadcrumb] *)": uiColor.text1,
      ":is([data-breadcrumb][data-current] *)": uiColor.text2,
    },
    cursor: "pointer",
    display: {
      default: "flex",
      [containerBreakpoints.sm]: "inline-flex",
    },
    fontFamily: fontFamily["sans"],
    fontWeight: fontWeight["normal"],
    position: "relative",
    width: {
      default: "100%",
      [containerBreakpoints.sm]: "auto",
    },

    // eslint-disable-next-line @stylexjs/no-legacy-contextual-styles, @stylexjs/valid-styles
    ":is(*) svg": {
      height: "1.2em",
      width: "1.2em",
    },
  },
  linkContent: {
    position: "relative",

    "::after": {
      backgroundColor: "currentColor",
      content: '""',
      display: "block",
      opacity: "var(--underline-opacity)",
      pointerEvents: "none",
      position: "absolute",
      bottom: `calc(${spacing["1"]} * -1)`,
      height: "2px",
      left: 0,
      right: 0,
      width: "100%",
    },
  },
});

// =============================================================================
// Mobile Menu Context
// =============================================================================

interface MobileMenuContextValue {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  closeMenu: () => void;
}

const MobileMenuContext = React.createContext<MobileMenuContextValue | null>(
  null,
);

function useMobileMenu() {
  const context = use(MobileMenuContext);
  if (!context) {
    throw new Error("useMobileMenu must be used within Navbar");
  }
  return context;
}

// Define subcomponents first so they can be referenced in Navbar
export interface NavbarLogoProps extends StyleXComponentProps<
  React.ComponentProps<"div">
> {
  /**
   * Whether the logo link is currently active.
   */
  isActive?: boolean;
}

/**
 * NavbarLogo component for displaying the logo in the navbar.
 */
export const NavbarLogo = ({ style, isActive, ...props }: NavbarLogoProps) => {
  return (
    <div
      {...props}
      data-active={isActive}
      {...stylex.props(styles.logo, style)}
    >
      <span {...stylex.props(styles.logoContent)}>{props.children}</span>
    </div>
  );
};

export interface NavbarNavigationProps extends StyleXComponentProps<
  React.ComponentProps<"div">
> {
  /**
   * Justify content alignment for the navigation items.
   * @default "left"
   */
  justify?: "left" | "right" | "center";
}

/**
 * NavbarNavigation component for displaying navigation items.
 * On mobile, this is hidden and shown in the hamburger menu.
 */
export const NavbarNavigation = ({
  style,
  justify = "left",
  ...props
}: NavbarNavigationProps) => {
  return (
    <div
      {...props}
      {...stylex.props(
        styles.navigation,
        justify === "left" && styles.navigationJustifyLeft,
        justify === "center" && styles.navigationJustifyCenter,
        justify === "right" && styles.navigationJustifyRight,
        style,
      )}
    >
      {props.children}
    </div>
  );
};

export interface NavbarActionProps extends StyleXComponentProps<
  React.ComponentProps<"div">
> {
  /**
   * Whether the action should be always visible on mobile.
   * @default false
   */
  alwaysVisible?: boolean;
}

/**
 * NavbarAction component for displaying action buttons.
 * On mobile, this is hidden and shown in the hamburger menu.
 */
export const NavbarAction = ({
  style,
  alwaysVisible = false,
  ...props
}: NavbarActionProps) => {
  return (
    <div
      {...props}
      data-navbar-action={true}
      data-always-visible={alwaysVisible || undefined}
      {...stylex.props(styles.action, style)}
    >
      {props.children}
    </div>
  );
};

export interface NavbarLinkProps extends StyleXComponentProps<LinkProps> {
  isActive?: boolean;
}

export function NavbarLink({ style, isActive, ...props }: NavbarLinkProps) {
  const { closeMenu } = useMobileMenu();

  return (
    <Link
      data-active={isActive}
      {...props}
      {...stylex.props(styles.link, style)}
      onPress={(e) => {
        closeMenu();
        props.onPress?.(e);
      }}
    >
      <span {...stylex.props(styles.linkContent)}>{props.children}</span>
    </Link>
  );
}

export interface NavbarProps extends StyleXComponentProps<
  React.ComponentProps<"div">
> {
  size?: Size;
}

/**
 * Navbar component that provides a responsive navigation bar with logo, navigation, and action sections.
 * On mobile, navigation and actions are automatically contained in a hamburger menu overlay.
 */
export const Navbar = ({
  style,
  size: sizeProp,
  children,
  ...props
}: NavbarProps) => {
  const size = sizeProp || use(SizeContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMenu = React.useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const mobileMenuContextValue = React.useMemo<MobileMenuContextValue>(
    () => ({
      isOpen: isMobileMenuOpen,
      setIsOpen: setIsMobileMenuOpen,
      closeMenu,
    }),
    [isMobileMenuOpen, closeMenu],
  );

  return (
    <SizeContext value={size}>
      <MobileMenuContext value={mobileMenuContextValue}>
        <div {...props} {...stylex.props(styles.wrapper, style)}>
          <nav
            data-navbar-open={isMobileMenuOpen || undefined}
            {...stylex.props(styles.navbar, ui.bg, style)}
          >
            {children}
            <Separator
              style={styles.separator as unknown as stylex.StyleXStyles}
            />
            <IconButton
              aria-label="Open menu"
              variant="tertiary"
              style={styles.hamburgerButton}
              onPress={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </IconButton>
          </nav>
        </div>
      </MobileMenuContext>
    </SizeContext>
  );
};
