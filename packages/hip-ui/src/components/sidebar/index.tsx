import * as stylex from "@stylexjs/stylex";
import { ChevronRight } from "lucide-react";
import { createContext, use, useId, useMemo } from "react";
import {
  Button,
  Disclosure,
  DisclosurePanel,
  Heading,
} from "react-aria-components";

import { Flex } from "../flex";
import { animationDuration } from "../theme/animations.stylex";
import { mediaQueries } from "../theme/media-queries.stylex";
import { radius } from "../theme/radius.stylex";
import { primaryColor, uiColor } from "../theme/semantic-color.stylex";
import { spacing } from "../theme/spacing.stylex";
import { StyleXComponentProps } from "../theme/types";
import { fontFamily, fontSize, fontWeight } from "../theme/typography.stylex";
import { Text } from "../typography/text";
import { mergeProps, useHover, usePress } from "react-aria";

interface SidebarContextType {
  headerId: string;
}

const SidebarContext = createContext<SidebarContextType>({
  headerId: "",
});

const styles = stylex.create({
  sidebar: {
    display: "flex",
    flexDirection: "column",
    gap: spacing["6"],
    paddingBottom: spacing["12"],
    paddingLeft: spacing["8"],
    paddingRight: spacing["8"],
    paddingTop: spacing["6"],
    width: spacing["64"],
  },
  sidebarHeader: {
    marginBottom: spacing["4"],
    padding: spacing["3"],
  },
  sidebarHeaderLink: {
    textDecoration: "none",
  },
  sidebarSectionTitle: {
    height: spacing["6"],
    paddingLeft: spacing["3"],
    paddingRight: spacing["3"],
  },
  sidebarSectionList: {
    display: "flex",
    flexDirection: "column",
    gap: spacing["1"],
    margin: 0,
    padding: 0,
  },
  sidebarItem: {
    textDecoration: "none",
    alignItems: "center",
    backgroundColor: {
      default: "transparent",
      ":is([data-hovered=true])": uiColor.component2,
      ":is([data-pressed=true])": uiColor.component3,
    },
    borderRadius: radius["md"],
    color: uiColor.text2,
    display: "flex",
    height: spacing["8"],
    listStyle: "none",
    paddingLeft: spacing["3"],
    paddingRight: spacing["3"],
    transitionDuration: animationDuration.fast,
    transitionProperty: {
      default: "background-color",
      [mediaQueries.reducedMotion]: "none",
    },
    transitionTimingFunction: "ease-in-out",
  },
  sidebarItemActive: {
    backgroundColor: {
      default: primaryColor.component1,
      ":is([data-hovered=true])": primaryColor.component2,
      ":is([data-pressed=true])": primaryColor.component3,
    },
    color: primaryColor.text2,
  },
  sidebarGroupHeading: {
    margin: 0,
  },
  sidebarGroup: {
    display: "flex",
    flexDirection: "column",
  },
  sidebarGroupButton: {
    alignItems: "center",
    backgroundColor: "transparent",
    borderWidth: 0,
    color: uiColor.text2,
    display: "flex",
    fontFamily: fontFamily["sans"],
    fontSize: fontSize["base"],
    fontWeight: fontWeight["medium"],
    gap: spacing["1.5"],
    marginLeft: `calc(${spacing["2.5"]} * -1)`,
    padding: 0,
    textAlign: "left",
    width: "100%",
  },
  chevronIcon: {
    rotate: {
      default: "0deg",
      ":is([aria-expanded=true] *)": "90deg",
    },
    transition: "rotate 250ms",
  },
  sidebarGroupPanel: {
    height: "var(--disclosure-panel-height)",
    overflow: "clip",
    transition: {
      default: "height 250ms",
      [mediaQueries.reducedMotion]: "none",
    },
  },
  sidebarGroupPanelContent: {
    display: "flex",
    flexDirection: "column",
    gap: spacing["4"],
    paddingTop: spacing["5"],
  },
});

export interface SidebarProps
  extends StyleXComponentProps<React.ComponentProps<"div">> {
  children: React.ReactNode;
}

export function Sidebar({ children, style, ...props }: SidebarProps) {
  const headerId = useId();
  const contextValue = useMemo(() => ({ headerId }), [headerId]);

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
}

export function SidebarHeader({
  children,
  style,
  href,
  linkComponent,
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
          <Text id={headerId} size="sm" weight="medium" variant="secondary">
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
    <li>
      <Component
        {...mergeProps(props as any, hoverProps, pressProps)}
        data-hovered={isHovered}
        data-pressed={isPressed}
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
