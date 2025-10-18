"use client";

import * as stylex from "@stylexjs/stylex";
import { X } from "lucide-react";
import { use } from "react";
import { mergeProps } from "react-aria";
import {
  DialogTrigger,
  DialogTriggerProps,
  Dialog as AriaDialog,
  Modal,
  ModalOverlay,
  OverlayTriggerStateContext,
  Heading,
} from "react-aria-components";

import { Button, ButtonProps } from "../button";
import { IconButton } from "../icon-button";
import { spacing } from "../theme/spacing.stylex";
import { typeramp } from "../theme/typography.stylex";
import { useDialogStyles } from "../theme/useDialogStyles";

const styles = stylex.create({
  dialog: {
    paddingBottom: spacing["2"],
    paddingTop: spacing["2"],
  },
  header: {
    alignItems: "center",
    display: "flex",
    gap: spacing["2"],
    height: spacing["8"],
    justifyContent: "space-between",
    paddingLeft: spacing["4"],
    paddingRight: spacing["4"],
  },
  description: {
    paddingBottom: spacing["4"],
    paddingLeft: spacing["4"],
    paddingRight: spacing["4"],
    paddingTop: spacing["4"],
  },
  footer: {
    display: "flex",
    gap: spacing["2"],
    justifyContent: "flex-end",
    paddingBottom: spacing["2"],
    paddingLeft: spacing["4"],
    paddingRight: spacing["4"],
  },
});

export interface AlertDialogProps extends DialogTriggerProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
}

export const AlertDialog = ({
  trigger,
  children,
  defaultOpen,
  isOpen,
  onOpenChange,
}: AlertDialogProps) => {
  const dialogStyles = useDialogStyles({ size: "sm" });

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
          <AriaDialog
            {...stylex.props(dialogStyles.dialog, styles.dialog)}
            role="alertdialog"
          >
            {children}
          </AriaDialog>
        </Modal>
      </ModalOverlay>
    </DialogTrigger>
  );
};

export interface AlertDialogHeaderProps
  extends Omit<React.ComponentProps<"div">, "style" | "className"> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
}

export const AlertDialogHeader = ({
  children,
  style,
}: AlertDialogHeaderProps) => {
  return (
    <div {...stylex.props(styles.header, typeramp.heading5, style)}>
      <Heading>{children}</Heading>
      <IconButton label="Close" size="sm" variant="tertiary" slot="close">
        <X />
      </IconButton>
    </div>
  );
};

export interface AlertDialogDescriptionProps
  extends Omit<React.ComponentProps<"div">, "style" | "className"> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
}

export const AlertDialogDescription = ({
  children,
  style,
}: AlertDialogDescriptionProps) => {
  return (
    <div {...stylex.props(styles.description, typeramp.body, style)}>
      {children}
    </div>
  );
};

export interface AlertDialogFooterProps
  extends Omit<React.ComponentProps<"div">, "style" | "className"> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
}

export const AlertDialogFooter = ({
  children,
  style,
}: AlertDialogFooterProps) => {
  return <div {...stylex.props(styles.footer, style)}>{children}</div>;
};

export type AlertDialogCancelButtonProps = Omit<ButtonProps, "slot">;

export const AlertDialogCancelButton = ({
  children = "Cancel",
  ...props
}: AlertDialogCancelButtonProps) => {
  return (
    <Button variant="secondary" {...props} slot="close">
      {children}
    </Button>
  );
};

export type AlertDialogActionButtonProps = ButtonProps & {
  /**
   * Whether to close the dialog when the button is pressed.
   * If you are doing somthing async, you likely want to set this to false
   * and use isLoading=true.
   */
  closeOnPress?: boolean;
};

export const AlertDialogActionButton = ({
  closeOnPress = true,
  children = "Ok",
  ...props
}: AlertDialogActionButtonProps) => {
  const state = use(OverlayTriggerStateContext);
  const onPress = () => {
    if (closeOnPress) {
      state?.close();
    }
  };

  return <Button {...mergeProps(props, { onPress })}>{children}</Button>;
};
