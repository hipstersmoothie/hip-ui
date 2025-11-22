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
import { SuffixIcon } from "../suffix-icon";
import { uiColor } from "../theme/semantic-color.stylex";
import { spacing } from "../theme/spacing.stylex";
import {
  InputVariant,
  InputValidationState,
  Size,
  StyleXComponentProps,
} from "../theme/types";
import { fontSize } from "../theme/typography.stylex";
import { useInputStyles } from "../theme/useInputStyles";
import { usePopoverStyles } from "../theme/usePopoverStyles";

export interface DateRangePickerProps<T extends DateValue>
  extends StyleXComponentProps<Omit<AriaDateRangePickerProps<T>, "isInvalid">>,
    Pick<RangeCalendarProps<T>, "weekdayStyle" | "visibleDuration"> {
  label?: React.ReactNode;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  size?: Size;
  variant?: InputVariant;
  validationState?: InputValidationState;
}

const styles = stylex.create({
  group: {
    gap: spacing["1"],
    alignItems: "center",
    display: "flex",

    fontSize: {
      ":is([data-size=lg])": fontSize["base"],
      ":is([data-size=md])": fontSize["sm"],
      ":is([data-size=sm])": fontSize["xs"],
    },
  },
  popoverContent: {
    padding: spacing["2"],
  },
  separator: {
    paddingRight: {
      ":is([data-size=lg] *)": spacing["1"],
      ":is([data-size=md] *)": spacing["2"],
      ":is([data-size=sm] *)": spacing["1"],
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

interface DateRangePickerContentProps<T extends DateValue> {
  label?: React.ReactNode;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  size: Size;
  variant: InputVariant | undefined;
  validationState: InputValidationState | undefined;
  isInvalid: boolean;
  weekdayStyle?: RangeCalendarProps<T>["weekdayStyle"];
  visibleDuration?: RangeCalendarProps<T>["visibleDuration"];
}

function DateRangePickerContent<T extends DateValue>({
  label,
  description,
  errorMessage,
  size,
  variant,
  validationState,
  isInvalid,
  weekdayStyle,
  visibleDuration,
}: DateRangePickerContentProps<T>) {
  const inputStyles = useInputStyles({
    size,
    variant,
    validationState: isInvalid ? "invalid" : validationState,
  });
  const popoverStyles = usePopoverStyles();

  return (
    <>
      <Label>{label}</Label>
      <Group
        data-size={size}
        {...stylex.props(inputStyles.wrapper, styles.group)}
      >
        <DateInput slot="start" {...stylex.props(inputStyles.input)}>
          {(segment) => (
            <DateSegment segment={segment} {...stylex.props(styles.segment)} />
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
            <DateSegment segment={segment} {...stylex.props(styles.segment)} />
          )}
        </DateInput>
        <SuffixIcon
          suffix={
            <IconButton
              size="sm"
              aria-label="Open date picker"
              variant="tertiary"
            >
              <CalendarIcon />
            </IconButton>
          }
          style={inputStyles.addon}
          validationIconStyle={inputStyles.validationIcon}
          validationState={validationState}
        />
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
    </>
  );
}

export function DateRangePicker<T extends DateValue>({
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
}: DateRangePickerProps<T>) {
  const size = sizeProp || use(SizeContext);
  const inputStyles = useInputStyles({ size, variant, validationState });

  return (
    <SizeContext value={size}>
      <AriaDateRangePicker
        {...props}
        isInvalid={validationState ? validationState === "invalid" : undefined}
        {...stylex.props(inputStyles.field, style)}
      >
        {({ isInvalid }) => (
          <DateRangePickerContent
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
      </AriaDateRangePicker>
    </SizeContext>
  );
}
