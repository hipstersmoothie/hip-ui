"use client";

import * as stylex from "@stylexjs/stylex";
import { use, useRef } from "react";
import { mergeProps, useFocusVisible, useHover, useKeyboard } from "react-aria";
import {
  Popover as AriaPopover,
  PopoverProps as AriaPopoverProps,
  DialogTrigger,
  DialogTriggerProps,
  Dialog,
  Pressable,
  OverlayTriggerStateContext,
} from "react-aria-components";

import { shadow } from "../theme/shadow.stylex";
import { spacing } from "../theme/spacing.stylex";
import { StyleXComponentProps } from "../theme/types";
import { usePopoverStyles } from "../theme/usePopoverStyles";

const styles = stylex.create({
  wrapper: {
    shadow: shadow.md,
  },
  content: {
    paddingBottom: spacing["2"],
    paddingLeft: spacing["2"],
    paddingRight: spacing["2"],
    paddingTop: spacing["2"],
    position: "relative",
  },
});

interface HoverCardInnerProps
  extends StyleXComponentProps<Omit<AriaPopoverProps, "trigger">> {
  trigger: React.ComponentProps<typeof Pressable>["children"];
  triggerName?: AriaPopoverProps["trigger"];
  children: React.ReactNode;
  showDelay?: number;
  hideDelay?: number;
}

function HoverCardInner({
  trigger,
  triggerName,
  children,
  style,
  showDelay = 250,
  hideDelay = 250,
  ...popoverProps
}: HoverCardInnerProps) {
  const { isFocusVisible } = useFocusVisible();
  const { keyboardProps } = useKeyboard({
    onKeyDown: (e) => {
      if (!isFocusVisible) return;
      if (e.key !== "Enter") return;
      overlayTriggerState?.open();
    },
  });
  const overlayTriggerState = use(OverlayTriggerStateContext);
  const popoverStyles = usePopoverStyles();
  const showTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { hoverProps } = useHover({
    onHoverStart: () => {
      if (showTimeoutRef.current) return;
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
        hideTimeoutRef.current = null;
      }
      showTimeoutRef.current = setTimeout(() => {
        overlayTriggerState?.open();
        showTimeoutRef.current = null;
      }, showDelay);
    },
    onHoverEnd: () => {
      if (showTimeoutRef.current) {
        clearTimeout(showTimeoutRef.current);
        showTimeoutRef.current = null;
      }
      hideTimeoutRef.current = setTimeout(() => {
        overlayTriggerState?.close();
        hideTimeoutRef.current = null;
      }, hideDelay);
    },
  });

  return (
    <>
      <Pressable {...mergeProps(hoverProps, keyboardProps)}>
        {trigger}
      </Pressable>
      <AriaPopover
        {...stylex.props(styles.wrapper)}
        offset={8}
        containerPadding={8}
        isNonModal={isFocusVisible ? false : true}
        trigger={triggerName}
        {...mergeProps(hoverProps, popoverProps)}
      >
        <Dialog {...stylex.props(popoverStyles, styles.content, style)}>
          {children}
        </Dialog>
      </AriaPopover>
    </>
  );
}

interface HoverCardProps extends DialogTriggerProps, HoverCardInnerProps {}

export const HoverCard = ({
  defaultOpen,
  isOpen,
  onOpenChange,
  ...props
}: HoverCardProps) => {
  return (
    <DialogTrigger
      {...({ isOpen, onOpenChange, defaultOpen } as DialogTriggerProps)}
    >
      <HoverCardInner {...props} />
    </DialogTrigger>
  );
};
