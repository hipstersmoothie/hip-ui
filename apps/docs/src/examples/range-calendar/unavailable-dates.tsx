import { RangeCalendar } from "@/components/range-calendar";

export function UnavailableRangeDates() {
  return (
    <RangeCalendar
      aria-label="Select a date range"
      isDateUnavailable={(date) => date.day % 2 === 0}
    />
  );
}
