import { useLayoutEffect } from "@react-aria/utils";
import * as stylex from "@stylexjs/stylex";
import { ChevronRight } from "lucide-react";
import { createContext, use, useId, useMemo } from "react";
import { mergeProps, useHover, usePress } from "react-aria";
import {
  Button,
  Disclosure,
  DisclosurePanel,
  Heading,
} from "react-aria-components";

import { Flex } from "../flex";
import { animationDuration } from "../theme/animations.stylex";
import { primaryColor, uiColor } from "../theme/color.stylex";
import { mediaQueries } from "../theme/media-queries.stylex";
import { radius } from "../theme/radius.stylex";
import { spacing } from "../theme/spacing.stylex";
import { StyleXComponentProps } from "../theme/types";
import { fontFamily, fontSize, fontWeight } from "../theme/typography.stylex";
import { Text } from "../typography/text";

interface SidebarContextType {
  headerId: string;
}

const SidebarContext = createContext<SidebarContextType>({
  headerId: "",
});

const styles = stylex.create({
  sidebar: {
    gap: spacing["6"],
    display: "flex",
    flexDirection: "column",
    paddingBottom: spacing["12"],
    paddingLeft: spacing["8"],
    paddingRight: spacing["8"],
    paddingTop: spacing["6"],
    width: spacing["64"],
  },
  sidebarHeader: {
    padding: spacing["3"],
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: spacing["4"],
  },
  sidebarHeaderLink: {
    textDecoration: "none",
  },
  sidebarSectionTitle: {
    height: spacing["6"],
    paddingLeft: spacing["3"],
    paddingRight: spacing["3"],
    paddingTop: spacing["4"],
  },
  sidebarSectionList: {
    margin: 0,
    padding: 0,
    gap: spacing["1"],
    display: "flex",
    flexDirection: "column",
  },
  sidebarItemWrapper: {
    listStyle: "none",
  },
  sidebarItem: {
    // eslint-disable-next-line @stylexjs/valid-styles
    cornerShape: "squircle",
    borderRadius: {
      default: radius["md"],
      [mediaQueries.supportsSquircle]: radius["3xl"],
    },
    borderWidth: 0,
    textDecoration: "none",
    alignItems: "center",
    backgroundColor: {
      default: "transparent",
      ":is([data-hovered=true])": uiColor.component2,
      ":is([data-pressed=true])": uiColor.component3,
    },
    color: uiColor.text2,
    display: "flex",
    fontSize: fontSize["sm"],
    transitionDuration: animationDuration.fast,
    transitionProperty: {
      default: "background-color",
      [mediaQueries.reducedMotion]: "none",
    },
    transitionTimingFunction: "ease-in-out",
    height: spacing["8"],
    paddingLeft: spacing["3"],
    paddingRight: spacing["3"],
  },
  sidebarItemActive: {
    backgroundColor: {
      default: primaryColor.component1,
      ":is([data-hovered=true])": primaryColor.component2,
      ":is([data-pressed=true])": primaryColor.component3,
    },
    color: primaryColor.text2,
    scrollMarginTop: spacing["4"],
  },
  sidebarGroupHeading: {
    margin: 0,
  },
  sidebarGroup: {
    display: "flex",
    flexDirection: "column",
  },
  sidebarGroupButton: {
    padding: 0,
    borderWidth: 0,
    gap: spacing["1.5"],
    alignItems: "center",
    backgroundColor: "transparent",
    color: uiColor.text2,
    display: "flex",
    fontFamily: fontFamily["sans"],
    fontSize: fontSize["base"],
    fontWeight: fontWeight["medium"],
    textAlign: "left",
    marginLeft: `calc(${spacing["2.5"]} * -1)`,
    width: "100%",
  },
  chevronIcon: {
    transition: "rotate 250ms",
    rotate: {
      default: "0deg",
      ":is([aria-expanded=true] *)": "90deg",
    },
  },
  sidebarGroupPanel: {
    overflow: "clip",
    transition: {
      default: "height 250ms",
      [mediaQueries.reducedMotion]: "none",
    },
    height: "var(--disclosure-panel-height)",
  },
  sidebarGroupPanelContent: {
    gap: spacing["1"],
    display: "flex",
    flexDirection: "column",
    paddingTop: spacing["4"],
  },
});

export interface SidebarProps
  extends StyleXComponentProps<React.ComponentProps<"div">> {
  children: React.ReactNode;
}

export function Sidebar({ children, style, ...props }: SidebarProps) {
  const headerId = useId();
  const contextValue = useMemo(() => ({ headerId }), [headerId]);

  useLayoutEffect(() => {
    const focusActiveItem = () => {
      const activeItem =
        document.querySelector<HTMLLIElement>("[data-active=true]");
      console.log(activeItem);
      activeItem?.scrollIntoView({ behavior: "instant" });
    };

    document.addEventListener("keydown", focusActiveItem, { once: true });
    return () => document.removeEventListener("keydown", focusActiveItem);
  }, []);

  return (
    <SidebarContext value={contextValue}>
      <nav
        {...props}
        {...stylex.props(styles.sidebar, style)}
        aria-labelledby={headerId}
      >
        {children}
      </nav>
    </SidebarContext>
  );
}

export interface SidebarHeaderProps
  extends StyleXComponentProps<React.ComponentProps<"div">> {
  children: React.ReactNode;
  href?: string;
  linkComponent?: React.ComponentType<React.ComponentProps<"a">>;
  action?: React.ReactNode;
}

export function SidebarHeader({
  children,
  style,
  href,
  linkComponent,
  action,
  ...props
}: SidebarHeaderProps) {
  const { headerId } = use(SidebarContext);
  const LinkComponent = linkComponent || "a";

  return (
    <header
      {...props}
      {...stylex.props(styles.sidebarHeader, style)}
      id={headerId}
    >
      {href ? (
        <LinkComponent
          href={href}
          {...stylex.props(styles.sidebarHeaderLink, style)}
        >
          {children}
        </LinkComponent>
      ) : (
        children
      )}
      {action}
    </header>
  );
}

export interface SidebarGroupProps {
  children: React.ReactNode;
  title: string;
  defaultExpanded?: boolean;
}

export function SidebarGroup({
  children,
  title,
  defaultExpanded = true,
}: SidebarGroupProps) {
  return (
    <Disclosure
      defaultExpanded={defaultExpanded}
      {...stylex.props(styles.sidebarGroup)}
    >
      <Heading {...stylex.props(styles.sidebarGroupHeading)}>
        <Button slot="trigger" {...stylex.props(styles.sidebarGroupButton)}>
          <ChevronRight size={16} {...stylex.props(styles.chevronIcon)} />
          {title}
        </Button>
      </Heading>
      <DisclosurePanel {...stylex.props(styles.sidebarGroupPanel)}>
        <div {...stylex.props(styles.sidebarGroupPanelContent)}>{children}</div>
      </DisclosurePanel>
    </Disclosure>
  );
}

export interface SidebarSectionProps {
  children: React.ReactNode;
  title?: string;
}

export function SidebarSection({ children, title }: SidebarSectionProps) {
  const headerId = useId();

  return (
    <Flex direction="column" gap="1">
      {title && (
        <div {...stylex.props(styles.sidebarSectionTitle)}>
          <Text id={headerId} size="xs" weight="semibold" variant="secondary">
            {title}
          </Text>
        </div>
      )}
      <ul
        aria-labelledby={title ? headerId : undefined}
        {...stylex.props(styles.sidebarSectionList)}
      >
        {children}
      </ul>
    </Flex>
  );
}

export interface SidebarItemProps
  extends StyleXComponentProps<React.ComponentProps<"li">> {
  children: React.ReactNode;
  isActive?: boolean;
}

export function SidebarItem({
  children,
  style,
  isActive,
  ...props
}: SidebarItemProps) {
  const { hoverProps, isHovered } = useHover({});
  const { pressProps, isPressed } = usePress({});
  const Component = "href" in props ? "a" : "button";

  return (
    <li {...stylex.props(styles.sidebarItemWrapper)}>
      <Component
        {...mergeProps(
          props as React.ComponentProps<typeof Component>,
          hoverProps,
          pressProps,
        )}
        data-hovered={isHovered}
        data-pressed={isPressed}
        data-active={isActive}
        {...stylex.props(
          styles.sidebarItem,
          isActive && styles.sidebarItemActive,
          style,
        )}
      >
        {children}
      </Component>
    </li>
  );
}
