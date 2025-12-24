"use client";

import * as stylex from "@stylexjs/stylex";
import { X } from "lucide-react";
import {
  DialogTrigger,
  DialogTriggerProps,
  Dialog as AriaDialog,
  Modal,
  ModalOverlay,
  Heading,
} from "react-aria-components";

import { IconButton } from "../icon-button";
import { uiColor } from "../theme/color.stylex";
import { spacing } from "../theme/spacing.stylex";
import { Size, StyleXComponentProps } from "../theme/types";
import { fontSize, typeramp } from "../theme/typography.stylex";
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
    fontSize: fontSize["lg"],
    justifyContent: "space-between",
    height: spacing["8"],
    paddingBottom: spacing["2"],
    paddingLeft: spacing["4"],
    paddingRight: spacing["4"],

    borderBottomColor: uiColor.border1,
    borderBottomStyle: "solid",
    borderBottomWidth: 1,
  },
  description: {
    color: uiColor.text1,
    paddingBottom: spacing["4"],
    paddingLeft: spacing["4"],
    paddingRight: spacing["4"],
    paddingTop: spacing["4"],
  },
  body: {
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

    borderTopColor: uiColor.border1,
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

      <ModalOverlay {...stylex.props(dialogStyles.overlay)} isDismissable>
        <Modal {...stylex.props(dialogStyles.modal)}>
          <AriaDialog {...stylex.props(dialogStyles.dialog, styles.dialog)}>
            {children}
          </AriaDialog>
        </Modal>
      </ModalOverlay>
    </DialogTrigger>
  );
};

export interface DialogHeaderProps extends StyleXComponentProps<
  React.ComponentProps<"div">
> {}

export const DialogHeader = ({ children, style }: DialogHeaderProps) => {
  return (
    <div {...stylex.props(styles.header, style)}>
      <Heading>{children}</Heading>
      <IconButton label="Close" size="sm" variant="tertiary" slot="close">
        <X />
      </IconButton>
    </div>
  );
};

export interface DialogDescriptionProps extends StyleXComponentProps<
  React.ComponentProps<"div">
> {}

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

export interface DialogBodyProps extends StyleXComponentProps<
  React.ComponentProps<"div">
> {}

export const DialogBody = ({ children, style }: DialogBodyProps) => {
  return <div {...stylex.props(styles.body, style)}>{children}</div>;
};

export interface DialogFooterProps extends StyleXComponentProps<
  React.ComponentProps<"div">
> {}

export const DialogFooter = ({ children, style }: DialogFooterProps) => {
  return <div {...stylex.props(styles.footer, style)}>{children}</div>;
};
