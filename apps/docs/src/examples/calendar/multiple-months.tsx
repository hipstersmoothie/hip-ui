import { Calendar } from "@/components/calendar";

export function MultipleMonths() {
  return (
    <Calendar
      aria-label="Pick a date"
      visibleDuration={{ months: 2 }}
      weekdayStyle="short"
    />
  );
}
