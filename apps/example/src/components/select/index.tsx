import {
  SelectProps as AriaSelectProps,
  Button,
  ListBox,
  ListBoxItem,
  Popover,
  SelectValue,
} from "react-aria-components";
import { Select as AriaSelect } from "react-aria-components";
import * as stylex from "@stylexjs/stylex";
import type { ListBoxItemProps, ValidationResult } from "react-aria-components";
import { FieldError } from "react-aria-components";
import { Description, Label } from "../label";
import { Check, ChevronDown } from "lucide-react";
import { spacing } from "../theme/spacing.stylex";
import { gray } from "../theme/semantic-color.stylex";
import { plum, slate } from "../theme/colors.stylex";
import { radius } from "../theme/radius.stylex";
import {
  fontSize,
  fontWeight,
  lineHeight,
  typeramp,
} from "../theme/typography.stylex";

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
  listbox: {
    outline: "none",
  },
  item: {
    display: "flex",

    boxSizing: "border-box",
    fontWeight: fontWeight["medium"],
    height: {
      ":is([data-listbox-size=sm] *)": spacing["8"],
      ":is([data-listbox-size=md] *)": spacing["8"],
      ":is([data-listbox-size=lg] *)": spacing["10"],
    },
    outline: {
      default: "none",
      ":focus": "none",
    },
    padding: spacing["1"],
  },
  itemInner: {
    alignItems: "center",
    backgroundColor: {
      default: "transparent",
      [":is(:hover > *)"]: slate[4],
      [":is(:active > *)"]: slate[5],
    },
    borderRadius: radius["md"],
    boxSizing: "border-box",
    display: "flex",
    flexGrow: 1,
    gap: spacing["2"],
    justifyContent: "space-between",
    paddingLeft: spacing["2"],
    paddingRight: spacing["2"],
    transitionDuration: "100ms",
    transitionProperty: "background-color",
    transitionTimingFunction: "ease-in-out",
  },
  check: {
    color: plum[9],
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
  size?: "sm" | "md" | "lg";
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
        {...stylex.props(styles.popover, gray.bgSubtle, gray.text, gray.border)}
      >
        <ListBox
          items={items}
          {...stylex.props(styles.listbox)}
          data-listbox-size={size}
        >
          {children}
        </ListBox>
      </Popover>
    </AriaSelect>
  );
}

export interface SelectItemProps
  extends Omit<ListBoxItemProps, "style" | "className" | "children"> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
  children: React.ReactNode;
}

export function SelectItem({ style, children, ...props }: SelectItemProps) {
  return (
    <ListBoxItem
      {...props}
      {...stylex.props(typeramp.label, styles.item, style)}
      textValue={
        props.textValue || typeof props.textValue === "string"
          ? props.textValue
          : undefined
      }
    >
      {({ isSelected }) => (
        <div {...stylex.props(styles.itemInner)}>
          {children}
          {isSelected && <Check size={16} {...stylex.props(styles.check)} />}
        </div>
      )}
    </ListBoxItem>
  );
}
