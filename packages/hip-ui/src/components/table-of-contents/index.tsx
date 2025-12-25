"use client";

import * as stylex from "@stylexjs/stylex";
import { createContext, use, useEffect, useState } from "react";

import { animationDuration } from "../theme/animations.stylex";
import { primaryColor, uiColor } from "../theme/color.stylex";
import { spacing } from "../theme/spacing.stylex";
import { StyleXComponentProps } from "../theme/types";
import { fontSize } from "../theme/typography.stylex";

export interface TocEntry {
  value: string;
  depth: number;
  id?: string;
  children?: Array<TocEntry>;
}

export type Toc = Array<TocEntry>;

const ActiveHeaderIdContext = createContext<string | null>(null);
const LevelContext = createContext(1);

const styles = stylex.create({
  wrapper: {
    gap: spacing["2"],
    overflow: "auto",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    flexShrink: 0,
    paddingBottom: spacing["20"],
    paddingTop: spacing["12"],
  },
  sticky: {
    position: "sticky",
    height: "100vh",
    marginTop: spacing["12"],
    top: 0,
  },
  itemList: {
    margin: 0,
    listStyle: "none",
    paddingLeft: 0,
  },
  item: {
    textDecoration: "none",
    alignItems: "center",
    backgroundColor: {
      default: "transparent",
      ":hover::before": primaryColor.solid1,
      ":hover": uiColor.component1,
    },
    color: {
      default: uiColor.text1,
    },
    display: "flex",
    fontSize: fontSize["sm"],
    position: "relative",
    transitionDuration: animationDuration.fast,
    transitionProperty: {
      default: "color, border-left-color",
      "@media (prefers-reduced-motion: reduce)": "none",
    },
    transitionTimingFunction: "ease-in-out",
    borderLeftColor: {
      default: uiColor.border1,
    },
    borderLeftStyle: "solid",
    borderLeftWidth: 1,
    height: spacing[8],

    "::before": {
      content: "''",
      position: "absolute",
      bottom: 0,
      left: 0,
      top: 0,
      width: 1,
    },
  },
  level: (level: number) => ({
    paddingLeft: `calc(${spacing[4]} * ${level.toString()})`,
  }),
  active: {
    color: primaryColor.solid2,
    borderLeftColor: primaryColor.solid1,

    "::before": {
      backgroundColor: primaryColor.solid1,
      content: "''",
      position: "absolute",
      bottom: 0,
      left: 0,
      top: 0,
      width: 1,
    },
  },
});

function TocItem({ id, value, children }: TocEntry) {
  const level = use(LevelContext);
  const activeHeaderId = use(ActiveHeaderIdContext);

  return (
    <li key={id}>
      <a
        href={`#${id ?? ""}`}
        {...stylex.props(
          styles.item,
          styles.level(level),
          activeHeaderId === id && styles.active,
        )}
      >
        {value}
      </a>
      {children && (
        <LevelContext value={level + 1}>
          <ul {...stylex.props(styles.itemList)}>
            {children.map((child) => (
              <TocItem key={child.id} {...child} />
            ))}
          </ul>
        </LevelContext>
      )}
    </li>
  );
}

/**
 * TableOfContents component props.
 */
export interface TableOfContentsProps extends StyleXComponentProps<{
  toc: Toc;
}> {
  sticky?: boolean;
}

/**
 * A table of contents component that displays a navigation tree based on document headings.
 * Automatically highlights the currently visible heading using IntersectionObserver.
 */
export function TableOfContents({ toc, style, sticky }: TableOfContentsProps) {
  const [activeHeaderId, setActiveHeaderId] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting && entry.target.id) {
          setActiveHeaderId(entry.target.id);
        }
      }
    });

    const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");

    for (const heading of headings) {
      observer.observe(heading);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <ActiveHeaderIdContext value={activeHeaderId}>
      <nav {...stylex.props(styles.wrapper, sticky && styles.sticky, style)}>
        <LevelContext value={1}>
          <ul {...stylex.props(styles.itemList)}>
            {toc.map((item) => (
              <TocItem key={item.id} {...item} />
            ))}
          </ul>
        </LevelContext>
      </nav>
    </ActiveHeaderIdContext>
  );
}
