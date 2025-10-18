import {
  SelectProps as AriaSelectProps,
  Button,
  Popover,
  SelectValue,
  PopoverProps,
} from "react-aria-components";
import { Select as AriaSelect } from "react-aria-components";
import * as stylex from "@stylexjs/stylex";
import type {
  ListBoxSectionProps,
  ValidationResult,
} from "react-aria-components";
import { FieldError } from "react-aria-components";
import { Description, Label } from "../label";
import { ChevronDown } from "lucide-react";
import { Size } from "../types";
import {
  ListBox,
  ListBoxItem,
  ListBoxItemProps,
  ListBoxSectionHeaderProps,
  ListBoxSectionHeader,
  ListBoxSeparatorProps,
  ListBoxSeparator,
  ListBoxSection,
} from "../listbox";
import { SizeContext } from "../context";
import { useInputStyles } from "../theme/useInputStyles";
import { usePopoverStyles } from "../theme/usePopoverStyles";
import { use } from "react";

const styles = stylex.create({
  matchWidth: {
    width: "var(--trigger-width)",
  },
});

export interface SelectProps<T extends object, M extends "single" | "multiple">
  extends Omit<AriaSelectProps<T, M>, "children" | "style" | "className">,
    Pick<
      PopoverProps,
      | "shouldCloseOnInteractOutside"
      | "shouldFlip"
      | "shouldUpdatePosition"
      | "placement"
    > {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  items?: Iterable<T>;
  children: React.ReactNode | ((item: T) => React.ReactNode);
  size?: Size;
  placeholder?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

export function Select<
  T extends object,
  M extends "single" | "multiple" = "single",
>({
  label,
  description,
  errorMessage,
  children,
  items,
  style,
  size: sizeProp,
  shouldCloseOnInteractOutside,
  shouldFlip,
  shouldUpdatePosition,
  placement,
  placeholder = "Select an option",
  prefix,
  suffix,
  ...props
}: SelectProps<T, M>) {
  const size = sizeProp || use(SizeContext);
  const inputStyles = useInputStyles({ size });
  const popoverStyles = usePopoverStyles();

  return (
    <SizeContext.Provider value={size}>
      <AriaSelect
        {...props}
        {...stylex.props(inputStyles.field, style)}
        placeholder={placeholder}
      >
        {label && <Label size={size}>{label}</Label>}
        <Button {...stylex.props(inputStyles.wrapper)}>
          {prefix && <div {...stylex.props(inputStyles.addon)}>{prefix}</div>}
          <SelectValue {...stylex.props(inputStyles.input)}>
            {({ selectedText, isPlaceholder, defaultChildren }) => {
              if (isPlaceholder) return placeholder;
              if (selectedText) return selectedText;

              return defaultChildren;
            }}
          </SelectValue>
          {suffix && <div {...stylex.props(inputStyles.addon)}>{suffix}</div>}
          <div {...stylex.props(inputStyles.addon)}>
            <ChevronDown size={16} aria-hidden="true" />
          </div>
        </Button>
        {description && <Description size={size}>{description}</Description>}
        <FieldError>{errorMessage}</FieldError>
        <Popover
          containerPadding={8}
          shouldCloseOnInteractOutside={shouldCloseOnInteractOutside}
          shouldFlip={shouldFlip}
          shouldUpdatePosition={shouldUpdatePosition}
          placement={placement}
        >
          <ListBox
            items={items}
            {...stylex.props(popoverStyles, styles.matchWidth)}
          >
            {children}
          </ListBox>
        </Popover>
      </AriaSelect>
    </SizeContext.Provider>
  );
}

export type SelectItemProps = ListBoxItemProps;
export const SelectItem = ListBoxItem;
export type SelectSectionProps<T extends object> = ListBoxSectionProps<T>;
export const SelectSection = ListBoxSection;
export type SelectSectionHeaderProps = ListBoxSectionHeaderProps;
export const SelectSectionHeader = ListBoxSectionHeader;
export type SelectSeparatorProps = ListBoxSeparatorProps;
export const SelectSeparator = ListBoxSeparator;
