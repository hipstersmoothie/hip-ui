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
  Autocomplete,
  useFilter,
} from "react-aria-components";

import { SizeContext } from "../context";
import { Description, FieldErrorMessage, Label } from "../label";
import { ListBox, ListBoxSeparator } from "../listbox";
import { SearchField } from "../search-field";
import { spacing } from "../theme/spacing.stylex";
import { InputVariant, Size, StyleXComponentProps } from "../theme/types";
import { useInputStyles } from "../theme/useInputStyles";
import { usePopoverStyles } from "../theme/usePopoverStyles";

const styles = stylex.create({
  matchWidth: {
    width: "var(--trigger-width)",
  },
  searchField: {
    paddingLeft: spacing["1"],
    paddingRight: spacing["1"],
  },
});

export interface SelectProps<T extends object, M extends "single" | "multiple">
  extends StyleXComponentProps<Omit<AriaSelectProps<T, M>, "children">>,
    Pick<
      PopoverProps,
      | "shouldCloseOnInteractOutside"
      | "shouldFlip"
      | "shouldUpdatePosition"
      | "placement"
    > {
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
  isSearchable?: boolean;
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
  isSearchable = false,
  ...props
}: SelectProps<T, M>) {
  const size = sizeProp || use(SizeContext);
  const inputStyles = useInputStyles({ size, variant });
  const popoverStyles = usePopoverStyles();
  const { contains } = useFilter({ sensitivity: "base" });

  return (
    <SizeContext value={size}>
      <AriaSelect
        {...props}
        {...stylex.props(inputStyles.field, style)}
        placeholder={placeholder}
      >
        <Label>{label}</Label>
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
        <Description>{description}</Description>
        <FieldErrorMessage>{errorMessage}</FieldErrorMessage>
        <Popover
          containerPadding={8}
          shouldCloseOnInteractOutside={shouldCloseOnInteractOutside}
          shouldFlip={shouldFlip}
          shouldUpdatePosition={shouldUpdatePosition}
          placement={placement}
          {...stylex.props(
            popoverStyles.wrapper,
            popoverStyles.animation,
            styles.matchWidth,
          )}
        >
          {isSearchable ? (
            <Autocomplete filter={contains}>
              <div {...stylex.props(styles.searchField)}>
                <SearchField placeholder="Search" variant="secondary" />
              </div>
              <ListBoxSeparator />
              <ListBox items={items}>{children}</ListBox>
            </Autocomplete>
          ) : (
            <ListBox items={items}>{children}</ListBox>
          )}
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
