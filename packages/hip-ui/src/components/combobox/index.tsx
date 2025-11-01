import type { ListBoxProps, ValidationResult } from "react-aria-components";

import * as stylex from "@stylexjs/stylex";
import { ChevronDown } from "lucide-react";
import { use } from "react";
import {
  Button,
  Popover,
  PopoverProps,
  ComboBox as AriaComboBox,
  ComboBoxProps as AriaComboBoxProps,
  Input,
} from "react-aria-components";

import { SizeContext } from "../context";
import { IconButton } from "../icon-button";
import { Description, FieldErrorMessage, Label } from "../label";
import { ListBox } from "../listbox";
import { spacing } from "../theme/spacing.stylex";
import { InputVariant, Size, StyleXComponentProps } from "../theme/types";
import { useInputStyles } from "../theme/useInputStyles";
import { usePopoverStyles } from "../theme/usePopoverStyles";
import { SmallBody } from "../typography";

const styles = stylex.create({
  matchWidth: {
    width: "var(--trigger-width)",
  },
  emptyState: {
    display: "flex",
    justifyContent: "center",
    padding: spacing["4"],
  },
});

function EmptyState() {
  return (
    <div {...stylex.props(styles.emptyState)}>
      <SmallBody variant="secondary">No items found</SmallBody>
    </div>
  );
}

export interface ComboBoxProps<T extends object>
  extends StyleXComponentProps<Omit<AriaComboBoxProps<T>, "children">>,
    Pick<
      PopoverProps,
      | "shouldCloseOnInteractOutside"
      | "shouldFlip"
      | "shouldUpdatePosition"
      | "placement"
    >,
    Pick<ListBoxProps<T>, "renderEmptyState"> {
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

export function ComboBox<T extends object>({
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
  renderEmptyState,
  ...props
}: ComboBoxProps<T>) {
  const size = sizeProp || use(SizeContext);
  const inputStyles = useInputStyles({ size, variant });
  const popoverStyles = usePopoverStyles();

  return (
    <SizeContext value={size}>
      <AriaComboBox {...props} {...stylex.props(inputStyles.field, style)}>
        <Label>{label}</Label>
        <Button {...stylex.props(inputStyles.wrapper)}>
          {prefix != null && (
            <div {...stylex.props(inputStyles.addon)}>{prefix}</div>
          )}
          <Input
            {...stylex.props(inputStyles.input)}
            placeholder={placeholder}
          />
          {suffix != null && (
            <div {...stylex.props(inputStyles.addon)}>{suffix}</div>
          )}
          <div {...stylex.props(inputStyles.addon)}>
            <IconButton size="sm" variant="secondary" label="Open combobox">
              <ChevronDown size={16} aria-hidden="true" />
            </IconButton>
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
          <ListBox
            items={items}
            renderEmptyState={renderEmptyState || EmptyState}
          >
            {children}
          </ListBox>
        </Popover>
      </AriaComboBox>
    </SizeContext>
  );
}

export type {
  ListBoxItemProps as ComboBoxItemProps,
  ListBoxSectionProps as ComboBoxSectionProps,
  ListBoxSectionHeaderProps as ComboBoxSectionHeaderProps,
  ListBoxSeparatorProps as ComboBoxSeparatorProps,
} from "../listbox";

export {
  ListBoxItem as ComboBoxItem,
  ListBoxSection as ComboBoxSection,
  ListBoxSectionHeader as ComboBoxSectionHeader,
  ListBoxSeparator as ComboBoxSeparator,
} from "../listbox";
