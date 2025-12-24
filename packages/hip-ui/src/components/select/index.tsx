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
  ListLayout,
  Virtualizer,
} from "react-aria-components";

import { SizeContext } from "../context";
import { Description, FieldErrorMessage, Label } from "../label";
import { ListBox, ListBoxSeparator } from "../listbox";
import { SearchField } from "../search-field";
import { SuffixIcon } from "../suffix-icon";
import { spacing } from "../theme/spacing.stylex";
import {
  InputVariant,
  InputValidationState,
  Size,
  StyleXComponentProps,
} from "../theme/types";
import { useInputStyles } from "../theme/useInputStyles";
import { estimatedRowHeights } from "../theme/useListBoxItemStyles";
import { usePopoverStyles } from "../theme/usePopoverStyles";

const styles = stylex.create({
  matchWidth: {
    minWidth: "var(--trigger-width)",
  },
  searchField: {
    paddingLeft: spacing["1"],
    paddingRight: spacing["1"],
    paddingTop: spacing["1"],
  },
});

interface SelectContentProps<T extends object> {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  size: Size;
  variant: InputVariant | undefined;
  validationState: InputValidationState | undefined;
  isInvalid: boolean;
  placeholder: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  isSearchable: boolean;
  items?: Iterable<T>;
  children: React.ReactNode | ((item: T) => React.ReactNode);
  shouldCloseOnInteractOutside?: ((element: Element) => boolean) | undefined;
  shouldFlip?: boolean;
  shouldUpdatePosition?: boolean;
  placement?: PopoverProps["placement"];
  isVirtualized?: boolean;
}

function SelectContent<T extends object>({
  isVirtualized,
  label,
  description,
  errorMessage,
  size,
  variant,
  validationState,
  isInvalid,
  placeholder,
  prefix,
  suffix,
  isSearchable,
  items,
  children,
  shouldCloseOnInteractOutside,
  shouldFlip,
  shouldUpdatePosition,
  placement,
}: SelectContentProps<T>) {
  const inputStyles = useInputStyles({
    size,
    variant,
    validationState: isInvalid ? "invalid" : validationState,
  });
  const popoverStyles = usePopoverStyles();
  const { contains } = useFilter({ sensitivity: "base" });

  let listbox = <ListBox items={items}>{children}</ListBox>;

  if (isVirtualized) {
    listbox = (
      <Virtualizer
        layout={ListLayout}
        layoutOptions={{ estimatedRowHeight: estimatedRowHeights[size] }}
      >
        {listbox}
      </Virtualizer>
    );
  }

  if (isSearchable) {
    listbox = (
      <Autocomplete filter={contains}>
        <div {...stylex.props(styles.searchField)}>
          <SearchField placeholder="Search" variant="secondary" />
        </div>
        <ListBoxSeparator />
        {listbox}
      </Autocomplete>
    );
  }

  return (
    <>
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
        <SuffixIcon
          suffix={
            <>
              {suffix}
              <ChevronDown size={16} aria-hidden="true" />
            </>
          }
          style={inputStyles.addon}
          validationIconStyle={inputStyles.validationIcon}
          validationState={validationState}
        />
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
        {listbox}
      </Popover>
    </>
  );
}

export interface SelectProps<T extends object, M extends "single" | "multiple">
  extends
    StyleXComponentProps<Omit<AriaSelectProps<T, M>, "children" | "isInvalid">>,
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
  validationState?: InputValidationState;
  placeholder?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  isSearchable?: boolean;
  isVirtualized?: boolean;
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
  validationState,
  shouldCloseOnInteractOutside,
  shouldFlip,
  shouldUpdatePosition,
  placement,
  placeholder = "Select an option",
  prefix,
  suffix,
  isSearchable = false,
  isVirtualized = false,
  ...props
}: SelectProps<T, M>) {
  const size = sizeProp || use(SizeContext);
  const inputStyles = useInputStyles({ size, variant, validationState });

  return (
    <SizeContext value={size}>
      <AriaSelect
        {...props}
        isInvalid={validationState ? validationState === "invalid" : undefined}
        {...stylex.props(inputStyles.field, style)}
        placeholder={placeholder}
      >
        {({ isInvalid }) => (
          <SelectContent
            isVirtualized={isVirtualized}
            label={label}
            description={description}
            errorMessage={errorMessage}
            size={size}
            variant={variant}
            validationState={validationState}
            isInvalid={isInvalid}
            placeholder={placeholder}
            prefix={prefix}
            suffix={suffix}
            isSearchable={isSearchable}
            items={items}
            shouldCloseOnInteractOutside={shouldCloseOnInteractOutside}
            shouldFlip={shouldFlip}
            shouldUpdatePosition={shouldUpdatePosition}
            placement={placement}
          >
            {children}
          </SelectContent>
        )}
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
