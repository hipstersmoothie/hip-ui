import type { SwitchProps as AriaSwitchProps } from "react-aria-components";

import * as stylex from "@stylexjs/stylex";
import { Switch as AriaSwitch } from "react-aria-components";

import type { StyleXComponentProps } from "../theme/types";

import { useHaptics } from "../haptics";
import { animationDuration } from "../theme/animations.stylex";
import { primaryColor, uiColor } from "../theme/color.stylex";
import { mediaQueries } from "../theme/media-queries.stylex";
import { radius } from "../theme/radius.stylex";
import { shadow } from "../theme/shadow.stylex";
import { spacing } from "../theme/spacing.stylex";
import { typeramp } from "../theme/typography.stylex";

const styles = stylex.create({
  labelLeft: {
    flexGrow: 1,
    minWidth: 0,
  },
  wrapper: {
    gap: spacing["3"],
    alignItems: "center",
    display: "flex",
  },
  indicator: {
    borderRadius: radius.full,
    backgroundColor: {
      default: uiColor.component3,
      ":is([data-selected=true] *)": primaryColor.solid1,
    },
    boxShadow: "inset 0 0 6px 1px rgba(0, 0, 0, 0.13)",
    flexShrink: 0,
    opacity: {
      default: 1,
      ":is([data-disabled=true] *)": 0.5,
    },
    position: "relative",
    transitionDuration: animationDuration.fast,
    transitionProperty: {
      default: "background-color",
      [mediaQueries.reducedMotion]: "none",
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

interface SwitchBaseProps extends StyleXComponentProps<
  Omit<AriaSwitchProps, "children">
> {
  labelVariant?: "left" | "right";
}

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

export function Switch({
  children,
  style,
  onChange,
  labelVariant = "right",
  ...props
}: SwitchProps) {
  const { trigger } = useHaptics();

  const handleChange = (isSelected: boolean) => {
    trigger("selection");
    onChange?.(isSelected);
  };

  return (
    <AriaSwitch
      {...props}
      onChange={handleChange}
      {...stylex.props(styles.wrapper, style)}
    >
      {children != null && labelVariant === "left" && (
        <div {...stylex.props(typeramp.label, styles.labelLeft)}>
          {children}
        </div>
      )}
      <div {...stylex.props(styles.indicator)}>
        <div {...stylex.props(styles.thumb)} />
      </div>
      {children != null && labelVariant === "right" && (
        <div {...stylex.props(typeramp.label)}>{children}</div>
      )}
    </AriaSwitch>
  );
}
