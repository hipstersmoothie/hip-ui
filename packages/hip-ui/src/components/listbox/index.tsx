import * as stylex from "@stylexjs/stylex";
import { Check } from "lucide-react";
import { createContext, use } from "react";
import {
  ListBoxProps as AriaListBoxProps,
  ListBoxItem as AriaListBoxItem,
  ListBox as AriaListBox,
  ListBoxSection as AriaListBoxSection,
  ListBoxSectionProps as AriaListBoxSectionProps,
  ListBoxItemProps as AriaListBoxItemProps,
  Header,
  SeparatorProps,
  ListStateContext,
  Virtualizer,
  ListLayout,
} from "react-aria-components";

import { Checkbox, CheckboxProps } from "../checkbox";
import { SizeContext } from "../context";
import { Separator } from "../separator";
import { ui } from "../theme/semantic-color.stylex";
import { spacing } from "../theme/spacing.stylex";
import { Size, StyleXComponentProps } from "../theme/types";
import { typeramp } from "../theme/typography.stylex";
import {
  estimatedRowHeights,
  useListBoxItemStyles,
} from "../theme/useListBoxItemStyles";

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

    height: {
      ":is([data-size=lg])": spacing["9"],
      ":is([data-size=md])": spacing["7"],
      ":is([data-size=sm])": spacing["7"],
    },
  },
  separator: {
    marginBottom: spacing["1.5"],
    marginTop: spacing["1.5"],
  },
});

type ListBoxVariant = "default" | "checkbox";

const ListboxVariantContext = createContext<ListBoxVariant>("default");

export interface ListBoxProps<T extends object>
  extends StyleXComponentProps<AriaListBoxProps<T>> {
  size?: Size;
  items?: Iterable<T>;
  children: React.ReactNode | ((item: T) => React.ReactNode);
  variant?: ListBoxVariant;
  isVirtualized?: boolean;
}

export function ListBox<T extends object>({
  size: sizeProp,
  style,
  variant = "default",
  isVirtualized = false,
  ...props
}: ListBoxProps<T>) {
  const size = sizeProp || use(SizeContext);
  const listbox = (
    <AriaListBox {...props} {...stylex.props(styles.listBox, style)} />
  );

  return (
    <ListboxVariantContext value={variant}>
      <SizeContext value={size}>
        {isVirtualized ? (
          <Virtualizer
            layout={ListLayout}
            layoutOptions={{ estimatedRowHeight: estimatedRowHeights[size] }}
          >
            {listbox}
          </Virtualizer>
        ) : (
          listbox
        )}
      </SizeContext>
    </ListboxVariantContext>
  );
}

export interface ListBoxItemProps
  extends StyleXComponentProps<Omit<AriaListBoxItemProps, "children">> {
  children: React.ReactNode;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

function ListBoxCheckbox({ id = "", ...props }: CheckboxProps) {
  const listboxItemState = use(ListStateContext);

  return (
    <Checkbox
      {...props}
      isSelected={Boolean(
        listboxItemState?.selectionManager.selectedKeys.has(id),
      )}
      onChange={() => listboxItemState?.selectionManager.select(id)}
    />
  );
}

export function ListBoxItem({
  style,
  children,
  prefix,
  suffix,
  ...props
}: ListBoxItemProps) {
  const listBoxItemStyles = useListBoxItemStyles();
  const variant = use(ListboxVariantContext);

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
          {variant === "checkbox" && (
            <div {...stylex.props(listBoxItemStyles.addon)}>
              <ListBoxCheckbox
                isSelected={isSelected}
                id={
                  (props.id as string) ||
                  (props.value as { id?: string } | undefined)?.id
                }
                onPress={(e) => e.continuePropagation()}
              />
            </div>
          )}
          {prefix != null && (
            <div {...stylex.props(listBoxItemStyles.addon)}>{prefix}</div>
          )}
          <div {...stylex.props(listBoxItemStyles.label)}>{children}</div>
          {suffix != null && (
            <div {...stylex.props(listBoxItemStyles.addon)}>{suffix}</div>
          )}
          {isSelected && variant === "default" && (
            <Check size={16} {...stylex.props(listBoxItemStyles.check)} />
          )}
        </div>
      )}
    </AriaListBoxItem>
  );
}

export interface ListBoxSectionProps<T extends object>
  extends StyleXComponentProps<AriaListBoxSectionProps<T>> {
  children: React.ReactNode;
}

export function ListBoxSection<T extends object>({
  style,
  ...props
}: ListBoxSectionProps<T>) {
  return <AriaListBoxSection {...props} {...stylex.props(style)} />;
}

export interface ListBoxSeparatorProps
  extends StyleXComponentProps<SeparatorProps> {}

export function ListBoxSeparator({ style, ...props }: ListBoxSeparatorProps) {
  return <Separator {...props} style={[styles.separator, style]} />;
}

export interface ListBoxSectionHeaderProps
  extends StyleXComponentProps<React.HTMLAttributes<HTMLElement>> {}

export function ListBoxSectionHeader({
  style,
  ...props
}: ListBoxSectionHeaderProps) {
  const size = use(SizeContext);

  return (
    <Header
      {...props}
      data-size={size}
      {...stylex.props(
        typeramp.sublabel,
        styles.sectionLabel,
        ui.textDim,
        style,
      )}
    />
  );
}
