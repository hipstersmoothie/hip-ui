"use client";

import type { DialogTriggerProps } from "react-aria-components";

import * as stylex from "@stylexjs/stylex";
import { X } from "lucide-react";
import {
  Dialog as AriaDialog,
  DialogTrigger,
  Heading,
  Modal,
  ModalOverlay,
} from "react-aria-components";

import type { Size } from "../types";

import { IconButton } from "../icon-button";
import { slate } from "../theme/colors.stylex";
import { spacing } from "../theme/spacing.stylex";
import { typeramp } from "../theme/typography.stylex";
import { useDialogStyles } from "../theme/useDialogStyles";

const styles = stylex.create({
  dialog: {
    paddingBottom: spacing["2"],
    paddingTop: spacing["2"],
  },
  header: {
    gap: spacing["2"],
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
    height: spacing["8"],
    paddingBottom: spacing["2"],
    paddingLeft: spacing["4"],
    paddingRight: spacing["4"],

    borderBottomColor: slate.border1,
    borderBottomStyle: "solid",
    borderBottomWidth: 1,
  },
  description: {
    paddingBottom: spacing["4"],
    paddingLeft: spacing["4"],
    paddingRight: spacing["4"],
    paddingTop: spacing["4"],
  },
  footer: {
    gap: spacing["2"],
    display: "flex",
    justifyContent: "flex-end",
    paddingBottom: spacing["2"],
    paddingLeft: spacing["4"],
    paddingRight: spacing["4"],
    paddingTop: spacing["4"],

    borderTopColor: slate.border1,
    borderTopStyle: "solid",
    borderTopWidth: 1,
  },
});

export interface DialogProps extends DialogTriggerProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  size?: Size;
}

export const Dialog = ({
  trigger,
  children,
  defaultOpen,
  isOpen,
  onOpenChange,
  size,
}: DialogProps) => {
  const dialogStyles = useDialogStyles({ size });

  return (
    <DialogTrigger
      defaultOpen={defaultOpen}
      isOpen={isOpen}
      onOpenChange={onOpenChange}
    >
      {trigger}

      <ModalOverlay
        isKeyboardDismissDisabled
        {...stylex.props(dialogStyles.overlay)}
      >
        <Modal {...stylex.props(dialogStyles.modal)}>
          <AriaDialog {...stylex.props(dialogStyles.dialog, styles.dialog)}>
            {children}
          </AriaDialog>
        </Modal>
      </ModalOverlay>
    </DialogTrigger>
  );
};

export interface DialogHeaderProps extends Omit<
  React.ComponentProps<"div">,
  "style" | "className"
> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
}

export const DialogHeader = ({ children, style }: DialogHeaderProps) => {
  return (
    <div {...stylex.props(styles.header, typeramp.heading5, style)}>
      <Heading>{children}</Heading>
      <IconButton label="Close" size="sm" variant="tertiary" slot="close">
        <X />
      </IconButton>
    </div>
  );
};

export interface DialogDescriptionProps extends Omit<
  React.ComponentProps<"div">,
  "style" | "className"
> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
}

export const DialogDescription = ({
  children,
  style,
}: DialogDescriptionProps) => {
  return (
    <div {...stylex.props(styles.description, typeramp.body, style)}>
      {children}
    </div>
  );
};

export interface DialogFooterProps extends Omit<
  React.ComponentProps<"div">,
  "style" | "className"
> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
}

export const DialogFooter = ({ children, style }: DialogFooterProps) => {
  return <div {...stylex.props(styles.footer, style)}>{children}</div>;
};
