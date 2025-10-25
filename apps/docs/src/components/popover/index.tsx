"use client";

import * as stylex from "@stylexjs/stylex";
import {
  OverlayArrow,
  Popover as AriaPopover,
  PopoverProps as AriaPopoverProps,
  DialogTrigger,
  DialogTriggerProps,
  Dialog,
} from "react-aria-components";

import { uiColor } from "../theme/semantic-color.stylex";
import { spacing } from "../theme/spacing.stylex";
import { StyleXComponentProps } from "../theme/types";
import { usePopoverStyles } from "../theme/usePopoverStyles";

const styles = stylex.create({
  wrapper: {
    filter: `drop-shadow(-0.5px -0.5px 0 ${uiColor.border2}) drop-shadow(0.5px -0.5px 0 ${uiColor.border2}) drop-shadow(0.5px 0.5px 0 ${uiColor.border2}) drop-shadow(-0.5px 0.5px 0 ${uiColor.border2}) drop-shadow(0px 1px 3px rgb(0 0 0 / 0.1)) drop-shadow(0px -1px 3px rgb(0 0 0 / 0.1))`,
  },
  content: {
    borderWidth: 0,
    boxShadow: "none",
    paddingBottom: spacing["2"],
    paddingLeft: spacing["2"],
    paddingRight: spacing["2"],
    paddingTop: spacing["2"],
    position: "relative",
  },
  caret: {},
  arrow: {
    backgroundColor: uiColor.bgSubtle,
    height: spacing["2"],
    transform: {
      [":is([data-placement=bottom] *)"]: "rotate(180deg)",
      [":is([data-placement=top] *)"]: "tranuiColorY(-50%) rotate(-45deg)",
      [":is([data-placement=left] *)"]: "rotate(90deg)",
      [":is([data-placement=right] *)"]: "rotate(-90deg)",
    },
    width: spacing["2"],
    zIndex: 0,
  },
});
interface PopoverProps
  extends DialogTriggerProps,
    StyleXComponentProps<Omit<AriaPopoverProps, "className" | "trigger">> {
  trigger: React.ReactNode;
  triggerName?: Pick<AriaPopoverProps, "trigger">;
  children: React.ReactNode;
}

export const Popover = ({
  trigger,
  children,
  defaultOpen,
  isOpen,
  onOpenChange,
  style,
  ...popoverProps
}: PopoverProps) => {
  const popoverStyles = usePopoverStyles();

  return (
    <DialogTrigger
      {...({ isOpen, onOpenChange, defaultOpen } as DialogTriggerProps)}
    >
      {trigger}

      <AriaPopover
        {...stylex.props(styles.wrapper, style)}
        offset={8}
        containerPadding={8}
        {...popoverProps}
      >
        <OverlayArrow {...stylex.props(styles.caret)}>
          <div {...stylex.props(styles.arrow)} />
        </OverlayArrow>
        <Dialog {...stylex.props(popoverStyles, styles.content)}>
          {children}
        </Dialog>
      </AriaPopover>
    </DialogTrigger>
  );
};
