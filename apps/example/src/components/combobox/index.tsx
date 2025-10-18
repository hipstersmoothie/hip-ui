import {
  Button,
  Popover,
  PopoverProps,
  ComboBox as AriaComboBox,
  ComboBoxProps as AriaComboBoxProps,
  Input,
} from "react-aria-components";
import * as stylex from "@stylexjs/stylex";
import type {
  ListBoxProps,
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
import { IconButton } from "../icon-button";
import { SmallBody } from "../typography";
import { spacing } from "../theme/spacing.stylex";
import { use } from "react";

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
  extends Omit<AriaComboBoxProps<T>, "children" | "style" | "className">,
    Pick<
      PopoverProps,
      | "shouldCloseOnInteractOutside"
      | "shouldFlip"
      | "shouldUpdatePosition"
      | "placement"
    >,
    Pick<ListBoxProps<T>, "renderEmptyState"> {
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

export function ComboBox<T extends object>({
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
  renderEmptyState,
  ...props
}: ComboBoxProps<T>) {
  const size = sizeProp || use(SizeContext);
  const inputStyles = useInputStyles({ size });
  const popoverStyles = usePopoverStyles();

  return (
    <SizeContext.Provider value={size}>
      <AriaComboBox {...props} {...stylex.props(inputStyles.field, style)}>
        {label && <Label size={size}>{label}</Label>}
        <Button {...stylex.props(inputStyles.wrapper)}>
          {prefix && <div {...stylex.props(inputStyles.addon)}>{prefix}</div>}
          <Input
            {...stylex.props(inputStyles.input)}
            placeholder={placeholder}
          />
          {suffix && <div {...stylex.props(inputStyles.addon)}>{suffix}</div>}
          <div {...stylex.props(inputStyles.addon)}>
            <IconButton size="sm" variant="secondary" label="Open combobox">
              <ChevronDown size={16} aria-hidden="true" />
            </IconButton>
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
            renderEmptyState={renderEmptyState || EmptyState}
          >
            {children}
          </ListBox>
        </Popover>
      </AriaComboBox>
    </SizeContext.Provider>
  );
}

export type ComboBoxItemProps = ListBoxItemProps;
export const ComboBoxItem = ListBoxItem;
export type ComboBoxSectionProps<T extends object> = ListBoxSectionProps<T>;
export const ComboBoxSection = ListBoxSection;
export type ComboBoxSectionHeaderProps = ListBoxSectionHeaderProps;
export const ComboBoxSectionHeader = ListBoxSectionHeader;
export type ComboBoxSeparatorProps = ListBoxSeparatorProps;
export const ComboBoxSeparator = ListBoxSeparator;
