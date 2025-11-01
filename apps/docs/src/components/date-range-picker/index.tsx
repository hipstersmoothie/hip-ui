import * as stylex from "@stylexjs/stylex";
import { CalendarIcon } from "lucide-react";
import { use } from "react";
import {
  DateRangePicker as AriaDateRangePicker,
  DateRangePickerProps as AriaDateRangePickerProps,
  DateValue,
  ValidationResult,
  Group,
  Dialog,
  Popover as AriaPopover,
  DateInput,
  DateSegment,
} from "react-aria-components";

import { SizeContext } from "../context";
import { IconButton } from "../icon-button";
import { Description, FieldErrorMessage, Label } from "../label";
import { RangeCalendar, RangeCalendarProps } from "../range-calendar";
import { uiColor } from "../theme/semantic-color.stylex";
import { spacing } from "../theme/spacing.stylex";
import { InputVariant, Size, StyleXComponentProps } from "../theme/types";
import { fontSize } from "../theme/typography.stylex";
import { useInputStyles } from "../theme/useInputStyles";
import { usePopoverStyles } from "../theme/usePopoverStyles";

export interface DateRangePickerProps<T extends DateValue>
  extends StyleXComponentProps<AriaDateRangePickerProps<T>>,
    Pick<RangeCalendarProps<T>, "weekdayStyle" | "visibleDuration"> {
  label?: React.ReactNode;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  size?: Size;
  variant?: InputVariant;
}

const styles = stylex.create({
  group: {
    alignItems: "center",
    display: "flex",
    gap: spacing["1"],

    fontSize: {
      ":is([data-size=sm])": fontSize["xs"],
      ":is([data-size=md])": fontSize["sm"],
      ":is([data-size=lg])": fontSize["base"],
    },
  },
  popoverContent: {
    padding: spacing["2"],
  },
  separator: {
    paddingRight: {
      ":is([data-size=sm] *)": spacing["1"],
      ":is([data-size=md] *)": spacing["2"],
      ":is([data-size=lg] *)": spacing["1"],
    },
  },
  lastInput: {
    paddingRight: 0,
  },
  segment: {
    color: {
      ":is([data-placeholder])": uiColor.text1,
    },
  },
});

export function DateRangePicker<T extends DateValue>({
  label,
  description,
  errorMessage,
  style,
  size: sizeProp,
  weekdayStyle,
  visibleDuration,
  variant,
  ...props
}: DateRangePickerProps<T>) {
  const size = sizeProp || use(SizeContext);
  const inputStyles = useInputStyles({ size, variant });
  const popoverStyles = usePopoverStyles();

  return (
    <SizeContext value={size}>
      <AriaDateRangePicker
        {...props}
        {...stylex.props(inputStyles.field, style)}
      >
        <Label>{label}</Label>
        <Group
          data-size={size}
          {...stylex.props(inputStyles.wrapper, styles.group)}
        >
          <DateInput slot="start" {...stylex.props(inputStyles.input)}>
            {(segment) => (
              <DateSegment
                segment={segment}
                {...stylex.props(styles.segment)}
              />
            )}
          </DateInput>
          <div aria-hidden="true" {...stylex.props(styles.separator)}>
            -
          </div>
          <DateInput
            slot="end"
            {...stylex.props(inputStyles.input, styles.lastInput)}
          >
            {(segment) => (
              <DateSegment
                segment={segment}
                {...stylex.props(styles.segment)}
              />
            )}
          </DateInput>
          <IconButton
            size="sm"
            aria-label="Open date picker"
            variant="tertiary"
          >
            <CalendarIcon />
          </IconButton>
        </Group>
        <Description>{description}</Description>
        <FieldErrorMessage>{errorMessage}</FieldErrorMessage>
        <AriaPopover
          {...stylex.props(popoverStyles.wrapper, popoverStyles.animation)}
        >
          <Dialog {...stylex.props(styles.popoverContent)}>
            <RangeCalendar
              weekdayStyle={weekdayStyle}
              visibleDuration={visibleDuration}
            />
          </Dialog>
        </AriaPopover>
      </AriaDateRangePicker>
    </SizeContext>
  );
}
