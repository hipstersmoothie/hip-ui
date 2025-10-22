import * as stylex from "@stylexjs/stylex";
import { Check } from "lucide-react";
import { use } from "react";
import {
  ListBoxProps as AriaListBoxProps,
  ListBoxItem as AriaListBoxItem,
  ListBox as AriaListBox,
  ListBoxSection as AriaListBoxSection,
  ListBoxSectionProps as AriaListBoxSectionProps,
  ListBoxItemProps as AriaListBoxItemProps,
  Header,
  SeparatorProps,
} from "react-aria-components";

import { SizeContext } from "../context";
import { Separator } from "../separator";
import { ui } from "../theme/semantic-color.stylex";
import { spacing } from "../theme/spacing.stylex";
import { Size } from "../theme/types";
import { typeramp } from "../theme/typography.stylex";
import { useListBoxItemStyles } from "../theme/useListBoxItemStyles";

const styles = stylex.create({
  listBox: {
    outline: "none",
  },
  sectionLabel: {
    alignItems: "center",
    boxSizing: "border-box",
    display: "flex",
    paddingBottom: spacing["1"],
    paddingLeft: spacing["3"],
    paddingRight: spacing["3"],
    paddingTop: spacing["1"],
  },
  smSectionLabel: {
    height: spacing["7"],
  },
  mdSectionLabel: {
    height: spacing["7"],
  },
  lgSectionLabel: {
    height: spacing["9"],
  },
  separator: {
    marginBottom: spacing["1.5"],
    marginTop: spacing["1.5"],
  },
});

export interface ListBoxProps<T extends object>
  extends Omit<AriaListBoxProps<T>, "style" | "className"> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
  size?: Size;
  items?: Iterable<T>;
  children: React.ReactNode | ((item: T) => React.ReactNode);
}

export function ListBox<T extends object>({
  size: sizeProp,
  style,
  ...props
}: ListBoxProps<T>) {
  const size = sizeProp || use(SizeContext);

  return (
    <SizeContext value={size}>
      <AriaListBox {...stylex.props(styles.listBox, style)} {...props} />
    </SizeContext>
  );
}

export interface ListBoxItemProps
  extends Omit<AriaListBoxItemProps, "style" | "className" | "children"> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
  children: React.ReactNode;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

export function ListBoxItem({
  style,
  children,
  prefix,
  suffix,
  ...props
}: ListBoxItemProps) {
  const listBoxItemStyles = useListBoxItemStyles();

  return (
    <AriaListBoxItem
      {...props}
      value={props.value || { id: props.id, label: children }}
      textValue={
        props.textValue || (typeof children === "string" ? children : undefined)
      }
      {...stylex.props(listBoxItemStyles.wrapper, style)}
    >
      {({ isSelected }) => (
        <div {...stylex.props(listBoxItemStyles.inner)}>
          {prefix != null && (
            <div {...stylex.props(listBoxItemStyles.addon)}>{prefix}</div>
          )}
          <div {...stylex.props(listBoxItemStyles.label)}>{children}</div>
          {suffix != null && (
            <div {...stylex.props(listBoxItemStyles.addon)}>{suffix}</div>
          )}
          {isSelected && (
            <Check size={16} {...stylex.props(listBoxItemStyles.check)} />
          )}
        </div>
      )}
    </AriaListBoxItem>
  );
}

export interface ListBoxSectionProps<T extends object>
  extends Omit<AriaListBoxSectionProps<T>, "style" | "className"> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
  children: React.ReactNode;
}

export function ListBoxSection<T extends object>({
  style,
  ...props
}: ListBoxSectionProps<T>) {
  return <AriaListBoxSection {...props} {...stylex.props(style)} />;
}

export interface ListBoxSeparatorProps
  extends Omit<SeparatorProps, "style" | "className"> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
}

export function ListBoxSeparator({ style, ...props }: ListBoxSeparatorProps) {
  return <Separator {...props} style={[styles.separator, style]} />;
}

export interface ListBoxSectionHeaderProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "style" | "className"> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
}

export function ListBoxSectionHeader({
  style,
  ...props
}: ListBoxSectionHeaderProps) {
  const size = use(SizeContext);

  return (
    <Header
      {...props}
      {...stylex.props(
        typeramp.sublabel,
        styles.sectionLabel,
        ui.textDim,
        styles[`${size}SectionLabel`],
        style,
      )}
    />
  );
}
