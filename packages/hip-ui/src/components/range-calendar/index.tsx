import * as stylex from "@stylexjs/stylex";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  RangeCalendar as AriaRangeCalendar,
  CalendarCell,
  CalendarGrid,
  CalendarGridProps,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeaderCell,
  Heading,
  type RangeCalendarProps as AriaRangeCalendarProps,
  DateValue,
} from "react-aria-components";

import type { StyleXComponentProps } from "../theme/types";

import { Flex } from "../flex";
import { IconButton } from "../icon-button";
import { ErrorMessage } from "../label";
import { spacing } from "../theme/spacing.stylex";
import { useCalendarStyles } from "../theme/useCalendarStyles";

export interface RangeCalendarProps<T extends DateValue>
  extends
    StyleXComponentProps<AriaRangeCalendarProps<T>>,
    Pick<CalendarGridProps, "weekdayStyle"> {
  errorMessage?: string;
}

const styles = stylex.create({
  root: {
    gap: spacing["3"],
    display: "flex",
    flexDirection: "column",
  },
  header: {
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
  },
});

export function RangeCalendar<T extends DateValue>(
  props: RangeCalendarProps<T>,
) {
  const { style, errorMessage, weekdayStyle, visibleDuration, ...rest } = props;
  const monthsVisible = Array.from({
    length: visibleDuration?.months || 1,
  }).map((_, index) => index);
  const calendarStyles = useCalendarStyles({ type: "range-calendar" });

  return (
    <AriaRangeCalendar
      visibleDuration={visibleDuration}
      {...rest}
      {...stylex.props(styles.root, style)}
    >
      <header {...stylex.props(styles.header)}>
        <IconButton
          variant="secondary"
          slot="previous"
          aria-label="Previous month"
        >
          <ChevronLeft />
        </IconButton>
        <Heading {...stylex.props(calendarStyles.heading)} />
        <IconButton variant="secondary" slot="next" aria-label="Previous month">
          <ChevronRight />
        </IconButton>
      </header>
      <Flex align="start" gap="4">
        {monthsVisible.map((month) => (
          <CalendarGrid
            key={month}
            weekdayStyle={weekdayStyle}
            offset={{ months: month }}
            {...stylex.props(calendarStyles.grid)}
          >
            <CalendarGridHeader>
              {(day) => (
                <CalendarHeaderCell
                  {...stylex.props(calendarStyles.headerCell)}
                >
                  {day}
                </CalendarHeaderCell>
              )}
            </CalendarGridHeader>
            <CalendarGridBody>
              {(date) => (
                <CalendarCell
                  date={date}
                  {...stylex.props(calendarStyles.cell)}
                />
              )}
            </CalendarGridBody>
          </CalendarGrid>
        ))}
      </Flex>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </AriaRangeCalendar>
  );
}
