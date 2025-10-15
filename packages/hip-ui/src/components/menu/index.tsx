import { MenuTriggerProps, MenuTrigger, Popover } from "react-aria-components";
import * as stylex from "@stylexjs/stylex";
import { spacing } from "../theme/spacing.stylex";
import { gray } from "../theme/semantic-color.stylex";
import { radius } from "../theme/radius.stylex";
import { Size } from "../types";
import {
  ListBox,
  ListBoxItem,
  ListBoxItemProps,
  ListBoxSectionHeaderProps,
  ListBoxSectionHeader,
  ListBoxSeparator,
  ListBoxSeparatorProps,
  ListBoxSectionProps,
  ListBoxSection,
} from "../listbox";
import { SizeContext } from "../context";

const styles = stylex.create({
  popover: {
    borderRadius: radius["md"],
    minWidth: spacing["40"],
    outline: "none",
    overflow: "auto",
    paddingBottom: spacing["1"],
    paddingTop: spacing["1"],
    width: "var(--trigger-width)",
  },
});

export interface MenuProps<T extends object>
  extends Omit<MenuTriggerProps, "trigger" | "children"> {
  trigger: React.ReactNode;
  items?: Iterable<T>;
  children: React.ReactNode | ((item: T) => React.ReactNode);
  size?: Size;
}

export function Menu<T extends object>({
  trigger,
  children,
  items,
  size = "md",
  ...props
}: MenuProps<T>) {
  return (
    <SizeContext.Provider value={size}>
      <MenuTrigger {...props}>
        {trigger}
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
      </MenuTrigger>
    </SizeContext.Provider>
  );
}

export type MenuItemProps = ListBoxItemProps;
export const MenuItem = ListBoxItem;
export type MenuSectionProps<T extends object> = ListBoxSectionProps<T>;
export const MenuSection = ListBoxSection;
export type MenuSectionHeaderProps = ListBoxSectionHeaderProps;
export const MenuSectionHeader = ListBoxSectionHeader;
export type MenuSeparatorProps = ListBoxSeparatorProps;
export const MenuSeparator = ListBoxSeparator;
