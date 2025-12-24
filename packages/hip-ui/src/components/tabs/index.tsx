"use client";

import * as stylex from "@stylexjs/stylex";
import { use } from "react";
import {
  Tabs as AriaTabs,
  TabsProps as AriaTabsProps,
  TabList as AriaTabList,
  TabListProps as AriaTabListProps,
  Tab as AriaTab,
  TabProps as AriaTabProps,
  TabPanel as AriaTabPanel,
  TabPanelProps as AriaTabPanelProps,
  SelectionIndicator,
} from "react-aria-components";

import { SizeContext } from "../context";
import { animationDuration } from "../theme/animations.stylex";
import { primaryColor, uiColor } from "../theme/color.stylex";
import { mediaQueries } from "../theme/media-queries.stylex";
import { radius } from "../theme/radius.stylex";
import { spacing } from "../theme/spacing.stylex";
import { Size, StyleXComponentProps } from "../theme/types";
import { fontFamily, fontSize } from "../theme/typography.stylex";

const styles = stylex.create({
  tabs: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  tabsVertical: {
    flexDirection: "row",
  },
  tabList: {
    gap: spacing["1"],
    alignItems: {
      ":is([data-orientation=horizontal])": "flex-start",
      ":is([data-orientation=vertical])": "stretch",
    },
    display: "flex",
    flexDirection: {
      ":is([data-orientation=horizontal])": "row",
      ":is([data-orientation=vertical])": "column",
    },
    position: "relative",
    borderBottomColor: {
      ":is([data-orientation=horizontal])": uiColor.border2,
      ":is([data-orientation=vertical])": "transparent",
    },
    borderBottomStyle: {
      ":is([data-orientation=horizontal])": "solid",
      ":is([data-orientation=vertical])": "none",
    },
    borderBottomWidth: {
      ":is([data-orientation=horizontal])": 1,
      ":is([data-orientation=vertical])": 0,
    },
    borderRightColor: {
      ":is([data-orientation=horizontal])": "transparent",
      ":is([data-orientation=vertical])": uiColor.border2,
    },
    borderRightStyle: {
      ":is([data-orientation=horizontal])": "none",
      ":is([data-orientation=vertical])": "solid",
    },
    borderRightWidth: {
      ":is([data-orientation=horizontal])": 0,
      ":is([data-orientation=vertical])": 1,
    },
  },
  tab: {
    padding: {
      ":is([data-size=lg] *)": `${spacing["4"]} ${spacing["5"]}`,
      ":is([data-size=md] *)": `${spacing["3"]} ${spacing["4"]}`,
      ":is([data-size=sm] *)": `${spacing["2"]} ${spacing["2.5"]}`,
    },
    borderWidth: 0,
    outline: "none",
    alignItems: "center",
    backgroundColor: "transparent",
    color: {
      default: uiColor.text1,
      ":is([data-hovered],[data-focused],[data-selected])": uiColor.text2,
    },
    cursor: "default",
    display: "flex",
    fontFamily: fontFamily["sans"],
    fontSize: {
      ":is([data-size=lg] *)": fontSize["lg"],
      ":is([data-size=md] *)": fontSize["base"],
      ":is([data-size=sm] *)": fontSize["sm"],
    },
    justifyContent: "center",
    opacity: {
      default: 1,
      ":is([data-disabled])": 0.5,
    },
    position: "relative",
    transitionDuration: animationDuration.fast,
    transitionProperty: {
      default: "color",
      [mediaQueries.reducedMotion]: "none",
    },
    transitionTimingFunction: "ease-in-out",
  },
  selectionIndicator: {
    backgroundColor: "transparent",
    position: "absolute",
    transitionDuration: animationDuration.slow,
    transitionProperty: {
      default: "translate, width, height",
      [mediaQueries.reducedMotion]: "none",
    },
    transitionTimingFunction: "ease-in-out",
    borderBottomColor: {
      default: "transparent",
      ":is([data-orientation=horizontal] > [data-selected] > *)":
        primaryColor.solid1,
    },
    borderBottomStyle: {
      ":is([data-orientation=horizontal] *)": "solid",
      ":is([data-orientation=vertical])": "none",
    },
    borderBottomWidth: {
      ":is([data-orientation=horizontal] *)": 3,
      ":is([data-orientation=vertical] *)": 0,
    },
    borderRightColor: {
      ":is([data-orientation=vertical] *)": "transparent",
      ":is([data-orientation=vertical] > [data-selected] > *)":
        primaryColor.solid1,
    },
    borderRightStyle: {
      ":is([data-orientation=horizontal] *)": "none",
      ":is([data-orientation=vertical] *)": "solid",
    },
    borderRightWidth: {
      ":is([data-orientation=horizontal] *)": 0,
      ":is([data-orientation=vertical] *)": 3,
    },
    bottom: {
      ":is([data-orientation=horizontal] *)": 0,
      ":is([data-orientation=vertical] *)": 0,
    },
    left: {
      ":is([data-orientation=horizontal] *)": 0,
      ":is([data-orientation=vertical] *)": "unset",
    },
    right: {
      ":is([data-orientation=horizontal] *)": 0,
      ":is([data-orientation=vertical] *)": "0",
    },
    top: {
      ":is([data-orientation=horizontal] *)": "auto",
      ":is([data-orientation=vertical] *)": 0,
    },
    width: {
      ":is([data-orientation=horizontal] *)": "100%",
      ":is([data-orientation=vertical] *)": "auto",
    },
  },
  tabPanel: {
    padding: {
      ":is([data-size=lg] *)": spacing["5"],
      ":is([data-size=md] *)": spacing["4"],
      ":is([data-size=sm] *)": spacing["3"],
    },
    outline: "none",
    fontSize: {
      ":is([data-size=lg] *)": fontSize["lg"],
      ":is([data-size=md] *)": fontSize["base"],
      ":is([data-size=sm] *)": fontSize["sm"],
    },
  },
  focusRing: {
    borderRadius: radius["sm"],
    outline: {
      default: "none",
      ":is([data-focus-visible] *)": `2px solid ${uiColor.solid1}`,
    },
    outlineOffset: "2px",
  },
});

export interface TabsProps extends StyleXComponentProps<
  Omit<AriaTabsProps, "children">
> {
  children: React.ReactNode;
  size?: Size;
  orientation?: "horizontal" | "vertical";
}

export function Tabs({
  children,
  style,
  size: sizeProp,
  orientation = "horizontal",
  ...props
}: TabsProps) {
  const size = sizeProp || use(SizeContext);

  return (
    <SizeContext value={size}>
      <AriaTabs
        {...props}
        orientation={orientation}
        data-size={size}
        {...stylex.props(
          styles.tabs,
          orientation === "vertical" && styles.tabsVertical,
          style,
        )}
      >
        {children}
      </AriaTabs>
    </SizeContext>
  );
}

export interface TabListProps extends StyleXComponentProps<
  Omit<AriaTabListProps<object>, "children">
> {
  children: React.ReactNode;
}

export function TabList({ children, style, ...props }: TabListProps) {
  return (
    <AriaTabList {...props} {...stylex.props(styles.tabList, style)}>
      {children}
    </AriaTabList>
  );
}

export interface TabProps extends StyleXComponentProps<
  Omit<AriaTabProps, "children">
> {
  children: React.ReactNode;
}

export function Tab({ children, style, ...props }: TabProps) {
  return (
    <AriaTab {...props} {...stylex.props(styles.tab, styles.focusRing, style)}>
      <SelectionIndicator {...stylex.props(styles.selectionIndicator)} />
      {children}
    </AriaTab>
  );
}

export interface TabPanelProps extends StyleXComponentProps<
  Omit<AriaTabPanelProps, "children">
> {
  children: React.ReactNode;
}

export function TabPanel({ children, style, ...props }: TabPanelProps) {
  return (
    <AriaTabPanel
      {...props}
      {...stylex.props(styles.tabPanel, styles.focusRing, style)}
    >
      {children}
    </AriaTabPanel>
  );
}
