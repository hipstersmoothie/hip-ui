import * as stylex from "@stylexjs/stylex";
import {
  SwitchProps as AriaSwitchProps,
  Switch as AriaSwitch,
} from "react-aria-components";

import { animationDuration } from "../theme/animations.stylex";
import { radius } from "../theme/radius.stylex";
import { primaryColor, uiColor } from "../theme/semantic-color.stylex";
import { shadow } from "../theme/shadow.stylex";
import { spacing } from "../theme/spacing.stylex";
import { StyleXComponentProps } from "../theme/types";
import { typeramp } from "../theme/typography.stylex";

const styles = stylex.create({
  wrapper: {
    gap: spacing["2"],
    alignItems: "center",
    display: "flex",
  },
  indicator: {
    borderRadius: radius.full,
    backgroundColor: {
      default: uiColor.component3,
      ":is([data-selected=true] *)": primaryColor.solid1,
    },
    boxShadow: "inset 0 0 8px 1px rgba(0, 0, 0, 0.2)",
    opacity: {
      default: 1,
      ":is([data-disabled=true] *)": 0.5,
    },
    position: "relative",
    transitionDuration: animationDuration.fast,
    transitionProperty: {
      default: "background-color",
      "@media (prefers-reduced-motion: reduce)": "none",
    },
    transitionTimingFunction: "ease-in-out",
    height: spacing["6"],
    width: spacing["10"],
  },
  thumb: {
    borderRadius: radius.full,
    backgroundColor: uiColor.bgSubtle,
    boxShadow: shadow.lg,
    content: "''",
    position: "absolute",
    transform: {
      default: "translateY(-50%)",
      ":is([data-selected=true] *)": "translate(100%, -50%)",
    },
    transitionDuration: animationDuration.fast,
    transitionProperty: "transform",
    transitionTimingFunction: "ease-in-out",
    height: spacing["4"],
    left: 0,
    marginLeft: spacing["1"],
    marginRight: spacing["1"],
    top: "50%",
    width: spacing["4"],
  },
});

interface SwitchBaseProps
  extends StyleXComponentProps<Omit<AriaSwitchProps, "children">> {}

interface SwitchWithChildrenProps extends SwitchBaseProps {
  children: React.ReactNode;
}

interface SwitchWithAriaLabelProps extends SwitchBaseProps {
  "aria-label": string;
  children?: never;
}

interface SwitchWithAriaLabelledbyProps extends SwitchBaseProps {
  "aria-labelledby": string;
  children?: never;
}

export type SwitchProps =
  | SwitchWithChildrenProps
  | SwitchWithAriaLabelProps
  | SwitchWithAriaLabelledbyProps;

export function Switch({ children, style, ...props }: SwitchProps) {
  return (
    <AriaSwitch {...props} {...stylex.props(styles.wrapper, style)}>
      <div {...stylex.props(styles.indicator)}>
        <div {...stylex.props(styles.thumb)} />
      </div>
      {children != null && (
        <div {...stylex.props(typeramp.label)}>{children}</div>
      )}
    </AriaSwitch>
  );
}
