import * as stylex from "@stylexjs/stylex";
import { CalendarIcon } from "lucide-react";
import { use } from "react";
import {
  DatePicker as AriaDatePicker,
  DatePickerProps as AriaDatePickerProps,
  DateValue,
  ValidationResult,
  Group,
  Dialog,
  Popover as AriaPopover,
} from "react-aria-components";

import { Calendar, CalendarProps } from "../calendar";
import { SizeContext } from "../context";
import { DateField } from "../date-field";
import { IconButton } from "../icon-button";
import { Description, FieldErrorMessage, Label } from "../label";
import { spacing } from "../theme/spacing.stylex";
import { InputVariant, Size, StyleXComponentProps } from "../theme/types";
import { useInputStyles } from "../theme/useInputStyles";
import { usePopoverStyles } from "../theme/usePopoverStyles";

export interface DatePickerProps<T extends DateValue>
  extends StyleXComponentProps<AriaDatePickerProps<T>>,
    Pick<CalendarProps<T>, "weekdayStyle" | "visibleDuration"> {
  label?: React.ReactNode;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  size?: Size;
  variant?: InputVariant;
}

const styles = stylex.create({
  popoverContent: {
    padding: spacing["2"],
  },
});

export function DatePicker<T extends DateValue>({
  label,
  description,
  errorMessage,
  style,
  size: sizeProp,
  weekdayStyle,
  visibleDuration,
  variant,
  ...props
}: DatePickerProps<T>) {
  const size = sizeProp || use(SizeContext);
  const inputStyles = useInputStyles({ size, variant });
  const popoverStyles = usePopoverStyles();

  return (
    <SizeContext value={size}>
      <AriaDatePicker {...props} {...stylex.props(inputStyles.field, style)}>
        <Label>{label}</Label>
        <Group>
          <DateField
            variant={variant}
            suffix={
              <IconButton
                size="sm"
                aria-label="Open date picker"
                variant="tertiary"
              >
                <CalendarIcon />
              </IconButton>
            }
          />
        </Group>
        <Description>{description}</Description>
        <FieldErrorMessage>{errorMessage}</FieldErrorMessage>
        <AriaPopover
          {...stylex.props(popoverStyles.wrapper, popoverStyles.animation)}
        >
          <Dialog {...stylex.props(styles.popoverContent)}>
            <Calendar
              weekdayStyle={weekdayStyle}
              visibleDuration={visibleDuration}
            />
          </Dialog>
        </AriaPopover>
      </AriaDatePicker>
    </SizeContext>
  );
}
