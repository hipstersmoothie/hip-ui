import * as stylex from "@stylexjs/stylex";
import {
  CalendarGridProps,
  type CalendarProps as AriaCalendarProps,
  DateValue,
} from "react-aria-components";

import type { StyleXComponentProps } from "../theme/types";

import { animationDuration } from "../theme/animations.stylex";
import { radius } from "../theme/radius.stylex";
import { primaryColor, uiColor } from "../theme/semantic-color.stylex";
import { spacing } from "../theme/spacing.stylex";
import { fontSize, fontWeight } from "./typography.stylex";

export interface CalendarProps<T extends DateValue>
  extends StyleXComponentProps<AriaCalendarProps<T>>,
    Pick<CalendarGridProps, "weekdayStyle"> {
  errorMessage?: string;
}

const styles = stylex.create({
  cell: {
    borderRadius: radius.md,
    color: {
      default: uiColor.text1,
      ":is([data-hovered]):not([data-unavailable])": uiColor.text2,
      ":is([data-selected])": primaryColor.text2,
    },
    cursor: "default",
    lineHeight: spacing["8"],
    opacity: {
      ":is([data-outside-visible-range],[data-unavailable])": 0.5,
    },
    padding: spacing["1"],
    position: "relative",
    textAlign: "center",
    textDecoration: {
      ":is([data-unavailable])": "line-through",
    },
    transitionDuration: animationDuration.fast,
    transitionProperty: "color",
    transitionTimingFunction: "ease-in-out",
    width: spacing["8"],
    zIndex: 0,

    "::before": {
      content: "''",
      inset: spacing["1"],
      position: "absolute",
      transitionDuration: animationDuration.fast,
      transitionProperty: "background-color",
      transitionTimingFunction: "ease-in-out",
      zIndex: -1,
    },
  },
  nonRangeCell: {
    backgroundColor: {
      ":is(*)::before": "transparent",
      ":is([data-hovered]):not([data-unavailable])::before": uiColor.component2,
      ":is([data-pressed]):not([data-unavailable])::before": uiColor.component3,
      ":is([data-selected]):not([data-unavailable])::before":
        primaryColor.component2,
      ":is([data-selected]):not([data-unavailable]):hover::before":
        primaryColor.component3,
    },
    borderRadius: {
      "::before": radius.md,
    },
    color: {
      default: uiColor.text1,
      ":is([data-hovered]):not([data-unavailable])": uiColor.text2,
      ":is([data-selected])": primaryColor.text2,
    },
  },
  rangeCell: {
    backgroundColor: {
      ":is(*)::before": "transparent",
      ":is([data-hovered]):not([data-unavailable])::before": uiColor.component2,
      ":is([data-pressed]):not([data-unavailable])::before": uiColor.component3,
      ":is([data-selected]):not([data-selection-start],[data-selection-end]):not([data-unavailable])::before":
        primaryColor.component1,
      ":is([data-selection-start],[data-selection-end]):not([data-unavailable])::before":
        primaryColor.component2,
      ":is([data-selection-start],[data-selection-end]):not([data-unavailable]):hover::before":
        primaryColor.component3,
    },
    borderBottomLeftRadius: {
      ":is([data-selection-start],td:first-child > *)::before": radius.md,
    },
    borderBottomRightRadius: {
      ":is([data-selection-end],td:last-child > *)::before": radius.md,
    },
    borderTopLeftRadius: {
      ":is([data-selection-start],td:first-child > *)::before": radius.md,
    },
    borderTopRightRadius: {
      ":is([data-selection-end],td:last-child > *)::before": radius.md,
    },
    color: {
      default: uiColor.text1,
      ":is([data-hovered]):not([data-unavailable])": uiColor.text2,
      ":is([data-selection-start],[data-selection-end])": primaryColor.text2,
    },
    marginLeft: {
      ":is(td:not(:first-child) > [data-selected]):not([data-selection-start],[data-selection-end])::before": `calc(${spacing["2"]} * -1)`,
    },
    marginRight: {
      ":is(td:not(:last-child) > [data-selected]):not([data-selection-start],[data-selection-end])::before": `calc(${spacing["2"]} * -1)`,
    },
  },
  headerCell: {
    fontSize: fontSize["sm"],
    fontWeight: fontWeight["medium"],
    paddingBottom: spacing["1"],
    textAlign: "center",
  },
  heading: {
    fontSize: fontSize["lg"],
    fontWeight: fontWeight["semibold"],
    textAlign: "center",
  },
  grid: {
    borderCollapse: "collapse",
  },
});

// eslint-disable-next-line @eslint-react/no-unnecessary-use-prefix
export function useCalendarStyles({
  type,
}: {
  type: "calendar" | "range-calendar";
}) {
  return {
    grid: [styles.grid],
    heading: [styles.heading],
    headerCell: [styles.headerCell],
    cell: [
      styles.cell,
      type === "range-calendar" ? styles.rangeCell : styles.nonRangeCell,
    ],
  };
}
