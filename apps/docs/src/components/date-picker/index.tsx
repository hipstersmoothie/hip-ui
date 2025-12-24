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
import {
  InputVariant,
  InputValidationState,
  Size,
  StyleXComponentProps,
} from "../theme/types";
import { useInputStyles } from "../theme/useInputStyles";
import { usePopoverStyles } from "../theme/usePopoverStyles";

export interface DatePickerProps<T extends DateValue>
  extends
    StyleXComponentProps<Omit<AriaDatePickerProps<T>, "isInvalid">>,
    Pick<CalendarProps<T>, "weekdayStyle" | "visibleDuration"> {
  label?: React.ReactNode;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  size?: Size;
  variant?: InputVariant;
  validationState?: InputValidationState;
}

const styles = stylex.create({
  popoverContent: {
    padding: spacing["2"],
  },
});

interface DatePickerContentProps<T extends DateValue> {
  label?: React.ReactNode;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  size: Size;
  variant: InputVariant | undefined;
  validationState: InputValidationState | undefined;
  isInvalid: boolean;
  weekdayStyle?: CalendarProps<T>["weekdayStyle"];
  visibleDuration?: CalendarProps<T>["visibleDuration"];
}

function DatePickerContent<T extends DateValue>({
  label,
  description,
  errorMessage,
  size: _size,
  variant,
  validationState,
  isInvalid: _isInvalid,
  weekdayStyle,
  visibleDuration,
}: DatePickerContentProps<T>) {
  const popoverStyles = usePopoverStyles();

  return (
    <>
      <Label>{label}</Label>
      <Group>
        <DateField
          variant={variant}
          validationState={validationState}
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
    </>
  );
}

export function DatePicker<T extends DateValue>({
  label,
  description,
  errorMessage,
  style,
  size: sizeProp,
  weekdayStyle,
  visibleDuration,
  variant,
  validationState,
  ...props
}: DatePickerProps<T>) {
  const size = sizeProp || use(SizeContext);
  const inputStyles = useInputStyles({ size, variant, validationState });

  return (
    <SizeContext value={size}>
      <AriaDatePicker
        {...props}
        isInvalid={validationState ? validationState === "invalid" : undefined}
        {...stylex.props(inputStyles.field, style)}
      >
        {({ isInvalid }) => (
          <DatePickerContent
            label={label}
            description={description}
            errorMessage={errorMessage}
            size={size}
            variant={variant}
            validationState={validationState}
            isInvalid={isInvalid}
            weekdayStyle={weekdayStyle}
            visibleDuration={visibleDuration}
          />
        )}
      </AriaDatePicker>
    </SizeContext>
  );
}
