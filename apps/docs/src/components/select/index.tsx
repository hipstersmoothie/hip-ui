import type { ValidationResult } from "react-aria-components";

import * as stylex from "@stylexjs/stylex";
import { ChevronDown } from "lucide-react";
import { use } from "react";
import {
  SelectProps as AriaSelectProps,
  Button,
  Popover,
  SelectValue,
  PopoverProps,
  Select as AriaSelect,
  FieldError,
} from "react-aria-components";

import { SizeContext } from "../context";
import { Description, Label } from "../label";
import { ListBox } from "../listbox";
import { InputVariant, Size } from "../theme/types";
import { useInputStyles } from "../theme/useInputStyles";
import { usePopoverStyles } from "../theme/usePopoverStyles";

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
  variant?: InputVariant;
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
  variant,
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
  const inputStyles = useInputStyles({ size, variant });
  const popoverStyles = usePopoverStyles();

  return (
    <SizeContext value={size}>
      <AriaSelect
        {...props}
        {...stylex.props(inputStyles.field, style)}
        placeholder={placeholder}
      >
        {label && <Label size={size}>{label}</Label>}
        <Button {...stylex.props(inputStyles.wrapper)}>
          {prefix != null && (
            <div {...stylex.props(inputStyles.addon)}>{prefix}</div>
          )}
          <SelectValue {...stylex.props(inputStyles.input)}>
            {({ selectedText, isPlaceholder, defaultChildren }) => {
              if (isPlaceholder) return placeholder;
              if (selectedText) return selectedText;

              return defaultChildren;
            }}
          </SelectValue>
          {suffix != null && (
            <div {...stylex.props(inputStyles.addon)}>{suffix}</div>
          )}
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
    </SizeContext>
  );
}

export type {
  ListBoxItemProps as SelectItemProps,
  ListBoxSectionProps as SelectSectionProps,
  ListBoxSectionHeaderProps as SelectSectionHeaderProps,
  ListBoxSeparatorProps as SelectSeparatorProps,
} from "../listbox";

export {
  ListBoxItem as SelectItem,
  ListBoxSection as SelectSection,
  ListBoxSectionHeader as SelectSectionHeader,
  ListBoxSeparator as SelectSeparator,
} from "../listbox";
