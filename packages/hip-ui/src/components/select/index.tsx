import {
  SelectProps as AriaSelectProps,
  Button,
  Popover,
  SelectValue,
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
import { spacing } from "../theme/spacing.stylex";
import { gray } from "../theme/semantic-color.stylex";
import { slate } from "../theme/colors.stylex";
import { radius } from "../theme/radius.stylex";
import { fontSize, lineHeight } from "../theme/typography.stylex";
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

const styles = stylex.create({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    gap: spacing["2"],
  },
  trigger: {
    alignItems: "center",
    boxSizing: "border-box",
    display: "flex",
    gap: spacing["2"],
    justifyContent: "space-between",
    lineHeight: lineHeight["none"],

    borderColor: {
      default: slate[7],
      ":hover": slate[8],
      ":focus": slate[9],
    },
    borderRadius: radius["md"],
    borderStyle: "solid",
    borderWidth: 1,
  },
  sm: {
    fontSize: fontSize["xs"],
    height: spacing["6"],
    paddingLeft: { ":first-child": spacing["1"] },
    paddingRight: spacing["1"],
  },
  md: {
    fontSize: fontSize["sm"],
    height: spacing["8"],
    paddingLeft: { ":first-child": spacing["2"] },
    paddingRight: spacing["2"],
  },
  lg: {
    fontSize: fontSize["base"],
    height: spacing["10"],
    paddingLeft: spacing["3"],
    paddingRight: spacing["3"],
  },
  popover: {
    borderRadius: radius["md"],
    minWidth: spacing["40"],
    overflow: "auto",
    width: "var(--trigger-width)",
  },
  value: {
    color: {
      ":is([data-placeholder])": slate[11],
    },
  },
});

export interface SelectProps<T extends object, M extends "single" | "multiple">
  extends Omit<AriaSelectProps<T, M>, "children" | "style" | "className"> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  items?: Iterable<T>;
  children: React.ReactNode | ((item: T) => React.ReactNode);
  size?: Size;
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
  size = "md",
  ...props
}: SelectProps<T, M>) {
  return (
    <SizeContext.Provider value={size}>
      <AriaSelect {...props} {...stylex.props(styles.wrapper, style)}>
        {label && <Label size={size}>{label}</Label>}
        <Button
          {...stylex.props(styles.trigger, gray.bgUi, gray.text, styles[size])}
        >
          <SelectValue {...stylex.props(styles.value)} />
          <ChevronDown size={16} aria-hidden="true" />
        </Button>
        {description && <Description size={size}>{description}</Description>}
        <FieldError>{errorMessage}</FieldError>
        <Popover
          {...stylex.props(
            styles.popover,
            gray.bgSubtle,
            gray.text,
            gray.border
          )}
        >
          <ListBox items={items}>{children}</ListBox>
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
