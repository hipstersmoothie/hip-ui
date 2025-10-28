import { Toc, TocEntry } from "@stefanprobst/rehype-extract-toc";
import * as stylex from "@stylexjs/stylex";
import { createContext, use, useEffect, useState } from "react";

import { Flex } from "@/components/flex";

import { animationDuration } from "../components/theme/animations.stylex";
import { mediaQueries } from "../components/theme/media-queries.stylex";
import {
  primaryColor,
  uiColor,
} from "../components/theme/semantic-color.stylex";
import { spacing } from "../components/theme/spacing.stylex";
import { fontSize } from "../components/theme/typography.stylex";

const ActiveHeaderIdContext = createContext<string | null>(null);
const LevelContext = createContext(1);

const styles = stylex.create({
  wrapper: {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    flexShrink: 0,
    gap: spacing["2"],
    height: "100vh",
    marginTop: spacing["12"],
    overflow: "auto",
    paddingBottom: spacing["20"],
    paddingRight: spacing["8"],
    paddingTop: spacing["12"],
    position: "sticky",
    top: 0,
  },
  itemList: {
    listStyle: "none",
    margin: 0,
    paddingLeft: 0,
  },
  item: {
    alignItems: "center",
    backgroundColor: {
      default: "transparent",
      ":hover": uiColor.component1,
      ":hover::before": primaryColor.solid1,
    },
    borderLeftColor: {
      default: uiColor.border1,
    },
    borderLeftStyle: "solid",
    borderLeftWidth: 1,
    color: {
      default: uiColor.text1,
    },
    display: "flex",
    fontSize: fontSize["sm"],
    height: spacing[8],
    position: "relative",
    textDecoration: "none",
    transitionDuration: animationDuration.fast,
    transitionProperty: {
      default: "color, border-left-color",
      [mediaQueries.reducedMotion]: "none",
    },
    transitionTimingFunction: "ease-in-out",

    "::before": {
      bottom: 0,
      content: "''",
      left: 0,
      position: "absolute",
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
      content: "''",
      bottom: 0,
      position: "absolute",
      top: 0,
      left: 0,
      width: 1,
      backgroundColor: primaryColor.solid1,
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

export function TableOfContents({ toc }: { toc: Toc }) {
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
      <nav {...stylex.props(styles.wrapper)}>
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
