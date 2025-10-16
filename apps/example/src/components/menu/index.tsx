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
import { spacing } from "../theme/spacing.stylex";
import { radius } from "../theme/radius.stylex";
import { Size } from "../types";
import {
  ListBoxSectionHeaderProps,
  ListBoxSectionHeader,
  ListBoxSeparator,
  ListBoxSeparatorProps,
} from "../listbox";
import { SizeContext } from "../context";
import { fontWeight, typeramp } from "../theme/typography.stylex";
import { useContext } from "react";
import { Check, ChevronRight } from "lucide-react";
import { plum, slate } from "../theme/colors.stylex";
import { usePopoverStyles } from "../theme/usePopoverStyles";

const styles = stylex.create({
  section: {},
  item: {
    display: "flex",
    userSelect: "none",

    boxSizing: "border-box",
    fontWeight: fontWeight["medium"],
    outline: {
      default: "none",
      ":focus": "none",
    },
    padding: spacing["1"],
  },
  sm: {
    height: spacing["9"],
  },
  md: {
    height: spacing["9"],
  },
  lg: {
    height: spacing["11"],
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
});

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
  size = "md",
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
  return (
    <AriaMenuSection {...props} {...stylex.props(styles.section, style)} />
  );
}

export interface MenuItemProps
  extends Omit<AriaMenuItemProps, "style" | "className" | "children"> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
  children: React.ReactNode;
}

export function MenuItem({ style, children, ...props }: MenuItemProps) {
  const size = useContext(SizeContext);

  return (
    <AriaMenuItem
      {...props}
      {...stylex.props(typeramp.label, styles.item, styles[size], style)}
    >
      {({ isSelected, hasSubmenu }) => (
        <div {...stylex.props(styles.itemInner)}>
          {children}
          {isSelected && <Check size={16} {...stylex.props(styles.check)} />}
          {hasSubmenu && <ChevronRight size={16} />}
        </div>
      )}
    </AriaMenuItem>
  );
}

export type MenuSectionHeaderProps = ListBoxSectionHeaderProps;
export const MenuSectionHeader = ListBoxSectionHeader;
export type MenuSeparatorProps = ListBoxSeparatorProps;
export const MenuSeparator = ListBoxSeparator;
