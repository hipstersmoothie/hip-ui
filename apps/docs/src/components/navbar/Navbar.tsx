"use client";
import * as stylex from "@stylexjs/stylex";
import { Menu, X } from "lucide-react";
import * as React from "react";
import { use, useState } from "react";
import { Link, LinkProps } from "react-aria-components";

import { SizeContext } from "../context";
import { IconButton } from "../icon-button";
import { Separator } from "../separator";
import { primaryColor, uiColor } from "../theme/color.stylex";
import { containerBreakpoints } from "../theme/media-queries.stylex";
import { ui } from "../theme/semantic-color.stylex";
import { spacing } from "../theme/spacing.stylex";
import { Size, StyleXComponentProps } from "../theme/types";
import { fontFamily, fontWeight } from "../theme/typography.stylex";

const styles = stylex.create({
  wrapper: {
    borderBottomColor: uiColor.border1,
    borderBottomStyle: "solid",
    borderBottomWidth: 1,
    zIndex: 1000,
    width: "100%",
    top: 0,
  },
  navbar: {
    marginLeft: "auto",
    marginRight: "auto",
    borderWidth: 0,
    maxWidth: "var(--page-content-max-width)",
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
    alignItems: "center",
    display: "flex",
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
      ":is([aria-expanded=true])": 1,
      ":is([data-active])": 1,
      ":is([data-breadcrumb] *)": 0,
      ":is([data-hovered])": 1,
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
    display: "inline-flex",
    fontFamily: fontFamily["sans"],
    fontWeight: fontWeight["normal"],
    position: "relative",

    // eslint-disable-next-line @stylexjs/no-legacy-contextual-styles, @stylexjs/valid-styles
    ":is(*) svg": {
      height: "1.2em",
      width: "1.2em",
    },

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

// Define subcomponents first so they can be referenced in Navbar
export interface NavbarLogoProps extends StyleXComponentProps<
  React.ComponentProps<"div">
> {}

/**
 * NavbarLogo component for displaying the logo in the navbar.
 */
export const NavbarLogo = ({ style, ...props }: NavbarLogoProps) => {
  return (
    <div {...props} {...stylex.props(styles.logo, style)}>
      {props.children}
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
  return (
    <Link
      data-active={isActive}
      {...props}
      {...stylex.props(styles.link, style)}
    />
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

  return (
    <SizeContext value={size}>
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
    </SizeContext>
  );
};
