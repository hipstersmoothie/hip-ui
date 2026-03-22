import type {
  CalendarProps as AriaCalendarProps,
  CalendarGridProps,
  DateValue,
} from "react-aria-components";

import * as stylex from "@stylexjs/stylex";

import type { StyleXComponentProps } from "../theme/types";

import { animationDuration } from "../theme/animations.stylex";
import { primaryColor, uiColor } from "../theme/color.stylex";
import { radius } from "../theme/radius.stylex";
import { spacing } from "../theme/spacing.stylex";
import { fontSize, fontWeight } from "./typography.stylex";

export interface CalendarProps<T extends DateValue>
  extends
    StyleXComponentProps<AriaCalendarProps<T>>,
    Pick<CalendarGridProps, "weekdayStyle"> {
  errorMessage?: string;
}

const styles = stylex.create({
  cell: {
    padding: spacing["1"],
    borderRadius: radius.md,
    cornerShape: "squircle",
    textDecoration: {
      ":is([data-unavailable])": "line-through",
    },
    color: {
      default: uiColor.text1,
      ":is([data-hovered]):not(:is([data-unavailable]))": uiColor.text2,
      ":is([data-selected])": primaryColor.text2,
    },
    cursor: "default",
    lineHeight: spacing["8"],
    opacity: {
      ":is([data-outside-visible-range],[data-unavailable])": 0.5,
    },
    position: "relative",
    textAlign: "center",
    transitionDuration: animationDuration.fast,
    transitionProperty: "color",
    transitionTimingFunction: "ease-in-out",
    zIndex: 0,
    width: spacing["8"],

    "::before": {
      inset: spacing["1"],
      content: "''",
      position: "absolute",
      transitionDuration: animationDuration.fast,
      transitionProperty: "background-color",
      transitionTimingFunction: "ease-in-out",
      zIndex: -1,
    },
  },
  nonRangeCell: {
    cornerShape: {
      "::before": "squircle",
    },
    borderRadius: {
      "::before": radius.md,
    },
    backgroundColor: {
      ":is(*)::before": "transparent",
      ":is([data-hovered]):not(:is([data-unavailable]))::before":
        uiColor.component2,
      ":is([data-pressed]):not(:is([data-unavailable]))::before":
        uiColor.component3,
      ":is([data-selected]):not(:is([data-unavailable]))::before":
        primaryColor.component2,
      ":is([data-selected]):not(:is([data-unavailable])):is([data-hovered])::before":
        primaryColor.component3,
    },
    color: {
      default: uiColor.text1,
      ":is([data-hovered]):not(:is([data-unavailable]))": uiColor.text2,
      ":is([data-selected])": primaryColor.text2,
    },
  },
  rangeCell: {
    backgroundColor: {
      ":is(*)::before": "transparent",
      ":is([data-hovered]):not(:is([data-unavailable]))::before":
        uiColor.component3,
      ":is([data-pressed]):not(:is([data-unavailable]))::before":
        uiColor.border1,
      ":is([data-selected]):not([data-selection-start],[data-selection-end]):not(:is([data-unavailable]))::before":
        primaryColor.component1,
      ":is([data-selection-start],[data-selection-end]):not(:is([data-unavailable]))::before":
        primaryColor.component3,
      ":is([data-selection-start],[data-selection-end]):not(:is([data-unavailable])):is([data-hovered])::before":
        primaryColor.border1,
    },
    color: {
      default: uiColor.text1,
      ":is([data-hovered]):not(:is([data-unavailable]))": uiColor.text2,
      ":is([data-selection-start],[data-selection-end])": primaryColor.text2,
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
    textAlign: "center",
    paddingBottom: spacing["1"],
  },
  heading: {
    margin: 0,
    fontSize: fontSize["lg"],
    fontWeight: fontWeight["semibold"],
    textAlign: "center",
  },
  grid: {
    borderCollapse: "collapse",
  },
  wrapper: {
    gap: spacing["3"],
    display: "flex",
    flexDirection: "column",
  },
});

export function useCalendarStyles({
  type,
}: {
  type: "calendar" | "range-calendar";
}) {
  return {
    wrapper: [styles.wrapper],
    grid: [styles.grid],
    heading: [styles.heading],
    headerCell: [styles.headerCell],
    cell: [
      styles.cell,
      type === "range-calendar" ? styles.rangeCell : styles.nonRangeCell,
    ],
  };
}
