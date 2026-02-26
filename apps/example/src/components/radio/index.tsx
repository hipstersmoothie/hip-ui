import type {
  RadioGroupProps as AriaRadioGroupProps,
  RadioProps as AriaRadioProps,
  ValidationResult,
} from "react-aria-components";

import * as stylex from "@stylexjs/stylex";
import {
  Radio as AriaRadio,
  RadioGroup as AriaRadioGroup,
  FieldError,
  SelectionIndicator,
} from "react-aria-components";

import type { Size } from "../types";

import { Flex } from "../flex";
import { Description, Label } from "../label";
import { animationDuration } from "../theme/animations.stylex";
import { radius } from "../theme/radius.stylex";
import { gray, primary } from "../theme/semantic-color.stylex";
import { spacing } from "../theme/spacing.stylex";
import { fontFamily, fontSize, lineHeight } from "../theme/typography.stylex";

const scaleIn = stylex.keyframes({
  "0%": {
    transform: "translate(-50%, -50%) scale(0)",
  },
  "100%": {
    transform: "translate(-50%, -50%) scale(1)",
  },
});

const styles = stylex.create({
  wrapper: {
    gap: spacing["2.5"],
    alignItems: {
      default: "center",
      ":has(p)": "flex-start",
    },
    display: "flex",

    fontFamily: fontFamily["sans"],
    fontSize: fontSize["sm"],
    lineHeight: lineHeight["sm"],
    opacity: { ":is([data-disabled])": 0.5 },
  },
  radio: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",

    borderRadius: radius["full"],
    borderWidth: 2,
    position: "relative",
    height: spacing["4"],
    width: spacing["4"],

    transitionDuration: animationDuration.fast,
    transitionProperty: "background-color, border-color, color",
    transitionTimingFunction: "ease-in-out",
  },
  selectionIndicator: {
    borderRadius: radius["full"],
    backgroundColor: "white",
    height: spacing["2"],
    width: spacing["2"],

    position: "absolute",
    transform: "translate(-50%, -50%)",
    left: "50%",
    top: "50%",

    animationDuration: animationDuration.fast,
    animationFillMode: "forwards",
    animationName: scaleIn,
    animationTimingFunction: "ease-in-out",
  },
  checked: {
    color: "white",
  },
  group: {
    gap: spacing["3"],
    display: "flex",
    flexDirection: "column",
  },
});

interface RadioGroupProps extends Omit<
  AriaRadioGroupProps,
  "children" | "style" | "className"
> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
  children?: React.ReactNode;
  label?: React.ReactNode;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  size?: Size;
}

export function RadioGroup({
  label,
  description,
  errorMessage,
  children,
  size,
  style,
  ...props
}: RadioGroupProps) {
  return (
    <AriaRadioGroup {...props} {...stylex.props(styles.group, style)}>
      {label !== null && <Label size={size}>{label}</Label>}
      <Flex direction="column" gap="2">
        {children}
      </Flex>
      {description && <Description size={size}>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </AriaRadioGroup>
  );
}

export interface RadioProps extends Omit<
  AriaRadioProps,
  "className" | "style" | "children"
> {
  style?: stylex.StyleXStyles | stylex.StyleXStyles[];
  children?: React.ReactNode;
}

export function Radio({ children, style, ...props }: RadioProps) {
  return (
    <AriaRadio {...props} {...stylex.props(styles.wrapper, style)}>
      {({ isSelected, isDisabled }) => (
        <>
          <div
            {...stylex.props(
              styles.radio,
              isDisabled
                ? [gray.bgSolid, gray.border, styles.checked]
                : isSelected
                  ? [primary.bgSolid, primary.borderInteractive, styles.checked]
                  : [gray.borderInteractive],
            )}
          >
            <SelectionIndicator {...stylex.props(styles.selectionIndicator)} />
          </div>
          <Flex direction="column" gap="1">
            {children}
          </Flex>
        </>
      )}
    </AriaRadio>
  );
}
