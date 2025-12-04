"use client";

import * as stylex from "@stylexjs/stylex";
import { Menu, X } from "lucide-react";
import * as React from "react";
import { use, useState } from "react";

import { SizeContext } from "../context";
import { IconButton } from "../icon-button";
import { Separator } from "../separator";
import { primaryColor, uiColor } from "../theme/color.stylex";
import {
  containerBreakpoints,
  mediaQueries,
} from "../theme/media-queries.stylex";
import { ui } from "../theme/semantic-color.stylex";
import { spacing } from "../theme/spacing.stylex";
import { Size, StyleXComponentProps } from "../theme/types";
import { HoverCard, HoverCardProps } from "../hover-card";
import { radius } from "../theme/radius.stylex";
import { mergeProps, useHover, usePress } from "react-aria";
import { animationDuration } from "../theme/animations.stylex";
import { fontFamily, fontSize, fontWeight } from "../theme/typography.stylex";
import {
  Button,
  Disclosure,
  DisclosurePanel,
  Link,
  LinkProps,
} from "react-aria-components";

const styles = stylex.create({
  navbar: {
    "--separator-visibility": {
      default: "none",
      ":is([data-navbar-open])": "flex",
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
      [containerBreakpoints.sm]: `
        "logo navigation action"
      `,
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
      ":has([data-always-visible])": "1fr min-content min-content",
      [containerBreakpoints.sm]: "auto 1fr auto",
    },
    gridTemplateRows: {
      ":is([data-navbar-open])": `min-content min-content min-content min-content`,
    },
    rowGap: spacing["8"],
    borderBottomColor: uiColor.border1,
    borderBottomStyle: "solid",
    borderBottomWidth: 1,
    height: {
      default: spacing["14"],
      ":is([data-navbar-open])": "100%",
      [containerBreakpoints.sm]: spacing["14"],
    },
    overflow: {
      ":is([data-navbar-open])": "auto",
    },
    paddingBottom: spacing["3"],
    paddingLeft: spacing["4"],
    paddingRight: spacing["4"],
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
    display: {
      // eslint-disable-next-line @stylexjs/valid-styles
      default: "var(--visibility, none)",
      [containerBreakpoints.sm]: "flex",
    },
    flexDirection: {
      default: "column",
      [containerBreakpoints.sm]: "row",
    },
    alignItems: {
      default: "start",
      [containerBreakpoints.sm]: "stretch",
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
  menuItem: {
    textDecoration: "none",
    display: "grid",
    alignItems: "center",
    columnGap: spacing["3"],
    rowGap: spacing["1.5"],
    padding: spacing["2"],
    borderRadius: {
      default: radius["sm"],
      [mediaQueries.supportsSquircle]: radius["lg"],
    },
    backgroundColor: {
      ":is([data-hovered=true]):not([data-pressed=true])": uiColor.component2,
      ":is([data-pressed=true])": uiColor.component3,
    },
    transitionDuration: animationDuration.fast,
    transitionProperty: "background-color",
    transitionTimingFunction: "ease-in-out",
    userSelect: "none",

    gridTemplateColumns: {
      ":has([data-icon])": "min-content 1fr",
      ":has([data-icon]):has([data-description])": "min-content 1fr",
    },
    gridTemplateAreas: {
      default: '"title"',
      ":has([data-description])": `
        "title"
        "description"
      `,
      ":has([data-icon])": `
        "icon title"
      `,
      ":has([data-icon]):has([data-description])": `
        "icon title"
        "icon description"
      `,
    },
  },
  menuItemIcon: {
    gridArea: "icon",
    color: uiColor.text1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: {
      default: uiColor.component2,
      [stylex.when.ancestor(":hover")]: uiColor.component1,
    },
    padding: spacing["2"],
    height: spacing["8"],
    width: spacing["8"],
    borderRadius: {
      default: radius["sm"],
      [mediaQueries.supportsSquircle]: radius["lg"],
    },

    ":is(*) svg": {
      width: spacing["6"],
      height: spacing["6"],
    },
  },
  menuItemLabel: {
    gridArea: "title",
    fontWeight: fontWeight["medium"],
    color: uiColor.text2,
  },
  menuItemDescription: {
    gridArea: "description",
    fontSize: fontSize["sm"],
    color: uiColor.text1,
  },
  menuItemDisabled: {
    opacity: 0.5,
  },
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
      ":is([data-active])": 1,
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
  desktopMenu: {
    display: {
      default: "none",
      [containerBreakpoints.sm]: "block",
    },
  },
  mobileMenu: {
    display: {
      default: "block",
      [containerBreakpoints.sm]: "none",
    },
  },
  menuTriggerButton: {
    display: "contents",
    fontSize: "inherit",
  },
  menuDisclosurePanel: {
    paddingTop: spacing["2"],
    marginLeft: `calc(${spacing["2"]} * -1)`,
  },
});

// Define subcomponents first so they can be referenced in Navbar
export interface NavbarLogoProps
  extends StyleXComponentProps<React.ComponentProps<"div">> {}

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

export interface NavbarNavigationProps
  extends StyleXComponentProps<React.ComponentProps<"div">> {
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

export interface NavbarActionProps
  extends StyleXComponentProps<React.ComponentProps<"div">> {
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
      data-always-visible={alwaysVisible || undefined}
      {...stylex.props(styles.action, style)}
    >
      {props.children}
    </div>
  );
};

interface NavbarMenuProps extends HoverCardProps {}

export function NavbarMenu({ trigger, children, ...props }: NavbarMenuProps) {
  return (
    <>
      <div {...stylex.props(styles.desktopMenu)}>
        <HoverCard {...props} offset={24} trigger={trigger}>
          {children}
        </HoverCard>
      </div>
      <Disclosure {...stylex.props(styles.mobileMenu)}>
        <Button slot="trigger" {...stylex.props(styles.menuTriggerButton)}>
          {trigger}
        </Button>
        <DisclosurePanel>
          <div {...stylex.props(styles.menuDisclosurePanel)}>{children}</div>
        </DisclosurePanel>
      </Disclosure>
    </>
  );
}

export interface NavbarLinkProps extends StyleXComponentProps<LinkProps> {
  isActive?: boolean;
}

export function NavbarLink({ style, isActive, ...props }: NavbarLinkProps) {
  return (
    <Link
      data-active={isActive}
      {...stylex.props(styles.link, style)}
      {...props}
    />
  );
}

export interface NavbarMenuTriggerProps
  extends StyleXComponentProps<React.ComponentProps<"div">> {}

export function NavbarMenuTrigger({ style, ...props }: NavbarMenuTriggerProps) {
  return <div {...stylex.props(styles.link, style)} {...props} />;
}

interface NavbarMenuItemProps
  extends StyleXComponentProps<Omit<React.ComponentProps<"div">, "children">> {
  icon?: React.ReactNode;
  label: string;
  description?: string;
  isDisabled?: boolean;
}

export function NavbarMenuItem({
  style,
  icon,
  label,
  description,
  isDisabled,
  ...props
}: NavbarMenuItemProps) {
  const { hoverProps, isHovered } = useHover({ isDisabled });
  const { pressProps, isPressed } = usePress({ isDisabled });
  const Component = "href" in props ? "a" : "button";

  return (
    <Component
      {...mergeProps(
        props as React.ComponentProps<typeof Component>,
        hoverProps,
        pressProps,
      )}
      data-hovered={isHovered}
      data-pressed={isPressed}
      {...stylex.props(
        stylex.defaultMarker(),
        styles.menuItem,
        isDisabled && styles.menuItemDisabled,
        style,
      )}
    >
      {icon && (
        <div data-icon {...stylex.props(styles.menuItemIcon)}>
          {icon}
        </div>
      )}
      {label && <div {...stylex.props(styles.menuItemLabel)}>{label}</div>}
      {description && (
        <div data-description {...stylex.props(styles.menuItemDescription)}>
          {description}
        </div>
      )}
    </Component>
  );
}

export interface NavbarProps
  extends StyleXComponentProps<React.ComponentProps<"nav">> {
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
      <nav
        {...props}
        data-navbar-open={isMobileMenuOpen || undefined}
        {...stylex.props(styles.navbar, ui.bg, style)}
      >
        {children}
        <Separator style={styles.separator as unknown as stylex.StyleXStyles} />
        <IconButton
          aria-label="Open menu"
          variant="tertiary"
          style={styles.hamburgerButton}
          onPress={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </IconButton>
      </nav>
    </SizeContext>
  );
};
