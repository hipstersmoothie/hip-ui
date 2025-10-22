import * as stylex from "@stylexjs/stylex";
import {
  SwitchProps as AriaSwitchProps,
  Switch as AriaSwitch,
} from "react-aria-components";

import { radius } from "../theme/radius.stylex";
import { primaryColor, uiColor } from "../theme/semantic-color.stylex";
import { shadow } from "../theme/shadow.stylex";
import { spacing } from "../theme/spacing.stylex";
import { typeramp } from "../theme/typography.stylex";

const styles = stylex.create({
  wrapper: {
    alignItems: "center",
    display: "flex",
    gap: spacing["2"],
  },
  indicator: {
    backgroundColor: {
      default: uiColor.component3,
      ":is([data-selected=true] *)": primaryColor.solid1,
    },
    borderRadius: radius.full,
    height: spacing["6"],
    opacity: {
      default: 1,
      ":is([data-disabled=true] *)": 0.5,
    },
    position: "relative",
    transitionDuration: "100ms",
    transitionProperty: "background-color",
    transitionTimingFunction: "ease-in-out",
    width: spacing["10"],
  },
  thumb: {
    backgroundColor: uiColor.bgSubtle,
    borderRadius: radius.full,
    boxShadow: shadow.lg,
    content: "''",
    height: spacing["4"],
    left: 0,
    marginLeft: spacing["1"],
    marginRight: spacing["1"],
    position: "absolute",
    top: "50%",
    transform: {
      default: "translateY(-50%)",
      ":is([data-selected=true] *)": "translate(100%, -50%)",
    },
    transitionDuration: "100ms",
    transitionProperty: "transform",
    transitionTimingFunction: "ease-in-out",
    width: spacing["4"],
  },
});

export interface SwitchProps
  extends Omit<AriaSwitchProps, "children" | "style" | "className"> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
  children: React.ReactNode;
}

export function Switch({ children, style, ...props }: SwitchProps) {
  return (
    <AriaSwitch {...props} {...stylex.props(styles.wrapper, style)}>
      <div {...stylex.props(styles.indicator)}>
        <div {...stylex.props(styles.thumb)} />
      </div>
      <div {...stylex.props(typeramp.label)}>{children}</div>
    </AriaSwitch>
  );
}
