import {
  MenuTriggerProps,
  MenuTrigger,
  Popover,
  SubmenuTriggerProps,
  Menu as AriaMenu,
  MenuProps as AriaMenuProps,
  MenuSection as AriaMenuSection,
  MenuSectionProps as AriaMenuSectionProps,
  MenuItem as AriaMenuItem,
  MenuItemProps as AriaMenuItemProps,
  SubmenuTrigger,
  PopoverProps,
} from "react-aria-components";
import * as stylex from "@stylexjs/stylex";
import { Size } from "../types";
import {
  ListBoxSectionHeaderProps,
  ListBoxSectionHeader,
  ListBoxSeparator,
  ListBoxSeparatorProps,
} from "../listbox";
import { SizeContext } from "../context";
import { Check, ChevronRight } from "lucide-react";
import { usePopoverStyles } from "../theme/usePopoverStyles";
import { useListBoxItemStyles } from "../theme/useListBoxItemStyles";
import { use } from "react";

export interface MenuProps<T extends object>
  extends Omit<MenuTriggerProps, "trigger" | "children">,
    Omit<AriaMenuProps<T>, "children" | "className" | "style">,
    Pick<
      PopoverProps,
      | "shouldCloseOnInteractOutside"
      | "shouldFlip"
      | "shouldUpdatePosition"
      | "placement"
    > {
  trigger: React.ReactNode;
  items?: Iterable<T>;
  children: React.ReactNode | ((item: T) => React.ReactNode);
  size?: Size;
}

export function Menu<T extends object>({
  trigger,
  size: sizeProp,
  defaultOpen,
  isOpen,
  onOpenChange,
  shouldCloseOnInteractOutside,
  shouldFlip,
  shouldUpdatePosition,
  placement,
  ...props
}: MenuProps<T>) {
  const popoverStyles = usePopoverStyles();
  const size = sizeProp || use(SizeContext);

  return (
    <SizeContext.Provider value={size}>
      <MenuTrigger
        defaultOpen={defaultOpen}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        {trigger}
        <Popover
          containerPadding={8}
          shouldCloseOnInteractOutside={shouldCloseOnInteractOutside}
          shouldFlip={shouldFlip}
          shouldUpdatePosition={shouldUpdatePosition}
          placement={placement}
        >
          <AriaMenu {...props} {...stylex.props(popoverStyles)} />
        </Popover>
      </MenuTrigger>
    </SizeContext.Provider>
  );
}

export interface SubMenuProps<T extends object>
  extends Omit<SubmenuTriggerProps, "trigger" | "children">,
    Omit<AriaMenuProps<T>, "children" | "className" | "style">,
    Pick<
      PopoverProps,
      | "shouldCloseOnInteractOutside"
      | "shouldFlip"
      | "shouldUpdatePosition"
      | "placement"
    > {
  trigger: React.ReactElement<MenuTriggerProps>;
  children: React.ReactNode | ((item: T) => React.ReactNode);
  items?: Iterable<T>;
  size?: Size;
}

export function SubMenu<T extends object>({
  trigger,
  delay,
  shouldCloseOnInteractOutside,
  shouldFlip,
  shouldUpdatePosition,
  placement,
  ...props
}: SubMenuProps<T>) {
  const popoverStyles = usePopoverStyles();

  return (
    <SubmenuTrigger delay={delay}>
      {trigger}
      <Popover
        shouldCloseOnInteractOutside={shouldCloseOnInteractOutside}
        shouldFlip={shouldFlip}
        shouldUpdatePosition={shouldUpdatePosition}
        placement={placement}
        containerPadding={8}
        offset={-8}
      >
        <AriaMenu {...props} {...stylex.props(popoverStyles)} />
      </Popover>
    </SubmenuTrigger>
  );
}

export interface MenuSectionProps<T extends object>
  extends Omit<AriaMenuSectionProps<T>, "style" | "className"> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
  children: React.ReactNode;
}

export function MenuSection<T extends object>({
  style,
  ...props
}: MenuSectionProps<T>) {
  return <AriaMenuSection {...props} {...stylex.props(style)} />;
}

export interface MenuItemProps
  extends Omit<AriaMenuItemProps, "style" | "className" | "children"> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
  children: React.ReactNode;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

export function MenuItem({
  style,
  children,
  prefix,
  suffix,
  ...props
}: MenuItemProps) {
  const menuItemStyles = useListBoxItemStyles();

  return (
    <AriaMenuItem
      {...props}
      textValue={
        props.textValue || (typeof children === "string" ? children : undefined)
      }
      {...stylex.props(menuItemStyles.wrapper, style)}
    >
      {({ isSelected, hasSubmenu }) => (
        <div {...stylex.props(menuItemStyles.inner)}>
          {prefix && (
            <div {...stylex.props(menuItemStyles.addon)}>{prefix}</div>
          )}
          <div {...stylex.props(menuItemStyles.label)}>{children}</div>
          {suffix && (
            <div {...stylex.props(menuItemStyles.addon)}>{suffix}</div>
          )}
          {isSelected && (
            <div {...stylex.props(menuItemStyles.addon)}>
              <Check size={16} {...stylex.props(menuItemStyles.check)} />
            </div>
          )}
          {hasSubmenu && (
            <div {...stylex.props(menuItemStyles.addon)}>
              <ChevronRight size={16} />
            </div>
          )}
        </div>
      )}
    </AriaMenuItem>
  );
}

export type MenuSectionHeaderProps = ListBoxSectionHeaderProps;
export const MenuSectionHeader = ListBoxSectionHeader;
export type MenuSeparatorProps = ListBoxSeparatorProps;
export const MenuSeparator = ListBoxSeparator;
