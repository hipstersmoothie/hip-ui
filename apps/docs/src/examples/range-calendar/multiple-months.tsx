import { RangeCalendar } from "@/components/range-calendar";

export function MultipleMonthsRange() {
  return (
    <RangeCalendar
      aria-label="Select a date range"
      visibleDuration={{ months: 2 }}
      weekdayStyle="short"
    />
  );
}


