"use client";

import * as stylex from "@stylexjs/stylex";
import {
  OverlayArrow,
  Tooltip as AriaTooltip,
  TooltipTrigger,
  TooltipTriggerComponentProps,
  TooltipProps as AriaTooltipProps,
} from "react-aria-components";

import { slateInverted } from "../theme/colors.stylex";
import { radius } from "../theme/radius.stylex";
import { shadow } from "../theme/shadow.stylex";
import { spacing } from "../theme/spacing.stylex";
import { fontFamily, fontSize, lineHeight } from "../theme/typography.stylex";

const tooltipStyle = stylex.create({
  content: {
    backgroundColor: slateInverted.bg1,
    borderRadius: radius["md"],
    boxShadow: shadow["sm"],
    color: slateInverted.text1,
    fontFamily: fontFamily["sans"],
    fontSize: fontSize["sm"],
    lineHeight: lineHeight["sm"],
    paddingBottom: spacing["1"],
    paddingLeft: spacing["2"],
    paddingRight: spacing["2"],
    paddingTop: spacing["1"],

    "--origin": {
      ":is([data-placement=top])": "translateY(4px)",
      ":is([data-placement=bottom])": "translateY(-4px)",
      ":is([data-placement=left])": "translateX(4px)",
      ":is([data-placement=right])": "translateX(-4px)",
    },
    opacity: {
      default: 1,
      ":is([data-entering])": 0,
      ":is([data-exiting])": 0,
    },
    transform: {
      ":is([data-entering])": "scale(0.9) var(--origin)",
      ":is([data-exiting])": "scale(0.9) var(--origin)",
    },
    transitionDuration: "150ms",
    transitionProperty: "transform, opacity",
  },
  caret: {
    display: "flex",
    fill: slateInverted.bg1,
  },
  arrow: {
    transform: {
      [":is([data-placement=bottom] *)"]: "rotate(180deg)",
      [":is([data-placement=top] *)"]: "rotate(0deg)",
      [":is([data-placement=left] *)"]: "rotate(90deg)",
      [":is([data-placement=right] *)"]: "rotate(-90deg)",
    },
  },
});

interface TooltipProps
  extends
    TooltipTriggerComponentProps,
    Pick<AriaTooltipProps, "crossOffset" | "placement" | "shouldFlip"> {
  text: string;
  children: React.ReactNode;
}

export const Tooltip = ({
  text,
  children,
  crossOffset,
  placement,
  shouldFlip,
  ...triggerProps
}: TooltipProps) => {
  return (
    <TooltipTrigger {...triggerProps}>
      {children}

      <AriaTooltip
        {...stylex.props(tooltipStyle.content)}
        crossOffset={crossOffset}
        containerPadding={8}
        placement={placement}
        offset={8}
        shouldFlip={shouldFlip}
      >
        <OverlayArrow {...stylex.props(tooltipStyle.caret)}>
          <svg
            width={8}
            height={8}
            viewBox="0 0 8 8"
            {...stylex.props(tooltipStyle.arrow)}
          >
            <path d="M0 0 L4 4 L8 0" />
          </svg>
        </OverlayArrow>
        {text}
      </AriaTooltip>
    </TooltipTrigger>
  );
};
