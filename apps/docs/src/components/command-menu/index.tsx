import { useControlledState } from "@react-stately/utils";
import * as stylex from "@stylexjs/stylex";
import { useEffect, useEffectEvent } from "react";
import {
  InputProps,
  Modal,
  Dialog,
  Autocomplete,
  Menu,
  useFilter,
  ModalOverlay,
  AutocompleteProps as AriaAutocompleteProps,
} from "react-aria-components";
import { OverlayTriggerProps } from "react-stately";

import { SizeContext } from "../context";
import { SearchField } from "../search-field";
import { Separator } from "../separator";
import { spacing } from "../theme/spacing.stylex";
import { useDialogStyles } from "../theme/useDialogStyles";

const styles = stylex.create({
  menu: {
    flexGrow: 1,
    marginLeft: `calc(${spacing["0.5"]} * -1)`,
    marginRight: `calc(${spacing["0.5"]} * -1)`,
    minHeight: 0,
    overflowY: "auto",
    paddingBottom: spacing["2"],
    paddingLeft: spacing["3"],
    paddingRight: spacing["3"],
    paddingTop: spacing["2"],
  },
  searchField: {
    paddingBottom: spacing["3"],
    paddingLeft: spacing["3"],
    paddingRight: spacing["3"],
    paddingTop: spacing["3"],
  },
});

export interface CommandMenuProps<T extends object>
  extends OverlayTriggerProps,
    Pick<InputProps, "placeholder">,
    AriaAutocompleteProps<T> {
  children: React.ReactNode;
  disableGlobalShortcut?: boolean;
}

export function CommandMenu<T extends object>({
  defaultOpen,
  isOpen: isOpenProp,
  onOpenChange,
  filter,
  placeholder = "Search commands",
  children,
  defaultInputValue,
  disableAutoFocusFirst,
  disableVirtualFocus,
  inputValue,
  onInputChange,
  disableGlobalShortcut = false,
}: CommandMenuProps<T>) {
  const defaultFilter = useFilter({ sensitivity: "base" });
  const dialogStyles = useDialogStyles({ size: "sm" });
  const [isOpen, setIsOpen] = useControlledState(
    isOpenProp,
    defaultOpen ?? false,
    onOpenChange
  );
  const onClose = useEffectEvent(() => {
    setIsOpen(false);
  });

  useEffect(() => {
    if (disableGlobalShortcut) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.metaKey && event.key === "k") {
        setIsOpen(true);
      }
    }

    globalThis.addEventListener("keydown", handleKeyDown);

    return () => {
      globalThis.removeEventListener("keydown", handleKeyDown);
    };
  }, [setIsOpen, disableGlobalShortcut]);

  return (
    <SizeContext value="lg">
      <ModalOverlay
        isDismissable
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        {...stylex.props(dialogStyles.overlay)}
      >
        <Modal {...stylex.props(dialogStyles.modal)}>
          <Dialog {...stylex.props(dialogStyles.dialog)}>
            <Autocomplete
              filter={filter ?? defaultFilter.contains}
              defaultInputValue={defaultInputValue}
              disableAutoFocusFirst={disableAutoFocusFirst}
              disableVirtualFocus={disableVirtualFocus}
              inputValue={inputValue}
              onInputChange={onInputChange}
            >
              <div {...stylex.props(styles.searchField)}>
                {/* This is part of the interaction for a CMD+K menu. */}
                {/* eslint-disable-next-line jsx-a11y/no-autofocus */}
                <SearchField placeholder={placeholder} autoFocus />
              </div>
              <Separator />
              <Menu {...stylex.props(styles.menu)} onAction={onClose}>
                {children}
              </Menu>
            </Autocomplete>
          </Dialog>
        </Modal>
      </ModalOverlay>
    </SizeContext>
  );
}

export type {
  MenuItemProps as CommandMenuItemProps,
  MenuSectionHeaderProps as CommandMenuSectionHeaderProps,
  MenuSectionProps as CommandMenuSectionProps,
  MenuSeparatorProps as CommandMenuSeparatorProps,
} from "../menu";

export {
  MenuItem as CommandMenuItem,
  MenuSectionHeader as CommandMenuSectionHeader,
  MenuSection as CommandMenuSection,
  MenuSeparator as CommandMenuSeparator,
} from "../menu";
