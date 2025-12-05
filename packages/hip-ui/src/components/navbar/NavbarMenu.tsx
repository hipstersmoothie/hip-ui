"use client";

import * as stylex from "@stylexjs/stylex";
import * as React from "react";
import { mergeProps, useHover, usePress } from "react-aria";
import { Button, Disclosure, DisclosurePanel } from "react-aria-components";

import { HoverCard, HoverCardProps } from "../hover-card";
import { animationDuration } from "../theme/animations.stylex";
import { primaryColor, uiColor } from "../theme/color.stylex";
import {
  containerBreakpoints,
  mediaQueries,
} from "../theme/media-queries.stylex";
import { radius } from "../theme/radius.stylex";
import { spacing } from "../theme/spacing.stylex";
import { StyleXComponentProps } from "../theme/types";
import { fontFamily, fontSize, fontWeight } from "../theme/typography.stylex";

const styles = stylex.create({
  menuItem: {
    padding: spacing["2"],
    borderRadius: {
      default: radius["sm"],
      [mediaQueries.supportsSquircle]: radius["lg"],
    },
    textDecoration: "none",
    alignItems: "center",
    backgroundColor: {
      ":is([data-hovered=true]):not([data-pressed=true])": uiColor.component2,
      ":is([data-pressed=true])": uiColor.component3,
    },
    columnGap: spacing["3"],
    display: "grid",
    rowGap: spacing["1.5"],
    transitionDuration: animationDuration.fast,
    transitionProperty: "background-color",
    transitionTimingFunction: "ease-in-out",
    userSelect: "none",

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
    gridTemplateColumns: {
      ":has([data-icon])": "min-content 1fr",
      ":has([data-icon]):has([data-description])": "min-content 1fr",
    },
  },
  menuItemIcon: {
    gridArea: "icon",
    padding: spacing["2"],
    borderRadius: {
      default: radius["sm"],
      [mediaQueries.supportsSquircle]: radius["lg"],
    },
    alignItems: "center",
    backgroundColor: {
      default: uiColor.component2,
      [stylex.when.ancestor(":hover")]: uiColor.component1,
    },
    color: uiColor.text1,
    display: "flex",
    justifyContent: "center",
    height: spacing["8"],
    width: spacing["8"],

    // eslint-disable-next-line @stylexjs/no-legacy-contextual-styles, @stylexjs/valid-styles
    ":is(*) svg": {
      height: spacing["6"],
      width: spacing["6"],
    },
  },
  menuItemLabel: {
    gridArea: "title",
    color: uiColor.text2,
    fontWeight: fontWeight["medium"],
  },
  menuItemDescription: {
    gridArea: "description",
    color: uiColor.text1,
    fontSize: fontSize["sm"],
  },
  menuItemDisabled: {
    opacity: 0.5,
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
    marginLeft: `calc(${spacing["2"]} * -1)`,
    paddingTop: spacing["2"],
  },
});

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
      {Boolean(icon) && (
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
