import { Calendar } from "@/components/calendar";

export function UnavailableDates() {
  return (
    <Calendar
      aria-label="Pick a date"
      isDateUnavailable={(date) => {
        return date.day % 2 === 0;
      }}
    />
  );
}
