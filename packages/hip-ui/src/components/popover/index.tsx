"use client";

import {
  OverlayArrow,
  Popover as AriaPopover,
  PopoverProps as AriaPopoverProps,
  DialogTrigger,
  DialogTriggerProps,
  Dialog,
} from "react-aria-components";
import * as stylex from "@stylexjs/stylex";

import { radius } from "../theme/radius.stylex";
import { slate } from "../theme/colors.stylex";
import { gray } from "../theme/semantic-color.stylex";
import { spacing } from "../theme/spacing.stylex";

const styles = stylex.create({
  popover: {
    filter: `drop-shadow(-0.5px -0.5px 0 ${slate[7]}) drop-shadow(0.5px -0.5px 0 ${slate[7]}) drop-shadow(0.5px 0.5px 0 ${slate[7]}) drop-shadow(-0.5px 0.5px 0 ${slate[7]}) drop-shadow(0px 1px 3px rgb(0 0 0 / 0.1)) drop-shadow(0px -1px 3px rgb(0 0 0 / 0.1))`,
  },
  content: {
    borderRadius: radius["md"],
    padding: spacing["2"],
    position: "relative",
  },
  caret: {},
  arrow: {
    backgroundColor: slate[2],
    height: spacing["2"],
    transform: {
      [":is([data-placement=bottom] *)"]: "rotate(180deg)",
      [":is([data-placement=top] *)"]: "translateY(-50%) rotate(-45deg)",
      [":is([data-placement=left] *)"]: "rotate(90deg)",
      [":is([data-placement=right] *)"]: "rotate(-90deg)",
    },
    width: spacing["2"],
    zIndex: 0,
  },
});
interface TooltipProps
  extends DialogTriggerProps,
    Pick<AriaPopoverProps, "crossOffset" | "placement" | "shouldFlip"> {
  trigger: React.ReactNode;
  children: React.ReactNode;
}

export const Popover = ({
  trigger,
  children,
  defaultOpen,
  isOpen,
  onOpenChange,
  ...popoverProps
}: TooltipProps) => {
  return (
    <DialogTrigger
      {...({ isOpen, onOpenChange, defaultOpen } as DialogTriggerProps)}
    >
      {trigger}

      <AriaPopover
        {...stylex.props(styles.popover)}
        {...popoverProps}
        offset={8}
        containerPadding={8}
      >
        <OverlayArrow {...stylex.props(styles.caret)}>
          <div {...stylex.props(styles.arrow)} />
        </OverlayArrow>
        <Dialog {...stylex.props(styles.content, gray.bgSubtle, gray.text)}>
          {children}
        </Dialog>
      </AriaPopover>
    </DialogTrigger>
  );
};
