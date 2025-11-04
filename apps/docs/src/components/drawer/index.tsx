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
import { animationDuration, animations } from "../theme/animations.stylex";
import { uiColor } from "../theme/semantic-color.stylex";
import { spacing } from "../theme/spacing.stylex";
import { Size, StyleXComponentProps } from "../theme/types";
import { typeramp } from "../theme/typography.stylex";
import { useDialogStyles } from "../theme/useDialogStyles";
import { NonModalDrawer } from "./NonModalDrawer";

const styles = stylex.create({
  overlay: {
    zIndex: 0,
  },
  drawerWrapper: {
    bottom: {
      ":is([data-direction=bottom])": 0,
      ":is([data-direction=left])": 0,
      ":is([data-direction=right])": 0,
    },
    left: {
      ":is([data-direction=left])": 0,
      ":is([data-direction=top])": 0,
      ":is([data-direction=bottom])": 0,
    },
    position: "fixed",
    right: {
      ":is([data-direction=right])": 0,
      ":is([data-direction=top])": 0,
      ":is([data-direction=bottom])": 0,
    },
    top: {
      ":is([data-direction=top])": 0,
      ":is([data-direction=left])": 0,
      ":is([data-direction=right])": 0,
    },

    borderBottomWidth: {
      default: 0,
      ":is([data-direction=top])": 1,
    },
    borderLeftWidth: {
      default: 0,
      ":is([data-direction=right])": 1,
    },
    borderRadius: 0,
    borderRightWidth: {
      default: 0,
      ":is([data-direction=left])": 1,
    },
    borderTopWidth: {
      default: 0,
      ":is([data-direction=bottom])": 1,
    },
    height: {
      ":is([data-direction=top], [data-direction=bottom]):is([data-size=sm])":
        "320px",
      ":is([data-direction=top], [data-direction=bottom]):is([data-size=md])":
        "600px",
      ":is([data-direction=top], [data-direction=bottom]):is([data-size=lg])":
        "800px",
      ":is([data-direction=right], [data-direction=left])": "100vh",
    },
    maxHeight: {
      ":is([data-direction=top], [data-direction=bottom])": `calc(100vh - ${spacing["8"]})`,
      ":is([data-direction=right], [data-direction=left])": "100vh",
    },
    maxWidth: {
      ":is([data-direction=top], [data-direction=bottom])": "100vw",
      ":is([data-direction=right], [data-direction=left])": `calc(100vw - ${spacing["8"]})`,
    },
    translate: "unset",
    width: {
      ":is([data-direction=left], [data-direction=right]):is([data-size=sm])":
        "320px",
      ":is([data-direction=left], [data-direction=right]):is([data-size=md])":
        "600px",
      ":is([data-direction=left], [data-direction=right]):is([data-size=lg])":
        "800px",
      ":is([data-direction=top], [data-direction=bottom])": "100vw",
    },

    animationDuration: animationDuration.default,
    animationName: {
      ":is([data-direction=right][data-entering])": animations.slideInRight,
      ":is([data-direction=right][data-exiting])": animations.slideOutRight,
      ":is([data-direction=left][data-entering])": animations.slideInLeft,
      ":is([data-direction=left][data-exiting])": animations.slideOutLeft,
      ":is([data-direction=top][data-entering])": animations.slideInTop,
      ":is([data-direction=top][data-exiting])": animations.slideOutTop,
      ":is([data-direction=bottom][data-entering])": animations.slideInBottom,
      ":is([data-direction=bottom][data-exiting])": animations.slideOutBottom,
    },
    animationTimingFunction: "ease-in-out",
  },
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
    paddingBottom: spacing["2"],
    paddingLeft: spacing["4"],
    paddingRight: spacing["4"],
  },
  description: {
    color: uiColor.text1,
    paddingBottom: spacing["4"],
    paddingLeft: spacing["4"],
    paddingRight: spacing["4"],
    paddingTop: spacing["4"],
  },
  body: {
    flexGrow: 1,
    paddingBottom: spacing["4"],
    paddingLeft: spacing["4"],
    paddingRight: spacing["4"],
    paddingTop: { default: 0, ":first-child": spacing["4"] },
  },
  footer: {
    display: "flex",
    gap: spacing["2"],
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

export interface DrawerProps extends DialogTriggerProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  size?: Size;
  direction?: "left" | "right" | "top" | "bottom";
  isNonModal?: boolean;
}

export const Drawer = ({
  trigger,
  children,
  defaultOpen,
  isOpen,
  onOpenChange,
  size = "md",
  direction = "right",
  isNonModal = false,
}: DrawerProps) => {
  const dialogStyles = useDialogStyles({ size });

  return (
    <DialogTrigger
      defaultOpen={defaultOpen}
      isOpen={isOpen}
      onOpenChange={onOpenChange}
    >
      {trigger}

      {isNonModal ? (
        <NonModalDrawer
          data-size={size}
          data-direction={direction}
          {...stylex.props(dialogStyles.modal, styles.drawerWrapper)}
        >
          <AriaDialog {...stylex.props(dialogStyles.dialog, styles.dialog)}>
            {children}
          </AriaDialog>
        </NonModalDrawer>
      ) : (
        <ModalOverlay isDismissable>
          <div {...stylex.props(dialogStyles.overlay, styles.overlay)} />
          <Modal
            data-size={size}
            data-direction={direction}
            {...stylex.props(dialogStyles.modal, styles.drawerWrapper)}
          >
            <AriaDialog {...stylex.props(dialogStyles.dialog, styles.dialog)}>
              {children}
            </AriaDialog>
          </Modal>
        </ModalOverlay>
      )}
    </DialogTrigger>
  );
};

export interface DrawerHeaderProps
  extends StyleXComponentProps<React.ComponentProps<"div">> {}

export const DrawerHeader = ({ children, style }: DrawerHeaderProps) => {
  return (
    <div {...stylex.props(styles.header, typeramp.heading5, style)}>
      <Heading>{children}</Heading>
      <IconButton label="Close" size="sm" variant="tertiary" slot="close">
        <X />
      </IconButton>
    </div>
  );
};

export interface DrawerDescriptionProps
  extends StyleXComponentProps<React.ComponentProps<"div">> {}

export const DrawerDescription = ({
  children,
  style,
}: DrawerDescriptionProps) => {
  return (
    <div {...stylex.props(styles.description, typeramp.body, style)}>
      {children}
    </div>
  );
};

export interface DrawerBodyProps
  extends StyleXComponentProps<React.ComponentProps<"div">> {}

export const DrawerBody = ({ children, style }: DrawerBodyProps) => {
  return <div {...stylex.props(styles.body, style)}>{children}</div>;
};

export interface DrawerFooterProps
  extends StyleXComponentProps<React.ComponentProps<"div">> {}

export const DrawerFooter = ({ children, style }: DrawerFooterProps) => {
  return <div {...stylex.props(styles.footer, style)}>{children}</div>;
};
