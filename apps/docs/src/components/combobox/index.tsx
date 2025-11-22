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
import { Description, FieldErrorMessage, Label } from "../label";
import { ListBox } from "../listbox";
import { SuffixIcon } from "../suffix-icon";
import { spacing } from "../theme/spacing.stylex";
import {
  InputVariant,
  InputValidationState,
  Size,
  StyleXComponentProps,
} from "../theme/types";
import { useInputStyles } from "../theme/useInputStyles";
import { usePopoverStyles } from "../theme/usePopoverStyles";
import { SmallBody } from "../typography";

const styles = stylex.create({
  matchWidth: {
    width: "var(--trigger-width)",
  },
  emptyState: {
    padding: spacing["4"],
    display: "flex",
    justifyContent: "center",
  },
});

function EmptyState() {
  return (
    <div {...stylex.props(styles.emptyState)}>
      <SmallBody variant="secondary">No items found</SmallBody>
    </div>
  );
}

interface ComboBoxContentProps<T extends object> {
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
  items?: Iterable<T>;
  children: React.ReactNode | ((item: T) => React.ReactNode);
  shouldCloseOnInteractOutside?: ((element: Element) => boolean) | undefined;
  shouldFlip?: boolean;
  shouldUpdatePosition?: boolean;
  placement?: PopoverProps["placement"];
  renderEmptyState?: ListBoxProps<T>["renderEmptyState"];
}

function ComboBoxContent<T extends object>({
  label,
  description,
  errorMessage,
  size,
  variant,
  validationState,
  isInvalid: _isInvalid,
  placeholder,
  prefix,
  suffix,
  items,
  children,
  shouldCloseOnInteractOutside,
  shouldFlip,
  shouldUpdatePosition,
  placement,
  renderEmptyState,
}: ComboBoxContentProps<T>) {
  const inputStyles = useInputStyles({
    size,
    variant,
    validationState: _isInvalid ? "invalid" : validationState,
  });
  const popoverStyles = usePopoverStyles();

  return (
    <>
      <Label>{label}</Label>
      <Button {...stylex.props(inputStyles.wrapper)}>
        {prefix != null && (
          <div {...stylex.props(inputStyles.addon)}>{prefix}</div>
        )}
        <Input {...stylex.props(inputStyles.input)} placeholder={placeholder} />
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
        <ListBox
          items={items}
          renderEmptyState={renderEmptyState || EmptyState}
        >
          {children}
        </ListBox>
      </Popover>
    </>
  );
}

export interface ComboBoxProps<T extends object>
  extends StyleXComponentProps<
      Omit<AriaComboBoxProps<T>, "children" | "isInvalid">
    >,
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
  validationState?: InputValidationState;
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
  validationState,
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
  const inputStyles = useInputStyles({ size, variant, validationState });

  return (
    <SizeContext value={size}>
      <AriaComboBox
        {...props}
        isInvalid={validationState ? validationState === "invalid" : undefined}
        {...stylex.props(inputStyles.field, style)}
      >
        {({ isInvalid }) => (
          <ComboBoxContent
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
            items={items}
            shouldCloseOnInteractOutside={shouldCloseOnInteractOutside}
            shouldFlip={shouldFlip}
            shouldUpdatePosition={shouldUpdatePosition}
            placement={placement}
            renderEmptyState={renderEmptyState}
          >
            {children}
          </ComboBoxContent>
        )}
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
